'use server';

import { createAdminClient } from '@/lib/appwrite';
import { InputFile } from 'node-appwrite/file';
import { appwriteConfig } from '@/lib/appwrite/config';
import { ID } from 'node-appwrite';
import { constructFileUrl, parseStringify } from '@/lib/utils';

const handleError = (error: unknown, message: string) => {
  console.error(message, error);
  throw new Error(message);
};

export const CreateNews = async ({
  fileBuffer,
  fileName,
  title,
  category,
  author,
  date,
  summary,
  content,
}: {
  fileBuffer: ArrayBuffer;
  fileName: string;
  title: string;
  category: string;
  author: string;
  date: string;
  summary: string;
  content: string;
}) => {
  const { storage, databases } = await createAdminClient();
  try {
    // Convert fileBuffer into InputFile for Appwrite
    const inputFile = InputFile.fromBuffer(Buffer.from(fileBuffer), fileName);
    const bucketFile = await storage.createFile(appwriteConfig.bucketId, ID.unique(), inputFile);

    // Create the news document in Appwrite
    const news = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.newsCollectionId,
      ID.unique(),
      {
        title,
        file: constructFileUrl(bucketFile.$id),
        category,
        author,
        date,
        summary,
        content,
      }
    );
    return parseStringify(news);
  } catch (error) {
    handleError(error, 'Failed to create news document');
  }
};
