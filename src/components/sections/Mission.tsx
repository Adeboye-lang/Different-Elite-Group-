"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Target, Shield, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

export function Mission() {
  const missionPillars = [
    {
      icon: <Compass className="w-5 h-5 text-[#45AAA1]" />,
      title: "Holistic Pathway Creation",
      desc: "Opening realistic, merit-based doors across domestic academies, senior teams, and international leagues.",
    },
    {
      icon: <Target className="w-5 h-5 text-[#45AAA1]" />,
      title: "Mindset & Career Governance",
      desc: "Guiding critical career decisions, contract discussions, and cultivating championship resilience under pressure.",
    },
    {
      icon: <Shield className="w-5 h-5 text-[#45AAA1]" />,
      title: "Foundations for Longevity",
      desc: "Ensuring long-term sustainability through education, brand value, personal wellbeing, and financial foresight.",
    },
  ];

  return (
    <section
      id="mission"
      className="relative py-28 md:py-36 bg-[#14161A] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background image — shows clearly with rich contrast, seamlessly blended at all edges */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/images/player-volley.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[right_35%] opacity-50 mix-blend-luminosity grayscale -scale-x-100 filter contrast-125 brightness-95"
        />

        {/* Seamless multi-stop feathered gradient masks dissolving edges into #14161A */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14161A] via-[#14161A]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14161A] via-transparent to-[#14161A]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14161A] via-transparent to-[#14161A]" />
        <div className="absolute inset-0 bg-[#45AAA1]/[0.05] mix-blend-color" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <SectionHeading
              className="[&_p]:text-[#DADDE2]"
              label="02 / PURPOSE & MISSION"
              title="Building More Than Football Careers."
              accentText="Careers."
              subtitle="Our mission is to create meaningful pathways for footballers to reach their highest potential through professional guidance, career development, opportunities and ongoing personal support."
            />

            <div className="space-y-6 text-[#DADDE2] font-light text-base md:text-lg leading-relaxed">
              <p>
                We aim to support players at every stage of their football journey, from promising young talents taking their first steps towards professional football to established players looking to progress to the next level.
              </p>

              <p className="text-white text-base md:text-lg font-normal border-l-2 border-[#45AAA1] pl-5">
                Our focus is not simply on helping players secure opportunities. It is about helping them make the right decisions, develop the right mindset and build the foundations for long-term success.
              </p>

              <p>
                We want every player associated with Different Elite Group to feel supported, valued, respected and confident that they have people genuinely invested in their future.
              </p>
            </div>

            {/* Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs tracking-wide text-white font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#45AAA1] shrink-0" />
                <span>Player-centered representation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#45AAA1] shrink-0" />
                <span>Transparent career roadmap</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#45AAA1] shrink-0" />
                <span>Mental & personal wellbeing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#45AAA1] shrink-0" />
                <span>Worldwide sporting network</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission Pillars — open, modern list */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="border-l-2 border-[#45AAA1] pl-6 mb-8">
              <span className="text-xs uppercase font-display tracking-[0.24em] text-[#C8A45D] font-bold block mb-1">
                DEG Agency Standards
              </span>
              <span className="text-xs font-display tracking-widest text-white/40 uppercase">
                Excellence
              </span>
            </div>

            <div className="space-y-8">
              {missionPillars.map((pillar, idx) => (
                <div key={idx} className="group flex gap-5 items-start border-b border-white/[0.06] pb-8 last:border-0 last:pb-0">
                  <div className="mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-display uppercase tracking-wide text-white font-bold group-hover:text-gradient transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#B4B8BF] leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <p className="text-xs font-display uppercase tracking-[0.2em] text-[#C8A45D] font-bold">
                “Believe in Your Potential. Build Your Future. Become Elite.”
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
