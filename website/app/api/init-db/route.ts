import { NextResponse } from "next/server"
import { initializeDatabase } from "@/lib/db-service"

export async function GET() {
  try {
    const result = await initializeDatabase()

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Database initialization failed", error: result.error },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true, message: "Database initialized successfully" })
  } catch (error) {
    console.error("Error initializing database:", error)
    return NextResponse.json(
      { success: false, message: "Error initializing database", error: String(error) },
      { status: 500 },
    )
  }
}

