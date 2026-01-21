export default function Header() {
  return (
    <header
      id="home"
      className="relative p-8 lg:px-16 border-b border-black/20 border-dashed xl:h-[160px] animate pointer-events-none"
    >
      <h1 className="text-center scale-[0.8] sm:scale-90 md:scale-100 -ml-2 xl:ml-0 xl:text-left text-7xl xl:text-8xl font-extralight xl:font-thin">
        <sup className="text-5xl font-extralight relative -top-3 -mr-2 inline-block">a</sup> Theory{" "}
        <sup className="text-5xl font-extralight relative -top-3 -mr-2 inline-block">of</sup>{" "}
        <span className="tracking-wide">Everything</span>
      </h1>
    </header>
  );
}
