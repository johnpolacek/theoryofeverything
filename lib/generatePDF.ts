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
  // Replace className with class for proper HTML rendering
  const htmlWithClass = html.replace(/className=/g, "class=");

  // Add DOCTYPE to prevent quirks mode (required for KaTeX)
  // and inject scripts into the head section
  const scriptsToInject = `
    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/katex.min.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/contrib/auto-render.min.js" defer></script>
  `;

  // Insert DOCTYPE at the beginning and scripts before </head>
  let fullHTML = htmlWithClass;
  if (!fullHTML.trim().toLowerCase().startsWith('<!doctype')) {
    fullHTML = '<!DOCTYPE html>\n' + fullHTML;
  }
  fullHTML = fullHTML.replace('</head>', `${scriptsToInject}</head>`);

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
    defaultViewport: isServerless
      ? {
          width: 1920,
          height: 1080,
          deviceScaleFactor: 1,
        }
      : undefined,
    executablePath: isServerless ? await chromium.executablePath() : undefined,
    headless: isServerless ? "shell" : true,
  });

  try {
    const page = await browser.newPage();

    // Set content
    await page.setContent(fullHTML, {
      waitUntil: "networkidle0",
    });

    // Force load Bitter font
    await page.evaluate(async () => {
      const weights = ['200', '300', '400', '600'];
      for (const weight of weights) {
        try {
          await document.fonts.load(`${weight} 16px "Bitter"`);
        } catch (e) {
          // Font weight may not be available
        }
      }
      await document.fonts.ready;
    });

    // Apply Bitter font (excluding KaTeX elements which need their own fonts)
    await page.evaluate(() => {
      document.documentElement.style.fontFamily = '"Bitter", serif';
      document.body.style.fontFamily = '"Bitter", serif';
      
      const allElements = document.querySelectorAll('*:not(.katex):not(.katex *)');
      allElements.forEach(el => {
        const htmlEl = el as HTMLElement;
        if (htmlEl.style && !htmlEl.classList.contains('katex') && !htmlEl.closest('.katex')) {
          htmlEl.style.fontFamily = '"Bitter", serif';
        }
      });
    });

    // Wait for fonts to be applied
    await new Promise(resolve => setTimeout(resolve, 500));

    // Render KaTeX math equations
    await page.evaluate(() => {
      if (typeof (window as any).katex === 'undefined') return;
      
      // Render display math
      document.querySelectorAll('.math-display').forEach(element => {
        const text = element.textContent?.trim() || '';
        if (text) {
          try {
            (window as any).katex.render(text, element, { displayMode: true, throwOnError: false });
          } catch (e) {
            // Ignore render errors
          }
        }
      });
      
      // Render inline math
      document.querySelectorAll('.math-inline').forEach(element => {
        const text = element.textContent?.trim() || '';
        if (text) {
          try {
            (window as any).katex.render(text, element, { displayMode: false, throwOnError: false });
          } catch (e) {
            // Ignore render errors
          }
        }
      });
      
      // Auto-render any remaining math
      if (typeof (window as any).renderMathInElement !== 'undefined') {
        try {
          (window as any).renderMathInElement(document.body, {
            delimiters: [
              {left: "$$", right: "$$", display: true},
              {left: "$", right: "$", display: false},
              {left: "\\(", right: "\\)", display: false},
              {left: "\\[", right: "\\]", display: true}
            ],
            throwOnError: false
          });
        } catch (e) {
          // Ignore auto-render errors
        }
      }
    });

    // Wait for KaTeX to finish rendering
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
