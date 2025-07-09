import { connectToDatabase } from "@/lib/mongodb"

// School/Faculty codes mapping
const SCHOOL_CODES: { [key: string]: string } = {
  "School of Business": "BUS",
  "School of Science and Technology": "SCI",
  "School of Education": "EDU",
  "School of Social Sciences": "SOC",
  "School of Natural Sciences": "NAT",
  "School of Graduate Studies": "GRD",
  "School of Agriculture": "AGR",
  "School of Health Sciences": "HLT",
  "School of Theology": "THO",
}

export async function generateAlumniId(graduationYear: number, school: string): Promise<string> {
  try {
    const { db } = await connectToDatabase()

    // Get school code
    const schoolCode = SCHOOL_CODES[school] || "GEN"

    // Get last two digits of graduation year
    const yearCode = graduationYear.toString().slice(-2)

    // Get the next sequence number for this year and school combination
    const sequenceKey = `${yearCode}_${schoolCode}`

    // Find the highest sequence number for this combination
    const lastAlumni = await db.collection("alumni").findOne(
      {
        alumniId: {
          $regex: `^${yearCode}/${schoolCode}/BU/R/`,
        },
      },
      {
        sort: { alumniId: -1 },
      },
    )

    let nextSequence = 1

    if (lastAlumni && lastAlumni.alumniId) {
      // Extract sequence number from the last alumni ID
      const parts = lastAlumni.alumniId.split("/")
      if (parts.length === 5) {
        const lastSequence = Number.parseInt(parts[4])
        nextSequence = lastSequence + 1
      }
    }

    // Format sequence number with leading zeros (4 digits)
    const sequenceNumber = nextSequence.toString().padStart(4, "0")

    // Generate the final alumni ID: YY/SCHOOL/BU/R/XXXX
    const alumniId = `${yearCode}/${schoolCode}/BU/R/${sequenceNumber}`

    return alumniId
  } catch (error) {
    console.error("Error generating alumni ID:", error)
    throw new Error("Failed to generate alumni ID")
  }
}

export function parseAlumniId(alumniId: string) {
  const parts = alumniId.split("/")

  if (parts.length !== 5) {
    throw new Error("Invalid alumni ID format")
  }

  return {
    graduationYear: `20${parts[0]}`,
    schoolCode: parts[1],
    university: parts[2],
    type: parts[3],
    sequence: parts[4],
  }
}

export function validateAlumniId(alumniId: string): boolean {
  const pattern = /^\d{2}\/[A-Z]{3}\/BU\/R\/\d{4}$/
  return pattern.test(alumniId)
}
