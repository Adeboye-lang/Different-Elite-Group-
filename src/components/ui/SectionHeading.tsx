import React from "react";
import { cn } from "@/src/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  accentText?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className,
  accentText,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  const renderTitle = () => {
    if (!accentText || !title.includes(accentText)) {
      return title;
    }
    const parts = title.split(accentText);
    return (
      <>
        {parts[0]}
        <span className="text-[#C8A45D]">{accentText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={cn(
        "flex flex-col space-y-4 max-w-4xl",
        isCentered ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
    >
      {label && (
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#45AAA1]" />
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#868A92] font-display font-semibold">
            {label}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#F5F5F5] leading-[0.96] uppercase">
        {renderTitle()}
      </h2>

      {subtitle && (
        <p className="text-sm md:text-base lg:text-lg text-[#B4B8BF] leading-relaxed max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
