"use server"

import {
  crawlWebsite,
  searchPages,
  getCrawledPages,
  type WebPage,
  getUniversityContactInfo,
  getAllPrograms,
  getAdmissionInfo,
  getAllFacilities,
  getAllEvents,
  getAllFAQs,
} from "@/lib/university-crawler"
import { processMessage } from "@/lib/university-chat-handler"

export async function startCrawl(formData: FormData) {
  const startUrl = formData.get("startUrl") as string
  const maxPagesStr = formData.get("maxPages") as string
  const maxPages = Number.parseInt(maxPagesStr, 10) || 50

  if (!startUrl) {
    return { success: false, message: "Start URL is required" }
  }

  try {
    await crawlWebsite({
      startUrl,
      maxPages,
    })

    const contactInfo = getUniversityContactInfo()
    const programs = getAllPrograms()
    const admissions = getAdmissionInfo()

    return {
      success: true,
      message: `Successfully crawled ${getCrawledPages().length} pages and found ${programs.length} academic programs`,
    }
  } catch (error) {
    return {
      success: false,
      message: `Error crawling website: ${(error as Error).message}`,
    }
  }
}

export async function searchWebsite(query: string): Promise<WebPage[]> {
  if (!query.trim()) {
    return []
  }

  return searchPages(query)
}

export async function getPageCount(): Promise<number> {
  return getCrawledPages().length
}

export async function handleChatMessage(message: string) {
  return processMessage(message)
}

export async function getUniversityContact() {
  return getUniversityContactInfo()
}

export async function getUniversityPrograms() {
  return getAllPrograms()
}

export async function getUniversityAdmissions() {
  return getAdmissionInfo()
}

export async function getUniversityFacilities() {
  return getAllFacilities()
}

export async function getUniversityEvents() {
  return getAllEvents()
}

export async function getUniversityFAQs() {
  return getAllFAQs()
}

