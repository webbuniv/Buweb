"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Calendar, MapPin, Search, Trash2, Edit } from "lucide-react"
import { getEvents, deleteEvent, type Events } from "@/lib/actions/events.actions"
import { toast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function EventsList() {
  const [events, setEvents] = useState<Events[]>([])
  const [loading, setLoading] = useState(true)
  const [searchText, setSearchText] = useState("")
  const [deleting, setDeleting] = useState<string | null>(null)

  const fetchEvents = async () => {
    try {
      setLoading(true)
      const eventsData = await getEvents({ searchText })
      setEvents(eventsData)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch events",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [searchText])

  const handleDelete = async (id: string) => {
    try {
      setDeleting(id)
      const result = await deleteEvent(id)
      if (result.success) {
        toast({
          title: "Success",
          description: "Event deleted successfully",
        })
        fetchEvents()
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to delete event",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete event",
        variant: "destructive",
      })
    } finally {
      setDeleting(null)
    }
  }

  const getEventStatus = (eventDate: string) => {
    const today = new Date()
    const eventDateObj = new Date(eventDate)
    return eventDateObj > today ? "upcoming" : "completed"
  }

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

      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search events..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.length === 0 ? (
            <Card className="col-span-full">
              <CardContent className="flex items-center justify-center h-32">
                <p className="text-muted-foreground">No events found</p>
              </CardContent>
            </Card>
          ) : (
            events.map((event) => (
              <Card key={event.$id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <Badge variant={getEventStatus(event.date) === "upcoming" ? "default" : "secondary"}>
                      {getEventStatus(event.date)}
                    </Badge>
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
                  <div className="pt-2 flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/events/${event.$id}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/events/${event.$id}/edit`}>
                        <Edit className="h-3 w-3" />
                      </Link>
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" disabled={deleting === event.$id}>
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the event.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(event.$id)}>Delete</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  )
}
