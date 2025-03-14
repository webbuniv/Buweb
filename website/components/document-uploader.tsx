"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, Upload, File, CheckCircle } from "lucide-react"

export function DocumentUploader() {
  const [isUploading, setIsUploading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [uploadedDocs, setUploadedDocs] = useState<Array<{ title: string; fileType: string }>>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsUploading(true)
    setMessage(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("/api/documents", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setMessage({ type: "success", text: result.message })
        setUploadedDocs((prev) => [
          ...prev,
          {
            title: result.document.title,
            fileType: result.document.fileType,
          },
        ])

        // Reset the form
        form.reset()
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
      } else {
        setMessage({ type: "error", text: result.message })
      }
    } catch (error) {
      console.error("Error uploading document:", error)
      setMessage({
        type: "error",
        text: `An unexpected error occurred: ${error instanceof Error ? error.message : "Unknown error"}`,
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <File className="h-5 w-5" />
          Upload Documents
        </CardTitle>
        <CardDescription>Upload PDF, Word, or text documents to train the chatbot on specific content</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="file" className="block text-sm font-medium mb-1">
              Document File
            </Label>
            <Input
              ref={fileInputRef}
              id="file"
              name="file"
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              required
              className="cursor-pointer"
            />
            <p className="text-xs text-gray-500 mt-1">Supported formats: PDF, Word (.doc, .docx), Text (.txt)</p>
          </div>

          <div>
            <Label htmlFor="title" className="block text-sm font-medium mb-1">
              Document Title
            </Label>
            <Input id="title" name="title" type="text" placeholder="Enter a descriptive title for the document" />
          </div>

          <div>
            <Label htmlFor="category" className="block text-sm font-medium mb-1">
              Category
            </Label>
            <Input id="category" name="category" type="text" placeholder="e.g., Academic, Policy, Handbook" />
          </div>

          <div>
            <Label htmlFor="tags" className="block text-sm font-medium mb-1">
              Tags (comma separated)
            </Label>
            <Input id="tags" name="tags" type="text" placeholder="e.g., admission, policy, student" />
          </div>

          <Button type="submit" disabled={isUploading} className="w-full bg-[#00205B] hover:bg-blue-900">
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload Document
              </>
            )}
          </Button>
        </form>

        {message && (
          <Alert className="mt-4" variant={message.type === "error" ? "destructive" : "default"}>
            <AlertTitle>{message.type === "success" ? "Success" : "Error"}</AlertTitle>
            <AlertDescription>{message.text}</AlertDescription>
          </Alert>
        )}
      </CardContent>

      {uploadedDocs.length > 0 && (
        <CardFooter className="flex flex-col items-start border-t px-6 py-4">
          <h4 className="text-sm font-medium mb-2">Recently Uploaded Documents:</h4>
          <ul className="w-full space-y-1">
            {uploadedDocs.map((doc, index) => (
              <li key={index} className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="truncate">{doc.title}</span>
                <span className="ml-2 text-xs text-gray-500 uppercase">{doc.fileType}</span>
              </li>
            ))}
          </ul>
        </CardFooter>
      )}
    </Card>
  )
}

