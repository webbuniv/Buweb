"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Calendar, Trash2, User, LayoutGrid, LayoutList } from "lucide-react"
import Link from "next/link"
import { deleteImage, getAllImages, type ImageItem } from "@/lib/actions/gallery.actions"
import Image from "next/image"
import { DataTable } from "@/components/ui/data-table"
import {  formatDate } from "@/lib/utils"

export function GalleryList() {
  const [images, setImages] = useState<ImageItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid")
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const images = await getAllImages()
        setImages(images)
      } catch (error) {
        console.error("Failed to fetch events:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const Delete = async (id:string)=>{
        images.map((item) => {
                if (item.id === id) {
                setImages((prevImages) => prevImages.filter((image) => image.id !== id))
                }
        })
        return deleteImage(id).then((response) => {
          if (response.success) {
            setDeleted(true)
            setTimeout(() => {
                setDeleted(false)
        },3000)
          } else {
            setDeleted(false)
          }
        }).catch((error) => {
          console.error("Error deleting image:", error)
        })
        
  }
  useEffect(() => {
        
  })

  const filteredEvents = images.filter((item: ImageItem) => item.category.toLowerCase().includes(searchQuery.toLowerCase()))

  const getEventStatus = (eventDate: string) => {
    const today = new Date()
    const eventDateObj = new Date(eventDate)
    return eventDateObj > today ? "upcoming" : "completed"
  }

  const tableColumns = [
    {
      key: "title",
      header: "Title",
      cell: (item: ImageItem) => <div className="font-medium">{item.category}</div>,
    },
    {
      key: "date",
      header: "Date",
      cell: (item: ImageItem) => formatDate(item.date),
    },
    
    {
      key: "Uploaded_By",
      header: "Uploaded By",
      cell: (item: ImageItem) => item.UploadedBy,
    },
    {
      key: "status",
      header: "Status",
      cell: (item: ImageItem) => (
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
          <h1 className="text-3xl font-bold tracking-tight">Gallery</h1>
          <p className="text-muted-foreground">Bugema University Gallery DashBoard</p>
        </div>
        <Button asChild>
          <Link href="/gallery/create">
            <Plus className="mr-2 h-4 w-4" />
            Add Images
          </Link>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search image categories..."
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

      {deleted && (
        <div className="p-4 mb-4 bg-red-100 border border-red-600 rounded">
          <p className="text-sm text-green-500">Image deleted successfully.</p></div>)}

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length === 0 ? (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">No Images found.</p>
            </div>
          ) : (
            filteredEvents.map((item) => (
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                  {item.imageUrl && (
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={item.imageUrl || "/placeholder.svg"}
                        alt={item.category}
                        width={500}
                        height={300}
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
                    <CardTitle className="line-clamp-2 text-lg">{item.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex space-y-2 gap-40">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="mr-1 h-3 w-3" />
                        Uploaded By {item.UploadedBy}
                      </div>

                      <div className=" hover:cursor-pointer hover:scale-105  z-40 flex items-center text-sm text-muted-foreground" onClick={()=> Delete(item.id)}>
                        <Trash2 className="mr-1 mb-3 h-8 w-8 hover:text-red-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
            ))
          )}
        </div>
      ) : (
        <DataTable
          data={filteredEvents.map((item) => ({ ...item, id: item.id }))}
          columns={tableColumns}
          onRowClick={(item) => {
            window.location.href = `/gallery/${item.id}`
          }}
        />
      )}
    </div>
  )
}
