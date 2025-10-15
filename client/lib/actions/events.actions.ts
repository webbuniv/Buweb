"use server"

import { createAdminClient } from "@/lib/appwrite"
import { appwriteConfig } from "@/lib/appwrite/config"
import { ID, Query } from "node-appwrite"
import { revalidatePath } from "next/cache"
import { getCurrentUser } from "@/lib/actions/user.actions"
import { redirect } from "next/navigation"

// Define types
export interface EventItem {
  id: string
  $id?: string
  title: string
  file?: string
  organizer: string
  location: string
  description: string
  date: string
}

export interface GetEventsProps {
  searchText?: string
  sort?: string
  limit?: number
}

export interface Events {
  $id: string
  title: string
  file?: string
  location: string
  description: string
  organizer: string
  date: string
  $createdAt: number
}

interface CreateEventResponse {
  success?: boolean
  error?: string
}

const handleError = (error: unknown, message: string) => {
  console.error(message, error)
  throw new Error(message)
}

export async function createEvent(formData: FormData): Promise<CreateEventResponse> {
  const { databases } = await createAdminClient()


  try {

    await databases.createDocument(appwriteConfig.databaseId, appwriteConfig.eventsCollectionId, ID.unique(), {
      title: formData.get("title") as string,
      file: formData.get("file") as string,
      organizer: formData.get("organizer") as string,
      location: formData.get("location") as string,
      description: formData.get("description") as string,
      dateDue: formData.get("date") as string,
        date: formData.get("date") as string,
    })

    revalidatePath("/events")
    return { success: true }
  } catch (error: any) {
        console.log("error :",error)
    const errorMessage = error.response?.message || "Failed to create event document"
    return { error: errorMessage }
  }
}

export const getEvents = async ({
  searchText = "",
  sort = "$createdAt-desc",
  limit,
}: GetEventsProps = {}): Promise<Events[]> => {
  const { databases } = await createAdminClient()
  try {
    const queries = [
      ...(searchText ? [Query.search("title", searchText)] : []),
      ...(limit ? [Query.limit(limit)] : []),
      Query.orderDesc(sort.split("-")[0]),
    ]
    const currentUser = await getCurrentUser()

    if (!currentUser) {
      redirect("/signin")
    }

    const events = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.eventsCollectionId, queries)

    return events.documents.map((event) => ({
      $id: event.$id,
      title: event.title || "undefined",
      file: event.file || undefined,
      location: event.location || "undefined",
      description: event.description || "undefined",
      organizer: event.organizer || "undefined",
      date: event.date || "undefined",
      $createdAt: new Date(event.$createdAt).getTime(),
    }))
  } catch (error) {
    handleError(error, "Failed to fetch Events")
    return []
  }
}

export const getEventById = async (id: string): Promise<EventItem | null> => {
  const { databases } = await createAdminClient()
  try {
    const event = await databases.getDocument(appwriteConfig.databaseId, appwriteConfig.eventsCollectionId, id)

    return {
      id: event.$id,
      $id: event.$id,
      title: event.title,
      organizer: event.organizer,
      location: event.location,
      description: event.description,
      file: event.file,
      date: event.date,
    } as EventItem
  } catch (error) {
    handleError(error, "Failed to fetch Event")
    return null
  }
}

export const deleteEvent = async (id: string) => {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect("/signin")
  }

  const { databases } = await createAdminClient()

  try {
    await databases.deleteDocument(appwriteConfig.databaseId, appwriteConfig.eventsCollectionId, id)
    revalidatePath("/events")
    return { success: true }
  } catch (error) {
    handleError(error, "Failed to delete event")
    return { error: "Failed to delete event" }
  }
}

export async function updateEvent(id: string, formData: FormData): Promise<CreateEventResponse> {
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
      title: formData.get("title") as string,
      location: formData.get("location") as string,
      organizer: formData.get("organizer") as string,
      description: formData.get("description") as string,
      date: formData.get("date") as string,
    }

    if (fileID) {
      updatedData.file = fileID
    }

    await databases.updateDocument(appwriteConfig.databaseId, appwriteConfig.eventsCollectionId, id, updatedData)

    revalidatePath("/events")
    return { success: true }
  } catch (error: any) {
    const errorMessage = error.response?.message || "Failed to update event document"
    return { error: errorMessage }
  }
}
