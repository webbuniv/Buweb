"use client"

import { useState, useEffect } from "react"
import axios from "axios"

interface Publication {
  item_uuid: string
  title: string
  authors: string | null
  uri: string | null
  date: string | null
  abstract: string | null
}

interface UsePublicationsResult {
  publications: Publication[]
  filteredPublications: Publication[]
  loading: boolean
  error: Error | null
  searchTerm: string
  setSearchTerm: (term: string) => void
  yearFilter: string
  setYearFilter: (year: string) => void
  years: string[]
  currentPage: number
  setCurrentPage: (page: number) => void
  totalPages: number
  currentItems: Publication[]
  itemsPerPage: number
}

export function usePublications(itemsPerPage = 5): UsePublicationsResult {
  const [publications, setPublications] = useState<Publication[]>([])
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [yearFilter, setYearFilter] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)

  // Fetch publications data
  useEffect(() => {
    const fetchPublications = async () => {
      try {
        setLoading(true)

        const response = await axios.get("https://api.bugemauniv.ac.ug/api/items")

        const data = response.data

        const validPublications = data.filter(
          (pub: Publication) => pub.title && !pub.title.includes("kdsfnvkefmkvfs") && pub.authors,
        )

        setPublications(validPublications)
        setFilteredPublications(validPublications)
        setError(null)
      } catch (err) {
        console.error("Error fetching publications:", err)
        setError(err instanceof Error ? err : new Error("An unknown error occurred"))
      } finally {
        setLoading(false)
      }
    }

    fetchPublications()
  }, [])

  // Apply filters when search term or year filter changes
  useEffect(() => {
    let result = publications

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (pub) =>
          (pub.title && pub.title.toLowerCase().includes(term)) ||
          (pub.authors && pub.authors.toLowerCase().includes(term)) ||
          (pub.abstract && pub.abstract.toLowerCase().includes(term)),
      )
    }

    // Apply year filter
    if (yearFilter !== "all") {
      result = result.filter((pub) => pub.date && pub.date.includes(yearFilter))
    }

    setFilteredPublications(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [searchTerm, yearFilter, publications])

  // Get unique years for the filter
  const years = Array.from(
    new Set(
      publications
        .map((pub) => pub.date && pub.date.split("-")[0])
        .filter(Boolean)
        .sort((a, b) => Number(b) - Number(a)),
    ),
  )

  // Pagination logic
  const totalPages = Math.ceil(filteredPublications.length / itemsPerPage)
  const currentItems = filteredPublications.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return {
    publications,
    filteredPublications,
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
    itemsPerPage,
  }
}
