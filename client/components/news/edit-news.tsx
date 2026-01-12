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
import { ArrowLeft, Loader2 } from 'lucide-react'
import Link from "next/link"
import { getNewsById, updateNews, type NewsItem } from "@/lib/actions/news.actions"
import { toast } from "@/hooks/use-toast"
import { RichTextEditor } from "@/components/ui/rich-text-editor"

interface EditNewsProps {
  newsId: string
}

export function EditNews({ newsId }: EditNewsProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [featuredImage, setFeaturedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")
  const [content, setContent] = useState("")
  const [article, setArticle] = useState<NewsItem | null>(null)
  const [newArticle, setNewArticle] = useState<NewsItem | null>(null)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getNewsById(newsId)
        console.log("Fetched Article Data:", data);
        setArticle(data)
        setNewArticle(data);
        if (data?.content) {
          setContent(data.content)
        }
        if (data?.file) {
          const fileUrl = `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${data.file}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`;
          setImagePreview(fileUrl)
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

  // Keep newArticle in sync with content and featuredImage changes
  useEffect(() => {
    if (content) {
      setNewArticle(prev => prev ? { ...prev, content } : prev)
    }
  }, [content])

  // Handle image file selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFeaturedImage(file)
      const previewUrl = URL.createObjectURL(file)
      setImagePreview(previewUrl)
    }
  }

  // Clear image selection
  const handleRemoveImage = () => {
    setFeaturedImage(null)
    setImagePreview("")
    setNewArticle(prev => prev ? { ...prev, file: "" } : prev)
  }

  const handleDataChange = (field: string, value: any) => {
    setNewArticle(prev => prev ? { ...prev, [field]: value } : prev)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Create FormData for file upload
    const formData = new FormData()
    if (featuredImage) {
      formData.append("file", featuredImage)
    }

    try {
      const result = await updateNews(newsId, newArticle, formData)

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
              <Input id="title" name="title"
              defaultValue={article.title}
              placeholder="Enter article title"
              required
              onChange={(e)=>{handleDataChange("title", e.target.value)}}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="summary">Summary</Label>
              <Input
                id="summary"
                name="summary"
                defaultValue={article.summary}
                onChange={(e)=>{handleDataChange("summary", e.target.value)}}
                placeholder="Brief summary of the article"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Featured Image</Label>
              <input type="hidden" name="existingImage" value={article.file || ""} />
              <div className="space-y-4">
                {imagePreview ? (
                  <div className="relative w-full max-w-md">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg border"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={handleRemoveImage}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full max-w-md h-48 border-2 border-dashed rounded-lg bg-muted/50">
                    <p className="text-muted-foreground">No image selected</p>
                  </div>
                )}
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="max-w-md"
                />
              </div>
            </div>

            <div className="space-y-2">
              <RichTextEditor 
                label="Content" 
                initialValue={article.content} 
                onChange={setContent} 
                placeholder="Write your article content here..." 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category" 
                defaultValue={article.category}
                onValueChange={(e)=>{handleDataChange("category", e)}}
                >
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
                <Input id="author" 
                name="author" 
                defaultValue={article.author} 
                placeholder="Author name" 
                required 
                onChange={(e)=>{handleDataChange("author",e.target.value)}}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Publication Date</Label>
              <Input id="date" name="date" 
              type="date" 
              defaultValue={article.date} 
              required 
              onChange={(e)=>{handleDataChange("date", e.target.value)}}
              />
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
