"use client"

import { useState, useRef, useEffect } from "react"
import { Editor } from "@tinymce/tinymce-react"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { constructFileUrl } from "@/lib/utils"

interface RichTextEditorProps {
  label?: string
  initialValue?: string
  onChange: (content: string) => void
  onImageUpload?: (file: File) => Promise<string>
  height?: number
  disabled?: boolean
}

export function RichTextEditor({
  label,
  initialValue = "",
  onChange,
  onImageUpload,
  height = 500,
  disabled = false,
}: RichTextEditorProps) {
  const editorRef = useRef<any>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [editorContent, setEditorContent] = useState(initialValue)

  useEffect(() => {
    setEditorContent(initialValue)
  }, [initialValue])

  const handleEditorChange = (content: string) => {
    setEditorContent(content)
    onChange(content)
  }

  const handleImageUpload = async (blobInfo: any, progress: (percent: number) => void): Promise<string> => {
    if (!onImageUpload) {
      throw new Error("Image upload function not provided")
    }

    try {
      setIsUploading(true)
      const file = blobInfo.blob()
      progress(50)
      const fileId = await onImageUpload(file)
      progress(100)
      return constructFileUrl(fileId)
    } catch (error) {
      console.error("Image upload failed:", error)
      throw new Error("Image upload failed")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}
      <div className="border rounded-md">
        <Editor
          apiKey="your-tinymce-api-key" // Replace with your TinyMCE API key
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={initialValue}
          value={editorContent}
          onEditorChange={handleEditorChange}
          disabled={disabled || isUploading}
          init={{
            height,
            menubar: true,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | image table | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            images_upload_handler: handleImageUpload,
            table_default_attributes: {
              border: "1",
            },
            table_default_styles: {
              width: "100%",
            },
            table_responsive_width: true,
          }}
        />
      </div>
      {isUploading && (
        <div className="flex items-center text-sm text-muted-foreground">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Uploading image...
        </div>
      )}
    </div>
  )
}
