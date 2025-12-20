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
import { getStaffById, updateStaff, type staffItem } from "@/lib/actions/staff.actions"
import { toast } from "@/hooks/use-toast"
import { ImageUpload } from "@/components/ui/image-upload"
import { getFilePreviewUrl } from "@/lib/utils/file-utils"
import { Checkbox } from "../ui/checkbox"

interface EditStaffProps {
  staffId: string
}

export function EditStaff({ staffId }: EditStaffProps) {
  const router = useRouter()
    const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)
         const [staff, setStaff] = useState<staffItem | null>(null)
         const [error, setError] = useState<string | null>(null)
          const [success, setSuccess] = useState(false)
          const [school, setSchool] = useState("")
          const [name, setName] = useState("")
          const [department, setDepartment] = useState("")
          const [role, setRole] = useState("")
          const [qualification, setQualification] = useState("")
          const [isHOD, setisHod] = useState(false)
          const [isDEAN, setIsDEAN] = useState(false)
          // const [categories, setCategories] = useState<{category: string}[]>([])
          const [featuredImage, setFeaturedImage] = useState<string>("")
          const [imageUrl, setImageUrl] = useState("");


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append("name", name);
          formData.append("photoUrl", imageUrl);
          formData.append("school", school);
          formData.append("department", department);
          formData.append("role", role);
          formData.append("qualification", qualification);
          formData.append("isHOD", isHOD ? "true" : "false");
          formData.append("isDean", isDEAN ? "true" : "false");

          const save = await updateStaff(staffId,formData)
          setSuccess(true)
          if(!save.success){
                
                  setError(save.error || "Failed to save image")
          }
          
                  setTimeout(() => {
                  setSuccess(false)}, 3000)
                  setFeaturedImage("")
                  setSchool("") 
                  setDepartment("")
                  setRole("")
                  setQualification("")
                  setImageUrl("")
         
  }

  useEffect(() => {
          console.log("isDEAN:", isDEAN);
          console.log("isHOD:", isHOD);
  },[
          isDEAN,isHOD
  ])
  
          useEffect(() => {
                  setImageUrl(getFilePreviewUrl(featuredImage))
          }, [featuredImage,]);



  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getStaffById(staffId)
        setStaff(data)
        setDepartment(data?.department || "")
        setRole(data?.role || "")
        setQualification(data?.qualification || "")
        setisHod(data?.isHOD || false)
        setIsDEAN(data?.isDean || false)
        setName(data?.name || "")
        setSchool(data?.school || "")
        setImageUrl(data?.photoUrl || "")
        if (data?.name) {
          setName(data.name)
        }
        if (data?.photoUrl) {
          setFeaturedImage(data.photoUrl)
        }
      } catch (error) {
        console.error("Failed to fetch event:", error)
        setError("Failed to load event data")
      } finally {
        setInitialLoading(false)
      }
    }

    fetchEvent()
  }, [staffId])

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setLoading(true)
//     setError(null)

//     const formData = new FormData(e.currentTarget)
//     formData.set("description", description) // Add rich text description
    
//     if (featuredImage) {
//       formData.set("imageUrl", featuredImage)
//     }

//     try {
//       const result = await updateEvent(staffId, formData)

//       if (result.success) {
//         toast({
//           title: "Success",
//           description: "Event updated successfully",
//         })
//         router.push(`/staff/${staffId}`)
//       } else {
//         setError(result.error || "Failed to update event")
//       }
//     } catch (err: any) {
//       setError(err.message || "An error occurred while updating the event.")
//     } finally {
//       setLoading(false)
//     }
//   }

  if (initialLoading) {
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
            <Link href="/events">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Staff Not Found</h1>
            <p className="text-muted-foreground">The requested Staff could not be found.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
        <div className="bg-white dark:bg-black p-6 rounded-lg border">
    <h3 className="text-xl  font-medium mb-6">Add new staff member</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
    
              <div className="grid  md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2 " >
                    <Label className="text-sm font-medium">Name</Label>
                   <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter the staff member's name"
                            className="bg-transparent rounded-lg relative block w-full px-3 py-2 border border-double border-gray-300 placeholder-gray-500 dark:bg-gray-800 text-gray-900 rounded-b-md focus:outline-none focus:border-4  focus:border-gray-500 focus:z-10 sm:text-sm dark:text-white dark:bg-dark"
                            />
                    
              </div>
    
                    <div className="flex flex-col gap-2 " >
                            <Label className="text-sm font-medium">School</Label>
                            <Input
                            type="text"
                            value={school}
                            onChange={(e) => setSchool(e.target.value)}
                            placeholder="Enter the school name (optional but required for lecturers)"
                            className="bg-transparent rounded-lg relative block w-full px-3 py-2 border border-double border-gray-300 placeholder-gray-500 dark:bg-gray-800 text-gray-900 rounded-b-md focus:outline-none focus:border-4  focus:border-gray-500 focus:z-10 sm:text-sm dark:text-white dark:bg-dark"
                            />
                    </div>

                    <div className="flex flex-col gap-2 " >
                            <Label className="text-sm font-medium">Department</Label>
                            <Input
                            type="text"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            placeholder="Enter the department name"
                            className="bg-transparent rounded-lg relative block w-full px-3 py-2 border border-double border-gray-300 placeholder-gray-500 dark:bg-gray-800 text-gray-900 rounded-b-md focus:outline-none focus:border-4  focus:border-gray-500 focus:z-10 sm:text-sm dark:text-white dark:bg-dark"
                            />
                    </div>
                    <div className="flex flex-col gap-2 " >
                            <Label className="text-sm font-medium">Role</Label>
                            <select
              id="role"
              name="role"
              onChange={(e) => setRole(e.target.value)}
              required
               className="bg-transparent rounded-lg relative block w-full px-3 py-2 border border-double border-gray-300 placeholder-gray-500 dark:bg-gray-800 text-gray-900 rounded-b-md focus:outline-none focus:border-4  focus:border-gray-500 focus:z-10 sm:text-sm dark:text-white dark:bg-dark"
            >
                    <option value={staff.role}  >{staff.role}</option>
                    <option value="lecturer"  >lecturer</option>
                    <option value="VC"  >VC</option>
                    <option value="DVC-ACADEMICS"  >DVC-ACADEMICS</option>
                    <option value="DVC-FINANCE"  >DVC-FINANCE</option>
                    <option value="HUMAN-RESOURCE"  >HUMAN-RESOURCE</option>
                  </select>
                    </div>
    
                    <div className="flex flex-col gap-2 " >
                            <Label className="text-sm font-medium">Qualification</Label>
                            <Input
                            type="text"
                            value={qualification}
                            onChange={(e) => setQualification(e.target.value)}
                            placeholder="Type the qualification(optional)"
                            className="bg-transparent rounded-lg relative block w-full px-3 py-2 border border-double border-gray-300 placeholder-gray-500 dark:bg-gray-800 text-gray-900 rounded-b-md focus:outline-none focus:border-4  focus:border-gray-500 focus:z-10 sm:text-sm dark:text-white dark:bg-dark"
                            />
                    </div>
    
                    <div className="flex  items-center justify-center mt-3 gap-6 " >
                            <div className="flex gap-2 " >
                                    <Checkbox
                            checked={isHOD}
                            onCheckedChange={()=>setisHod(prev => !prev)}
                            />
                            <Label className="text-sm font-medium">HOD</Label>
                            </div>
                            <div className="flex gap-2" >
                                    <Checkbox
                            checked={isDEAN}
                            onCheckedChange={()=>setIsDEAN(prev => !prev)}
                            />
                            <Label className="text-sm font-medium">DEAN</Label>
                    </div>
              </div>
               </div>
    
              <div>
                    <Label className="text-sm font-medium">Photo</Label>
                    <ImageUpload
                                    value={featuredImage}
                                    onChange={setFeaturedImage}
                                    onError={(error) => {
                                      setError(error.message)
                                    }}
                                  />
    
              </div>
    
    
              <div className="flex justify-end gap-3">
                <Button type="submit"
                >Submit 
                </Button>
              </div>
             
              {success &&  (
                  <Alert variant="default">
                    <AlertDescription>Image Uploaded Successfully</AlertDescription>
                  </Alert>
                )}
              {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
            </form>
        </div>
  )
}
