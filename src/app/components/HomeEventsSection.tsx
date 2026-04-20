import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { EVENTS_DATA, TAG_STYLES, pickRandom4, type EventRecord } from "../../data/eventsData";

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

function EventCard({ event, onClick }: { event: EventRecord; onClick: () => void }) {
  return (
    <div className="flex flex-col gap-[16px] cursor-pointer group w-full" onClick={onClick}>
      <div className="aspect-square bg-[#d9d9d9] flex items-center justify-center relative overflow-hidden">
        <div aria-hidden="true" className="absolute border-[8px] border-black inset-0 pointer-events-none" />
        <div className="w-[50%] h-[50%]">
          <AtomIcon />
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <p
          className="uppercase leading-[22px] group-hover:underline"
          style={{ fontFamily: "'Oswald',sans-serif", fontWeight: 500, fontSize: 20 }}
        >
          {event.title}
        </p>
        <p
          className="overflow-hidden text-ellipsis whitespace-nowrap"
          style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 400, fontSize: 16 }}
        >
          {event.date}
        </p>
      </div>
    </div>
  );
}

export function HomeEventsSection() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventRecord[]>([]);

  useEffect(() => {
    setEvents(pickRandom4(EVENTS_DATA));
  }, []);

  return (
    <div className="bg-[#dfbe22] w-full" data-name="section 6">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-[24px] items-start w-full max-w-[1200px] px-[16px] md:px-[55px] py-[40px]">
          {/* Header */}
          <div className="flex gap-[8px] items-center w-full">
            <div className="bg-black shrink-0 size-[32px]" />
            <p
              className="uppercase"
              style={{ fontFamily: "'Oswald',sans-serif", fontWeight: 500, fontSize: 32, lineHeight: "34px" }}
            >
              Події
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[24px] md:gap-[32px] w-full">
            {events.map((event, i) => (
              <EventCard key={i} event={event} onClick={() => navigate("/events")} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
