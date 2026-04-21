import { useState, useEffect } from "react";
import { Gallery } from "../app/components/ui/Gallery";
import { COLLECTION_ITEMS } from "../data/collectionData";
import type { CollectionItem } from "../data/collectionData";

const VISIBLE = 4;

export default function CollectionItemComponent({
  item,
  relatedItems: _relatedItems,
  onBack,
  onRelatedClick,
}: {
  item: CollectionItem;
  relatedItems: CollectionItem[];
  onBack?: () => void;
  onRelatedClick?: (id: string) => void;
}) {
  const allItems = COLLECTION_ITEMS;
  const currentIdx = allItems.findIndex((i) => i.id === item.id);

  const [startIdx, setStartIdx] = useState(() =>
    Math.min(Math.max(0, currentIdx), Math.max(0, allItems.length - VISIBLE))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const idx = allItems.findIndex((i) => i.id === item.id);
    setStartIdx(Math.min(Math.max(0, idx), Math.max(0, allItems.length - VISIBLE)));
  }, [item.id]);

  const visibleItems = allItems.slice(startIdx, startIdx + VISIBLE);
  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + VISIBLE < allItems.length;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1200px] px-[16px] md:px-[24px] py-[32px] md:py-[48px] flex flex-col gap-[48px] md:gap-[64px]">

        {/* Back link */}
        <button
          onClick={onBack}
          className="flex items-center gap-[8px] font-['Oswald',sans-serif] font-medium text-[28px] uppercase text-black hover:opacity-70 self-start leading-none"
        >
          <span className="flex items-center" style={{ letterSpacing: "-0.1em" }}>
            <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
              <path d="M16 4L6 14L16 24" stroke="black" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
            <svg width="22" height="28" viewBox="0 0 22 28" fill="none" className="-ml-[6px]">
              <path d="M16 4L6 14L16 24" stroke="black" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
          </span>
          <span>До колекції</span>
        </button>

        {/* Main layout: gallery + details */}
        <div className="flex flex-col md:flex-row gap-[32px] md:gap-[56px] items-start">

          {/* Left: Gallery */}
          <div className="w-full md:w-[48%] flex-shrink-0">
            <Gallery
              key={item.id}
              images={item.gallery}
              aspectClass="aspect-[11/10]"
              showThumbnails
              mainBorder
              lightbox
            />
          </div>

          {/* Right: Item info */}
          <div className="flex-1 flex flex-col gap-[20px] md:gap-[24px]">
            <span className="bg-[#d4d4d4] font-['Montserrat',sans-serif] font-medium text-[13px] text-black px-[12px] py-[4px] self-start">
              {item.collectionType}
            </span>

            <div className="flex items-start gap-[12px]">
              <div className="bg-[#DFBE22] shrink-0 size-[32px] mt-[4px]" />
              <h1 className="font-['Oswald',sans-serif] font-medium text-[28px] md:text-[36px] text-black uppercase leading-[1.1]">
                {item.title}
              </h1>
            </div>

            {(item.period || item.location) && (
              <div className="flex flex-col gap-[4px]">
                {item.period && (
                  <p className="font-['Montserrat',sans-serif] text-[16px] text-black">{item.period}</p>
                )}
                {item.location && (
                  <p className="font-['Montserrat',sans-serif] text-[16px] text-black">{item.location}</p>
                )}
              </div>
            )}

            <div className="border-b border-[#e0e0e0]" />

            <div className="flex flex-col gap-[16px]">
              {item.description.map((para, i) => (
                <p key={i} className="font-['Montserrat',sans-serif] font-normal text-[16px] text-black leading-[1.65]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Collection carousel */}
        <div className="border-t border-[#e0e0e0] pt-[48px]">
          <div className="flex items-start gap-[8px] md:gap-[16px]">

            {/* Left arrow */}
            <button
              onClick={() => setStartIdx((s) => s - 1)}
              disabled={!canGoLeft}
              className="flex-shrink-0 border-[3px] border-black size-[40px] md:size-[48px] flex items-center justify-center mt-[0px] hover:bg-gray-100 disabled:opacity-20 transition-opacity"
            >
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                <path d="M12 3L4 12L12 21" stroke="black" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" />
              </svg>
            </button>

            {/* Items */}
            <div className="flex-1 grid grid-cols-4 gap-[8px] md:gap-[24px]">
              {visibleItems.map((ci) => {
                const isCurrent = ci.id === item.id;
                return (
                  <div
                    key={ci.id}
                    className={`flex flex-col gap-[8px] md:gap-[12px] ${isCurrent ? "" : "cursor-pointer group"}`}
                    onClick={() => !isCurrent && onRelatedClick?.(ci.id)}
                  >
                    <div
                      className={`aspect-square overflow-hidden relative border-[6px] ${
                        isCurrent ? "border-black" : "border-[#d4d4d4]"
                      }`}
                    >
                      <img
                        src={ci.gallery[0]}
                        alt={ci.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="hidden md:flex flex-col gap-[6px]">
                      <span className="bg-[#d4d4d4] font-['Montserrat',sans-serif] font-medium text-[12px] text-black px-[8px] py-[2px] self-start">
                        {ci.collectionType}
                      </span>
                      <p className={`font-['Oswald',sans-serif] font-medium text-[16px] text-black uppercase leading-[1.2] ${!isCurrent ? "group-hover:underline" : ""}`}>
                        {ci.title}
                      </p>
                      {ci.period && (
                        <p className="font-['Montserrat',sans-serif] font-normal text-[14px] text-black">{ci.period}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => setStartIdx((s) => s + 1)}
              disabled={!canGoRight}
              className="flex-shrink-0 border-[3px] border-black size-[40px] md:size-[48px] flex items-center justify-center hover:bg-gray-100 disabled:opacity-20 transition-opacity"
            >
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                <path d="M4 3L12 12L4 21" stroke="black" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" />
              </svg>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
