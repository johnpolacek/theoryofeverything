"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

interface QuantumEraserAnimationProps {
  isPDF?: boolean;
}

export default function QuantumEraserAnimation({ isPDF = false }: QuantumEraserAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches && timelineRef.current) {
        timelineRef.current.pause();
      } else if (!e.matches && timelineRef.current) {
        timelineRef.current.play();
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // Skip animation setup in PDF mode or if user prefers reduced motion
    if (isPDF || prefersReducedMotion) return;
    if (!svgRef.current || !containerRef.current) return;

    const svg = svgRef.current;

    // Get elements
    const source = svg.querySelector("#source") as SVGCircleElement;
    const sourceRing = svg.querySelector("#source-ring") as SVGCircleElement;
    const sourceLabel = svg.querySelector("#source-label") as SVGTextElement;
    const doubleSlit = svg.querySelector("#double-slit") as SVGGElement;
    const pathUpper = svg.querySelector("#path-upper") as SVGPathElement;
    const pathLower = svg.querySelector("#path-lower") as SVGPathElement;
    const pathSolid = svg.querySelector("#path-solid") as SVGPathElement;
    const screen = svg.querySelector("#screen") as SVGLineElement;
    const interferencePattern = svg.querySelector("#interference-pattern") as SVGGElement;
    const phiSymbol = svg.querySelector("#phi-symbol") as SVGTextElement;
    const phiCircle = svg.querySelector("#phi-circle") as SVGCircleElement;
    const retroWave = svg.querySelector("#retro-wave") as SVGCircleElement;
    const caption = svg.querySelector("#caption") as SVGTextElement;
    const stepALabel = svg.querySelector("#step-a-label") as SVGTextElement;
    const stepBLabel = svg.querySelector("#step-b-label") as SVGTextElement;

    // Path lengths for animation
    const upperPathLength = pathUpper.getTotalLength ? pathUpper.getTotalLength() : 300;
    const solidPathLength = pathSolid.getTotalLength ? pathSolid.getTotalLength() : 300;

    // Initial states
    gsap.set(source, { opacity: 0, scale: 0, transformOrigin: "center center" });
    gsap.set(sourceRing, { opacity: 0 });
    gsap.set(sourceLabel, { opacity: 0 });
    gsap.set(doubleSlit, { opacity: 0 });
    gsap.set([pathUpper, pathLower], { 
      opacity: 0, 
      strokeDasharray: upperPathLength, 
      strokeDashoffset: upperPathLength 
    });
    gsap.set(pathSolid, { 
      opacity: 0, 
      strokeDasharray: solidPathLength, 
      strokeDashoffset: solidPathLength 
    });
    gsap.set(screen, { opacity: 0 });
    gsap.set(interferencePattern, { opacity: 0 });
    gsap.set([phiSymbol, phiCircle], { opacity: 0 });
    gsap.set(retroWave, { opacity: 0, scale: 0, transformOrigin: "center center" });
    gsap.set(caption, { opacity: 0 });
    gsap.set([stepALabel, stepBLabel], { opacity: 0 });

    // Main timeline
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 3,
    });
    timelineRef.current = tl;

    // Phase 1: Source appears with pulse
    tl.add("start")
      .to(source, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
      })
      .to(sourceRing, {
        opacity: 0.5,
        duration: 0.3,
      }, "-=0.2")
      .to(sourceLabel, {
        opacity: 0.6,
        duration: 0.3,
      }, "-=0.1");

    // Pulse the source
    tl.to(sourceRing, {
      attr: { r: 18 },
      opacity: 0.8,
      duration: 0.3,
      ease: "power2.out",
    }).to(sourceRing, {
      attr: { r: 14 },
      opacity: 0.4,
      duration: 0.2,
    });

    // Phase 2: Double slit and screen appear
    tl.add("apparatus", "+=0.2")
      .to(doubleSlit, {
        opacity: 1,
        duration: 0.4,
      }, "apparatus")
      .to(screen, {
        opacity: 0.6,
        duration: 0.4,
      }, "apparatus+=0.2");

    // Phase 3: Potential paths emerge (both dashed, uncertain)
    tl.add("paths", "+=0.3")
      .to([pathUpper, pathLower], {
        opacity: 0.5,
        duration: 0.2,
      }, "paths")
      .to(pathUpper, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "none",
      }, "paths+=0.2")
      .to(pathLower, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "none",
      }, "paths+=0.2");

    // Phase 4: Step A - No observation, interference pattern appears
    tl.add("stepA", "+=0.3")
      .to(stepALabel, {
        opacity: 0.6,
        duration: 0.3,
      }, "stepA")
      .to(interferencePattern, {
        opacity: 0.4,
        duration: 0.5,
      }, "stepA+=0.2");

    // Hold interference pattern
    tl.to({}, { duration: 1.5 });

    // Phase 5: Φ symbol appears - The Observer
    tl.add("observer", "+=0.2")
      .to(stepALabel, {
        opacity: 0,
        duration: 0.2,
      }, "observer")
      .to(phiCircle, {
        opacity: 0.6,
        duration: 0.3,
      }, "observer")
      .to(phiSymbol, {
        opacity: 1,
        duration: 0.3,
      }, "observer+=0.1")
      .to(stepBLabel, {
        opacity: 0.6,
        duration: 0.3,
      }, "observer+=0.3");

    // Phase 6: Observation collapses to one path - retroactive resolution
    tl.add("collapse", "+=0.5")
      .to(interferencePattern, {
        opacity: 0,
        duration: 0.3,
      }, "collapse")
      .to([pathUpper, pathLower], {
        opacity: 0.15,
        duration: 0.3,
      }, "collapse");

    // Flash Φ to indicate observation
    tl.to(phiCircle, {
      attr: { r: 22 },
      opacity: 1,
      duration: 0.15,
      ease: "power2.out",
    }, "collapse+=0.3")
    .to(phiCircle, {
      attr: { r: 18 },
      opacity: 0.6,
      duration: 0.15,
    });

    // Phase 7: Retroactive wave pulses backward from Φ to source
    tl.add("retro", "+=0.2")
      .set(retroWave, { 
        cx: 480, 
        cy: 130,
        attr: { r: 5 }
      })
      .to(retroWave, {
        opacity: 0.6,
        scale: 1,
        duration: 0.2,
      }, "retro")
      .to(retroWave, {
        cx: 60,
        cy: 157,
        attr: { r: 30 },
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "retro+=0.2");

    // Phase 8: Solid path snaps into existence (the manifested history)
    tl.add("manifest", "-=0.4")
      .to(pathSolid, {
        opacity: 1,
        duration: 0.1,
      }, "manifest")
      .to(pathSolid, {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: "power2.out",
      }, "manifest+=0.1");

    // Second retroactive pulse for emphasis
    tl.set(retroWave, { 
      cx: 480, 
      cy: 130,
      attr: { r: 5 },
      opacity: 0,
      scale: 0
    })
    .to(retroWave, {
      opacity: 0.4,
      scale: 1,
      duration: 0.15,
    })
    .to(retroWave, {
      cx: 60,
      cy: 157,
      attr: { r: 25 },
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    // Phase 9: Show caption
    tl.add("caption", "-=0.3")
      .to(stepBLabel, {
        opacity: 0,
        duration: 0.2,
      }, "caption")
      .to(caption, {
        opacity: 0.8,
        duration: 0.5,
      }, "caption+=0.2");

    // Pulse the solid path to emphasize it's now "real"
    tl.to(pathSolid, {
      strokeWidth: 3,
      duration: 0.3,
    }).to(pathSolid, {
      strokeWidth: 2.5,
      duration: 0.3,
    });

    // Hold complete state
    tl.to({}, { duration: 3 });

    // Reset
    tl.add("reset")
      .to(
        [source, sourceRing, sourceLabel, doubleSlit, pathUpper, pathLower, pathSolid, 
         screen, phiSymbol, phiCircle, caption],
        {
          opacity: 0,
          duration: 0.5,
        },
        "reset"
      )
      .set(source, { scale: 0 })
      .set([pathUpper, pathLower], { strokeDashoffset: upperPathLength })
      .set(pathSolid, { strokeDashoffset: solidPathLength, strokeWidth: 2.5 })
      .set(sourceRing, { attr: { r: 14 } })
      .set(phiCircle, { attr: { r: 18 } });

    return () => {
      tl.kill();
    };
  }, [isPDF, prefersReducedMotion]);

  // Static PDF version
  if (isPDF) {
    return (
      <div
        style={{
          width: "100%",
          marginTop: "2em",
          marginBottom: "1em",
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "8px",
          padding: "1.5em",
          background: "#fafafa",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "1em" }}>
          <em style={{ fontSize: "1.1em" }}>Retroactive Resolution: The Quantum Eraser</em>
        </div>
        <div style={{ textAlign: "center", color: "rgba(0,0,0,0.7)", fontSize: "0.9em" }}>
          <p style={{ margin: "0.5em 0" }}>
            <strong>The Logic of Retroactive Manifestation:</strong>
          </p>
          <p style={{ margin: "0.5em 0" }}>
            Source → Double Slit → [Path 1 | Path 2] → Screen → Φ (Observer)
          </p>
          <p style={{ margin: "0.5em 0" }}>
            Without observation: Both paths exist as possibilities (interference pattern)
          </p>
          <p style={{ margin: "0.5em 0" }}>
            With observation (Φ): One path becomes real, retroactively from present to past
          </p>
          <p style={{ margin: "0.5em 0", fontStyle: "italic", marginTop: "1em" }}>
            Observation in the present manifests the path of the past
          </p>
        </div>
      </div>
    );
  }

  return (
    <figure
      ref={containerRef}
      className="relative w-full mt-8 aspect-video rounded-lg border border-black/10 overflow-hidden bg-white"
      role="img"
      aria-label="Animation showing the quantum eraser experiment where observation in the present retroactively determines which path a photon took in the past"
    >
      {/* Screen reader description */}
      <figcaption className="sr-only">
        Retroactive Resolution: The Quantum Eraser. This animation illustrates how a future
        observation acts as a boundary condition that retroactively manifests a specific past state.
        A photon source emits light through a double slit, creating two potential paths. Without
        observation, an interference pattern appears on the screen. When the observer (Φ) measures
        the path information, one specific path becomes solid and real, tracing back to the source.
        This demonstrates that the universe is a globally self-consistent block where observation
        in the present manifests the path of the past.
      </figcaption>
      <svg
        ref={svgRef}
        viewBox="0 0 560 315"
        className="w-full h-full"
        style={{ display: "block" }}
        aria-hidden="true"
      >
        {/* Title */}
        <text
          x="280"
          y="28"
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.7)"
          fontSize="13"
          fontFamily="serif"
          fontStyle="italic"
        >
          Retroactive Resolution: The Quantum Eraser
        </text>

        {/* Source */}
        <circle
          id="source-ring"
          cx="60"
          cy="157"
          r="14"
          fill="none"
          stroke="rgba(100, 100, 100, 0.5)"
          strokeWidth="1"
          strokeDasharray="3 2"
          opacity="0"
        />
        <circle
          id="source"
          cx="60"
          cy="157"
          r="8"
          fill="none"
          stroke="rgba(40, 40, 40, 0.9)"
          strokeWidth="2"
          opacity="0"
        />
        <text
          id="source-label"
          x="60"
          y="185"
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.6)"
          fontSize="10"
          fontFamily="monospace"
          opacity="0"
        >
          Source
        </text>

        {/* Double Slit */}
        <g id="double-slit" opacity="0">
          {/* Top barrier */}
          <line x1="160" y1="80" x2="160" y2="130" stroke="rgba(60, 60, 60, 0.8)" strokeWidth="2" />
          {/* Upper slit gap */}
          {/* Middle barrier */}
          <line x1="160" y1="145" x2="160" y2="170" stroke="rgba(60, 60, 60, 0.8)" strokeWidth="2" />
          {/* Lower slit gap */}
          {/* Bottom barrier */}
          <line x1="160" y1="185" x2="160" y2="235" stroke="rgba(60, 60, 60, 0.8)" strokeWidth="2" />
          <text
            x="160"
            y="255"
            textAnchor="middle"
            fill="rgba(0, 0, 0, 0.5)"
            fontSize="9"
            fontFamily="monospace"
          >
            Double Slit
          </text>
        </g>

        {/* Potential Paths (dashed - uncertain) */}
        <path
          id="path-upper"
          d="M68,157 L160,137 L420,100"
          fill="none"
          stroke="rgba(120, 120, 120, 0.6)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0"
        />
        <path
          id="path-lower"
          d="M68,157 L160,177 L420,180"
          fill="none"
          stroke="rgba(120, 120, 120, 0.6)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0"
        />

        {/* Solid manifested path (appears after observation) */}
        <path
          id="path-solid"
          d="M68,157 L160,137 L420,100 L480,130"
          fill="none"
          stroke="rgba(20, 20, 20, 1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Screen */}
        <line
          id="screen"
          x1="420"
          y1="70"
          x2="420"
          y2="220"
          stroke="rgba(80, 80, 80, 0.7)"
          strokeWidth="2"
          opacity="0"
        />

        {/* Interference Pattern (blurry bands) */}
        <g id="interference-pattern" opacity="0">
          <line x1="422" y1="85" x2="422" y2="95" stroke="rgba(100, 100, 100, 0.5)" strokeWidth="3" strokeDasharray="2 1" />
          <line x1="422" y1="105" x2="422" y2="120" stroke="rgba(100, 100, 100, 0.4)" strokeWidth="4" strokeDasharray="2 1" />
          <line x1="422" y1="130" x2="422" y2="150" stroke="rgba(100, 100, 100, 0.6)" strokeWidth="5" strokeDasharray="2 1" />
          <line x1="422" y1="160" x2="422" y2="175" stroke="rgba(100, 100, 100, 0.4)" strokeWidth="4" strokeDasharray="2 1" />
          <line x1="422" y1="185" x2="422" y2="200" stroke="rgba(100, 100, 100, 0.5)" strokeWidth="3" strokeDasharray="2 1" />
          <text
            x="435"
            y="145"
            fill="rgba(0, 0, 0, 0.4)"
            fontSize="8"
            fontFamily="monospace"
          >
            Pattern
          </text>
        </g>

        {/* Observer Φ */}
        <circle
          id="phi-circle"
          cx="480"
          cy="130"
          r="18"
          fill="none"
          stroke="rgba(60, 60, 60, 0.6)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0"
        />
        <text
          id="phi-symbol"
          x="480"
          y="136"
          textAnchor="middle"
          fill="rgba(30, 30, 30, 1)"
          fontSize="20"
          fontFamily="serif"
          fontStyle="italic"
          opacity="0"
        >
          Φ
        </text>

        {/* Retroactive wave (pulse moving backward) */}
        <circle
          id="retro-wave"
          cx="480"
          cy="130"
          r="5"
          fill="none"
          stroke="rgba(80, 80, 80, 0.8)"
          strokeWidth="2"
          opacity="0"
        />

        {/* Step labels */}
        <text
          id="step-a-label"
          x="280"
          y="275"
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.5)"
          fontSize="10"
          fontFamily="monospace"
          opacity="0"
        >
          No observation → Both paths exist (interference)
        </text>

        <text
          id="step-b-label"
          x="280"
          y="275"
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.5)"
          fontSize="10"
          fontFamily="monospace"
          opacity="0"
        >
          Φ observes → One path becomes real (collapse)
        </text>

        {/* Final caption */}
        <text
          id="caption"
          x="280"
          y="295"
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.7)"
          fontSize="11"
          fontFamily="serif"
          fontStyle="italic"
          opacity="0"
        >
          Observation in the present manifests the path of the past
        </text>

        {/* Time arrow */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(0, 0, 0, 0.3)" />
          </marker>
        </defs>
        <line
          x1="60"
          y1="50"
          x2="500"
          y2="50"
          stroke="rgba(0, 0, 0, 0.2)"
          strokeWidth="1"
          markerEnd="url(#arrowhead)"
        />
        <text
          x="280"
          y="45"
          textAnchor="middle"
          fill="rgba(0, 0, 0, 0.3)"
          fontSize="9"
          fontFamily="monospace"
        >
          Time →
        </text>
        <text
          x="80"
          y="62"
          fill="rgba(0, 0, 0, 0.3)"
          fontSize="8"
          fontFamily="monospace"
        >
          Past
        </text>
        <text
          x="470"
          y="62"
          fill="rgba(0, 0, 0, 0.3)"
          fontSize="8"
          fontFamily="monospace"
        >
          Present
        </text>
      </svg>
    </figure>
  );
}
