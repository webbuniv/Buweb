import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search") || ""
    const school = searchParams.get("school") || ""
    const year = searchParams.get("year") || ""
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "12")

    const { db } = await connectToDatabase()

    // Build query for verified alumni with public profiles
    const query: any = {
      "metadata.status": "active",
      "metadata.verificationStatus": "verified",
      "preferences.publicProfile": true,
    }

    // Add search filters
    if (search) {
      query.$or = [
        { "personalInfo.firstName": { $regex: search, $options: "i" } },
        { "personalInfo.lastName": { $regex: search, $options: "i" } },
        { "professionalInfo.company": { $regex: search, $options: "i" } },
        { "professionalInfo.currentPosition": { $regex: search, $options: "i" } },
      ]
    }

    if (school) {
      query["academicInfo.school"] = school
    }

    if (year) {
      query["academicInfo.graduationYear"] = Number.parseInt(year)
    }

    // Get total count
    const total = await db.collection("alumni").countDocuments(query)

    // Get alumni with pagination
    const alumni = await db
      .collection("alumni")
      .find(query)
      .sort({ "academicInfo.graduationYear": -1, "personalInfo.lastName": 1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray()

    // Format response data (only public information)
    const formattedAlumni = alumni.map((alumnus) => ({
      id: alumnus.alumniId,
      name: `${alumnus.personalInfo.firstName} ${alumnus.personalInfo.lastName}`,
      graduationYear: alumnus.academicInfo.graduationYear,
      school: alumnus.academicInfo.school,
      degree: alumnus.academicInfo.degree,
      currentPosition: alumnus.professionalInfo.currentPosition,
      company: alumnus.professionalInfo.company,
      location: alumnus.professionalInfo.location,
      industry: alumnus.professionalInfo.industry,
      allowContact: alumnus.preferences.allowContact,
      willingToMentor: alumnus.preferences.willingToMentor,
    }))

    return NextResponse.json({
      success: true,
      data: {
        alumni: formattedAlumni,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
    })
  } catch (error) {
    console.error("Alumni directory error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
