import Link from "next/link";
import { siteConfig } from "@/src/config/site";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export function Logo({ className = "", showSubtitle = true }: LogoProps) {
  return (
    <Link
      href="#hero"
      className={`group flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`}
      aria-label={`${siteConfig.name} Home`}
    >
      {/* Club-style crest with gold & green harmony */}
      <svg
        viewBox="0 0 40 46"
        className="w-9 h-10 lg:w-10 lg:h-11 shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="crestBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8A45D" />
            <stop offset="60%" stopColor="#2D7A52" />
            <stop offset="100%" stopColor="#235F3F" />
          </linearGradient>
        </defs>

        <path
          d="M20 1.5 L38 7 V22 C38 33 30 40.5 20 44.5 C10 40.5 2 33 2 22 V7 Z"
          fill="#16181C"
          stroke="url(#crestBorderGrad)"
          strokeWidth="1.5"
        />
        <path
          d="M20 5.5 L34.5 10 V22 C34.5 30.8 28.2 37 20 40.6 C11.8 37 5.5 30.8 5.5 22 V10 Z"
          fill="none"
          stroke="#2D7A52"
          strokeOpacity="0.45"
          strokeWidth="0.75"
        />
        <text
          x="20"
          y="26.5"
          textAnchor="middle"
          fill="#F5F5F5"
          fontSize="11"
          fontWeight="800"
          letterSpacing="0.5"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {siteConfig.shortName}
        </text>
        <circle cx="20" cy="33" r="1.5" fill="#2D7A52" />
      </svg>

      <div className="flex flex-col leading-none">
        <span className="font-display font-extrabold uppercase text-white text-base sm:text-lg lg:text-xl tracking-[0.12em]">
          {siteConfig.name.split(" ").slice(0, 2).join(" ")}
          <span className="text-[#C8A45D]"> {siteConfig.name.split(" ").slice(2).join(" ")}</span>
        </span>
        {showSubtitle && (
          <span className="text-[8.5px] uppercase tracking-[0.32em] text-[#868A92] font-medium mt-1.5 flex items-center gap-1.5">
            <span>Football Agency</span>
            <span className="w-1 h-1 rounded-full bg-[#2D7A52]" />
            <span>London, UK</span>
          </span>
        )}
      </div>
    </Link>
  );
}
