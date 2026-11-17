"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Target, Users } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Button } from "@/src/components/ui/Button";

// The 5-stage career progression pathway
const pathwayStages = [
  {
    step: "01",
    title: "Academy & Grassroots",
    tag: "Foundations",
    desc: "Talent identification, technical benchmarking, and building elite daily training habits.",
  },
  {
    step: "02",
    title: "Youth & U21 Transition",
    tag: "Development",
    desc: "Tactical maturity, physical conditioning, and high-pressure competitive adaptation.",
  },
  {
    step: "03",
    title: "Senior Debut & First Team",
    tag: "Breakthrough",
    desc: "First-team exposure, merit-based trial management, and performance consistency.",
  },
  {
    step: "04",
    title: "Professional Contract",
    tag: "Representation",
    desc: "Rigorous contract stewardship, commercial branding, and holistic career protection.",
  },
  {
    step: "05",
    title: "International & Legacy",
    tag: "Elite Stage",
    desc: "Global league opportunities, international recognition, and post-football longevity.",
  },
];

export function About() {
  const [activeStage, setActiveStage] = useState(2);

  return (
    <section
      id="about"
      className="relative py-28 md:py-36 bg-[#191B1F] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <SectionHeading
            label="01 / IDENTITY & ETHOS"
            title="Every Player Has a Story. Every Journey Deserves a Pathway."
            accentText="Pathway."
            subtitle="Different Elite Group is a premier London-based football agency built on passion, ambition, trust and an uncompromising commitment to athletic and human potential."
          />
        </div>

        {/* ─── 2-Column Editorial Spread ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): The DEG Pathway Progression Ladder */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Header Banner */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#45AAA1]" />
                <span className="text-xs uppercase font-display tracking-[0.22em] text-white font-bold">
                  THE DEG PATHWAY MODEL
                </span>
              </div>
              <span className="text-[10px] uppercase font-display tracking-widest text-[#C8A45D] font-bold">
                5-STAGE ROADMAP
              </span>
            </div>

            {/* Vertical Pathway Timeline */}
            <div className="relative pl-6 space-y-4 before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-[2px] before:bg-white/10">
              {pathwayStages.map((stage, idx) => {
                const isActive = idx === activeStage;
                return (
                  <div
                    key={stage.step}
                    onClick={() => setActiveStage(idx)}
                    className={`group relative cursor-pointer p-4 transition-all duration-200 border-l-2 ${
                      isActive
                        ? "bg-[#212429] border-l-[#C8A45D] shadow-md"
                        : "bg-transparent border-l-transparent hover:bg-white/[0.02]"
                    }`}
                  >
                    {/* Node Dot on the timeline */}
                    <span
                      className={`absolute -left-[31px] top-5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-display font-bold transition-all duration-200 ${
                        isActive
                          ? "bg-[#C8A45D] text-[#14161A] ring-4 ring-[#191B1F]"
                          : "bg-[#14161A] text-[#868A92] border border-white/20 group-hover:border-white/50"
                      }`}
                    >
                      {idx + 1}
                    </span>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-display font-semibold text-[#868A92]">
                          STAGE {stage.step} · {stage.tag}
                        </span>
                        <span className={`text-[10px] font-display font-bold uppercase transition-colors ${
                          isActive ? "text-[#C8A45D]" : "text-white/30 group-hover:text-white"
                        }`}>
                          {isActive ? "SELECTED" : "VIEW"}
                        </span>
                      </div>

                      <h4 className="text-base font-display uppercase tracking-wide font-bold text-white">
                        {stage.title}
                      </h4>

                      <p className="text-xs text-[#B4B8BF] font-light leading-relaxed pt-1">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Quote Accent */}
            <div className="mt-8 p-5 border-l-2 border-[#45AAA1] bg-white/[0.015]">
              <p className="text-xs sm:text-sm text-[#B4B8BF] font-light italic leading-relaxed">
                {siteConfig.quotes.aboutFeature1}
              </p>
              <span className="block mt-2 text-[10px] uppercase tracking-[0.22em] text-[#C8A45D] font-display font-bold">
                — DEG MANAGEMENT PRINCIPLE
              </span>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Editorial Narrative & Core Practice Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-9"
          >
            {/* Lead Headline Statement */}
            <div className="space-y-4">
              <span className="text-xs uppercase font-display tracking-[0.24em] text-[#C8A45D] font-bold block">
                THE PHILOSOPHY BEHIND DEG
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white uppercase tracking-tight leading-[1.05]">
                We Believe in Recognising the <span className="text-[#C8A45D]">Individual</span> Behind the Talent.
              </h3>
              <p className="text-base sm:text-lg text-[#B4B8BF] font-normal leading-relaxed border-l-2 border-[#45AAA1] pl-6 py-1">
                At Different Elite Group, we understand that football is more than just a sport. For many players, it is a lifelong ambition, an opportunity to rewrite their family's future, and a pursuit that demands total dedication.
              </p>
            </div>

            {/* 3 Core Practice Pillars */}
            <div className="space-y-5 pt-2 border-t border-white/[0.08]">
              {[
                {
                  icon: <Users className="w-5 h-5 text-[#45AAA1]" />,
                  number: "01",
                  title: "Human-First Athlete Stewardship",
                  desc: "We refuse to treat footballers as commodities or statistics. Every player receives dedicated director-level attention, honest career counsel, mental balance guidance, and continuous personal check-ins.",
                },
                {
                  icon: <Shield className="w-5 h-5 text-[#45AAA1]" />,
                  number: "02",
                  title: "Uncompromising Integrity & Governance",
                  desc: "Operating from London under strict compliance with FIFA and Football Association regulatory frameworks. Transparent contract negotiation, zero false promises, and genuine athlete advocacy.",
                },
                {
                  icon: <Target className="w-5 h-5 text-[#45AAA1]" />,
                  number: "03",
                  title: "Legitimate Domestic & Global Pathways",
                  desc: "We cultivate direct relationships with club sporting directors, head scouts, and academy managers across Premier League, EFL, European, and international leagues to open genuine doors.",
                },
              ].map((pillar) => (
                <div
                  key={pillar.number}
                  className="group flex items-start gap-5 py-4 border-b border-white/[0.06] last:border-0 hover:bg-white/[0.015] px-3 -mx-3 transition-colors"
                >
                  <div className="p-3 border border-white/10 bg-[#16181C] shrink-0 group-hover:border-[#C8A45D]/50 transition-colors">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-display font-bold text-[#C8A45D]">
                        {pillar.number}
                      </span>
                      <h4 className="text-base font-display uppercase tracking-wide text-white font-bold group-hover:text-[#C8A45D] transition-colors">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#B4B8BF] font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Action Strip */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/[0.08]">
              <div className="space-y-0.5">
                <span className="text-xs uppercase font-display tracking-wider text-white font-bold block">
                  READY TO ELEVATE YOUR TRAJECTORY?
                </span>
                <span className="text-xs text-[#868A92] font-light">
                  Direct consultations conducted with absolute discretion.
                </span>
              </div>

              <Button
                variant="accent"
                size="md"
                href="#contact"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Start Your Journey
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
