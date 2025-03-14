import supabase from "./supabase-client"
import { sampleBugemaData } from "./sample-data"
import type { AcademicProgram, AdmissionInfo, ContactInfo, Event, FAQItem, Facility, WebPage } from "./types"

// Table name for university data
const UNIVERSITY_DATA_TABLE = "university_data"

// Initialize the database with sample data
export async function initializeDatabase() {
  try {
    console.log("Checking if database is initialized...")

    // Check if we have data already
    const { data, error } = await supabase.from(UNIVERSITY_DATA_TABLE).select("id").limit(1)

    if (error) {
      console.error("Error checking database:", error)
      return { success: false, error }
    }

    // If we have data, we're already initialized
    if (data && data.length > 0) {
      console.log("Database already initialized")
      return { success: true }
    }

    console.log("Initializing database with sample data...")

    // Insert sample data
    const { error: insertError } = await supabase.from(UNIVERSITY_DATA_TABLE).insert([
      { data_type: "contactInfo", data: sampleBugemaData.contactInfo },
      { data_type: "programs", data: sampleBugemaData.programs },
      { data_type: "admissions", data: sampleBugemaData.admissions },
      { data_type: "events", data: sampleBugemaData.events },
      { data_type: "faq", data: sampleBugemaData.faq },
      { data_type: "facilities", data: sampleBugemaData.facilities },
      {
        data_type: "pages",
        data: [
          {
            url: "https://bugemauniv.ac.ug",
            title: "Bugema University",
            content: "Bugema University is a private, co-educational Seventh-day Adventist university in Uganda.",
            links: [],
            lastCrawled: new Date().toISOString(),
          },
        ],
      },
    ])

    if (insertError) {
      console.error("Error initializing database:", insertError)
      return { success: false, error: insertError }
    }

    console.log("Database initialized successfully")
    return { success: true }
  } catch (error) {
    console.error("Unexpected error initializing database:", error)
    return { success: false, error }
  }
}

// Get contact information
export async function getContactInfo(): Promise<ContactInfo> {
  try {
    const { data, error } = await supabase
      .from(UNIVERSITY_DATA_TABLE)
      .select("data")
      .eq("data_type", "contactInfo")
      .single()

    if (error || !data) {
      console.error("Error getting contact info:", error)
      return sampleBugemaData.contactInfo
    }

    return data.data as ContactInfo
  } catch (error) {
    console.error("Unexpected error getting contact info:", error)
    return sampleBugemaData.contactInfo
  }
}

// Get academic programs
export async function getPrograms(): Promise<AcademicProgram[]> {
  try {
    const { data, error } = await supabase
      .from(UNIVERSITY_DATA_TABLE)
      .select("data")
      .eq("data_type", "programs")
      .single()

    if (error || !data) {
      console.error("Error getting programs:", error)
      return sampleBugemaData.programs
    }

    return data.data as AcademicProgram[]
  } catch (error) {
    console.error("Unexpected error getting programs:", error)
    return sampleBugemaData.programs
  }
}

// Get admission information
export async function getAdmissionInfo(): Promise<AdmissionInfo> {
  try {
    const { data, error } = await supabase
      .from(UNIVERSITY_DATA_TABLE)
      .select("data")
      .eq("data_type", "admissions")
      .single()

    if (error || !data) {
      console.error("Error getting admission info:", error)
      return sampleBugemaData.admissions
    }

    return data.data as AdmissionInfo
  } catch (error) {
    console.error("Unexpected error getting admission info:", error)
    return sampleBugemaData.admissions
  }
}

// Get events
export async function getEvents(): Promise<Event[]> {
  try {
    const { data, error } = await supabase.from(UNIVERSITY_DATA_TABLE).select("data").eq("data_type", "events").single()

    if (error || !data) {
      console.error("Error getting events:", error)
      return sampleBugemaData.events
    }

    return data.data as Event[]
  } catch (error) {
    console.error("Unexpected error getting events:", error)
    return sampleBugemaData.events
  }
}

// Get FAQs
export async function getFAQs(): Promise<FAQItem[]> {
  try {
    const { data, error } = await supabase.from(UNIVERSITY_DATA_TABLE).select("data").eq("data_type", "faq").single()

    if (error || !data) {
      console.error("Error getting FAQs:", error)
      return sampleBugemaData.faq
    }

    return data.data as FAQItem[]
  } catch (error) {
    console.error("Unexpected error getting FAQs:", error)
    return sampleBugemaData.faq
  }
}

// Get facilities
export async function getFacilities(): Promise<Facility[]> {
  try {
    const { data, error } = await supabase
      .from(UNIVERSITY_DATA_TABLE)
      .select("data")
      .eq("data_type", "facilities")
      .single()

    if (error || !data) {
      console.error("Error getting facilities:", error)
      return sampleBugemaData.facilities
    }

    return data.data as Facility[]
  } catch (error) {
    console.error("Unexpected error getting facilities:", error)
    return sampleBugemaData.facilities
  }
}

// Get crawled pages
export async function getCrawledPages(): Promise<WebPage[]> {
  try {
    const { data, error } = await supabase.from(UNIVERSITY_DATA_TABLE).select("data").eq("data_type", "pages").single()

    if (error || !data) {
      console.error("Error getting crawled pages:", error)
      return [
        {
          url: "https://bugemauniv.ac.ug",
          title: "Bugema University",
          content: "Bugema University is a private, co-educational Seventh-day Adventist university in Uganda.",
          links: [],
          lastCrawled: new Date(),
        },
      ]
    }

    const pages = data.data as any[]

    // Convert string dates to Date objects
    return pages.map((page) => ({
      ...page,
      lastCrawled: new Date(page.lastCrawled),
    }))
  } catch (error) {
    console.error("Unexpected error getting crawled pages:", error)
    return [
      {
        url: "https://bugemauniv.ac.ug",
        title: "Bugema University",
        content: "Bugema University is a private, co-educational Seventh-day Adventist university in Uganda.",
        links: [],
        lastCrawled: new Date(),
      },
    ]
  }
}

// Save crawled pages
export async function saveCrawledPages(pages: WebPage[]): Promise<boolean> {
  try {
    // Convert Date objects to strings for storage
    const pagesForStorage = pages.map((page) => ({
      ...page,
      lastCrawled: page.lastCrawled.toISOString(),
    }))

    // Get existing data
    const { data: existingData, error: getError } = await supabase
      .from(UNIVERSITY_DATA_TABLE)
      .select("id, data")
      .eq("data_type", "pages")
      .single()

    if (getError && getError.code !== "PGRST116") {
      // PGRST116 is "no rows returned"
      console.error("Error getting existing pages:", getError)
      return false
    }

    if (existingData) {
      // Update existing record
      const { error: updateError } = await supabase
        .from(UNIVERSITY_DATA_TABLE)
        .update({ data: pagesForStorage })
        .eq("id", existingData.id)

      if (updateError) {
        console.error("Error updating pages:", updateError)
        return false
      }
    } else {
      // Insert new record
      const { error: insertError } = await supabase
        .from(UNIVERSITY_DATA_TABLE)
        .insert({ data_type: "pages", data: pagesForStorage })

      if (insertError) {
        console.error("Error inserting pages:", insertError)
        return false
      }
    }

    return true
  } catch (error) {
    console.error("Unexpected error saving crawled pages:", error)
    return false
  }
}

// Search pages
export async function searchPages(query: string): Promise<WebPage[]> {
  try {
    const pages = await getCrawledPages()

    if (!query.trim() || pages.length === 0) {
      return pages
    }

    const searchTerms = query.toLowerCase().split(" ")

    return pages
      .map((page) => {
        const titleLower = page.title.toLowerCase()
        const contentLower = page.content.toLowerCase()
        const isDocument = !!page.documentData

        let score = 0
        searchTerms.forEach((term) => {
          // Title matches are weighted higher
          const titleMatches = titleLower.split(term).length - 1
          score += titleMatches * 10

          // Content matches
          const contentMatches = contentLower.split(term).length - 1
          score += contentMatches

          // Boost score for documents if the term matches document metadata
          if (isDocument) {
            // Boost for document category match
            if (page.documentData?.category?.toLowerCase().includes(term)) {
              score += 5
            }

            // Boost for document tags match
            if (page.documentData?.tags?.some((tag) => tag.toLowerCase().includes(term))) {
              score += 3
            }

            // Boost for document filename match
            if (page.documentData?.fileName?.toLowerCase().includes(term)) {
              score += 2
            }
          }
        })

        return { page, score }
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.page)
  } catch (error) {
    console.error("Unexpected error searching pages:", error)
    return []
  }
}

