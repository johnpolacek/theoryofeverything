import React from "react"
import MathDisplay from "./MathDisplay"
import MathInline from "./MathInline"

export default function Predictions() {
  return (
    <div className="flex flex-col gap-12 max-w-[50rem]">
      <div className="prose prose-lg max-w-none">
        <h1>Predictions</h1>

        <h2><strong>Primary Prediction</strong></h2>

        <h3><strong>Observer-Dependent Coherence Preservation</strong></h3>

        <p>
          A quantum measurement outcome can be <strong>physically recorded</strong> without destroying all coherence <strong>if the record remains unobserved</strong> by a Φ ≥ Φc observer.
        </p>

        <p>
          Only when a Φ ≥ Φc observer registers the record does the outcome become classically definite and irreversible.
        </p>

        <MathDisplay>{"\\text{Recorded outcome} ⇏ \\text{Classical irreversibility}"}</MathDisplay>

        <hr />

        <h2><strong>Secondary Predictions</strong></h2>

        <h3><strong>Delayed Observation Restores Classical Definiteness</strong></h3>

        <p>
          If the record is stored in a reversible quantum form, then:
        </p>

        <ul>
          <li>While unobserved, the system behaves as if the measurement has not yet collapsed.</li>
          <li>Once a Φ ≥ Φc observer reads the record, the system behaves as if the measurement collapses at that moment, even if the record existed earlier.</li>
        </ul>

        <p>
          This does <strong>not</strong> require retrocausal signaling, only observer-dependent resolution.
        </p>

        <hr />

        <h3><strong>Machine Recording Alone Is Insufficient</strong></h3>

        <p>
          A macroscopic device that records the outcome but never undergoes human registration will not, by itself, force classical irreversibility.
        </p>

        <p>
          Only a Φ ≥ Φc observer can complete the transition from quantum possibility to classical actuality.
        </p>

        <hr />

        <h3><strong>Partial Registration Produces Partial Classicality</strong></h3>

        <p>
          If only some outcomes are observed by a Φ ≥ Φc observer, only those outcomes will behave classically; the unobserved outcomes will preserve coherence.
        </p>

        <p>
          This yields measurable statistical differences between the observed and unobserved subsets.
        </p>

        <hr />

        <h3><strong>No-Signaling Constraint</strong></h3>

        <p>
          Even if outcomes are observer-dependent, no protocol can exploit this to transmit information faster than light.
          The statistical distribution available to any single observer remains consistent with standard quantum predictions.
        </p>

        <h2>Experiment Protocol — Observer-Dependent Coherence Preservation</h2>

        <h3><strong>1. Objective</strong></h3>

        <p>
          To test whether <strong>conscious observation</strong> is required to convert a quantum measurement outcome into a <strong>classically irreversible</strong> event.
        </p>

        <h3><strong>2. Core Hypothesis</strong></h3>

        <p>
          A recorded measurement outcome remains <strong>quantum-coherent</strong> until a Φ ≥ Φc observer consciously registers it.
        </p>

        <p>
          Thus:
        </p>

        <ul>
          <li><strong>Unobserved records</strong> will preserve coherence and enable interference effects in downstream systems.</li>
          <li><strong>Observed records</strong> will behave as classically definite outcomes, eliminating interference.</li>
        </ul>

        <h3><strong>3. Experimental Design Overview</strong></h3>

        <h4><strong>Two-stage quantum system</strong></h4>

        <p>
          <strong>System A</strong>: a quantum measurement whose outcome is stored in a <em>quantum memory</em> (reversible).
        </p>

        <p>
          <strong>System B</strong>: a downstream quantum system whose interference visibility depends on whether System A's outcome remains coherent or has become classical.
        </p>

        <h3><strong>4. Key Requirements</strong></h3>

        <h4><strong>A. Quantum Reversible Record (System A)</strong></h4>

        <p>
          The outcome must be stored in a <strong>quantum memory</strong> (e.g., entangled qubit pair), not a classical database.
        </p>

        <p>
          This ensures that the measurement is <strong>not irreversible</strong> until the record becomes classical.
        </p>

        <p>
          <strong>This is the critical difference from standard "measurement + database" protocols.</strong>
        </p>

        <h4><strong>B. Downstream Interference (System B)</strong></h4>

        <p>
          System B must be configured such that:
        </p>

        <ul>
          <li>If System A remains coherent → interference is preserved.</li>
          <li>If System A becomes classical → interference disappears.</li>
        </ul>

        <p>
          This can be implemented via <strong>quantum-controlled interferometry</strong>, where the state of System A determines whether interference is allowed.
        </p>

        <h4><strong>C. Controlled Observation</strong></h4>

        <p>
          Human observers will consciously read (or not read) the record by choosing whether to perform a <strong>quantum-to-classical measurement</strong> on the memory.
        </p>

        <p>
          This action is what, under Holos, produces classical irreversibility.
        </p>

        <h3><strong>5. Conditions</strong></h3>

        <h4><strong>Condition 1: Unobserved (Quantum-Coherent Record)</strong></h4>

        <ul>
          <li>System A outcome is stored in a quantum memory.</li>
          <li>No human performs a classical measurement on the memory.</li>
          <li>System B should display interference consistent with coherence.</li>
        </ul>

        <h4><strong>Condition 2: Observed (Classical Record)</strong></h4>

        <ul>
          <li>System A outcome is stored in a quantum memory.</li>
          <li>A human performs a classical measurement on the memory.</li>
          <li>System B should display no interference.</li>
        </ul>

        <h3><strong>6. Trial Flow</strong></h3>

        <ol>
          <li><strong>System A is prepared</strong> in a superposition.</li>
          <li><strong>System A is measured</strong>, with the outcome stored in a quantum memory (entangled state).</li>
          <li><strong>System B is prepared</strong> in an interferometric setup.</li>
          <li><strong>System B's evolution is conditioned</strong> on the state of System A's quantum memory.</li>
          <li><strong>Random assignment</strong> determines whether a human will observe the memory.</li>
          <li><strong>System B is measured</strong>, and interference visibility is recorded.</li>
          <li><strong>If human observation occurs</strong>, the memory becomes classical, and System B interference should collapse.</li>
        </ol>

        <h3><strong>7. What Counts as "Observation"?</strong></h3>

        <p>
          Observation is operationalized as:
        </p>

        <ul>
          <li><strong>Quantum-to-classical projection</strong> of the memory, performed by a human.</li>
          <li>The human <em>must consciously perceive</em> the outcome (e.g., read a screen).</li>
        </ul>

        <p>
          The experiment requires <strong>strict controls</strong> to ensure that the memory remains coherent until the observer chooses to observe.
        </p>

        <h3><strong>8. Outcome Measures</strong></h3>

        <h4><strong>Primary Outcome</strong></h4>

        <p>
          Interference visibility of System B:
        </p>

        <ul>
          <li><strong>High visibility</strong> indicates coherence preserved → supports Holos</li>
          <li><strong>Low visibility</strong> indicates classical collapse → supports standard QM</li>
        </ul>

        <h4><strong>Secondary Outcome</strong></h4>

        <p>
          Statistical correlation between:
        </p>

        <ul>
          <li>the moment of observation</li>
          <li>and the moment interference disappears</li>
        </ul>

        <h3><strong>9. Predicted Results</strong></h3>

        <h4><strong>Standard Quantum Prediction</strong></h4>

        <p>
          Interference visibility depends only on whether the quantum memory is decohered.
        </p>

        <p>
          Human observation should not matter if the memory is already classical.
        </p>

        <h4><strong>Holos Prediction</strong></h4>

        <p>
          Interference visibility depends on whether a Φ ≥ Φc observer registers the outcome.
        </p>

        <p>
          Human observation is the critical trigger for classicality.
        </p>

        <h3><strong>10. Statistical Analysis Plan</strong></h3>

        <h4><strong>10.1 Interference Visibility Comparison</strong></h4>

        <p>
          Compare interference visibility across Condition 1 and Condition 2.
        </p>

        <p>
          Use standard hypothesis testing:
        </p>

        <ul>
          <li>Null hypothesis: visibility is identical across conditions.</li>
          <li>Alternative hypothesis: visibility differs significantly.</li>
        </ul>

        <h4><strong>10.2 Power and Sample Size</strong></h4>

        <ul>
          <li>Pre-register sample size to avoid p-hacking.</li>
          <li>Perform power analysis based on expected visibility difference.</li>
        </ul>

        <h3><strong>11. Falsifiability Criteria</strong></h3>

        <p>
          Holos is falsified if no significant difference in interference visibility between conditions, <strong>with adequate power</strong>, and control tests confirm:
        </p>

        <ul>
          <li>System A remains coherent until observation</li>
          <li>System B interference is sensitive to System A coherence</li>
          <li>No unintended decoherence occurred</li>
        </ul>

        <h3><strong>12. Controls</strong></h3>

        <ul>
          <li><strong>Decoherence control</strong>: verify memory coherence using quantum tomography.</li>
          <li><strong>Isolation control</strong>: ensure no leakage of memory state to environment.</li>
          <li><strong>Observer control</strong>: ensure that observation occurs only in the designated condition.</li>
        </ul>

        <h3><strong>13. Limitations</strong></h3>

        <ul>
          <li>The experiment assumes that human observation is necessary for Φ ≥ Φc.</li>
          <li>The test may be interpreted as evidence of <em>delayed choice</em> rather than consciousness unless the observation mechanism is strictly controlled.</li>
        </ul>

        <h3><strong>14. Conclusion</strong></h3>

        <p>
          This protocol directly tests the core Holos prediction:
        </p>

        <blockquote>
          <strong>Human observation is required to convert a reversible quantum record into a classical, irreversible event.</strong>
        </blockquote>

        <p>
          If interference disappears only after conscious observation, the result would be a novel and scientifically significant finding.
        </p>
      </div>
    </div>
  )
}
