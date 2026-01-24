"use client";

import katex from "katex";
import type React from "react";
import { useEffect, useRef } from "react";

// Only import CSS in browser environment
if (typeof window !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("katex/dist/katex.min.css");
}

interface MathDisplayProps {
  children: React.ReactNode;
}

export default function MathDisplay({ children }: MathDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mathContent = typeof children === "string" ? children : String(children);

  useEffect(() => {
    if (containerRef.current) {
      katex.render(mathContent, containerRef.current, {
        displayMode: true,
        throwOnError: false,
      });
    }
  }, [mathContent]);

  return (
    <div className="my-4 py-4 px-6 bg-black/5 border-l-2 border-black/30 font-mono text-center text-lg">
      {/* Include math content as text for SSR/PDF generation, will be replaced by KaTeX on client */}
      <div ref={containerRef} className="math-display">
        {mathContent}
      </div>
    </div>
  );
}
