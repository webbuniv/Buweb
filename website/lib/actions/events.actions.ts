'use server';

import { createAdminClient } from '@/lib/appwrite';
import { appwriteConfig } from '@/lib/appwrite/config';
import { ID, Query} from 'node-appwrite';
import { revalidatePath } from 'next/cache';
import { getCurrentUser } from '@/lib/actions/user.action';
import { redirect } from 'next/navigation';

const handleError = (error: unknown, message: string) => {
  console.error(message, error);
  throw new Error(message);
};


interface FormDataType {
  get: (key: string) => string | File | null;
}

interface CreateEventResponse {
  success?: boolean;
  error?: string;
}

export const getEvents = async  ({ 
  searchText = '',
  sort = "$createdAt-desc", 
  limit,
 }: GetEventsProps): Promise<Events[]> => {
  const { databases } = await createAdminClient();
  try {
    const queries = [
      ...(searchText ? [Query.search("name", searchText)] : []),
      ...(limit ? [Query.limit(limit)] : []),
      Query.orderDesc(sort.split("-")[0]),
    ];
    const currentUser = await getCurrentUser();
  
    if (!currentUser) {
      redirect('/signin');
    }

    const event = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.eventsCollectionId,
      queries
    );

    return event.documents.map((event) => ({
      $id: event.$id,
      title: event.title || 'undefined',
      file: event.file || 'undefined',
      location: event.location || 'undefined',
      description: event.content || 'undefined',
      organizer: event.organizer || 'undefined',
      date: event.date || 'undefined',
    }))
    
  } catch (error) {
    handleError(error, "Failed to fetch News");
    return [];
  }
}

export const getEventsById = async (id:string) => {
  const { databases } = await createAdminClient();
  try {
    const event = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.eventsCollectionId,
      id
    );

    return event;
  } catch (error) {
    handleError(error, "Failed to fetch News");

  }
};

