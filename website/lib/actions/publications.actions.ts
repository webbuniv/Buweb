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
  getPublicationById: (id: string) => Publication | undefined
  getRelatedPublications: (publication: Publication) => Publication[]
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

        const validPublications = data
          .filter((pub: Publication) => pub.title && !pub.title.includes("kdsfnvkefmkvfs") && pub.authors)
          .sort((a, b) => (b.date && a.date ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0))

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

  // Get a specific publication by ID
  const getPublicationById = (id: string): Publication | undefined => {
    return publications.find((pub) => pub.item_uuid === id)
  }

  // Get related publications for a given publication
  const getRelatedPublications = (publication: Publication): Publication[] => {
    if (!publication) return []

    return publications
      .filter(
        (pub) =>
          pub.item_uuid !== publication.item_uuid &&
          ((pub.authors &&
            publication.authors &&
            pub.authors.toLowerCase().includes(publication.authors.split(",")[0].toLowerCase())) ||
            (pub.date && publication.date && pub.date.split("-")[0] === publication.date.split("-")[0])),
      )
      .slice(0, 3)
  }

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
    getPublicationById,
    getRelatedPublications,
  }
}

