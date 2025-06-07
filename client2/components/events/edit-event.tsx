"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Loader2, Upload } from "lucide-react"
import Link from "next/link"
import { getEventById, updateEvent, type EventItem } from "@/lib/actions/events.actions"
import { toast } from "@/hooks/use-toast"
import { RichTextEditor } from "@/components/ui/rich-text-editor"
import { uploadFile } from "@/lib/actions/upload.actions"
import { getFileUrl } from "@/lib/utils"

interface EditEventProps {
  eventId: string
}

export function EditEvent({ eventId }: EditEventProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [description, setDescription] = useState("")
  const [event, setEvent] = useState<EventItem | null>(null)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventById(eventId)
        setEvent(data)
        if (data?.description) {
          setDescription(data.description)
        }
      } catch (error) {
        console.error("Failed to fetch event:", error)
        setError("Failed to load event data")
      } finally {
        setInitialLoading(false)
      }
    }

    fetchEvent()
  }, [eventId])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    formData.set("description", description) // Add rich text description

    if (selectedFile) {
      formData.append("file", selectedFile)
    }

    try {
      const result = await updateEvent(eventId, formData)

      if (result.success) {
        toast({
          title: "Success",
          description: "Event updated successfully",
        })
        router.push(`/events/${eventId}`)
      } else {
        setError(result.error || "Failed to update event")
      }
    } catch (err: any) {
      setError(err.message || "An error occurred while updating the event.")
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleImageUpload = async (file: File): Promise<string> => {
    try {
      const result = await uploadFile(file)
      if (result.success && result.fileId) {
        return result.fileId
      }
      throw new Error("Failed to upload image")
    } catch (error) {
      console.error("Image upload error:", error)
      throw error
    }
  }

  if (initialLoading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/events">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Event Not Found</h1>
            <p className="text-muted-foreground">The requested event could not be found.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/events/${eventId}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Event</h1>
          <p className="text-muted-foreground">Update event information</p>
        </div>
      </div>

      <Card className="max-w-5xl">
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
          <CardDescription>Update the information for this event</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input id="title" name="title" defaultValue={event.title} placeholder="Enter event title" required />
            </div>

            <div className="space-y-2">
              <RichTextEditor
                label="Description"
                initialValue={event.description}
                onChange={setDescription}
                onImageUpload={handleImageUpload}
                height={300}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" type="date" defaultValue={event.date} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                defaultValue={event.location}
                placeholder="Enter event location"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organizer">Organizer</Label>
              <Input
                id="organizer"
                name="organizer"
                defaultValue={event.organizer}
                placeholder="Enter organizer name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Event Image</Label>
              {event.file && !selectedFile && (
                <div className="mb-2">
                  <img
                    src={getFileUrl(event.file) || "/placeholder.svg"}
                    alt="Current event image"
                    className="h-32 object-cover rounded-md"
                  />
                  <p className="text-sm text-muted-foreground mt-1">Current image</p>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Input id="file" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                <Button type="button" variant="outline" onClick={() => document.getElementById("file")?.click()}>
                  <Upload className="mr-2 h-4 w-4" />
                  {event.file ? "Change Image" : "Add Image"}
                </Button>
                {selectedFile && <span className="text-sm text-muted-foreground">{selectedFile.name}</span>}
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="flex space-x-2">
              <Button type="submit" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? "Updating..." : "Update Event"}
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link href={`/events/${eventId}`}>Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
