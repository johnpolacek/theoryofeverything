import type React from "react";

interface MathDisplayProps {
  children: React.ReactNode;
}

export default function MathDisplay({ children }: MathDisplayProps) {
  const mathContent = typeof children === "string" ? children : String(children);
  return (
    <div className="my-4 py-4 px-6 bg-black/5 border-l-2 border-black/20 font-mono text-center text-lg">
      <span className="math-display">$${mathContent}$$</span>
    </div>
  );
}
