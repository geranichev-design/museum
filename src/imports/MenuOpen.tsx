import { useState } from "react";
import { Link } from "react-router";
import svgPaths from "./svg-p8dzwbpvk0";
import { useLanguage } from "../app/context/LanguageContext";
import { MuseumButton } from "../app/components/ui/MuseumButton";

function scrollToTopOnPageLink(to: string) {
  if (!to.includes("#")) {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <div className="flex items-center justify-center shrink-0 size-[24px]">
      <svg
        width="24"
        height="14"
        viewBox="0 0 24 13.394"
        fill="none"
        className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      >
        <path d={svgPaths.p1c158b70} fill="white" />
      </svg>
    </div>
  );
}

interface AccordionSectionProps {
  label: string;
  to: string;
  children: React.ReactNode;
}

function AccordionSection({ label, to, children }: AccordionSectionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="flex gap-[16px] items-center w-full">
        <Link
          to={to}
          onClick={() => scrollToTopOnPageLink(to)}
          className="flex-1 font-['Oswald',sans-serif] font-medium leading-[22px] text-[20px] text-white uppercase hover:text-[#dfbe22] active:text-[#dfbe22] transition-colors"
        >
          {label}
        </Link>
        <button type="button" onClick={() => setOpen((v) => !v)} className="shrink-0 p-1 -m-1">
          <ChevronIcon open={open} />
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-[12px] mt-[12px] pl-[8px]">
          {children}
        </div>
      )}
    </div>
  );
}

function NavSubLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      onClick={() => scrollToTopOnPageLink(to)}
      className="font-['Montserrat',sans-serif] font-normal text-[14px] text-white hover:text-[#dfbe22] active:text-[#dfbe22] transition-colors"
    >
      {children}
    </Link>
  );
}

export default function MenuOpen() {
  const { lang } = useLanguage();
  const uk = lang === "uk";

  return (
    <div className="bg-black content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full" data-name="menu open">
      {/* Tickets button */}
      <MuseumButton to="/tickets" onClick={() => scrollToTopOnPageLink("/tickets")} variant="solid" theme="dark" className="w-full">
        {uk ? "Квитки" : "Tickets"}
      </MuseumButton>

      {/* Головна — has page / */}
      <AccordionSection label={uk ? "Головна" : "Home"} to="/">
        <NavSubLink to="/#history">{uk ? "Історія катастрофи" : "History of the disaster"}</NavSubLink>
        <NavSubLink to="/#exposition">{uk ? "Експозиція" : "Exhibition"}</NavSubLink>
        <NavSubLink to="/#events">{uk ? "Анонс подій" : "Upcoming events"}</NavSubLink>
        <NavSubLink to="/#spaces">{uk ? "Простори музею" : "Museum spaces"}</NavSubLink>
        <NavSubLink to="/#map">{uk ? "Мапа" : "Map"}</NavSubLink>
      </AccordionSection>

      {/* Простори музею — has page /spaces */}
      <Link
        to="/spaces"
        onClick={() => scrollToTopOnPageLink("/spaces")}
        className="font-['Oswald',sans-serif] font-medium leading-[22px] text-[20px] text-white uppercase hover:text-[#dfbe22] active:text-[#dfbe22] transition-colors w-full"
      >
        {uk ? "Простори музею" : "Museum spaces"}
      </Link>

      {/* Події та активності — has page /events */}
      <Link
        to="/events"
        onClick={() => scrollToTopOnPageLink("/events")}
        className="font-['Oswald',sans-serif] font-medium leading-[22px] text-[20px] text-white uppercase hover:text-[#dfbe22] active:text-[#dfbe22] transition-colors w-full"
      >
        {uk ? "Події та активності" : "Events and activities"}
      </Link>

      {/* Дослідникам — has page /researchers */}
      <AccordionSection label={uk ? "Дослідникам" : "For researchers"} to="/researchers">
        <NavSubLink to="/researchers#funds">{uk ? "Фонди" : "Funds"}</NavSubLink>
        <NavSubLink to="/researchers#library">{uk ? "Музейна бібліотека" : "Museum library"}</NavSubLink>
        <NavSubLink to="/researchers#registry">{uk ? "Реєстр музейного фонду" : "Museum fund registry"}</NavSubLink>
      </AccordionSection>

      {/* Про музей — has page /about */}
      <AccordionSection label={uk ? "Про музей" : "About museum"} to="/about">
        <NavSubLink to="/about#history">{uk ? "Історія" : "History"}</NavSubLink>
        <NavSubLink to="/about#mission">{uk ? "Місія" : "Mission"}</NavSubLink>
        <NavSubLink to="/about#team">{uk ? "Команда" : "Team"}</NavSubLink>
        <NavSubLink to="/about#partners">{uk ? "Партнери" : "Partners"}</NavSubLink>
        <NavSubLink to="/about#accessibility">{uk ? "Доступність" : "Accessibility"}</NavSubLink>
        <NavSubLink to="/about#documents">{uk ? "Документи" : "Documents"}</NavSubLink>
        <NavSubLink to="/about#help">{uk ? "Допомога музею" : "Support the museum"}</NavSubLink>
        <NavSubLink to="/about#contacts">{uk ? "Контакти" : "Contacts"}</NavSubLink>
      </AccordionSection>

      {/* Report corruption */}
      <div className="relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-3 border-[#d93a32] border-solid inset-0 pointer-events-none" />
        <div className="flex items-center justify-center px-[16px] py-[8px]">
          <span className="font-['Oswald',sans-serif] font-medium text-[14px] text-[#d93a32] uppercase leading-[22px]">
            {uk ? "Повідомити про корупцію" : "Report corruption"}
          </span>
        </div>
      </div>
    </div>
  );
}
