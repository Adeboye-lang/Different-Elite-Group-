"use client";

import React from "react";
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
      {/* Pitch markings & mown stripes */}
      <div className="absolute inset-0 pitch-stripes pointer-events-none" />
      <PitchLines className="absolute inset-0 w-full h-full text-white/[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#16181C] via-transparent to-[#16181C] pointer-events-none" />


      {/* Expansive Wide Container */}
      <div className="relative w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        {/* Expansive 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Bold Editorial Headlines & Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 space-y-8"
          >
            {/* High-Impact FC / Premier League Style Editorial Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-extrabold tracking-tight text-[#F5F5F5] uppercase leading-[0.9]">
              MORE THAN AN <br />
              <span className="text-white">AGENCY.</span> <br />
              A <span className="text-[#C8A45D]">PATHWAY</span> TO <br />
              YOUR FUTURE.
            </h1>

            {/* Supporting Statement */}
            <p className="text-base sm:text-lg md:text-xl font-light text-[#B4B8BF] leading-relaxed max-w-2xl">
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
              <Button
                variant="outline"
                size="lg"
                href="#about"
              >
                Discover DEG
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5"
          >
            <HeroArtwork />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
