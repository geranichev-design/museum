import { Link } from "react-router";
import svgPaths from "../../imports/svg-ruc1duwf30";
import { imgGroup } from "../../imports/svg-yym67";

function Group() {
  return (
    <div className="absolute inset-[8.4%_73.04%_8.78%_3.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.539px_0px] mask-size-[47.345px_47.205px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.2669 47.2046">
        <g id="Group">
          <path d={svgPaths.p29004400} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p20e2880} fill="var(--fill-0, white)" id="Vector_2" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p217b6700} fill="var(--fill-0, white)" id="Vector_3" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p319d0780} fill="var(--fill-0, white)" id="Vector_4" style={{ fill: "white", fillOpacity: "1" }} />
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

function TicketIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icons">
      <div className="absolute inset-[16.67%_8.33%]" data-name="icon/maps/local_activity_24px">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
          <path d={svgPaths.p165b6a00} fill="var(--fill-0, black)" id="icon/maps/local_activity_24px" style={{ fill: "black", fillOpacity: "1" }} />
        </svg>
      </div>
    </div>
  );
}

function MenuButton() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col gap-[6px] items-center justify-center relative shrink-0 size-[24px]" data-name="icons" data-menu-toggle="true">
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
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <Link to="/tickets" className="bg-[#dfbe22] content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="button">
        <TicketIcon />
      </Link>
      <MenuButton />
    </div>
  );
}

export default function MobileHeader() {
  return (
    <div className="h-[73px] shrink-0 sticky top-0 w-full z-[2]" data-name="header menu">
      <div className="absolute bg-black content-stretch flex items-center justify-between left-0 px-[16px] py-[8px] right-0 top-0">
        <Link to="/" className="block">
          <Logo />
        </Link>
        <Navigation />
      </div>
    </div>
  );
}
