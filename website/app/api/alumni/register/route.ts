import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { generateAlumniId } from "@/lib/utils/alumniIdGenerator"
import type { Alumni, AlumniRegistrationData } from "@/lib/models/Alumni"

export async function POST(request: NextRequest) {
  try {
    const body: AlumniRegistrationData = await request.json()

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.graduationYear || !body.school || !body.degree) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    // Check if alumni already exists with this email
    const existingAlumni = await db.collection("alumni").findOne({
      "personalInfo.email": body.email,
    })

    if (existingAlumni) {
      return NextResponse.json({ error: "Alumni with this email already exists" }, { status: 409 })
    }

    // Generate unique alumni ID
    const alumniId = await generateAlumniId(body.graduationYear, body.school)

    // Create alumni document
    const alumniData: Alumni = {
      alumniId,
      personalInfo: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        dateOfBirth: body.dateOfBirth ? new Date(body.dateOfBirth) : undefined,
        gender: body.gender,
        nationality: body.nationality,
      },
      academicInfo: {
        graduationYear: body.graduationYear,
        school: body.school,
        degree: body.degree,
        studentId: body.studentId,
        gpa: body.gpa,
        honors: body.honors,
      },
      professionalInfo: {
        currentPosition: body.currentPosition,
        company: body.company,
        industry: body.industry,
        workExperience: body.workExperience,
        salary: body.salary,
        location: body.location,
        linkedIn: body.linkedIn,
      },
      contactInfo: {
        currentAddress: body.currentAddress,
        emergencyContact: body.emergencyContact,
      },
      preferences: {
        interests: body.interests || [],
        willingToMentor: body.willingToMentor || false,
        newsletter: body.newsletter || true,
        publicProfile: body.publicProfile || false,
        allowContact: body.allowContact || true,
      },
      metadata: {
        registrationDate: new Date(),
        lastUpdated: new Date(),
        status: "pending", // Requires admin approval
        verificationStatus: "pending",
      },
    }

    // Insert alumni into database
    const result = await db.collection("alumni").insertOne(alumniData)

    if (!result.insertedId) {
      throw new Error("Failed to insert alumni data")
    }

    // Return success response with alumni ID
    return NextResponse.json(
      {
        success: true,
        message: "Alumni registration submitted successfully. Your application is pending approval.",
        data: {
          alumniId,
          registrationDate: alumniData.metadata.registrationDate,
          _id: result.insertedId,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Alumni registration error:", error)

    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get("email")
    const alumniId = searchParams.get("alumniId")

    if (!email && !alumniId) {
      return NextResponse.json({ error: "Email or Alumni ID is required" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    let query = {}
    if (email) {
      query = { "personalInfo.email": email }
    } else if (alumniId) {
      query = { alumniId }
    }

    const alumni = await db.collection("alumni").findOne(query)

    if (!alumni) {
      return NextResponse.json({ error: "Alumni not found" }, { status: 404 })
    }

    // Only return public information
    const publicAlumniData = {
      alumniId: alumni.alumniId,
      name: `${alumni.personalInfo.firstName} ${alumni.personalInfo.lastName}`,
      graduationYear: alumni.academicInfo.graduationYear,
      school: alumni.academicInfo.school,
      degree: alumni.academicInfo.degree,
      status: alumni.metadata.status,
      verificationStatus: alumni.metadata.verificationStatus,
    }

    return NextResponse.json({
      success: true,
      data: publicAlumniData,
    })
  } catch (error) {
    console.error("Alumni lookup error:", error)

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
