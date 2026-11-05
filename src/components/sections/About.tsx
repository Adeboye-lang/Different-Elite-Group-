"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Trophy } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { TacticsBoard } from "@/src/components/ui/TacticsBoard";

export function About() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 bg-[#0e0e0e] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <SectionHeading
            label="01 / IDENTITY & ETHOS"
            title="Every Player Has a Story. Every Journey Deserves a Pathway."
            accentText="Pathway."
            subtitle="Different Elite Group is a premier football agency built on passion, ambition, trust and a genuine desire to unlock athletic potential on the global stage."
          />
        </div>

        {/* Editorial Layout: Asymmetric 2-column with photography and football agency pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Composition with Editorial Player Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <TacticsBoard />

            {/* Quote Badge */}
            <div className="relative max-w-md mx-auto -mt-10 px-4 sm:px-6">
              <div className="p-5 bg-[#0a0a0a]/95 border border-[#C8A45D]/40">
                <Quote className="w-5 h-5 text-[#C8A45D] mb-2 opacity-90" />
                <p className="text-sm font-light text-white leading-relaxed italic">
                  {siteConfig.quotes.aboutFeature1}
                </p>
                <span className="block mt-2 text-xs uppercase tracking-[0.2em] text-[#C8A45D] font-display font-bold">
                  — DEG COMMITMENT
                </span>
              </div>
            </div>

            {/* Corner Border Detail */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-28 h-28 border border-[#C8A45D]/30 -z-10 pointer-events-none" />
          </motion.div>

          {/* Right Column: Editorial Text Narrative & Structured Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Primary Paragraphs */}
            <div className="space-y-6 text-[#A3A3A3] font-light text-base md:text-lg leading-relaxed">
              <p className="text-white text-lg md:text-xl font-normal leading-relaxed border-l-2 border-[#C8A45D] pl-6 py-1">
                We believe that every player has a unique journey, and with the right guidance, opportunities and support, they can unlock their true potential both on and off the pitch.
              </p>

              <p>
                Our agency is driven by one clear purpose: to help talented footballers develop, progress and build successful, sustainable careers within the game.
              </p>

              <p>
                At Different Elite Group, we understand that football is more than just a sport. For many players, it is a lifelong dream, a passion and an opportunity to create a better future for themselves and their families.
              </p>

              <p>
                Our approach is personal, professional and player-focused. We aim to build strong, lasting relationships with our players, understand their individual ambitions and provide the guidance they need to make informed decisions throughout their careers.
              </p>
            </div>

            {/* Featured Pull Quote Block */}
            <div className="p-6 md:p-8 border border-white/[0.1] bg-[#121212] relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-3 border border-[#C8A45D]/40 bg-[#C8A45D]/10 shrink-0">
                  <Trophy className="w-5 h-5 text-[#C8A45D]" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-[0.24em] text-[#C8A45D] font-display font-bold block">
                    THE DEG DIFFERENCE
                  </span>
                  <p className="text-base sm:text-lg text-[#F5F5F5] font-normal leading-snug">
                    “Every player matters. Every journey is different. Every ambition deserves the right support.”
                  </p>
                </div>
              </div>
            </div>

            {/* Two Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-6 border border-white/[0.08] bg-[#121212] space-y-2">
                <span className="text-xs uppercase font-display tracking-widest text-[#C8A45D] font-bold">
                  01 / BESPOKE GUIDANCE
                </span>
                <h4 className="text-base font-display uppercase tracking-wider text-white font-bold">
                  Individual Attention
                </h4>
                <p className="text-xs text-[#A3A3A3] leading-relaxed font-light">
                  Tailored development programs recognizing unique attributes, technical strengths, and personal aspirations.
                </p>
              </div>

              <div className="p-6 border border-white/[0.08] bg-[#121212] space-y-2">
                <span className="text-xs uppercase font-display tracking-widest text-[#C8A45D] font-bold">
                  02 / UNCOMPROMISING ETHICS
                </span>
                <h4 className="text-base font-display uppercase tracking-wider text-white font-bold">
                  Elite Standards
                </h4>
                <p className="text-xs text-[#A3A3A3] leading-relaxed font-light">
                  Uncompromising integrity, candid career stewardship, and transparent football governance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
