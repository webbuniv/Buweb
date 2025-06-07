"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Loader2, Upload } from "lucide-react"
import Link from "next/link"
import { createNews } from "@/lib/actions/news.actions"
import { toast } from "@/hooks/use-toast"

export function CreateNews() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    if (selectedFile) {
      formData.append("file", selectedFile)
    }

    try {
      const result = await createNews(formData)

      if (result.success) {
        toast({
          title: "Success",
          description: "News article created successfully",
        })
        router.push("/news")
      } else {
        setError(result.error || "Failed to create news article")
      }
    } catch (err: any) {
      setError(err.message || "An error occurred while creating the article.")
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

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/news">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Article</h1>
          <p className="text-muted-foreground">Write a new news article or announcement</p>
        </div>
      </div>

      <Card className="max-w-4xl">
        <CardHeader>
          <CardTitle>Article Details</CardTitle>
          <CardDescription>Fill in the information for your news article</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" placeholder="Enter article title" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="summary">Summary</Label>
              <Textarea id="summary" name="summary" placeholder="Brief summary of the article" rows={2} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Write your article content here..."
                rows={12}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category" required>
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
                <Input id="author" name="author" placeholder="Author name" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Publication Date</Label>
              <Input id="date" name="date" type="date" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Featured Image (Optional)</Label>
              <div className="flex items-center space-x-2">
                <Input id="file" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                <Button type="button" variant="outline" onClick={() => document.getElementById("file")?.click()}>
                  <Upload className="mr-2 h-4 w-4" />
                  Choose Image
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
                {loading ? "Creating..." : "Create Article"}
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link href="/news">Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
