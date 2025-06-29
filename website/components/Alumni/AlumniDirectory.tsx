"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Briefcase, Calendar, ExternalLink, GraduationCap } from "lucide-react"

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

const AlumniDirectory = () => {
  const [alumni, setAlumni] = useState<AlumniMember[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetchAlumni()
  }, [])

  const fetchAlumni = async () => {
    try {
      const response = await fetch("/api/alumni/directory?limit=6")
      const data = await response.json()
      if (data.success) {
        setAlumni(data.data.alumni)
      }
    } catch (error) {
      console.error("Error fetching alumni:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredAlumni = alumni.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.company?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-17.5">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Alumni Directory
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            Connect with fellow Bugema University graduates from around the world
          </p>
        </div>

        <div className="mb-8">
          <div className="relative mx-auto max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search alumni by name, school, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
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
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredAlumni.map((member) => (
              <Card key={member.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">ID: {member.studentId}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-body-color">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      {member.degree} • {member.school}
                    </div>
                    <div className="flex items-center text-sm text-body-color">
                      <Calendar className="mr-2 h-4 w-4" />
                      Class of {member.graduationYear}
                    </div>
                    {member.currentPosition && (
                      <div className="flex items-center text-sm text-body-color">
                        <Briefcase className="mr-2 h-4 w-4" />
                        {member.currentPosition}
                        {member.company && ` at ${member.company}`}
                      </div>
                    )}
                    {member.location && (
                      <div className="flex items-center text-sm text-body-color">
                        <MapPin className="mr-2 h-4 w-4" />
                        {member.location}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.willingToMentor && <Badge variant="secondary">Mentor</Badge>}
                    {member.interests.slice(0, 2).map((interest) => (
                      <Badge key={interest} variant="outline">
                        {interest}
                      </Badge>
                    ))}
                  </div>

                  {member.linkedIn && (
                    <div className="flex justify-end">
                      <Link href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          LinkedIn
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/alumni/directory">
            <Button size="lg">View Full Directory</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AlumniDirectory
