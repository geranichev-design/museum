import { Link } from "react-router";
import type { ReactNode } from "react";

type Variant = "solid" | "outlined" | "ghost";
type Theme = "dark" | "light";
type FontStyle = "oswald" | "montserrat";

export interface MuseumButtonProps {
  children?: ReactNode;
  variant?: Variant;
  theme?: Theme;
  font?: FontStyle;
  icon?: "arrow" | "search";
  iconPosition?: "left" | "right";
  iconOnly?: boolean;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

function DoubleArrowIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
      <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 1L15 7L9 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M16 16L21.5 21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const COLOR_STYLES: Record<`${Variant}-${Theme}`, string> = {
  "solid-dark":
    "bg-[#F8B700] text-black border-[#F8B700] hover:bg-[#e0a800] hover:border-[#e0a800] active:bg-black active:text-[#F8B700] active:border-black",
  "outlined-dark":
    "bg-transparent text-[#F8B700] border-[#F8B700] hover:bg-[#F8B700] hover:text-black active:bg-black active:text-[#F8B700] active:border-black",
  "solid-light":
    "bg-black text-white border-black hover:bg-[#F8B700] hover:text-black hover:border-[#F8B700] active:bg-black active:text-[#F8B700] active:border-black",
  "outlined-light":
    "bg-transparent text-black border-black hover:bg-[#F8B700] hover:text-black hover:border-[#F8B700] active:bg-black active:text-[#F8B700] active:border-[#F8B700]",
  // Ghost: no visible border/bg by default; gains fill on hover, black on push
  "ghost-light":
    "bg-transparent text-black border-transparent hover:bg-[#F8B700] hover:text-black hover:border-[#F8B700] active:bg-black active:text-[#F8B700] active:border-black",
  "ghost-dark":
    "bg-transparent text-[#F8B700] border-transparent hover:bg-[#F8B700] hover:text-black hover:border-[#F8B700] active:bg-black active:text-[#F8B700] active:border-black",
};

const FONT_STYLES: Record<FontStyle, string> = {
  oswald: "font-['Oswald',sans-serif] font-medium text-[20px] leading-[24px] uppercase",
  montserrat: "font-['Montserrat',sans-serif] font-semibold text-[16px] leading-normal",
};

export function MuseumButton({
  children,
  variant = "solid",
  theme = "dark",
  font = "oswald",
  icon,
  iconPosition = "right",
  iconOnly = false,
  to,
  href,
  onClick,
  type = "button",
  disabled,
  className = "",
}: MuseumButtonProps) {
  const iconEl =
    icon === "search" ? <SearchIcon /> : icon === "arrow" ? <DoubleArrowIcon /> : null;

  const cls = [
    "inline-flex items-center justify-center gap-[8px] border-[3px] transition-colors cursor-pointer",
    iconOnly ? "p-[10px]" : "px-[16px] py-[8px]",
    FONT_STYLES[font],
    COLOR_STYLES[`${variant}-${theme}`],
    disabled ? "opacity-40 pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = iconOnly ? (
    iconEl
  ) : (
    <>
      {icon && iconPosition === "left" && iconEl}
      {children}
      {icon && iconPosition === "right" && iconEl}
    </>
  );

  if (to) return <Link to={to} className={cls}>{content}</Link>;
  if (href) return <a href={href} className={cls}>{content}</a>;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {content}
    </button>
  );
}
