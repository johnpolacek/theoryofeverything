import { NextResponse } from "next/server"
import { generatePDF, renderPDFDocument } from "@/lib/generatePDF"

export const dynamic = 'force-dynamic'
export const maxDuration = 60 // 60 seconds timeout for PDF generation
export const runtime = 'nodejs'

export async function GET() {
  try {
    // Render React component to HTML string
    const html = await renderPDFDocument()
    
    // Generate PDF from HTML
    const pdfBuffer = await generatePDF(html)
    
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="theory-of-everything.pdf"',
      },
    })
  } catch (error) {
    console.error('PDF generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    )
  }
}
