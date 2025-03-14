import {
  getContactInfo,
  getPrograms,
  getAdmissionInfo,
  getFacilities,
  getEvents,
  getFAQs,
  searchPages,
} from "./db-service"
import type { WebPage, AcademicProgram, Facility } from "./types"
import { sampleBugemaData } from "./sample-data"

type Intent =
  | "greeting"
  | "farewell"
  | "contact"
  | "programs"
  | "admissions"
  | "tuition"
  | "facilities"
  | "events"
  | "faq"
  | "general"
  | "history"
  | "location"
  | "studentLife"

type ChatResponse = {
  message: string
  sources?: WebPage[]
}

// Update the patterns for intent detection to include new categories
const patterns = {
  greeting: [/^(hi|hello|hey|greetings|howdy|hiya)/i, /^good (morning|afternoon|evening)/i],
  farewell: [/^(bye|goodbye|see you|farewell|thanks|thank you)/i],
  contact: [
    /^(contact|email|phone|call|reach|get in touch|connect)/i,
    /(contact|email|phone|address|location|office|headquarters)/i,
    /how (can|do) I (contact|reach|get in touch|connect)/i,
  ],
  programs: [
    /(programs?|courses?|degrees?|majors?|study|studies|academics?)/i,
    /(bachelor'?s?|master'?s?|phd|doctorate|diploma|certificate)/i,
    /what (programs?|courses?|degrees?|majors?) (do you|does bugema|are) offer/i,
  ],
  admissions: [
    /(admissions?|apply|application|enroll|enrollment|entry)/i,
    /how (can|do) I (apply|enroll|register|join)/i,
    /(requirements?|qualifications?|criteria|eligible|eligibility)/i,
  ],
  tuition: [
    /(tuition|fees?|costs?|expenses?|price|pricing)/i,
    /how much (does it cost|is tuition|are fees)/i,
    /(scholarships?|financial aid|funding|grants?|bursaries?)/i,
  ],
  facilities: [
    /(facilities?|campus|buildings?|infrastructure|amenities)/i,
    /(library|lab|laboratory|dormitory|hostel|accommodation|housing)/i,
    /(sports|recreation|gym|fitness)/i,
  ],
  events: [
    /(events?|activities?|calendar|schedule|upcoming|happening)/i,
    /(graduation|ceremony|orientation|conference|seminar|workshop)/i,
  ],
  history: [
    /(history|founded|established|began|started|origin|background|milestone)/i,
    /when was (bugema|the university) (founded|established|started)/i,
    /tell me about (bugema|the university)'s history/i,
  ],
  location: [
    /(location|where|address|directions|map|campus|situated)/i,
    /where is (bugema|the university) located/i,
    /how (can|do) I (get to|reach|find) (bugema|the university)/i,
  ],
  studentLife: [
    /(student life|campus life|activities|clubs|organizations|dormitory|hostel)/i,
    /(sports|recreation|gym|fitness|cultural|events)/i,
    /what (activities|clubs|organizations) are available/i,
  ],
  faq: [/^(faq|frequently asked|common questions)/i],
}

/**
 * Detect the intent of a user message
 */
function detectIntent(message: string): Intent {
  // Check each pattern
  for (const [intent, patternList] of Object.entries(patterns)) {
    for (const pattern of patternList) {
      if (pattern.test(message)) {
        return intent as Intent
      }
    }
  }

  // Default to general intent
  return "general"
}

/**
 * Generate a greeting response
 */
function generateGreeting(): ChatResponse {
  const greetings = [
    "# Welcome to Bugema University! 👋\n\nI'm your virtual assistant, here to provide information about our programs, admissions, campus facilities, and more. How can I help you today?",

    "# Hello! 👋\n\nI'm Bugema University's virtual assistant. I can answer questions about our academic programs, admission requirements, tuition fees, campus life, and more. What would you like to know?",

    "# Greetings! 👋\n\nWelcome to Bugema University's virtual assistant. I'm here to help with information about our institution. Feel free to ask about programs, admissions, campus facilities, or anything else you'd like to know.",

    "# Hi there! 👋\n\nI'm here to provide information about Bugema University - our programs, admissions process, campus life, and more. What information are you looking for today?",
  ]

  return {
    message: greetings[Math.floor(Math.random() * greetings.length)],
  }
}

/**
 * Generate a farewell response
 */
function generateFarewell(): ChatResponse {
  const farewells = [
    "Thank you for your interest in Bugema University! Feel free to return if you have more questions. Wishing you success in your academic journey! 👋",

    "It's been a pleasure assisting you! If you need more information, don't hesitate to visit our campus or contact our admissions office at info@bugemauniv.ac.ug. Have a great day! 👋",

    "Thank you for chatting with Bugema University's virtual assistant. We hope to welcome you to our campus soon! If you have more questions later, I'll be here to help. 👋",

    "Goodbye and thank you for your interest in Bugema University! Remember, our admissions team is always available to provide further assistance at +256-312-351400. Best wishes! 👋",
  ]

  return {
    message: farewells[Math.floor(Math.random() * farewells.length)],
  }
}

/**
 * Generate a contact information response
 */
async function generateContactResponse(): Promise<ChatResponse> {
  const contactInfo = await getContactInfo()

  if (!contactInfo) {
    return {
      message:
        "I'm sorry, I couldn't find contact information for Bugema University. You can visit our website at https://bugemauniv.ac.ug for the most up-to-date contact details.",
    }
  }

  let message = "# Contact Information\n\n"

  if (contactInfo.email) {
    message += `📧 **Email:** ${contactInfo.email}\n\n`
  }

  if (contactInfo.phone) {
    message += `📞 **Phone:** ${contactInfo.phone}\n\n`
  }

  if (contactInfo.address) {
    message += `📍 **Address:** ${contactInfo.address}\n\n`
  }

  if (contactInfo.socialMedia) {
    message += "### Connect with us on social media:\n\n"

    for (const [platform, url] of Object.entries(contactInfo.socialMedia)) {
      message += `* **${platform.charAt(0).toUpperCase() + platform.slice(1)}:** ${url}\n`
    }
    message += "\n"
  }

  message += "### Office Hours\n\n"
  message += "Our Admissions Office is open Monday to Friday, 8:00 AM to 5:00 PM.\n\n"
  message += "For urgent inquiries outside office hours, please email info@bugemauniv.ac.ug."

  return { message }
}

/**
 * Generate a response about academic programs
 */
async function generateProgramsResponse(query: string): Promise<ChatResponse> {
  const programs = await getPrograms()

  if (programs.length === 0) {
    return {
      message:
        "I'm sorry, I couldn't find information about our academic programs. Please visit our website at https://bugemauniv.ac.ug/academics for the most up-to-date program information.",
    }
  }

  // Check if the query is about a specific program level
  const queryLower = query.toLowerCase()
  let filteredPrograms: AcademicProgram[] = programs

  if (queryLower.includes("undergraduate") || queryLower.includes("bachelor")) {
    filteredPrograms = programs.filter((p) => p.level === "Undergraduate")
  } else if (queryLower.includes("graduate") || queryLower.includes("master") || queryLower.includes("mba")) {
    filteredPrograms = programs.filter((p) => p.level === "Graduate")
  } else if (queryLower.includes("phd") || queryLower.includes("doctorate")) {
    filteredPrograms = programs.filter((p) => p.level === "PhD")
  } else if (queryLower.includes("diploma")) {
    filteredPrograms = programs.filter((p) => p.level === "Diploma")
  } else if (queryLower.includes("certificate")) {
    filteredPrograms = programs.filter((p) => p.level === "Certificate")
  }

  // Check if the query is about a specific field
  const fields = [
    {
      keywords: ["business", "administration", "management", "accounting", "finance", "marketing"],
      department: "School of Business",
    },
    {
      keywords: ["computer", "computing", "it", "information technology", "software", "programming"],
      department: "School of Computing and Informatics",
    },
    { keywords: ["education", "teaching", "teacher"], department: "School of Education" },
    {
      keywords: ["health", "nursing", "medical", "medicine", "public health"],
      department: "School of Health Sciences",
    },
  ]

  for (const field of fields) {
    if (field.keywords.some((keyword) => queryLower.includes(keyword))) {
      filteredPrograms = filteredPrograms.filter((p) => p.department === field.department)
      break
    }
  }

  // If we have specific programs to show
  if (filteredPrograms.length > 0 && filteredPrograms.length < programs.length) {
    let message = `# ${filteredPrograms[0].level || ""} Programs${filteredPrograms[0].department ? ` in ${filteredPrograms[0].department}` : ""}\n\n`

    filteredPrograms.forEach((program) => {
      message += `### ${program.name}\n\n`
      if (program.duration) message += `**Duration:** ${program.duration}\n\n`
      if (program.description) message += `${program.description}\n\n`
    })

    message +=
      "For more detailed information about these programs, please visit our website or contact the Admissions Office at info@bugemauniv.ac.ug."

    return { message }
  }

  // Otherwise, give an overview of all programs
  let message = "# Academic Programs at Bugema University\n\n"
  message += "Bugema University offers a wide range of academic programs across various disciplines:\n\n"

  // Group by level
  const programsByLevel: Record<string, AcademicProgram[]> = {}

  programs.forEach((program) => {
    if (!programsByLevel[program.level]) {
      programsByLevel[program.level] = []
    }
    programsByLevel[program.level].push(program)
  })

  for (const [level, levelPrograms] of Object.entries(programsByLevel)) {
    message += `## ${level} Programs\n\n`

    levelPrograms.forEach((program) => {
      message += `* ${program.name}\n`
    })

    message += "\n"
  }

  message +=
    "For more detailed information about our programs, please specify which program or field you're interested in, or visit our website at https://bugemauniv.ac.ug/academics."

  return { message }
}

/**
 * Generate a response about admissions
 */
async function generateAdmissionsResponse(query: string): Promise<ChatResponse> {
  const admissionInfo = await getAdmissionInfo()

  if (!admissionInfo) {
    return {
      message:
        "I'm sorry, I couldn't find information about our admissions process. Please visit our website at https://bugemauniv.ac.ug/admissions for the most up-to-date admissions information.",
    }
  }

  const queryLower = query.toLowerCase()

  // Check if the query is about requirements
  if (queryLower.includes("requirement") || queryLower.includes("qualif") || queryLower.includes("eligible")) {
    return {
      message: `# Admission Requirements\n\n${admissionInfo.requirements?.replace(/\n/g, "\n\n")}\n\nFor more specific requirements for your program of interest, please contact our Admissions Office at admissions@bugemauniv.ac.ug.`,
    }
  }

  // Check if the query is about deadlines
  if (
    queryLower.includes("deadline") ||
    queryLower.includes("due date") ||
    queryLower.includes("when") ||
    queryLower.includes("last day")
  ) {
    return {
      message: `# Application Deadlines\n\n${admissionInfo.deadlines?.replace(/\n/g, "\n\n")}\n\nWe recommend applying early to ensure consideration for all available scholarships and financial aid opportunities.`,
    }
  }

  // Check if the query is about the application process
  if (queryLower.includes("process") || queryLower.includes("how to apply") || queryLower.includes("steps")) {
    // Convert numbered list to markdown format
    const formattedProcess = admissionInfo.applicationProcess?.replace(/(\d+)\.\s/g, "$1. ").replace(/\n/g, "\n\n")

    return {
      message: `# Application Process\n\n${formattedProcess}\n\nIf you need assistance with your application, please contact our Admissions Office at admissions@bugemauniv.ac.ug.`,
    }
  }

  // Check if the query is about tuition or fees
  if (
    queryLower.includes("tuition") ||
    queryLower.includes("fee") ||
    queryLower.includes("cost") ||
    queryLower.includes("price")
  ) {
    return {
      message: `# Tuition and Fees\n\n${admissionInfo.tuitionFees?.replace(/\n/g, "\n\n")}\n\nPlease note that these are approximate figures and may vary by program. For the most accurate information, please contact our Finance Office at finance@bugemauniv.ac.ug.`,
    }
  }

  // General admissions information
  let message = "# Admissions Information\n\n"

  if (admissionInfo.requirements) {
    message += `## Requirements\n\n${admissionInfo.requirements.replace(/\n/g, "\n\n")}\n\n`
  }

  if (admissionInfo.deadlines) {
    message += `## Application Deadlines\n\n${admissionInfo.deadlines.replace(/\n/g, "\n\n")}\n\n`
  }

  if (admissionInfo.applicationProcess) {
    // Convert numbered list to markdown format
    const formattedProcess = admissionInfo.applicationProcess.replace(/(\d+)\.\s/g, "$1. ").replace(/\n/g, "\n\n")

    message += `## Application Process\n\n${formattedProcess}\n\n`
  }

  if (admissionInfo.tuitionFees) {
    message += `## Tuition and Fees\n\n${admissionInfo.tuitionFees.replace(/\n/g, "\n\n")}\n\n`
  }

  message +=
    "For more information or to start your application, please visit our website at https://bugemauniv.ac.ug/admissions or contact our Admissions Office at admissions@bugemauniv.ac.ug."

  return { message }
}

/**
 * Generate a response about tuition and fees
 */
async function generateTuitionResponse(): Promise<ChatResponse> {
  const admissionInfo = await getAdmissionInfo()

  if (!admissionInfo || !admissionInfo.tuitionFees) {
    return {
      message:
        "I'm sorry, I couldn't find specific information about tuition and fees. Please contact our Finance Office at finance@bugemauniv.ac.ug for the most accurate and up-to-date information.",
    }
  }

  let message = "# Tuition and Fees\n\n"

  // Format the tuition fees text with proper markdown
  const formattedFees = admissionInfo.tuitionFees
    .replace(/\n/g, "\n\n")
    .replace(/(\w+) programs:/g, "### $1 Programs:")
    .replace(/Additional fees:/g, "### Additional Fees:")
    .replace(/Accommodation fees:/g, "### Accommodation Fees:")

  message += formattedFees

  message += "\n\n### Important Notes\n\n"
  message +=
    "* These figures are subject to change. Please confirm with the Finance Office before making payment arrangements.\n"
  message += "* Additional fees may apply for laboratory courses, field trips, and other special activities.\n"
  message += "* All fees are payable at the beginning of each semester unless a payment plan has been arranged.\n\n"

  message += "### Financial Aid\n\n"
  message +=
    "Bugema University offers various scholarships and financial aid options for eligible students including:\n\n"
  message += "* Merit-based scholarships for academic excellence\n"
  message += "* Need-based financial assistance\n"
  message += "* Work-study opportunities\n"
  message += "* Sports scholarships\n"
  message += "* Church-sponsored scholarships\n\n"

  message +=
    "For more information about financial aid options, please contact our Financial Aid Office at financialaid@bugemauniv.ac.ug."

  return { message }
}

/**
 * Generate a response about campus facilities
 */
async function generateFacilitiesResponse(query: string): Promise<ChatResponse> {
  const facilities = await getFacilities()

  if (facilities.length === 0) {
    return {
      message:
        "I'm sorry, I couldn't find information about our campus facilities. Please visit our website for more information about our campus.",
    }
  }

  const queryLower = query.toLowerCase()

  // Check if the query is about a specific facility
  const specificFacilities = [
    { keywords: ["library", "book", "read", "study"], type: "University Library" },
    { keywords: ["computer", "lab", "technology", "it"], type: "Computer Labs" },
    { keywords: ["sport", "game", "play", "field", "court", "gym"], type: "Sports Complex" },
    { keywords: ["student center", "cafeteria", "food", "eat", "dining"], type: "Student Center" },
    { keywords: ["health", "clinic", "medical", "doctor", "nurse"], type: "Health Center" },
    { keywords: ["dorm", "hostel", "accommodation", "housing", "live", "residence"], type: "Student Dormitories" },
  ]

  for (const specificFacility of specificFacilities) {
    if (specificFacility.keywords.some((keyword) => queryLower.includes(keyword))) {
      const matchingFacilities = facilities.filter(
        (f) =>
          f.name.toLowerCase().includes(specificFacility.type.toLowerCase()) ||
          (f.description && f.description.toLowerCase().includes(specificFacility.type.toLowerCase())),
      )

      if (matchingFacilities.length > 0) {
        let message = `# ${specificFacility.type} at Bugema University\n\n`

        matchingFacilities.forEach((facility) => {
          message += `## ${facility.name}\n\n`
          if (facility.description) message += `${facility.description}\n\n`
          if (facility.location) message += `**Location:** ${facility.location}\n\n`
        })

        return { message }
      }
    }
  }

  // Group facilities by type
  const facilityGroups: Record<string, Facility[]> = {
    "Academic Facilities": [],
    "Residential Facilities": [],
    "Recreational Facilities": [],
    "Support Facilities": [],
    "Other Facilities": [],
  }

  // Categorize facilities
  facilities.forEach((facility) => {
    const name = facility.name.toLowerCase()
    if (
      name.includes("library") ||
      name.includes("lab") ||
      name.includes("classroom") ||
      name.includes("conference") ||
      name.includes("science")
    ) {
      facilityGroups["Academic Facilities"].push(facility)
    } else if (
      name.includes("dormitor") ||
      name.includes("housing") ||
      name.includes("accommodation") ||
      name.includes("residence")
    ) {
      facilityGroups["Residential Facilities"].push(facility)
    } else if (
      name.includes("sport") ||
      name.includes("gym") ||
      name.includes("field") ||
      name.includes("court") ||
      name.includes("recreation")
    ) {
      facilityGroups["Recreational Facilities"].push(facility)
    } else if (
      name.includes("health") ||
      name.includes("clinic") ||
      name.includes("cafeteria") ||
      name.includes("dining") ||
      name.includes("center")
    ) {
      facilityGroups["Support Facilities"].push(facility)
    } else {
      facilityGroups["Other Facilities"].push(facility)
    }
  })

  // General facilities information
  let message = "# Campus Facilities at Bugema University\n\n"
  message +=
    "Our 640-acre campus provides a serene environment with modern facilities to support your academic journey:\n\n"

  // Add each category
  for (const [category, categoryFacilities] of Object.entries(facilityGroups)) {
    if (categoryFacilities.length > 0) {
      message += `## ${category}\n\n`

      categoryFacilities.forEach((facility) => {
        message += `### ${facility.name}\n\n`
        if (facility.description) message += `${facility.description}\n\n`
        if (facility.location) message += `**Location:** ${facility.location}\n\n`
      })
    }
  }

  message +=
    "Our campus is designed to provide a conducive environment for learning, research, and personal development. For more information about our facilities, please visit our campus or contact our information desk."

  return { message }
}

/**
 * Generate a response about events
 */
async function generateEventsResponse(): Promise<ChatResponse> {
  const events = await getEvents()

  if (events.length === 0) {
    return {
      message:
        "I'm sorry, I couldn't find information about upcoming events. Please check our website or social media channels for the latest event announcements.",
    }
  }

  let message = "# Upcoming Events at Bugema University\n\n"

  // Sort events by date if available
  const sortedEvents = [...events].sort((a, b) => {
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  })

  sortedEvents.forEach((event) => {
    message += `## ${event.name}\n\n`
    if (event.date) message += `**Date:** ${event.date}\n\n`
    if (event.location) message += `**Location:** ${event.location}\n\n`
    if (event.description) message += `${event.description}\n\n`
  })

  message +=
    "For more information about these events, please visit our website or follow us on social media for real-time updates. You can also contact the Events Office at events@bugemauniv.ac.ug."

  return { message }
}

/**
 * Generate a response for FAQ questions
 */
async function generateFAQResponse(query: string): Promise<ChatResponse> {
  const faqs = await getFAQs()

  if (faqs.length === 0) {
    return generateSearchResponse(query)
  }

  // Find the most relevant FAQ
  const queryLower = query.toLowerCase()
  let bestMatch: { faq: (typeof faqs)[0]; score: number } | null = null

  for (const faq of faqs) {
    const questionLower = faq.question.toLowerCase()

    // Calculate simple similarity score
    let score = 0
    const queryWords = queryLower.split(/\s+/)

    for (const word of queryWords) {
      if (word.length > 3 && questionLower.includes(word)) {
        score += 1
      }
    }

    if (!bestMatch || score > bestMatch.score) {
      bestMatch = { faq, score }
    }
  }

  // If we found a good match, use it
  if (bestMatch && bestMatch.score > 0) {
    return {
      message: `# ${bestMatch.faq.question}\n\n${bestMatch.faq.answer.replace(/\n/g, "\n\n")}`,
    }
  }

  // Fall back to general search
  return generateSearchResponse(query)
}

/**
 * Generate a response based on search results
 */
async function generateSearchResponse(query: string): Promise<ChatResponse> {
  const searchResults = await searchPages(query)

  if (searchResults.length === 0) {
    return {
      message:
        "I don't have specific information about that. You might want to check our website at https://bugemauniv.ac.ug or contact our information desk at info@bugemauniv.ac.ug for more details.",
    }
  }

  // Use the first result as the main answer
  const topResult = searchResults[0]

  // Extract a relevant snippet (first 300 characters)
  const snippet = topResult.content.substring(0, 300) + "..."

  return {
    message: `Based on information from Bugema University:\n\n${snippet}\n\nFor more detailed information on this topic, please visit our website or contact our information desk.`,
    sources: searchResults.slice(0, 3), // Include up to 3 sources
  }
}

/**
 * Generate a response about university history
 */
function generateHistoryResponse(): ChatResponse {
  const history = sampleBugemaData.universityHistory

  if (!history) {
    return {
      message:
        "I'm sorry, I couldn't find specific information about Bugema University's history. Please visit our website for more information.",
    }
  }

  let message = "# History of Bugema University\n\n"

  message += `${history.founding}\n\n`

  message += "## Key Milestones\n\n"
  history.milestones.forEach((milestone) => {
    message += `* **${milestone.year}:** ${milestone.event}\n`
  })
  message += "\n"

  message += "## Mission\n\n"
  message += `${history.mission}\n\n`

  message += "## Vision\n\n"
  message += `${history.vision}\n\n`

  message +=
    "Over the decades, Bugema University has grown from a small missionary training school into a comprehensive university offering a diverse range of academic programs. The university continues to uphold its founding principles while adapting to meet contemporary educational needs."

  return { message }
}

/**
 * Generate a response about university location
 */
function generateLocationResponse(): ChatResponse {
  const location = sampleBugemaData.location

  if (!location) {
    return {
      message:
        "I'm sorry, I couldn't find specific information about Bugema University's location. Please visit our website for more information.",
    }
  }

  let message = "# Location of Bugema University\n\n"

  message += `${location.description}\n\n`

  message += "## Geographical Coordinates\n\n"
  message += `${location.coordinates}\n\n`

  message += "## Transportation\n\n"
  message += `${location.transportation}\n\n`

  message += "## Campus Environment\n\n"
  message +=
    "The spacious campus provides a serene environment conducive to learning, away from the distractions of the city. The natural setting features beautiful landscapes, gardens, and walking paths that enhance the overall educational experience.\n\n"

  message +=
    "For directions or transportation assistance, please contact our information desk at info@bugemauniv.ac.ug."

  return { message }
}

/**
 * Generate a response about student life
 */
function generateStudentLifeResponse(query: string): ChatResponse {
  const studentLife = sampleBugemaData.studentLife

  if (!studentLife) {
    return {
      message:
        "I'm sorry, I couldn't find specific information about student life at Bugema University. Please visit our website for more information.",
    }
  }

  const queryLower = query.toLowerCase()

  // Check if the query is about specific aspects of student life
  if (queryLower.includes("club") || queryLower.includes("organization") || queryLower.includes("societ")) {
    return {
      message: `# Student Clubs and Organizations\n\n${studentLife.clubs}\n\nJoining clubs and organizations is a great way to enhance your university experience, develop leadership skills, and build lasting friendships. For more information about specific clubs, visit the Student Affairs Office.`,
    }
  }

  if (queryLower.includes("event") || queryLower.includes("cultural") || queryLower.includes("activit")) {
    return {
      message: `# Campus Events and Activities\n\n${studentLife.events}\n\nStay updated on upcoming events by checking the university calendar on our website or following our social media channels.`,
    }
  }

  if (queryLower.includes("sport") || queryLower.includes("fitness") || queryLower.includes("recreation")) {
    return {
      message: `# Sports and Recreation\n\n${studentLife.sports}\n\nAll students are encouraged to participate in sports activities, regardless of skill level. For information about joining university teams or using sports facilities, contact the Sports Department.`,
    }
  }

  if (
    queryLower.includes("spiritual") ||
    queryLower.includes("religious") ||
    queryLower.includes("church") ||
    queryLower.includes("worship")
  ) {
    return {
      message: `# Spiritual Life\n\n${studentLife.spiritualLife}\n\nThe university chaplaincy coordinates spiritual activities and provides pastoral care to students of all faiths, though the institution is founded on Seventh-day Adventist principles.`,
    }
  }

  if (queryLower.includes("counseling") || queryLower.includes("mental health") || queryLower.includes("wellness")) {
    return {
      message: `# Counseling and Wellness Services\n\n${studentLife.counseling}\n\nAll counseling services are confidential and provided at no additional cost to enrolled students. To schedule an appointment, visit the Office of the Dean of Students or email counseling@bugemauniv.ac.ug.`,
    }
  }

  // General student life information
  let message = "# Student Life at Bugema University\n\n"
  message +=
    "Bugema University offers a vibrant campus experience that complements academic pursuits with opportunities for personal growth, social engagement, and spiritual development.\n\n"

  message += "## Clubs and Organizations\n\n"
  message += `${studentLife.clubs}\n\n`

  message += "## Campus Events\n\n"
  message += `${studentLife.events}\n\n`

  message += "## Sports and Recreation\n\n"
  message += `${studentLife.sports}\n\n`

  message += "## Spiritual Life\n\n"
  message += `${studentLife.spiritualLife}\n\n`

  message += "## Counseling Services\n\n"
  message += `${studentLife.counseling}\n\n`

  message +=
    "For more information about student life at Bugema University, please visit the Student Affairs Office or email studentaffairs@bugemauniv.ac.ug."

  return { message }
}

/**
 * Process a user message and generate a response
 */
export async function processMessage(message: string): Promise<ChatResponse> {
  const intent = detectIntent(message)

  switch (intent) {
    case "greeting":
      return generateGreeting()

    case "farewell":
      return generateFarewell()

    case "contact":
      return generateContactResponse()

    case "programs":
      return generateProgramsResponse(message)

    case "admissions":
      return generateAdmissionsResponse(message)

    case "tuition":
      return generateTuitionResponse()

    case "facilities":
      return generateFacilitiesResponse(message)

    case "events":
      return generateEventsResponse()

    case "history":
      return generateHistoryResponse()

    case "location":
      return generateLocationResponse()

    case "studentLife":
      return generateStudentLifeResponse(message)

    case "faq":
      return generateFAQResponse(message)

    case "general":
    default:
      return generateSearchResponse(message)
  }
}

