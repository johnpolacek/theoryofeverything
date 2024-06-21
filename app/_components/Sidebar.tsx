"use client"
import React, { useState } from "react"

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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
        <nav className="w-full h-screen top-0 left-0 border-r border-black/20 border-dashed overflow-auto">
          <a href="#home" className="hidden xl:block border-b border-black/20 border-dashed h-[160px] w-full">
            <div className="flex flex-col items-center justify-center py-8">
              <img src="/icon.svg" alt="Holos" title="Holos" className="w-4 h-4 relative -top-1" />
              <span className="text-xs">a</span>
              <span>theory</span>
              <span className="text-xs">of</span>
              <span>everything</span>
            </div>
          </a>
          <ol className="flex flex-col gap-4 pt-12 pb-16 items-center">
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
              <a className="block pt-6 flex items-center gap-1 -ml-0.5" href="#holos">
                <img src="/icon.svg" alt="Asterisk in a Circle" className="w-4 h-4 scale-90" />
                <span className="font-light">Holos</span>
              </a>
            </li>
          </ol>
        </nav>
      </aside>
    </>
  )
}
