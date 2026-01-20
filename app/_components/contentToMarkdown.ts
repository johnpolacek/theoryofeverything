export function contentToMarkdown(): string {
  const sections = [
    {
      id: "meaning-of-life",
      title: "The Meaning of Life",
      content: [
        "Life exists to create and observe, mutually intertwined and reciprocal actions required for the manifestation of reality.[^1]",
      ],
    },
    {
      id: "consciousness",
      title: "Consciousness",
      content: [
        "An emergent property of life, consciousness is the ability to experience and shape the world with self-awareness.",
        "Humans exhibit consciousness by being self-aware and capable of profound observation and interaction with our environment.[^2]",
      ],
    },
    {
      id: "our-universe",
      title: "Our Universe",
      content: [
        "Our universe originated from a singular point in the Big Bang, expanding towards infinity. We perceive three spatial dimensions while moving unidirectionally through the fourth dimension, time.",
        "Spacetime is a continuum where the three dimensions of space and time is curved and warped by the presence of mass and energy.[^3]",
      ],
    },
    {
      id: "spacetime",
      title: "Spacetime",
      content: [
        "Consider beings with an unlimited lifespan and near-instantaneous communication, perceiving time as an additional spatial dimension. These beings would not be limited by the unidirectional flow of time as we are.",
        "Instead, they would perceive the curvature of spacetime comprehensively, seeing past, present, and future as a singular, cohesive structure observable in its entirety. By imagining such an entity, we can better understand what it might be like to exist in a higher dimension.[^4]",
      ],
    },
    {
      id: "higher-dimensions",
      title: "Higher Dimensions",
      content: [
        "Though we can't directly observe higher dimensions, mathematical models suggest their existence, offering solutions to longstanding problems in physics.",
        "In these theories, the additional dimensions are compactified or hidden from our direct observation, yet their influence permeates our lower-dimensional reality. These higher dimensions shape the physical laws and constants that govern our universe, influencing everything from the behavior of subatomic particles to gravitational interactions and the structure of the cosmos.",
        "Just as we control and transform the three dimensional environment around us, consciousness in higher dimensions can exert influence over lower dimensions, forming an intricate and interconnected cosmic structure.[^5]",
      ],
    },
    {
      id: "infinity",
      title: "Infinity",
      content: [
        "Infinity represents the concept of dimensions extending endlessly without any finite boundaries. In the context of a given dimension, it is possible to use a higher-dimensional perspective to transform infinite structures into finite, observable entities.",
        "By employing higher-dimensional frameworks, an infinite sequence or expanse can be encapsulated, allowing for the perception and analysis of the entire structure in its entirety. This concept suggests that what appears infinite and unbounded in one dimension can be rendered finite and progressively comprehensible when viewed from a higher-dimensional vantage point.",
        "For instance, as four-dimensional beings, we can observe the entirety of three-dimensional space through the temporal dimension, effectively using time as a higher-dimensional framework to encapsulate spatial configurations. This allows us to perceive the progression and totality of spatial events over time, transforming our understanding of infinite sequences of spatial configurations into a coherent and finite whole.[^6]",
      ],
    },
    {
      id: "black-holes",
      title: "Black Holes",
      content: [
        "Black holes represent regions of spacetime where gravity is so intense that not even light escape, making their interior opaque to us. Their singularities represent infinities wrapped into a finite structure in our universe.",
        "For higher-dimensional beings, black holes would be as accessible as any other region of spacetime, including the ability to navigate through the singularity and perceive the vast array of information contained within. This perspective aligns with the holographic principle, which posits that all the information contained within a black hole can be described on a lower-dimensional boundary, suggesting that higher-dimensional observation could unlock the mysteries hidden within these enigmatic objects.[^7]",
      ],
    },
    {
      id: "aliens",
      title: "Aliens",
      content: [
        "The Fermi Paradox questions the lack of detected extraterrestrial life, despite the vastness of the universe.",
        "One explanation is that advanced civilizations transcend into higher dimensions, becoming undetectable.",
        "Another explanation could be that higher-dimensional beings have designed a universe with rules that make intelligent life either alone or so rare as to be effectively isolated, as part of a grand experiment or even for their own entertainment. Applying the principle of the observer effect, this act of observing lower-dimensional life forms may even shape their existence.[^8]",
      ],
    },
    {
      id: "simulation",
      title: "Simulation",
      content: [
        "Whether our universe is a simulation or naturally occurring is irrelevant. The core of existence lies in the cyclical process of creation and observation by increasingly higher levels of consciousness. The distinction between processes that arise spontaneously and those that are designed is an illusion.[^9]",
      ],
    },
    {
      id: "god",
      title: "God",
      content: [
        "Regardless of any label we choose to assign, an ultimate consciousness empowered with omniscience, omnipotence, and omnipresence is a fundamental aspect of the nature of reality.",
        "Religious beliefs like panentheism, Brahman, and the Omega Point all point to a transcendent, all-encompassing consciousness that permeates and extends beyond the universe, suggesting a unified source of all existence and knowledge.",
        "Alternatively, atheism rejects the notion of such a consciousness, attributing the complexity and order of the universe to natural processes and random chance without invoking a higher power.",
        "Ultimately, both of these perspectives can be equally valid sides of the same coin, only differing in semantics and the framework used to describe the same universal truth.[^10]",
      ],
    },
    {
      id: "why",
      title: "Why Are We Here?",
      content: [
        "At the highest dimension, all possible realities condense into a point, revealing the cyclic nature of existence, where infinite complexity reduces to a singularity. The most advanced consciousness ultimately creates itself by observing all lower dimensions, over and over again.",
        "Life exists to create and observe life, perpetuating infinitely.[^11]",
      ],
    },
  ]

  const footnotes = [
    {
      number: 1,
      title: "The Meaning of Life",
      items: [
        "[Observer Effect](https://en.wikipedia.org/wiki/Observer_effect_(physics)) - The disturbance of an observed system by the act of observation.",
        "[Copenhagen Interpretation](https://en.wikipedia.org/wiki/Copenhagen_interpretation) - The act of observation collapses a quantum system's wavefunction into a definite state.",
        "[Quantum Darwinism](https://en.wikipedia.org/wiki/Quantum_Darwinism) - An environment selectively proliferates certain quantum states that become classical outcomes, observed by multiple observers.",
        "[Relational Quantum Mechanics](https://en.wikipedia.org/wiki/Relational_quantum_mechanics) - The properties of quantum systems are not absolute but relative to the observer.",
        "[Participatory Anthropic Principle](https://en.wikipedia.org/wiki/Anthropic_principle) - The universe, as a condition of its existence, must be observed, thus implying one or more observers.",
      ],
    },
    {
      number: 2,
      title: "Consciousness",
      items: [
        "[Integrated Information Theory](https://en.wikipedia.org/wiki/Integrated_information_theory) - Consciousness corresponds to the capacity of a system to integrate information.",
        "[Panpsychism](https://en.wikipedia.org/wiki/Panpsychism) - Consciousness is a fundamental property of all matter.",
        "[Global Workspace Theory](https://en.wikipedia.org/wiki/Global_workspace_theory) - Consciousness involves broadcasting information globally in the brain to create a unified experience.",
      ],
    },
    {
      number: 3,
      title: "Our Universe",
      items: [
        "[The Big Bang](https://en.wikipedia.org/wiki/Big_Bang) - The present universe emerged from an ultra-dense and high-temperature initial state.",
        "[Accelerating Expansion of the Universe](https://en.wikipedia.org/wiki/Accelerating_expansion_of_the_universe) - The expansion of the universe is accelerating with time.",
        "[Spacetime](https://en.wikipedia.org/wiki/Spacetime) - A mathematical model that fuses the three dimensions of space and the one dimension of time.",
        "[General Relativity](https://en.wikipedia.org/wiki/General_relativity) - Describes gravity as the warping of spacetime by mass and energy.",
      ],
    },
    {
      number: 4,
      title: "Spacetime",
      items: [
        "[Eternalism](https://en.wikipedia.org/wiki/Eternalism_(philosophy_of_time)) - Time as an unchanging four-dimensional block where all moments exist simultaneously.",
        "[Relativity of Simultaneity](https://en.wikipedia.org/wiki/Relativity_of_simultaneity) - Whether two spatially separated events occur at the same time depends on the observer.",
        "[The Absorber Theory](https://en.wikipedia.org/wiki/Wheeler%E2%80%93Feynman_absorber_theory) - Radiation is a result of both forward-in-time and backward-in-time electromagnetic waves.",
      ],
    },
    {
      number: 5,
      title: "Higher Dimensions",
      items: [
        "[Flatland](https://en.wikipedia.org/wiki/Flatland) - Satirical novella about a fictional two-dimensional world that explores the concept of inter-dimensional observation.",
        "[String Theory](https://en.wikipedia.org/wiki/String_theory) - Fundamental particles of the universe are tiny strings that vibrate in extra dimensions.",
        "[Quantum Gravity](https://en.wikipedia.org/wiki/Quantum_gravity) - Gravity and the other fundamental forces are unified within a multi-dimensional framework.",
        "[Brane Cosmology](https://en.wikipedia.org/wiki/Brane_cosmology) - Our universe is a slice of a larger, multi-dimensional reality",
      ],
    },
    {
      number: 6,
      title: "Infinity",
      items: [
        "[Riemann Sphere](https://en.wikipedia.org/wiki/Riemann_sphere) - Exemplifies how higher-dimensional perspectives transform infinite structures into finite, observable entities.",
        "[Fractals](https://en.wikipedia.org/wiki/AdS/CFT_correspondence) - Mathematical sets that can represent infinite complexity within finite boundaries.",
        "[AdS/CFT Correspondence](https://en.wikipedia.org/wiki/AdS/CFT_correspondence) - Higher-dimensional information is encoded into a finite, observable form within lower dimensions.",
        "[Infinite Sets](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument) - Provide a foundation for understanding how infinities can be compared, ordered, and wrapped.",
        "[Cellular Automata](https://en.wikipedia.org/wiki/Cellular_automaton) - Complex, infinite patterns and behaviors can emerge from simple initial conditions and rules.",
      ],
    },
    {
      number: 7,
      title: "Black Holes",
      items: [
        "[Black Hole Thermodynamics](https://en.wikipedia.org/wiki/Black_hole_thermodynamics) - The study of the physical properties of black holes.",
        "[Cosmic Censorship Hypothesis](https://en.wikipedia.org/wiki/Cosmic_censorship_hypothesis) - Singularities are always hidden within event horizons.",
        "[Loop Quantum Gravity](https://en.wikipedia.org/wiki/Loop_quantum_gravity) - Spacetime is quantized at smaller scales, wrapping infinite spacetime structures into finite loops.",
        "[Holographic Principle](https://en.wikipedia.org/wiki/Holographic_principle) - All information contained in a given volume of space can be represented as encoded on a lower-dimensional boundary.",
      ],
    },
    {
      number: 8,
      title: "Aliens",
      items: [
        "[Fermi Paradox](https://en.wikipedia.org/wiki/Fermi_paradox) - The discrepancy between the lack of evidence for extraterrestrial life and the high likelihood of its existence.",
        "[Rare Earth Hypothesis](https://en.wikipedia.org/wiki/Rare_Earth_hypothesis) - Argues biological complexity n the universe requires the coincidence of a large number of very low probability events.",
        "[The Planetarium Hypothesis](https://en.wikipedia.org/wiki/Planetarium_hypothesis) - Sufficiently advanced civilizations invariably leave our universe.",
        "[The Transcension Hypothesis](https://www.accelerating.org/articles/transcensionhypothesis) - Sufficiently advanced civilizations invariably leave our universe.",
        "[Technological Singularity](https://en.wikipedia.org/wiki/Technological_singularity) - Sufficiently advanced civilizations invariably leave our universe.",
        "[Ephemeralization](https://en.wikipedia.org/wiki/Ephemeralization) - Technological advancement to do more and more with less and less until one can do everything with nothing.",
      ],
    },
    {
      number: 9,
      title: "Simulation",
      items: [
        "[Simulation Hypothesis](https://en.wikipedia.org/wiki/Simulation_hypothesis) - Proposes that what humans experience as the world is actually a simulated reality.",
        "[Naturalism](https://en.wikipedia.org/wiki/Naturalism_(philosophy)) - Everything arises from natural properties and causes.",
        "[Solipsism](https://en.wikipedia.org/wiki/Solipsism) - Only one's own mind is sure to exist",
      ],
    },
    {
      number: 10,
      title: "God",
      items: [
        "[Panentheism](https://en.wikipedia.org/wiki/Panentheism) - The belief that the divine intersects every part of the universe and also extends beyond space and time.",
        "[Brahman](https://en.wikipedia.org/wiki/Brahman) - The pervasive, infinite, eternal truth, consciousness and bliss which does not change, yet is the cause of all changes.",
        "[Omega Point](https://en.wikipedia.org/wiki/Omega_Point) - A future event in which the entirety of the universe spirals toward a final point of unification.",
      ],
    },
    {
      number: 11,
      title: "Why Are We Here?",
      items: [
        "[Conformal Cyclic Cosmology](https://en.wikipedia.org/wiki/Conformal_cyclic_cosmology) - The universe undergoes infinite cycles of big bangs and expansions creating an eternal sequence of universes.",
        "[Unitarity](https://en.wikipedia.org/wiki/Unitarity_(physics)) - The universe undergoes infinite cycles of big bangs and expansions creating an eternal sequence of universes.",
        "[Many-Worlds Interpretation](https://en.wikipedia.org/wiki/Many-worlds_interpretation) - Every possible outcome of a quantum measurement occurs in a separate, branching universe.",
        "[Holos](https://github.com/johnpolacek/theoryofeverything) - A theory of everything.",
      ],
    },
  ]

  let markdown = ""

  // Add sections
  sections.forEach((section) => {
    markdown += `## ${section.title}\n\n`
    section.content.forEach((paragraph) => {
      markdown += `${paragraph}\n\n`
    })
  })

  // Add Holos section
  markdown += `## Holos\n\n`
  markdown += `The symbol ⊛ is a mathematical notation for a binary operation, representing a special form of multiplication, which ensures the combination of elements remains well-defined and consistent, scaling up to an infinite sequence.\n\n`
  markdown += `**Holos** is derived from the Greek word ὅλος, meaning whole, entire or complete. It is symbolized here by ⊛, representing the interconnected, unified, recursive structure of reality as formed through the reciprocal actions of creation and observation.\n\n`

  // Add footnotes
  markdown += `---\n\n`
  footnotes.forEach((footnote) => {
    markdown += `### ${footnote.title}\n\n`
    markdown += `[^${footnote.number}]:\n`
    footnote.items.forEach((item) => {
      markdown += `  ${item}\n`
    })
    markdown += `\n`
  })

  return markdown.trim()
}
