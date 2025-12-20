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
      ...(searchText ? [Query.search("name", searchText)] : []),
      ...(limit ? [Query.limit(limit)] : []),
      Query.orderDesc(sort.split("-")[0]),
    ];

    const news = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.newsCollectionId,
      queries
    );
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

  const { databases } = await createAdminClient();

  const newsToDelete = getNewsById(id);

  if (!newsToDelete) {
    return { error: 'News not found' };
  }

  try {
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
  const file = formData.get('file') as File | null;

  try {
    if (file && file.size > 0 && file.name !== 'undefined') {
      try {
        const response = await storage.createFile(appwriteConfig.bucketId, ID.unique(), file);
        fileID = response.$id;
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
