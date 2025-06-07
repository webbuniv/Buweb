"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Calendar, MapPin } from "lucide-react"

const mockEvents = [
  {
    id: "1",
    title: "University Open Day",
    description: "Join us for an exciting open day showcasing our programs",
    date: "2024-02-15",
    location: "Main Campus",
    status: "upcoming",
  },
  {
    id: "2",
    title: "Research Conference",
    description: "Annual research conference featuring latest findings",
    date: "2024-02-20",
    location: "Conference Hall",
    status: "upcoming",
  },
  {
    id: "3",
    title: "Graduation Ceremony",
    description: "Celebrating our graduating class of 2024",
    date: "2024-01-30",
    location: "Auditorium",
    status: "completed",
  },
]

export function EventsList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Events</h1>
          <p className="text-muted-foreground">Manage university events and activities</p>
        </div>
        <Button asChild>
          <Link href="/events/create">
            <Plus className="mr-2 h-4 w-4" />
            Create Event
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockEvents.map((event) => (
          <Card key={event.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{event.title}</CardTitle>
                <Badge variant={event.status === "upcoming" ? "default" : "secondary"}>{event.status}</Badge>
              </div>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                {new Date(event.date).toLocaleDateString()}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                {event.location}
              </div>
              <div className="pt-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/events/${event.id}`}>View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
