import Content from "./Content";
import Defense from "./Defense";
import Definition from "./Definition";
import Logic from "./Logic";
import Predictions from "./Predictions";

export default function PDFDocument() {
  return (
    <html lang="en">
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
          .title-page {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 60vh;
            text-align: center;
          }
          .title-icon {
            width: 32px;
            height: 32px;
            margin-bottom: 1em;
            display: block;
          }
          .title-main {
            font-size: 4em;
            font-weight: 200;
            line-height: 1.1;
            margin: 0;
          }
          .title-main sup {
            font-size: 0.4em;
            font-weight: 200;
            position: relative;
            top: -0.3em;
            margin-right: 0.1em;
          }
          .title-main .tracking-wide {
            letter-spacing: 0.05em;
          }
        `}</style>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/katex.min.css"
        />
      </head>
      <body>
        <div className="section-break title-page">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="title-icon"
          >
            <circle cx="192" cy="256" r="230" stroke="black" strokeWidth="24" fill="none" />
            <g transform="scale(0.75) translate(64, 85)">
              <path d="M192 32c17.7 0 32 14.3 32 32V199.5l111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11L224 312.5V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V312.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11L160 199.5V64c0-17.7 14.3-32 32-32z" />
            </g>
          </svg>
          <h1 className="title-main">
            <sup>a</sup> Theory <sup>of</sup> <span className="tracking-wide">Everything</span>
          </h1>
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
  );
}
