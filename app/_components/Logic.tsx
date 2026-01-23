import {
  axioms,
  definitions,
  extrapolativePropositions,
  foundationalPropositions,
  minimalCore,
} from "./logic-data";
import MathInline from "./MathInline";

export default function Logic() {
  return (
    <div className="flex flex-col gap-12 max-w-[50rem]">
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

      {/* VI. Operational Definition */}
      <section id="phi-operationalization" className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">VI. Operational Definition</h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            The foundational axiom of Holos defines reality as the recursive relation between
            Creation and Observation:
          </p>
          <div className="my-4 py-4 px-6 bg-black/5 border-l-2 border-black/20 font-mono text-center text-lg">
            R = C ⊛ O
          </div>
          <p className="leading-relaxed">
            <strong>Where:</strong>
          </p>
          <ul className="flex flex-col gap-3 pl-4">
            <li className="leading-relaxed">
              <strong>Creation</strong> (<MathInline>{"C"}</MathInline>) : The generation of
              physical possibility structures. This includes Quantum Evolution (generating
              potential), Decoherence (suppressing interference), and Recording (creating stable
              informational traces).
            </li>
            <li className="leading-relaxed">
              <strong>Observation</strong> (<MathInline>{"O"}</MathInline>) : The ontological
              "registration" that makes a physical record experienceable. This requires a system
              where <MathInline>{"Φ ≥ Φ_c"}</MathInline> (Conscious Integration).
            </li>
            <li className="leading-relaxed">
              <strong>Reality</strong> (<MathInline>{"R"}</MathInline>) : The actualized world as
              experienced; the collapse of "valid data" into "lived history."
            </li>
            <li className="leading-relaxed">
              <strong>The Holos Operator </strong> (<MathInline>{"⊛"}</MathInline>) : A recursive
              relational operator. It signifies that <MathInline>{"O"}</MathInline> does not just
              passively view <MathInline>{"C"}</MathInline>, but feeds back into the system to
              define the boundary conditions for the next cycle of <MathInline>{"C"}</MathInline>.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
