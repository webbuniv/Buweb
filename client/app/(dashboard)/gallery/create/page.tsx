"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ImageUpload } from "@/components/ui/image-upload"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getFilePreviewUrl } from "@/lib/utils/file-utils"
import { saveImageWithCategory } from "@/lib/actions/gallery.actions"


interface ReviewFormProps {
  productId: string
  productName: string
}
const AddImagesForm = ()=> {
         const [error, setError] = useState<string | null>(null)
        const [success, setSuccess] = useState<string | null>(null)
        const [category, setcategory] = useState("")
        const [featuredImage, setFeaturedImage] = useState<string>("")
         const [imageUrl, setImageUrl] = useState("");


  const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("category", category);
        formData.append("imageUrl", imageUrl);
        await saveImageWithCategory(formData).then((response) => {
                !response.success ?
                setError(response.error || "Failed to save image") :
                setSuccess("Image saved successfully")
                setFeaturedImage("")
                setError(null)
                setcategory("") 
                setImageUrl("")
        })
}
        useEffect(() => {
                setImageUrl(getFilePreviewUrl(featuredImage))
        }, [featuredImage,]);


  return (
    <div className="bg-white dark:bg-black p-6 rounded-lg border">
      <h3 className="text-xl  font-medium mb-6">Add images </h3>
      <form onSubmit={handleSubmit} className="space-y-6">

          <div>
                <Label className="text-sm font-medium">Image Category</Label>
                <Input placeholder="Image Category"
                 value={category} 
                 required
                 className="w-full"
                 onChange={(e) => setcategory(e.target.value)} />
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
          {success && success.length>0 && (
              <Alert variant="default">
                <AlertDescription>{success}</AlertDescription>
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