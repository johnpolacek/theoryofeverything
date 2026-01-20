import { sections, footnotes, holosIntro } from "./content-data"

/**
 * Converts paragraph text from content-data format to markdown.
 * Transforms axiom-style links ([text](#url)[^N]) to markdown format.
 */
function paragraphToMarkdown(text: string): string {
  // Convert axiom-style links: ([text](#url)[^N]) -> (text[^N])
  return text.replace(/\(\[([^\]]+)\]\([^)]+\)\[\^(\d+)\]\)/g, "($1[^$2])")
}

export function contentToMarkdown(): string {
  let markdown = ""

  // Add sections
  sections.forEach((section) => {
    markdown += `## ${section.title}\n\n`
    section.paragraphs.forEach((paragraph) => {
      markdown += `${paragraphToMarkdown(paragraph)}\n\n`
    })
  })

  // Add Holos section
  markdown += `## Holos\n\n`
  holosIntro.forEach((paragraph) => {
    // Remove bold markers for first word in second paragraph
    const cleanParagraph = paragraph.replace(/\*\*([^*]+)\*\*/g, "$1")
    markdown += `${cleanParagraph}\n\n`
  })

  // Add footnotes
  markdown += `---\n\n`
  footnotes.forEach((footnote) => {
    markdown += `### ${footnote.title}\n\n`
    markdown += `[^${footnote.number}]: `
    footnote.items.forEach((item, index) => {
      const itemText = `[${item.name}](${item.url}) - ${item.description}`
      if (index === 0) {
        markdown += itemText
      } else {
        markdown += `\n  ${itemText}`
      }
    })
    markdown += `\n\n`
  })

  return markdown.trim()
}
