import { connectToDatabase } from "@/lib/mongodb"

// Generate a unique verification code in format: BU-XXXX-XXXX-XXXX
export async function generateVerificationCode(): Promise<string> {
  const { db } = await connectToDatabase()

  let isUnique = false
  let verificationCode = ""

  while (!isUnique) {
    // Generate random 4-digit segments
    const segment1 = Math.floor(1000 + Math.random() * 9000).toString()
    const segment2 = Math.floor(1000 + Math.random() * 9000).toString()
    const segment3 = Math.floor(1000 + Math.random() * 9000).toString()

    verificationCode = `BU-${segment1}-${segment2}-${segment3}`

    // Check if this code already exists
    const existing = await db.collection("alumni").findOne({ verificationCode })
    if (!existing) {
      isUnique = true
    }
  }

  return verificationCode
}

// Validate student ID format: YY/XXX/BU/R/NNNN
export function validateStudentId(studentId: string): boolean {
  const pattern = /^\d{2}\/[A-Z]{3}\/BU\/R\/\d{4}$/
  return pattern.test(studentId)
}

// Extract information from student ID
export function parseStudentId(studentId: string) {
  const parts = studentId.split("/")
  if (parts.length !== 5) return null

  return {
    year: parts[0],
    school: parts[1],
    university: parts[2],
    type: parts[3],
    number: parts[4],
  }
}
