"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, FileText, Search, User } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { usePublications } from "@/lib/actions/publications.actions"

export default function PublicationFeed() {
  const {
    loading,
    error,
    searchTerm,
    setSearchTerm,
    yearFilter,
    setYearFilter,
    years,
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
    filteredPublications,
  } = usePublications(6)

  // Function to truncate text
  const truncateText = (text: string | null, maxLength: number) => {
    if (!text) return ""
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
  }

  return (
    <div className="container w-full max-w-7xl mx-auto pt-20 px-4 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Bugema University Publications</h2>
        <p className="text-muted-foreground">Explore our latest research and academic publications</p>
      </div>

      {error && (
        <div className="bg-destructive/10 text-destructive p-4 rounded-md mb-6">
          <p className="font-medium">Error loading publications</p>
          <p className="text-sm">{error.message}</p>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search by title, author or keywords..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={yearFilter} onValueChange={setYearFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={year || ""}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="card" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="card">Card View</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="mt-6">
          {loading ? (
            Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="mb-4">
                  <Skeleton className="h-8 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-1" />
                  <Skeleton className="h-4 w-1/4 mb-1" />
                  <Skeleton className="h-20 w-full mb-4" />
                </div>
              ))
          ) : filteredPublications.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No publications found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="space-y-4">
              {currentItems.map((publication) => (
                <Card key={publication.item_uuid} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{publication.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <User className="mr-1 h-4 w-4" />
                      <span>{publication.authors || "Unknown Authors"}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    {publication.abstract && (
                      <p className="text-muted-foreground">{truncateText(publication.abstract, 300)}</p>
                    )}
                  </CardContent>
                  <CardFooter className="flex flex-wrap items-center gap-2 pt-0">
                    {publication.date && (
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {publication.date}
                      </Badge>
                    )}
                    {publication.uri && (
                      <Button variant="link" className="h-auto p-0" asChild>
                        <a href={publication.uri} target="_blank" rel="noopener noreferrer">
                          View Publication
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-6 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <span className="flex items-center px-2">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          )}
        </TabsContent>

        <TabsContent value="card" className="mt-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <Skeleton className="h-6 w-full mb-2" />
                      <Skeleton className="h-4 w-2/3" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-20 w-full" />
                    </CardContent>
                    <CardFooter>
                      <Skeleton className="h-4 w-1/3" />
                    </CardFooter>
                  </Card>
                ))}
            </div>
          ) : filteredPublications.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No publications found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentItems.map((publication) => (
                  <Card key={publication.item_uuid} className="flex flex-col h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg line-clamp-2">{publication.title}</CardTitle>
                      <CardDescription className="flex items-center">
                        <User className="mr-1 h-3 w-3" />
                        {truncateText(publication.authors || "Unknown Authors", 40)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pb-2">
                      {publication.abstract ? (
                        <p className="text-sm text-muted-foreground line-clamp-4">{publication.abstract}</p>
                      ) : (
                        <p className="text-sm text-muted-foreground italic">No abstract available</p>
                      )}
                    </CardContent>
                    <CardFooter className="flex flex-wrap items-center gap-2 pt-0">
                      {publication.date && (
                        <Badge variant="outline" className="flex items-center gap-1 text-xs">
                          <Clock className="h-3 w-3" />
                          {publication.date}
                        </Badge>
                      )}
                      {publication.uri && (
                        <Button variant="link" size="sm" className="ml-auto h-auto p-0" asChild>
                          <a href={publication.uri} target="_blank" rel="noopener noreferrer">
                            View
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-6 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <span className="flex items-center px-2">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

