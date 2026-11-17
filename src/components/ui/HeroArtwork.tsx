"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Fades the photo out on every side so it dissolves into the hero instead of sitting in a frame
const edgeFade: React.CSSProperties = {
  maskImage:
    "linear-gradient(to bottom, transparent 0%, black 12%, black 62%, transparent 100%), linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent 0%, black 12%, black 62%, transparent 100%), linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
};

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
      className="relative w-full max-w-xl mx-auto select-none"
    >
      {/* Frameless player image, dissolved into the page */}
      <motion.div
        animate={{
          x: mousePos.x * 8,
          y: mousePos.y * 8,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        className="relative w-full aspect-[4/5]"
        style={edgeFade}
      >
        <Image
          src="/images/hero-elite-player.jpg"
          alt="Professional footballer in a floodlit stadium"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          className="object-cover object-[center_20%]"
        />
      </motion.div>

      {/* Caption sitting under the player */}
      <div className="relative -mt-16 sm:-mt-20 border-l-2 border-[#45AAA1] pl-4 max-w-sm">
        <span className="block text-[10px] uppercase tracking-[0.24em] font-display font-bold text-[#C8A45D]">
          Premier League & European Pathways
        </span>
        <p className="mt-1 text-base sm:text-lg font-display uppercase tracking-wide text-white font-black leading-tight">
          Player Representation & Career Stewardship
        </p>
      </div>
    </div>
  );
}
