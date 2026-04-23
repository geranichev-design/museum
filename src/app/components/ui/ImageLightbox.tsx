import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onSelect: (index: number) => void;
}

export function ImageLightbox({ images, currentIndex, onClose, onSelect }: ImageLightboxProps) {
  const prev = useCallback(() => {
    if (currentIndex > 0) onSelect(currentIndex - 1);
  }, [currentIndex, onSelect]);

  const next = useCallback(() => {
    if (currentIndex < images.length - 1) onSelect(currentIndex + 1);
  }, [currentIndex, images.length, onSelect]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "rgba(74, 74, 74, 0.93)" }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-[24px] right-[24px] text-white hover:text-[#dfbe22] transition-colors z-10"
        aria-label="Закрити"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M6 6L26 26M26 6L6 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Main image */}
      <div
        className="relative flex items-center justify-center w-full px-[80px]"
        style={{ maxHeight: "calc(100vh - 180px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt=""
          className="max-w-full object-contain"
          style={{ maxHeight: "calc(100vh - 180px)", maxWidth: "960px" }}
        />
      </div>

      {/* Thumbnails strip */}
      <div
        className="flex items-center gap-[16px] mt-[24px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev arrow */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="flex items-center justify-center w-[44px] h-[44px] border-2 border-white text-white disabled:opacity-30 hover:border-[#dfbe22] hover:text-[#dfbe22] transition-colors shrink-0"
        aria-label="Попереднє"
      >
          <img
            src={encodeURI("/icons/1arrow_left_blak.svg")}
            alt=""
            aria-hidden="true"
            className="block size-[20px] shrink-0 object-contain"
          />
        </button>

        {/* Thumbnails */}
        <div className="flex items-center gap-[8px]">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className="shrink-0 transition-all"
              style={{
                width: 64,
                height: 64,
                outline: i === currentIndex ? "3px solid #dfbe22" : "2px solid transparent",
                outlineOffset: "2px",
              }}
              aria-label={`Зображення ${i + 1}`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          disabled={currentIndex === images.length - 1}
          className="flex items-center justify-center w-[44px] h-[44px] border-2 border-white text-white disabled:opacity-30 hover:border-[#dfbe22] hover:text-[#dfbe22] transition-colors shrink-0"
        aria-label="Наступне"
      >
          <img
            src={encodeURI("/icons/1arrow_right_blak.svg")}
            alt=""
            aria-hidden="true"
            className="block size-[20px] shrink-0 object-contain"
          />
        </button>
      </div>
    </div>,
    document.body,
  );
}
