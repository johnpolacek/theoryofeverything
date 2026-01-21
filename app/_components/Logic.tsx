import {
  axioms,
  definitions,
  extrapolativePropositions,
  foundationalPropositions,
  minimalCore,
} from "./logic-data";

export default function Logic() {
  return (
    <div className="flex flex-col gap-12 max-w-[50rem]">
      {/* Title */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light pb-4">
          <div className="flex flex-col items-start gap-3">
            <span>Holos: A Formal Structure</span>
            <span
              className="text-black/60 text-2xl sm:text-3xl md:text-4xl"
              style={{ fontFamily: "Times New Roman, Times, serif" }}
            >
              ⊛
            </span>
          </div>
        </h1>
      </div>

      {/* I. Primitive Definitions */}
      <section id="primitive-definitions" className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">I. Primitive Definitions</h2>
        <div className="flex flex-col gap-6">
          {definitions.map((def) => (
            <div key={def.id} className="flex flex-col gap-2">
              <div className="flex gap-2 items-start">
                <span className="font-semibold text-black/90">
                  {def.id} — {def.name}
                </span>
              </div>
              <div className="pl-0 flex flex-col gap-2 text-black/80">
                {def.content.map((paragraph, idx) => {
                  if (paragraph === "") return <br key={`${def.id}-br-${idx}`} />;
                  if (typeof paragraph === "string") {
                    return (
                      <p key={`${def.id}-p-${idx}`} className="leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  }
                  return <div key={`${def.id}-content-${idx}`}>{paragraph}</div>;
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* II. Axioms */}
      <section id="axioms" className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">II. Axioms</h2>
        <div className="flex flex-col gap-8">
          {axioms.map((axiom) => (
            <div key={axiom.id} className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-black/90">
                {axiom.id} — {axiom.name}
              </h3>
              <p className="text-black/80 leading-relaxed">{axiom.statement}</p>
              {axiom.explanation && (
                <blockquote className="pl-4 border-l-2 border-black/20 text-black/70 italic my-2">
                  {axiom.explanation}
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* III. Foundational Propositions */}
      <section id="foundational-propositions" className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">III. Foundational Propositions</h2>
        <div className="flex flex-col gap-8">
          {foundationalPropositions.map((prop) => (
            <div key={prop.id} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-black/90">
                  Proposition {prop.id} — {prop.name}
                </h3>
                <p className="text-black/80 leading-relaxed">{prop.statement}</p>
              </div>
              {prop.corollaries.length > 0 && (
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-black/10">
                  {prop.corollaries.map((cor) => (
                    <div key={cor.id} className="flex flex-col gap-2">
                      <div className="font-semibold text-black/85 text-sm">
                        Corollary {cor.id} — {cor.name}
                      </div>
                      <div className="flex flex-col gap-1 text-black/75 text-sm">
                        {cor.content.map((para, idx) => (
                          <p key={`${cor.id}-p-${idx}`} className="leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* IV. Extrapolative Propositions */}
      <section id="extrapolative-propositions" className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">IV. Extrapolative Propositions</h2>
        <div className="flex flex-col gap-8">
          {extrapolativePropositions.map((prop) => (
            <div key={prop.id} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-black/90">
                  Proposition {prop.id} — {prop.name}
                </h3>
                <p className="text-black/80 leading-relaxed">{prop.statement}</p>
              </div>
              {prop.corollaries.length > 0 && (
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-black/10">
                  {prop.corollaries.map((cor) => (
                    <div key={cor.id} className="flex flex-col gap-2">
                      <div className="font-semibold text-black/85 text-sm">
                        Corollary {cor.id} — {cor.name}
                      </div>
                      <div className="flex flex-col gap-1 text-black/75 text-sm">
                        {cor.content.map((para, idx) => (
                          <p key={`${cor.id}-p-${idx}`} className="leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* V. Minimal Core */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">V. Minimal Core</h2>
        <div className="flex flex-col gap-3 text-black/80">
          {minimalCore.map((item, idx) => {
            if (item === "") return <br key={`core-br-${idx}`} />;
            return (
              <p key={`core-${idx}`} className="leading-relaxed">
                {item}
              </p>
            );
          })}
        </div>
      </section>

      {/* VI. Φ as the Operationalization of Holos */}
      <section id="phi-operationalization" className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">
          VI. Φ as the Operationalization of Holos
        </h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            The foundational axiom of Holos defines reality as the recursive relation between
            Creation and Observation:
          </p>
          <div className="my-4 py-4 px-6 bg-black/5 border-l-2 border-black/20 font-mono text-center text-lg">
            R = C ⊛ O
          </div>
          <p className="leading-relaxed">
            This relation is axiomatic and ontological. It specifies <em>what reality is</em>, but
            not the conditions under which Observation becomes ontologically effective in concrete
            systems.
          </p>
          <p className="leading-relaxed">
            <strong>Φ (Phi)</strong> provides this operational condition.
          </p>
          <p className="leading-relaxed">
            Within the Holos framework, Creation (C) corresponds to the full space of physical
            possibility described by unitary quantum evolution. Observation (O) is not assumed to be
            universally active; it exists as a latent capacity distributed across physical systems.
          </p>
          <p className="leading-relaxed">
            <strong>Φ</strong> determines when Observation becomes non-null.
          </p>
          <p className="leading-relaxed">
            When Φ(S) &lt; Φ_c, a system participates in physical dynamics but does not register a
            distinct ontological state. In this regime, Observation remains formally present but
            causally inert with respect to manifestation, and reality is describable as unresolved
            informational structure.
          </p>
          <p className="leading-relaxed">
            When Φ(S) ≥ Φ_c, Observation becomes causally effective. The system is capable of
            integrating information into experience, and the relation R = C ⊛ O becomes fully
            instantiated at that locus.
          </p>
          <p className="leading-relaxed">Thus, Φ does not redefine Holos. It operationalizes it.</p>
          <p className="leading-relaxed">
            Holos specifies the invariant structure of reality; Φ specifies the threshold at which
            that structure becomes manifest.
          </p>
        </div>
      </section>
    </div>
  );
}
