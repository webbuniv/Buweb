"use client"

import type React from "react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { uploadFile } from "@/lib/actions/upload.actions"


interface ReviewFormProps {
  productId: string
  productName: string
}
const AddImagesForm = ()=> {
        const [category, setcategory] = useState("")
        const fileInputRef = useRef<HTMLInputElement>(null);
        const [featuredImage, setFeaturedImage] = useState<string>("")
         const [selectedImage, setSelectedImage] = useState<File[] | []>([]);

                const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                        
                  if (e.target.files) {
                      const filesArray = Array.from(e.target.files)
                      const maxFileSize = 3 * 1024 * 1024; // 1MB in bytes
                      const validFiles: File[] = [];
                      for (const file of filesArray) {
                         console.log("Uploading file:", file)
                        if (!file.type.startsWith("image/")) {
                                alert(`"${file.name}" is not a valid image file.`);
                                return; 
                              }

                              if (file.size > maxFileSize) {
                                alert(`"${file.name}" is too large. Maximum allowed size is 3MB.`);
                              } else {
                                validFiles.push(file);
                              }
                            }

                    // Check if adding these files would exceed the 5 image limit
                    if (validFiles.length > 5) {
                      alert("You can only upload up to 5 images")
                      return
                    }
                     setSelectedImage(validFiles)
                    // Create preview URLs for the selected images
                    const previewUrls = validFiles.map((file) => URL.createObjectURL(file))
                    
                  }
                }
  const handleSubmit = () => {
        selectedImage.forEach(async (file) => {
               
                await uploadFile(file)
        })}
  

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
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 dark:text-white">
            Attach an Image (Upto 5 images)
          </label>
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            ref={fileInputRef}
            accept="image/*"
            multiple
            onChange={handleImageChange}
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:text-gray  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          
        </div>

      
          <div className="flex justify-end gap-3">
            <Button type="submit"
            disabled={!category}
            >Submit 
            </Button>
          </div>
        </form>
    </div>
  )
}
export default AddImagesForm