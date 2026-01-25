import BlockUniverseAnimation from "./BlockUniverseAnimation";
import ConsciousnessAnimation from "./ConsciousnessAnimation";
import { sections } from "./content-data";
import Footnotes from "./Footnotes";
import HolosAnimation from "./HolosAnimation";
import HolographicSingularityAnimation from "./HolographicSingularityAnimation";
import InfiniteWrapAnimation from "./InfiniteWrapAnimation";
import InvarianceWarpAnimation from "./InvarianceWarpAnimation";
import NullIntervalAnimation from "./NullIntervalAnimation";
import QuantumEraserAnimation from "./QuantumEraserAnimation";
import Section from "./Section";
import ShadowProjectionAnimation from "./ShadowProjectionAnimation";
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
          {section.id === "spacetime" && (
            <>
              <InvarianceWarpAnimation isPDF={isPDF} />
              <NullIntervalAnimation isPDF={isPDF} />
              <QuantumEraserAnimation isPDF={isPDF} />
            </>
          )}
          {section.id === "higher-dimensions" && <ShadowProjectionAnimation isPDF={isPDF} />}
          {section.id === "infinity" && <InfiniteWrapAnimation isPDF={isPDF} />}
          {section.id === "black-holes" && <HolographicSingularityAnimation isPDF={isPDF} />}
        </Section>
      ))}

      <Section id="footnotes" title="Footnotes">
        <Footnotes />
      </Section>
    </>
  );
}
