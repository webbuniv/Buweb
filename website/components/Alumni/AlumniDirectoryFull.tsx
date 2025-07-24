"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Briefcase, Calendar, Linkedin, Mail, Filter } from "lucide-react"

interface AlumniMember {
  id: string
  name: string
  graduationYear: number
  school: string
  degree: string
  currentPosition?: string
  company?: string
  location?: string
  interests: string[]
  willingToMentor: boolean
  linkedIn?: string
  allowContact: boolean
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
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchAlumni = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "12",
        ...(searchTerm && { search: searchTerm }),
        ...(selectedSchool !== "all" && { school: selectedSchool }),
        ...(selectedYear !== "all" && { graduationYear: selectedYear }),
        ...(selectedLocation !== "all" && { location: selectedLocation }),
      })

      const response = await fetch(`/api/alumni/directory?${params}`)
      const data = await response.json()

      if (data.success) {
        setAlumni(data.data.alumni)
        setTotalPages(data.data.pagination.pages)
      }
    } catch (error) {
      console.error("Error fetching alumni:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAlumni()
  }, [currentPage, searchTerm, selectedSchool, selectedYear, selectedLocation])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentPage(1)
    fetchAlumni()
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedSchool("all")
    setSelectedYear("all")
    setSelectedLocation("all")
    setCurrentPage(1)
  }

  return (
    <section className="py-16">
      <div className="container">
        {/* <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">Alumni Directory</h1>
          <p className="text-lg text-body-color">
            Connect with fellow Bugema University graduates from around the world
          </p>
        </div> */}

        {/* Search and Filters */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <form onSubmit={handleSearch} className="mb-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search by name, degree, position, or company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button type="submit">Search</Button>
            </div>
          </form>

          <div className="grid gap-4 md:grid-cols-4">
            <Select value={selectedSchool} onValueChange={setSelectedSchool}>
              <SelectTrigger>
                <SelectValue placeholder="All Schools" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Schools</SelectItem>
                {schools.map((school) => (
                  <SelectItem key={school} value={school}>
                    {school}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Graduation Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {Array.from({ length: 30 }, (_, i) => {
                  const year = new Date().getFullYear() - i
                  return (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>

            <Input
              placeholder="Location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            />

            <Button variant="outline" onClick={clearFilters}>
              <Filter className="mr-2 h-4 w-4" />
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Alumni Grid */}
        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="mb-4 h-4 bg-gray-200 rounded dark:bg-gray-700"></div>
                  <div className="mb-2 h-6 bg-gray-200 rounded dark:bg-gray-700"></div>
                  <div className="mb-4 h-4 bg-gray-200 rounded dark:bg-gray-700"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded dark:bg-gray-700"></div>
                    <div className="h-3 bg-gray-200 rounded dark:bg-gray-700"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : alumni.length > 0 ? (
          <>
            <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {alumni.map((member) => (
                <Card key={member.id} className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="mb-1 text-xl font-semibold text-black dark:text-white">{member.name}</h3>
                      <div className="flex items-center text-sm text-body-color">
                        <Calendar className="mr-1 h-4 w-4" />
                        Class of {member.graduationYear}
                      </div>
                    </div>

                    {member.currentPosition && (
                      <div className="mb-3 space-y-1">
                        <div className="flex items-center text-sm">
                          <Briefcase className="mr-2 h-4 w-4 text-primary" />
                          <span className="font-medium">{member.currentPosition}</span>
                        </div>
                        {member.company && <div className="text-sm text-body-color">{member.company}</div>}
                      </div>
                    )}

                    {member.location && (
                      <div className="mb-3 flex items-center text-sm text-body-color">
                        <MapPin className="mr-2 h-4 w-4" />
                        {member.location}
                      </div>
                    )}

                    <div className="mb-4">
                      <p className="mb-1 text-sm font-medium text-black dark:text-white">Education:</p>
                      <p className="text-sm text-body-color">{member.degree}</p>
                      <p className="text-sm text-body-color">{member.school}</p>
                    </div>

                    {member.interests.length > 0 && (
                      <div className="mb-4">
                        <p className="mb-2 text-sm font-medium text-black dark:text-white">Interests:</p>
                        <div className="flex flex-wrap gap-1">
                          {member.interests.slice(0, 3).map((interest, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {interest}
                            </Badge>
                          ))}
                          {member.interests.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{member.interests.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {member.willingToMentor && <Badge className="text-xs">Mentor</Badge>}
                      </div>
                      <div className="flex gap-2">
                        {member.linkedIn && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {member.allowContact && (
                          <Button size="sm" variant="outline">
                            <Mail className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = i + 1
                  return (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  )
                })}
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-body-color">No alumni found matching your criteria.</p>
            <Button onClick={clearFilters} className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default AlumniDirectoryFull
