import BlockUniverseAnimation from "./BlockUniverseAnimation";
import { sections } from "./content-data";
import Footnotes from "./Footnotes";
import HolosAnimation from "./HolosAnimation";
import Section from "./Section";
import SpacetimeBlockAnimation from "./SpacetimeBlockAnimation";

export default function Content() {
  return (
    <>
      {sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          title={section.title}
          variant={section.id === "extrapolation" ? "note" : undefined}
        >
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={`${section.id}-p-${pIndex}`}>{paragraph}</p>
          ))}
          {section.id === "introduction" && <HolosAnimation />}
          {section.id === "meaning-of-life" && <BlockUniverseAnimation />}
          {section.id === "our-universe" && <SpacetimeBlockAnimation />}
        </Section>
      ))}

      <Section id="footnotes" title="Footnotes">
        <Footnotes />
      </Section>
    </>
  );
}
