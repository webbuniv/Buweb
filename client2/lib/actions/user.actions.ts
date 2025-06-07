"use server"

import { createAdminClient, createSessionClient } from "@/lib/appwrite"
import { appwriteConfig } from "@/lib/appwrite/config"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Helper function to parse and stringify objects for server actions
export const parseStringify = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

export const getUserByEmail = async (email: string) => {
  const { databases } = createAdminClient();

  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("email", [email])]
  );

  return result.total > 0 ? result.documents[0] : null;
};

const handleError = (error: unknown, message: string) => {
  console.error(message, error);
  throw new Error(message);
};

export const sendEmailOTP = async ({ email }: { email: string }) => {
  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailToken(ID.unique(), email);
    return session.userId;
  } catch (error) {
    handleError(error, "Failed to send email OTP");
    return null;
  }
};

export const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  const existingUser = await getUserByEmail(email);

  const accountId = await sendEmailOTP({ email });
  if (!accountId) throw new Error("Failed to send an OTP");

  if (!existingUser) {
    const { databases } = await createAdminClient();

    await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        fullName,
        email,
        accountId,
      }
    );
  }

  return parseStringify({ accountId });
};

export const verifySecret = async ({
  accountId,
  password,
}: {
  accountId: string;
  password: string;
}) => {
  try {
    const { account } = await createAdminClient();

    const session = await account.createSession(accountId, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return parseStringify({ sessionId: session.$id });
  } catch (error) {
    handleError(error, "Failed to verify OTP");
    return null;
  }
};

export const getCurrentUser = async () => {
  try {
    const { databases, account } = await createSessionClient();

    const result = await account.get();

    const user = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal("accountId", result.$id)]
    );

    if (user.total <= 0) return null;

    return parseStringify(user.documents[0]);
} catch (error)
{
  console.log(error)
  return null;
}
}

export const signOutUser = async () => {
  try {
    const { account } = await createSessionClient()
    await account.deleteSession("current")
    ;(await cookies()).delete("appwrite-session")
  } catch (error) {
    handleError(error, "Failed to sign out user")
  } finally {
    redirect("/signin")
  }
}

export const signInUser = async ({ email }: { email: string }) => {
  try {
    const existingUser = await getUserByEmail(email)
    if (existingUser) {
      await sendEmailOTP({ email })
      return parseStringify({ accountId: existingUser.accountId })
    }

    return parseStringify({ accountId: null, error: "User not found" })
  } catch (error) {
    handleError(error, "Failed to sign in user")
    return null
  }
}

export const getUsers = async () => {
  const { databases } = await createAdminClient()

  const result = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.usersCollectionId)

  return result.documents
}
