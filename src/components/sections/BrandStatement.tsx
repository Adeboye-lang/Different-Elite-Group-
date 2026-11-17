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
    <section className="relative py-32 md:py-44 bg-[#07373B] border-t border-white/[0.06] overflow-hidden flex items-center justify-center">
      {/* Floodlit stadium background — clearly visible, cleanly dissolved at edges */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/images/pathway-pitch.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-45 mix-blend-luminosity grayscale filter contrast-125 brightness-100"
        />

        {/* Multi-stop edge dissolve into #07373B */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07373B] via-[#07373B]/50 to-[#07373B]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07373B] via-transparent to-[#07373B]" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" />
          <span className="text-xs uppercase font-display tracking-[0.28em] text-[#B4B8BF] font-bold">
            THE DEG MANIFESTO
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" />
        </motion.div>

        {/* 4 Statement Lines in High-Impact Premier League Display Font */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-12">
          {statementLines.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight uppercase leading-[0.95] ${
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/[0.08] max-w-lg mx-auto"
        >
          <p className="text-xs sm:text-sm uppercase font-display tracking-[0.24em] text-[#B4B8BF] font-semibold">
            {siteConfig.brandStatements[0]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
