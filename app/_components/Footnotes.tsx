import { footnotes } from "./content-data";

export default function Footnotes() {
  return (
    <div className="text-sm flex flex-col gap-4">
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
    </div>
  );
}
