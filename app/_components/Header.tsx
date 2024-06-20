export default function Header() {
  return (
    <header id="home" className="relative p-8 lg:px-16 border-b border-black/20 border-dashed xl:h-[160px]">
      <img src="/icon.svg" alt="Holos" title="Holos" className="w-6 h-6 absolute top-8 left-3 xl:hidden" />
      <h1 className="text-7xl xl:text-8xl font-extralight xl:font-thin"><sup className="text-5xl font-extralight relative -top-3 -mr-2 inline-block">a</sup> Theory <sup className="text-5xl font-extralight relative -top-3 -mr-2 inline-block">of</sup> Everything</h1>
    </header>
  )
}
