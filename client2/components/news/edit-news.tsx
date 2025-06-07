"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Loader2, Upload } from "lucide-react"
import Link from "next/link"
import { getNewsById, updateNews, type NewsItem } from "@/lib/actions/news.actions"
import { toast } from "@/hooks/use-toast"
import { RichTextEditor } from "@/components/ui/rich-text-editor"
import { uploadFile } from "@/lib/actions/upload.actions"
import { getFileUrl } from "@/lib/utils"

interface EditNewsProps {
  newsId: string
}

export function EditNews({ newsId }: EditNewsProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [content, setContent] = useState("")
  const [article, setArticle] = useState<NewsItem | null>(null)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getNewsById(newsId)
        setArticle(data)
        if (data?.content) {
          setContent(data.content)
        }
      } catch (error) {
        console.error("Failed to fetch article:", error)
        setError("Failed to load article data")
      } finally {
        setInitialLoading(false)
      }
    }

    fetchArticle()
  }, [newsId])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    formData.set("content", content) // Add rich text content

    if (selectedFile) {
      formData.append("file", selectedFile)
    }

    try {
      const result = await updateNews(newsId, formData)

      if (result.success) {
        toast({
          title: "Success",
          description: "News article updated successfully",
        })
        router.push(`/news/${newsId}`)
      } else {
        setError(result.error || "Failed to update news article")
      }
    } catch (err: any) {
      setError(err.message || "An error occurred while updating the article.")
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleImageUpload = async (file: File): Promise<string> => {
    try {
      const result = await uploadFile(file)
      if (result.success && result.fileId) {
        return result.fileId
      }
      throw new Error("Failed to upload image")
    } catch (error) {
      console.error("Image upload error:", error)
      throw error
    }
  }

  if (initialLoading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/news">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Article Not Found</h1>
            <p className="text-muted-foreground">The requested article could not be found.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/news/${newsId}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Article</h1>
          <p className="text-muted-foreground">Update article information</p>
        </div>
      </div>

      <Card className="max-w-5xl">
        <CardHeader>
          <CardTitle>Article Details</CardTitle>
          <CardDescription>Update the information for this news article</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" defaultValue={article.title} placeholder="Enter article title" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="summary">Summary</Label>
              <Input
                id="summary"
                name="summary"
                defaultValue={article.summary}
                placeholder="Brief summary of the article"
                required
              />
            </div>

            <div className="space-y-2">
              <RichTextEditor
                label="Content"
                initialValue={article.content}
                onChange={setContent}
                onImageUpload={handleImageUpload}
                height={400}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category" defaultValue={article.category}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Academic">Academic</SelectItem>
                    <SelectItem value="Research">Research</SelectItem>
                    <SelectItem value="Campus">Campus</SelectItem>
                    <SelectItem value="Events">Events</SelectItem>
                    <SelectItem value="Announcements">Announcements</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input id="author" name="author" defaultValue={article.author} placeholder="Author name" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Publication Date</Label>
              <Input id="date" name="date" type="date" defaultValue={article.date} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Featured Image</Label>
              {article.file && !selectedFile && (
                <div className="mb-2">
                  <img
                    src={getFileUrl(article.file) || "/placeholder.svg"}
                    alt="Current featured image"
                    className="h-32 object-cover rounded-md"
                  />
                  <p className="text-sm text-muted-foreground mt-1">Current image</p>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Input id="file" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                <Button type="button" variant="outline" onClick={() => document.getElementById("file")?.click()}>
                  <Upload className="mr-2 h-4 w-4" />
                  {article.file ? "Change Image" : "Add Image"}
                </Button>
                {selectedFile && <span className="text-sm text-muted-foreground">{selectedFile.name}</span>}
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="flex space-x-2">
              <Button type="submit" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? "Updating..." : "Update Article"}
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link href={`/news/${newsId}`}>Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
