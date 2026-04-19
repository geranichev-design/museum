import { createContext, useContext } from "react";
import { useLanguage, type Lang } from "../app/context/LanguageContext";
import svgPaths from "./svg-egu612f841";
import imgImage92 from "figma:asset/8d92b713f292821b0a1ee391109f066ed6f10fab.png";
import imgRectangle793 from "figma:asset/75cf571e42281ca234c82e0e840ea04b5fd77490.png";
import imgRectangle794 from "figma:asset/c80d0bb9a6e45fdd63598e17a51c6ac1d38e9093.png";
import imgRectangle795 from "figma:asset/28b88c5aa54e096bbb01def8e7f98f7e41d532f1.png";
import imgRectangle796 from "figma:asset/b0932d4836c14db93b50fd2610ab12ca44c88598.png";
import imgRectangle797 from "figma:asset/4864d19c1f28c9acfe260c9e9993a77164267ad1.png";
import imgRectangle798 from "figma:asset/9c85b2fc3584cf4ae488575b26e327cd03e9dce4.png";
import { imgGroup } from "./svg-no9qt";

const LangCtx = createContext<Lang>('uk');
const useLang = () => useContext(LangCtx);
function T({ uk, en }: { uk: string; en: string }) {
  const lang = useLang();
  return <>{lang === 'uk' ? uk : en}</>;
}

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

function Component1() {
  return (
    <div className="h-[57px] overflow-clip relative shrink-0 w-[184px]" data-name="Лого національного музею «Чорнобиль»_текст справа_чорний 1">
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

function Frame12() {
  return (
    <div className="content-stretch flex font-['Oswald',sans-serif] font-medium gap-[19px] items-center leading-[22px] relative shrink-0 text-[20px] uppercase whitespace-nowrap">
      <p className="relative shrink-0 text-[#dfbe22]">укр</p>
      <p className="relative shrink-0 text-white">eng</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-end relative shrink-0 w-[561px]">
      <Frame12 />
      <div className="bg-[#dfbe22] content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="button">
        <div className="flex flex-col font-['Oswald',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black uppercase whitespace-nowrap">
          <p className="leading-[22px]">Придбати квиток</p>
        </div>
      </div>
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
    </div>
  );
}

function Content() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] h-[73px] items-center justify-between max-w-[1200px] min-w-px py-[8px] relative" data-name="content">
      <Component1 />
      <Frame13 />
    </div>
  );
}

function Head() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="head">
      <Content />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col h-[59px] items-start relative shrink-0 uppercase w-[494px]">
      <div className="flex flex-col font-[‘Oswald’,sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[#dfbe22] text-[32px] w-full">
        <p className="leading-[26px]">Чорнобиль</p>
      </div>
      <p className="font-[‘Oswald’,sans-serif] font-medium leading-[33px] relative shrink-0 text-[#f5f3ea] text-[36px] w-full"><T uk="пам’ять, що формує майбутнє" en="memory that shapes the future" /></p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[400px] min-w-[240px] relative shrink-0 w-full">
      <div className="bg-[#e6bc00] relative shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Oswald',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black uppercase whitespace-nowrap">
              <p className="leading-[24px]"><T uk="Придбати квиток" en="Buy a ticket" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[24px] content-stretch flex flex-col gap-[32px] items-start justify-end left-1/2 max-w-[1200px] overflow-clip top-[24px] w-[1200px]" data-name="Content">
      <Frame14 />
      <Frame30 />
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[504px] relative shrink-0 w-full" data-name="Hero">
      <img alt="" className="absolute max-w-none object-cover size-full" src="/hero-bg.jpg" />
      <Content2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[#dfbe22] shrink-0 size-[32px]" />
      <p className="font-['Oswald',sans-serif] font-medium leading-[34px] relative shrink-0 text-[#f5f3ea] text-[32px] uppercase whitespace-nowrap"><T uk="Історія події" en="History of the event" /></p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat',sans-serif] font-normal gap-[24px] items-start leading-[normal] relative shrink-0 text-[#f5f3ea] text-[16px] w-full">
      <p className="relative shrink-0 w-full whitespace-pre-wrap"><T uk="Людство зобов'язане завжди пам'ятати та гідно відзначати мужність, самовідданість і високий професіоналізм учасників ліквідації наслідків аварії на Чорнобильській АЕС, які ціною героїчних зусиль зупинили всепланетну катастрофу." en="Humanity is obliged to always remember and duly honour the courage, selflessness, and high professionalism of those who eliminated the consequences of the Chernobyl NPP accident, who at the cost of heroic efforts stopped a global catastrophe." /></p>
      <p className="relative shrink-0 w-full"><T uk={`Національний музей "Чорнобиль" – державний науково-дослідний та культурно-освітній заклад, створений для збереження, вивчення, використання і популяризації музейних предметів та музейних колекцій, пов'язаних із Чорнобильською катастрофою та її наслідками, з науковою та освітньою метою.`} en={`The National Museum "Chornobyl" is a state research and cultural-educational institution created to preserve, study, use, and promote museum objects and collections related to the Chornobyl catastrophe and its consequences, for scientific and educational purposes.`} /></p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-px relative">
      <Frame16 />
      <Frame19 />
      <div className="bg-[#e6bc00] max-w-[240px] relative shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center max-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Oswald',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black uppercase whitespace-nowrap">
              <p className="leading-[24px]"><T uk="Дізнатись більше" en="Learn more" /></p>
            </div>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none">
                <div className="relative size-[24px]" data-name="icons">
                  <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
                    <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                      <div className="relative size-full" data-name="Vector">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0001 24">
                          <g id="Vector">
                            <path d={svgPaths.pc3edd00} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
                            <path d={svgPaths.pca10b80} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cpntent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[40px] items-start max-w-[1200px] min-w-px relative" data-name="cpntent">
      <div className="aspect-[579/455] flex-[1_0_0] min-w-px relative" data-name="image 92">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage92} />
      </div>
      <Frame15 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="section 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[56px] relative size-full">
          <Cpntent />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-[#dfbe22] shrink-0 size-[34px]" />
      <p className="font-['Oswald',sans-serif] font-medium leading-[normal] relative shrink-0 text-[34px] text-black uppercase whitespace-nowrap"><T uk="Тематичні екскурсії" en="Thematic tours" /></p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame29 />
    </div>
  );
}

function Group7() {
  return (
    <div className="relative size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 353">
          <path d={svgPaths.p15887800} fill="var(--fill-0, #DFBE22)" id="icon/navigation/chevron_left_24px" style={{ fill: "color(display-p3 0.8750 0.7450 0.1349)", fillOpacity: "1" }} />
          <path d={svgPaths.p34665d80} fill="var(--fill-0, #DFBE22)" id="icon/navigation/chevron_left_24px_2" style={{ fill: "color(display-p3 0.8750 0.7450 0.1349)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0">
      <p className="font-['Montserrat',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#dfbe22] text-[16px] whitespace-nowrap"><T uk="Детальніше" en="More details" /></p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Group7 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Oswald',sans-serif] font-medium leading-[22px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]"><T uk="Таємниці Чорнобиля" en="Secrets of Chernobyl" /></p>
      <Frame23 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[220px] relative">
      <div className="aspect-[378.6666564941406/378] max-h-[598.9437255859375px] max-w-[600px] pointer-events-none relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle793} />
        <div aria-hidden="true" className="absolute border-6 border-black border-solid inset-0" />
      </div>
      <Frame24 />
    </div>
  );
}

function Group8() {
  return (
    <div className="relative size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 353">
          <path d={svgPaths.p15887800} fill="var(--fill-0, #DFBE22)" id="icon/navigation/chevron_left_24px" style={{ fill: "color(display-p3 0.8750 0.7450 0.1349)", fillOpacity: "1" }} />
          <path d={svgPaths.p34665d80} fill="var(--fill-0, #DFBE22)" id="icon/navigation/chevron_left_24px_2" style={{ fill: "color(display-p3 0.8750 0.7450 0.1349)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0">
      <p className="font-['Montserrat',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#dfbe22] text-[16px] whitespace-nowrap"><T uk="Детальніше" en="More details" /></p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Group8 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Oswald',sans-serif] font-medium leading-[22px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]"><T uk="Мирний атом та виклики людству" en="Peaceful atom and challenges to humanity" /></p>
      <Frame26 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[220px] relative">
      <div className="aspect-[368/368] max-h-[600px] max-w-[600px] pointer-events-none relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle794} />
        <div aria-hidden="true" className="absolute border-6 border-black border-solid inset-0" />
      </div>
      <Frame25 />
    </div>
  );
}

function Group9() {
  return (
    <div className="relative size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 353">
          <path d={svgPaths.p15887800} fill="var(--fill-0, #DFBE22)" id="icon/navigation/chevron_left_24px" style={{ fill: "color(display-p3 0.8750 0.7450 0.1349)", fillOpacity: "1" }} />
          <path d={svgPaths.p34665d80} fill="var(--fill-0, #DFBE22)" id="icon/navigation/chevron_left_24px_2" style={{ fill: "color(display-p3 0.8750 0.7450 0.1349)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0">
      <p className="font-['Montserrat',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#dfbe22] text-[16px] whitespace-nowrap"><T uk="Детальніше" en="More details" /></p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Group9 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Oswald',sans-serif] font-medium leading-[22px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]"><T uk="40 років після трагедії" en="40 years after the tragedy" /></p>
      <Frame31 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[220px] relative">
      <div className="aspect-[378.66668701171875/378] max-h-[598.9436645507812px] max-w-[600px] pointer-events-none relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle795} />
        <div aria-hidden="true" className="absolute border-6 border-black border-solid inset-0" />
      </div>
      <Frame28 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center relative shrink-0 w-full">
      <Frame20 />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="content">
      <Frame17 />
      <Frame27 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#f5f3ea] relative shrink-0 w-full" data-name="section 4">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[40px] relative size-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative">
      <div className="bg-black shrink-0 size-[32px]" />
      <p className="font-['Oswald',sans-serif] font-medium leading-[34px] relative shrink-0 text-[32px] text-black uppercase whitespace-nowrap"><T uk="Події" en="Events" /></p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex h-[36px] items-start justify-between relative shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[normal] min-w-px relative text-black">
      <p className="font-['Oswald',sans-serif] font-medium min-w-full relative shrink-0 text-[24px] uppercase w-[min-content]"><T uk="Зустріч-дискусія: 40 років після трагедії" en="Discussion: 40 years after the tragedy" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal overflow-hidden relative shrink-0 text-[16px] text-ellipsis whitespace-nowrap">10.08.2026</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame33 />
      <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border-3 border-black border-solid inset-0 pointer-events-none" />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[24px]" data-name="icons">
              <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
                <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                  <div className="relative size-full" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0001 24">
                      <g id="Vector">
                        <path d={svgPaths.p37a8f600} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
                        <path d={svgPaths.p2594b500} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[normal] min-w-px relative text-black">
      <p className="font-['Oswald',sans-serif] font-medium min-w-full relative shrink-0 text-[24px] w-[min-content]"><T uk="Фотовиставка Павла Павленка" en="Photo exhibition by Pavlo Pavlenko" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal overflow-hidden relative shrink-0 text-[16px] text-ellipsis whitespace-nowrap">10.08.2026</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame34 />
      <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border-3 border-black border-solid inset-0 pointer-events-none" />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[24px]" data-name="icons">
              <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
                <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                  <div className="relative size-full" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0001 24">
                      <g id="Vector">
                        <path d={svgPaths.p37a8f600} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
                        <path d={svgPaths.p2594b500} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[normal] min-w-px relative text-black">
      <p className="font-['Oswald',sans-serif] font-medium min-w-full relative shrink-0 text-[24px] w-[min-content]"><T uk="Майстер-клас: виготовлення брудної бомби" en="Workshop: creating a dirty bomb" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal overflow-hidden relative shrink-0 text-[16px] text-ellipsis whitespace-nowrap">10.08.2026</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame35 />
      <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border-3 border-black border-solid inset-0 pointer-events-none" />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[24px]" data-name="icons">
              <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
                <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                  <div className="relative size-full" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0001 24">
                      <g id="Vector">
                        <path d={svgPaths.p37a8f600} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
                        <path d={svgPaths.p2594b500} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[normal] min-w-px relative text-black">
      <p className="font-['Oswald',sans-serif] font-medium min-w-full relative shrink-0 text-[24px] w-[min-content]"><T uk="Зустріч-дискусія: 40 років після трагедії" en="Discussion: 40 years after the tragedy" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal overflow-hidden relative shrink-0 text-[16px] text-ellipsis whitespace-nowrap">10.08.2026</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame36 />
      <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border-3 border-black border-solid inset-0 pointer-events-none" />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[24px]" data-name="icons">
              <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
                <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                  <div className="relative size-full" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0001 24">
                      <g id="Vector">
                        <path d={svgPaths.p37a8f600} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
                        <path d={svgPaths.p2594b500} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="relative size-[31px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0003 31">
        <g id="Group 353">
          <path d={svgPaths.p37792c00} fill="var(--fill-0, black)" id="icon/navigation/chevron_left_24px" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p8686e70} fill="var(--fill-0, black)" id="icon/navigation/chevron_left_24px_2" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[11px] items-center left-[80px] top-[calc(50%-0.33px)]">
      <div className="flex flex-col font-['Oswald',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[24px] text-black uppercase whitespace-nowrap">
        <p className="leading-[normal]"><T uk="Інші події" en="Other events" /></p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Group10 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-[1200px] size-[268px] top-[0.33px]">
      <div className="h-[189px] relative shrink-0 w-[190px]">
        <div aria-hidden="true" className="absolute border-9 border-black border-solid inset-0 pointer-events-none" />
      </div>
      <Frame38 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="h-[462px] overflow-x-auto overflow-y-clip relative shrink-0 w-full">
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 top-[0.33px] w-[268px]" data-name="Component 13">
        <div className="aspect-[266/266] pointer-events-none relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute bg-[#d9d9d9] inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle796} />
          </div>
          <div aria-hidden="true" className="absolute border-9 border-black border-solid inset-0" />
        </div>
        <Frame39 />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[300px] top-[0.33px] w-[268px]" data-name="Component 14">
        <div className="aspect-[266/266] pointer-events-none relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute bg-[#d9d9d9] inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle797} />
          </div>
          <div aria-hidden="true" className="absolute border-8 border-black border-solid inset-0" />
        </div>
        <Frame40 />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[600px] top-[0.33px] w-[268px]" data-name="Component 15">
        <div className="aspect-[266/266] pointer-events-none relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute bg-[#d9d9d9] inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle798} />
          </div>
          <div aria-hidden="true" className="absolute border-8 border-black border-solid inset-0" />
        </div>
        <Frame41 />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[900px] top-[0.33px] w-[268px]" data-name="Component 16">
        <div className="aspect-[266/266] pointer-events-none relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute bg-[#d9d9d9] inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle798} />
          </div>
          <div aria-hidden="true" className="absolute border-8 border-black border-solid inset-0" />
        </div>
        <Frame42 />
      </div>
      <Frame37 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="content">
      <Frame18 />
      <Frame43 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#dfbe22] relative shrink-0 w-full" data-name="section 6">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[40px] relative size-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-b-10 border-black border-solid inset-[0_0_-5px_0] pointer-events-none" />
      <p className="font-['Oswald',sans-serif] font-medium leading-[normal] relative shrink-0 text-[34px] text-black uppercase whitespace-nowrap">10%</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Oswald',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[34px] text-black uppercase w-[min-content]"><T uk="Пройдено питань" en="Questions answered" /></p>
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-px relative">
      <p className="font-['Oswald',sans-serif] font-medium leading-[normal] relative shrink-0 text-[34px] text-black uppercase w-full"><T uk="ЩО ВИ ЗНАЄТЕ ПРО ЧОРНОБИЛЬ?" en="WHAT DO YOU KNOW ABOUT CHORNOBYL?" /></p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491 2">
            <line id="Line 53" stroke="var(--stroke-0, black)" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} x2="491" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <Frame9 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16px] pt-[8px] px-[8px] relative size-full">
          <p className="font-['Oswald',sans-serif] font-medium leading-[normal] relative shrink-0 text-[34px] text-black uppercase whitespace-nowrap"><T uk="Запитання 1" en="Question 1" /></p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[40px]">
        <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      </div>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-black whitespace-nowrap"><T uk="в 1977 році" en="in 1977" /></p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[40px]">
        <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      </div>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-black whitespace-nowrap"><T uk="в 1970 році" en="in 1970" /></p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[40px]">
        <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      </div>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-black whitespace-nowrap"><T uk="в 1986 році" en="in 1986" /></p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[40px]">
        <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      </div>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-black whitespace-nowrap"><T uk="в 1979 році" en="in 1979" /></p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-start flex flex-wrap gap-[16px_122px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame4 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start p-[64px] relative shrink-0 w-[669px]">
      <div aria-hidden="true" className="absolute border-10 border-black border-solid inset-0 pointer-events-none" />
      <Frame5 />
      <p className="font-['Montserrat',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-black w-full"><T uk="В якому році Чорнобильську атомну електростанцію було запущено в експлуатацію?" en="In what year was the Chernobyl nuclear power plant put into operation?" /></p>
      <Frame6 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[40px] items-start max-w-[1200px] min-w-px relative" data-name="content">
      <Frame10 />
      <Frame7 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center py-[80px] relative shrink-0 w-full" data-name="section7">
      <Content5 />
    </div>
  );
}

function Map() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="map">
      <div className="flex-[1_0_0] h-[400px] min-w-px relative" data-name="Embed 1">
        <iframe allowFullScreen className="embed overflow-clip size-full" src="https://maps.google.com/maps?output=embed&q=%D0%BC.+%D0%9A%D0%B8%D1%97%D0%B2%2C+%D0%BF%D1%80%D0%BE%D0%B2%D1%83%D0%BB%D0%BE%D0%BA+%D0%A5%D0%BE%D1%80%D0%B8%D0%B2%D0%B0%2C+1%2C" />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="col-1 h-[73.35px] relative row-1 shrink-0 w-[267px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 267 73.3496">
        <g id="logo">
          <g id="Vector">
            <path d={svgPaths.p7149800} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p1c524180} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pabd6080} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p248c5c80} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3bc2d200} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p161d5080} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p7758b80} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3e49d480} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2d254600} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p9d77100} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pf5d4d80} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p1acecf00} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p10520f80} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p21f8b000} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p36878380} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p31a69c00} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p9d50a00} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p2436a580} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p115ce480} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2df0980} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p2088f700} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p36f4af80} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3543a1c0} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3a734d80} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p3b2e6a72} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2bc01500} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
          </g>
          <path d={svgPaths.p6a44080} fill="var(--fill-0, black)" id="Union" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Contacts() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-[2/span_2] self-start shrink-0 text-black" data-name="contacts">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full"><T uk="Контактна інформація" en="Contact information" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="м. Київ, провулок Хорива, 1," en="Kyiv, Khoriva Lane, 1," /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">тел. +38 044 482-56-27</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="Пн – Сб (Нд - вихідний день)" en="Mon – Sat (Sun – day off)" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="10:00 – 18.00 (каса до 17.00)" en="10:00 – 18:00 (ticket office until 17:00)" /></p>
    </div>
  );
}

function Main() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-between justify-self-stretch relative row-[1/span_3] self-stretch shrink-0" data-name="main">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]"><T uk="Головна" en="Home" /></p>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap"><T uk="Придбати квитки" en="Buy tickets" /></p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap"><T uk="Екскурсії" en="Tours" /></p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap"><T uk="Анонс подій" en="Upcoming events" /></p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap"><T uk="Історія катастрофи" en="History of the disaster" /></p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap"><T uk="Простори музею" en="Museum spaces" /></p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap"><T uk="Вікторина" en="Quiz" /></p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-between justify-self-stretch relative row-[1/span_3] self-stretch shrink-0" data-name="about">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]"><T uk="Про музей" en="About museum" /></p>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap"><T uk="Історія" en="History" /></p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap"><T uk="Місія" en="Mission" /></p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap"><T uk="Команда" en="Team" /></p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap"><T uk="Партнери" en="Partners" /></p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap"><T uk="Доступність" en="Accessibility" /></p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap"><T uk="Документи" en="Documents" /></p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap"><T uk="Допомога музею" en="Support the museum" /></p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap"><T uk="Контакти" en="Contacts" /></p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23.9998">
        <g id="Group">
          <path d={svgPaths.p30a69580} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p1efe400} fill="var(--fill-0, black)" id="Vector_2" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p2d1943f0} fill="var(--fill-0, black)" id="Vector_3" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[9.29%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 19.5413">
        <g id="Group">
          <path d={svgPaths.p128b0d80} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[9.29%_0]" data-name="Group">
      <Group5 />
    </div>
  );
}

function TwitterSocialMediaSvgrepoCom() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="twitter-social-media-svgrepo-com">
      <Group4 />
    </div>
  );
}

function YoutubeSvgrepoCom() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="youtube-svgrepo-com">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path d={svgPaths.p396bb380} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p1948ba00} fill="var(--fill-0, black)" id="Vector_2" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p728d600} fill="var(--fill-0, black)" id="Vector_3" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p53fb900} fill="var(--fill-0, black)" id="Vector_4" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p399cc700} fill="var(--fill-0, black)" id="Vector_5" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.pce9980} fill="var(--fill-0, black)" id="Vector_6" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[20px] items-end relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p3ae40300} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
        </svg>
      </div>
      <Group1 />
      <TwitterSocialMediaSvgrepoCom />
      <YoutubeSvgrepoCom />
    </div>
  );
}

function SocialMedias() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[6px] items-start relative row-1 self-start shrink-0 w-[274.5px]" data-name="social medias">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]"><T uk="Наші соцмережі" en="Our social media" /></p>
      <Frame11 />
    </div>
  );
}

function Payment() {
  return (
    <div className="col-4 content-stretch flex gap-[16px] items-center justify-self-start relative row-3 self-start shrink-0" data-name="payment">
      <div className="overflow-clip relative shrink-0 size-[50px]" data-name="mastercard-svgrepo-com">
        <div className="absolute inset-[16.67%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 33.3333">
            <path d={svgPaths.p342dad00} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[50px]" data-name="visa-svgrepo-com">
        <div className="absolute inset-[16.67%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 33.3333">
            <path d={svgPaths.p33e73f00} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute inset-[8.33%_8.01%]" data-name="МВС_Лого">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.6617 36.3822">
        <g id="ÐÐÐ¡_ÐÐ¾Ð³Ð¾">
          <g id="Group">
            <path d={svgPaths.p2ea19db0} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p12b7ba80} fill="var(--fill-0, black)" id="Vector_2" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pc6c0200} fill="var(--fill-0, black)" id="Vector_3" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3acc3200} fill="var(--fill-0, black)" id="Vector_4" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3f0b0f00} fill="var(--fill-0, black)" id="Vector_5" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p12bb6df0} fill="var(--fill-0, black)" id="Vector_6" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p274ee400} fill="var(--fill-0, black)" id="Vector_7" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p20521f00} fill="var(--fill-0, black)" id="Vector_8" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p10eccf00} fill="var(--fill-0, black)" id="Vector_9" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p20cacd00} fill="var(--fill-0, black)" id="Vector_10" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p32ca9bb0} fill="var(--fill-0, black)" id="Vector_11" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p97e400} fill="var(--fill-0, black)" id="Vector_12" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p125f1800} fill="var(--fill-0, black)" id="Vector_13" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p17cae700} fill="var(--fill-0, black)" id="Vector_14" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p19524b00} fill="var(--fill-0, black)" id="Vector_15" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p372e7a00} fill="var(--fill-0, black)" id="Vector_16" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pd240170} fill="var(--fill-0, black)" id="Vector_17" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p15789d00} fill="var(--fill-0, black)" id="Vector_18" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p1fa49880} fill="var(--fill-0, black)" id="Vector_19" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p38962700} fill="var(--fill-0, black)" id="Vector_20" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2d8fa500} fill="var(--fill-0, black)" id="Vector_21" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p1074a880} fill="var(--fill-0, black)" id="Vector_22" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2c096200} fill="var(--fill-0, black)" id="Vector_23" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p295615f0} fill="var(--fill-0, black)" id="Vector_24" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p651f800} fill="var(--fill-0, black)" id="Vector_25" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3dcfda80} fill="var(--fill-0, black)" id="Vector_26" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.paa2ad00} fill="var(--fill-0, black)" id="Vector_27" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3dbb6a00} fill="var(--fill-0, black)" id="Vector_28" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2bd7ee80} fill="var(--fill-0, black)" id="Vector_29" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2d9b700} fill="var(--fill-0, black)" id="Vector_30" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p31da2a00} fill="var(--fill-0, black)" id="Vector_31" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p4020d80} fill="var(--fill-0, black)" id="Vector_32" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p16082d00} fill="var(--fill-0, black)" id="Vector_33" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p65a8380} fill="var(--fill-0, black)" id="Vector_34" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2e8fec70} fill="var(--fill-0, black)" id="Vector_35" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2e169b00} fill="var(--fill-0, black)" id="Vector_36" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p24278600} fill="var(--fill-0, black)" id="Vector_37" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pa08ddc0} fill="var(--fill-0, black)" id="Vector_38" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p31b5f700} fill="var(--fill-0, black)" id="Vector_39" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3e539400} fill="var(--fill-0, black)" id="Vector_40" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p26e67370} fill="var(--fill-0, black)" id="Vector_41" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p6dfeb00} fill="var(--fill-0, black)" id="Vector_42" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3a74a900} fill="var(--fill-0, black)" id="Vector_43" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p37733c80} fill="var(--fill-0, black)" id="Vector_44" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3015fc00} fill="var(--fill-0, black)" id="Vector_45" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p379f2e70} fill="var(--fill-0, black)" id="Vector_46" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3b3c4c80} fill="var(--fill-0, black)" id="Vector_47" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p23daeb80} fill="var(--fill-0, black)" id="Vector_48" style={{ fill: "black", fillOpacity: "1" }} />
          </g>
          <path d={svgPaths.p1ed8600} fill="var(--fill-0, black)" id="Vector_49" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p2ad02a80} fill="var(--fill-0, black)" id="Vector_50" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p17beee70} fill="var(--fill-0, black)" id="Vector_51" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p33987500} fill="var(--fill-0, black)" id="Vector_52" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p11e64b00} fill="var(--fill-0, black)" id="Vector_53" style={{ fill: "black", fillOpacity: "1" }} />
          <g id="Group_2">
            <path d={svgPaths.p210aef00} fill="var(--fill-0, black)" id="Vector_54" style={{ fill: "black", fillOpacity: "1" }} />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p2d0a9e00} fill="var(--fill-0, black)" id="Vector_55" style={{ fill: "black", fillOpacity: "1" }} />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative shrink-0 size-[43.658px]" data-name="Лого_Frame">
      <Component />
    </div>
  );
}

function Mvs() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="mvs">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap"><T uk="За підтримки:" en="Supported by:" /></p>
      <div className="content-stretch flex gap-[1.679px] h-[43.659px] items-center relative shrink-0" data-name="Логотипи ЦОВВ">
        <Frame />
        <div className="font-['Montserrat',sans-serif] font-semibold leading-[0] relative shrink-0 text-[8.96px] text-black whitespace-nowrap">
          <p className="leading-[1.1] mb-0">Міністерство</p>
          <p className="leading-[1.1] mb-0">внутрішніх справ</p>
          <p className="leading-[1.1]">України</p>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="h-[23.402px] relative shrink-0 w-[119.25px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.25 23.4021">
        <g id="Group 20">
          <g id="Group 19">
            <mask height="19" id="mask0_1_10791" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="120" x="0" y="2">
              <path clipRule="evenodd" d={svgPaths.p283f8700} fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 18" style={{ fill: "white", fillOpacity: "1" }} />
            </mask>
            <g mask="url(#mask0_1_10791)">
              <path clipRule="evenodd" d={svgPaths.p2d183d80} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 17" style={{ fill: "black", fillOpacity: "1" }} />
            </g>
          </g>
          <path clipRule="evenodd" d={svgPaths.p2e30f700} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 1" style={{ fill: "black", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p1f4b1200} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 3" style={{ fill: "black", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p17ffc00} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 5" style={{ fill: "black", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p1a819f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 8" style={{ fill: "black", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p393f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 10" style={{ fill: "black", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p2398d580} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 12" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Infotech() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="infotech">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]"><T uk="Розробник:" en="Developer:" /></p>
      <Group6 />
    </div>
  );
}

function Developed() {
  return (
    <div className="col-4 content-stretch flex gap-[16px] items-start relative row-2 self-start shrink-0 w-[274.5px]" data-name="developed">
      <Mvs />
      <Infotech />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="Content">
      <Hero />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Map />
      <div className="bg-[#f5f3e9] relative shrink-0 w-full" data-name="footer">
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] px-[55px] py-[72px] relative size-full">
          <Logo />
          <Contacts />
          <Main />
          <About />
          <SocialMedias />
          <Payment />
          <Developed />
        </div>
      </div>
    </div>
  );
}

export default function Desktop() {
  const { lang } = useLanguage();
  return (
    <LangCtx.Provider value={lang}>
      <div className="bg-black content-stretch flex flex-col isolate items-center relative size-full" data-name="Desktop">
        <div className="bg-black content-stretch flex flex-col items-center shrink-0 sticky top-0 w-full z-[2]" data-name="header menu">
          <Head />
        </div>
        <Content1 />
      </div>
    </LangCtx.Provider>
  );
}