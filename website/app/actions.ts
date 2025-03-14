"use server"

import { crawlWebsite } from "@/lib/crawler-service"
import {
  initializeDatabase,
  getContactInfo,
  getPrograms,
  getAdmissionInfo,
  getFacilities,
  getEvents,
  getFAQs,
  getCrawledPages,
  searchPages,
} from "@/lib/db-service"
import { processMessage } from "@/lib/university-chat-handler"
import type { WebPage } from "@/lib/types"

export async function startCrawl(formData: FormData) {
  const startUrl = formData.get("startUrl") as string
  const maxPagesStr = formData.get("maxPages") as string
  const maxPages = Number.parseInt(maxPagesStr) || 100

  if (!startUrl) {
    return { success: false, message: "Start URL is required" }
  }

  try {
    console.log(`Starting crawl of ${startUrl} with max pages: ${maxPages}`)

    // Initialize the database if needed
    const initResult = await initializeDatabase()
    if (!initResult.success) {
      console.error("Database initialization failed:", initResult.error)
      return {
        success: false,
        message: `Database initialization failed: ${initResult.error}`,
      }
    }

    // Add a timeout to the crawl operation
    const crawlPromise = crawlWebsite({
      startUrl,
      maxPages: Math.min(maxPages, 100), // Limit to 20 pages max for production
    })

    // Create a timeout promise
    const timeoutPromise = new Promise<WebPage[]>((_, reject) => {
      setTimeout(() => reject(new Error("Crawl operation timed out")), 6000000) // 25 second timeout
    })

    // Race the crawl against the timeout
    const pages = await Promise.race([crawlPromise, timeoutPromise])

    // If we get here, the crawl completed before the timeout
    const programs = await getPrograms()

    console.log(`Crawl completed successfully. Found ${pages.length} pages and ${programs.length} programs`)

    return {
      success: true,
      message: `Successfully crawled ${pages.length} pages and found ${programs.length} academic programs`,
    }
  } catch (error) {
    console.error("Crawl error:", error)

    // Always return a valid object with success: false
    return {
      success: false,
      message: `Error crawling website: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}

export async function searchWebsite(query: string): Promise<WebPage[]> {
  if (!query.trim()) {
    return []
  }

  // Initialize the database if needed
  await initializeDatabase().catch((err) => {
    console.error("Database initialization failed:", err)
  })

  return searchPages(query)
}

export async function getPageCount(): Promise<number> {
  // Initialize the database if needed
  await initializeDatabase().catch((err) => {
    console.error("Database initialization failed:", err)
  })

  const pages = await getCrawledPages()
  return pages.length
}

export async function handleChatMessage(message: string) {
  // Initialize the database if needed
  await initializeDatabase().catch((err) => {
    console.error("Database initialization failed:", err)
  })

  return processMessage(message)
}

export async function getUniversityContact() {
  // Initialize the database if needed
  await initializeDatabase().catch((err) => {
    console.error("Database initialization failed:", err)
  })

  return getContactInfo()
}

export async function getUniversityPrograms() {
  // Initialize the database if needed
  await initializeDatabase().catch((err) => {
    console.error("Database initialization failed:", err)
  })

  return getPrograms()
}

export async function getUniversityAdmissions() {
  // Initialize the database if needed
  await initializeDatabase().catch((err) => {
    console.error("Database initialization failed:", err)
  })

  return getAdmissionInfo()
}

export async function getUniversityFacilities() {
  // Initialize the database if needed
  await initializeDatabase().catch((err) => {
    console.error("Database initialization failed:", err)
  })

  return getFacilities()
}

export async function getUniversityEvents() {
  // Initialize the database if needed
  await initializeDatabase().catch((err) => {
    console.error("Database initialization failed:", err)
  })

  return getEvents()
}

export async function getUniversityFAQs() {
  // Initialize the database if needed
  await initializeDatabase().catch((err) => {
    console.error("Database initialization failed:", err)
  })

  return getFAQs()
}

