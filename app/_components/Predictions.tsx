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
          consistency checks that align with empirical data. For the formal operational definition,
          see the{" "}
          <a
            href="/logic#phi-operationalization"
            className="text-black/80 hover:text-black underline"
          >
            Logic
          </a>{" "}
          section. For the definition of Φ, see the{" "}
          <a href="/definition" className="text-black/80 hover:text-black underline">
            Definition
          </a>{" "}
          section.
        </p>
      </div>

      {/* Primary Prediction: Participatory Selection (Cosmological) */}
      <section id="primary-prediction" className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">
          Primary Prediction: Participatory Selection (Cosmological)
        </h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            {convertMarkdownToJSX(
              'Holos implies that the universe\'s parameters are "selected" through participatory manifestation ([Axiom 2](/logic#axioms)), where observers act as a boundary condition for a self-consistent [block universe](https://en.wikipedia.org/wiki/Block_universe). This operationalizes the **[Participatory Anthropic Principle](https://en.wikipedia.org/wiki/Anthropic_principle)**, predicting that observable constants favor life not by chance, but by necessity. For conceptual exploration, see the main [Content](/) section.'
            )}
          </p>
          <p className="leading-relaxed">
            <strong>Empirical Implication:</strong>{" "}
            {convertMarkdownToJSX(
              'Future cosmological observations (e.g., CMB polarization from [CMB-S4](https://cmb-s4.org/) or [LiteBIRD](https://litebird.isas.jaxa.jp/static/eng/)) should reveal signatures consistent with a low-entropy initial state and [inflationary](https://en.wikipedia.org/wiki/Inflation_(cosmology)) dynamics specifically tuned for complexity growth. Holos predicts that "uninhabitable" branches of the [multiverse](https://en.wikipedia.org/wiki/Multiverse) are mathematically valid but ontologically unrealized due to the lack of [Φ](/definition).[^13]'
            )}
          </p>
        </div>
      </section>

      {/* Secondary Prediction: Thresholds for Emergent Consciousness (Neuroscience) */}
      <section id="secondary-predictions" className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">
          Secondary Prediction: Thresholds for Emergent Consciousness (Neuroscience)
        </h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            {convertMarkdownToJSX(
              "Holos operationalizes consciousness through [Φ](/definition), predicting that systems crossing a critical threshold ([Φ_c](/definition)) exhibit irreducible subjective experience. This distinguishes Holos from universal panpsychism (where everything is conscious) and illusionism (where nothing is)."
            )}
          </p>
          <p className="leading-relaxed">
            <strong>Empirical Implication:</strong>{" "}
            {convertMarkdownToJSX(
              "High-[Φ](/definition) systems (e.g., human cortex) should correlate with reports of [qualia](https://en.wikipedia.org/wiki/Qualia), while sub-[Φ_c](/definition) systems (e.g., simple AI or cerebellum) should show only mechanical processing. **[Integrated Information Theory](https://en.wikipedia.org/wiki/Integrated_information_theory) (IIT)-inspired metrics** (e.g., [Perturbational Complexity Index](https://www.science.org/doi/10.1126/scitranslmed.3006294)) should reveal sharp phase transitions that align with the onset of experiential reporting.[^13]"
            )}
          </p>
        </div>
      </section>

      {/* Tertiary Prediction: Relational Consistency (Quantum Foundations) */}
      <section id="tertiary-prediction" className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">
          Tertiary Prediction: Relational Consistency (Quantum Foundations)
        </h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            {convertMarkdownToJSX(
              'Holos predicts no observer-independent "facts," but ensures mutual coherence across perspectives ([Axiom 1](/logic#axioms)). For stress-testing of this axiom, see the [Defense](/defense) section.'
            )}
          </p>
          <p className="leading-relaxed">
            <strong>Empirical Implication:</strong>{" "}
            {convertMarkdownToJSX(
              '[Extended Wigner\'s Friend experiments](https://www.science.org/doi/10.1126/sciadv.aaw9832) should confirm that two observers can hold different "facts" about the same event without breaking unitarity. Holos specifically predicts that the "collapse" is relative to the [Φ](/definition) frame of reference, supporting **[Relational QM](https://en.wikipedia.org/wiki/Relational_quantum_mechanics)** over [Objective Collapse models](https://en.wikipedia.org/wiki/Interpretations_of_quantum_mechanics#Objective_collapse_theories) (which predict spontaneous gravity-induced collapse).[^13]'
            )}
          </p>
        </div>
      </section>

      {/* Extrapolative Prediction: The Transcension Hypothesis (Astrophysics) */}
      <section id="extrapolative-prediction" className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">
          Extrapolative Prediction: The Transcension Hypothesis (Astrophysics)
        </h2>
        <div className="flex flex-col gap-4 text-black/80">
          <p className="leading-relaxed">
            {convertMarkdownToJSX(
              "As intelligence maximizes informational integration ([Corollary V.2](/logic#foundational-propositions)), Holos predicts it will expand **orthogonally** into higher-dimensional substrates rather than expanding spatially across the galaxy. For conceptual exploration of the Transcension Hypothesis, see the main [Content](/) section."
            )}
          </p>
          <p className="leading-relaxed">
            <strong>Empirical Implication:</strong>{" "}
            {convertMarkdownToJSX(
              'The resolution to the [Fermi Paradox](https://en.wikipedia.org/wiki/Fermi_paradox) is geometric. Astronomical surveys (e.g., **[JWST](https://en.wikipedia.org/wiki/James_Webb_Space_Telescope)**, **[Euclid](https://en.wikipedia.org/wiki/Euclid_(spacecraft))**) may detect "missing mass" or gravitational anomalies that mimic [Dark Matter](https://en.wikipedia.org/wiki/Dark_matter), representing high-density informational structures located in the "bulk" dimensions ([Axiom 4: Unification](/logic#axioms)).[^13] For conceptual exploration, see the main [Content](/) section.'
            )}
          </p>
        </div>
      </section>

      {/* Testable Implications */}
      <section id="testable-implications" className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">Testable Implications</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-black/20">
                <th className="text-left py-2 pr-8 font-semibold text-black/90">Domain</th>
                <th className="text-left py-2 pr-8 font-semibold text-black/90">Prediction</th>
                <th className="text-left py-2 font-semibold text-black/90">Testable Via</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/10">
                <td className="py-3 pr-8 text-black/80">Cosmology</td>
                <td className="py-3 pr-8 text-black/80">Constants are tuned for observation.</td>
                <td className="py-3 text-black/80">CMB Polarization (LiteBIRD)</td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="py-3 pr-8 text-black/80">Neuroscience</td>
                <td className="py-3 pr-8 text-black/80">
                  Consciousness is a phase transition at <MathInline>{"Φ_c"}</MathInline>.
                </td>
                <td className="py-3 text-black/80">PCI / IIT Metrics</td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="py-3 pr-8 text-black/80">Quantum</td>
                <td className="py-3 pr-8 text-black/80">
                  Facts are relational; no objective collapse.
                </td>
                <td className="py-3 text-black/80">
                  {convertMarkdownToJSX(
                    "[Wigner's Friend Experiments](https://en.wikipedia.org/wiki/Wigner%27s_friend)"
                  )}
                </td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="py-3 pr-8 text-black/80">Astrophysics</td>
                <td className="py-3 pr-8 text-black/80">
                  Advanced life is hyper-structural, not spatial.
                </td>
                <td className="py-3 text-black/80">
                  {convertMarkdownToJSX(
                    "[Dark Matter Surveys (Euclid)](https://en.wikipedia.org/wiki/Euclid_(spacecraft))"
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <h2 className="text-2xl sm:text-3xl font-light pt-16">Experiments</h2>

      {/* Experimental Protocol: Integration Thresholds and Observer Emergence */}
      <section id="experiment-1" className="flex flex-col gap-6">
        <h2 className="text-xl sm:text-2xl font-medium pb-2">
          Experiment 1. Integration Thresholds and Observer Emergence (Φ-Crossing)
        </h2>

        <div className="flex flex-col gap-6 text-black/80">
          {/* Objective */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold pb-2">Objective</h3>
            <p className="leading-relaxed">
              To test whether the emergence of the{" "}
              <a href="/definition#2-ontological-requirements">Observer</a> (
              <MathInline>{"O"}</MathInline>) constitutes a critical phase transition rather than a
              linear gradient. Holos predicts that consciousness requires a specific density of
              integrated information (
              <a href="/definition">
                <MathInline>{"Φ_c"}</MathInline>
              </a>
              ) to operationalize <a href="/logic#axioms">Axiom 2 (Manifestation)</a>. Therefore,
              the transition between unconscious and conscious states should be discontinuous
              (non-linear) and exhibit state-dependent properties.
            </p>
          </div>

          {/* Subjects */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold pb-2">Subjects</h3>
            <ul className="list-disc list-inside flex flex-col gap-2 leading-relaxed">
              <li>{convertMarkdownToJSX("**Human adult volunteers** (healthy)")}</li>
              <li>
                {convertMarkdownToJSX(
                  "**Controlled anesthesia** administered in a clinical environment"
                )}
              </li>
              <li>
                {convertMarkdownToJSX(
                  "Optionally: additional cohorts (e.g., sleep, coma patients) for cross-validation"
                )}
              </li>
            </ul>
          </div>

          {/* Measured Variables */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold pb-2">Measured Variables</h3>
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="font-semibold mb-2">Primary Variables</h4>
                <ul className="list-disc list-inside flex flex-col gap-2 leading-relaxed ml-4">
                  <li>
                    <strong>
                      <a href="#secondary-predictions">PCI (Perturbational Complexity Index)</a>
                    </strong>
                    <br />
                    Computed from TMS-EEG responses to quantify integrated information capacity.
                  </li>
                  <li>
                    <strong>Consciousness state</strong>
                    <ul className="list-disc list-inside flex flex-col gap-1 leading-relaxed ml-4 mt-1">
                      <li>Wakefulness vs. sedation vs. unconsciousness (clinically assessed)</li>
                      <li>Subjective reports (when possible)</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Secondary Variables</h4>
                <ul className="list-disc list-inside flex flex-col gap-2 leading-relaxed ml-4">
                  <li>EEG spectral power, functional connectivity, and complexity metrics</li>
                  <li>Anesthesia depth (e.g., propofol concentration, BIS index)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prior Work and Status */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold pb-2">Prior Work and Status</h3>
            <div className="flex flex-col gap-3 leading-relaxed">
              <p>
                <strong>Status: Established / Partially Explored</strong>
                <br />
                PCI has already been validated as a robust measure of consciousness across sleep and
                anesthesia, and is widely used in neuroscience.
              </p>
              <p>
                <strong>Relationship to Prior Work</strong>
                <br />
                PCI was introduced and developed to measure consciousness capacity by evaluating
                brain responses to perturbation. It has been shown to reliably differentiate
                conscious wakefulness from unconscious states (sleep, anesthesia, vegetative
                states). However, the <strong>Holos-specific claim</strong> is not that PCI
                correlates with consciousness, but that{" "}
                <strong>there is a sharp threshold (</strong>
                <a href="/definition">
                  <MathInline>{"Φ_c"}</MathInline>
                </a>
                <strong>
                  ) where integrated information suddenly becomes sufficient for observation.
                </strong>
              </p>
            </div>
          </div>

          {/* Protocol */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold pb-2">Protocol</h3>
            <ol className="list-decimal list-inside flex flex-col gap-2 leading-relaxed ml-4">
              <li>{convertMarkdownToJSX("**Baseline wakefulness:** record PCI while awake.")}</li>
              <li>
                {convertMarkdownToJSX(
                  "**Controlled anesthesia ramp:** slowly increase anesthetic depth."
                )}
              </li>
              <li>
                {convertMarkdownToJSX(
                  "**Continuous TMS-EEG:** compute PCI at multiple points along the anesthesia curve."
                )}
              </li>
              <li>
                {convertMarkdownToJSX(
                  "**Transition analysis:** identify whether PCI drops gradually or sharply."
                )}
              </li>
            </ol>
          </div>

          {/* Prediction */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold pb-2">Prediction</h3>
            <p className="leading-relaxed">
              If <a href="/definition#2-ontological-requirements">observerhood</a> requires{" "}
              <a href="/definition">
                <MathInline>{"Φ ≥ Φ_c"}</MathInline>
              </a>
              , the transition from conscious to unconscious states will show a{" "}
              <strong>sharp drop in </strong>
              <a href="#secondary-predictions">PCI</a>
              <strong> at a consistent anesthesia depth across subjects.</strong>
            </p>
            <ul className="list-disc list-inside flex flex-col gap-2 leading-relaxed ml-4">
              <li>
                <strong>Sharp transition:</strong> supports a threshold model of observer emergence.
              </li>
              <li>
                <strong>Gradual transition:</strong> suggests consciousness is a continuous function
                of integration, weakening the Holos claim.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
