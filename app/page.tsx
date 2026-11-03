import React from "react";
import { siteConfig } from "@/src/config/site";
import { Hero } from "@/src/components/sections/Hero";
import { About } from "@/src/components/sections/About";
import { Mission } from "@/src/components/sections/Mission";
import { Services } from "@/src/components/sections/Services";
import { Approach } from "@/src/components/sections/Approach";
import { BrandStatement } from "@/src/components/sections/BrandStatement";
import { Contact } from "@/src/components/sections/Contact";
import { PathwayTicker } from "@/src/components/ui/PathwayTicker";

export default function HomePage() {
  // Structured Data Schema for Football Agency / Sports Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: "https://differentelitegroup.com",
    logo: "https://differentelitegroup.com/images/hero-cinematic.jpg",
    description: siteConfig.tagline,
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      email: siteConfig.contact.email,
      availableLanguage: ["English"],
    },
    slogan: siteConfig.tagline,
    sameAs: [siteConfig.contact.instagramUrl],
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Complete Single-Page Continuous Landing Experience */}
      <Hero />
      <PathwayTicker />
      <About />
      <Mission />
      <Services />
      <Approach />
      <BrandStatement />
      <Contact />
    </>
  );
}
