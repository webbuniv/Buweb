"use client"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Eye, Search, User, BookOpen, ChevronLeft, ChevronRight } from "lucide-react"
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
  } = usePublications(3) // Show 6 items per page

  // Function to truncate text
  const truncateText = (text: string | null, maxLength: number) => {
    if (!text) return ""
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
  }

  return (
    <div className=" bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <BookOpen className="h-4 w-4" />
            Research Publications
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Research & Publications</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover groundbreaking research and academic publications from our university community
          </p>
        </div>

        {/* Search and filter controls */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search publications by title, author, or keywords..."
                className="pl-12 h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="w-full md:w-[200px] h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20">
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
        </div>

        {/* Publications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {loading
            ? // Enhanced loading skeletons
              Array(6)
                .fill(0)
                .map((_, i) => (
                  <Card key={i} className="h-[380px] border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg w-3/4 mb-3 animate-pulse"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg w-1/2 animate-pulse"></div>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="space-y-2">
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg animate-pulse"></div>
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg w-5/6 animate-pulse"></div>
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg w-4/6 animate-pulse"></div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg w-1/3 animate-pulse"></div>
                    </CardFooter>
                  </Card>
                ))
            : // Enhanced publication cards
              currentItems.map((publication) => (
                <Card
                  key={publication.item_uuid}
                  className="group flex flex-col h-full border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-1"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold line-clamp-2 text-gray-900 group-hover:text-blue-700 transition-colors">
                      {publication.title}
                    </CardTitle>
                    <CardDescription className="flex items-center text-gray-600">
                      <User className="mr-2 h-4 w-4 text-gray-400" />
                      <span className="font-medium">{truncateText(publication.authors || "Unknown Authors", 40)}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pb-4">
                    {publication.abstract ? (
                      <p className="text-gray-600 line-clamp-4 leading-relaxed">{publication.abstract}</p>
                    ) : (
                      <p className="text-gray-400 italic">No abstract available</p>
                    )}
                  </CardContent>
                  <CardFooter className="flex items-center justify-between pt-0 border-t border-gray-50">
                    {publication.date && (
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-1.5 text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100"
                      >
                        <Calendar className="h-3 w-3" />
                        {publication.date}
                      </Badge>
                    )}

                    {/* Enhanced details button */}
                    <Button
                      variant="default"
                      size="sm"
                      className="ml-auto bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all duration-200"
                      asChild
                    >
                      <Link href={`/publications/${publication.item_uuid}`}>
                        <Eye className="mr-1.5 h-4 w-4" />
                        View Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
        </div>

        {/* Enhanced pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <Button
              variant="outline"
              size="default"
              onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2 border-gray-200 hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + 1
                const isActive = pageNum === currentPage
                return (
                  <Button
                    key={pageNum}
                    variant={isActive ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNum)}
                    className={
                      isActive ? "bg-blue-600 hover:bg-blue-700 text-white" : "border-gray-200 hover:bg-gray-50"
                    }
                  >
                    {pageNum}
                  </Button>
                )
              })}
              {totalPages > 5 && (
                <>
                  <span className="text-gray-400">...</span>
                  <Button
                    variant={currentPage === totalPages ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(totalPages)}
                    className={
                      currentPage === totalPages
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "border-gray-200 hover:bg-gray-50"
                    }
                  >
                    {totalPages}
                  </Button>
                </>
              )}
            </div>

            <Button
              variant="outline"
              size="default"
              onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 border-gray-200 hover:bg-gray-50 disabled:opacity-50"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
