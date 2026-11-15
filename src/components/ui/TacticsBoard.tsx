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
    <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden border border-white/[0.12] bg-[#17191D] shadow-2xl">
      {/* Subtle pitch grass gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#14161A] via-[#161a18] to-[#14161A]" />

      {/* Grass stripes */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(45,122,82,0.04) 0px, rgba(45,122,82,0.04) 40px, transparent 40px, transparent 80px)",
        }}
      />

      {/* Vertical pitch markings */}
      <div className="absolute inset-4">
        <PitchLines vertical fit="meet" className="w-full h-full text-white/[0.08]" />
      </div>

      {/* Pathway run with gradient stroke definition */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2D7A52" />
            <stop offset="50%" stopColor="#C8A45D" />
            <stop offset="100%" stopColor="#DFC27D" />
          </linearGradient>
        </defs>
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeDasharray="4 3"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
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
            transition={{ duration: 0.4, delay: 0.2 + idx * 0.25 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
            style={{ left: `${stage.x}%`, top: `${stage.y}%` }}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full font-display font-extrabold text-xs sm:text-sm shadow-md transition-transform duration-300 hover:scale-110 ${
                isFinal
                  ? "bg-gradient-to-r from-[#C8A45D] to-[#2D7A52] text-white ring-2 ring-white/20"
                  : "bg-[#14161A]/90 text-[#F5F5F5] border border-white/20"
              }`}
            >
              {idx + 1}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-display font-bold text-white bg-[#14161A]/90 backdrop-blur-sm px-2 py-0.5 border border-white/10 whitespace-nowrap shadow-sm">
              {stage.label}
            </span>
          </motion.div>
        );
      })}

      {/* Board header */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-3 bg-[#14161A]/90 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full gradient-bar" />
          <span className="text-[10px] uppercase tracking-[0.24em] font-display font-bold text-[#C8A45D]">
            The DEG Pathway
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.24em] font-display font-semibold text-white/50">
          Tactical Blueprint
        </span>
      </div>
    </div>
  );
}
