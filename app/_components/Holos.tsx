import { footnotes, holosIntro } from "./content-data"
import { parseContent } from "./parse-content"

export default function Holos() {
  return (
    <div className="text-sm flex flex-col gap-4">

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light pb-4"><span className="font-light text-black/60 relative -top-px">⊛</span> Holos</h2>

      {/* Holos intro paragraphs */}
      {holosIntro.map((paragraph) => (
        <p key={paragraph.slice(0, 30)} className="text-base">
          {parseContent(paragraph, 0)}
        </p>
      ))}

      {/* Footnote sections */}
      {footnotes.map((footnote) => (
        <div key={footnote.id}>
          <h4 id={footnote.id} className="font-semibold pt-4">
            {footnote.title}
          </h4>
          <div className="flex">
            <sup className="relative top-2 pr-2">{footnote.number}</sup>
            <ul className="flex flex-col gap-2">
              {footnote.items.map((item, itemIndex) => (
                <li key={`${footnote.id}-item-${itemIndex}`}>
                  <a className="font-normal underline mr-1" href={item.url}>
                    {item.name}
                  </a>{" "}
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Footer links */}
      <div className="flex flex-col gap-4 pt-8">
        <div>
          <a className="text-base text-black/80 hover:text-black border-b border-black/20" href="https://github.com/johnpolacek/theoryofeverything/discussions">
            Discuss
          </a>
        </div>
        <div>
          <a className="text-base text-black/80 hover:text-black border-b border-black/20" href="https://github.com/johnpolacek/theoryofeverything">
            Contribute
          </a>
        </div>
      </div>
    </div>
  )
}
