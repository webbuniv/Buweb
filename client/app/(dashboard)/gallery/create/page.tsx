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


interface ReviewFormProps {
  productId: string
  productName: string
}
const AddImagesForm = ()=> {
        
         const [error, setError] = useState<string | null>(null)
        const [success, setSuccess] = useState(false)
        const [category, setcategory] = useState("")
        const [categories, setCategories] = useState<{category: string}[]>([])
        const [featuredImage, setFeaturedImage] = useState<string>("")
         const [imageUrl, setImageUrl] = useState("");


  const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("category", category);
        formData.append("imageUrl", imageUrl);
        const save = await saveImageWithCategory(formData)
        setSuccess(true)
        if(!save.success){
                setError(save.error || "Failed to save image")
        }
        
                setTimeout(() => {
                        setSuccess(false)}, 3000)
                setFeaturedImage("")
                setcategory("") 
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
      <h3 className="text-xl  font-medium mb-6">Add images </h3>
      <form onSubmit={handleSubmit} className="space-y-6">

          <div>
                <Label className="text-sm font-medium">Image Category</Label>
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

          <div>
                <Label className="text-sm font-medium">Images</Label>
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
export default AddImagesForm