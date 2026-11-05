"use client";

import React from "react";
import { motion } from "framer-motion";
import { PitchLines } from "@/src/components/ui/PitchLines";

// Career pathway plotted like a tactics board: each stage is a "player" position on a vertical pitch
const pathway = [
  { label: "Academy", x: 24, y: 78 },
  { label: "Youth", x: 70, y: 65 },
  { label: "Senior", x: 30, y: 50 },
  { label: "Professional", x: 72, y: 35 },
  { label: "International", x: 50, y: 20 },
];

export function TacticsBoard() {
  const pathD = pathway
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden border border-white/[0.14] bg-[#1A1D22]">
      {/* Grass stripes */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 40px, transparent 40px, transparent 80px)",
        }}
      />

      {/* Vertical pitch markings */}
      <div className="absolute inset-4">
        <PitchLines vertical fit="meet" className="w-full h-full text-white/[0.14]" />
      </div>

      {/* Pathway run */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <motion.path
          d={pathD}
          fill="none"
          stroke="#C8A45D"
          strokeWidth="2"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      {/* Stage markers */}
      {pathway.map((stage, idx) => {
        const isFinal = idx === pathway.length - 1;
        return (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + idx * 0.35 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
            style={{ left: `${stage.x}%`, top: `${stage.y}%` }}
          >
            <span
              className={`flex items-center justify-center w-9 h-9 rounded-full font-display font-extrabold text-sm ${
                isFinal
                  ? "bg-[#C8A45D] text-[#14161A]"
                  : "bg-[#14161A] text-[#C8A45D] border-2 border-[#C8A45D]"
              }`}
            >
              {idx + 1}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-display font-bold text-white bg-[#14161A]/80 px-2 py-0.5 whitespace-nowrap">
              {stage.label}
            </span>
          </motion.div>
        );
      })}

      {/* Board header */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-3 bg-[#14161A]/85 border-b border-white/10">
        <span className="text-[10px] uppercase tracking-[0.24em] font-display font-bold text-[#C8A45D]">
          The DEG Pathway
        </span>
        <span className="text-[10px] uppercase tracking-[0.24em] font-display font-semibold text-white/50">
          Game Plan
        </span>
      </div>

    </div>
  );
}
