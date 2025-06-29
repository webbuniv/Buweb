import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"

export async function POST(request: NextRequest) {
  try {
    const { alumniId, verificationCode } = await request.json()

    if (!alumniId || !verificationCode) {
      return NextResponse.json({ error: "Alumni ID and verification code are required" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    // Find alumni by ID
    const alumni = await db.collection("alumni").findOne({ alumniId })

    if (!alumni) {
      return NextResponse.json({ error: "Alumni not found" }, { status: 404 })
    }

    // In a real implementation, you would verify the code against a stored verification code
    // For now, we'll use a simple verification process

    // Update verification status
    const result = await db.collection("alumni").updateOne(
      { alumniId },
      {
        $set: {
          "metadata.verificationStatus": "verified",
          "metadata.lastUpdated": new Date(),
        },
      },
    )

    if (result.modifiedCount === 0) {
      throw new Error("Failed to update verification status")
    }

    return NextResponse.json({
      success: true,
      message: "Alumni verification successful",
    })
  } catch (error) {
    console.error("Alumni verification error:", error)

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
