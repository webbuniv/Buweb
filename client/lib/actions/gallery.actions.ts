"use server"

import { createAdminClient } from "@/lib/appwrite"
import { appwriteConfig } from "@/lib/appwrite/config"
import { ID, Query } from "node-appwrite"
import { revalidatePath } from "next/cache"
import { getCurrentUser } from "@/lib/actions/user.actions"
import { redirect } from "next/navigation"

// Define types
export interface ImageItem {
  category: string
  imageUrl: string
  id: string
  date: string
  UploadedBy?: string 
}

export interface GetEventsProps {
  searchText?: string
  sort?: string
  limit?: number
}

export interface Events {
  $id: string
  title: string
  file?: string
  location: string
  description: string
  organizer: string
  date: string
  $createdAt: number
}

interface CreateGalleryResponse {
  success?: boolean
  error?: string
}

const handleError = (error: unknown, message: string) => {
  console.error(message, error)
  throw new Error(message)
}

export async function saveImageWithCategory(formData: FormData): Promise<CreateGalleryResponse> {
  const { databases } = await createAdminClient()
  const currentUser = await getCurrentUser()

  try {

    await databases.createDocument(appwriteConfig.databaseId, appwriteConfig.galleryCollectionId, ID.unique(), {
      category: formData.get("category") as string,
        imageUrl: formData.get("imageUrl") as string, 
        UploadedBy: currentUser?.fullName || "Anonymous",
        description: formData.get("description") as string,
    })
    revalidatePath("/gallery/create")
    return { success: true }
  } catch (error: any) {
    const errorMessage = error.response?.message || "Failed to create event document"
    return { error: errorMessage }
  }
}

export const getAllImages = async () => {
  const { databases } = await createAdminClient()
  try {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
      redirect("/signin")
    }

    const images = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.galleryCollectionId)
    return images.documents.map((image) => ({
        id: image.$id,
        category:image.category,
        imageUrl:image.imageUrl,
        date: image.$createdAt,
        UploadedBy: image.UploadedBy ||"Anonymous", 
    })) as ImageItem[]

  } catch (error) {
    handleError(error, "Failed to fetch Images")
    return []
  }
}

export const getImageCategories = async () => {
  const { databases } = await createAdminClient()
  try {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
      redirect("/signin")
    }

    const cartegories = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.galleryCategoriesId)
//     console.log("Fetched categories:", cartegories.documents)
    return cartegories.documents.map((cart) => ({
        category: cart.category || "", 
    }))
    

  } catch (error) {
    handleError(error, "Failed to fetch Categories")
    return []
  }
}

export const getImageById = async (id: string): Promise<ImageItem | null> => {
  const { databases } = await createAdminClient()
  try {
    const image = await databases.getDocument(appwriteConfig.databaseId, appwriteConfig.galleryCollectionId, id)

    return {
      category: image.category,
      imageUrl: image.imageUrl || "", // Ensure imageUrl is always a string
     
    } as ImageItem
  } catch (error) {
    handleError(error, "Failed to fetch Event")
    return null
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

