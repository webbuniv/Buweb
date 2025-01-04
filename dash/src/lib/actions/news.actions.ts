'use server';

import { createAdminClient, createSessionClient } from '@/lib/appwrite';
import { InputFile } from 'node-appwrite/file';
import { appwriteConfig } from '@/lib/appwrite/config';
import { ID, Models, Query } from 'node-appwrite';
import { constructFileUrl, getFileType, parseStringify } from '@/lib/utils';
import { revalidatePath } from 'next/cache';
import { getCurrentUser } from '@/lib/actions/user.action';

const handleError = (error: unknown, message: string) => {
    console.log(error, message);
    throw error;
};

export const CreateNews = async ({
    photo,
    title,
    category,
    author,
    date,
    summary,
    content,
    path,
  }: CreateNewsProps) => {
    const { storage, databases } = await createAdminClient();
  
    try {
      const inputFile = InputFile.fromBuffer(photo, photo.name);
  
      const bucketFile = await storage.createFile(
        appwriteConfig.bucketId,
        ID.unique(),
        inputFile
      );

      const news = await databases
        .createDocument(
          appwriteConfig.databaseId,
          appwriteConfig.newsCollectionId,
          ID.unique(),
          {
            title,
            photo: constructFileUrl(bucketFile.$id),
            category,
            author,
            date,
            summary,
            content,
          }
        )
        .catch(async (error: unknown) => {
          await storage.deleteFile(appwriteConfig.bucketId, bucketFile.$id);
          handleError(error, 'Failed to create file document');
        });
  
      revalidatePath(path);
      return parseStringify(news);
    } catch (error) {
      handleError(error, 'Failed to upload file');
    }
  };