import { type NextRequest, NextResponse } from "next/server"
import { processDocument } from "@/lib/document-processor"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get("file") as File
    const title = formData.get("title") as string
    const tags = formData.get("tags") as string
    const category = formData.get("category") as string

    if (!file) {
      return NextResponse.json({ success: false, message: "No file provided" }, { status: 400 })
    }

    // Generate a unique URL/ID for the document
    const documentId = `document-${Date.now()}-${file.name}`

    // Process the document
    const page = await processDocument(file, documentId, file.type, {
      title: title || file.name,
      tags: tags ? tags.split(",").map((t) => t.trim()) : [],
      category,
    })

    return NextResponse.json({
      success: true,
      message: "Document processed successfully",
      document: {
        id: page.id,
        title: page.title,
        url: page.url,
        fileType: page.documentData?.fileType,
        category: page.documentData?.category,
      },
    })
  } catch (error) {
    console.error("Error processing document:", error)
    return NextResponse.json(
      {
        success: false,
        message: `Error processing document: ${error instanceof Error ? error.message : "Unknown error"}`,
      },
      { status: 500 },
    )
  }
}

