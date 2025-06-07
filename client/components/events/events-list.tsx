"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Calendar, MapPin, User, LayoutGrid, LayoutList } from "lucide-react"
import Link from "next/link"
import { getEvents, type Events } from "@/lib/actions/events.actions"
import { getFileUrl, formatDate } from "@/lib/utils"
import { DataTable } from "@/components/ui/data-table"

export function EventsList() {
  const [events, setEvents] = useState<Events[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid")

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents({})
        setEvents(data)
      } catch (error) {
        console.error("Failed to fetch events:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const filteredEvents = events.filter((item: Events) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))

  const getEventStatus = (eventDate: string) => {
    const today = new Date()
    const eventDateObj = new Date(eventDate)
    return eventDateObj > today ? "upcoming" : "completed"
  }

  const tableColumns = [
    {
      key: "title",
      header: "Title",
      cell: (item: Events) => <div className="font-medium">{item.title}</div>,
    },
    {
      key: "date",
      header: "Date",
      cell: (item: Events) => formatDate(item.date),
    },
    {
      key: "location",
      header: "Location",
      cell: (item: Events) => item.location,
    },
    {
      key: "organizer",
      header: "Organizer",
      cell: (item: Events) => item.organizer,
    },
    {
      key: "status",
      header: "Status",
      cell: (item: Events) => (
        <Badge variant={getEventStatus(item.date) === "upcoming" ? "default" : "secondary"}>
          {getEventStatus(item.date)}
        </Badge>
      ),
    },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search events..."
            className="pl-8 w-full sm:w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">View:</span>
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="icon" onClick={() => setViewMode("grid")}>
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "table" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("table")}
          >
            <LayoutList className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length === 0 ? (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">No events found.</p>
            </div>
          ) : (
            filteredEvents.map((item) => (
              <Link key={item.$id} href={`/events/${item.$id}`} className="block">
                <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                  {item.file && (
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={getFileUrl(item.file) || "/placeholder.svg"}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <Badge variant={getEventStatus(item.date) === "upcoming" ? "default" : "secondary"}>
                        {getEventStatus(item.date)}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        {formatDate(item.date)}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-3 w-3" />
                        {item.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="mr-1 h-3 w-3" />
                        {item.organizer}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>
      ) : (
        <DataTable
          data={filteredEvents.map((item) => ({ ...item, id: item.$id }))}
          columns={tableColumns}
          onRowClick={(item) => {
            window.location.href = `/events/${item.id}`
          }}
        />
      )}
    </div>
  )
}
