"use client"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Eye, Search, User } from "lucide-react"
import { usePublications } from "@/lib/actions/publications.actions"

export default function PublicationFeed() {
  const {
    loading,
    searchTerm,
    setSearchTerm,
    yearFilter,
    setYearFilter,
    years,
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
  } = usePublications(6) // Show 6 items per page

  // Function to truncate text
  const truncateText = (text: string | null, maxLength: number) => {
    if (!text) return ""
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 ">
      {/* Search and filter controls */}
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search publications..."
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

      {/* Publications grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {loading
          ? // Loading skeletons
            Array(6)
              .fill(0)
              .map((_, i) => (
                <Card key={i} className="h-[320px]">
                  <CardHeader>
                    <div className="h-6 bg-muted rounded-md w-3/4 mb-2"></div>
                    <div className="h-4 bg-muted rounded-md w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-24 bg-muted rounded-md"></div>
                  </CardContent>
                  <CardFooter>
                    <div className="h-4 bg-muted rounded-md w-1/3"></div>
                  </CardFooter>
                </Card>
              ))
          : // Actual publication cards
            currentItems.map((publication) => (
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
                <CardFooter className="flex items-center justify-between pt-0">
                  {publication.date && (
                    <Badge variant="outline" className="flex items-center gap-1 text-xs">
                      <Calendar className="h-3 w-3" />
                      {publication.date}
                    </Badge>
                  )}

                  {/* This is the link to the details page */}
                  <Button variant="default" size="sm" className="ml-auto" asChild>
                    <Link href={`/publications/${publication.item_uuid}`}>
                      <Eye className="mr-1 h-3 w-3" />
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
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
  )
}

