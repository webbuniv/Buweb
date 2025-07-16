"use server"
import { createAdminClient } from '@/lib/appwrite';
import { appwriteConfig } from '@/lib/appwrite/config';
import { ImageItem } from '@/lib/types';

const handleError = (error: unknown, message: string) => {
  console.error(message, error)
  throw new Error(message)
}

export const getAllImages = async () => {
  const { databases } = await createAdminClient()
  try {
    const images = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.galleryCollectionId)

    return images.documents.map((image) => ({
        id: image.$id || "undefined",
        category:image.category || "undefined",
        imageUrl:image.imageUrl || "undefined",
        date: image.$createdAt || "undefined",
        UploadedBy: image.UploadedBy ||"Anonymous",
        likes:image.likes||0,
        description:image.description||""
    })) as ImageItem[]

  } catch (error) {
    handleError(error, "Failed to fetch Images")
    return []
  }
}

export const updateLikes = async (id: string) => {
  const { databases } = await createAdminClient()
  try {

        const doc = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.galleryCollectionId,
      id
    );
    const newLikes = (doc.likes ?? 0) + 1;
    
    const NewImage = await databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.galleryCollectionId,
        id,
        { likes: newLikes }
)
return NewImage
  } catch (error) {
    handleError(error, "Failed to fetch Image")
    return null
  }
}