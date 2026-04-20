import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { PageHero } from "../app/components/PageHero";
import { MuseumSelect } from "../app/components/ui/MuseumSelect";
import { MuseumInput } from "../app/components/ui/MuseumInput";

const EVENT_TYPE_OPTIONS = [
  { value: "Виставки", label: "Виставки" },
  { value: "Майстер-класи", label: "Майстер-класи" },
  { value: "Тимчасові проєкти", label: "Тимчасові проєкти" },
  { value: "Лекції", label: "Лекції" },
  { value: "Дитячі програми", label: "Дитячі програми" },
];

import { EVENTS_DATA, TAG_STYLES } from "../data/eventsData";
import { MuseumButton } from "../app/components/ui/MuseumButton";

const PAGE_NUMBERS: (number | null)[] = [1, 2, 3, null, 13, 14, 15];

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

function EventCard({ tags, title, date, onClick }: { tags: string[]; title: string; date: string; onClick?: () => void }) {
  return (
    <div className="flex flex-col gap-[12px] cursor-pointer group" onClick={onClick}>
      <div className="aspect-square bg-[#d9d9d9] flex items-center justify-center relative overflow-hidden">
        <div aria-hidden="true" className="absolute border-[6px] border-black inset-0 pointer-events-none z-10" />
        <div className="w-[55%] h-[55%]">
          <AtomIcon />
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="flex flex-wrap gap-[4px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`${TAG_STYLES[tag] ?? "bg-[#d4d4d4]"} font-['Montserrat',sans-serif] font-medium text-[12px] text-black px-[8px] py-[2px]`}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="font-['Oswald',sans-serif] font-medium text-[20px] text-black uppercase leading-[1.2] group-hover:underline">
          {title}
        </p>
        <p className="font-['Montserrat',sans-serif] font-normal text-[16px] text-black leading-[normal]">{date}</p>
      </div>
    </div>
  );
}

export default function EventsComponent({ onBuyTicket }: { onBuyTicket?: () => void }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState(searchParams.get("type") ?? "");
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setSelectedType(searchParams.get("type") ?? "");
  }, [searchParams]);

  return (
    <div data-name="Desktop">
      <PageHero
        title="ПОДІЇ МУЗЕЮ"
        imageSrc="/hero-bg.jpg"
        buttonText="ПРИДБАТИ КВИТОК"
        onButtonClick={onBuyTicket}
      />

      {/* Events Section */}
      <div className="bg-white py-[48px] md:py-[80px]">
        <div className="mx-auto max-w-[1200px] px-[16px] md:px-[24px] flex flex-col gap-[24px] md:gap-[32px]">

          {/* Title + Filters row */}
          <div className="flex flex-col md:flex-row md:items-center gap-[16px] md:gap-[24px]">
            <div className="flex items-center gap-[8px] flex-1">
              <div className="bg-[#e6bc00] shrink-0 size-[32px]" />
              <p className="font-['Oswald',sans-serif] font-medium text-[34px] md:text-[40px] text-black uppercase leading-[1]">
                ПОДІЇ
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[12px] md:gap-[16px]">
              {/* Type select */}
              <div className="sm:w-[260px]">
                <MuseumSelect
                  options={EVENT_TYPE_OPTIONS}
                  value={selectedType}
                  onChange={setSelectedType}
                  placeholder="Оберіть тип заходу"
                />
              </div>
              {/* Date input */}
              <div className="sm:w-[220px]">
                <MuseumInput
                  label="Оберіть дату"
                  type="date"
                  value={selectedDate}
                  onChange={setSelectedDate}
                />
              </div>
              {/* Search button */}
              <MuseumButton variant="solid" theme="dark" iconOnly icon="search" className="self-start sm:self-auto" />
            </div>
          </div>

          {/* Archive link */}
          <div className="flex justify-end">
            <a href="#" className="font-['Montserrat',sans-serif] text-[16px] text-black hover:underline">
              архів »
            </a>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[16px] md:gap-x-[24px] gap-y-[32px] md:gap-y-[48px]">
            {EVENTS_DATA.map((event, i) => (
              <EventCard key={i} {...event} onClick={() => navigate(`/events/${i}`)} />
            ))}
          </div>

          {/* Load More button */}
          <div className="flex justify-center pt-[8px]">
            <MuseumButton variant="solid" theme="dark" icon="arrow">
              ЗАВАНТАЖИТИ БІЛЬШЕ
            </MuseumButton>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-[4px]">
            {PAGE_NUMBERS.map((p, i) =>
              p === null ? (
                <span key={i} className="font-['Montserrat',sans-serif] text-[16px] text-black px-[8px]">
                  ...
                </span>
              ) : (
                <button
                  key={i}
                  onClick={() => setCurrentPage(p)}
                  className={`font-['Montserrat',sans-serif] text-[16px] w-[36px] h-[36px] flex items-center justify-center transition-colors ${
                    currentPage === p
                      ? "bg-black text-white font-bold"
                      : "text-black hover:bg-[#f0f0f0]"
                  }`}
                >
                  {p}
                </button>
              )
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
