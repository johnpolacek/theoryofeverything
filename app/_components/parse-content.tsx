import React from "react"

type ParsedElement = string | React.ReactElement

/**
 * Parses markdown-style text and returns JSX elements.
 * Supports:
 * - **bold** -> <strong>bold</strong>
 * - [text](url) -> <a href="url">text</a>
 * - [^N] at end -> footnote link with <sup>
 * - ([text](#footer-id)[^N]) -> inline axiom link
 */
export function parseContent(text: string, paragraphIndex: number): React.ReactNode {
  const elements: ParsedElement[] = []
  let keyIndex = 0

  // Check for trailing footnote reference [^N]
  const trailingFootnoteMatch = text.match(/\[\^(\d+)\]$/)
  let mainText = text
  let trailingFootnote: string | null = null

  if (trailingFootnoteMatch) {
    trailingFootnote = trailingFootnoteMatch[1]
    mainText = text.slice(0, -trailingFootnoteMatch[0].length)
  }

  // Parse the main text
  let remaining = mainText
  
  while (remaining.length > 0) {
    // Check for bold **text**
    const boldMatch = remaining.match(/^\*\*([^*]+)\*\*/)
    if (boldMatch) {
      elements.push(
        <strong key={`${paragraphIndex}-${keyIndex++}`}>{boldMatch[1]}</strong>
      )
      remaining = remaining.slice(boldMatch[0].length)
      continue
    }

    // Check for axiom-style link: ([text](#url)[^N])
    const axiomLinkMatch = remaining.match(/^\(\[([^\]]+)\]\(([^)]+)\)\[\^(\d+)\]\)/)
    if (axiomLinkMatch) {
      const [fullMatch, linkText, url, footnoteNum] = axiomLinkMatch
      elements.push(
        <React.Fragment key={`${paragraphIndex}-${keyIndex++}`}>
          (
          <a className="px-0.5 opacity-80 hover:opacity-100" href={url}>
            {linkText}
            <sup>{footnoteNum}</sup>
          </a>
          )
        </React.Fragment>
      )
      remaining = remaining.slice(fullMatch.length)
      continue
    }

    // Check for regular link [text](url)
    const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/)
    if (linkMatch) {
      const [fullMatch, linkText, url] = linkMatch
      elements.push(
        <a
          key={`${paragraphIndex}-${keyIndex++}`}
          className="font-normal underline mr-1"
          href={url}
        >
          {linkText}
        </a>
      )
      remaining = remaining.slice(fullMatch.length)
      continue
    }

    // Find the next special character position
    const nextBold = remaining.indexOf("**")
    const nextLink = remaining.indexOf("[")
    const nextParen = remaining.indexOf("(")
    
    let nextSpecial = remaining.length
    if (nextBold !== -1 && nextBold < nextSpecial) nextSpecial = nextBold
    if (nextLink !== -1 && nextLink < nextSpecial) nextSpecial = nextLink
    if (nextParen !== -1 && nextParen < nextSpecial) nextSpecial = nextParen

    if (nextSpecial > 0) {
      elements.push(remaining.slice(0, nextSpecial))
      remaining = remaining.slice(nextSpecial)
    } else {
      // No special characters found in first position, add one char and continue
      elements.push(remaining[0])
      remaining = remaining.slice(1)
    }
  }

  // Add trailing footnote if present
  if (trailingFootnote) {
    // Find the footer ID for this footnote number
    const footerId = getFooterIdForNumber(parseInt(trailingFootnote))
    elements.push(
      <a
        key={`${paragraphIndex}-footnote`}
        className="pl-0.5 pr-2 opacity-80 hover:opacity-100"
        href={`#${footerId}`}
      >
        <sup>{trailingFootnote}</sup>
      </a>
    )
  }

  return elements
}

// Map footnote numbers to their footer IDs
function getFooterIdForNumber(num: number): string {
  const footerMap: Record<number, string> = {
    1: "footer-axioms",
    2: "footer-life",
    3: "footer-consciousness",
    4: "footer-universe",
    5: "footer-spacetime",
    6: "footer-dimensions",
    7: "footer-infinity",
    8: "footer-blackholes",
    9: "footer-aliens",
    10: "footer-simulation",
    11: "footer-god",
    12: "footer-why",
  }
  return footerMap[num] || "footer-why"
}
