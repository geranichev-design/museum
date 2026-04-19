import { useState } from "react";
import { Link } from "react-router";
import svgPaths from "./svg-p8dzwbpvk0";
import { useLanguage } from "../app/context/LanguageContext";

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

function ChevronDisabled({ open }: { open: boolean }) {
  return (
    <div className="flex items-center justify-center shrink-0 size-[24px]">
      <svg
        width="24"
        height="14"
        viewBox="0 0 24 13.394"
        fill="none"
        className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      >
        <path d={svgPaths.p1c158b70} fill="white" fillOpacity="0.3" />
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

interface DisabledSectionProps {
  label: string;
  children?: React.ReactNode;
}

function DisabledSection({ label, children }: DisabledSectionProps) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!children;
  return (
    <div className="w-full">
      <div className="flex gap-[16px] items-center w-full">
        <span className="flex-1 font-['Oswald',sans-serif] font-medium leading-[22px] text-[20px] text-white/30 uppercase cursor-default">
          {label}
        </span>
        {hasChildren && (
          <button type="button" onClick={() => setOpen((v) => !v)} className="shrink-0 p-1 -m-1">
            <ChevronDisabled open={open} />
          </button>
        )}
      </div>
    </div>
  );
}

function NavSubLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
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
      <Link
        to="/tickets"
        className="bg-[#dfbe22] w-full flex items-center justify-center px-[16px] py-[8px]"
      >
        <span className="font-['Oswald',sans-serif] font-medium text-[20px] text-black uppercase leading-[22px]">
          {uk ? "Квитки" : "Tickets"}
        </span>
      </Link>

      {/* Головна — has page / */}
      <AccordionSection label={uk ? "Головна" : "Home"} to="/">
        <NavSubLink to="/#history">{uk ? "Історія катастрофи" : "History of the disaster"}</NavSubLink>
        <NavSubLink to="/#tours">{uk ? "Екскурсії" : "Tours"}</NavSubLink>
        <NavSubLink to="/#events">{uk ? "Анонс подій" : "Upcoming events"}</NavSubLink>
        <NavSubLink to="/#spaces">{uk ? "Простори музею" : "Museum spaces"}</NavSubLink>
        <NavSubLink to="/#quiz">{uk ? "Вікторина" : "Quiz"}</NavSubLink>
      </AccordionSection>

      {/* Простори музею — has page /spaces */}
      <Link
        to="/spaces"
        className="font-['Oswald',sans-serif] font-medium leading-[22px] text-[20px] text-white uppercase hover:text-[#dfbe22] active:text-[#dfbe22] transition-colors w-full"
      >
        {uk ? "Простори музею" : "Museum spaces"}
      </Link>

      <div className="bg-white h-[4px] shrink-0 w-full" />

      {/* Оренда — no page */}
      <DisabledSection label={uk ? "Оренда приміщень" : "Room rental"} />

      <div className="bg-white h-[4px] shrink-0 w-full" />

      {/* Магазин — no page */}
      <DisabledSection label={uk ? "Магазин" : "Shop"} />

      {/* Події та активності — has page /events */}
      <Link
        to="/events"
        className="font-['Oswald',sans-serif] font-medium leading-[22px] text-[20px] text-white uppercase hover:text-[#dfbe22] active:text-[#dfbe22] transition-colors w-full"
      >
        {uk ? "Події та активності" : "Events and activities"}
      </Link>

      {/* Дослідникам — has page /researchers */}
      <AccordionSection label={uk ? "Дослідникам" : "For researchers"} to="/researchers">
        <NavSubLink to="/researchers#funds">{uk ? "Фонди" : "Funds"}</NavSubLink>
        <NavSubLink to="/researchers#articles">{uk ? "Наукові статті" : "Scientific articles"}</NavSubLink>
        <NavSubLink to="/researchers#library">{uk ? "Музейна бібліотека" : "Museum library"}</NavSubLink>
        <NavSubLink to="/researchers#apply">{uk ? "Подати заявку" : "Submit application"}</NavSubLink>
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
