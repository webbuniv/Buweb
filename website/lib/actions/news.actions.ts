'use server';

import { createAdminClient } from '@/lib/appwrite';
import { appwriteConfig } from '@/lib/appwrite/config';
import { ID, Query} from 'node-appwrite';
import { revalidatePath } from 'next/cache';
import { getCurrentUser } from '@/lib/actions/user.action';
import { redirect } from 'next/navigation';
import { NewsItem } from '@/types/types';

const handleError = (error: unknown, message: string) => {
  console.error(message, error);
  throw new Error(message);
};

// File validation constants
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const DEFAULT_LIMIT = 10;


interface FormDataType {
  get: (key: string) => string | File | null;
}

interface CreateNewsResponse {
  success?: boolean;
  error?: string;
}

export async function CreateNews(previousState: any, formData: FormDataType): Promise<CreateNewsResponse> {
  const { storage, databases } = await createAdminClient();

  let fileID: string | undefined;
  const file = formData.get('file') as File | null;

  try{

  if (file && file.size > 0 && file.name !== 'undefined') {
      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        return { error: `File size exceeds ${MAX_FILE_SIZE / (1024 * 1024)}MB limit` };
      }
      // Validate file type
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        return { error: 'Invalid file type. Allowed: JPEG, PNG, WebP, GIF' };
      }
      try {
        const response = await storage.createFile(appwriteConfig.bucketId, ID.unique(), file);
        fileID = response.$id;
      } catch (error) {
        return {
          error: 'Error uploading file',
        };
      }
    } else {
      console.log('No file provided or file is invalid');
    }

  const news = await databases.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.newsCollectionId,
    ID.unique(),
    {
      title: formData.get('title') as string,
      file: fileID,
      category: formData.get('category') as string,
      author: formData.get('author') as string,
      date: formData.get('date') as string,
      summary: formData.get('summary') as string,
      content: formData.get('content') as string,
    }

  );

    revalidatePath('/news');
    return { success: true };
  } catch (error: any) {
    const errorMessage = error.response?.message || "Failed to create news document";
    return { error: errorMessage };
  }
}


export const getNews = async  ({ 
  searchText = '',
  sort = "date-desc", 
  limit,
 }: GetNewsProps): Promise<News[]> => {
  const { databases } = await createAdminClient();
  try {
    const queries = [
      ...(searchText ? [Query.search("title", searchText)] : []),
      Query.limit(limit || DEFAULT_LIMIT),
      Query.orderDesc(sort.split("-")[0]),
      Query.equal("approved", true),
    ];

    const news = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.newsCollectionId,
      queries
    );
  
        // const patch = async (newsId: string)=>{
        //         await databases.updateDocument(
        //                 appwriteConfig.databaseId,
        //                 appwriteConfig.newsCollectionId,
        //                 newsId,
        //                 {approved:true}
        // );
        // }
        // news.documents.forEach( async (newsItem) => {
        //         if(newsItem.approved !== "true"){
        //                 await patch(newsItem.$id);
        //         }
        // });
        
//     console.log("Fetched news: ",news.documents);
    return news.documents.map((news) => ({
      $id: news.$id,
      title: news.title || 'undefined',
      file: news.file || 'undefined',
      category: news.category || 'undefined',
      date: news.date || 'undefined',
      content: news.content || 'undefined',
      summary: news.summary || 'undefined',
      author: news.author || 'undefined',
    }))
    
  } catch (error) {
    handleError(error, "Failed to fetch News");
    return [];
  }
}

export const getNewsById = async (id: string): Promise<NewsItem | null> => {
  const { databases } = await createAdminClient();
  try {
    const news = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.newsCollectionId,
      id
    )

    return {
      id: news.$id,
      title: news.title || 'undefined',
      file: news.file || 'undefined',
      category: news.category || 'undefined',
      date: news.date || 'undefined',
      author: news.author || 'undefined',
      content: news.content || 'undefined',
      summary: news.summary || 'undefined',
    } as NewsItem;
  } catch (error) {
    handleError(error, "Failed to fetch News");
    return null; // Explicitly return null if an error occurs
  }
};

export const deleteNews = async (id: string) => {
  const currentUser = await getCurrentUser();
  
  if (!currentUser) {
    redirect('/signin');
  }

  const { databases, storage } = await createAdminClient();

  const newsToDelete = await getNewsById(id);

  if (!newsToDelete) {
    return { error: 'News not found' };
  }

  try {
    // Delete associated file from storage if it exists
    if (newsToDelete.file && newsToDelete.file !== 'undefined') {
      try {
        await storage.deleteFile(appwriteConfig.bucketId, newsToDelete.file);
      } catch (fileError) {
        console.error('Failed to delete associated file:', fileError);
        // Continue with document deletion even if file deletion fails
      }
    }

    await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.newsCollectionId,
      id
    );
    revalidatePath('/news');
    return { success: true };
  } catch (error) {
    handleError(error, 'Failed to delete news');
    return { error: 'Failed to delete news' };
  }
};

export async function updateNews(
  id: string,
  formData: FormDataType
): Promise<CreateNewsResponse> {
  const { storage, databases } = await createAdminClient();

  let fileID: string | undefined;
  let oldFileId: string | undefined;
  const file = formData.get('file') as File | null;

  try {
    // Get existing news to retrieve old file ID
    const existingNews = await getNewsById(id);
    if (existingNews && existingNews.file && existingNews.file !== 'undefined') {
      oldFileId = existingNews.file;
    }

    if (file && file.size > 0 && file.name !== 'undefined') {
      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        return { error: `File size exceeds ${MAX_FILE_SIZE / (1024 * 1024)}MB limit` };
      }
      // Validate file type
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        return { error: 'Invalid file type. Allowed: JPEG, PNG, WebP, GIF' };
      }
      try {
        const response = await storage.createFile(appwriteConfig.bucketId, ID.unique(), file);
        fileID = response.$id;

        // Delete old file after successful upload of new file
        if (oldFileId) {
          try {
            await storage.deleteFile(appwriteConfig.bucketId, oldFileId);
          } catch (deleteError) {
            console.error('Failed to delete old file:', deleteError);
            // Continue even if old file deletion fails
          }
        }
      } catch (error) {
        return {
          error: 'Error uploading file',
        };
      }
    } else {
      console.log('No new file provided or file is invalid. Retaining the existing file.');
    }

    // Build the updated data object
    const updatedData: Record<string, any> = {
      title: formData.get('title') as string,
      category: formData.get('category') as string,
      author: formData.get('author') as string,
      date: formData.get('date') as string,
      summary: formData.get('summary') as string,
      content: formData.get('content') as string,
    };

    if (fileID) {
      updatedData.file = fileID;
    }

    await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.newsCollectionId,
      id,
      updatedData
    );

    revalidatePath('/news');
    return { success: true };
  } catch (error: any) {
    const errorMessage = error.response?.message || 'Failed to update news document';
    return { error: errorMessage };
  }
}
