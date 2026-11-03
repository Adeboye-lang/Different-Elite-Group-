import React from "react";

const stages = [
  "Grassroots",
  "Academy",
  "Under-18s",
  "Under-21s",
  "First Team",
  "Professional Contract",
  "International Football",
  "Life After Football",
];

// Matchday-style scrolling strip showing every stage DEG supports
export function PathwayTicker() {
  const items = [...stages, ...stages];

  return (
    <div className="relative bg-[#C8A45D] text-[#080808] overflow-hidden border-y border-[#8F7236]">
      <div className="flex w-max animate-ticker py-3.5" aria-hidden="true">
        {items.map((stage, idx) => (
          <span
            key={idx}
            className="flex items-center gap-6 px-6 text-sm sm:text-base font-display font-extrabold uppercase tracking-[0.18em] whitespace-nowrap"
          >
            {stage}
            <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="currentColor">
              <circle cx="6" cy="6" r="6" />
            </svg>
          </span>
        ))}
      </div>
      <p className="sr-only">
        We support players at every stage: {stages.join(", ")}.
      </p>
    </div>
  );
}
