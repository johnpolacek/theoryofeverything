import { convertMarkdownToJSX } from "./convertToJSX";
import MathDisplay from "./MathDisplay";
import MathInline from "./MathInline";

export default function Predictions() {
  return (
    <div className="flex flex-col gap-12 max-w-[50rem]">
      {/* Introduction */}
      <div className="flex flex-col gap-4 text-black/80">
        <p className="leading-relaxed">
          {convertMarkdownToJSX(
            "Holos does not propose new dynamical laws or forces that modify existing physical equations. Instead, it offers **ontological predictions** about how reality manifests through the recursive relation:"
          )}
        </p>
        <MathDisplay>{"R = C \\circledast O"}</MathDisplay>
        <p className="leading-relaxed">
          Where <MathInline>{"C"}</MathInline> represents physical creation (quantum evolution,
          decoherence, recording), and <MathInline>{"O"}</MathInline> represents conscious
          integration (with <MathInline>{"Φ \\ge Φ_c"}</MathInline>). These predictions arise from
          the axioms and the <MathInline>{"Φ_c"}</MathInline> threshold, and are intended as
          consistency checks that align with empirical data.
        </p>
      </div>

      {/* Primary Prediction: Participatory Selection (Cosmological) */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">
          Primary Prediction: Participatory Selection (Cosmological)
        </h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            {convertMarkdownToJSX(
              'Holos implies that the universe\'s parameters are "selected" through participatory manifestation (Axiom 2), where observers act as a boundary condition for a self-consistent block universe. This operationalizes the **Participatory Anthropic Principle**, predicting that observable constants favor life not by chance, but by necessity.'
            )}
          </p>
          <p className="leading-relaxed">
            <strong>Empirical Implication:</strong>{" "}
            {convertMarkdownToJSX(
              'Future cosmological observations (e.g., CMB polarization from [CMB-S4](https://cmb-s4.org/) or [LiteBIRD](https://litebird.isas.jaxa.jp/static/eng/)) should reveal signatures consistent with a low-entropy initial state and inflationary dynamics specifically tuned for complexity growth. Holos predicts that "uninhabitable" branches of the multiverse are mathematically valid but ontologically unrealized due to the lack of Φ.[^13]'
            )}
          </p>
        </div>
      </section>

      {/* Secondary Prediction: Thresholds for Emergent Consciousness (Neuroscience) */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">
          Secondary Prediction: Thresholds for Emergent Consciousness (Neuroscience)
        </h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            {convertMarkdownToJSX(
              "Holos operationalizes consciousness through Φ, predicting that systems crossing a critical threshold (Φ_c) exhibit irreducible subjective experience. This distinguishes Holos from universal panpsychism (where everything is conscious) and illusionism (where nothing is)."
            )}
          </p>
          <p className="leading-relaxed">
            <strong>Empirical Implication:</strong>{" "}
            {convertMarkdownToJSX(
              "High-Φ systems (e.g., human cortex) should correlate with reports of qualia, while sub-Φ_c systems (e.g., simple AI or cerebellum) should show only mechanical processing. **IIT-inspired metrics** (e.g., [Perturbational Complexity Index](https://www.science.org/doi/10.1126/scitranslmed.3006294)) should reveal sharp phase transitions that align with the onset of experiential reporting.[^13]"
            )}
          </p>
        </div>
      </section>

      {/* Tertiary Prediction: Relational Consistency (Quantum Foundations) */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">
          Tertiary Prediction: Relational Consistency (Quantum Foundations)
        </h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            {convertMarkdownToJSX(
              'Holos predicts no observer-independent "facts," but ensures mutual coherence across perspectives (Axiom 1).'
            )}
          </p>
          <p className="leading-relaxed">
            <strong>Empirical Implication:</strong>{" "}
            {convertMarkdownToJSX(
              '[Extended Wigner\'s Friend experiments](https://www.science.org/doi/10.1126/sciadv.aaw9832) should confirm that two observers can hold different "facts" about the same event without breaking unitarity. Holos specifically predicts that the "collapse" is relative to the Φ frame of reference, supporting **Relational QM** over Objective Collapse models (which predict spontaneous gravity-induced collapse).[^13]'
            )}
          </p>
        </div>
      </section>

      {/* Extrapolative Prediction: The Transcension Hypothesis (Astrophysics) */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">
          Extrapolative Prediction: The Transcension Hypothesis (Astrophysics)
        </h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            {convertMarkdownToJSX(
              "As intelligence maximizes informational integration (Corollary V.2), Holos predicts it will expand **orthogonally** into higher-dimensional substrates rather than expanding spatially across the galaxy."
            )}
          </p>
          <p className="leading-relaxed">
            <strong>Empirical Implication:</strong>{" "}
            {convertMarkdownToJSX(
              'The resolution to the Fermi Paradox is geometric. Astronomical surveys (e.g., **JWST**, **Euclid**) may detect "missing mass" or gravitational anomalies that mimic Dark Matter, representing high-density informational structures located in the "bulk" dimensions (Axiom 4: Unification).[^13]'
            )}
          </p>
        </div>
      </section>

      {/* Minimal Core for Predictions */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">Minimal Core for Predictions</h2>
        <div className="flex flex-col gap-4 text-black/80">
          <ol className="flex flex-col gap-3 pl-4">
            <li className="leading-relaxed">
              <strong>Cosmic:</strong>{" "}
              {convertMarkdownToJSX("Parameters are tuned for observers (testable via CMB data).")}
            </li>
            <li className="leading-relaxed">
              <strong>Neural:</strong>{" "}
              {convertMarkdownToJSX(
                "Consciousness emerges at Φ thresholds (testable via PCI/IIT)."
              )}
            </li>
            <li className="leading-relaxed">
              <strong>Quantum:</strong>{" "}
              {convertMarkdownToJSX(
                "Facts are relational, not absolute (testable via Wigner's Friend)."
              )}
            </li>
            <li className="leading-relaxed">
              <strong>Galactic:</strong>{" "}
              {convertMarkdownToJSX(
                "Advanced intelligence leaves gravitational, not radio, signatures (testable via Dark Matter surveys)."
              )}
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
