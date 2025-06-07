"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Edit } from "lucide-react"
import Link from "next/link"
import { getNewsById, type NewsItem } from "@/lib/actions/news.actions"
import { getFileUrl } from "@/lib/utils"

interface NewsDetailsProps {
  newsId: string
}

export function NewsDetails({ newsId }: NewsDetailsProps) {
  const [article, setArticle] = useState<NewsItem | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getNewsById(newsId)
        setArticle(data)
      } catch (error) {
        console.error("Failed to fetch article:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [newsId])

  if (loading) {
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
          <Link href="/news">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">{article.title}</h1>
          <p className="text-muted-foreground">Article Details</p>
        </div>
        <Button asChild>
          <Link href={`/news/${newsId}/edit`}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Article
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="md:col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">{article.title}</CardTitle>
              <Badge variant="outline">{article.category}</Badge>
            </div>
            <p className="text-lg text-muted-foreground">{article.summary}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {article.file && (
              <div className="mb-6">
                <img
                  src={getFileUrl(article.file) || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {article.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Article Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{new Date(article.date).toLocaleDateString()}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
