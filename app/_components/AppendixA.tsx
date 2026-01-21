import {
  appendixTitle,
  definitions,
  axioms,
  foundationalPropositions,
  extrapolativePropositions,
  minimalCore,
} from "./appendix-data"
import { parseContent } from "./parse-content"

export default function AppendixA() {
  return (
    <div className="flex flex-col gap-12 max-w-[50rem]">
      {/* Title */}
      <div className="flex flex-col gap-4">
        <p className="sm:text-lg text-black/60 uppercase tracking-wide">Appendix A: Logic</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light pb-4">{appendixTitle}</h1>
      </div>

      {/* I. Primitive Definitions */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">I. Primitive Definitions</h2>
        <div className="flex flex-col gap-6">
          {definitions.map((def) => (
            <div key={def.id} className="flex flex-col gap-2">
              <div className="flex gap-2 items-start">
                <span className="font-semibold text-black/90">{def.id} — {def.name}</span>
              </div>
              <div className="pl-0 flex flex-col gap-2 text-black/80">
                {(() => {
                  const usedIndices = new Set<number>()
                  return def.content.map((paragraph, idx) => {
                    if (usedIndices.has(idx)) return null
                    if (paragraph === "") return <br key={`${def.id}-br-${idx}`} />
                    if (paragraph === "\\[") {
                      // Find the equation line (next non-empty line)
                      const equationIdx = def.content.findIndex((p, i) => i > idx && p !== "" && p !== "\\[" && p !== "\\]")
                      if (equationIdx !== -1) {
                        usedIndices.add(equationIdx)
                        const equation = def.content[equationIdx]
                        return (
                          <div key={`${def.id}-eq-${idx}`} className="my-4 py-4 px-6 bg-black/5 border-l-2 border-black/20 font-mono text-center text-lg">
                            {equation}
                          </div>
                        )
                      }
                      return null
                    }
                    if (paragraph === "\\]") {
                      usedIndices.add(idx)
                      return null
                    }
                    return (
                      <p key={`${def.id}-p-${idx}`} className="leading-relaxed">
                        {parseContent(paragraph, idx)}
                      </p>
                    )
                  })
                })()}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* II. Axioms */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">II. Axioms (Irreducible Commitments)</h2>
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
      <section className="flex flex-col gap-6">
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
                            {parseContent(para, idx)}
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
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">IV. Extrapolative Propositions (Explicitly Marked)</h2>
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
                            {parseContent(para, idx)}
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
        <h2 className="text-2xl sm:text-3xl font-light pb-2">V. Minimal Core (Irreducible Summary)</h2>
        <div className="flex flex-col gap-3 text-black/80">
          {minimalCore.map((item, idx) => {
            // Use first 40 chars of content as key (items are unique)
            const keyBase = item.trim().slice(0, 40).replace(/[^\w]/g, '-')
            return (
              <p key={`core-${keyBase}`} className="leading-relaxed">
                {parseContent(item, idx)}
              </p>
            )
          })}
        </div>
      </section>
    </div>
  )
}
