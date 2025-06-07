"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Calendar, User, Search, Trash2, Edit } from "lucide-react"
import { getNews, deleteNews, type News } from "@/lib/actions/news.actions"
import { toast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function NewsList() {
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState(true)
  const [searchText, setSearchText] = useState("")
  const [deleting, setDeleting] = useState<string | null>(null)

  const fetchNews = async () => {
    try {
      setLoading(true)
      const newsData = await getNews({ searchText })
      setNews(newsData)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch news articles",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [searchText])

  const handleDelete = async (id: string) => {
    try {
      setDeleting(id)
      const result = await deleteNews(id)
      if (result.success) {
        toast({
          title: "Success",
          description: "News article deleted successfully",
        })
        fetchNews()
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to delete news article",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete news article",
        variant: "destructive",
      })
    } finally {
      setDeleting(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">News</h1>
          <p className="text-muted-foreground">Manage university news and announcements</p>
        </div>
        <Button asChild>
          <Link href="/news/create">
            <Plus className="mr-2 h-4 w-4" />
            Create Article
          </Link>
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search news articles..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {news.length === 0 ? (
            <Card>
              <CardContent className="flex items-center justify-center h-32">
                <p className="text-muted-foreground">No news articles found</p>
              </CardContent>
            </Card>
          ) : (
            news.map((article) => (
              <Card key={article.$id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-xl">{article.title}</CardTitle>
                      <CardDescription>{article.summary}</CardDescription>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Badge variant="outline">{article.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="mr-1 h-3 w-3" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/news/${article.$id}`}>View Article</Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/news/${article.$id}/edit`}>
                          <Edit className="h-3 w-3" />
                        </Link>
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="outline" size="sm" disabled={deleting === article.$id}>
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete the news article.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(article.$id)}>Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  )
}
