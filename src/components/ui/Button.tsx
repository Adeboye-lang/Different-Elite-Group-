"use client";

import React from "react";
import Link from "next/link";
import { cn, scrollToSection } from "@/src/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isExternal?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  icon,
  iconPosition = "right",
  isExternal = false,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-[0.12em] sm:tracking-[0.16em] uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D] disabled:opacity-50 disabled:pointer-events-none select-none relative group overflow-hidden cursor-pointer";

  const sizeStyles = {
    sm: "text-[10px] py-2 px-4 gap-2",
    md: "text-xs py-3 px-6 gap-2.5",
    lg: "text-xs py-4 px-8 gap-3",
  };

  const variantStyles = {
    primary:
      "bg-[#22252A] text-[#F5F5F5] border border-[#41454C] hover:border-[#C8A45D] hover:bg-[#272A30]",
    accent: "bg-[#C8A45D] text-[#14161A] font-semibold hover:bg-[#D9B978]",
    outline:
      "bg-transparent text-[#F5F5F5] border border-white/15 hover:border-white/40 hover:bg-white/[0.04]",
    ghost:
      "bg-transparent text-[#B4B8BF] hover:text-[#F5F5F5] p-0 tracking-[0.18em] border-none shadow-none",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a
          href={href}
          onClick={(e) => {
            scrollToSection(e, href);
            if (onClick) onClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
          }}
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={combinedClasses}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
