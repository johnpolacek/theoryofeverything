import React from "react"

interface MathInlineProps {
  children: React.ReactNode
}

export default function MathInline({ children }: MathInlineProps) {
  const mathContent = typeof children === "string" ? children : String(children)
  return <span className="math-inline">${mathContent}$</span>
}
