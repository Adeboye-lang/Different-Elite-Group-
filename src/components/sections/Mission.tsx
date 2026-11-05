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
      icon: <Compass className="w-5 h-5 text-[#C8A45D]" />,
      title: "Holistic Pathway Creation",
      desc: "Opening realistic, merit-based doors across domestic academies, senior teams, and international leagues.",
    },
    {
      icon: <Target className="w-5 h-5 text-[#C8A45D]" />,
      title: "Mindset & Career Governance",
      desc: "Guiding critical career decisions, contract discussions, and cultivating championship resilience under pressure.",
    },
    {
      icon: <Shield className="w-5 h-5 text-[#C8A45D]" />,
      title: "Foundations for Longevity",
      desc: "Ensuring long-term sustainability through education, brand value, personal wellbeing, and financial foresight.",
    },
  ];

  return (
    <section
      id="mission"
      className="relative py-28 md:py-36 bg-[#080808] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Architectural Stadium Tunnel View */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
        <Image
          src="/images/stadium-tunnel.jpg"
          alt="Stadium tunnel leading out to match pitch"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/85 to-[#080808]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Core Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <SectionHeading
              label="02 / PURPOSE & MISSION"
              title="Building More Than Football Careers."
              accentText="Careers."
              subtitle="Our mission is to create meaningful pathways for footballers to reach their highest potential through professional guidance, career development, opportunities and ongoing personal support."
            />

            <div className="space-y-6 text-[#A3A3A3] font-light text-base md:text-lg leading-relaxed">
              <p>
                We aim to support players at every stage of their football journey, from promising young talents taking their first steps towards professional football to established players looking to progress to the next level.
              </p>

              <p className="text-white text-base md:text-lg font-normal border-l-2 border-[#C8A45D] pl-5">
                Our focus is not simply on helping players secure opportunities. It is about helping them make the right decisions, develop the right mindset and build the foundations for long-term success.
              </p>

              <p>
                We want every player associated with Different Elite Group to feel supported, valued, respected and confident that they have people genuinely invested in their future.
              </p>
            </div>

            {/* Checklist of commitments */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs tracking-wide text-white font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span>Player-centered representation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span>Transparent career roadmap</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span>Mental & personal wellbeing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span>Worldwide sporting network</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission Architecture Card Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-8 border border-white/[0.14] bg-[#121212]/95 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8A45D]" />

              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                <span className="text-xs uppercase font-display tracking-[0.24em] text-[#C8A45D] font-bold">
                  DEG AGENCY STANDARDS
                </span>
                <span className="text-xs font-display tracking-widest text-white/50 uppercase">
                  EXCELLENCE
                </span>
              </div>

              <div className="space-y-6">
                {missionPillars.map((pillar, idx) => (
                  <div key={idx} className="group flex gap-4 items-start">
                    <div className="p-3 border border-white/10 bg-[#161616] group-hover:border-[#C8A45D]/50 transition-colors shrink-0">
                      {pillar.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-display uppercase tracking-wide text-white font-bold group-hover:text-[#C8A45D] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#A3A3A3] leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quote Inset */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] text-center">
                <p className="text-xs font-display uppercase tracking-[0.22em] text-[#C8A45D] font-bold">
                  “Believe in Your Potential. Build Your Future. Become Elite.”
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
