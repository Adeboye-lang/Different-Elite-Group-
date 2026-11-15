"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, ArrowUpRight, ShieldCheck } from "lucide-react";
import { InstagramIcon } from "@/src/components/ui/InstagramIcon";
import { siteConfig } from "@/src/config/site";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

export function Contact() {
  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      sub: "Confidential Enquiries",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}?subject=Confidential%20Career%20Enquiry%20-%20DEG`,
      cta: "Send Email",
      accentColor: "text-[#C8A45D]",
      hoverBorderColor: "hover:border-l-[#C8A45D]",
    },
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      label: "Instagram",
      sub: "Official Channel",
      value: siteConfig.contact.instagramHandle,
      href: siteConfig.contact.instagramUrl,
      cta: "Follow Us",
      accentColor: "text-[#2D7A52]",
      hoverBorderColor: "hover:border-l-[#2D7A52]",
      isExternal: true,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      sub: "Direct Representation Line",
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`,
      cta: "Call Us",
      accentColor: "text-[#C8A45D]",
      hoverBorderColor: "hover:border-l-[#C8A45D]",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#16181C] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <SectionHeading
            align="center"
            label="05 / DIRECT INTAKE"
            title="Your Journey Starts Here."
            accentText="Starts Here."
            subtitle="Every great journey begins with a conversation. Tell us about your ambitions and let's explore what the future could look like."
          />
        </div>

        {/* Contact rows — open editorial layout, no boxes */}
        <div className="max-w-3xl mx-auto">
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group flex items-center justify-between py-6 border-b border-white/[0.07] border-l-2 border-l-transparent pl-5 transition-all duration-200 hover:bg-white/[0.015] ${item.hoverBorderColor}`}
            >
              <div className="flex items-center gap-5">
                <span className={`${item.accentColor} transition-transform duration-200 group-hover:scale-105`}>
                  {item.icon}
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#868A92] font-display font-semibold block">
                    {item.sub}
                  </span>
                  <span className="text-lg font-display font-bold uppercase tracking-wide text-white transition-colors">
                    {item.label}
                  </span>
                  <span className="text-xs text-[#B4B8BF] font-light block mt-0.5">
                    {item.value}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs uppercase tracking-widest font-display font-semibold text-[#868A92] group-hover:text-white transition-colors hidden sm:block">
                  {item.cta}
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#C8A45D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left border-t border-white/[0.06] pt-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-[#2D7A52] shrink-0" />
            <div>
              <span className="text-xs font-display uppercase tracking-wider text-white font-bold block">
                {siteConfig.location.country} • {siteConfig.location.scope}
              </span>
              <span className="text-xs text-[#B4B8BF] font-light">
                Representing footballers across domestic divisions and global leagues.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#2D7A52] font-medium shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>Strict Client Confidentiality</span>
          </div>
        </div>
      </div>
    </section>
  );
}
