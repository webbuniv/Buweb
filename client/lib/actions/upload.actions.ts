"use server"

import { createAdminClient } from "@/lib/appwrite"
import { appwriteConfig } from "@/lib/appwrite/config"
import { ID } from "node-appwrite"

interface UploadResponse {
  success?: boolean
  fileId?: string
  fileUrl?: string
  error?: string
}

/**
 * Uploads a file to Appwrite storage and returns the file ID
 * Use this for storing file references in database fields
 */
export async function uploadFile(formData: FormData): Promise<UploadResponse> {
  try {
    const { storage } = await createAdminClient()
    const file = formData.get("file") as File

    if (!file || file.size === 0) {
      return {
        error: "No file provided",
      }
    }

    const response = await storage.createFile(appwriteConfig.bucketId, ID.unique(), file)

    return {
      success: true,
      fileId: response.$id,
    }
  } catch (error: any) {
    console.error("Error uploading file:", error)
    return {
      error: error.message || "Failed to upload file",
    }
  }
}

/**
 * Uploads a file to Appwrite storage and returns the complete file URL
 * Use this for embedding images directly in rich text editor content
 */
export async function uploadImageForEditor(formData: FormData): Promise<UploadResponse> {
  try {
    const { storage } = await createAdminClient()
    const file = formData.get("file") as File

    if (!file || file.size === 0) {
      return {
        error: "No file provided",
      }
    }

    const response = await storage.createFile(appwriteConfig.bucketId, ID.unique(), file)
    const fileId = response.$id
    const fileUrl = `https://cloud.appwrite.io/v1/storage/buckets/${appwriteConfig.bucketId}/files/${fileId}/view?project=${appwriteConfig.projectId}`

    return {
      success: true,
      fileId: fileId,
      fileUrl: fileUrl,
    }
  } catch (error: any) {
    console.error("Error uploading image for editor:", error)
    return {
      error: error.message || "Failed to upload image",
    }
  }
}
