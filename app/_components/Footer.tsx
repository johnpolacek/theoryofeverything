export default function Footer() {
  return (
    <footer className="xl:mt-8 p-8 xl:px-16 border-t border-black/10 border-dashed flex items-center justify-between">
      <p className="text-sm italic text-black/50">
        Published on{" "}
        <a
          className="text-black/70 hover:text-black border-b border-black/20"
          href="https://github.com/johnpolacek/theoryofeverything"
        >
          6/19/2024
        </a>
        . Updated 1/21/2026.
      </p>
      <div className="flex items-center gap-4 mb-4">
        <div>
          <a
            className="text-sm text-black/80 hover:text-black border-b border-black/20"
            href="https://github.com/johnpolacek/theoryofeverything/discussions"
          >
            Discuss
          </a>
        </div>
        <div>
          <a
            className="text-sm text-black/80 hover:text-black border-b border-black/20"
            href="https://github.com/johnpolacek/theoryofeverything"
          >
            Contribute
          </a>
        </div>
      </div>
    </footer>
  );
}
