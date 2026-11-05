import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/src/config/site";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#14161A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${siteConfig.name} (${siteConfig.shortName}) | International Football Agency`,
  description:
    "Different Elite Group (DEG) is a premier UK-based football agency operating worldwide. Providing elite player representation, holistic career development, and bespoke club pathways.",
  keywords: [
    "Different Elite Group",
    "DEG",
    "Football Agency",
    "Sports Management",
    "UK Football Agency",
    "Player Representation",
    "Football Management",
    "Elite Football Pathways",
    "Premier League Agents",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://differentelitegroup.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | More Than an Agency. A Pathway to Your Future.`,
    description:
      "Premier UK-based football management agency operating worldwide. Player representation, development, club pathways and holistic career stewardship.",
    url: "https://differentelitegroup.com",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/hero-cinematic.jpg",
        width: 1600,
        height: 900,
        alt: `${siteConfig.name} - Premier Football Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | International Football Agency`,
    description:
      "Believe in Your Potential. Build Your Future. Become Elite. International football management operating from the United Kingdom.",
    images: ["/images/hero-cinematic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${plusJakartaSans.variable} scroll-smooth antialiased bg-[#14161A] text-[#F5F5F5]`}
    >
      <body className="min-h-screen flex flex-col font-sans selection:bg-[#C8A45D]/20 selection:text-white bg-[#14161A] text-[#F5F5F5] overflow-x-hidden">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#C8A45D] text-[#14161A] font-semibold px-4 py-2 text-xs uppercase tracking-widest outline-none"
        >
          Skip to main content
        </a>

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
