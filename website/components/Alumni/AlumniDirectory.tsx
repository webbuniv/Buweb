"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface AlumniMember {
  id: string
  name: string
  graduationYear: number
  school: string
  degree: string
  currentPosition?: string
  company?: string
  location?: string
  industry?: string
  allowContact: boolean
  willingToMentor: boolean
}

const AlumniDirectory = () => {
  const [alumni, setAlumni] = useState<AlumniMember[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSchool, setFilterSchool] = useState("")
  const [filterYear, setFilterYear] = useState("")

  const schools = [
    "School of Business",
    "School of Science and Technology",
    "School of Education",
    "School of Social Sciences",
    "School of Natural Sciences",
    "School of Graduate Studies",
    "School of Agriculture",
    "School of Health Sciences",
    "School of Theology",
  ]

  useEffect(() => {
    fetchAlumni()
  }, [searchTerm, filterSchool, filterYear])

  const fetchAlumni = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        limit: "6", // Show only 6 on homepage
        ...(searchTerm && { search: searchTerm }),
        ...(filterSchool && { school: filterSchool }),
        ...(filterYear && { year: filterYear }),
      })

      const response = await fetch(`/api/alumni/directory?${params}`)
      const result = await response.json()

      if (result.success) {
        setAlumni(result.data.alumni)
      }
    } catch (error) {
      console.error("Error fetching alumni:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-bg-color-dark">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Alumni Directory
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            Connect with fellow Bugema University graduates from around the world
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 rounded-md bg-white p-6 shadow-one dark:bg-[#1D2144]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-dark dark:text-white">Search Alumni</label>
              <input
                type="text"
                placeholder="Search by name or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-dark dark:text-white">School/Faculty</label>
              <select
                value={filterSchool}
                onChange={(e) => setFilterSchool(e.target.value)}
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
              >
                <option value="">All Schools</option>
                {schools.map((school) => (
                  <option key={school} value={school}>
                    {school}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-dark dark:text-white">Graduation Year</label>
              <select
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
              >
                <option value="">All Years</option>
                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Alumni Cards */}
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="animate-pulse rounded-md bg-white p-6 shadow-one dark:bg-[#1D2144]">
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 bg-gray-300 rounded-full dark:bg-gray-600"></div>
                  <div className="ml-4 space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-32 dark:bg-gray-600"></div>
                    <div className="h-3 bg-gray-300 rounded w-24 dark:bg-gray-600"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 rounded dark:bg-gray-600"></div>
                  <div className="h-3 bg-gray-300 rounded dark:bg-gray-600"></div>
                  <div className="h-3 bg-gray-300 rounded w-3/4 dark:bg-gray-600"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {alumni.map((alumnus) => (
              <div key={alumnus.id} className="rounded-md bg-white p-6 shadow-one dark:bg-[#1D2144]">
                <div className="flex items-center mb-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
                    <Image src="/placeholder.svg?height=64&width=64" alt={alumnus.name} fill className="object-cover" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-black dark:text-white">{alumnus.name}</h3>
                    <p className="text-sm text-body-color">Alumni ID: {alumnus.id}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium text-black dark:text-white">Graduated:</span> {alumnus.graduationYear}{" "}
                    - {alumnus.school}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-black dark:text-white">Degree:</span> {alumnus.degree}
                  </p>
                  {alumnus.currentPosition && alumnus.company && (
                    <p className="text-sm">
                      <span className="font-medium text-black dark:text-white">Current Role:</span>{" "}
                      {alumnus.currentPosition} at {alumnus.company}
                    </p>
                  )}
                  {alumnus.location && (
                    <p className="text-sm">
                      <span className="font-medium text-black dark:text-white">Location:</span> {alumnus.location}
                    </p>
                  )}
                  {alumnus.willingToMentor && (
                    <p className="text-sm text-green-600 dark:text-green-400">✓ Available for mentoring</p>
                  )}
                </div>

                <div className="mt-4 flex space-x-2">
                  {alumnus.allowContact && (
                    <button className="rounded bg-primary px-4 py-2 text-sm text-white hover:bg-opacity-90">
                      Connect
                    </button>
                  )}
                  <button className="rounded border border-primary px-4 py-2 text-sm text-primary hover:bg-primary hover:text-white">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && alumni.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-body-color">No alumni found matching your search criteria.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/alumni/directory"
            className="rounded-md bg-primary py-4 px-8 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-80"
          >
            View All Alumni
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AlumniDirectory
