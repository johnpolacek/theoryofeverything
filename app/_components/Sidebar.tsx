"use client"
import React, { useState } from "react"
import { contentToMarkdown } from "./contentToMarkdown"

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      const markdown = contentToMarkdown()
      await navigator.clipboard.writeText(markdown)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <>
      <div className="sticky w-full xl:hidden z-20">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="absolute top-2 left-2 cursor-pointer">
          <img src="/icon.svg" alt="Holos" title="Holos" className="w-5 h-5 lg:w-8 lg:h-8" />
        </button>
      </div>
      <aside
        onClick={() => setIsSidebarOpen(false)}
        className={`w-full h-screen overflow-auto transition-transform duration-300 bg-white ${isSidebarOpen ? "transform translate-x-0" : "fixed transform -translate-x-full z-10"} xl:static xl:transform-none`}
      >
        <nav className="w-full h-screen top-0 left-0 border-r border-black/20 border-dashed overflow-auto flex flex-col">
          <a href="#home" className="hidden xl:block border-b border-black/20 border-dashed h-[160px] w-full">
            <div className="flex flex-col items-center justify-center py-8">
              <img src="/icon.svg" alt="Holos" title="Holos" className="w-4 h-4 relative -top-1" />
              <span className="text-xs">a</span>
              <span>theory</span>
              <span className="text-xs">of</span>
              <span>everything</span>
            </div>
          </a>
          <ol className="flex flex-col h-full xl:h-auto gap-4 pt-12 pb-16 justify-center items-center xl:justify-start flex-grow">
            <li>
              <a href="#axioms">Axioms</a>
            </li>
            <li>
              <a href="#meaning-of-life">Life</a>
            </li>
            <li>
              <a href="#consciousness">Consciousness</a>
            </li>
            <li>
              <a href="#our-universe">Our Universe</a>
            </li>
            <li>
              <a href="#spacetime">Spacetime</a>
            </li>
            <li>
              <a href="#higher-dimensions">Higher Dimensions</a>
            </li>
            <li>
              <a href="#infinity">Infinity</a>
            </li>
            <li>
              <a href="#black-holes">Black Holes</a>
            </li>
            <li>
              <a href="#aliens">Aliens</a>
            </li>
            <li>
              <a href="#simulation">Simulation</a>
            </li>
            <li>
              <a href="#god">God</a>
            </li>
            <li>
              <a href="#why">Why?</a>
            </li>
            <li>
              <a className="flex pt-6 items-center gap-1 -ml-0.5" href="#holos">
                <img src="/icon.svg" alt="Asterisk in a Circle" className="w-4 h-4 scale-90" />
                <span className="font-light">Holos</span>
              </a>
            </li>
            <li>
              <a className="pt-6" href="/appendix">Appendix</a>
            </li>
          </ol>
          <div className="w-full flex justify-center pb-8 px-8 xl:px-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleCopy()
              }}
              className="text-xs text-black/60 hover:text-black border border-black/20 hover:border-black/40 px-4 py-2 rounded transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-60"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-60"
                  aria-hidden="true"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              )}
              {copied ? "Copied!" : "Copy Markdown"}
            </button>
          </div>
        </nav>
      </aside>
    </>
  )
}
