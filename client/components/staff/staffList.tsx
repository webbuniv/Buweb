"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Calendar, Trash2, User, LayoutGrid, LayoutList } from "lucide-react"
import Link from "next/link"
import { getAllStaff, deleteStaff ,type staffItem } from "@/lib/actions/staff.actions"
import Image from "next/image"
import { DataTable } from "@/components/ui/data-table"
import {  formatDate } from "@/lib/utils"

export function StaffList() {
  const [staff, setStaff] = useState<staffItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid")
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const staff = await getAllStaff()
        setStaff(staff)
      } catch (error) {
        console.error("Failed to fetch events:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const Delete = async (id:string)=>{
        staff.map((item) => {
                if (item.id === id) {
                setStaff((prevStaff) => prevStaff.filter((staff) => staff.id !== id))
                }
        })
        return deleteStaff(id).then((response) => {
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

  const filteredEvents = staff.filter((item: staffItem) => item.department.toLowerCase().includes(searchQuery.toLowerCase()))

  const getEventStatus = (eventDate: string) => {
    const today = new Date()
    const eventDateObj = new Date(eventDate)
    return eventDateObj > today ? "upcoming" : "completed"
  }

  const tableColumns = [
    {
      key: "title",
      header: "Title",
      cell: (item: staffItem) => <div className="font-medium">{item.name}</div>,
    },
    {
      key: "date",
      header: "Date",
      cell: (item: staffItem) => formatDate(item.date),
    },
    
    {
      key: "Uploaded_By",
      header: "Uploaded By",
      cell: (item: staffItem) => item.UploadedBy,
    },
    {
      key: "school",
      header: "School",
      cell: (item: staffItem) => (
        <Badge variant={"secondary"}>
          {item.school}
        </Badge>
      ),
    },
    {
      key: "department",
      header: "Department",
      cell: (item: staffItem) => (
        <Badge variant={"secondary"}>
          {item.department}
        </Badge>
      ),
    },
    {
      key: "role",
      header: "Role",
      cell: (item: staffItem) => (
        <Badge variant={"secondary"}>
          {item.role}
        </Badge>
      ),
    },
        {
          key: "actions",
          header: "Actions",
          cell: (item: staffItem) => (
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="hover:bg-red-200" onClick={() => Delete(item.id)}>
                <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                <Link href={`/staff/${item.id}`}>
                  <User className="h-4 w-4 text-blue-500" />
                </Link>
                  </Button>
                </div>
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
          <h1 className="text-3xl font-bold tracking-tight">Staff and Administrators</h1>
          <p className="text-muted-foreground">Bugema University Staff DashBoard</p>
        </div>
        <Button asChild>
          <Link href="/staff/create">
            <Plus className="mr-2 h-4 w-4" />
            New Staff
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
                  {item.photoUrl && (
                    <div className="aspect-video w-full overflow-hidden">
                      <Link href={`/staff/${item.id}`}>
                      <Image
                        src={item.photoUrl || "/placeholder.svg"}
                        alt={item.name}
                        width={500}
                        height={300}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                      </Link>
                    </div>
                  )}
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex  gap-1 " >
                        <Badge variant={"default" }>
                        {item.role}
                      </Badge>
                      {item.isDean ? (
                        <Badge variant={"default" }>
                        Dean
                      </Badge>) : (
                        <h1></h1>
                      )}

                      {item.isHOD ? (
                        <Badge variant={"default" }>
                        HOD
                      </Badge>) : (
                        <h1></h1>
                      )}

                      {item.isAdmin ? (
                        <Badge variant={"default" }>
                        Admin
                      </Badge>) : (
                        <h1></h1>
                      )}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        {formatDate(item.date)}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 text-sm">{item.name}</CardTitle>
                    <CardTitle className="line-clamp-2 text-sm">School: <span className="text-blue-500">{item.school}</span></CardTitle>
                    <CardTitle className="line-clamp-2 text-sm">department: <span className="text-blue-500">{item.department}</span></CardTitle>

                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex relative h-10 space-y-2   ">
                      <div className="flex  items-center   text-muted-foreground">
                        <User className=" h-6 w-6" />
                        <h1 className="" >Uploaded By: <span className="font-bold" > {item.UploadedBy}</span></h1>
                      </div>

                      <div className=" flex hover:cursor-pointer absolute right-3    hover:scale-105  items-center text-sm text-muted-foreground " onClick={()=> Delete(item.id)}>
                        <Trash2 className=" h-8 w-8 hover:text-red-500" />
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
            window.location.href = `/staff/${item.id}`
          }}
        />
      )}
    </div>
  )
}
