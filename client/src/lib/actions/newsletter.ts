"use server"

import { createAdminClient } from "@/lib/appwrite"
import { appwriteConfig } from "@/lib/appwrite/config"

export async function getNewsletterSubscribers() {
  const { databases } = await createAdminClient()
  try {
    const subscribers = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.newsletterCollectionId,
    )
    return subscribers.documents.map((subscriber) => subscriber.email)
  } catch (error) {
    console.error("Failed to fetch newsletter subscribers:", error)
    return []
  }
}

