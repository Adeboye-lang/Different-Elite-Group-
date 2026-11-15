"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroArtwork() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg mx-auto flex items-center justify-center select-none group"
    >
      {/* Ambient stadium rim glow behind the silhouette */}
      <div className="absolute top-1/4 -inset-4 bg-gradient-to-tr from-[#2D7A52]/20 via-transparent to-[#C8A45D]/25 rounded-full blur-3xl pointer-events-none" />

      {/* ─── Non-Square Editorial Stadium Arch Silhouette ─── */}
      <motion.div
        animate={{
          x: mousePos.x * 10,
          y: mousePos.y * 10,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-t-[180px] sm:rounded-t-[220px] rounded-b-[32px] overflow-hidden border-t-2 border-x border-white/15 bg-[#16181C]"
      >
        {/* Athlete Campaign Imagery */}
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-elite-player.jpg"
            alt="Different Elite Group - Premier League Footballer"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            className="object-cover object-[center_15%] filter contrast-110 brightness-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Seamless bottom and lateral vignettes to dissolve edges into the hero canvas */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#16181C] via-[#16181C]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#16181C]/40 via-transparent to-[#16181C]" />
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#16181C]/60 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#16181C]/60 to-transparent" />
        </div>

        {/* Floating Typography & Status Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 pointer-events-none">
          {/* Top: Agency Tag Badge */}
          <div className="flex items-center justify-center pt-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14161A]/85 backdrop-blur-md border border-white/15 shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D7A52]" />
              <span className="text-[10px] uppercase font-display tracking-[0.24em] text-white font-bold">
                DEG ROSTER · LONDON, UK
              </span>
            </div>
          </div>

          {/* Bottom Narrative Anchor */}
          <div className="space-y-1 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.24em] font-display font-bold text-[#C8A45D]">
                PREMIER LEAGUE & EUROPEAN PATHWAYS
              </span>
            </div>
            <p className="text-base sm:text-lg font-display uppercase tracking-wide text-white font-black leading-tight drop-shadow-md">
              PLAYER REPRESENTATION & CAREER STEWARDSHIP
            </p>
          </div>
        </div>
      </motion.div>

      {/* Decorative Layered Kit Number (Sitting behind the arch) */}
      <span className="kit-number absolute -top-8 -right-4 sm:-right-8 text-9xl sm:text-[10rem] opacity-35 -z-10 pointer-events-none select-none">
        10
      </span>
    </div>
  );
}
