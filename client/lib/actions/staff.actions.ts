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

export interface staffItem {
        name:  string,
        department: string,
        school: string,
        role: string,
        qualification: string,
        photoUrl: string,
        isDean: boolean,
        isHOD: boolean,
        UploadedBy: string,
        id: string,
        date: string,
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

export const getAllStaff = async () => {
  const { databases } = await createAdminClient()
  try {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
      redirect("/signin")
    }

    const staff = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.staffCollectionId)
    return staff.documents.map((staff) => ({
        id: staff.$id,
        name: staff.name,
        photoUrl: staff.photoUrl,
        department: staff.department,
        school: staff.school,
        role: staff.role,
        qualification: staff.qualification,
        isDean: staff.isDean,
        isHOD: staff.isHOD,
        date: staff.$createdAt,
        UploadedBy: staff.UploadedBy ||"Anonymous", 
    })) as staffItem[]

  } catch (error) {
    handleError(error, "Failed to fetch Images")
    return []
  }
}


export const deleteStaff = async (id: string) => {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect("/signin")
  }

  const { databases } = await createAdminClient()

  try {
    await databases.deleteDocument(
        appwriteConfig.databaseId,
         appwriteConfig.staffCollectionId,
          id)
    revalidatePath("/staff/create")
    return { success: true }
  } catch (error) {
    handleError(error, "Failed to delete event")
    return { error: "Failed to delete event" }
  }
}
export const getStaffById = async (id: string): Promise<staffItem | null> => {
  const { databases } = await createAdminClient()
  try {
    const staff = await databases.getDocument(appwriteConfig.databaseId, appwriteConfig.staffCollectionId, id)

    return {
      id: staff.$id,
      name: staff.name,
      photoUrl: staff.photoUrl,
      department: staff.department,
      school: staff.school,
      role: staff.role,
      qualification: staff.qualification,
      isDean: staff.isDean,
      isHOD: staff.isHOD,
      date: staff.$createdAt,
      UploadedBy: staff.UploadedBy || "Anonymous",
    } as staffItem
  } catch (error) {
    handleError(error, "Failed to fetch Staff")
    return null
  }
}

export async function updateStaff(id: string, formData: FormData): Promise<StaffResponse> {
  const { storage, databases } = await createAdminClient()
  const currentUser = await getCurrentUser()

  let fileID: string | undefined
  const file = formData.get("file") as File | null

  try {
    if (file && file.size > 0 && file.name !== "undefined") {
      try {
        const response = await storage.createFile(appwriteConfig.bucketId, ID.unique(), file)
        fileID = response.$id
      } catch (error) {
        return {
          error: "Error uploading file",
        }
      }
    }

    // Build the updated data object
    const updatedData: Record<string, any> = {
      name: formData.get("name") as string,
      department: formData.get("department") as string,
      school: formData.get("school") as string,
      role: formData.get("role") as string,
      qualification: formData.get("qualification") as string,
      photoUrl: formData.get("photoUrl") as string,
      isDean: formData.get("isDean") === "true" ? true : false,
      isHOD: formData.get("isHOD") === "true" ? true : false,
      UploadedBy: currentUser?.fullName || "Anonymous",
    }

    if (fileID) {
      updatedData.file = fileID
    }

    await databases.updateDocument(appwriteConfig.databaseId, appwriteConfig.staffCollectionId, id, updatedData)

    revalidatePath("/staff")
    return { success: true }
  } catch (error: any) {
    const errorMessage = error.response?.message || "Failed to update staff"
    return { error: errorMessage }
  }
}