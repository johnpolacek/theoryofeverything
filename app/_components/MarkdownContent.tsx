"use client"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"

interface MarkdownContentProps {
  content: string
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
                <div className="my-8 py-4 px-6 bg-black/5 border-l-2 border-black/20 text-center overflow-x-auto" {...props}>
                  <span className={className}>{children}</span>
                </div>
              )
            }
            if (className?.includes("math-inline")) {
              return <span className={className} {...props}>{children}</span>
            }
            return <span className={className} {...props}>{children}</span>
          },
          // Style headings
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light pb-4 mb-6" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl sm:text-3xl font-light pb-2 mb-4 mt-8" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-semibold text-black/90 mb-3 mt-6" {...props} />
          ),
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
