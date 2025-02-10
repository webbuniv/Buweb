'use server';

import { createAdminClient } from '@/lib/appwrite';
import { appwriteConfig } from '@/lib/appwrite/config';
import { ID, Query} from 'node-appwrite';
import { parseStringify } from '../utils';
import { getUserByEmail } from './user.action';
import { cookies } from "next/headers";

const handleError = (error: unknown, message: string) => {
  console.error(message, error);
  throw new Error(message);
};

const verifyEmail ="http://localhost:3000/verify";

export const sendEmailUrl = async ({ email }: { email: string }) => {
  const { account } = await createAdminClient();

  try {
    const session = await account.createMagicURLToken(ID.unique(), email, 'http://localhost:3000/verify');

    return session.userId;
  } catch (error) {
    handleError(error, "Failed to send email OTP");
  }
};

export const CreateNewsLetter = async ({  
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
    
        const response = await databases.createDocument(
          appwriteConfig.databaseId,
          appwriteConfig.usersCollectionId,
          ID.unique(),
          {
            fullName,
            email,
            accountId,
          },
        );

        if (!response) throw new Error("Failed to create user");
        const content = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Our Newsletter!</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td align="center" style="padding: 0;">
                        <table role="presentation" style="width: 600px; border-collapse: collapse; text-align: center; background-color: #ffffff;">
                            <tr>
                                <td style="padding: 0;">
                                    <img src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Newsletter Header" style="width: 100%; max-width: 600px; height: auto;">
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 30px 30px 20px 30px;">
                                    <h1 style="margin: 0; color: #333333; font-size: 28px;">Welcome, ${fullName}!</h1>
                                    <p style="margin: 20px 0; color: #666666; font-size: 16px; line-height: 1.5;">Thank you for subscribing to our newsletter. We're thrilled to have you join our community!</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 30px 30px 30px;">
                                    <h2 style="margin: 0 0 20px 0; color: #333333; font-size: 22px;">What to expect:</h2>
                                    <ul style="margin: 0; padding: 0 0 0 20px; color: #666666; font-size: 16px; line-height: 1.5; text-align: left;">
                                        <li>Exclusive content</li>
                                        <li>Latest industry news</li>
                                        <li>Special offers and promotions</li>
                                        <li>Expert tips and insights</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 30px 30px 30px;">
                                    <a href="#" style="background-color: #4CAF50; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 5px; font-weight: bold; display: inline-block;">Explore Our Website</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 30px; background-color: #333333; color: #ffffff;">
                                    <p style="margin: 0; font-size: 14px;">Follow us on social media:</p>
                                    <p style="margin: 10px 0 0 0;">
                                        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 5px;">Facebook</a> |
                                        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 5px;">Twitter</a> |
                                        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 5px;">Instagram</a>
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        `;

        await sendEmailNotifircation(response.$id, content, "Welcome to Our Newsletter!");

        return parseStringify({ accountId });
    }
    return parseStringify({ accountId: existingUser.accountId });
}

export const sendEmailNotifircation = async (
    userId: string,
    content: string,
    subject: string
  ) => {
    try {
        const { messaging } = await createAdminClient();
      const message = await messaging.createEmail(
        ID.unique(),
        subject,
        content,
        ["news-letter"],
        [userId],
        [],
        [],
        [],
        [],
        false,
        true
      );
      return parseStringify(message);
    } catch (error) {
      console.error("An error occurred while sending email:", error);
    }
};

export const verifyEmailSecret = async () => {
    const { account } = await createAdminClient();
    const promise = account.createVerification('http://localhost:3000/verify');
    return promise;
}

export const sendEmailOTP = async ({ email }: { email: string }) => {
    const { account } = await createAdminClient();
  
    try {
      const session = await account.createEmailToken(ID.unique(), email);
  
      return session.userId;
    } catch (error) {
      handleError(error, "Failed to send email OTP");
    }
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
        secure: true,
      });
  
      return parseStringify({ sessionId: session.$id });
    } catch (error) {
      handleError(error, "Failed to verify OTP");
    }
  };