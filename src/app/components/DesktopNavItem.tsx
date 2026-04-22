import { Link } from "react-router";
import { cn } from "./ui/utils";

interface DesktopNavItemProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  /** Preset (selected) state: black text on gold #dfbe22 background */
  preset?: boolean;
  /** Disabled/inactive: no page exists yet */
  disabled?: boolean;
  size?: "lg" | "sm";
  /** Show a right-arrow icon after the label */
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Desktop navigation menu item.
 *
 * States:
 * - default  — white text on black background
 * - :hover   — gold text #dfbe22 on black background
 * - :active  — gold text #dfbe22 on black background (click moment)
 * - preset   — black text on gold #dfbe22 background (current page / selected)
 *
 * size="lg"  — Oswald 20px uppercase, for section headings and top-level links
 * size="sm"  — Montserrat 14px, for sub-items within a section
 */
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function DesktopNavItem({
  children,
  to,
  href,
  preset = false,
  disabled = false,
  size = "lg",
  arrow = false,
  className,
  onClick,
}: DesktopNavItemProps) {
  const label = arrow ? (
    <span className="flex items-center gap-[6px]">{children}<ArrowIcon /></span>
  ) : children;

  const classes = cn(
    "block w-full px-[4px] py-[2px]",
    size === "lg"
      ? "font-['Oswald',sans-serif] font-medium text-[20px] leading-[22px] uppercase"
      : "font-['Montserrat',sans-serif] font-normal text-[14px] leading-normal",
    disabled
      ? "text-white/30 cursor-default"
      : preset
      ? "bg-[#dfbe22] text-black transition-colors duration-150 cursor-pointer"
      : "text-white hover:text-[#dfbe22] active:text-[#dfbe22] transition-colors duration-150 cursor-pointer",
    className,
  );

  if (disabled) {
    return <span className={classes}>{label}</span>;
  }

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {label}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {label}
    </button>
  );
}
