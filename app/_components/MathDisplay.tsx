"use client";

import { useEffect, useRef } from "react";
import type React from "react";
import katex from "katex";

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

  useEffect(() => {
    if (containerRef.current) {
      const mathContent = typeof children === "string" ? children : String(children);
      katex.render(mathContent, containerRef.current, {
        displayMode: true,
        throwOnError: false,
      });
    }
  }, [children]);

  return (
    <div className="my-4 py-4 px-6 bg-black/5 border-l-2 border-black/20 font-mono text-center text-lg">
      <div ref={containerRef} />
    </div>
  );
}
