"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Loader2 } from 'lucide-react'
import Link from "next/link"
import { getEventById, updateEvent, type EventItem } from "@/lib/actions/events.actions"
import { toast } from "@/hooks/use-toast"
import { RichTextEditor } from "@/components/ui/rich-text-editor"
import { ImageUpload } from "@/components/ui/image-upload"

interface EditEventProps {
  eventId: string
}

export function EditEvent({ eventId }: EditEventProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [featuredImage, setFeaturedImage] = useState<string>("")
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
        if (data?.file) {
          const fileUrl = `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${data.file}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`;
          setFeaturedImage(fileUrl)
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
    
    if (featuredImage) {
      formData.set("imageUrl", featuredImage)
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
              <Label>Event Image</Label>
              <ImageUpload 
                value={featuredImage} 
                onChange={setFeaturedImage}
                onError={(error) => {
                  setError(error.message);
                }}
              />
            </div>

            <div className="space-y-2">
              <RichTextEditor 
                label="Description" 
                initialValue={event.description} 
                onChange={setDescription} 
                placeholder="Write your event description here..." 
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
