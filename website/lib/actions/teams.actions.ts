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

interface CreateTeamResponse {
  success?: boolean;
  error?: string;
}

export async function CreateTeam(previousState: any, formData: FormDataType): Promise<CreateTeamResponse> {
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

  const team = await databases.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.teamsCollectionId,
    ID.unique(),
    {
      name: formData.get('name') as string,
      file: fileID,
      position: formData.get('position') as string,
      bio: formData.get('bio') as string,
      quote: formData.get('qoute') as string,
    }

  );

    revalidatePath('/teams');
    return { success: true };
  } catch (error: any) {
    const errorMessage = error.response?.message || "Failed to create news document";
    return { error: errorMessage };
  }
}

export const getTeams = async  ({ 
  searchText = '',
  sort = "$createdAt-desc", 
  limit,
 }: GetTeamProps): Promise<Team[]> => {
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

    const team = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.teamsCollectionId,
      queries
    );

    return team.documents.map((team) => ({
      $id: team.$id,
      name: team.name || 'undefined',
      file: team.file || 'undefined',
      position: team.position || 'undefined',
      bio: team.bio || 'undefined',
      quote: team.qoute || 'undefined',
      $createdAt: new Date(team.$createdAt).getTime(),
    }))
    
  } catch (error) {
    handleError(error, "Failed to fetch News");
    return [];
  }
}

export const getTeamById = async (id: string): Promise<TeamItem | null> => {
  const { databases } = await createAdminClient();
  try {
    const team = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.teamsCollectionId,
      id
    );

    // Map the response to EventItem if needed
    return {
      id: team.$id,
      $id: team.$id,
      name: team.name,
      position: team.position,
      bio: team.bio,
      qoute: team.qoute,
      file: team.file,
    } as TeamItem;
  } catch (error) {
    handleError(error, "Failed to fetch News");
    return null; // Return `null` in case of an error
  }
};


export const deleteTeam = async (id: string) => {
  const currentUser = await getCurrentUser();
  
  if (!currentUser) {
    redirect('/signin');
  }

  const { databases } = await createAdminClient();

  const eventToDelete = getTeamById(id);

  if (!eventToDelete) {
    return { error: 'News not found' };
  }

  try {
    await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.teamsCollectionId,
      id
    );
    revalidatePath('/teams');
    return { success: true };
  } catch (error) {
    handleError(error, 'Failed to delete news');
    return { error: 'Failed to delete news' };
  }
};

export async function updateTeam(
  id: string,
  formData: FormDataType
): Promise<CreateTeamResponse> {
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
      name: formData.get('name') as string,
      position: formData.get('position') as string,
      bio: formData.get('bio') as string,
      quote: formData.get('quote') as string,
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

    revalidatePath('/teams');
    return { success: true };
  } catch (error: any) {
    const errorMessage = error.response?.message || 'Failed to update news document';
    return { error: errorMessage };
  }
}
