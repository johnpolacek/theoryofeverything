export default function Footer() {
  return (
    <footer className="xl:mt-8 p-8 xl:px-16 border-t border-black/10 border-dashed">
      <div className="flex justify-between pb-4">
        <div>
          <p className="text-sm text-black/60 pt-1 mb-4">
            Holos is an independent research project by a{" "}
            <a href="https://johnpolacek.com">software engineer</a> exploring reality through
            systems, observation, and experience, written in public as part of an ongoing process of
            thinking, not as a finalized doctrine.
          </p>
        </div>
        <div className="flex items-start gap-4 mb-4">
          <div>
            <a
              className="text-sm text-black/80 hover:text-black border-b border-black/30"
              href="https://github.com/johnpolacek/Holos/discussions"
            >
              Discuss
            </a>
          </div>
          <div>
            <a
              className="text-sm text-black/80 hover:text-black border-b border-black/30"
              href="https://github.com/johnpolacek/Holos"
            >
              Contribute
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
