import MathDisplay from "./MathDisplay";

export default function Predictions() {
  return (
    <div className="flex flex-col gap-12 max-w-[50rem]">
      {/* Title */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light pb-4">Predictions</h1>
      </div>

      {/* Primary Prediction */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">Primary Prediction</h2>
        <div className="flex flex-col gap-4 text-black/80">
          <h3 className="text-lg font-semibold text-black/90">
            Observer-Dependent Coherence Preservation
          </h3>

          <p className="leading-relaxed">
            A quantum measurement outcome can be <strong>physically recorded</strong> without
            destroying all coherence <strong>if the record remains unobserved</strong> by a Φ ≥ Φc
            observer.
          </p>

          <p className="leading-relaxed">
            Only when a Φ ≥ Φc observer registers the record does the outcome become classically
            definite and irreversible.
          </p>

          <MathDisplay>
            {"\\text{Recorded outcome} ⇏ \\text{Classical irreversibility}"}
          </MathDisplay>
        </div>
      </section>

      {/* Secondary Predictions */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">Secondary Predictions</h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">
              Delayed Observation Restores Classical Definiteness
            </h3>
            <div className="flex flex-col gap-3 text-black/80">
              <p className="leading-relaxed">
                If the record is stored in a reversible quantum form, then:
              </p>

              <ul className="flex flex-col gap-2 pl-4">
                <li className="leading-relaxed">
                  While unobserved, the system behaves as if the measurement has not yet collapsed.
                </li>
                <li className="leading-relaxed">
                  Once a Φ ≥ Φc observer reads the record, the system behaves as if the measurement
                  collapses at that moment, even if the record existed earlier.
                </li>
              </ul>

              <p className="leading-relaxed">
                This does <strong>not</strong> require retrocausal signaling, only
                observer-dependent resolution.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">
              Machine Recording Alone Is Insufficient
            </h3>
            <div className="flex flex-col gap-3 text-black/80">
              <p className="leading-relaxed">
                A macroscopic device that records the outcome but never undergoes human registration
                will not, by itself, force classical irreversibility.
              </p>

              <p className="leading-relaxed">
                Only a Φ ≥ Φc observer can complete the transition from quantum possibility to
                classical actuality.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">
              Partial Registration Produces Partial Classicality
            </h3>
            <div className="flex flex-col gap-3 text-black/80">
              <p className="leading-relaxed">
                If only some outcomes are observed by a Φ ≥ Φc observer, only those outcomes will
                behave classically; the unobserved outcomes will preserve coherence.
              </p>

              <p className="leading-relaxed">
                This yields measurable statistical differences between the observed and unobserved
                subsets.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">No-Signaling Constraint</h3>
            <div className="flex flex-col gap-3 text-black/80">
              <p className="leading-relaxed">
                Even if outcomes are observer-dependent, no protocol can exploit this to transmit
                information faster than light. The statistical distribution available to any single
                observer remains consistent with standard quantum predictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiment Protocol */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl font-light pb-2">
          Experiment Protocol — Observer-Dependent Coherence Preservation
        </h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">1. Objective</h3>
            <div className="flex flex-col gap-3 text-black/80">
              <p className="leading-relaxed">
                To test whether <strong>conscious observation</strong> is required to convert a
                quantum measurement outcome into a <strong>classically irreversible</strong> event.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">2. Core Hypothesis</h3>
            <div className="flex flex-col gap-3 text-black/80">
              <p className="leading-relaxed">
                A recorded measurement outcome remains <strong>quantum-coherent</strong> until a Φ ≥
                Φc observer consciously registers it.
              </p>

              <p className="leading-relaxed">Thus:</p>

              <ul className="flex flex-col gap-2 pl-4">
                <li className="leading-relaxed">
                  <strong>Unobserved records</strong> will preserve coherence and enable
                  interference effects in downstream systems.
                </li>
                <li className="leading-relaxed">
                  <strong>Observed records</strong> will behave as classically definite outcomes,
                  eliminating interference.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">3. Experimental Design Overview</h3>
            <div className="flex flex-col gap-3 text-black/80">
              <h4 className="text-base font-semibold text-black/85">Two-stage quantum system</h4>

              <p className="leading-relaxed">
                <strong>System A</strong>: a quantum measurement whose outcome is stored in a{" "}
                <em>quantum memory</em> (reversible).
              </p>

              <p className="leading-relaxed">
                <strong>System B</strong>: a downstream quantum system whose interference visibility
                depends on whether System A's outcome remains coherent or has become classical.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">4. Key Requirements</h3>
            <div className="flex flex-col gap-6 text-black/80">
              <div className="flex flex-col gap-3">
                <h4 className="text-base font-semibold text-black/85">
                  A. Quantum Reversible Record (System A)
                </h4>
                <p className="leading-relaxed">
                  The outcome must be stored in a <strong>quantum memory</strong> (e.g., entangled
                  qubit pair), not a classical database.
                </p>

                <p className="leading-relaxed">
                  This ensures that the measurement is <strong>not irreversible</strong> until the
                  record becomes classical.
                </p>

                <p className="leading-relaxed">
                  <strong>
                    This is the critical difference from standard "measurement + database"
                    protocols.
                  </strong>
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-base font-semibold text-black/85">
                  B. Downstream Interference (System B)
                </h4>
                <p className="leading-relaxed">System B must be configured such that:</p>

                <ul className="flex flex-col gap-2 pl-4">
                  <li className="leading-relaxed">
                    If System A remains coherent → interference is preserved.
                  </li>
                  <li className="leading-relaxed">
                    If System A becomes classical → interference disappears.
                  </li>
                </ul>

                <p className="leading-relaxed">
                  This can be implemented via <strong>quantum-controlled interferometry</strong>,
                  where the state of System A determines whether interference is allowed.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-base font-semibold text-black/85">C. Controlled Observation</h4>
                <p className="leading-relaxed">
                  Human observers will consciously read (or not read) the record by choosing whether
                  to perform a <strong>quantum-to-classical measurement</strong> on the memory.
                </p>

                <p className="leading-relaxed">
                  This action is what, under Holos, produces classical irreversibility.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">5. Conditions</h3>
            <div className="flex flex-col gap-6 text-black/80">
              <div className="flex flex-col gap-3">
                <h4 className="text-base font-semibold text-black/85">
                  Condition 1: Unobserved (Quantum-Coherent Record)
                </h4>
                <ul className="flex flex-col gap-2 pl-4">
                  <li className="leading-relaxed">
                    System A outcome is stored in a quantum memory.
                  </li>
                  <li className="leading-relaxed">
                    No human performs a classical measurement on the memory.
                  </li>
                  <li className="leading-relaxed">
                    System B should display interference consistent with coherence.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-base font-semibold text-black/85">
                  Condition 2: Observed (Classical Record)
                </h4>
                <ul className="flex flex-col gap-2 pl-4">
                  <li className="leading-relaxed">
                    System A outcome is stored in a quantum memory.
                  </li>
                  <li className="leading-relaxed">
                    A human performs a classical measurement on the memory.
                  </li>
                  <li className="leading-relaxed">System B should display no interference.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">6. Trial Flow</h3>
            <div className="flex flex-col gap-3 text-black/80">
              <ol className="flex flex-col gap-3 pl-4">
                <li className="leading-relaxed">
                  <strong>System A is prepared</strong> in a superposition.
                </li>
                <li className="leading-relaxed">
                  <strong>System A is measured</strong>, with the outcome stored in a quantum memory
                  (entangled state).
                </li>
                <li className="leading-relaxed">
                  <strong>System B is prepared</strong> in an interferometric setup.
                </li>
                <li className="leading-relaxed">
                  <strong>System B's evolution is conditioned</strong> on the state of System A's
                  quantum memory.
                </li>
                <li className="leading-relaxed">
                  <strong>Random assignment</strong> determines whether a human will observe the
                  memory.
                </li>
                <li className="leading-relaxed">
                  <strong>System B is measured</strong>, and interference visibility is recorded.
                </li>
                <li className="leading-relaxed">
                  <strong>If conscious observation occurs</strong>, the memory becomes classical,
                  and System B interference should collapse.
                </li>
              </ol>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">
              7. What Counts as "Observation"?
            </h3>
            <div className="flex flex-col gap-3 text-black/80">
              <p className="leading-relaxed">Observation is operationalized as:</p>

              <ul className="flex flex-col gap-2 pl-4">
                <li className="leading-relaxed">
                  <strong>Quantum-to-classical projection</strong> of the memory, performed by a
                  human.
                </li>
                <li className="leading-relaxed">
                  The human <em>must consciously perceive</em> the outcome (e.g., read a screen).
                </li>
              </ul>

              <p className="leading-relaxed">
                The experiment requires <strong>strict controls</strong> to ensure that the memory
                remains coherent until the observer chooses to observe.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">8. Outcome Measures</h3>
            <div className="flex flex-col gap-6 text-black/80">
              <div className="flex flex-col gap-3">
                <h4 className="text-base font-semibold text-black/85">Primary Outcome</h4>
                <p className="leading-relaxed">Interference visibility of System B:</p>

                <ul className="flex flex-col gap-2 pl-4">
                  <li className="leading-relaxed">
                    <strong>High visibility</strong> indicates coherence preserved → supports Holos
                  </li>
                  <li className="leading-relaxed">
                    <strong>Low visibility</strong> indicates classical collapse → supports standard
                    QM
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-base font-semibold text-black/85">Secondary Outcome</h4>
                <p className="leading-relaxed">Statistical correlation between:</p>

                <ul className="flex flex-col gap-2 pl-4">
                  <li className="leading-relaxed">the moment of observation</li>
                  <li className="leading-relaxed">and the moment interference disappears</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">9. Predicted Results</h3>
            <div className="flex flex-col gap-6 text-black/80">
              <div className="flex flex-col gap-3">
                <h4 className="text-base font-semibold text-black/85">
                  Standard Quantum Prediction
                </h4>
                <p className="leading-relaxed">
                  Interference visibility depends only on whether the quantum memory is decohered.
                </p>

                <p className="leading-relaxed">
                  Conscious observation should not matter if the memory is already classical.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-base font-semibold text-black/85">Holos Prediction</h4>
                <p className="leading-relaxed">
                  Interference visibility depends on whether a Φ ≥ Φc observer registers the
                  outcome.
                </p>

                <p className="leading-relaxed">
                  Conscious observation is the critical trigger for classicality.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">10. Statistical Analysis Plan</h3>
            <div className="flex flex-col gap-6 text-black/80">
              <div className="flex flex-col gap-3">
                <h4 className="text-base font-semibold text-black/85">
                  10.1 Interference Visibility Comparison
                </h4>
                <p className="leading-relaxed">
                  Compare interference visibility across Condition 1 and Condition 2.
                </p>

                <p className="leading-relaxed">Use standard hypothesis testing:</p>

                <ul className="flex flex-col gap-2 pl-4">
                  <li className="leading-relaxed">
                    Null hypothesis: visibility is identical across conditions.
                  </li>
                  <li className="leading-relaxed">
                    Alternative hypothesis: visibility differs significantly.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-base font-semibold text-black/85">
                  10.2 Power and Sample Size
                </h4>
                <ul className="flex flex-col gap-2 pl-4">
                  <li className="leading-relaxed">Pre-register sample size to avoid p-hacking.</li>
                  <li className="leading-relaxed">
                    Perform power analysis based on expected visibility difference.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">11. Falsifiability Criteria</h3>
            <div className="flex flex-col gap-3 text-black/80">
              <p className="leading-relaxed">
                Holos is falsified if no significant difference in interference visibility between
                conditions, <strong>with adequate power</strong>, and control tests confirm:
              </p>

              <ul className="flex flex-col gap-2 pl-4">
                <li className="leading-relaxed">System A remains coherent until observation</li>
                <li className="leading-relaxed">
                  System B interference is sensitive to System A coherence
                </li>
                <li className="leading-relaxed">No unintended decoherence occurred</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">12. Controls</h3>
            <div className="flex flex-col gap-3 text-black/80">
              <ul className="flex flex-col gap-2 pl-4">
                <li className="leading-relaxed">
                  <strong>Decoherence control</strong>: verify memory coherence using quantum
                  tomography.
                </li>
                <li className="leading-relaxed">
                  <strong>Isolation control</strong>: ensure no leakage of memory state to
                  environment.
                </li>
                <li className="leading-relaxed">
                  <strong>Observer control</strong>: ensure that observation occurs only in the
                  designated condition.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">13. Limitations</h3>
            <div className="flex flex-col gap-3 text-black/80">
              <ul className="flex flex-col gap-2 pl-4">
                <li className="leading-relaxed">
                  The experiment assumes that conscious observation is necessary for Φ ≥ Φc.
                </li>
                <li className="leading-relaxed">
                  The test may be interpreted as evidence of <em>delayed choice</em> rather than
                  consciousness unless the observation mechanism is strictly controlled.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-black/90">14. Conclusion</h3>
            <div className="flex flex-col gap-3 text-black/80">
              <p className="leading-relaxed">
                This protocol directly tests the core Holos prediction:
              </p>

              <blockquote className="pl-4 border-l-2 border-black/20 text-black/70 italic my-2">
                <strong>
                  Conscious observation is required to convert a reversible quantum record into a
                  classical, irreversible event.
                </strong>
              </blockquote>

              <p className="leading-relaxed">
                If interference disappears only after conscious observation, the result would be a
                novel and scientifically significant finding.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
