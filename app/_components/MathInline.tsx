"use client";

import { useEffect, useRef } from "react";
import type React from "react";
import katex from "katex";

// Only import CSS in browser environment
if (typeof window !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("katex/dist/katex.min.css");
}

interface MathInlineProps {
  children: React.ReactNode;
}

export default function MathInline({ children }: MathInlineProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const mathContent = typeof children === "string" ? children : String(children);
      katex.render(mathContent, containerRef.current, {
        displayMode: false,
        throwOnError: false,
      });
    }
  }, [children]);

  return <span ref={containerRef} className="math-inline" />;
}
