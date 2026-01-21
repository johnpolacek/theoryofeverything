"use client"
import type React from "react"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"

interface MarkdownContentProps {
  content: string
}

// Helper function to extract text from React children
function extractText(children: React.ReactNode): string {
  if (typeof children === 'string') {
    return children
  }
  if (Array.isArray(children)) {
    return children.map(child => {
      if (typeof child === 'string') return child
      if (typeof child === 'object' && child && 'props' in child && child.props && typeof child.props === 'object' && 'children' in child.props) {
        return extractText(child.props.children as React.ReactNode)
      }
      return ''
    }).join('')
  }
  if (typeof children === 'object' && children && 'props' in children && children.props && typeof children.props === 'object' && 'children' in children.props) {
    return extractText(children.props.children as React.ReactNode)
  }
  return ''
}

// Helper function to generate ID from heading text
function generateId(children: any): string {
  const text = extractText(children)
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters (keeps alphanumeric, spaces, hyphens)
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
    .trim()
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          // Style block equations ($$) - KaTeX wraps display math in span.math.math-display
          span: ({ node, className, children, ...props }) => {
            if (className?.includes("math-display")) {
              return (
                <div className="my-8 py-4 px-6 bg-black/5 border-l-2 border-black/20 text-center overflow-x-auto">
                  <span className={className}>{children}</span>
                </div>
              )
            }
            if (className?.includes("math-inline")) {
              return <span className={className} {...props}>{children}</span>
            }
            return <span className={className} {...props}>{children}</span>
          },
          // Style headings with IDs
          h1: ({ node, children, ...props }) => {
            const id = generateId(children)
            return (
              <h1 id={id} className="text-4xl sm:text-5xl md:text-6xl font-light pb-4 mb-6" {...props}>
                {children}
              </h1>
            )
          },
          h2: ({ node, children, ...props }) => {
            const id = generateId(children)
            return (
              <h2 id={id} className="text-2xl sm:text-3xl font-light pb-2 mb-4 mt-8" {...props}>
                {children}
              </h2>
            )
          },
          h3: ({ node, children, ...props }) => {
            const id = generateId(children)
            return (
              <h3 id={id} className="text-xl font-semibold text-black/90 mb-3 mt-6" {...props}>
                {children}
              </h3>
            )
          },
          // Style paragraphs
          p: ({ node, ...props }) => (
            <p className="leading-relaxed mb-4 text-black/80" {...props} />
          ),
          // Style blockquotes
          blockquote: ({ node, ...props }) => (
            <blockquote className="pl-4 border-l-2 border-black/20 text-black/70 italic my-4" {...props} />
          ),
          // Style lists
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-black/80" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-black/80" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="leading-relaxed" {...props} />
          ),
          // Style strong/bold
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-black/90" {...props} />
          ),
          // Style emphasis/italic
          em: ({ node, ...props }) => (
            <em className="italic" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
