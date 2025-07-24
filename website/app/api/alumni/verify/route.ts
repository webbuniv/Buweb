import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"

export async function POST(request: NextRequest) {
  try {
    const { verificationCode, studentId } = await request.json()

    if (!verificationCode && !studentId) {
      return NextResponse.json({ error: "Verification code or student ID is required" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    let query = {}
    if (verificationCode) {
      query = { verificationCode }
    } else if (studentId) {
      query = { studentId }
    }

    const alumni = await db.collection("alumni").findOne(query)

    if (!alumni) {
      return NextResponse.json({ error: "Alumni not found" }, { status: 404 })
    }

    // Check if alumni is approved
    if (alumni.metadata.status !== "approved") {
      return NextResponse.json(
        {
          error: "Alumni registration is not yet approved",
          status: alumni.metadata.status,
        },
        { status: 403 },
      )
    }

    // Return verification data
    return NextResponse.json({
      success: true,
      verified: true,
      data: {
        name: `${alumni.personalInfo.firstName} ${alumni.personalInfo.lastName}`,
        studentId: alumni.studentId,
        verificationCode: alumni.verificationCode,
        graduationYear: alumni.academicInfo.graduationYear,
        school: alumni.academicInfo.school,
        degree: alumni.academicInfo.degree,
        status: alumni.metadata.status,
        verificationStatus: alumni.metadata.verificationStatus,
      },
    })
  } catch (error) {
    console.error("Alumni verification error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
