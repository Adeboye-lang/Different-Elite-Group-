import React from "react";
import { cn } from "@/src/lib/utils";

interface PitchLinesProps {
  className?: string;
  vertical?: boolean;
  fit?: "slice" | "meet";
}

// Full-size football pitch markings (105 x 68 ratio), drawn as hairlines for background texture
export function PitchLines({ className, vertical = false, fit = "slice" }: PitchLinesProps) {
  return (
    <svg
      viewBox={vertical ? "0 0 680 1050" : "0 0 1050 680"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      preserveAspectRatio={`xMidYMid ${fit}`}
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
      <g transform={vertical ? "translate(680 0) rotate(90)" : undefined}>
      {/* Touchlines & halfway line */}
      <rect x="10" y="10" width="1030" height="660" />
      <line x1="525" y1="10" x2="525" y2="670" />

      {/* Centre circle & spot */}
      <circle cx="525" cy="340" r="91.5" />
      <circle cx="525" cy="340" r="4" fill="currentColor" />

      {/* Left penalty area, six-yard box, spot & arc */}
      <rect x="10" y="138.5" width="165" height="403" />
      <rect x="10" y="248.5" width="55" height="183" />
      <circle cx="120" cy="340" r="4" fill="currentColor" />
      <path d="M175 266.8 A91.5 91.5 0 0 1 175 413.2" />

      {/* Right penalty area, six-yard box, spot & arc */}
      <rect x="875" y="138.5" width="165" height="403" />
      <rect x="985" y="248.5" width="55" height="183" />
      <circle cx="930" cy="340" r="4" fill="currentColor" />
      <path d="M875 266.8 A91.5 91.5 0 0 0 875 413.2" />

      {/* Corner arcs */}
      <path d="M10 20 A10 10 0 0 0 20 10" />
      <path d="M1030 10 A10 10 0 0 0 1040 20" />
      <path d="M10 660 A10 10 0 0 1 20 670" />
      <path d="M1040 660 A10 10 0 0 0 1030 670" />
      </g>
    </svg>
  );
}
