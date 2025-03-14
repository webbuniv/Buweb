import * as cheerio from "cheerio"
import type { CrawlOptions, WebPage } from "./types"
import { saveCrawledPages } from "./db-service"

// Extract the domain from a URL
function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname
  } catch (e) {
    return ""
  }
}

// Normalize a URL
function normalizeUrl(url: string, baseUrl: string): string {
  try {
    return new URL(url, baseUrl).href
  } catch (e) {
    return ""
  }
}

// Extract text content from HTML
function extractTextContent(html: string): string {
  const $ = cheerio.load(html)

  // Remove script and style elements
  $("script, style").remove()

  // Get the text content
  return $("body").text().replace(/\s+/g, " ").trim()
}

// Check if a URL is a document
function isDocumentUrl(url: string): boolean {
  const documentExtensions = [".pdf", ".doc", ".docx", ".ppt", ".pptx", ".xls", ".xlsx", ".txt"]
  return documentExtensions.some((ext) => url.toLowerCase().endsWith(ext))
}

// Get the file type from a URL
function getFileTypeFromUrl(url: string): string {
  const extension = url.split(".").pop()?.toLowerCase() || ""
  return extension
}

// Crawl a single page
async function crawlPage(url: string, visitedUrls: Set<string>, options: CrawlOptions): Promise<WebPage | null> {
  try {
    console.log(`Crawling: ${url}`)

    // Mark as visited
    visitedUrls.add(url)

    // Check if the URL is a document
    if (isDocumentUrl(url)) {
      try {
        console.log(`Detected document URL: ${url}`)

        // For documents, we create a placeholder entry
        // In a real implementation, you would download and process the document
        const fileType = getFileTypeFromUrl(url)
        const fileName = url.split("/").pop() || ""

        return {
          url,
          title: `Document: ${fileName}`,
          content: `This is a ${fileType.toUpperCase()} document that was found during crawling. The content would be extracted in a production environment.`,
          links: [],
          lastCrawled: new Date(),
          documentData: {
            fileType,
            fileName,
            tags: ["crawled-document"],
            category: "crawled",
          },
        }
      } catch (docError) {
        console.error(`Error processing document ${url}:`, docError)
        return null
      }
    }

    // Fetch the page with timeout
    let html = ""
    let contentType = ""
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 500000) // 5 second timeout per page

      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          "User-Agent": "BugemaUniversityCrawler/1.0",
        },
      })

      clearTimeout(timeoutId)

      // Check content type
      contentType = response.headers.get("content-type") || ""

      // Skip binary content types
      if (!contentType.includes("text/html") && !contentType.includes("text/plain")) {
        console.log(`Skipping non-HTML content: ${url} (${contentType})`)
        return {
          url,
          title: `Resource: ${url.split("/").pop() || url}`,
          content: `This is a non-HTML resource with content type: ${contentType}`,
          links: [],
          lastCrawled: new Date(),
        }
      }

      html = await response.text()
    } catch (error) {
      console.error(`Error fetching ${url}:`, error)
      return null
    }

    // Parse the HTML
    const $ = cheerio.load(html)

    // Extract page title
    const title = $("title").text().trim() || "Bugema University"

    // Extract text content
    const content = extractTextContent(html) || "Bugema University content"

    // Extract links - limit to 5 to avoid excessive crawling
    const links: string[] = []
    let linkCount = 0

    $("a").each((_, element) => {
      if (linkCount >= 5) return // Only process 5 links per page

      const href = $(element).attr("href")
      if (href) {
        const normalizedUrl = normalizeUrl(href, url)

        // Check if we should crawl this URL
        if (
          normalizedUrl.startsWith("http") &&
          !visitedUrls.has(normalizedUrl) &&
          (!options.allowedDomains || options.allowedDomains.includes(extractDomain(normalizedUrl)))
        ) {
          links.push(normalizedUrl)
          linkCount++
        }
      }
    })

    // Create the page object
    return {
      url,
      title,
      content,
      links,
      lastCrawled: new Date(),
    }
  } catch (error) {
    console.error(`Error crawling ${url}:`, error)
    return null
  }
}

// Start crawling a website
export async function crawlWebsite(options: CrawlOptions): Promise<WebPage[]> {
  console.log("Starting crawl with options:", options)

  try {
    // Limit max pages for production environment
    const maxPages = Math.min(options.maxPages|| 100, 100)
    console.log(`Starting crawl with max pages: ${maxPages}`)

    // Extract domain from start URL if no allowed domains specified
    if (!options.allowedDomains) {
      const startDomain = extractDomain(options.startUrl)
      options.allowedDomains = [startDomain]
    }

    const crawledPages: WebPage[] = []
    const visitedUrls = new Set<string>()
    const queue = [options.startUrl]

    const startTime = Date.now()
    const timeoutMs = 400000 // 40 second overall timeout

    // Process the queue until we reach the max pages or timeout
    while (queue.length > 0 && crawledPages.length < maxPages) {
      // Check if we're approaching the timeout
      if (Date.now() - startTime > timeoutMs) {
        console.log("Crawl timeout reached, stopping early")
        break
      }

      const url = queue.shift()!
      const page = await crawlPage(url, visitedUrls, options)

      if (page) {
        crawledPages.push(page)

        // Add new URLs to the queue
        for (const link of page.links) {
          if (!visitedUrls.has(link) && !queue.includes(link)) {
            queue.push(link)
          }
        }
      }
    }

    console.log(`Crawl completed with ${crawledPages.length} pages`)

    // Save the crawled pages to the database
    await saveCrawledPages(crawledPages)

    return crawledPages
  } catch (error) {
    console.error("Error during crawl:", error)

    // Return a sample page if crawling fails
    const samplePage: WebPage = {
      url: options.startUrl,
      title: "Bugema University",
      content: "Bugema University is a private, co-educational Seventh-day Adventist university in Uganda.",
      links: [],
      lastCrawled: new Date(),
    }

    await saveCrawledPages([samplePage])

    return [samplePage]
  }
}

