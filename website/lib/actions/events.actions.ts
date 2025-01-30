'use server';

import { createAdminClient } from '@/lib/appwrite';
import { appwriteConfig } from '@/lib/appwrite/config';
import { Query } from 'node-appwrite';
import { EventItem } from '@/types/types';

const handleError = (error: unknown, message: string) => {
  console.error(message, error);
  throw new Error(message);
};


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
      $createdAt: new Date(event.$createdAt).getTime(),
    }))
    
  } catch (error) {
    handleError(error, "Failed to fetch News");
    return [];
  }
}

export const getEventsById = async (id: string): Promise<EventItem | null> => {
  const { databases } = await createAdminClient();
  try {
    const event = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.eventsCollectionId,
      id
    );

    return {
      id: event.$id,
      $id: event.$id,
      title: event.title,
      organizer: event.organizer,
      location: event.location,
      description: event.description,
      file: event.file,
      date: event.date,
    } as EventItem;

  } catch (error) {
    handleError(error, "Failed to fetch News");
    return null;
  }
};

