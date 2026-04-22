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
  icon?: "arrow" | "back-arrow" | "search";
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10.6061 21.18L14.0752 24L24.0001 12L14.0752 0L10.6061 2.82L18.3755 12L10.6061 21.18Z" />
      <path d="M0 21.18L3.46903 24L13.394 12L3.46903 0L0 2.82L7.76937 12L0 21.18Z" />
    </svg>
  );
}

function BackDoubleArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.394 21.18L9.9249 24L0 12L9.9249 0L13.394 2.82L5.62465 12L13.394 21.18Z" />
      <path d="M24 21.18L20.531 24L10.606 12L20.531 0L24 2.82L16.2306 12L24 21.18Z" />
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
    "bg-[#DFBE22] text-black border-[#DFBE22] hover:bg-[#C9AB1F] hover:border-[#C9AB1F] active:bg-black active:text-[#DFBE22] active:border-black",
  "outlined-dark":
    "bg-transparent text-[#DFBE22] border-[#DFBE22] hover:bg-[#DFBE22] hover:text-black active:bg-black active:text-[#DFBE22] active:border-black",
  "solid-light":
    "bg-black text-white border-black hover:bg-[#DFBE22] hover:text-black hover:border-[#DFBE22] active:bg-black active:text-[#DFBE22] active:border-black",
  "outlined-light":
    "bg-transparent text-black border-black hover:bg-[#DFBE22] hover:text-black hover:border-[#DFBE22] active:bg-black active:text-[#DFBE22] active:border-[#DFBE22]",
  // Ghost: no visible border/bg by default; gains fill on hover, black on push
  "ghost-light":
    "bg-transparent text-black border-transparent hover:bg-[#DFBE22] hover:text-black hover:border-[#DFBE22] active:bg-black active:text-[#DFBE22] active:border-black",
  "ghost-dark":
    "bg-transparent text-[#DFBE22] border-transparent hover:bg-[#DFBE22] hover:text-black hover:border-[#DFBE22] active:bg-black active:text-[#DFBE22] active:border-black",
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
    icon === "search"
      ? <SearchIcon />
      : icon === "arrow"
        ? <DoubleArrowIcon />
        : icon === "back-arrow"
          ? <BackDoubleArrowIcon />
          : null;

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

  if (to) return <Link to={to} onClick={onClick} className={cls}>{content}</Link>;
  if (href) return <a href={href} onClick={onClick} className={cls}>{content}</a>;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {content}
    </button>
  );
}
