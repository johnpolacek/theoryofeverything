import React from "react"
import Content from "./Content"
import Logic from "./Logic"
import Defense from "./Defense"
import Definition from "./Definition"
import Predictions from "./Predictions"

export default function PDFDocument() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>A Theory of Everything</title>
        <style>{`
          @page {
            margin: 2cm;
            size: letter;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #000;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            font-size: 2.5em;
            font-weight: 300;
            margin-top: 1em;
            margin-bottom: 0.5em;
            page-break-after: avoid;
          }
          h2 {
            font-size: 2em;
            font-weight: 300;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            page-break-after: avoid;
          }
          h3 {
            font-size: 1.5em;
            font-weight: 600;
            margin-top: 1em;
            margin-bottom: 0.5em;
            page-break-after: avoid;
          }
          h4 {
            font-size: 1.2em;
            font-weight: 600;
            margin-top: 0.8em;
            margin-bottom: 0.4em;
            page-break-after: avoid;
          }
          p {
            margin-bottom: 1em;
            line-height: 1.8;
          }
          ul, ol {
            margin-bottom: 1em;
            padding-left: 2em;
          }
          li {
            margin-bottom: 0.5em;
          }
          blockquote {
            border-left: 2px solid #ccc;
            padding-left: 1em;
            margin-left: 0;
            margin-right: 0;
            font-style: italic;
            color: #666;
          }
          .section-break {
            page-break-before: always;
            margin-top: 2em;
          }
          .math-display {
            margin: 1.5em 0;
            padding: 1em;
            background: #f5f5f5;
            border-left: 2px solid #ccc;
            text-align: center;
            overflow-x: auto;
          }
          .math-inline {
            display: inline;
          }
          strong {
            font-weight: 600;
          }
          em {
            font-style: italic;
          }
          a {
            color: #000;
            text-decoration: underline;
          }
          hr {
            border: none;
            border-top: 1px solid #ccc;
            margin: 2em 0;
          }
        `}</style>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/katex.min.css" />
      </head>
      <body>
        <div className="section-break">
          <h1>A Theory of Everything</h1>
        </div>

        <div className="section-break">
          <h1>Theory</h1>
          <Content />
        </div>

        <div className="section-break">
          <h1>Logic</h1>
          <Logic />
        </div>

        <div className="section-break">
          <h1>Defense</h1>
          <Defense />
        </div>

        <div className="section-break">
          <Definition />
        </div>

        <div className="section-break">
          <Predictions />
        </div>
      </body>
    </html>
  )
}
