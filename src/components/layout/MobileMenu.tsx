"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Globe, Mail, Phone } from "lucide-react";
import { InstagramIcon } from "@/src/components/ui/InstagramIcon";
import { siteConfig } from "@/src/config/site";
import { scrollToSection } from "@/src/lib/utils";
import { Logo } from "@/src/components/ui/Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-[#14161A] flex flex-col justify-between p-6 md:p-10 lg:hidden"
        >
          {/* Header row inside mobile menu */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <Logo showSubtitle={false} />
            <button
              onClick={onClose}
              className="p-2.5 rounded-none border border-white/10 text-white hover:text-[#C8A45D] hover:border-[#C8A45D]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links with Staggered Entrance */}
          <nav className="flex flex-col space-y-3 my-auto py-6">
            {siteConfig.navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * index, duration: 0.3 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    scrollToSection(e, item.href);
                    onClose();
                  }}
                  className="group flex items-baseline justify-between py-2 text-3xl font-display font-bold uppercase tracking-wide text-[#F5F5F5] hover:text-[#C8A45D] transition-colors border-b border-white/[0.04]"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-xs text-[#C8A45D] tracking-widest font-mono">
                      0{index + 1}
                    </span>
                    <span>{item.label}</span>
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#C8A45D] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Footer Information */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <div className="flex flex-col gap-2.5 text-xs text-[#B4B8BF] font-light">
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#C8A45D]" />
                <span className="font-display uppercase tracking-wider text-white">
                  {siteConfig.location.country} • {siteConfig.location.scope}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8A45D]" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A45D]" />
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <InstagramIcon className="w-4 h-4 text-[#C8A45D]" />
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C8A45D] transition-colors font-medium"
                >
                  Instagram: {siteConfig.contact.instagramHandle}
                </a>
              </div>
            </div>

            <p className="text-[10px] uppercase tracking-[0.2em] text-[#868A92] font-display font-medium pt-2">
              {siteConfig.brandStatements[0]}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
