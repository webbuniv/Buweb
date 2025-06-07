"use server"

import { createAdminClient } from "@/lib/appwrite"
import { appwriteConfig } from "@/lib/appwrite/config"
import { ID, Query } from "node-appwrite"
import { revalidatePath } from "next/cache"
import { getCurrentUser } from "@/lib/actions/user.actions"
import { redirect } from "next/navigation"

// Define types
export interface TeamItem {
  id: string
  $id?: string
  name: string
  file?: string
  position: string
  bio: string
  quote: string
}

export interface GetTeamProps {
  searchText?: string
  sort?: string
  limit?: number
}

export interface Team {
  $id: string
  name: string
  file?: string
  position: string
  bio: string
  quote: string
  $createdAt: number
}

interface CreateTeamResponse {
  success?: boolean
  error?: string
}

const handleError = (error: unknown, message: string) => {
  console.error(message, error)
  throw new Error(message)
}

export async function createTeam(formData: FormData): Promise<CreateTeamResponse> {
  const { storage, databases } = await createAdminClient()

  let fileID: string | undefined
  const file = formData.get("file") as File | null

  try {
    if (file && file.size > 0 && file.name !== "undefined") {
      try {
        const response = await storage.createFile(appwriteConfig.bucketId, ID.unique(), file)
        fileID = response.$id
      } catch (error) {
        return {
          error: "Error uploading file",
        }
      }
    }

    await databases.createDocument(appwriteConfig.databaseId, appwriteConfig.teamsCollectionId, ID.unique(), {
      name: formData.get("name") as string,
      file: fileID,
      position: formData.get("position") as string,
      bio: formData.get("bio") as string,
      quote: formData.get("quote") as string,
    })

    revalidatePath("/teams")
    return { success: true }
  } catch (error: any) {
    const errorMessage = error.response?.message || "Failed to create team member document"
    return { error: errorMessage }
  }
}

export const getTeams = async ({
  searchText = "",
  sort = "$createdAt-desc",
  limit,
}: GetTeamProps = {}): Promise<Team[]> => {
  const { databases } = await createAdminClient()
  try {
    const queries = [
      ...(searchText ? [Query.search("name", searchText)] : []),
      ...(limit ? [Query.limit(limit)] : []),
      Query.orderDesc(sort.split("-")[0]),
    ]
    const currentUser = await getCurrentUser()

    if (!currentUser) {
      redirect("/signin")
    }

    const teams = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.teamsCollectionId, queries)

    return teams.documents.map((team) => ({
      $id: team.$id,
      name: team.name || "undefined",
      file: team.file || undefined,
      position: team.position || "undefined",
      bio: team.bio || "undefined",
      quote: team.quote || "undefined",
      $createdAt: new Date(team.$createdAt).getTime(),
    }))
  } catch (error) {
    handleError(error, "Failed to fetch Teams")
    return []
  }
}

export const getTeamById = async (id: string): Promise<TeamItem | null> => {
  const { databases } = await createAdminClient()
  try {
    const team = await databases.getDocument(appwriteConfig.databaseId, appwriteConfig.teamsCollectionId, id)

    return {
      id: team.$id,
      $id: team.$id,
      name: team.name,
      position: team.position,
      bio: team.bio,
      quote: team.quote,
      file: team.file,
    } as TeamItem
  } catch (error) {
    handleError(error, "Failed to fetch Team Member")
    return null
  }
}

export const deleteTeam = async (id: string) => {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect("/signin")
  }

  const { databases } = await createAdminClient()

  try {
    await databases.deleteDocument(appwriteConfig.databaseId, appwriteConfig.teamsCollectionId, id)
    revalidatePath("/teams")
    return { success: true }
  } catch (error) {
    handleError(error, "Failed to delete team member")
    return { error: "Failed to delete team member" }
  }
}

export async function updateTeam(id: string, formData: FormData): Promise<CreateTeamResponse> {
  const { storage, databases } = await createAdminClient()

  let fileID: string | undefined
  const file = formData.get("file") as File | null

  try {
    if (file && file.size > 0 && file.name !== "undefined") {
      try {
        const response = await storage.createFile(appwriteConfig.bucketId, ID.unique(), file)
        fileID = response.$id
      } catch (error) {
        return {
          error: "Error uploading file",
        }
      }
    }

    // Build the updated data object
    const updatedData: Record<string, any> = {
      name: formData.get("name") as string,
      position: formData.get("position") as string,
      bio: formData.get("bio") as string,
      quote: formData.get("quote") as string,
    }

    if (fileID) {
      updatedData.file = fileID
    }

    await databases.updateDocument(appwriteConfig.databaseId, appwriteConfig.teamsCollectionId, id, updatedData)

    revalidatePath("/teams")
    return { success: true }
  } catch (error: any) {
    const errorMessage = error.response?.message || "Failed to update team member document"
    return { error: errorMessage }
  }
}
