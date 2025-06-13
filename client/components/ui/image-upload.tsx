"use client"

import * as React from "react"
import Image from "next/image"
import { useDropzone } from "react-dropzone"
import { ImageIcon, Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"

import { cn } from "@/lib/utils"
import { uploadFile } from "@/lib/actions/upload.actions"

// Define max file size: 10MB in bytes
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

interface ImageUploadProps {
  value?: string
  onChange?: (value: string) => void
  onError?: (error: Error) => void
  className?: string
}

export function ImageUpload({ value, onChange, onError, className, ...props }: ImageUploadProps) {
  const [isUploading, setIsUploading] = React.useState(false)
  const [preview, setPreview] = React.useState<string | undefined>(value)

  // Update preview when value changes
  React.useEffect(() => {
    setPreview(value)
  }, [value])

  const onDrop = React.useCallback(
    async (acceptedFiles: File[]) => {
      try {
        const file = acceptedFiles[0]

        // Check file size before uploading
        if (file.size > MAX_FILE_SIZE) {
          const error = new Error("File is too large. Maximum size is 10MB.")
          onError?.(error)
          toast({
            title: "Error",
            description: "File is too large. Maximum size is 10MB.",
            variant: "destructive",
          })
          return
        }

        setIsUploading(true)

        // Create FormData and append the file
        const formData = new FormData()
        formData.append("file", file)

        const result = await uploadFile(formData)
        if (result.success && result.fileId) {
          // Here we only need the file ID for database storage
          onChange?.(result.fileId)

          // For preview purposes, we need to construct the URL
          const fileUrl = `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${result.fileId}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`
          setPreview(fileUrl)
        } else {
          throw new Error(result.error || "Failed to upload image")
        }
      } catch (error) {
        onError?.(error as Error)
        toast({
          title: "Error",
          description: "Failed to upload image. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsUploading(false)
      }
    },
    [onChange, onError],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    maxFiles: 1,
    multiple: false,
    maxSize: MAX_FILE_SIZE,
    onDropRejected: (fileRejections) => {
      const isSizeError = fileRejections.some((rejection) =>
        rejection.errors.some((error) => error.code === "file-too-large"),
      )

      if (isSizeError) {
        const error = new Error("File is too large. Maximum size is 10MB.")
        onError?.(error)
        toast({
          title: "Error",
          description: "File is too large. Maximum size is 10MB.",
          variant: "destructive",
        })
      } else {
        const error = new Error("Invalid file type. Please upload a PNG, JPG, or GIF.")
        onError?.(error)
        toast({
          title: "Error",
          description: "Invalid file type. Please upload a PNG, JPG, or GIF.",
          variant: "destructive",
        })
      }
    },
  })

  return (
    <div
      {...getRootProps()}
      className={cn(
        "relative flex h-40 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-gray-100/25",
        isDragActive && "border-primary",
        className,
      )}
      {...props}
    >
      <input {...getInputProps()} />
      {isUploading ? (
        <div className="flex flex-col items-center justify-center text-sm text-muted-foreground">
          <Loader2 className="h-10 w-10 animate-spin" />
          <p>Uploading...</p>
        </div>
      ) : preview ? (
        <div className="relative h-full w-full">
          <Image
            src={preview || "/placeholder.svg"}
            alt="Preview"
            className="rounded-lg object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // Add error handling for image loading
            onError={(e) => {
              console.error("Image failed to load:", e)
              // Optionally set a fallback image
              // e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-sm text-muted-foreground">
          <ImageIcon className="h-10 w-10 mb-2" />
          <p>Drag & drop an image here, or click to select one</p>
          <p className="text-xs">PNG, JPG, GIF up to 10MB</p>
        </div>
      )}
    </div>
  )
}
