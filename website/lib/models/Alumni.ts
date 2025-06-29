import type { ObjectId } from "mongodb"

export interface PersonalInfo {
  firstName: string
  lastName: string
  email: string
  phone?: string
  dateOfBirth?: Date
  gender?: "male" | "female" | "other"
  nationality?: string
}

export interface AcademicInfo {
  graduationYear: number
  school: string
  degree: string
  gpa?: number
  honors?: string
}

export interface ProfessionalInfo {
  currentPosition?: string
  company?: string
  industry?: string
  workExperience?: number
  salary?: string
  location?: string
  linkedIn?: string
}

export interface ContactInfo {
  currentAddress?: string
  emergencyContact?: string
}

export interface Preferences {
  interests: string[]
  willingToMentor: boolean
  newsletter: boolean
  publicProfile: boolean
  allowContact: boolean
}

export interface Metadata {
  registrationDate: Date
  lastUpdated: Date
  status: "pending" | "approved" | "rejected"
  verificationStatus: "pending" | "verified" | "unverified"
}

export interface Alumni {
  _id?: ObjectId
  studentId: string
  verificationCode: string
  personalInfo: PersonalInfo
  academicInfo: AcademicInfo
  professionalInfo: ProfessionalInfo
  contactInfo: ContactInfo
  preferences: Preferences
  metadata: Metadata
}

export interface AlumniRegistrationData {
  studentId: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  dateOfBirth?: string
  gender?: "male" | "female" | "other"
  nationality?: string
  graduationYear: number
  school: string
  degree: string
  gpa?: number
  honors?: string
  currentPosition?: string
  company?: string
  industry?: string
  workExperience?: number
  salary?: string
  location?: string
  linkedIn?: string
  currentAddress?: string
  emergencyContact?: string
  interests?: string[]
  willingToMentor?: boolean
  newsletter?: boolean
  publicProfile?: boolean
  allowContact?: boolean
}
