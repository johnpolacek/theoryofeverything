import React from "react";
import MathInline from "./MathInline";

/**
 * Converts markdown-style text to JSX elements.
 * This is a one-time conversion utility to transform markdown strings to JSX.
 * Handles inline math: \\(...\\) -> MathInline component
 */
export function convertMarkdownToJSX(text: string): React.ReactNode {
  const elements: (string | React.ReactElement)[] = [];
  let keyIndex = 0;

  // Check for trailing footnote reference [^N]
  const trailingFootnoteMatch = text.match(/\[\^(\d+)\]$/);
  let mainText = text;
  let trailingFootnote: string | null = null;

  if (trailingFootnoteMatch) {
    trailingFootnote = trailingFootnoteMatch[1];
    mainText = text.slice(0, -trailingFootnoteMatch[0].length);
  }

  // Parse the main text
  let remaining = mainText;

  while (remaining.length > 0) {
    // Check for inline math \\(...\\)
    const inlineMathMatch = remaining.match(/^\\\\\(([^)]+)\)/);
    if (inlineMathMatch) {
      elements.push(<MathInline key={`math-${keyIndex++}`}>{inlineMathMatch[1]}</MathInline>);
      remaining = remaining.slice(inlineMathMatch[0].length);
      continue;
    }

    // Check for bold **text** (must come before italic to avoid conflicts)
    const boldMatch = remaining.match(/^\*\*([^*]+)\*\*/);
    if (boldMatch) {
      elements.push(<strong key={`bold-${keyIndex++}`}>{boldMatch[1]}</strong>);
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }

    // Check for italic *text* (single asterisk, not part of bold)
    const italicMatch = remaining.match(/^\*([^*]+)\*/);
    if (italicMatch) {
      elements.push(<em key={`italic-${keyIndex++}`}>{italicMatch[1]}</em>);
      remaining = remaining.slice(italicMatch[0].length);
      continue;
    }

    // Check for axiom-style link: ([text](#url)[^N])
    const axiomLinkMatch = remaining.match(/^\(\[([^\]]+)\]\(([^)]+)\)\[\^(\d+)\]\)/);
    if (axiomLinkMatch) {
      const [fullMatch, linkText, url, footnoteNum] = axiomLinkMatch;
      elements.push(
        <React.Fragment key={`axiom-${keyIndex++}`}>
          (
          <a className="px-0.5 opacity-80 hover:opacity-100" href={url}>
            {linkText}
            <sup>{footnoteNum}</sup>
          </a>
          )
        </React.Fragment>
      );
      remaining = remaining.slice(fullMatch.length);
      continue;
    }

    // Check for regular link [text](url)
    const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      const [fullMatch, linkText, url] = linkMatch;
      elements.push(
        <a key={`link-${keyIndex++}`} href={url}>
          {linkText}
        </a>
      );
      remaining = remaining.slice(fullMatch.length);
      continue;
    }

    // Find the next special character position
    const nextBold = remaining.indexOf("**");
    const nextItalic = remaining.indexOf("*");
    const nextLink = remaining.indexOf("[");
    const nextParen = remaining.indexOf("(");

    let nextSpecial = remaining.length;
    if (nextBold !== -1 && nextBold < nextSpecial) nextSpecial = nextBold;
    if (nextItalic !== -1 && nextItalic < nextSpecial) nextSpecial = nextItalic;
    if (nextLink !== -1 && nextLink < nextSpecial) nextSpecial = nextLink;
    if (nextParen !== -1 && nextParen < nextSpecial) nextSpecial = nextParen;

    if (nextSpecial > 0) {
      elements.push(remaining.slice(0, nextSpecial));
      remaining = remaining.slice(nextSpecial);
    } else {
      // No special characters found in first position, add one char and continue
      elements.push(remaining[0]);
      remaining = remaining.slice(1);
    }
  }

  // Add trailing footnote if present
  if (trailingFootnote) {
    const footerId = getFooterIdForNumber(parseInt(trailingFootnote, 10));
    elements.push(
      <a
        key={`footnote-${keyIndex++}`}
        className="pl-0.5 pr-2 opacity-80 hover:opacity-100"
        href={`#${footerId}`}
      >
        <sup>{trailingFootnote}</sup>
      </a>
    );
  }

  return elements.length === 1 ? elements[0] : elements;
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
    13: "footer-predictions",
  };
  return footerMap[num] || "footer-why";
}
