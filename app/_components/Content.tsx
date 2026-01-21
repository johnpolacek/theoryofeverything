import Section from "./Section"
import Holos from "./Holos"
import { sections } from "./content-data"

export default function Content() {
  return (
    <main>
      {sections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title} variant={section.id === "extrapolation" ? "note" : undefined}>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={`${section.id}-p-${pIndex}`}>
              {paragraph}
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
