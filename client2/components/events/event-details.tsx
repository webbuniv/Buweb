"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, User, Edit } from "lucide-react"
import Link from "next/link"
import { getEventById, type EventItem } from "@/lib/actions/events.actions"
import { getFileUrl } from "@/lib/utils"

interface EventDetailsProps {
  eventId: string
}

export function EventDetails({ eventId }: EventDetailsProps) {
  const [event, setEvent] = useState<EventItem | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventById(eventId)
        setEvent(data)
      } catch (error) {
        console.error("Failed to fetch event:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvent()
  }, [eventId])

  if (loading) {
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

  const getEventStatus = (eventDate: string) => {
    const today = new Date()
    const eventDateObj = new Date(eventDate)
    return eventDateObj > today ? "upcoming" : "completed"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/events">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">{event.title}</h1>
          <p className="text-muted-foreground">Event Details</p>
        </div>
        <Button asChild>
          <Link href={`/events/${eventId}/edit`}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Event
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Event Information</CardTitle>
              <Badge variant={getEventStatus(event.date) === "upcoming" ? "default" : "secondary"}>
                {getEventStatus(event.date)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {event.file && (
              <div className="mb-6">
                <img
                  src={getFileUrl(event.file) || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{event.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{event.location}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Organizer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{event.organizer}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
