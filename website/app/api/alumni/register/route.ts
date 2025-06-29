import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { generateVerificationCode, validateStudentId } from "@/lib/utils/verificationCodeGenerator"
import { sendAlumniRegistrationConfirmation } from "@/lib/email/emailService"
import type { Alumni, AlumniRegistrationData } from "@/lib/models/Alumni"

export async function POST(request: NextRequest) {
  try {
    const body: AlumniRegistrationData = await request.json()

    // Validate required fields
    if (
      !body.firstName ||
      !body.lastName ||
      !body.email ||
      !body.graduationYear ||
      !body.school ||
      !body.degree ||
      !body.studentId
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate student ID format
    if (!validateStudentId(body.studentId)) {
      return NextResponse.json(
        {
          error: "Invalid student ID format. Expected format: YY/XXX/BU/R/NNNN (e.g., 21/BCC/BU/R/0019)",
        },
        { status: 400 },
      )
    }

    const { db } = await connectToDatabase()

    // Check if alumni already exists with this email
    const existingAlumniByEmail = await db.collection("alumni").findOne({
      "personalInfo.email": body.email,
    })

    if (existingAlumniByEmail) {
      return NextResponse.json({ error: "Alumni with this email already exists" }, { status: 409 })
    }

    // Check if alumni already exists with this student ID
    const existingAlumniByStudentId = await db.collection("alumni").findOne({
      studentId: body.studentId,
    })

    if (existingAlumniByStudentId) {
      return NextResponse.json({ error: "Alumni with this student ID already exists" }, { status: 409 })
    }

    // Generate unique verification code
    const verificationCode = await generateVerificationCode()

    // Create alumni document
    const alumniData: Omit<Alumni, "_id"> = {
      studentId: body.studentId,
      verificationCode,
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

    // Send confirmation email
    try {
      await sendAlumniRegistrationConfirmation({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        studentId: body.studentId,
        verificationCode,
        graduationYear: body.graduationYear,
        school: body.school,
        degree: body.degree,
      })
      console.log("Registration confirmation email sent successfully")
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError)
      // Don't fail the registration if email fails, but log the error
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message:
          "Alumni registration submitted successfully. A confirmation email has been sent to your email address.",
        data: {
          studentId: body.studentId,
          verificationCode,
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
    const studentId = searchParams.get("studentId")
    const verificationCode = searchParams.get("verificationCode")

    if (!email && !studentId && !verificationCode) {
      return NextResponse.json({ error: "Email, Student ID, or Verification Code is required" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    let query = {}
    if (email) {
      query = { "personalInfo.email": email }
    } else if (studentId) {
      query = { studentId }
    } else if (verificationCode) {
      query = { verificationCode }
    }

    const alumni = await db.collection("alumni").findOne(query)

    if (!alumni) {
      return NextResponse.json({ error: "Alumni not found" }, { status: 404 })
    }

    // Only return public information
    const publicAlumniData = {
      studentId: alumni.studentId,
      verificationCode: alumni.verificationCode,
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
