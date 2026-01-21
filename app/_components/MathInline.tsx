"use client";

import { useEffect, useRef } from "react";
import type React from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

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
