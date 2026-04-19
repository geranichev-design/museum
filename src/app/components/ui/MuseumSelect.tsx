import React, { useState, useRef, useEffect } from "react";
import { cn } from "./utils";

export interface MuseumSelectOption {
  value: string;
  label: string;
}

export interface MuseumSelectProps {
  options: MuseumSelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
  bold?: boolean;
  className?: string;
}

export function MuseumSelect({
  options,
  value,
  onChange,
  placeholder = "Оберіть варіант",
  error,
  bold = false,
  className,
}: MuseumSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hasError = Boolean(error);

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "w-full flex items-center justify-between px-4 min-h-[56px]",
          "border-[3px] bg-white text-left transition-colors",
          "font-['Montserrat',sans-serif] text-[16px] leading-normal",
          "hover:bg-[#FEFCE8] focus:outline-none",
          hasError ? "border-red-600 text-red-600" : "border-black text-black",
          (selectedOption || bold) ? "font-bold" : "font-normal",
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        {/* Chevron icon */}
        <span className={cn("shrink-0 ml-3 transition-transform duration-200", isOpen && "-scale-y-100")}>
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L12 12L22 2"
              stroke={hasError ? "#dc2626" : "black"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Error message */}
      {hasError && (
        <p className="mt-1 font-['Montserrat',sans-serif] text-[14px] text-red-600 font-normal">
          {error}
        </p>
      )}

      {/* Dropdown list */}
      {isOpen && (
        <ul
          role="listbox"
          className="absolute top-full left-0 right-0 z-50 bg-white border-[3px] border-black border-t-0 max-h-[320px] overflow-y-auto"
        >
          {options.map((option) => (
            <li key={option.value} role="option" aria-selected={option.value === value}>
              <button
                type="button"
                onClick={() => {
                  onChange?.(option.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full text-left px-4 py-4",
                  "font-['Montserrat',sans-serif] text-[16px] font-bold text-black",
                  "transition-colors",
                  option.value === value ? "bg-[#FEFCE8]" : "hover:bg-[#FEFCE8]",
                )}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
