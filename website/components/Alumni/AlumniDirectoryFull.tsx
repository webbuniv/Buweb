"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

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

interface PaginationData {
  page: number
  limit: number
  total: number
  pages: number
}

const AlumniDirectoryFull = () => {
  const [alumni, setAlumni] = useState<AlumniMember[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSchool, setFilterSchool] = useState("")
  const [filterYear, setFilterYear] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [pagination, setPagination] = useState<PaginationData>({
    page: 1,
    limit: 12,
    total: 0,
    pages: 0,
  })

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
  }, [searchTerm, filterSchool, filterYear, currentPage])

  const fetchAlumni = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "12",
        ...(searchTerm && { search: searchTerm }),
        ...(filterSchool && { school: filterSchool }),
        ...(filterYear && { year: filterYear }),
      })

      const response = await fetch(`/api/alumni/directory?${params}`)
      const result = await response.json()

      if (result.success) {
        setAlumni(result.data.alumni)
        setPagination(result.data.pagination)
      }
    } catch (error) {
      console.error("Error fetching alumni:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    setCurrentPage(1)
    fetchAlumni()
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Search and Filter Section */}
        <div className="mb-12 rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="md:col-span-2">
              <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Search Alumni</label>
              <input
                type="text"
                placeholder="Search by name, company, or position..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
              />
            </div>
            <div>
              <label className="mb-3 block text-sm font-medium text-dark dark:text-white">School/Faculty</label>
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
              <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Graduation Year</label>
              <select
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
              >
                <option value="">All Years</option>
                {Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={handleSearch}
              className="rounded-md bg-primary py-3 px-8 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-80"
            >
              Search Alumni
            </button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8">
          <p className="text-body-color">
            Showing {alumni.length} of {pagination.total} alumni
            {(searchTerm || filterSchool || filterYear) && " matching your criteria"}
          </p>
        </div>

        {/* Alumni Grid */}
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 12 }).map((_, index) => (
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {alumni.map((alumnus) => (
              <div key={alumnus.id} className="rounded-md bg-white p-6 shadow-one dark:bg-[#1D2144]">
                <div className="flex items-center mb-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
                    <Image src="/placeholder.svg?height=64&width=64" alt={alumnus.name} fill className="object-cover" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-black dark:text-white">{alumnus.name}</h3>
                    <p className="text-xs text-body-color">ID: {alumnus.id}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium text-black dark:text-white">Class of:</span> {alumnus.graduationYear}
                  </p>
                  <p>
                    <span className="font-medium text-black dark:text-white">School:</span> {alumnus.school}
                  </p>
                  <p>
                    <span className="font-medium text-black dark:text-white">Degree:</span> {alumnus.degree}
                  </p>
                  {alumnus.currentPosition && (
                    <p>
                      <span className="font-medium text-black dark:text-white">Position:</span>{" "}
                      {alumnus.currentPosition}
                    </p>
                  )}
                  {alumnus.company && (
                    <p>
                      <span className="font-medium text-black dark:text-white">Company:</span> {alumnus.company}
                    </p>
                  )}
                  {alumnus.location && (
                    <p>
                      <span className="font-medium text-black dark:text-white">Location:</span> {alumnus.location}
                    </p>
                  )}
                  {alumnus.industry && (
                    <p>
                      <span className="font-medium text-black dark:text-white">Industry:</span> {alumnus.industry}
                    </p>
                  )}
                </div>

                <div className="mt-4 space-y-2">
                  {alumnus.willingToMentor && (
                    <p className="text-xs text-green-600 dark:text-green-400">✓ Available for mentoring</p>
                  )}
                  <div className="flex space-x-2">
                    {alumnus.allowContact && (
                      <button className="flex-1 rounded bg-primary px-3 py-2 text-xs text-white hover:bg-opacity-90">
                        Connect
                      </button>
                    )}
                    <button className="flex-1 rounded border border-primary px-3 py-2 text-xs text-primary hover:bg-primary hover:text-white">
                      Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && alumni.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto mb-4 h-24 w-24 text-gray-400">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">No Alumni Found</h3>
            <p className="text-body-color">
              No alumni found matching your search criteria. Try adjusting your filters or search terms.
            </p>
          </div>
        )}

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                Previous
              </button>

              {Array.from({ length: Math.min(5, pagination.pages) }, (_, i) => {
                const page = i + 1
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "border border-gray-300 text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                )
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pagination.pages}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </section>
  )
}

export default AlumniDirectoryFull
