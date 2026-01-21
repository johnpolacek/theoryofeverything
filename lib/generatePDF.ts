import puppeteerCore from "puppeteer-core";
import chromium from "@sparticuz/chromium";

// Check if we're running in a serverless environment (Vercel, AWS Lambda, etc.)
const isServerless = process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME;

// For local development, try to use regular puppeteer (better performance)
// For serverless, use puppeteer-core with chromium
async function getPuppeteer() {
  if (isServerless) {
    return puppeteerCore;
  }
  // Try to use regular puppeteer for local development
  try {
    const puppeteer = await import("puppeteer");
    return puppeteer.default;
  } catch {
    // Fall back to puppeteer-core if puppeteer is not available
    return puppeteerCore;
  }
}

// Dynamic imports to avoid Next.js restrictions
async function getRenderToString() {
  const { renderToString } = await import("react-dom/server");
  return renderToString;
}

// This function is no longer needed since we handle React setup in renderPDFDocument
// Keeping it for potential future use
async function getPDFDocument() {
  const React = await import("react");
  const PDFDocument = (await import("../app/_components/PDFDocument")).default;
  return { React, PDFDocument };
}

export async function generatePDF(html: string): Promise<Buffer> {
  // Wrap in full HTML document with styles
  // Replace className with class for proper HTML rendering
  const htmlWithClass = html.replace(/className=/g, "class=");

  const fullHTML = `
    <!DOCTYPE html>
    ${htmlWithClass}
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/katex.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/contrib/auto-render.min.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", function() {
        // Render math in elements with math-display and math-inline classes
        const mathElements = document.querySelectorAll('.math-display, .math-inline');
        mathElements.forEach(function(element) {
          const text = element.textContent.trim();
          if (element.classList.contains('math-display')) {
            katex.render(text, element, { displayMode: true });
          } else {
            katex.render(text, element, { displayMode: false });
          }
        });
        
        // Also render math in $ and $$ delimiters
        renderMathInElement(document.body, {
          delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false}
          ]
        });
      });
    </script>
  `;

  // Configure Chromium for serverless environments
  // setGraphicsMode is a property, not a function - set it before executablePath()
  if (isServerless) {
    chromium.setGraphicsMode = false;
  }

  // Get the appropriate Puppeteer instance
  const puppeteer = await getPuppeteer();

  // Launch Puppeteer with appropriate configuration
  const browser = await puppeteer.launch({
    args: isServerless
      ? [
          ...chromium.args,
          "--hide-scrollbars",
          "--disable-web-security",
          "--disable-features=IsolateOrigins,site-per-process",
        ]
      : ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: isServerless ? chromium.defaultViewport : undefined,
    executablePath: isServerless ? await chromium.executablePath() : undefined,
    headless: isServerless ? chromium.headless : true,
  });

  try {
    const page = await browser.newPage();

    // Set content
    await page.setContent(fullHTML, {
      waitUntil: "networkidle0",
    });

    // Wait for math to render
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Generate PDF
    const pdf = await page.pdf({
      format: "Letter",
      margin: {
        top: "2cm",
        right: "2cm",
        bottom: "2cm",
        left: "2cm",
      },
      printBackground: true,
    });

    return Buffer.from(pdf);
  } finally {
    await browser.close();
  }
}

export async function renderPDFDocument(): Promise<string> {
  const renderToString = await getRenderToString();
  // Import React first and make it globally available before importing PDFDocument
  // This is needed because logic-data.tsx uses JSX at module load time
  const ReactModule = await import("react");
  if (typeof global !== "undefined" && !global.React) {
    global.React = ReactModule;
  }
  // Now import PDFDocument after React is available
  const PDFDocument = (await import("../app/_components/PDFDocument")).default;
  return renderToString(ReactModule.createElement(PDFDocument));
}
