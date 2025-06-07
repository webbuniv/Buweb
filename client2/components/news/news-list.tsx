"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Calendar, User } from "lucide-react"

const mockNews = [
  {
    id: "1",
    title: "New Academic Programs Launched",
    excerpt: "Bugema University introduces three new undergraduate programs for the 2024 academic year.",
    author: "Dr. Sarah Johnson",
    publishedAt: "2024-01-15",
    status: "published",
    category: "Academic",
  },
  {
    id: "2",
    title: "Research Grant Awarded",
    excerpt: "University receives significant funding for climate change research project.",
    author: "Prof. Michael Brown",
    publishedAt: "2024-01-12",
    status: "published",
    category: "Research",
  },
  {
    id: "3",
    title: "Campus Infrastructure Update",
    excerpt: "Major renovations planned for the library and student center facilities.",
    author: "Admin Team",
    publishedAt: "2024-01-10",
    status: "draft",
    category: "Campus",
  },
]

export function NewsList() {
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

      <div className="space-y-4">
        {mockNews.map((article) => (
          <Card key={article.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Badge variant="outline">{article.category}</Badge>
                  <Badge variant={article.status === "published" ? "default" : "secondary"}>{article.status}</Badge>
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
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/news/${article.id}`}>View Article</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
