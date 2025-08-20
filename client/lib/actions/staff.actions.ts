"use server"

import { createAdminClient } from "@/lib/appwrite"
import { appwriteConfig } from "@/lib/appwrite/config"
import { ID, Query } from "node-appwrite"
import { revalidatePath } from "next/cache"
import { getCurrentUser } from "@/lib/actions/user.actions"
import { redirect } from "next/navigation"

const handleError = (error: unknown, message: string) => {
  console.error(message, error)
  throw new Error(message)
}

interface StaffResponse {
  success?: boolean
  error?: string
}

export async function CreateNewStaff(formData: FormData): Promise<StaffResponse> {
  const { databases } = await createAdminClient()
  const currentUser = await getCurrentUser()

  try {

    await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.staffCollectionId,
        ID.unique(),
        {
      name: formData.get("name") as string,
      department: formData.get("department") as string,
      school: formData.get("school") as string,
      role: formData.get("role") as string,
      qualification: formData.get("qualification") as string,
      photoUrl: formData.get("photoUrl") as string,
      isDean: formData.get("isDean") === "true" ? true : false,
      isHOD: formData.get("isHOD") === "true" ? true : false,
      UploadedBy: currentUser?.fullName || "Anonymous",
    })
    revalidatePath("/staff/create")
    return { success: true }
  } catch (error: any) {
    const errorMessage = error.response?.message || "Failed to create event document"
    return { error: errorMessage }
  }
}


export const deleteImage = async (id: string) => {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect("/signin")
  }

  const { databases } = await createAdminClient()

  try {
    await databases.deleteDocument(appwriteConfig.databaseId, appwriteConfig.galleryCollectionId, id)
    revalidatePath("/gallery/create")
    return { success: true }
  } catch (error) {
    handleError(error, "Failed to delete event")
    return { error: "Failed to delete event" }
  }
}
