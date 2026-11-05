"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/src/config/site";

export function BrandStatement() {
  const statementLines = [
    "To support the player.",
    "Develop the person.",
    "Create the pathway.",
    "Shape the future.",
  ];

  return (
    <section className="relative py-32 md:py-44 bg-[#080808] border-t border-white/[0.08] overflow-hidden flex items-center justify-center">
      {/* Background Cinematic Pitch Visual with Deep Vignette */}
      <div className="absolute inset-0 opacity-20 filter grayscale contrast-125 mix-blend-luminosity pointer-events-none">
        <Image
          src="/images/pathway-pitch.jpg"
          alt="Majestic floodlit football pitch under dusk"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]" />
      </div>


      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#C8A45D]" />
          <span className="text-xs uppercase font-display tracking-[0.3em] text-[#C8A45D] font-bold">
            THE DEG MANIFESTO
          </span>
          <span className="w-2 h-2 rounded-full bg-[#C8A45D]" />
        </motion.div>

        {/* 4 Statement Lines in High-Impact Premier League / FC 27 Display Font */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-12">
          {statementLines.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight uppercase leading-[0.95] ${
                idx === 3
                  ? "text-[#C8A45D]"
                  : "text-[#F5F5F5]"
              }`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Supporting Signature Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8 border-t border-white/[0.08] max-w-lg mx-auto"
        >
          <p className="text-xs sm:text-sm uppercase font-display tracking-[0.24em] text-[#A3A3A3] font-bold">
            {siteConfig.brandStatements[0]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
