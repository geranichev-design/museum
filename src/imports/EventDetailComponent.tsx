import { useEffect } from "react";
// useState removed — Gallery manages its own state
import { TAG_STYLES, type EventRecord } from "../data/eventsData";
import { Gallery } from "../app/components/ui/Gallery";

function AtomIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="50" cy="50" rx="47" ry="17" stroke="black" strokeWidth="2.5" />
      <ellipse cx="50" cy="50" rx="47" ry="17" stroke="black" strokeWidth="2.5" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="47" ry="17" stroke="black" strokeWidth="2.5" transform="rotate(-60 50 50)" />
      <circle cx="50" cy="50" r="7" fill="black" />
    </svg>
  );
}


function RelatedCard({ tags, title, date, onClick }: { tags: string[]; title: string; date: string; onClick?: () => void }) {
  return (
    <div className="flex flex-col gap-[12px] cursor-pointer group" onClick={onClick}>
      <div className="aspect-square bg-[#d9d9d9] flex items-center justify-center relative overflow-hidden">
        <div aria-hidden="true" className="absolute border-[6px] border-black inset-0 pointer-events-none" />
        <div className="w-[55%] h-[55%]">
          <AtomIcon />
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="flex flex-wrap gap-[4px]">
          {tags.map((tag) => (
            <span key={tag} className={`${TAG_STYLES[tag] ?? "bg-[#d4d4d4]"} font-['Montserrat',sans-serif] font-medium text-[12px] text-black px-[8px] py-[2px]`}>
              {tag}
            </span>
          ))}
        </div>
        <p className="font-['Oswald',sans-serif] font-medium text-[18px] md:text-[20px] text-black uppercase leading-[1.2] group-hover:underline">
          {title}
        </p>
        <p className="font-['Montserrat',sans-serif] font-normal text-[16px] text-black">{date}</p>
      </div>
    </div>
  );
}

export default function EventDetailComponent({
  event,
  relatedEvents,
  onBack,
  onRelatedClick,
}: {
  event: EventRecord;
  relatedEvents: EventRecord[];
  onBack?: () => void;
  onRelatedClick?: (id: string) => void;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [event.id]);

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
          <span>Події</span>
        </button>

        {/* Main layout: gallery + details */}
        <div className="flex flex-col md:flex-row gap-[32px] md:gap-[56px] items-start">

          {/* Left: Gallery */}
          <div className="w-full md:w-[48%] flex-shrink-0">
            <Gallery
              key={event.id}
              images={event.gallery}
              aspectClass="aspect-[11/10]"
              showThumbnails
              mainBorder
              lightbox
            />
          </div>

          {/* Right: Event info */}
          <div className="flex-1 flex flex-col gap-[20px] md:gap-[24px]">
            {/* Title */}
            <div className="flex items-center gap-[12px]">
              <div className="bg-[#e6bc00] shrink-0 size-[32px]" />
              <h1 className="font-['Oswald',sans-serif] font-medium text-[28px] md:text-[36px] text-black uppercase leading-[1.1]">
                {event.title}
              </h1>
            </div>

            {/* Date + Category row */}
            <div className="flex items-center justify-between flex-wrap gap-[12px]">
              <div className="flex items-center gap-[8px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="3" width="16" height="15" rx="1" stroke="black" strokeWidth="1.5" />
                  <path d="M2 8H18" stroke="black" strokeWidth="1.5" />
                  <path d="M6 1V5" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M14 1V5" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="font-['Montserrat',sans-serif] text-[16px] text-black">{event.date}</span>
              </div>
              <span className="bg-[#d4d4d4] font-['Montserrat',sans-serif] font-medium text-[14px] text-black px-[12px] py-[4px]">
                {event.category}
              </span>
            </div>

            <div className="border-b border-[#e0e0e0]" />

            {/* Description */}
            <div className="flex flex-col gap-[16px]">
              {event.description.map((para, i) => (
                <p key={i} className="font-['Montserrat',sans-serif] font-normal text-[16px] text-black leading-[1.65]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Related events */}
        <div className="border-t border-[#e0e0e0] pt-[48px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[16px] md:gap-x-[24px] gap-y-[32px]">
            {relatedEvents.map((relatedEvent) => (
              <RelatedCard
                key={relatedEvent.id}
                tags={relatedEvent.tags}
                title={relatedEvent.title}
                date={relatedEvent.date}
                onClick={() => onRelatedClick?.(relatedEvent.id)}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
