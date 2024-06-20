export default function Sidebar() {
  return (
    <aside className="w-full h-full max-w-[210px]">
      <nav className="fixed w-full h-full max-w-[210px] top-0 left-0 border-r border-black/10 border-dashed">
        <a href="#home" className="flex flex-col items-center justify-center py-8 border-b border-black/10 border-dashed h-[160px]">
          <span className="text-xs">a</span>
          <span>theory</span>
          <span className="text-xs">of</span>
          <span>everything</span>
        </a>
        <ol className="flex flex-col gap-4 p-8">
          <li><a href="#meaning-of-life">Meaning of Life</a></li>
          <li><a href="#consciousness">Consciousness</a></li>
          <li><a href="#our-universe">Our Universe</a></li>
          <li><a href="#time">Time</a></li>
          <li><a href="#higher-dimensions">Higher Dimensions</a></li>
          <li><a href="#infinity">Infinity</a></li>
          <li><a href="#black-holes">Black Holes</a></li>
          <li><a href="#aliens">Aliens</a></li>
          <li><a href="#simulation">Simulation</a></li>
          <li><a href="#god">God</a></li>
          <li><a href="#why">Why?</a></li>
        </ol>
      </nav>
    </aside>
  )
}
