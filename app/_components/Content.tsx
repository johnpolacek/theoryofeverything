import BlockUniverseAnimation from "./BlockUniverseAnimation";
import ConsciousnessAnimation from "./ConsciousnessAnimation";
import { sections } from "./content-data";
import Footnotes from "./Footnotes";
import HolosAnimation from "./HolosAnimation";
import Section from "./Section";
import SpacetimeBlockAnimation from "./SpacetimeBlockAnimation";

interface ContentProps {
  isPDF?: boolean;
}

export default function Content({ isPDF = false }: ContentProps) {
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
          {section.id === "introduction" && <HolosAnimation isPDF={isPDF} />}
          {section.id === "meaning-of-life" && <BlockUniverseAnimation isPDF={isPDF} />}
          {section.id === "consciousness" && <ConsciousnessAnimation isPDF={isPDF} />}
          {section.id === "our-universe" && <SpacetimeBlockAnimation isPDF={isPDF} />}
        </Section>
      ))}

      <Section id="footnotes" title="Footnotes">
        <Footnotes />
      </Section>
    </>
  );
}
