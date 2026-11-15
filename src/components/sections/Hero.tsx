"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { Button } from "@/src/components/ui/Button";
import { HeroArtwork } from "@/src/components/ui/HeroArtwork";
import { PitchLines } from "@/src/components/ui/PitchLines";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-36 pb-20 lg:pt-40 lg:pb-28 flex flex-col justify-center bg-[#16181C] overflow-hidden"
    >
      {/* Stadium pitch atmospheric backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/images/pathway-pitch.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity grayscale filter contrast-125 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16181C] via-[#16181C]/90 to-[#16181C]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#16181C] via-transparent to-[#16181C]" />
      </div>

      {/* Layered pitch markings */}
      <PitchLines className="absolute inset-0 w-full h-full text-white/[0.04]" />

      {/* Content Container */}
      <div className="relative w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">

          {/* Left Column: Command & Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 space-y-8"
          >
            {/* Live Agency Status Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#14161A]/80 backdrop-blur-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D7A52]" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#B4B8BF] font-display font-semibold">
                FOOTBALL AGENCY · LONDON, UK
              </span>
            </div>

            {/* High-Impact Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold tracking-tight text-[#F5F5F5] uppercase leading-[0.9]">
              MORE THAN AN <br />
              <span className="text-white">AGENCY.</span> <br />
              A <span className="text-[#C8A45D]">PATHWAY</span> TO <br />
              YOUR FUTURE.
            </h1>

            {/* Supporting statement */}
            <p className="text-base sm:text-lg font-normal text-[#B4B8BF] leading-relaxed max-w-xl border-l-2 border-[#2D7A52] pl-5">
              {siteConfig.supportingStatement}
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="accent"
                size="lg"
                href="#contact"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" href="#about">
                Discover DEG
              </Button>
            </div>

            {/* Refined Athletic Proof Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/[0.08]">
              {[
                { value: "07", label: "PRACTICE AREAS" },
                { value: "GLOBAL", label: "CLUB NETWORK" },
                { value: "LONDON", label: "OPERATIONS HQ" },
                { value: "FIFA", label: "LICENSED CONDUCT" },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#868A92] font-display font-semibold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Hero Visual (Portrait of an Elite Player) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 relative"
          >
            <HeroArtwork />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
