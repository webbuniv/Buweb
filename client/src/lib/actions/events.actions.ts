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

export async function CreateEvent(previousState: any, formData: FormDataType): Promise<CreateEventResponse> {
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
    appwriteConfig.eventsCollectionId,
    ID.unique(),
    {
      title: formData.get('title') as string,
      file: fileID,
      organizer: formData.get('organizer') as string,
      location: formData.get('location') as string,
      description: formData.get('description') as string,
      date: formData.get('date') as string,
    }

  );

    revalidatePath('/events');
    return { success: true };
  } catch (error: any) {
    const errorMessage = error.response?.message || "Failed to create news document";
    return { error: errorMessage };
  }
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

export const getEventsById = async (id: string): Promise<EventItem | null> => {
  const { databases } = await createAdminClient();
  try {
    const event = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.eventsCollectionId,
      id
    );

    // Map the response to EventItem if needed
    return {
      id: event.$id,
      title: event.title,
      organizer: event.organizer,
      location: event.location,
      description: event.description,
      file: event.file,
      date: event.date,
    } as EventItem; // Ensure it matches the `EventItem` interface
  } catch (error) {
    handleError(error, "Failed to fetch News");
    return null; // Return `null` in case of an error
  }
};


export const deleteEvents = async (id: string) => {
  const currentUser = await getCurrentUser();
  
  if (!currentUser) {
    redirect('/signin');
  }

  const { databases } = await createAdminClient();

  const eventToDelete = getEventsById(id);

  if (!eventToDelete) {
    return { error: 'News not found' };
  }

  try {
    await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.eventsCollectionId,
      id
    );
    revalidatePath('/events');
    return { success: true };
  } catch (error) {
    handleError(error, 'Failed to delete news');
    return { error: 'Failed to delete news' };
  }
};

export async function updateEvents(
  id: string,
  formData: FormDataType
): Promise<CreateEventResponse> {
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
      location: formData.get('location') as string,
      organizer: formData.get('organizer') as string,
      description: formData.get('description') as string,
      date: formData.get('date') as string,
    };

    if (fileID) {
      updatedData.file = fileID;
    }

    await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.eventsCollectionId,
      id,
      updatedData
    );

    revalidatePath('/events');
    return { success: true };
  } catch (error: any) {
    const errorMessage = error.response?.message || 'Failed to update news document';
    return { error: errorMessage };
  }
}
