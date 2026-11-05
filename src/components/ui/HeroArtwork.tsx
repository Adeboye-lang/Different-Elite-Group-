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
      className="relative w-full aspect-[4/5] sm:aspect-[4/5] lg:aspect-[4/5] xl:aspect-[5/6] max-w-xl mx-auto lg:max-w-none flex items-center justify-center select-none group"
    >

      {/* Main Luxury Football Campaign Visual */}
      <motion.div
        animate={{
          x: mousePos.x * 12,
          y: mousePos.y * 12,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        className="relative w-full h-full overflow-hidden border border-white/[0.12] bg-[#1F2227]"
      >
        {/* Cinematic Footballer Campaign Imagery */}
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-cinematic.jpg"
            alt="Different Elite Group - Elite Footballer"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
            className="object-cover object-center filter grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Dark vignette over photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#14161A] via-transparent to-[#14161A]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14161A]/70 via-transparent to-[#14161A]/40" />
          <div className="absolute inset-0 bg-[#C8A45D]/[0.05] mix-blend-color" />
        </div>

        {/* Editorial Football Agency Badges & Metadata */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 pointer-events-none">
          {/* Top Row: Clean Agency Insignia (No UK Worldwide tag) */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2 bg-[#14161A]/70 border border-white/10 px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C8A45D]" />
              <span className="text-xs font-display uppercase tracking-[0.2em] text-white font-bold">
                DEG AGENCY
              </span>
            </div>
            <span className="kit-number text-8xl sm:text-9xl">10</span>
          </div>

          {/* Bottom Card: Football Agency Credentials */}
          <div className="p-4 sm:p-5 bg-[#16181C]/90 border-l-2 border-[#C8A45D] border-y border-r border-y-white/10 border-r-white/10 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#C8A45D] font-bold">
                ELITE FOOTBALL PATHWAYS
              </span>
            </div>
            <p className="text-base font-display uppercase tracking-wider text-white font-extrabold leading-tight">
              PLAYER REPRESENTATION & CAREER DEVELOPMENT
            </p>
          </div>
        </div>

        {/* Green edge on hover */}
        <div className="absolute inset-0 border border-[#C8A45D]/0 group-hover:border-[#C8A45D]/40 transition-colors duration-500 pointer-events-none" />
      </motion.div>
    </div>
  );
}
