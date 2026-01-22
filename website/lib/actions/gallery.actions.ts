"use server"
import { createAdminClient } from '@/lib/appwrite';
import { appwriteConfig } from '@/lib/appwrite/config';
import { ImageItem } from '@/lib/types';
import { Query } from 'node-appwrite';

const handleError = (error: unknown, message: string) => {
  console.error(message, error)
  throw new Error(message)
}

export const getAllImages = async (cursor?: string) => {
  const { databases } = await createAdminClient()
  try {
    const queries = [Query.limit(15)]
    
    // If cursor is provided, fetch documents after that cursor
    if (cursor) {
      queries.push(Query.cursorAfter(cursor))
    }
    
    const images = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.galleryCollectionId,
        queries
    )

    const mappedImages = images.documents.map((image) => ({
        id: image.$id || "undefined",
        category:image.category || "undefined",
        imageUrl:image.imageUrl || "undefined",
        date: image.$createdAt || "undefined",
        UploadedBy: image.UploadedBy ||"Anonymous",
        likes:image.likes||0,
        description:image.description||""
    })) as ImageItem[]

    return {
      images: mappedImages,
      hasMore: images.documents.length === 15,
      lastCursor: images.documents.length > 0 ? images.documents[images.documents.length - 1].$id : null
    }

  } catch (error) {
    handleError(error, "Failed to fetch Images")
    return { images: [], hasMore: false, lastCursor: null }
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