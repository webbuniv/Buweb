"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Briefcase, Calendar, ExternalLink, Filter } from "lucide-react"

interface AlumniMember {
  id: string
  studentId: string
  name: string
  graduationYear: number
  school: string
  degree: string
  currentPosition?: string
  company?: string
  location?: string
  linkedIn?: string
  interests: string[]
  willingToMentor: boolean
}

interface Pagination {
  currentPage: number
  totalPages: number
  totalCount: number
  hasNext: boolean
  hasPrev: boolean
}

const schools = [
  "School of Agriculture",
  "School of Business",
  "School of Education",
  "School of Health Sciences",
  "School of Science and Technology",
  "School of Social Sciences",
  "School of Theology",
  "School of Graduate Studies",
]

const AlumniDirectoryFull = () => {
  const [alumni, setAlumni] = useState<AlumniMember[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSchool, setSelectedSchool] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [pagination, setPagination] = useState<Pagination>({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
    hasNext: false,
    hasPrev: false,
  })

  useEffect(() => {
    fetchAlumni()
  }, [pagination.currentPage, selectedSchool, selectedYear, searchTerm])

  const fetchAlumni = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: pagination.currentPage.toString(),
        limit: "12",
      })

      if (searchTerm) params.append("search", searchTerm)
      if (selectedSchool !== "all") params.append("school", selectedSchool)
      if (selectedYear !== "all") params.append("graduationYear", selectedYear)

      const response = await fetch(`/api/alumni/directory?${params}`)
      const data = await response.json()

      if (data.success) {
        setAlumni(data.data.alumni)
        setPagination(data.data.pagination)
      }
    } catch (error) {
      console.error("Error fetching alumni:", error)
    } finally {
      setLoading(false)
    }
  }

  const handlePageChange = (newPage: number) => {
    setPagination((prev) => ({ ...prev, currentPage: newPage }))
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedSchool("all")
    setSelectedYear("all")
    setPagination((prev) => ({ ...prev, currentPage: 1 }))
  }

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[510px] text-center">
          <h1 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Alumni Directory
          </h1>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            Connect with {pagination.totalCount.toLocaleString()} Bugema University graduates worldwide
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by name, company, or position..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedSchool} onValueChange={setSelectedSchool}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="All Schools" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Schools</SelectItem>
                {schools.map((school) => (
                  <SelectItem key={school} value={school}>
                    {school.replace("School of ", "")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full md:w-[150px]">
                <SelectValue placeholder="All Years" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {Array.from({ length: 30 }, (_, i) => 2024 - i).map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={clearFilters}>
              <Filter className="mr-2 h-4 w-4" />
              Clear
            </Button>
          </div>
        </div>

        {/* Alumni Grid */}
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(12)].map((_, index) => (
              <Card key={index} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-gray-200 rounded"></div>
                    <div className="h-6 w-20 bg-gray-200 rounded"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : alumni.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {alumni.map((member) => (
              <Card key={member.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1">{member.name}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">ID: {member.studentId}</p>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-body-color">
                      <Calendar className="mr-2 h-3 w-3 flex-shrink-0" />
                      <span className="truncate">Class of {member.graduationYear}</span>
                    </div>
                    <div className="flex items-start text-body-color">
                      <Briefcase className="mr-2 h-3 w-3 flex-shrink-0 mt-0.5" />
                      <span className="truncate">
                        {member.currentPosition || "Position not specified"}
                        {member.company && ` at ${member.company}`}
                      </span>
                    </div>
                    {member.location && (
                      <div className="flex items-center text-body-color">
                        <MapPin className="mr-2 h-3 w-3 flex-shrink-0" />
                        <span className="truncate">{member.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.willingToMentor && (
                      <Badge variant="secondary" className="text-xs">
                        Mentor
                      </Badge>
                    )}
                    {member.interests.slice(0, 2).map((interest) => (
                      <Badge key={interest} variant="outline" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>

                  {member.linkedIn && (
                    <div className="flex justify-end">
                      <Link href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" className="text-xs">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          LinkedIn
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-body-color">No alumni found matching your criteria.</p>
            <Button variant="outline" onClick={clearFilters} className="mt-4 bg-transparent">
              Clear Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => handlePageChange(pagination.currentPage - 1)}
                disabled={!pagination.hasPrev}
              >
                Previous
              </Button>

              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                  const pageNum = Math.max(1, pagination.currentPage - 2) + i
                  if (pageNum > pagination.totalPages) return null

                  return (
                    <Button
                      key={pageNum}
                      variant={pageNum === pagination.currentPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  )
                })}
              </div>

              <Button
                variant="outline"
                onClick={() => handlePageChange(pagination.currentPage + 1)}
                disabled={!pagination.hasNext}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default AlumniDirectoryFull
