"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ImageUpload } from "@/components/ui/image-upload"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getFilePreviewUrl } from "@/lib/utils/file-utils"
import { saveImageWithCategory,getImageCategories } from "@/lib/actions/gallery.actions"
import { Checkbox } from "@/components/ui/checkbox"


interface ReviewFormProps {
  productId: string
  productName: string
}
const AddStaffForm = ()=> {
        
         const [error, setError] = useState<string | null>(null)
        const [success, setSuccess] = useState(false)
        const [category, setcategory] = useState("")
        const [school, setSchool] = useState("")
        const [department, setDepartment] = useState("")
        const [role, setRole] = useState("")
        const [qualification, setQualification] = useState("")
        const [isHOD, setisHod] = useState(false)
        const [isDEAN, setIsDEAN] = useState(false)
        const [categories, setCategories] = useState<{category: string}[]>([])
        const [featuredImage, setFeaturedImage] = useState<string>("")
         const [imageUrl, setImageUrl] = useState("");


  const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("imageUrl", imageUrl);
        formData.append("school", school);
        formData.append("department", department);
        formData.append("role", role);
        formData.append("qualification", qualification);
        const save = await saveImageWithCategory(formData)
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
                setImageUrl(getFilePreviewUrl(featuredImage))
        }, [featuredImage,]);

        useEffect(() => {
                const fetchCategories = async () => {
                        const imageCategories = await getImageCategories()
                        console.log("Fetched categories:", imageCategories)
                        return imageCategories 
                }
                fetchCategories().then((data) => {
                        setCategories(data || [])
                }).catch((err) => {
                        console.error("Failed to fetch categories:", err)
                })
        },[])


  return (
    <div className="bg-white dark:bg-black p-6 rounded-lg border">
<h3 className="text-xl  font-medium mb-6">Add new staff member</h3>
      <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-2 " >
                <Label className="text-sm font-medium">Name</Label>
                <select
          id="product_cartegory"
          name="product_cartegory"
          onChange={(e) => setcategory(e.target.value)}
          required
           className="bg-transparent rounded-lg relative block w-full px-3 py-2 border border-double border-gray-300 placeholder-gray-500 dark:bg-gray-800 text-gray-900 rounded-b-md focus:outline-none focus:border-4  focus:border-gray-500 focus:z-10 sm:text-sm dark:text-white dark:bg-dark"
        >
                <option value=""  >Select category</option>
                {categories?.map((cat,index) => (
                <option key={index} value={cat.category} className="dark:text-white">
                  {cat.category}
                </option>
              ))}
              </select>
                
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
                        <Input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="Click to choose a role"
                        className="bg-transparent rounded-lg relative block w-full px-3 py-2 border border-double border-gray-300 placeholder-gray-500 dark:bg-gray-800 text-gray-900 rounded-b-md focus:outline-none focus:border-4  focus:border-gray-500 focus:z-10 sm:text-sm dark:text-white dark:bg-dark"
                        />
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
                        <div className="flex gap-3 " >
                                <Checkbox
                        checked={isHOD}
                        onCheckedChange={()=>setisHod(true)}
                        />
                        <Label className="text-sm font-medium">HOD</Label>
                        </div>
                        <div className="flex gap-3" >
                                <Checkbox
                        checked={isDEAN}
                        onCheckedChange={()=>setIsDEAN(true)}
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
            disabled={!category|| imageUrl.length===0}
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
export default AddStaffForm