import type { ObjectId } from "mongodb"

export interface Alumni {
  _id?: ObjectId
  alumniId: string // Unique identifier like 21/BCC/BU/R/0019
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    dateOfBirth?: Date
    gender?: string
    nationality?: string
  }
  academicInfo: {
    graduationYear: number
    school: string
    degree: string
    studentId?: string
    gpa?: number
    honors?: string
  }
  professionalInfo: {
    currentPosition?: string
    company?: string
    industry?: string
    workExperience?: number
    salary?: string
    location?: string
    linkedIn?: string
  }
  contactInfo: {
    currentAddress?: {
      street?: string
      city?: string
      state?: string
      country?: string
      postalCode?: string
    }
    emergencyContact?: {
      name?: string
      relationship?: string
      phone?: string
      email?: string
    }
  }
  preferences: {
    interests: string[]
    willingToMentor: boolean
    newsletter: boolean
    publicProfile: boolean
    allowContact: boolean
  }
  metadata: {
    registrationDate: Date
    lastUpdated: Date
    status: "active" | "inactive" | "pending"
    verificationStatus: "verified" | "unverified" | "pending"
  }
}

export interface AlumniRegistrationData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  dateOfBirth?: string
  gender?: string
  nationality?: string
  graduationYear: number
  school: string
  degree: string
  studentId?: string
  gpa?: number
  honors?: string
  currentPosition?: string
  company?: string
  industry?: string
  workExperience?: number
  salary?: string
  location?: string
  linkedIn?: string
  currentAddress?: {
    street?: string
    city?: string
    state?: string
    country?: string
    postalCode?: string
  }
  emergencyContact?: {
    name?: string
    relationship?: string
    phone?: string
    email?: string
  }
  interests: string[]
  willingToMentor: boolean
  newsletter: boolean
  publicProfile: boolean
  allowContact: boolean
}
