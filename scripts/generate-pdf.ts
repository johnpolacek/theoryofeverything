// Make React available globally before any imports that use JSX.
// PDFDocument → Content → content-data.tsx, and content-data exports JSX at module load time.
import React from "react";
if (typeof global !== "undefined" && !global.React) {
  global.React = React;
}

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { generatePDF, renderPDFDocument } from "../lib/generatePDF";

async function main() {
  // Skip PDF generation if SKIP_PDF_GENERATION is set (useful for CI/CD)
  if (process.env.SKIP_PDF_GENERATION === "true") {
    console.log("Skipping PDF generation (SKIP_PDF_GENERATION=true)");
    return;
  }

  console.log("Generating PDF at build time...");

  try {
    // Render React component to HTML string
    const html = await renderPDFDocument();

    // Generate PDF from HTML
    const pdfBuffer = await generatePDF(html);

    // Ensure public directory exists
    const publicDir = join(process.cwd(), "public");
    mkdirSync(publicDir, { recursive: true });

    // Write PDF to public directory
    const pdfPath = join(publicDir, "holos.pdf");
    writeFileSync(pdfPath, pdfBuffer);

    console.log(`✓ PDF generated successfully: ${pdfPath}`);
  } catch (error) {
    console.error("Failed to generate PDF:", error);
    // On Vercel, don't fail the build if PDF generation fails
    // The PDF can be generated on-demand via the API route
    if (process.env.VERCEL) {
      console.warn(
        "⚠ PDF generation failed on Vercel. The PDF can still be generated on-demand via /api/pdf"
      );
      return;
    }
    process.exit(1);
  }
}

main();
