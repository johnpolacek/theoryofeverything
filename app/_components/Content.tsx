import Section from "./Section"
import Holos from "./Holos"
import { sections } from "./content-data"
import { parseContent } from "./parse-content"

export default function Content() {
  return (
    <main>
      {sections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title}>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={`${section.id}-p-${pIndex}`}>
              {parseContent(paragraph, pIndex)}
            </p>
          ))}
        </Section>
      ))}

      <Section id="holos">
        <Holos />
      </Section>
    </main>
  )
}
