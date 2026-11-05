"use client";

import React from "react";
import { ArrowUp, Globe, Mail, Phone } from "lucide-react";
import { InstagramIcon } from "@/src/components/ui/InstagramIcon";
import { siteConfig } from "@/src/config/site";
import { scrollToSection } from "@/src/lib/utils";
import { Logo } from "@/src/components/ui/Logo";

export function Footer() {
  const currentYear = 2026;

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#14161A] border-t border-white/[0.08] text-[#B4B8BF] pt-20 pb-12 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/[0.06]">
          {/* Col 1 & 2: Brand Identity & Vision */}
          <div className="lg:col-span-2 space-y-6">
            <Logo />
            <p className="text-sm font-light leading-relaxed max-w-sm text-[#B4B8BF]">
              {siteConfig.name} is a premier international football agency operating from the United Kingdom to create meaningful career pathways for exceptional talent across worldwide football.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-[0.24em] text-[#C8A45D] font-display font-bold block">
                CORE PHILOSOPHY
              </span>
              <p className="text-xs text-white/90 font-light mt-1 italic">
                {siteConfig.quotes.closing}
              </p>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.26em] text-white font-display font-bold block">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="hover:text-[#C8A45D] transition-colors uppercase font-display tracking-widest inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Instagram Social */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.26em] text-white font-display font-bold block">
              AGENCY DESK
            </span>
            <ul className="space-y-3 text-xs font-light">
              <li className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span className="font-display uppercase tracking-wider text-white">
                  {siteConfig.location.country} • {siteConfig.location.scope}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <InstagramIcon className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C8A45D] transition-colors font-medium flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <span className="text-white/40 font-mono text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#868A92]">
          <div>
            <p>
              © {currentYear} {siteConfig.name}. All rights reserved. United Kingdom.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70 font-display font-bold">
              {siteConfig.brandStatements[0]}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
