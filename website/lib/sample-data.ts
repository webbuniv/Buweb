import type { AcademicProgram, AdmissionInfo, ContactInfo, Event, FAQItem, Facility } from "./types"

export const sampleBugemaData = {
  contactInfo: {
    email: "info@bugemauniv.ac.ug",
    phone: "+256-312-351400",
    address: "Bugema University Main Campus, Kampala-Gayaza Road, P.O.Box 6529 Kampala, Uganda",
    socialMedia: {
      facebook: "https://www.facebook.com/bugemauniversity",
      twitter: "https://twitter.com/bugemauniv",
      instagram: "https://www.instagram.com/bugemauniversity",
    },
  } as ContactInfo,

  programs: [
    {
      name: "Bachelor of Business Administration",
      level: "Undergraduate",
      department: "School of Business",
      description: "A comprehensive business degree focusing on management, marketing, finance, and entrepreneurship.",
      duration: "4 years",
      url: "/academics/business/bba",
    },
    {
      name: "Master of Business Administration",
      level: "Graduate",
      department: "School of Business",
      description: "An advanced degree for business professionals seeking leadership positions.",
      duration: "2 years",
      url: "/academics/business/mba",
    },
    {
      name: "Bachelor of Science in Computer Science",
      level: "Undergraduate",
      department: "School of Computing and Informatics",
      description: "A program focusing on software development, algorithms, and computing theory.",
      duration: "4 years",
      url: "/academics/computing/bscs",
    },
    {
      name: "Bachelor of Education",
      level: "Undergraduate",
      department: "School of Education",
      description: "A program preparing students for teaching careers in primary and secondary education.",
      duration: "4 years",
      url: "/academics/education/bed",
    },
    {
      name: "Diploma in Information Technology",
      level: "Diploma",
      department: "School of Computing and Informatics",
      description: "A practical program focusing on IT skills and knowledge.",
      duration: "2 years",
      url: "/academics/computing/dit",
    },
  ] as AcademicProgram[],

  admissions: {
    requirements:
      "High school diploma or equivalent with a minimum GPA of 2.5. International students must provide proof of English proficiency through TOEFL or IELTS scores.",
    deadlines: "Fall Semester: August 15\nSpring Semester: December 15\nSummer Session: April 15",
    applicationProcess:
      "1. Complete the online application form\n2. Pay the application fee of UGX 50,000\n3. Submit all required documents including transcripts and recommendation letters\n4. Attend an interview if required\n5. Receive admission decision within 2-4 weeks",
    tuitionFees:
      "Undergraduate programs: UGX 1,500,000 - 2,000,000 per semester depending on the program\nGraduate programs: UGX 2,000,000 - 2,500,000 per semester\nDiploma programs: UGX 1,200,000 per semester\n\nAdditional fees:\nRegistration fee: UGX 50,000 per semester\nLibrary fee: UGX 30,000 per semester\nComputer lab fee: UGX 50,000 per semester\n\nAccommodation fees:\nOn-campus housing: UGX 600,000 - 800,000 per semester",
  } as AdmissionInfo,

  events: [
    {
      name: "University Graduation Ceremony",
      date: "November 25, 2023",
      location: "Main Campus",
      description: "Annual graduation ceremony for all graduating students.",
    },
    {
      name: "International Research Conference",
      date: "March 15-17, 2024",
      location: "Conference Center",
      description: "Annual research conference featuring presentations from faculty and students.",
    },
    {
      name: "Cultural Week",
      date: "April 10-14, 2024",
      location: "Various Campus Locations",
      description: "A week-long celebration of cultural diversity featuring performances, exhibitions, and food.",
    },
  ] as Event[],

  faq: [
    {
      question: "What are the admission requirements?",
      answer:
        "Admission requirements vary by program, but generally include a high school diploma or equivalent with a minimum GPA of 2.5. International students must provide proof of English proficiency through TOEFL or IELTS scores.",
    },
    {
      question: "How do I apply for financial aid?",
      answer:
        "To apply for financial aid, complete the financial aid application form available on our website and submit it along with your admission application. You'll need to provide documentation of financial need and academic merit.",
    },
    {
      question: "What accommodation options are available?",
      answer:
        "Bugema University offers on-campus dormitories for both male and female students. Off-campus housing options are also available in the surrounding community. The Housing Office can provide assistance with finding suitable accommodation.",
    },
    {
      question: "When does the academic year begin?",
      answer:
        "The academic year at Bugema University typically begins in August for the Fall semester. We follow a semester system with Fall (August-December), Spring (January-May), and Summer (June-July) terms.",
    },
    {
      question: "Are there opportunities for international exchange?",
      answer:
        "Yes, Bugema University has partnerships with several international institutions that offer exchange opportunities. Contact the International Office for specific programs and eligibility requirements.",
    },
  ] as FAQItem[],

  facilities: [
    {
      name: "University Library",
      description: "A modern library with extensive physical and digital resources, study spaces, and computer access.",
      location: "Central Campus",
    },
    {
      name: "Computer Labs",
      description: "Multiple computer laboratories equipped with modern hardware and software for student use.",
      location: "Technology Building",
    },
    {
      name: "Sports Complex",
      description: "Facilities for various sports including football, basketball, volleyball, and athletics.",
      location: "East Campus",
    },
    {
      name: "Student Center",
      description: "A hub for student activities, dining, and relaxation.",
      location: "Central Campus",
    },
    {
      name: "Health Center",
      description: "On-campus medical facility providing basic healthcare services to students and staff.",
      location: "North Campus",
    },
    {
      name: "Student Dormitories",
      description: "On-campus housing facilities for male and female students.",
      location: "Residential Area",
    },
  ] as Facility[],
  universityHistory: {
    founding:
      "Bugema University was founded in 1948 as Bugema Missionary Training School to educate teachers and pastors for the Seventh-day Adventist Church in East Africa.",
    milestones: [
      { year: 1948, event: "Founded as Bugema Missionary Training School" },
      { year: 1976, event: "Authorized by the Uganda Ministry of Education to offer a Bachelor of Theology degree" },
      { year: 1994, event: "Transitioned from Bugema Adventist College to Bugema University" },
      { year: 1997, event: "Granted a tertiary institution license by the Ministry of Education and Sports" },
      { year: 2009, event: "Received a charter from the Ugandan government" },
    ],
    mission: "To provide quality holistic Christian education that prepares students for service and leadership.",
    vision: "To be a leading Christ-centered university in East Africa and beyond.",
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
      "Bugema University has a variety of student clubs and organizations, including the Adventist Students' Association, the Debate Club, various academic clubs, cultural associations, and community service groups. These organizations provide opportunities for leadership development, community engagement, and personal growth.",
    events:
      "The university hosts numerous cultural events and performances throughout the academic year, including Cultural Week, International Students' Day, and various departmental exhibitions. These events celebrate diversity and provide platforms for students to showcase their talents and heritage.",
    sports:
      "Bugema University offers a comprehensive sports program including football, basketball, volleyball, athletics, and more. The university participates in inter-university competitions and has facilities for various sports activities, promoting physical well-being and team spirit among students.",
    spiritualLife:
      "As a Seventh-day Adventist institution, spiritual life is central to the Bugema University experience. Regular chapel services, Sabbath worship, prayer meetings, Bible study groups, and spiritual retreats are integral parts of campus life, nurturing students' spiritual growth and character development.",
    counseling:
      "The Office of the Dean of Students provides counseling services, wellness workshops, and mental health resources to support students' holistic well-being. Professional counselors are available to help students navigate academic, personal, and social challenges during their university experience.",
  },
}

