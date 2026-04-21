import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { PageHero } from "../app/components/PageHero";
import { MuseumSelect } from "../app/components/ui/MuseumSelect";
import { MuseumInput } from "../app/components/ui/MuseumInput";
import { EVENTS_DATA, TAG_STYLES } from "../data/eventsData";
import { MuseumButton } from "../app/components/ui/MuseumButton";

const EVENT_TYPE_OPTIONS = [
  { value: "Виставки", label: "Виставки" },
  { value: "Майстер-класи", label: "Майстер-класи" },
  { value: "Тимчасові проєкти", label: "Тимчасові проєкти" },
  { value: "Лекції", label: "Лекції" },
  { value: "Дитячі програми", label: "Дитячі програми" },
];
const EVENTS_PER_PAGE = 8;

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
        <div aria-hidden="true" className="absolute border-[6px] border-black inset-0 pointer-events-none" />
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState(searchParams.get("type") ?? "");
  const [selectedDate, setSelectedDate] = useState(searchParams.get("date") ?? "");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setSelectedType(searchParams.get("type") ?? "");
    setSelectedDate(searchParams.get("date") ?? "");
    setCurrentPage(1);
  }, [searchParams]);

  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesType = !selectedType || event.tags.includes(selectedType) || event.category === selectedType;
    const matchesDate = !selectedDate || event.date === selectedDate;
    return matchesType && matchesDate;
  });

  const totalPages = Math.max(1, Math.ceil(filteredEvents.length / EVENTS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  const paginatedEvents = filteredEvents.slice(
    (safeCurrentPage - 1) * EVENTS_PER_PAGE,
    safeCurrentPage * EVENTS_PER_PAGE
  );

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (selectedType) {
      params.set("type", selectedType);
    }
    if (selectedDate) {
      params.set("date", selectedDate);
    }
    setCurrentPage(1);
    setSearchParams(params);
  };

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
              <div className="bg-[#DFBE22] shrink-0 size-[32px]" />
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
              <MuseumButton
                variant="solid"
                theme="dark"
                iconOnly
                icon="search"
                className="self-start sm:self-auto"
                onClick={applyFilters}
              />
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
            {paginatedEvents.map((event) => (
              <EventCard key={event.id} {...event} onClick={() => navigate(`/events/${event.id}`)} />
            ))}
          </div>

          {paginatedEvents.length === 0 && (
            <p className="font-['Montserrat',sans-serif] text-[16px] text-black">
              За обраними фільтрами подій не знайдено.
            </p>
          )}

          {/* Load More button */}
          {safeCurrentPage < totalPages && (
            <div className="flex justify-center pt-[8px]">
              <MuseumButton variant="solid" theme="dark" icon="arrow" onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}>
                ЗАВАНТАЖИТИ БІЛЬШЕ
              </MuseumButton>
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-[4px]">
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`font-['Montserrat',sans-serif] text-[16px] w-[36px] h-[36px] flex items-center justify-center transition-colors ${
                  safeCurrentPage === pageNumber
                    ? "bg-black text-white font-bold"
                    : "text-black hover:bg-[#f0f0f0]"
                }`}
              >
                {pageNumber}
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
