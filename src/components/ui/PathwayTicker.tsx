import React from "react";

const stages = [
  "Grassroots",
  "Academy Pathway",
  "Under-18s",
  "Under-21s Development",
  "First Team Debut",
  "Professional Contract",
  "International Recognition",
  "Career Longevity & Heritage",
];

export function PathwayTicker() {
  const items = [...stages, ...stages];

  return (
    <div className="relative overflow-hidden bg-[#121417] border-y border-white/[0.08] py-4">
      {/* Edge fade masks */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#121417] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#121417] to-transparent z-10 pointer-events-none" />

      <div className="relative flex w-max animate-ticker" aria-hidden="true">
        {items.map((stage, idx) => (
          <span
            key={idx}
            className="flex items-center gap-6 px-8 text-xs sm:text-sm font-display font-bold uppercase tracking-[0.24em] whitespace-nowrap text-white/90"
          >
            <span>{stage}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] shrink-0" />
          </span>
        ))}
      </div>

      <p className="sr-only">
        We support players at every stage: {stages.join(", ")}.
      </p>
    </div>
  );
}
