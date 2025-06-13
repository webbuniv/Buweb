"use server"

import { createAdminClient } from "@/lib/appwrite"
import { appwriteConfig } from "@/lib/appwrite/config"
import { ID } from "node-appwrite"

interface UploadResponse {
  success?: boolean
  fileId?: string
  error?: string
}

/**
 * Uploads a file to Appwrite storage and returns ONLY the file ID
 * Use this for storing file references in database fields
 */
export async function uploadFile(formData: FormData): Promise<UploadResponse> {
  try {
    const { storage } = await createAdminClient()
    const file = formData.get("file") as File

    if (!file || file.size === 0) {
      return {
        success: false,
        error: "No file provided",
      }
    }

    const response = await storage.createFile(appwriteConfig.bucketId, ID.unique(), file)

    // Return ONLY the file ID, not the URL
    return {
      success: true,
      fileId: response.$id,
    }
  } catch (error: any) {
    console.error("Error uploading file:", error)
    return {
      success: false,
      error: error.message || "Failed to upload file",
    }
  }
}
