import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "20")
    const search = searchParams.get("search") || ""
    const school = searchParams.get("school") || ""
    const graduationYear = searchParams.get("graduationYear") || ""
    const location = searchParams.get("location") || ""

    const { db } = await connectToDatabase()

    // Build query for approved and public profiles only
    const query: any = {
      "metadata.status": "approved",
      "preferences.publicProfile": true,
    }

    // Add search filters
    if (search) {
      query.$or = [
        { "personalInfo.firstName": { $regex: search, $options: "i" } },
        { "personalInfo.lastName": { $regex: search, $options: "i" } },
        { "academicInfo.degree": { $regex: search, $options: "i" } },
        { "professionalInfo.currentPosition": { $regex: search, $options: "i" } },
        { "professionalInfo.company": { $regex: search, $options: "i" } },
      ]
    }

    if (school) {
      query["academicInfo.school"] = school
    }

    if (graduationYear) {
      query["academicInfo.graduationYear"] = Number.parseInt(graduationYear)
    }

    if (location) {
      query["professionalInfo.location"] = { $regex: location, $options: "i" }
    }

    // Get total count
    const total = await db.collection("alumni").countDocuments(query)

    // Get paginated results
    const alumni = await db
      .collection("alumni")
      .find(query)
      .sort({ "metadata.registrationDate": -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray()

    // Format response data
    const formattedAlumni = alumni.map((alumnus) => ({
      id: alumnus._id,
      name: `${alumnus.personalInfo.firstName} ${alumnus.personalInfo.lastName}`,
      graduationYear: alumnus.academicInfo.graduationYear,
      school: alumnus.academicInfo.school,
      degree: alumnus.academicInfo.degree,
      currentPosition: alumnus.professionalInfo.currentPosition,
      company: alumnus.professionalInfo.company,
      location: alumnus.professionalInfo.location,
      interests: alumnus.preferences.interests,
      willingToMentor: alumnus.preferences.willingToMentor,
      linkedIn: alumnus.professionalInfo.linkedIn,
      allowContact: alumnus.preferences.allowContact,
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
