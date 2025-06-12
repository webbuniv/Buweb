"use server"

import { createAdminClient } from "@/lib/appwrite"
import { appwriteConfig } from "@/lib/appwrite/config"
import { ID } from "node-appwrite"

interface UploadResult {
  success: boolean
  fileId?: string
  error?: string
}

export async function uploadFile(file: File): Promise<UploadResult> {
  try {
    const { storage } = await createAdminClient()

    if (!file || file.size === 0) {
      return {
        success: false,
        error: "No file provided",
      }
    }

    const response = await storage.createFile(appwriteConfig.bucketId, ID.unique(), file)

    return {
      success: true,
      fileId: response.$id,
    }
  } catch (error: any) {
    console.error("File upload error:", error)
    return {
      success: false,
      error: error.message || "Failed to upload file",
    }
  }
}
