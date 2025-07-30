import * as cheerio from "cheerio"

export type WebPage = {
  url: string
  title: string
  content: string
  links: string[]
  lastCrawled: Date
  universityData?: {
    contactInfo?: ContactInfo
    programs?: AcademicProgram[]
    admissions?: AdmissionInfo
    events?: Event[]
    faq?: FAQItem[]
    facilities?: Facility[]
  }
}

export type ContactInfo = {
  email?: string
  phone?: string
  address?: string
  socialMedia?: Record<string, string>
}

export type AcademicProgram = {
  name: string
  level: "Undergraduate" | "Graduate" | "Diploma" | "Certificate" | "PhD" | string
  department?: string
  description?: string
  duration?: string
  url?: string
}

export type AdmissionInfo = {
  requirements?: string
  deadlines?: string
  applicationProcess?: string
  tuitionFees?: string
}

export type Event = {
  name: string
  date?: string
  location?: string
  description?: string
}

export type FAQItem = {
  question: string
  answer: string
}

export type Facility = {
  name: string
  description?: string
  location?: string
}

export type CrawlOptions = {
  startUrl: string
  maxPages?: number
  allowedDomains?: string[]
}

// In-memory storage for crawled pages
// In a production app, you'd use a database
let crawledPages: WebPage[] = []
let crawlQueue: string[] = []
let visitedUrls = new Set<string>()

// Sample data for Bugema University (for demonstration purposes)
// This would normally be extracted from the website
const sampleBugemaData = {
  contactInfo: {
    email: "info@bugemauniv.ac.ug",
    phone: "+256-312-351400",
    address: "Bugema University Main Campus, Kampala-Gayaza Road, P.O.Box 6529 Kampala, Uganda",
    socialMedia: {
      facebook: "https://www.facebook.com/bugemauniversity",
      twitter: "https://twitter.com/bugemauniv",
      instagram: "https://www.instagram.com/bugemauniversity",
    },
  },
  programs: [
    // Undergraduate Programs - Business
    {
      name: "Bachelor of Business Administration (Accounting)",
      level: "Undergraduate",
      department: "School of Business",
      description: "Prepares students for careers in accounting, auditing, and financial management.",
      duration: "4 years",
      url: "/academics/business/bba-accounting",
    },
    {
      name: "Bachelor of Business Administration (Finance)",
      level: "Undergraduate",
      department: "School of Business",
      description: "Focuses on financial analysis, investment management, and corporate finance.",
      duration: "4 years",
      url: "/academics/business/bba-finance",
    },
    {
      name: "Bachelor of Business Administration (Marketing)",
      level: "Undergraduate",
      department: "School of Business",
      description: "Develops skills in marketing strategy, consumer behavior, and brand management.",
      duration: "4 years",
      url: "/academics/business/bba-marketing",
    },
    {
      name: "Bachelor of Business Administration (Management)",
      level: "Undergraduate",
      department: "School of Business",
      description: "Focuses on organizational leadership, strategic planning, and business operations.",
      duration: "4 years",
      url: "/academics/business/bba-management",
    },
    {
      name: "Bachelor of Business Administration (Entrepreneurship)",
      level: "Undergraduate",
      department: "School of Business",
      description: "Prepares students to start and manage their own businesses.",
      duration: "4 years",
      url: "/academics/business/bba-entrepreneurship",
    },

    // Undergraduate Programs - Technology
    {
      name: "Bachelor of Science in Computer Science",
      level: "Undergraduate",
      department: "School of Science and Technology",
      description: "Focuses on programming, algorithms, data structures, and software development.",
      duration: "4 years",
      url: "/academics/technology/computer-science",
    },
    {
      name: "Bachelor of Science in Information Technology",
      level: "Undergraduate",
      department: "School of Science and Technology",
      description: "Covers IT infrastructure, systems analysis, and technology management.",
      duration: "4 years",
      url: "/academics/technology/information-technology",
    },

    // Undergraduate Programs - Education
    {
      name: "Bachelor of Arts with Education",
      level: "Undergraduate",
      department: "School of Education",
      description: "Prepares students to teach arts subjects in secondary schools.",
      duration: "4 years",
      url: "/academics/education/ba-education",
    },
    {
      name: "Bachelor of Science with Education",
      level: "Undergraduate",
      department: "School of Education",
      description: "Prepares students to teach science subjects in secondary schools.",
      duration: "4 years",
      url: "/academics/education/bsc-education",
    },

    // Undergraduate Programs - Social Sciences
    {
      name: "Bachelor of Arts in Development Studies",
      level: "Undergraduate",
      department: "School of Social Sciences",
      description: "Focuses on sustainable development, policy analysis, and community development.",
      duration: "4 years",
      url: "/academics/social-sciences/development-studies",
    },
    {
      name: "Bachelor of Science in Counseling",
      level: "Undergraduate",
      department: "School of Social Sciences",
      description: "Prepares students for careers in counseling and mental health services.",
      duration: "4 years",
      url: "/academics/social-sciences/counseling",
    },
    {
      name: "Bachelor of Social Work and Social Administration",
      level: "Undergraduate",
      department: "School of Social Sciences",
      description: "Focuses on social welfare, community services, and policy implementation.",
      duration: "4 years",
      url: "/academics/social-sciences/social-work",
    },
    {
      name: "Bachelor of Theology",
      level: "Undergraduate",
      department: "School of Social Sciences",
      description: "Prepares students for ministry and religious leadership.",
      duration: "4 years",
      url: "/academics/social-sciences/theology",
    },
    {
      name: "Bachelor of Arts in Religious Studies",
      level: "Undergraduate",
      department: "School of Social Sciences",
      description: "Focuses on comparative religion, ethics, and religious history.",
      duration: "4 years",
      url: "/academics/social-sciences/religious-studies",
    },

    // Undergraduate Programs - Natural Sciences
    {
      name: "Bachelor of Science in Agriculture",
      level: "Undergraduate",
      department: "School of Natural Sciences",
      description: "Focuses on crop production, animal husbandry, and agricultural economics.",
      duration: "4 years",
      url: "/academics/natural-sciences/agriculture",
    },
    {
      name: "Bachelor of Science in Food and Human Nutrition",
      level: "Undergraduate",
      department: "School of Natural Sciences",
      description: "Covers food science, nutrition, and dietetics.",
      duration: "4 years",
      url: "/academics/natural-sciences/food-nutrition",
    },

    // Graduate Programs - Business
    {
      name: "Master of Business Administration",
      level: "Graduate",
      department: "School of Business",
      description: "Advanced business program focusing on leadership, strategy, and organizational management.",
      duration: "2 years",
      url: "/academics/business/mba",
    },

    // Graduate Programs - Technology
    {
      name: "Master of Science in Information Systems",
      level: "Graduate",
      department: "School of Science and Technology",
      description: "Advanced study of information systems design, implementation, and management.",
      duration: "2 years",
      url: "/academics/technology/ms-information-systems",
    },
    {
      name: "Master of Science in Software Engineering",
      level: "Graduate",
      department: "School of Science and Technology",
      description: "Focuses on advanced software development methodologies and practices.",
      duration: "2 years",
      url: "/academics/technology/ms-software-engineering",
    },
    {
      name: "Master of Science in Network Security",
      level: "Graduate",
      department: "School of Science and Technology",
      description: "Specializes in cybersecurity, network protection, and security management.",
      duration: "2 years",
      url: "/academics/technology/ms-network-security",
    },

    // Graduate Programs - Education
    {
      name: "Master of Science in Education Management",
      level: "Graduate",
      department: "School of Education",
      description: "Prepares educational leaders for administrative and management roles.",
      duration: "2 years",
      url: "/academics/education/ms-education-management",
    },
    {
      name: "Master of Education",
      level: "Graduate",
      department: "School of Education",
      description: "Advanced study in educational theory, curriculum development, and teaching methodologies.",
      duration: "2 years",
      url: "/academics/education/med",
    },

    // Graduate Programs - Social Sciences
    {
      name: "Master of Science in Development Studies",
      level: "Graduate",
      department: "School of Social Sciences",
      description: "Advanced study of development theory, policy, and practice.",
      duration: "2 years",
      url: "/academics/social-sciences/ms-development-studies",
    },
    {
      name: "Master of Science in Counseling",
      level: "Graduate",
      department: "School of Social Sciences",
      description: "Advanced training in counseling theories, techniques, and practice.",
      duration: "2 years",
      url: "/academics/social-sciences/ms-counseling",
    },
    {
      name: "Master in Local Government Management",
      level: "Graduate",
      department: "School of Social Sciences",
      description: "Focuses on local governance, public administration, and community development.",
      duration: "2 years",
      url: "/academics/social-sciences/mlgm",
    },

    // Doctoral Programs
    {
      name: "Doctor of Philosophy in Developmental Education",
      level: "PhD",
      department: "School of Graduate Studies",
      description: "Research-focused program on educational development and innovation.",
      duration: "3-5 years",
      url: "/academics/graduate/phd-developmental-education",
    },
    {
      name: "Doctor of Philosophy in Rural Development",
      level: "PhD",
      department: "School of Graduate Studies",
      description: "Advanced research in rural development strategies and implementation.",
      duration: "3-5 years",
      url: "/academics/graduate/phd-rural-development",
    },
    {
      name: "Doctor of Philosophy in Developmental Communication",
      level: "PhD",
      department: "School of Graduate Studies",
      description: "Research in communication strategies for development and social change.",
      duration: "3-5 years",
      url: "/academics/graduate/phd-developmental-communication",
    },

    // Diploma Programs
    {
      name: "Diploma in Accounting",
      level: "Diploma",
      department: "School of Business",
      description: "Practical training in accounting principles and practices.",
      duration: "2 years",
      url: "/academics/diplomas/accounting",
    },
    {
      name: "Diploma in Marketing",
      level: "Diploma",
      department: "School of Business",
      description: "Practical training in marketing strategies and implementation.",
      duration: "2 years",
      url: "/academics/diplomas/marketing",
    },
    {
      name: "Diploma in Information Technology",
      level: "Diploma",
      department: "School of Science and Technology",
      description: "Practical training in IT support, systems, and applications.",
      duration: "2 years",
      url: "/academics/diplomas/information-technology",
    },
    {
      name: "Diploma in Education",
      level: "Diploma",
      department: "School of Education",
      description: "Teacher training program for primary and secondary education.",
      duration: "2 years",
      url: "/academics/diplomas/education",
    },

    // Certificate Programs
    {
      name: "Certificate in Information Technology",
      level: "Certificate",
      department: "School of Science and Technology",
      description: "Basic training in computer applications and IT fundamentals.",
      duration: "1 year",
      url: "/academics/certificates/information-technology",
    },
    {
      name: "Certificate in Small Business Computer Networks",
      level: "Certificate",
      department: "School of Science and Technology",
      description: "Focused training on setting up and managing small business networks.",
      duration: "6 months",
      url: "/academics/certificates/small-business-networks",
    },
    {
      name: "Certificate in Nursing",
      level: "Certificate",
      department: "School of Natural Sciences",
      description: "Basic training in nursing care and health services.",
      duration: "1 year",
      url: "/academics/certificates/nursing",
    },
  ],
  admissions: {
    requirements:
      "Undergraduate admission requirements:\n\n- Uganda Advanced Certificate of Education with at least 2 principal passes or equivalent\n- Uganda Certificate of Education with at least 5 passes\n- For international students: Completed high school with equivalent qualifications\n\nGraduate admission requirements:\n\n- Bachelor's degree with at least a second-class lower division from a recognized institution\n- Some programs may require relevant work experience\n- International students must provide certified academic transcripts and degree certificates",
    deadlines:
      "Applications for the Fall semester (September intake) close on August 15.\nApplications for the Spring semester (January intake) close on December 15.\nLate applications may be considered on a case-by-case basis, subject to available space.",
    applicationProcess:
      "1. Complete the online application form at https://bugemauniv.ac.ug/apply\n2. Pay the application fee of UGX 50,000 for Ugandan students or USD 50 for international students\n3. Submit academic transcripts and certificates (original or certified copies)\n4. Provide two recommendation letters (academic or professional)\n5. Submit a copy of your national ID or passport\n6. Attend an interview (for some programs)\n7. For graduate programs, submit a statement of purpose",
    tuitionFees:
      "Undergraduate programs:\n- Ugandan students: UGX 1,500,000 - 2,500,000 per semester depending on the program\n- International students: USD 1,500 - 2,500 per semester\n\nGraduate programs:\n- Ugandan students: UGX 2,500,000 - 3,500,000 per semester\n- International students: USD 2,500 - 3,500 per semester\n\nDiploma programs:\n- UGX 1,200,000 - 1,800,000 per semester\n\nCertificate programs:\n- UGX 800,000 - 1,200,000 per semester\n\nAdditional fees:\n- Registration fee: UGX 50,000 per semester\n- Development fee: UGX 100,000 per year\n- Examination fee: UGX 50,000 per semester\n- Library fee: UGX 30,000 per semester\n- Computer lab fee (for IT-related programs): UGX 100,000 per semester\n\nAccommodation fees:\n- On-campus housing: UGX 600,000 - 1,200,000 per semester depending on the type of accommodation",
  },
  events: [
    {
      name: "University Graduation Ceremony",
      date: "November 25, 2023",
      location: "Main Campus",
      description: "Annual graduation ceremony for all graduating students.",
    },
    {
      name: "New Student Orientation",
      date: "September 1, 2023",
      location: "University Auditorium",
      description: "Orientation program for new students joining Bugema University.",
    },
    {
      name: "International Research Conference",
      date: "October 10-12, 2023",
      location: "Conference Center",
      description: "Annual research conference featuring presentations from faculty and international researchers.",
    },
    {
      name: "Cultural Week",
      date: "March 15-19, 2024",
      location: "Various Campus Locations",
      description:
        "A week-long celebration of cultural diversity featuring performances, exhibitions, and food festivals.",
    },
    {
      name: "Career Fair",
      date: "April 5, 2024",
      location: "University Gymnasium",
      description: "Annual event connecting students with potential employers and career opportunities.",
    },
    {
      name: "Alumni Homecoming",
      date: "May 20, 2024",
      location: "Main Campus",
      description: "Annual gathering of Bugema University alumni for networking and celebration.",
    },
  ],
  faq: [
    {
      question: "What are the admission requirements for undergraduate programs?",
      answer:
        "Undergraduate admission requires a Uganda Advanced Certificate of Education with at least 2 principal passes or equivalent. Uganda Certificate of Education with at least 5 passes is also required. International students should have completed high school with equivalent qualifications.",
    },
    {
      question: "How do I apply to Bugema University?",
      answer:
        "You can apply online through our website at https://bugemauniv.ac.ug/apply or visit the Admissions Office at the main campus. The application process includes filling out an application form, paying the application fee, and submitting your academic transcripts, recommendation letters, and identification documents.",
    },
    {
      question: "What is the tuition fee structure?",
      answer:
        "Tuition fees vary by program. Undergraduate programs range from UGX 1,500,000 to UGX 2,500,000 per semester for Ugandan students and USD 1,500 to USD 2,500 for international students. Graduate programs range from UGX 2,500,000 to UGX 3,500,000 per semester for Ugandan students and USD 2,500 to USD 3,500 for international students. Additional fees apply for registration, development, examinations, and facilities.",
    },
    {
      question: "Does Bugema University offer scholarships?",
      answer:
        "Yes, Bugema University offers merit-based scholarships, need-based financial aid, and work-study opportunities. Scholarships include academic excellence scholarships, sports scholarships, and leadership scholarships. Contact the Financial Aid Office for more information on eligibility and application procedures.",
    },
    {
      question: "Is on-campus accommodation available?",
      answer:
        "Yes, Bugema University provides on-campus dormitories for both male and female students. Accommodation fees range from UGX 600,000 to UGX 1,200,000 per semester depending on the type of accommodation. Housing is allocated on a first-come, first-served basis, so early application is recommended.",
    },
    {
      question: "What is the academic calendar at Bugema University?",
      answer:
        "The academic year consists of two semesters. The Fall semester runs from September to December, and the Spring semester runs from January to May. There is also a Summer session from June to August for selected courses.",
    },
    {
      question: "When was Bugema University established?",
      answer:
        "Bugema University was established in 1948 as Bugema Missionary Training School to educate teachers and pastors for the Seventh-day Adventist Church in East Africa. It transitioned to Bugema Adventist College and then to Bugema University in 1994. The university received its charter from the Ugandan government in 2009.",
    },
    {
      question: "Where is Bugema University located?",
      answer:
        "The university's main campus occupies 640 acres in Kalagala sub-county, Bamunanika county, Luweero District, approximately 33 kilometers northeast of Kampala, Uganda's capital. The campus is situated about 18.1 kilometers south of Ziroobwe town, along the Gayaza-Ziroobwe Road. Its geographical coordinates are 0°34'11.0\"N latitude and 32°38'31.0\"E longitude.",
    },
    {
      question: "What schools and departments does Bugema University have?",
      answer:
        "Bugema University comprises several schools: School of Science and Technology, School of Business, School of Social Sciences, School of Education, School of Natural Sciences, and School of Graduate Studies. Each school houses multiple departments offering various academic programs.",
    },
    {
      question: "How many students attend Bugema University?",
      answer:
        "Bugema University enrolls between 4,000 to 4,999 students, with an acceptance rate of 60-69%, indicating a moderately selective admission process.",
    },
    {
      question: "What facilities are available on campus?",
      answer:
        "Bugema University provides various facilities including a well-equipped library, on-campus accommodations, sports facilities, computer labs, a student center, health center, dining services, and transportation services. These facilities support student life and learning.",
    },
    {
      question: "What student activities are available at Bugema University?",
      answer:
        "Students can engage in various clubs and societies that cater to academic, cultural, and recreational interests. The university hosts numerous cultural events, performances, and sports activities. There are also spiritual programs, community service opportunities, and leadership development activities.",
    },
    {
      question: "Is Bugema University accredited?",
      answer:
        "Yes, Bugema University is officially recognized by the National Council for Higher Education of Uganda. It is also affiliated with the Seventh-day Adventist Church and adheres to its educational philosophy and values.",
    },
    {
      question: "How can I get to Bugema University from Kampala?",
      answer:
        "The campus is accessible via public taxis from Kampala at a cost of approximately UGX 4,000, or private hires at around UGX 60,000. The journey takes about 1-1.5 hours depending on traffic conditions.",
    },
    {
      question: "Does Bugema University offer distance learning or online programs?",
      answer:
        "Yes, Bugema University offers some programs through distance learning and online formats. These flexible learning options are designed to accommodate working professionals and students who cannot attend regular on-campus classes. Contact the Admissions Office for specific information about available online programs.",
    },
  ],
  facilities: [
    {
      name: "University Library",
      description:
        "A modern library with extensive collections of books, journals, and digital resources to support academic research and study.",
      location: "Central Campus",
    },
    {
      name: "Computer Labs",
      description:
        "Multiple computer laboratories equipped with modern computers and software for student use, supporting IT education and research.",
      location: "Technology Building",
    },
    {
      name: "Sports Complex",
      description:
        "Includes a football field, basketball court, volleyball court, and indoor sports facilities for student recreation and athletic programs.",
      location: "East Campus",
    },
    {
      name: "Student Center",
      description:
        "A hub for student activities, dining, and recreation, providing spaces for socializing and extracurricular activities.",
      location: "Central Campus",
    },
    {
      name: "Health Center",
      description: "Provides basic medical services, health education, and wellness programs for students and staff.",
      location: "Near Student Dormitories",
    },
    {
      name: "Male Dormitories",
      description:
        "On-campus housing for male students, offering various accommodation options from shared to private rooms.",
      location: "West Campus",
    },
    {
      name: "Female Dormitories",
      description: "On-campus housing for female students, providing safe and comfortable living arrangements.",
      location: "East Campus",
    },
    {
      name: "University Cafeteria",
      description:
        "Dining facility offering a variety of meal options, including vegetarian choices, to meet diverse dietary preferences.",
      location: "Central Campus",
    },
    {
      name: "University Church",
      description: "A place of worship for the campus community, hosting religious services and spiritual programs.",
      location: "North Campus",
    },
    {
      name: "Conference Center",
      description: "Modern facility for hosting academic conferences, seminars, workshops, and other events.",
      location: "South Campus",
    },
    {
      name: "Agricultural Farm",
      description:
        "Practical training facility for agriculture students, featuring crop production areas and animal husbandry facilities.",
      location: "North Campus",
    },
    {
      name: "Science Laboratories",
      description: "Well-equipped labs for physics, chemistry, biology, and other scientific disciplines.",
      location: "Science Building",
    },
  ],
  universityHistory: {
    founding:
      "Bugema University was founded in 1948 as Bugema Missionary Training School to educate teachers and pastors for the Seventh-day Adventist Church in East Africa.",
    milestones: [
      {
        year: 1948,
        event: "Founded as Bugema Missionary Training School.",
      },
      {
        year: 1976,
        event:
          "Authorized by the Uganda Ministry of Education and the General Conference of Seventh-day Adventists to offer a Bachelor of Theology degree.",
      },
      {
        year: 1994,
        event:
          "Transitioned from Bugema Adventist College to Bugema University, reflecting its expanded academic offerings.",
      },
      {
        year: 1997,
        event: "Granted a tertiary institution license by the Ministry of Education and Sports.",
      },
      {
        year: 2009,
        event:
          "Received a charter from the Ugandan government, solidifying its status as a recognized higher education institution.",
      },
    ],
    mission: "To provide quality Christian education that prepares leaders in service for God and humanity.",
    vision:
      "To be a center of excellence in providing Christian education that transforms individuals for global service.",
  },
  location: {
    description:
      "The university's main campus occupies 640 acres in Kalagala sub-county, Bamunanika county, Luweero District, approximately 33 kilometers northeast of Kampala, Uganda's capital. The campus is situated about 18.1 kilometers south of Ziroobwe town, along the Gayaza-Ziroobwe Road.",
    coordinates: "0°34'11.0\"N latitude and 32°38'31.0\"E longitude",
    transportation:
      "The campus is accessible via public taxis from Kampala at a cost of approximately UGX 4,000, or private hires at around UGX 60,000. The journey takes about 1-1.5 hours depending on traffic conditions.",
  },
  studentLife: {
    clubs:
      "Students can engage in various clubs and societies that cater to academic, cultural, and recreational interests, promoting leadership and community involvement.",
    events:
      "The campus hosts numerous cultural events and performances, enriching the student experience and promoting cultural diversity.",
    sports:
      "Emphasizing physical well-being, Bugema University provides facilities for various sports and fitness programs, encouraging students to maintain a healthy lifestyle.",
    spiritualLife:
      "As a Seventh-day Adventist institution, Bugema University offers various spiritual programs, including worship services, Bible study groups, and community outreach activities.",
    counseling:
      "The Office of the Dean of Students offers counseling services, wellness workshops, and mental health resources to support students' holistic well-being.",
  },
}

/**
 * Extract the domain from a URL
 */
function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname
  } catch (e) {
    return ""
  }
}

/**
 * Normalize a URL
 */
function normalizeUrl(url: string, baseUrl: string): string {
  try {
    return new URL(url, baseUrl).href
  } catch (e) {
    return ""
  }
}

/**
 * Check if a URL should be crawled
 */
function shouldCrawl(url: string, options: CrawlOptions): boolean {
  // Skip non-HTTP protocols, anchors, etc.
  if (!url.startsWith("http")) return false

  // Skip if already visited
  if (visitedUrls.has(url)) return false

  // Check if the domain is allowed
  const domain = extractDomain(url)
  if (options.allowedDomains && !options.allowedDomains.includes(domain)) {
    return false
  }

  return true
}

/**
 * Extract text content from HTML
 */
function extractTextContent(html: string): string {
  const $ = cheerio.load(html)

  // Remove script and style elements
  $("script, style").remove()

  // Get the text content
  return $("body").text().replace(/\s+/g, " ").trim()
}

/**
 * Extract university-specific data from a page
 */
function extractUniversityData($: cheerio.CheerioAPI, url: string): WebPage["universityData"] {
  // In a real implementation, this would extract data from the actual page
  // For this demo, we'll use sample data

  // Check if the URL contains specific keywords to determine what data to return
  const urlLower = url.toLowerCase()

  if (urlLower.includes("contact")) {
    return { contactInfo: sampleBugemaData.contactInfo }
  }

  if (urlLower.includes("program") || urlLower.includes("academic") || urlLower.includes("course")) {
    return { programs: sampleBugemaData.programs }
  }

  if (urlLower.includes("admission") || urlLower.includes("apply")) {
    return { admissions: sampleBugemaData.admissions }
  }

  if (urlLower.includes("event") || urlLower.includes("calendar")) {
    return { events: sampleBugemaData.events }
  }

  if (urlLower.includes("faq") || urlLower.includes("question")) {
    return { faq: sampleBugemaData.faq }
  }

  if (urlLower.includes("facilit") || urlLower.includes("campus")) {
    return { facilities: sampleBugemaData.facilities }
  }

  // For the homepage or general pages, return all data
  if (urlLower.includes("home") || urlLower.includes("index") || url.endsWith("/")) {
    return sampleBugemaData
  }

  return {}
}

/**
 * Crawl a single page
 */
async function crawlPage(url: string, options: CrawlOptions): Promise<WebPage | null> {
  try {
    console.log(`Crawling: ${url}`)

    // Mark as visited
    visitedUrls.add(url)

    // Fetch the page
    let html = ""
    try {
      const response = await fetch(url)
      html = await response.text()
    } catch (error) {
      console.error(`Error fetching ${url}:`, error)
      // For demo purposes, we'll continue with empty HTML
      // In a real implementation, you might want to return null here
    }

    // Parse the HTML
    const $ = cheerio.load(html)

    // Extract page title
    const title = $("title").text().trim() || "Bugema University"

    // Extract text content
    const content = extractTextContent(html) || "Bugema University content"

    // Extract university-specific data
    const universityData = extractUniversityData($, url)

    // Extract links
    const links: string[] = []
    $("a").each((_, element) => {
      const href = $(element).attr("href")
      if (href) {
        const normalizedUrl = normalizeUrl(href, url)
        if (shouldCrawl(normalizedUrl, options)) {
          links.push(normalizedUrl)
          crawlQueue.push(normalizedUrl)
        }
      }
    })

    // Create the page object
    const page: WebPage = {
      url,
      title,
      content,
      links,
      lastCrawled: new Date(),
      universityData,
    }

    // Add to crawled pages
    crawledPages.push(page)

    return page
  } catch (error) {
    console.error(`Error crawling ${url}:`, error)
    return null
  }
}

/**
 * Start crawling a website
 */
export async function crawlWebsite(options: CrawlOptions): Promise<WebPage[]> {
  // Reset state
  crawledPages = []
  crawlQueue = [options.startUrl]
  visitedUrls = new Set<string>()

  const maxPages = options.maxPages || 100

  // Extract domain from start URL if no allowed domains specified
  if (!options.allowedDomains) {
    const startDomain = extractDomain(options.startUrl)
    options.allowedDomains = [startDomain]
  }

  // Process the queue
  while (crawlQueue.length > 0 && crawledPages.length < maxPages) {
    const url = crawlQueue.shift()!
    await crawlPage(url, options)
  }

  // For demo purposes, add a fake homepage with all sample data if no pages were crawled
  if (crawledPages.length === 0) {
    crawledPages.push({
      url: options.startUrl,
      title: "Bugema University",
      content: "Welcome to Bugema University, a premier institution of higher learning in Uganda.",
      links: [],
      lastCrawled: new Date(),
      universityData: sampleBugemaData,
    })
  }

  return crawledPages
}

/**
 * Search the crawled pages
 */
export function searchPages(query: string): WebPage[] {
  const searchTerms = query.toLowerCase().split(" ")

  return crawledPages
    .map((page) => {
      // Calculate a simple relevance score
      const titleLower = page.title.toLowerCase()
      const contentLower = page.content.toLowerCase()

      let score = 0
      searchTerms.forEach((term) => {
        // Title matches are weighted higher
        const titleMatches = titleLower.split(term).length - 1
        score += titleMatches * 10

        // Content matches
        const contentMatches = contentLower.split(term).length - 1
        score += contentMatches
      })

      return { page, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.page)
}

/**
 * Get all crawled pages
 */
export function getCrawledPages(): WebPage[] {
  return crawledPages
}

/**
 * Get university contact information
 */
export function getUniversityContactInfo(): ContactInfo | null {
  // Find the most complete contact info across all pages
  for (const page of crawledPages) {
    if (page.universityData?.contactInfo) {
      return page.universityData.contactInfo
    }
  }

  // Return sample data if no contact info was found
  return sampleBugemaData.contactInfo
}

/**
 * Get all academic programs
 */
export function getAllPrograms(): AcademicProgram[] {
  const allPrograms: AcademicProgram[] = []

  for (const page of crawledPages) {
    if (page.universityData?.programs) {
      allPrograms.push(...page.universityData.programs)
    }
  }

  return allPrograms.length > 0 ? allPrograms : sampleBugemaData.programs
}

/**
 * Get admission information
 */
export function getAdmissionInfo(): AdmissionInfo | null {
  for (const page of crawledPages) {
    if (page.universityData?.admissions) {
      return page.universityData.admissions
    }
  }

  return sampleBugemaData.admissions
}

/**
 * Get all FAQ items
 */
export function getAllFAQs(): FAQItem[] {
  const allFAQs: FAQItem[] = []

  for (const page of crawledPages) {
    if (page.universityData?.faq) {
      allFAQs.push(...page.universityData.faq)
    }
  }

  return allFAQs.length > 0 ? allFAQs : sampleBugemaData.faq
}

/**
 * Get all facilities
 */
export function getAllFacilities(): Facility[] {
  const allFacilities: Facility[] = []

  for (const page of crawledPages) {
    if (page.universityData?.facilities) {
      allFacilities.push(...page.universityData.facilities)
    }
  }

  return allFacilities.length > 0 ? allFacilities : sampleBugemaData.facilities
}

/**
 * Get all events
 */
export function getAllEvents(): Event[] {
  const allEvents: Event[] = []

  for (const page of crawledPages) {
    if (page.universityData?.events) {
      allEvents.push(...page.universityData.events)
    }
  }

  return allEvents.length > 0 ? allEvents : sampleBugemaData.events
}

