import React from "react"

export default function Section({children}: {children: React.ReactNode}) {
  return (
    <section className="p-8 border-b border-black/10 border-dashed">
      {children}
    </section>
  )
}
