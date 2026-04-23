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
    <img
      src={ICON_SOURCES.arrow}
      alt=""
      aria-hidden="true"
      className="block size-[18px] shrink-0 object-contain"
    />
  );
}

function BackDoubleArrowIcon() {
  return (
    <img
      src={ICON_SOURCES.backArrow}
      alt=""
      aria-hidden="true"
      className="block size-[18px] shrink-0 object-contain"
    />
  );
}

function SearchIcon() {
  return (
    <img
      src={ICON_SOURCES.search}
      alt=""
      aria-hidden="true"
      className="block size-[20px] shrink-0 object-contain"
    />
  );
}

const ICON_SOURCES = {
  arrow: encodeURI("/icons/2arrow_right_blak.svg"),
  backArrow: encodeURI("/icons/2arrow_left_blak.svg"),
  search: encodeURI("/icons/Property 1=search, Property 2=24.svg"),
} as const;

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
