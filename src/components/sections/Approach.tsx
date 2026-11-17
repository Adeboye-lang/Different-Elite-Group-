"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, HeartHandshake, Scale, TrendingUp, KeyRound } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

export function Approach() {
  const valueIcons: Record<string, React.ReactNode> = {
    TRUST: <Shield className="w-5 h-5 text-[#45AAA1]" />,
    COMMITMENT: <HeartHandshake className="w-5 h-5 text-[#45AAA1]" />,
    INTEGRITY: <Scale className="w-5 h-5 text-[#45AAA1]" />,
    DEVELOPMENT: <TrendingUp className="w-5 h-5 text-[#45AAA1]" />,
    OPPORTUNITY: <KeyRound className="w-5 h-5 text-[#45AAA1]" />,
  };

  return (
    <section
      id="approach"
      className="relative py-24 md:py-32 bg-[#191B1F] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <SectionHeading
            label="04 / ETHOS & STANDARDS"
            title="Different Values. One Commitment."
            accentText="Commitment."
            subtitle="Our culture is founded on unwavering ethical standards, total transparency and profound dedication to athletic and human potential."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Values — editorial list, no heavy boxes */}
          <div className="lg:col-span-7 space-y-0">
            {siteConfig.values.map((val, index) => (
              <motion.div
                key={val.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex items-start gap-6 py-6 border-b border-white/[0.07] last:border-0 hover:bg-white/[0.015] transition-colors px-2 -mx-2"
              >
                {/* Kit number as decorative element */}
                <span className="kit-number text-5xl shrink-0 w-12 group-hover:text-[#C8A45D]/30 transition-colors">
                  {val.number}
                </span>

                <div className="flex-1 space-y-1.5 pt-1">
                  <div className="flex items-center gap-3">
                    {valueIcons[val.name]}
                    <span className="text-xs uppercase font-display tracking-[0.18em] text-[#868A92] font-semibold">
                      {val.principle}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-extrabold text-white uppercase tracking-tight group-hover:text-[#C8A45D] transition-colors">
                    {val.name}
                  </h3>
                  <p className="text-sm text-[#B4B8BF] font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Seamlessly blended commitment narrative with clearly visible feathered photo */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative min-h-[460px] p-8 md:p-10 flex flex-col justify-end overflow-hidden">
              {/* Clearly visible blended background photo */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
                <Image
                  src="/images/handshake.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center opacity-45 mix-blend-luminosity grayscale filter contrast-125 brightness-95"
                />

                {/* 4-way feather gradient to completely dissolve image boundaries into #191B1F */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#191B1F] via-[#191B1F]/50 to-[#191B1F]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#191B1F] via-transparent to-[#191B1F]" />
              </div>

              {/* Editorial text overlay with elegant left-border accent */}
              <div className="relative z-10 space-y-4 border-l-2 border-[#45AAA1] pl-6 py-2">
                <span className="text-xs uppercase font-display tracking-[0.24em] text-[#C8A45D] font-bold block">
                  The DEG Standard
                </span>
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white uppercase tracking-tight leading-tight">
                  “Your Journey.<br />
                  <span className="text-[#C8A45D]">Our Commitment.”</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#B4B8BF] font-light leading-relaxed pt-2">
                  Operating from London, UK with global reach, we adhere to the highest codes of professional player representation, athlete wellbeing, and ethical governance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
