"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, ArrowUpRight, ShieldCheck } from "lucide-react";
import { InstagramIcon } from "@/src/components/ui/InstagramIcon";
import { siteConfig } from "@/src/config/site";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Button } from "@/src/components/ui/Button";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 bg-[#0a0a0a] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#C8A45D]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <SectionHeading
            align="center"
            label="05 / DIRECT INTAKE"
            title="Your Journey Starts Here."
            accentText="Starts Here."
            subtitle="Every great journey begins with a conversation. Tell us about your ambitions and let’s explore what the future could look like."
          />
        </div>

        {/* Executive Direct Contact Hub (No Form — Pure Elite Agency Discretion) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Card 1: Direct Confidential Email */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group p-6 sm:p-8 border border-white/[0.1] bg-[#121212] hover:border-[#C8A45D]/50 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="p-3 border border-white/10 bg-[#181818] group-hover:border-[#C8A45D]/40 transition-colors">
                  <Mail className="w-5 h-5 text-[#C8A45D]" />
                </div>
                <span className="text-[10px] font-display uppercase tracking-widest text-[#C8A45D] font-bold">
                  DIRECT DESK
                </span>
              </div>

              <div>
                <span className="text-xs font-display uppercase tracking-wider text-[#A3A3A3] font-semibold block">
                  Confidential Enquiries
                </span>
                <h3 className="text-xl font-display uppercase tracking-tight text-white font-bold mt-1">
                  Agency Email
                </h3>
              </div>

              <p className="text-xs text-[#A3A3A3] font-light leading-relaxed">
                Direct communication with agency directorship regarding player representation, trials, and career guidance.
              </p>
            </div>

            <div className="pt-8">
              <Button
                variant="gold"
                size="md"
                href={`mailto:${siteConfig.contact.email}?subject=Confidential%20Career%20Enquiry%20-%20DEG`}
                className="w-full"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Send Direct Email
              </Button>
              <span className="text-[11px] text-white/50 block text-center mt-2.5 font-light">
                {siteConfig.contact.email}
              </span>
            </div>
          </motion.div>

          {/* Card 2: Official Instagram (Sole Social Channel) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group p-6 sm:p-8 border border-white/[0.1] bg-[#121212] hover:border-[#C8A45D]/50 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="p-3 border border-white/10 bg-[#181818] group-hover:border-[#C8A45D]/40 transition-colors">
                  <InstagramIcon className="w-5 h-5 text-[#C8A45D]" />
                </div>
                <span className="text-[10px] font-display uppercase tracking-widest text-[#C8A45D] font-bold">
                  OFFICIAL SOCIAL
                </span>
              </div>

              <div>
                <span className="text-xs font-display uppercase tracking-wider text-[#A3A3A3] font-semibold block">
                  Follow Our Journey
                </span>
                <h3 className="text-xl font-display uppercase tracking-tight text-white font-bold mt-1">
                  Instagram
                </h3>
              </div>

              <p className="text-xs text-[#A3A3A3] font-light leading-relaxed">
                Explore matchday insights, player development updates, and direct messaging on our official Instagram page.
              </p>
            </div>

            <div className="pt-8">
              <Button
                variant="outline"
                size="md"
                href={siteConfig.contact.instagramUrl}
                isExternal
                className="w-full group-hover:border-[#C8A45D]"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Connect on Instagram
              </Button>
              <span className="text-[11px] text-white/50 block text-center mt-2.5 font-light">
                {siteConfig.contact.instagramHandle}
              </span>
            </div>
          </motion.div>

          {/* Card 3: Direct Representation Line */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group p-6 sm:p-8 border border-white/[0.1] bg-[#121212] hover:border-[#C8A45D]/50 transition-all duration-500 flex flex-col justify-between md:col-span-2 lg:col-span-1"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="p-3 border border-white/10 bg-[#181818] group-hover:border-[#C8A45D]/40 transition-colors">
                  <Phone className="w-5 h-5 text-[#C8A45D]" />
                </div>
                <span className="text-[10px] font-display uppercase tracking-widest text-[#C8A45D] font-bold">
                  TELEPHONE
                </span>
              </div>

              <div>
                <span className="text-xs font-display uppercase tracking-wider text-[#A3A3A3] font-semibold block">
                  Direct Line
                </span>
                <h3 className="text-xl font-display uppercase tracking-tight text-white font-bold mt-1">
                  Representation Desk
                </h3>
              </div>

              <p className="text-xs text-[#A3A3A3] font-light leading-relaxed">
                Direct phone consultations for active professional players, club scouts, and authorized sporting directors.
              </p>
            </div>

            <div className="pt-8">
              <Button
                variant="outline"
                size="md"
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="w-full group-hover:border-[#C8A45D]"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Call Representation Desk
              </Button>
              <span className="text-[11px] text-white/50 block text-center mt-2.5 font-light">
                {siteConfig.contact.phone}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Global Operations & Discretion Protocol Banner */}
        <div className="mt-12 p-6 border border-white/[0.08] bg-[#0d0d0d] max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-[#C8A45D] shrink-0" />
            <div>
              <span className="text-xs font-display uppercase tracking-wider text-white font-bold block">
                {siteConfig.location.country} • {siteConfig.location.scope}
              </span>
              <span className="text-xs text-[#A3A3A3] font-light">
                Representing footballers across domestic divisions and global leagues.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#C8A45D] font-medium shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>Strict Client Confidentiality</span>
          </div>
        </div>
      </div>
    </section>
  );
}
