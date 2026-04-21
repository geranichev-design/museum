import { useState } from "react";
import { ImageLightbox } from "./ImageLightbox";

// ── Placeholder ────────────────────────────────────────────────────────────
function AtomPlaceholder() {
  return (
    <div className="w-full h-full bg-[#d9d9d9] flex items-center justify-center">
      <div className="w-[48%] h-[48%]">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <ellipse cx="50" cy="50" rx="47" ry="17" stroke="black" strokeWidth="2.5" />
          <ellipse cx="50" cy="50" rx="47" ry="17" stroke="black" strokeWidth="2.5" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="47" ry="17" stroke="black" strokeWidth="2.5" transform="rotate(-60 50 50)" />
          <circle cx="50" cy="50" r="7" fill="black" />
        </svg>
      </div>
    </div>
  );
}

// ── Types ──────────────────────────────────────────────────────────────────
export interface GalleryImage {
  src: string | null;
  alt?: string;
}

type ImageInput = string | GalleryImage;

function normalize(img: ImageInput): GalleryImage {
  return typeof img === "string" ? { src: img } : img;
}

export interface GalleryProps {
  images: ImageInput[];
  /** Tailwind aspect class for the main frame, e.g. "aspect-[3/2]" */
  aspectClass?: string;
  /** Row of up to 4 thumbnail buttons below the main image */
  showThumbnails?: boolean;
  /** Thick black border around the main image */
  mainBorder?: boolean;
  /** Click main image to open fullscreen ImageLightbox */
  lightbox?: boolean;
}

// ── Component ──────────────────────────────────────────────────────────────
export function Gallery({
  images,
  aspectClass = "aspect-[3/2]",
  showThumbnails = false,
  mainBorder = false,
  lightbox = true,
}: GalleryProps) {
  const normalized = images.map(normalize);
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(normalized.length - 1, i + 1));

  const current = normalized[active] ?? { src: null };

  // Lightbox only shows images that have a real src
  const lightboxSrcs = normalized
    .map((img) => img.src)
    .filter((s): s is string => s !== null);

  const lightboxIdx = current.src ? lightboxSrcs.indexOf(current.src) : -1;

  const handleLightboxSelect = (lbIdx: number) => {
    const targetSrc = lightboxSrcs[lbIdx];
    const mainIdx = normalized.findIndex((img) => img.src === targetSrc);
    if (mainIdx >= 0) setActive(mainIdx);
  };

  return (
    <div className="flex flex-col gap-[12px]">
      {/* Main image */}
      <div
        className={[
          aspectClass,
          "relative overflow-hidden",
          mainBorder ? "border-[6px] border-black" : "",
          lightbox && current.src ? "cursor-zoom-in" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => { if (lightbox && current.src) setLightboxOpen(true); }}
      >
        {current.src ? (
          <img
            key={active}
            src={current.src}
            alt={current.alt ?? ""}
            className="w-full h-full object-cover"
          />
        ) : (
          <AtomPlaceholder />
        )}
      </div>

      {/* Thumbnails */}
      {showThumbnails && normalized.length > 1 && (
        <div className="flex gap-[8px]">
          {normalized.slice(0, 4).map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-1 aspect-square relative overflow-hidden border-[3px] transition-colors ${
                active === i ? "border-black" : "border-[#d4d4d4]"
              }`}
            >
              {img.src ? (
                <img src={img.src} alt={img.alt ?? ""} className="w-full h-full object-cover" />
              ) : (
                <AtomPlaceholder />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Arrow + dot navigation */}
      {normalized.length > 1 && (
        <div className="flex items-center justify-between">
          <button
            onClick={prev}
            disabled={active === 0}
            className="flex items-center justify-center w-[44px] h-[44px] border-2 border-black disabled:opacity-30 hover:bg-[#f5f5f5] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 5L7 10L12 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-[8px]">
            {normalized.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{ width: active === i ? 14 : 9, height: active === i ? 14 : 9 }}
                className={`transition-all ${active === i ? "bg-black" : "bg-[#d4d4d4]"}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={active === normalized.length - 1}
            className="flex items-center justify-center w-[44px] h-[44px] border-2 border-black disabled:opacity-30 hover:bg-[#f5f5f5] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 5L13 10L8 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && lightboxOpen && lightboxSrcs.length > 0 && (
        <ImageLightbox
          images={lightboxSrcs}
          currentIndex={Math.max(0, lightboxIdx)}
          onClose={() => setLightboxOpen(false)}
          onSelect={handleLightboxSelect}
        />
      )}
    </div>
  );
}
