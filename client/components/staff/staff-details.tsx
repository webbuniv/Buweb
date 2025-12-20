"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import { getStaffById, deleteStaff, type staffItem } from "@/lib/actions/staff.actions"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
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

interface StaffDetailsProps {
  staffId: string
}

export function StaffDetails({ staffId }: StaffDetailsProps) {
  const router = useRouter()
  const [staff, setStaff] = useState<staffItem | null>(null)
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getStaffById(staffId)
        setStaff(data)
      } catch (error) {
        console.error("Failed to fetch staff:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvent()
  }, [staffId])

  const handleDelete = async () => {
    try {
      setDeleting(true)
      const result = await deleteStaff(staffId)

      if (result.success) {
        toast({
          title: "Success",
          description: "Staff deleted successfully",
        })
        router.push("/staff")
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to delete staff",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Delete error:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setDeleting(false)
    }
  }


  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!staff) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/staff">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Staff Not Found</h1>
            <p className="text-muted-foreground">The requested staff could not be found.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center ">
                        <Button variant="ghost" size="icon" asChild>
          <Link href="/staff">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
              <CardTitle>Staff Details</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {staff.photoUrl && (
              <div className="mb-6">
                <img
                  src={staff.photoUrl || "/placeholder.svg"}
                  alt={staff.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}
            <div>
              <div className="">
                <div className="flex prose gap-2 prose-gray dark:prose-invert max-w-none ">
                  <Badge variant={"default"}>
                    {staff.role}
                  </Badge>
                      {staff.isDean ? (
                        <Badge variant={"default" }>
                        Dean
                      </Badge>) : (
                        <h1></h1>
                      )}

                      {staff.isHOD ? (
                        <Badge variant={"default" }>
                        HOD
                      </Badge>) : (
                        <h1></h1>
                      )}
                      </div>
                      <div className="" >
                        <h1 className="text-3xl font-bold tracking-tight">{staff.name}</h1>
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                                <p>School: <span className="text-blue-500">{staff.school}</span></p>
                                <p>Department: <span className="text-blue-500">{staff.department}</span></p>
                        </div>
                        <div className="text-sm text-muted-foreground" >
                                Qualification: <span className="text-blue-500">{staff.qualification}</span>
                        </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <h1 className="text-sm" >Created:</h1>
                 <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm"> {new Date(staff.date).toLocaleDateString()}</span>
              </div>
              
            </div>
            <div className="flex relative h-10 space-y-2   ">
                      <div className="flex  items-center   text-muted-foreground">
                        <User className=" h-6 w-6" />
                        <h1 className="" >Uploaded By: <span className="font-bold" > {staff.UploadedBy}</span></h1>
                      </div>
                </div>

            <div className="flex items-center space-x-4">

        <div className="flex space-x-2">
          <Button asChild>
            <Link href={`/staff/${staffId}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" disabled={deleting}>
                <Trash2 className="mr-2 h-4 w-4" />
                {deleting ? "Deleting..." : "Delete"}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the event and remove it from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
          </CardContent>
            <CardContent className="p-4 pt-0">
                    
                  </CardContent>
        </Card>
      </div>
    </div>
  )
}
