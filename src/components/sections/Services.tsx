"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight, Check, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Button } from "@/src/components/ui/Button";

export function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string>(
    siteConfig.services[0].id
  );

  const activeIndex = siteConfig.services.findIndex((s) => s.id === activeServiceId);
  const activeService = siteConfig.services[activeIndex] || siteConfig.services[0];

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % siteConfig.services.length;
    setActiveServiceId(siteConfig.services[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + siteConfig.services.length) % siteConfig.services.length;
    setActiveServiceId(siteConfig.services[prevIdx].id);
  };

  return (
    <section
      id="services"
      className="relative py-28 md:py-36 bg-[#17191D] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background stadium image — cleanly dissolved at borders */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/images/pathway-pitch.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity grayscale filter contrast-125 brightness-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17191D] via-[#17191D]/60 to-[#17191D]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#17191D] via-transparent to-[#17191D]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <SectionHeading
            label="03 / SERVICE DIRECTORY"
            title="Guidance for Every Stage of Your Journey."
            accentText="Journey."
            subtitle="From career management to personal development, we aim to provide guidance and support throughout every stage of a player’s football journey."
          />
        </div>

        {/* ─── Modern Horizontal Tab Navigation Bar ─── */}
        <div className="relative mb-14 pb-2 border-b border-white/[0.08] overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 sm:gap-3 min-w-max">
            {siteConfig.services.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group relative px-4 py-3 transition-all duration-200 flex items-center gap-3 cursor-pointer select-none ${
                    isActive
                      ? "text-white"
                      : "text-[#868A92] hover:text-white"
                  }`}
                >
                  <span
                    className={`font-display font-extrabold text-sm transition-colors ${
                      isActive ? "text-[#C8A45D]" : "text-[#868A92] group-hover:text-white"
                    }`}
                  >
                    {service.number}
                  </span>
                  <span className="text-xs uppercase font-display tracking-wider font-bold whitespace-nowrap">
                    {service.tag}
                  </span>

                  {/* Active Underline Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceTab"
                      className="absolute bottom-[-9px] left-0 right-0 h-[2px] bg-[#C8A45D]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── Main Editorial Showcase (Completely Box-Free) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Portrait & Practice Identity (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative min-h-[480px] lg:min-h-[580px] p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
              {/* Clearly visible blended portrait photography */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
                <Image
                  src="/images/player-portrait.jpg"
                  alt="Elite Football Player"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[center_20%] opacity-55 mix-blend-luminosity grayscale filter contrast-125 brightness-95"
                />

                {/* 4-way feather gradient to dissolve photo edges smoothly into #17191D */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17191D] via-[#17191D]/40 to-[#17191D]" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#17191D]/30 to-[#17191D]" />
              </div>

              {/* Top metadata tags */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1 bg-[#14161A]/85 backdrop-blur-md border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#45AAA1]" />
                  <span className="text-[10px] uppercase font-display tracking-[0.24em] text-white font-bold">
                    DEG PRACTICE · EST. UK
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-[0.2em] font-display font-semibold text-[#C8A45D] px-2.5 py-1 bg-[#14161A]/85 backdrop-blur-md border border-white/10">
                  {activeService.tag}
                </span>
              </div>

              {/* Large Outline Kit Number */}
              <div className="relative z-10 my-auto py-8">
                <span className="kit-number text-9xl sm:text-[11rem] opacity-80 block select-none">
                  {activeService.number}
                </span>
              </div>

              {/* Bottom Quick Controls & Agency Scope */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Service"
                    className="p-2.5 border border-white/10 bg-[#14161A]/80 hover:border-[#C8A45D] text-white hover:text-[#C8A45D] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Service"
                    className="p-2.5 border border-white/10 bg-[#14161A]/80 hover:border-[#C8A45D] text-white hover:text-[#C8A45D] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs uppercase font-display tracking-widest text-[#B4B8BF] font-semibold ml-2">
                    {activeIndex + 1} / {siteConfig.services.length}
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-widest text-white/50 font-display font-medium">
                  LONDON, UK
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Open Editorial Deliverables (7 cols — No Box) */}
          <div className="lg:col-span-7 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Eyebrow & Status */}
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#45AAA1]" />
                  <span className="text-xs uppercase font-display tracking-[0.24em] text-[#C8A45D] font-bold">
                    SERVICE {activeService.number} · PRACTICE OVERVIEW
                  </span>
                </div>

                {/* Major Service Title */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white uppercase tracking-tight leading-[0.96]">
                  {activeService.title}
                </h3>

                {/* Strategic Overview Text with Left Accent */}
                <p className="text-base sm:text-lg text-[#B4B8BF] font-normal leading-relaxed border-l-2 border-[#45AAA1] pl-6 py-1">
                  {activeService.shortDesc}
                </p>

                {/* Areas of Delivery — 2-Column Open Grid */}
                <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                  <span className="text-xs uppercase font-display tracking-[0.22em] text-white font-bold block">
                    DELIVERABLES & STRATEGIC SUPPORT
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {activeService.points.map((pt, i) => (
                      <div
                        key={i}
                        className="group flex items-start gap-3 py-2.5 px-2 hover:bg-white/[0.015] transition-colors border-b border-white/[0.05]"
                      >
                        <div className="p-1 border border-white/10 bg-[#14161A] text-[#45AAA1] shrink-0 mt-0.5 group-hover:border-[#C8A45D] group-hover:text-[#C8A45D] transition-colors">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Regulatory Disclaimer Note */}
                <p className="text-[11px] text-[#868A92] italic font-light pt-2 leading-relaxed">
                  * Note: Our representation and advisory practice is tailored to individual career stages. Contract negotiations and sporting representations are executed where appropriately authorised, registered and licensed under FIFA and applicable national association regulations.
                </p>

                {/* Action CTA & Confidentiality Footer */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/[0.08]">
                  <Button
                    variant="accent"
                    size="lg"
                    href="#contact"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Enquire Regarding {activeService.tag}
                  </Button>

                  <div className="flex items-center gap-2 text-xs text-[#45AAA1] font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Confidential Athlete Intake</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
