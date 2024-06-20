import React from "react"

export default function Sidebar() {
  return (
    <aside className="hidden xl:block w-full h-full max-w-[210px]">
      <nav className="fixed w-full h-full max-w-[210px] top-0 left-0 border-r border-black/20 border-dashed overflow-auto">
        <a href="#home" className="flex flex-col items-center justify-center py-8 border-b border-black/20 border-dashed h-[160px]">
          <img src="/icon.svg" alt="Holos" title="Holos" className="w-4 h-4 relative -top-1" />
          <span className="text-xs">a</span>
          <span>theory</span>
          <span className="text-xs">of</span>
          <span>everything</span>
        </a>
        <ol className="flex flex-col gap-4 p-8 pb-16">
          <li><a href="#meaning-of-life">Life</a></li>
          <li><a href="#consciousness">Consciousness</a></li>
          <li><a href="#our-universe">Our Universe</a></li>
          <li><a href="#time">Time</a></li>
          <li><a href="#higher-dimensions">Higher Dimensions</a></li>
          <li><a href="#infinity">Infinity</a></li>
          <li><a href="#black-holes">Black Holes</a></li>
          <li><a href="#aliens">Aliens</a></li>
          <li><a href="#simulation">Simulation</a></li>
          <li><a href="#god">God</a></li>
          <li><a href="#love">Love</a></li>
          <li><a href="#why">Why?</a></li>
          <li>
            <a className="block pt-6 flex items-center gap-1 -ml-0.5" href="#holos">
              <img src="/icon.svg" alt="Asterisk in a Circle" className="w-4 h-4 scale-90" />
              <span className="font-light">Holos</span>
            </a>
          </li>
        </ol>
      </nav>
    </aside>
  )
}
