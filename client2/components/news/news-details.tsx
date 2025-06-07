"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Edit } from "lucide-react"
import Link from "next/link"

interface NewsDetailsProps {
  newsId: string
}

export function NewsDetails({ newsId }: NewsDetailsProps) {
  // Mock news data - replace with actual data fetching
  const article = {
    id: newsId,
    title: "New Academic Programs Launched",
    excerpt: "Bugema University introduces three new undergraduate programs for the 2024 academic year.",
    content: `Bugema University is excited to announce the launch of three new undergraduate programs starting in the 2024 academic year. These programs have been carefully designed to meet the evolving needs of students and the job market.

The new programs include:

1. **Bachelor of Science in Data Science** - A comprehensive program that combines statistics, computer science, and domain expertise to extract insights from data.

2. **Bachelor of Arts in Digital Marketing** - Focused on modern marketing strategies, social media management, and digital advertising techniques.

3. **Bachelor of Science in Environmental Engineering** - Addressing the growing need for sustainable solutions to environmental challenges.

Each program has been developed in consultation with industry experts and will feature state-of-the-art facilities and experienced faculty members. Applications for these programs will open on February 1st, 2024.

For more information about admission requirements and application procedures, please contact our admissions office.`,
    author: "Dr. Sarah Johnson",
    publishedAt: "2024-01-15",
    status: "published",
    category: "Academic",
    views: 1234,
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
              <div className="flex space-x-2">
                <Badge variant="outline">{article.category}</Badge>
                <Badge variant={article.status === "published" ? "default" : "secondary"}>{article.status}</Badge>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">{article.excerpt}</p>
          </CardHeader>
          <CardContent>
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
                <span className="text-sm">{new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Views: </span>
                <span>{article.views.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
