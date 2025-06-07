"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Loader2 } from 'lucide-react'
import Link from "next/link"
import { createEvent } from "@/lib/actions/events.actions"
import { toast } from "@/hooks/use-toast"
import { RichTextEditor } from "@/components/ui/rich-text-editor"
import { ImageUpload } from "@/components/ui/image-upload"

export function CreateEvent() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [featuredImage, setFeaturedImage] = useState<string>("")
  const [description, setDescription] = useState("")

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
      const result = await createEvent(formData)

      if (result.success) {
        toast({
          title: "Success",
          description: "Event created successfully",
        })
        router.push("/events")
      } else {
        setError(result.error || "Failed to create event")
      }
    } catch (err: any) {
      setError(err.message || "An error occurred while creating the event.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/events">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Event</h1>
          <p className="text-muted-foreground">Add a new event to the university calendar</p>
        </div>
      </div>

      <Card className="max-w-5xl">
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
          <CardDescription>Fill in the information for your new event</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input id="title" name="title" placeholder="Enter event title" required />
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
                onChange={setDescription} 
                placeholder="Write your event description here..." 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" type="date" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" placeholder="Enter event location" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organizer">Organizer</Label>
              <Input id="organizer" name="organizer" placeholder="Enter organizer name" required />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="flex space-x-2">
              <Button type="submit" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? "Creating..." : "Create Event"}
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link href="/events">Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
