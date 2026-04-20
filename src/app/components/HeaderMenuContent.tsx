import { Link, useLocation } from "react-router";
import imgHeaderMenu1 from "figma:asset/fdb305f108bb69bb0bf140d22e63e15ba049c5dc.png";
import { DesktopNavItem } from "./DesktopNavItem";
import { useLanguage } from "../context/LanguageContext";

export default function HeaderMenuContent() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();
  const uk = lang === 'uk';

  return (
    <div className="bg-black content-stretch flex flex-col items-center left-0 right-0 w-full" data-name="menu">
      <div className="bg-black max-w-[1200px] relative shrink-0 w-full" data-name="greed">
        <div className="gap-x-[31px] gap-y-[31px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] max-w-[inherit] overflow-clip pt-[48px] relative rounded-[inherit] size-full">

          {/* Column 1 */}
          <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="1">
            <DesktopNavItem to="/" preset={pathname === "/"} size="lg">
              {uk ? 'Головна' : 'Home'}
            </DesktopNavItem>
            <DesktopNavItem to="/#history" size="sm">{uk ? 'Історія події' : 'History of the event'}</DesktopNavItem>
            <DesktopNavItem to="/#tours" size="sm">{uk ? 'Тематичні екскурсії' : 'Thematic tours'}</DesktopNavItem>
            <DesktopNavItem to="/#spaces" size="sm">{uk ? 'Простори музею' : 'Museum spaces'}</DesktopNavItem>
            <DesktopNavItem to="/#events" size="sm">{uk ? 'Події' : 'Events'}</DesktopNavItem>
            <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="button">
              <div aria-hidden="true" className="absolute border-3 border-[#d93a32] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-col font-['Oswald',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#d93a32] text-[14px] uppercase whitespace-nowrap">
                <p className="leading-[22px]">{uk ? 'Повідомити про корупцію' : 'Report corruption'}</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-2 content-stretch flex flex-col gap-[31px] items-start justify-center justify-self-stretch relative row-[1/span_2] self-start shrink-0" data-name="2">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <DesktopNavItem to="/spaces" preset={pathname === "/spaces"} size="lg">{uk ? 'Простори музею:' : 'Museum spaces:'}</DesktopNavItem>
              <DesktopNavItem to="/spaces?space=Експозиція" size="sm">{uk ? 'Експозиція' : 'Exhibition'}</DesktopNavItem>
              <DesktopNavItem to="/spaces?space=Мультимедійна зала" size="sm">{uk ? 'Мультимедійна зала' : 'Multimedia hall'}</DesktopNavItem>
              <DesktopNavItem to="/spaces?space=Оглядова вежа" size="sm">{uk ? 'Оглядова вежа' : 'Observation tower'}</DesktopNavItem>
              <DesktopNavItem to="/spaces?space=Віртуальна зона" size="sm">{uk ? 'Віртуальна зона' : 'Virtual zone'}</DesktopNavItem>
              <DesktopNavItem to="/spaces?space=Лабораторія" size="sm">{uk ? 'Лабораторія' : 'Laboratory'}</DesktopNavItem>
              <DesktopNavItem to="/spaces?space=Коворкінг" size="sm">{uk ? 'Коворкінг' : 'Coworking'}</DesktopNavItem>
              <DesktopNavItem to="/spaces?space=Кав'ярня" size="sm">{uk ? "Кав'ярня" : 'Café'}</DesktopNavItem>
              <DesktopNavItem to="/spaces?space=Виставковий простір (Open-space)" size="sm">{uk ? 'Виставковий простір (Open-space)' : 'Exhibition space (Open-space)'}</DesktopNavItem>
            </div>
            <div className="bg-white h-[4px] shrink-0 w-full" />
            <DesktopNavItem disabled size="lg">{uk ? 'Оренда приміщень' : 'Room rental'}</DesktopNavItem>
            <div className="bg-white h-[4px] shrink-0 w-full" />
            <DesktopNavItem disabled size="lg">{uk ? 'Магазин' : 'Shop'}</DesktopNavItem>
          </div>

          {/* Column 3 */}
          <div className="col-3 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="3">
            <DesktopNavItem to="/events" preset={pathname === "/events"} size="lg">{uk ? 'Події та активності:' : 'Events and activities:'}</DesktopNavItem>
            <DesktopNavItem to="/events?type=Виставки" size="sm">{uk ? 'Виставки' : 'Exhibitions'}</DesktopNavItem>
            <DesktopNavItem to="/events?type=Лекції" size="sm">{uk ? 'Лекції' : 'Lectures'}</DesktopNavItem>
            <DesktopNavItem to="/events?type=Майстер-класи" size="sm">{uk ? 'Майстер-класи' : 'Workshops'}</DesktopNavItem>
            <DesktopNavItem to="/events?type=Дитячі програми" size="sm">{uk ? 'Дитячі програми' : "Children's programs"}</DesktopNavItem>
            <DesktopNavItem to="/events?type=Тимчасові проєкти" size="sm">{uk ? 'Тимчасові проєкти' : 'Temporary projects'}</DesktopNavItem>
          </div>

          {/* Column 4 */}
          <div className="col-4 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="4">
            <DesktopNavItem to="/researchers" preset={pathname === "/researchers"} size="lg">{uk ? 'Дослідникам:' : 'For researchers:'}</DesktopNavItem>
            <DesktopNavItem to="/researchers#funds" size="sm">{uk ? 'Фонди' : 'Funds'}</DesktopNavItem>
            <DesktopNavItem to="/researchers#articles" size="sm">{uk ? 'Наукові статті' : 'Scientific articles'}</DesktopNavItem>
            <DesktopNavItem to="/researchers#library" size="sm">{uk ? 'Музейна бібліотека' : 'Museum library'}</DesktopNavItem>
            <DesktopNavItem to="/researchers#apply" size="sm">{uk ? 'Подати заявку' : 'Submit application'}</DesktopNavItem>
            <DesktopNavItem to="/researchers#registry" size="sm">{uk ? 'Реєстр музейного фонду' : 'Museum fund registry'}</DesktopNavItem>
          </div>

          {/* Column 5 */}
          <div className="col-5 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="5">
            <DesktopNavItem to="/about" preset={pathname === "/about"} size="lg">{uk ? 'Про музей:' : 'About museum:'}</DesktopNavItem>
            <DesktopNavItem to="/about#history" size="sm">{uk ? 'Історія' : 'History'}</DesktopNavItem>
            <DesktopNavItem to="/about#mission" size="sm">{uk ? 'Місія' : 'Mission'}</DesktopNavItem>
            <DesktopNavItem to="/about#team" size="sm">{uk ? 'Команда' : 'Team'}</DesktopNavItem>
            <DesktopNavItem to="/about#partners" size="sm">{uk ? 'Партнери' : 'Partners'}</DesktopNavItem>
            <DesktopNavItem to="/about#accessibility" size="sm">{uk ? 'Доступність' : 'Accessibility'}</DesktopNavItem>
            <DesktopNavItem to="/about#documents" size="sm">{uk ? 'Документи' : 'Documents'}</DesktopNavItem>
            <DesktopNavItem to="/about#help" size="sm">{uk ? 'Допомога музею' : 'Support the museum'}</DesktopNavItem>
            <DesktopNavItem to="/about#contacts" size="sm">{uk ? 'Контакти' : 'Contacts'}</DesktopNavItem>
          </div>

          {/* Map image */}
          <div className="aspect-[3508/2480] col-[3/span_3] justify-self-stretch relative row-2 shrink-0" data-name="Map_Prypiat 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeaderMenu1} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-b-4 border-solid border-white inset-0 pointer-events-none" />
      </div>
    </div>
  );
}
