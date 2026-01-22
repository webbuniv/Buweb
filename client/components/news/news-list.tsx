"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Calendar, LayoutGrid, LayoutList } from "lucide-react"
import Link from "next/link"
import { getNews, type News } from "@/lib/actions/news.actions"
import { getFileUrl, formatDate } from "@/lib/utils"
import { DataTable } from "@/components/ui/data-table"
import { disableNews } from "@/lib/actions/news.actions"
import { useRouter } from "next/navigation"

export function NewsList() {
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [changingStatus, setChangingStatus] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid")
        const router = useRouter()
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews({})
        setNews(data)
      } catch (error) {
        console.error("Failed to fetch news:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  const disableActivateNews = async (id: string) => {
        setChangingStatus(true);
await disableNews(id).then(async (res) => {
        if(res?.success){
                 const data = await getNews({})
      setNews(data)
  }
}).finally(() => {
        setChangingStatus(false);
    });

  }

  const filteredNews = news.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))

  const tableColumns = [
    {
      key: "title",
      header: "Title",
      cell: (item: News) => <div className="font-medium">{item.title}</div>,
    },
    {
      key: "category",
      header: "Category",
      cell: (item: News) => <Badge variant="outline">{item.category}</Badge>,
    },
    {
      key: "author",
      header: "Author",
      cell: (item: News) => item.author,
    },
    {
      key: "date",
      header: "Date",
      cell: (item: News) => formatDate(item.date),
    },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">News & Articles</h1>
          <p className="text-muted-foreground">Manage university news and articles</p>
        </div>
        <Button asChild>
          <Link href="/news/create">
            <Plus className="mr-2 h-4 w-4" />
            Create Article
          </Link>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            className="pl-8 w-full sm:w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">View:</span>
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="icon" onClick={() => setViewMode("grid")}>
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "table" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("table")}
          >
            <LayoutList className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.length === 0 ? (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">No articles found.</p>
            </div>
          ) : (
            filteredNews.map((item) => (
              
                <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                  {item.file && (
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={getFileUrl(item.file) || "/placeholder.svg"}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  )}
                  <Link key={item.$id} href={`/news/${item.$id}`} className="block">
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        {formatDate(item.date)}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="line-clamp-3 text-sm text-muted-foreground">{item.summary}</p>
                  </CardContent>
                  </Link>
                  <CardFooter className="p-4 gap-4 pt-0 relative">
                    <p className="text-sm font-medium">By {item.author}</p>
                               
          <Button onClick={() => disableActivateNews(item.$id)} variant="outline" className={`mr-2 absolute z-50 right-4 ${item.approved ? "bg-red-500":" bg-green-500"} `}>
            {item.approved ? "Disable" : "Enable"} 
          </Button>
                  </CardFooter>
                </Card>
              
            ))
          )}
        </div>
      ) : (
        <DataTable
          data={filteredNews.map((item) => ({ ...item, id: item.$id }))}
          columns={tableColumns}
          onRowClick={(item) => {
            window.location.href = `/news/${item.id}`
          }}
        />
      )}
    </div>
  )
}
