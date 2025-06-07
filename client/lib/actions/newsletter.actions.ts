"use server"

import { createAdminClient } from "@/lib/appwrite"
import { appwriteConfig } from "@/lib/appwrite/config"
import { ID, Query } from "node-appwrite"
import { revalidatePath } from "next/cache"

interface SubscribeNewsletterResponse {
  success?: boolean
  error?: string
}

export async function subscribeNewsletter(formData: FormData): Promise<SubscribeNewsletterResponse> {
  const { databases } = await createAdminClient()
  const email = formData.get("email") as string

  if (!email) {
    return { error: "Email is required" }
  }

  try {
    // Check if email already exists
    const existingSubscriber = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.newsletterCollectionId,
      [Query.equal("email", [email])],
    )

    if (existingSubscriber.total > 0) {
      return { error: "Email already subscribed" }
    }

    // Create new subscriber
    await databases.createDocument(appwriteConfig.databaseId, appwriteConfig.newsletterCollectionId, ID.unique(), {
      email,
      subscribed_at: new Date().toISOString(),
    })

    revalidatePath("/")
    return { success: true }
  } catch (error: any) {
    const errorMessage = error.response?.message || "Failed to subscribe to newsletter"
    return { error: errorMessage }
  }
}

export async function unsubscribeNewsletter(email: string): Promise<SubscribeNewsletterResponse> {
  const { databases } = await createAdminClient()

  try {
    const subscribers = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.newsletterCollectionId,
      [Query.equal("email", [email])],
    )

    if (subscribers.total === 0) {
      return { error: "Email not found in subscribers list" }
    }

    const subscriberId = subscribers.documents[0].$id

    await databases.deleteDocument(appwriteConfig.databaseId, appwriteConfig.newsletterCollectionId, subscriberId)

    return { success: true }
  } catch (error: any) {
    const errorMessage = error.response?.message || "Failed to unsubscribe from newsletter"
    return { error: errorMessage }
  }
}

export async function getNewsletterSubscribers(): Promise<string[]> {
  const { databases } = await createAdminClient()

  try {
    const subscribers = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.newsletterCollectionId)

    return subscribers.documents.map((subscriber) => subscriber.email)
  } catch (error) {
    console.error("Failed to fetch newsletter subscribers:", error)
    return []
  }
}
