"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Loader2, Upload } from "lucide-react"
import Link from "next/link"
import { createEvent } from "@/lib/actions/events.actions"
import { toast } from "@/hooks/use-toast"

export function CreateEvent() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    if (selectedFile) {
      formData.append("file", selectedFile)
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
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

      <Card className="max-w-2xl">
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
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" placeholder="Enter event description" rows={4} required />
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

            <div className="space-y-2">
              <Label htmlFor="file">Event Image (Optional)</Label>
              <div className="flex items-center space-x-2">
                <Input id="file" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                <Button type="button" variant="outline" onClick={() => document.getElementById("file")?.click()}>
                  <Upload className="mr-2 h-4 w-4" />
                  Choose Image
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
