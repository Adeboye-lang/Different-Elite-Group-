"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, HeartHandshake, Scale, TrendingUp, KeyRound } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { PitchLines } from "@/src/components/ui/PitchLines";

export function Approach() {
  const valueIcons: Record<string, React.ReactNode> = {
    TRUST: <Shield className="w-5 h-5 text-[#C8A45D]" />,
    COMMITMENT: <HeartHandshake className="w-5 h-5 text-[#C8A45D]" />,
    INTEGRITY: <Scale className="w-5 h-5 text-[#C8A45D]" />,
    DEVELOPMENT: <TrendingUp className="w-5 h-5 text-[#C8A45D]" />,
    OPPORTUNITY: <KeyRound className="w-5 h-5 text-[#C8A45D]" />,
  };

  return (
    <section
      id="approach"
      className="relative py-28 md:py-36 bg-[#0e0e0e] border-t border-white/[0.08] overflow-hidden"
    >
      <PitchLines className="absolute inset-0 w-full h-full text-white/[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <SectionHeading
            label="04 / ETHOS & STANDARDS"
            title="Different Values. One Commitment."
            accentText="Commitment."
            subtitle="Our culture is founded on unwavering ethical standards, total transparency and profound dedication to athletic and human potential."
          />
        </div>

        {/* Minimalist Architectural Grid for the 5 Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.values.map((val, index) => {
            const isWide = index === 3 || index === 4;
            return (
              <motion.div
                key={val.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative p-8 border border-white/[0.1] bg-[#121212] hover:border-[#C8A45D]/50 transition-all duration-500 overflow-hidden ${
                  isWide ? "lg:col-span-1" : ""
                }`}
              >

                {/* Top Row: Number & Icon */}
                <div className="flex items-end justify-between pb-6 mb-6 border-b border-white/[0.06]">
                  <span className="kit-number text-7xl transition-colors duration-500 group-hover:text-[#C8A45D]/15">
                    {val.number}
                  </span>
                  <div className="p-3 border border-white/10 bg-[#161616] group-hover:border-[#C8A45D]/40 transition-colors">
                    {valueIcons[val.name]}
                  </div>
                </div>

                {/* Principle Tag */}
                <span className="text-xs uppercase font-display tracking-[0.2em] text-[#666666] font-semibold block mb-2">
                  {val.principle}
                </span>

                {/* Value Name (FC/PL bold uppercase) */}
                <h3 className="text-2xl font-display font-extrabold text-white uppercase tracking-tight mb-4 group-hover:text-[#C8A45D] transition-colors">
                  {val.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A3A3A3] font-light leading-relaxed">
                  {val.description}
                </p>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A45D] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}

          {/* 6th Slot: Brand Identity Anchor Box */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 border border-[#C8A45D]/30 bg-[#121212] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase font-display tracking-[0.24em] text-[#C8A45D] font-bold block">
                THE DEG STANDARD
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white uppercase tracking-tight leading-tight">
                “YOUR JOURNEY. <br />
                <span className="text-[#C8A45D]">OUR COMMITMENT.”</span>
              </h3>
            </div>

            <p className="text-xs text-[#A3A3A3] font-light leading-relaxed pt-6 border-t border-white/[0.08]">
              Operating from the United Kingdom with global reach, we adhere to the highest codes of professional player representation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
