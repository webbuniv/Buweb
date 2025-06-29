import { connectToDatabase } from "@/lib/mongodb"
import crypto from "crypto"

/**
 * Generates a unique verification code for alumni
 * Format: BU-XXXX-XXXX-XXXX (12 characters + hyphens)
 */
export async function generateVerificationCode(): Promise<string> {
  const { db } = await connectToDatabase()

  let verificationCode: string
  let isUnique = false

  while (!isUnique) {
    // Generate random 12-character alphanumeric code
    const randomBytes = crypto.randomBytes(6)
    const code = randomBytes.toString("hex").toUpperCase()

    // Format as BU-XXXX-XXXX-XXXX
    verificationCode = `BU-${code.slice(0, 4)}-${code.slice(4, 8)}-${code.slice(8, 12)}`

    // Check if code already exists
    const existingAlumni = await db.collection("alumni").findOne({
      verificationCode,
    })

    if (!existingAlumni) {
      isUnique = true
    }
  }

  return verificationCode!
}

/**
 * Validates student ID format
 * Expected format: YY/XXX/BU/R/NNNN
 */
export function validateStudentId(studentId: string): boolean {
  const pattern = /^\d{2}\/[A-Z]{3}\/BU\/R\/\d{4}$/
  return pattern.test(studentId)
}

/**
 * Parses student ID to extract information
 */
export function parseStudentId(studentId: string) {
  const parts = studentId.split("/")

  if (parts.length !== 5) {
    throw new Error("Invalid student ID format")
  }

  return {
    graduationYear: `20${parts[0]}`,
    schoolCode: parts[1],
    university: parts[2],
    type: parts[3],
    sequence: parts[4],
  }
}
