"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Button } from "@/src/components/ui/Button";

export function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string>(
    siteConfig.services[0].id
  );

  const activeService =
    siteConfig.services.find((s) => s.id === activeServiceId) ||
    siteConfig.services[0];

  return (
    <section
      id="services"
      className="relative py-28 md:py-36 bg-[#0c0c0c] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="absolute inset-0 pitch-stripes pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <SectionHeading
            label="03 / SERVICE DIRECTORY"
            title="Guidance for Every Stage of Your Journey."
            accentText="Journey."
            subtitle="From career management to personal development, we aim to provide guidance and support throughout every stage of a player’s football journey."
          />
        </div>

        {/* Desktop Editorial Interactive Showcase */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Service Index Menu */}
          <div className="col-span-5 space-y-2 border-r border-white/[0.08] pr-8">
            <span className="text-xs uppercase font-display tracking-[0.24em] text-[#C8A45D] font-bold block mb-4">
              TEAM SHEET — SERVICES 01 — 0{siteConfig.services.length}
            </span>

            {siteConfig.services.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-4 transition-all duration-300 relative group flex items-start justify-between cursor-pointer border ${
                    isActive
                      ? "bg-[#161616] border-[#C8A45D]/50 text-white"
                      : "bg-transparent border-transparent text-[#A3A3A3] hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex items-center justify-center w-9 h-9 shrink-0 text-base font-display font-extrabold transition-colors duration-300 ${
                        isActive
                          ? "bg-[#C8A45D] text-[#080808]"
                          : "border border-white/10 text-[#666666] group-hover:text-white group-hover:border-white/30"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <h3
                        className={`text-sm uppercase font-display tracking-wider transition-colors duration-300 ${
                          isActive ? "text-white font-bold" : "group-hover:text-white font-medium"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-widest text-[#666666] font-medium mt-1 block">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-4 h-4 transition-all duration-300 shrink-0 ${
                      isActive
                        ? "text-[#C8A45D] translate-x-0.5 -translate-y-0.5"
                        : "text-white/20 group-hover:text-white/60"
                    }`}
                  />

                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C8A45D]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Service Dossier */}
          <div className="col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="p-8 lg:p-10 border border-white/[0.14] bg-[#121212] relative overflow-hidden"
              >
                {/* Dossier Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="kit-number text-6xl">
                      {activeService.number}
                    </span>
                    <span className="w-8 h-[1px] bg-white/20" />
                    <span className="text-xs uppercase font-display tracking-[0.2em] text-white/80 font-semibold">
                      {activeService.tag}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A45D] font-bold border border-[#C8A45D]/40 px-2.5 py-1">
                    DEG PRACTICE
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-3xl font-display font-extrabold text-[#F5F5F5] uppercase tracking-tight leading-tight mb-4">
                  {activeService.title}
                </h3>
                <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed mb-8">
                  {activeService.shortDesc}
                </p>

                {/* Structured Service Points */}
                <div className="space-y-4 mb-8">
                  <span className="text-xs uppercase font-display tracking-[0.24em] text-[#C8A45D] font-bold block">
                    AREAS OF SUPPORT & DELIVERY:
                  </span>
                  <div className="grid grid-cols-1 gap-3">
                    {activeService.points.map((pt, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 border border-white/[0.06] bg-[#161616]/70 hover:border-white/15 transition-colors"
                      >
                        <div className="p-1 border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Regulatory Disclaimer Note */}
                <p className="text-[11px] text-[#666666] italic font-light border-t border-white/[0.06] pt-4 mb-6 leading-relaxed">
                  * Note: Our approach includes guidance tailored to individual player stages. Contract discussions and club representations are conducted where appropriately authorised, registered and licensed in accordance with applicable football governing regulations.
                </p>

                {/* Action CTA */}
                <div className="flex items-center justify-between pt-2">
                  <Button
                    variant="gold"
                    size="md"
                    href="#contact"
                  >
                    Enquire Regarding Pathway
                  </Button>
                  <span className="text-xs uppercase font-display tracking-widest text-[#A3A3A3] font-semibold">
                    UNITED KINGDOM • WORLDWIDE
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile / Tablet Accordion View */}
        <div className="lg:hidden space-y-4">
          {siteConfig.services.map((service) => {
            const isOpen = service.id === activeServiceId;
            return (
              <div
                key={service.id}
                className="border border-white/[0.1] bg-[#121212] overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveServiceId(isOpen ? "" : service.id)
                  }
                  className="w-full p-5 text-left flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg font-display text-[#C8A45D] font-extrabold">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-base uppercase font-display tracking-wide text-white font-bold">
                        {service.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-widest text-[#666666] font-medium mt-1 block">
                        {service.tag}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C8A45D] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-6 border-t border-white/[0.06] pt-4 space-y-4"
                    >
                      <p className="text-xs text-[#A3A3A3] leading-relaxed font-light">
                        {service.shortDesc}
                      </p>

                      <div className="space-y-2">
                        {service.points.map((pt, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-white/90">
                            <Check className="w-3.5 h-3.5 text-[#C8A45D] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Button
                          variant="gold"
                          size="sm"
                          href="#contact"
                          className="w-full"
                        >
                          Enquire Regarding {service.number}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
