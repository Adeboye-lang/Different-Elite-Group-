import Link from "next/link";
import Image from "next/image";
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
      {/* Official DEG monogram, recoloured to the site gold */}
      <Image
        src="/logo-gold.png"
        alt=""
        width={530}
        height={632}
        priority
        className="h-11 lg:h-12 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
      />

      <div className="flex flex-col leading-none">
        <span className="font-display font-extrabold uppercase text-white text-base sm:text-lg lg:text-xl tracking-[0.12em]">
          {siteConfig.name.split(" ").slice(0, 2).join(" ")}
          <span className="text-[#C8A45D]"> {siteConfig.name.split(" ").slice(2).join(" ")}</span>
        </span>
        {showSubtitle && (
          <span className="text-[8.5px] uppercase tracking-[0.32em] text-[#868A92] font-medium mt-1.5 flex items-center gap-1.5">
            <span>Football Agency</span>
            <span className="w-1 h-1 rounded-full bg-[#45AAA1]" />
            <span>London, UK</span>
          </span>
        )}
      </div>
    </Link>
  );
}
