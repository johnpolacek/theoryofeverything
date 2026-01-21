// @ts-ignore - tsx handles JSX transform
import React from "react"
import { generatePDF, renderPDFDocument } from "../lib/generatePDF"
import { writeFileSync, mkdirSync } from "fs"
import { join } from "path"

async function main() {
  console.log("Generating PDF at build time...")
  
  try {
    // Render React component to HTML string
    const html = await renderPDFDocument()
    
    // Generate PDF from HTML
    const pdfBuffer = await generatePDF(html)
    
    // Ensure public directory exists
    const publicDir = join(process.cwd(), "public")
    mkdirSync(publicDir, { recursive: true })
    
    // Write PDF to public directory
    const pdfPath = join(publicDir, "theory-of-everything.pdf")
    writeFileSync(pdfPath, pdfBuffer)
    
    console.log(`✓ PDF generated successfully: ${pdfPath}`)
  } catch (error) {
    console.error("Failed to generate PDF:", error)
    process.exit(1)
  }
}

main()
