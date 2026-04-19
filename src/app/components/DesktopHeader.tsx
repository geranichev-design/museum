import { Link } from "react-router";
import svgPaths from "../../imports/svg-egu612f841";
import { imgGroup } from "../../imports/svg-no9qt";
import { useLanguage } from "../context/LanguageContext";

function Group() {
  return (
    <div className="absolute inset-[8.4%_73.04%_8.78%_3.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.539px_0px] mask-size-[47.345px_47.205px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.2666 47.2046">
        <g id="Group">
          <path d={svgPaths.p2fbd0070} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p14e8a900} fill="var(--fill-0, white)" id="Vector_2" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p217b6700} fill="var(--fill-0, white)" id="Vector_3" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p17119a80} fill="var(--fill-0, white)" id="Vector_4" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p14d47380} fill="var(--fill-0, white)" id="Vector_5" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[8.4%_71.66%_8.78%_2.61%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[57px] overflow-clip relative shrink-0 w-[184px]" data-name="Лого національного музею «Чорнобиль»_текст справа_чорний 1">
      <ClipPathGroup />
      <div className="absolute inset-[26.32%_1.66%_53.89%_32.54%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.063 11.2822">
          <path d={svgPaths.p3cfaacc0} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute inset-[48.07%_0.49%_28.09%_32.38%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123.518 13.5861">
          <path d={svgPaths.p1738a200} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </svg>
      </div>
    </div>
  );
}

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="content-stretch flex font-['Oswald',sans-serif] font-medium gap-[19px] items-center leading-[22px] relative shrink-0 text-[20px] uppercase whitespace-nowrap">
      <button
        onClick={() => setLang('uk')}
        className={`cursor-pointer bg-transparent border-0 p-0 relative shrink-0 ${lang === 'uk' ? 'text-[#dfbe22]' : 'text-white opacity-50 hover:opacity-80'}`}
      >укр</button>
      <button
        onClick={() => setLang('en')}
        className={`cursor-pointer bg-transparent border-0 p-0 relative shrink-0 ${lang === 'en' ? 'text-[#dfbe22]' : 'text-white opacity-50 hover:opacity-80'}`}
      >eng</button>
    </div>
  );
}

function TicketsButton() {
  const { lang } = useLanguage();
  return (
    <Link to="/tickets" className="bg-[#dfbe22] content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="button">
      <div className="flex flex-col font-['Oswald',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black uppercase whitespace-nowrap">
        <p className="leading-[22px]">{lang === 'uk' ? 'Квитки' : 'Tickets'}</p>
      </div>
    </Link>
  );
}

function MenuButton() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col gap-[6px] items-center justify-center relative shrink-0 size-[24px]" data-name="icons">
      <div className="h-[4px] relative shrink-0 w-full" data-name="Line 60 (Stroke)">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 4">
          <path d="M24 0V4H0V0H24Z" fill="var(--fill-0, #F5F3EA)" id="Line 60 (Stroke)" style={{ fill: "color(display-p3 0.9608 0.9529 0.9176)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="h-[4px] relative shrink-0 w-full" data-name="Line 61 (Stroke)">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 4">
          <path d="M24 0V4H0V0H24Z" fill="var(--fill-0, #F5F3EA)" id="Line 60 (Stroke)" style={{ fill: "color(display-p3 0.9608 0.9529 0.9176)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="h-[4px] relative shrink-0 w-full" data-name="Line 62 (Stroke)">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 4">
          <path d="M24 0V4H0V0H24Z" fill="var(--fill-0, #F5F3EA)" id="Line 60 (Stroke)" style={{ fill: "color(display-p3 0.9608 0.9529 0.9176)", fillOpacity: "1" }} />
        </svg>
      </div>
    </button>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-end relative shrink-0 w-[561px]">
      <LanguageSwitcher />
      <TicketsButton />
      <MenuButton />
    </div>
  );
}

export default function DesktopHeader() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center shrink-0 sticky top-0 w-full z-[2]" data-name="header menu">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="head">
        <div className="bg-black content-stretch flex flex-[1_0_0] h-[73px] items-center justify-between max-w-[1200px] min-w-px py-[8px] relative" data-name="content">
          <Link to="/" className="block">
            <Logo />
          </Link>
          <Navigation />
        </div>
      </div>
    </div>
  );
}
