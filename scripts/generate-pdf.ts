// @ts-expect-error - tsx handles JSX transform

// Make React available globally before any imports that use JSX
// This is needed because logic-data.tsx uses JSX at module load time
import React from "react";
if (typeof global !== "undefined" && !global.React) {
  global.React = React;
}

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { generatePDF, renderPDFDocument } from "../lib/generatePDF";

async function main() {
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
    const pdfPath = join(publicDir, "theory-of-everything.pdf");
    writeFileSync(pdfPath, pdfBuffer);

    console.log(`✓ PDF generated successfully: ${pdfPath}`);
  } catch (error) {
    console.error("Failed to generate PDF:", error);
    process.exit(1);
  }
}

main();
