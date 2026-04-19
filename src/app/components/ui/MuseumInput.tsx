import { useState } from "react";
import { cn } from "./utils";

interface MuseumInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  multiline?: boolean;
  type?: string;
  rows?: number;
  className?: string;
  id?: string;
}

export function MuseumInput({
  label,
  value,
  onChange,
  error,
  multiline = false,
  type = "text",
  rows = 4,
  className,
  id,
}: MuseumInputProps) {
  const [focused, setFocused] = useState(false);
  const inputId = id ?? label;

  // Date inputs always show browser chrome, so the label must always float
  const isFloating = type === "date" ? true : focused || value.length > 0;
  const hasError = Boolean(error);

  const baseWrapper = cn(
    "relative w-full border-[3px] transition-colors",
    hasError
      ? "border-red-600 bg-white"
      : focused
      ? "border-black bg-[#FEFCE8]"
      : value.length > 0
      ? "border-black bg-white"
      : "border-black bg-white hover:bg-[#FEFCE8]",
    className
  );

  const labelClass = cn(
    "absolute left-[14px] transition-all duration-150 pointer-events-none select-none font-['Montserrat',sans-serif]",
    isFloating
      ? "top-[6px] text-[11px] leading-none"
      : "top-1/2 -translate-y-1/2 text-[16px]",
    hasError
      ? "text-red-600 font-bold"
      : value.length > 0 && !focused
      ? "text-black font-bold"
      : "text-[#6b6b6b] font-normal"
  );

  const inputClass = cn(
    "w-full bg-transparent outline-none font-['Montserrat',sans-serif] text-[16px] px-[14px] resize-none",
    isFloating ? "pt-[22px] pb-[8px]" : "py-[14px]",
    hasError ? "text-red-600 font-bold" : value.length > 0 ? "text-black font-bold" : "text-black"
  );

  return (
    <div className="w-full">
      <div className={baseWrapper}>
        <label htmlFor={inputId} className={labelClass}>
          {label}
        </label>
        {multiline ? (
          <textarea
            id={inputId}
            rows={rows}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={inputClass}
          />
        ) : (
          <input
            id={inputId}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={inputClass}
          />
        )}
      </div>
      {hasError && (
        <p className="mt-[4px] text-[12px] font-['Montserrat',sans-serif] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
