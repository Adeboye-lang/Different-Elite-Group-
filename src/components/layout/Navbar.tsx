"use client";

import React, { useState, useEffect } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { scrollToSection } from "@/src/lib/utils";
import { Logo } from "@/src/components/ui/Logo";
import { Button } from "@/src/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scrollspy
      const sections = siteConfig.navItems.map((item) =>
        item.href.replace("#", "")
      );

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md py-4 border-b border-white/[0.08] shadow-[0_12px_35px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-6 border-b border-white/[0.05]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Replaceable DEG Wordmark Logo */}
            <Logo />

            {/* Center: Desktop Navigation Links (FC/PL bold uppercase) */}
            <nav className="hidden lg:flex items-center space-x-9">
              {siteConfig.navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative text-xs uppercase font-display tracking-[0.22em] transition-all duration-300 py-1 ${
                      isActive
                        ? "text-white font-bold"
                        : "text-[#A3A3A3] hover:text-white font-medium"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C8A45D] shadow-[0_0_8px_#C8A45D]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: Quick Enquiry Button & Mobile Hamburger */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <Button
                  variant="gold"
                  size="sm"
                  href="#contact"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Direct Enquiry
                </Button>
              </div>

              {/* Mobile Menu Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2.5 text-white hover:text-[#C8A45D] border border-white/10 hover:border-[#C8A45D]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
