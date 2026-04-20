import svgPaths from "./svg-ruc1duwf30";
import { HomeEventsSection } from "../app/components/HomeEventsSection";
import { ExpositionSection } from "../app/components/ExpositionSection";
import { MuseumSpacesSection } from "../app/components/MuseumSpacesSection";
import imgImage92 from "figma:asset/8d92b713f292821b0a1ee391109f066ed6f10fab.png";
import imgForest from "figma:asset/12f073a52eefec5f24fd1d99b95248db5666af0d.png";
import imgMuseum from "figma:asset/fe939b86272ba154e7cb09fa28cdbb8f264cd151.png";
import imgPeope from "figma:asset/f1f033ec44683ab49de58e23107baf0302a0817f.png";
import imgRectangle793 from "figma:asset/75cf571e42281ca234c82e0e840ea04b5fd77490.png";
import imgRectangle794 from "figma:asset/c80d0bb9a6e45fdd63598e17a51c6ac1d38e9093.png";
import imgRectangle795 from "figma:asset/28b88c5aa54e096bbb01def8e7f98f7e41d532f1.png";
import imgRectangle796 from "figma:asset/b0932d4836c14db93b50fd2610ab12ca44c88598.png";
import imgRectangle797 from "figma:asset/4864d19c1f28c9acfe260c9e9993a77164267ad1.png";
import imgRectangle798 from "figma:asset/9c85b2fc3584cf4ae488575b26e327cd03e9dce4.png";
import { imgGroup } from "./svg-yym67";
import { createContext, useContext } from "react";
import { useLanguage, type Lang } from "../app/context/LanguageContext";

const LangCtx = createContext<Lang>('uk');
const useLang = () => useContext(LangCtx);
function T({ uk, en }: { uk: string; en: string }) {
  const lang = useLang();
  return <>{lang === 'uk' ? uk : en}</>;
}

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

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <div className="bg-[#dfbe22] content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="button">
        <div className="relative shrink-0 size-[24px]" data-name="icons">
          <div className="absolute inset-[16.67%_8.33%]" data-name="icon/maps/local_activity_24px">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p165b6a00} fill="var(--fill-0, black)" id="icon/maps/local_activity_24px" style={{ fill: "black", fillOpacity: "1" }} />
            </svg>
          </div>
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

function Frame1() {
  return (
    <div className="absolute bg-black content-stretch flex items-center justify-between left-0 px-[16px] py-[8px] right-0 top-0">
      <Component1 />
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 uppercase w-full">
      <div className="flex flex-col font-['Oswald',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[#dfbe22] text-[32px] w-full">
        <p className="leading-[normal]">Чорнобиль</p>
      </div>
      <p className="font-['Oswald',sans-serif] font-medium leading-[33px] relative shrink-0 text-[#f5f3ea] text-[36px] w-full"><T uk="пам'ять, що формує майбутнє" en="memory that shapes the future" /></p>
    </div>
  );
}

function Frame24() {
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

function Content1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[51px] content-stretch flex flex-col gap-[32px] items-start justify-center left-1/2 max-w-[1200px] top-[51px] w-[355px]" data-name="Content">
      <Frame8 />
      <Frame24 />
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[287px] relative shrink-0 w-full" data-name="Hero">
      <img alt="" className="absolute max-w-none object-cover size-full" src="/hero-bg.jpg" />
      <Content1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[#dfbe22] shrink-0 size-[34px]" />
      <p className="font-['Oswald',sans-serif] font-medium leading-[34px] relative shrink-0 text-[#f5f3ea] text-[32px] uppercase whitespace-nowrap">{`Історія події `}</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat',sans-serif] gap-[24px] items-start leading-[normal] relative shrink-0 text-[#f5f3ea] text-[16px] w-full">
      <p className="font-bold relative shrink-0 w-full"><T uk="Історія ЧАЕС починається із Постанови Ради Міністрів СРСР від 29 вересня 1966 року про введення в дію енергетичних потужностей у розмірі 11,9 млн кВт. Частину цієї потужності – 8 млн кВт – мали генерувати атомні електростанції." en="The history of the Chornobyl NPP begins with the Resolution of the Council of Ministers of the USSR dated September 29, 1966, on the commissioning of energy capacities of 11.9 million kW. Part of this capacity – 8 million kW – was to be generated by nuclear power plants." /></p>
      <p className="font-normal relative shrink-0 w-full" style={{fontFamily:"'Montserrat',sans-serif",fontSize:16,fontWeight:400,lineHeight:"22px"}}><T uk="У південній частині Об'єднаної енергетичної системи СРСР планувалося будівництво атомної станції, яка повинна забезпечити електроенергією Центральний енергетичний район – 27 областей Української РСР і Ростовську область із населенням 53 мільйони осіб." en="In the southern part of the Unified Energy System of the USSR, the construction of a nuclear power plant was planned to supply electricity to the Central Energy District – 27 regions of the Ukrainian SSR and the Rostov region with a population of 53 million people." /></p>
      <p className="font-normal relative shrink-0 w-full" style={{fontFamily:"'Montserrat',sans-serif",fontSize:16,fontWeight:400,lineHeight:"22px"}}><T uk="Наказом Міністра енергетики і електрифікації СРСР № 297 від 11 грудня 1969 року було організовано Дирекцію АЕС, що будується, з місцезнаходженням у селі Копачі Чорнобильського району Київської області з підпорядкуванням її «Головатоменерго». Проммайданчик Чорнобильської АЕС розташовувався у східній частині українсько-білоруського Полісся за 110 км на північний схід від Києва і 15 км на північний захід від міста Чорнобиля Київської області." en="By Order No. 297 of the Minister of Energy and Electrification of the USSR dated December 11, 1969, the Directorate of the NPP under construction was established in the village of Kopachi, Chornobyl district, Kyiv region. The Chornobyl NPP industrial site was located in the eastern part of the Ukrainian-Belarusian Polissia, 110 km northeast of Kyiv and 15 km northwest of the city of Chornobyl." /></p>
      <p className="font-normal relative shrink-0 w-full whitespace-pre-wrap" style={{fontFamily:"'Montserrat',sans-serif",fontSize:16,fontWeight:400,lineHeight:"22px"}}><T uk={`15 серпня 1972 року у фундамент головного корпусу було закладено перший кубометр бетону. А 26 вересня 1977 року включенням у мережу турбогенератора № 2 енергоблок №1 ЧАЕС був введений у дію. На території України з'явилася перша атомна електростанція.\nОстанній енергоблок Чорнобильської АЕС – енергоблок №4 – виведений на проектну потужність 1000 МВт 28 березня 1984 року.\nУ квітні 1986 року в експлуатації знаходилось чотири енергоблоки потужністю 1000 МВт кожний, у структурних підрозділах ЧАЕС на той час працювало близько 6 тис осіб.`} en={`On August 15, 1972, the first cubic meter of concrete was laid in the foundation of the main building. On September 26, 1977, Unit No. 1 of the Chornobyl NPP was put into operation. Ukraine's first nuclear power plant had appeared.\nThe last unit of the Chornobyl NPP – Unit No. 4 – reached its design capacity of 1,000 MW on March 28, 1984.\nIn April 1986, four units with a capacity of 1,000 MW each were in operation; approximately 6,000 people worked at the Chornobyl NPP at that time.`} /></p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame13 />
      <div className="bg-[#e6bc00] relative shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
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
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="cpntent">
      <div className="aspect-[579/455] relative shrink-0 w-full" data-name="image 92">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage92} />
      </div>
      <Frame9 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="section 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[56px] relative size-full">
          <Cpntent />
        </div>
      </div>
    </div>
  );
}

function Section3Animate() {
  return (
    <div className="h-[587px] overflow-clip relative shrink-0 w-full" data-name="section 3(animate)">
      <div className="-translate-x-1/2 absolute h-[1080px] left-[calc(50%+0.5px)] top-[-70.82px] w-[1440px]" data-name="forest">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[136.88%] left-0 max-w-none top-[-14.11%] w-full" src={imgForest} />
        </div>
      </div>
      <div className="absolute inset-[-526.54px_-673px_-527.46px_-674px]" data-name="museum">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="1641" src={imgMuseum} width="1722" />
      </div>
      <div className="absolute bottom-[-194.46px] h-[585px] left-[-292px] w-[254px]" data-name="peope">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPeope} />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-[#dfbe22] shrink-0 size-[34px]" />
      <p className="font-['Oswald',sans-serif] font-medium leading-[normal] relative shrink-0 text-[34px] text-black uppercase whitespace-nowrap"><T uk="Тематичні екскурсії" en="Thematic tours" /></p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame23 />
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

function Frame17() {
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

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Oswald',sans-serif] font-medium leading-[22px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]"><T uk="Таємниці Чорнобиля" en="Secrets of Chernobyl" /></p>
      <Frame17 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full max-w-[500px]">
      <div className="aspect-[343/378] max-h-[661.2244873046875px] max-w-[600px] pointer-events-none relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle793} />
        <div aria-hidden="true" className="absolute border-6 border-black border-solid inset-0" />
      </div>
      <Frame18 />
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

function Frame20() {
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

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Oswald',sans-serif] font-medium leading-[22px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]"><T uk="Мирний атом та виклики людству" en="Peaceful atom and challenges to humanity" /></p>
      <Frame20 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full max-w-[500px]">
      <div className="h-[343px] max-w-[600px] pointer-events-none relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle794} />
        <div aria-hidden="true" className="absolute border-6 border-black border-solid inset-0" />
      </div>
      <Frame19 />
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

function Frame25() {
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

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Oswald',sans-serif] font-medium leading-[22px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]"><T uk="40 років після трагедії" en="40 years after the tragedy" /></p>
      <Frame25 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full max-w-[500px]">
      <div className="aspect-[343/378] max-h-[661.2244873046875px] max-w-[600px] pointer-events-none relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle795} />
        <div aria-hidden="true" className="absolute border-6 border-black border-solid inset-0" />
      </div>
      <Frame22 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame14 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="content">
      <Frame11 />
      <Frame21 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#f5f3ea] relative shrink-0 w-full" data-name="section 4">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[40px] relative size-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative">
      <div className="bg-black shrink-0 size-[32px]" />
      <p className="font-['Oswald',sans-serif] font-medium leading-[34px] relative shrink-0 text-[32px] text-black uppercase whitespace-nowrap"><T uk="Події" en="Events" /></p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex h-[36px] items-start justify-between relative shrink-0 w-full">
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[normal] min-w-px relative text-black">
      <p className="font-['Oswald',sans-serif] font-medium min-w-full relative shrink-0 text-[24px] uppercase w-[min-content]"><T uk="Зустріч-дискусія: 40 років після трагедії" en="Discussion: 40 years after the tragedy" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal overflow-hidden relative shrink-0 text-[16px] text-ellipsis whitespace-nowrap">10.08.2026</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame27 />
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

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[normal] min-w-px relative text-black">
      <p className="font-['Oswald',sans-serif] font-medium min-w-full relative shrink-0 text-[24px] uppercase w-[min-content]"><T uk="Фотовиставка Павла Павленка" en="Photo exhibition by Pavlo Pavlenko" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal overflow-hidden relative shrink-0 text-[16px] text-ellipsis whitespace-nowrap">10.08.2026</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame28 />
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

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[normal] min-w-px relative text-black">
      <p className="font-['Oswald',sans-serif] font-medium min-w-full relative shrink-0 text-[24px] uppercase w-[min-content]"><T uk="Майстер-клас: виготовлення брудної бомби" en="Workshop: creating a dirty bomb" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal overflow-hidden relative shrink-0 text-[16px] text-ellipsis whitespace-nowrap">10.08.2026</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame29 />
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

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[normal] min-w-px relative text-black">
      <p className="font-['Oswald',sans-serif] font-medium min-w-full relative shrink-0 text-[24px] uppercase w-[min-content]"><T uk="Зустріч-дискусія: 40 років після трагедії" en="Discussion: 40 years after the tragedy" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal overflow-hidden relative shrink-0 text-[16px] text-ellipsis whitespace-nowrap">10.08.2026</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame30 />
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

function Frame32() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[11px] items-center left-[80px] top-[calc(50%-0.07px)]">
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

function Frame31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-[1200px] size-[268px] top-[0.07px]">
      <div className="h-[189px] relative shrink-0 w-[190px]">
        <div aria-hidden="true" className="absolute border-9 border-black border-solid inset-0 pointer-events-none" />
      </div>
      <Frame32 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-[462px] overflow-x-auto overflow-y-clip relative shrink-0 w-full">
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 top-[0.07px] w-[268px]" data-name="Component 13">
        <div className="aspect-[266/266] pointer-events-none relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute bg-[#d9d9d9] inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle796} />
          </div>
          <div aria-hidden="true" className="absolute border-9 border-black border-solid inset-0" />
        </div>
        <Frame34 />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[300px] top-[0.07px] w-[268px]" data-name="Component 14">
        <div className="aspect-[266/266] pointer-events-none relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute bg-[#d9d9d9] inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle797} />
          </div>
          <div aria-hidden="true" className="absolute border-8 border-black border-solid inset-0" />
        </div>
        <Frame35 />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[600px] top-[0.07px] w-[268px]" data-name="Component 15">
        <div className="aspect-[266/266] pointer-events-none relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute bg-[#d9d9d9] inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle798} />
          </div>
          <div aria-hidden="true" className="absolute border-8 border-black border-solid inset-0" />
        </div>
        <Frame36 />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[900px] top-[0.07px] w-[268px]" data-name="Component 16">
        <div className="aspect-[266/266] pointer-events-none relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute bg-[#d9d9d9] inset-0" />
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle798} />
          </div>
          <div aria-hidden="true" className="absolute border-8 border-black border-solid inset-0" />
        </div>
        <Frame37 />
      </div>
      <Frame31 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="content">
      <Frame12 />
      <Frame38 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#dfbe22] relative shrink-0 w-full" data-name="section6">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[40px] relative size-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[8px] relative shrink-0 text-black whitespace-nowrap">
      <p className="font-['Oswald',sans-serif] font-medium leading-[30px] relative shrink-0 text-[32px]">12</p>
      <p className="font-['Montserrat',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px]"><T uk="питань" en="questions" /></p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[8px] relative shrink-0 text-black whitespace-nowrap">
      <p className="font-['Oswald',sans-serif] font-medium leading-[30px] relative shrink-0 text-[32px]">5</p>
      <p className="font-['Montserrat',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px]"><T uk="хв" en="min" /></p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[400px] relative shrink-0 w-full">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap"><T uk="Вікторина" en="Quiz" /></p>
      <p className="font-['Oswald',sans-serif] font-medium leading-[34px] min-w-full relative shrink-0 text-[32px] text-black uppercase w-[min-content]"><T uk="ЩО ВИ ЗНАЄТЕ ПРО ЧОРНОБИЛЬ?" en="WHAT DO YOU KNOW ABOUT CHORNOBYL?" /></p>
      <Frame3 />
      <div className="bg-[#e6bc00] relative shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
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

function Frame33() {
  return (
    <div className="bg-white h-[284px] relative shrink-0 w-full" data-name="quiz-section">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[40px] relative size-full">
          <Frame4 />
        </div>
      </div>
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
    <div className="h-[73.35px] relative shrink-0 w-[267px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 267 73.3496">
        <g id="logo">
          <g id="Vector">
            <path d={svgPaths.pfd24680} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p5f57000} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2a4c4ff0} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p1dd2e500} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p13b69400} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3aae51e0} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p31f77400} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p30737400} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p16eb0100} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p24f1f600} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p23c3be00} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p637da80} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p13034400} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p1c6a0f00} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p5927a00} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p3921c600} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pa542500} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p176ad800} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.pfb63080} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2eec500} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p38e33740} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p34c01130} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p1799e200} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p1f3e2740} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p19bbd000} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p38e7ff70} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
          </g>
          <path d={svgPaths.p1d550b80} fill="var(--fill-0, black)" id="Union" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Contacts() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="contacts">
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
    <div className="content-stretch flex flex-col h-[236.008px] items-start justify-between relative shrink-0 text-black w-full" data-name="main">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full"><T uk="Головна" en="Home" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="Придбати квитки" en="Buy tickets" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="Історія катастрофи" en="History of the disaster" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="Екскурсії" en="Tours" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="Анонс подій" en="Upcoming events" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="Простори музею" en="Museum spaces" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="Вікторина" en="Quiz" /></p>
    </div>
  );
}

function About() {
  return (
    <div className="content-stretch flex flex-col h-[236.008px] items-start justify-between relative shrink-0 text-black w-full" data-name="about">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full"><T uk="Про музей" en="About museum" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="Історія" en="History" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="Місія" en="Mission" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="Команда" en="Team" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="Партнери" en="Partners" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="Доступність" en="Accessibility" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="Документи" en="Documents" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="Допомога музею" en="Support the museum" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full"><T uk="Контакти" en="Contacts" /></p>
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

function Frame6() {
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
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[274.5px]" data-name="social medias">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]"><T uk="Наші соцмережі" en="Our social media" /></p>
      <Frame6 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute inset-[8.33%_8.01%]" data-name="МВС_Лого">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.6617 36.3822">
        <g id="ÐÐÐ¡_ÐÐ¾Ð³Ð¾">
          <g id="Group">
            <path d={svgPaths.p2442d40} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2a222180} fill="var(--fill-0, black)" id="Vector_2" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p1c8adf80} fill="var(--fill-0, black)" id="Vector_3" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2bde6780} fill="var(--fill-0, black)" id="Vector_4" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p383c8b80} fill="var(--fill-0, black)" id="Vector_5" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p13802100} fill="var(--fill-0, black)" id="Vector_6" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.paad2670} fill="var(--fill-0, black)" id="Vector_7" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p18df2270} fill="var(--fill-0, black)" id="Vector_8" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p280f2f40} fill="var(--fill-0, black)" id="Vector_9" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p1074100} fill="var(--fill-0, black)" id="Vector_10" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pa5c1980} fill="var(--fill-0, black)" id="Vector_11" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p9a4ae00} fill="var(--fill-0, black)" id="Vector_12" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p506bb00} fill="var(--fill-0, black)" id="Vector_13" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p384320a0} fill="var(--fill-0, black)" id="Vector_14" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pdd80670} fill="var(--fill-0, black)" id="Vector_15" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p13ad3100} fill="var(--fill-0, black)" id="Vector_16" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pa18f200} fill="var(--fill-0, black)" id="Vector_17" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p29ef8300} fill="var(--fill-0, black)" id="Vector_18" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p39206580} fill="var(--fill-0, black)" id="Vector_19" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p26e46b00} fill="var(--fill-0, black)" id="Vector_20" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p64a0980} fill="var(--fill-0, black)" id="Vector_21" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p13a97100} fill="var(--fill-0, black)" id="Vector_22" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p10cceb80} fill="var(--fill-0, black)" id="Vector_23" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p18266380} fill="var(--fill-0, black)" id="Vector_24" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2037c100} fill="var(--fill-0, black)" id="Vector_25" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p358225b0} fill="var(--fill-0, black)" id="Vector_26" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p83e7b00} fill="var(--fill-0, black)" id="Vector_27" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2765d4f0} fill="var(--fill-0, black)" id="Vector_28" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p24ee9500} fill="var(--fill-0, black)" id="Vector_29" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pd408400} fill="var(--fill-0, black)" id="Vector_30" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p34c31980} fill="var(--fill-0, black)" id="Vector_31" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3057f900} fill="var(--fill-0, black)" id="Vector_32" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3f8c0e00} fill="var(--fill-0, black)" id="Vector_33" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p171c9fc0} fill="var(--fill-0, black)" id="Vector_34" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3f37fb80} fill="var(--fill-0, black)" id="Vector_35" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3a55d3f2} fill="var(--fill-0, black)" id="Vector_36" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p9690880} fill="var(--fill-0, black)" id="Vector_37" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p33c689a0} fill="var(--fill-0, black)" id="Vector_38" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p19aea680} fill="var(--fill-0, black)" id="Vector_39" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3d0300} fill="var(--fill-0, black)" id="Vector_40" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3ed95300} fill="var(--fill-0, black)" id="Vector_41" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3d0e0300} fill="var(--fill-0, black)" id="Vector_42" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p23b7980} fill="var(--fill-0, black)" id="Vector_43" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p2ae86200} fill="var(--fill-0, black)" id="Vector_44" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3d683840} fill="var(--fill-0, black)" id="Vector_45" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p11e4ac80} fill="var(--fill-0, black)" id="Vector_46" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p298ccb00} fill="var(--fill-0, black)" id="Vector_47" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p3e93ec80} fill="var(--fill-0, black)" id="Vector_48" style={{ fill: "black", fillOpacity: "1" }} />
          </g>
          <path d={svgPaths.p22fad480} fill="var(--fill-0, black)" id="Vector_49" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p20cc8780} fill="var(--fill-0, black)" id="Vector_50" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p3b19f200} fill="var(--fill-0, black)" id="Vector_51" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p3da0fb80} fill="var(--fill-0, black)" id="Vector_52" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p3e64c900} fill="var(--fill-0, black)" id="Vector_53" style={{ fill: "black", fillOpacity: "1" }} />
          <g id="Group_2">
            <path d={svgPaths.p188ef000} fill="var(--fill-0, black)" id="Vector_54" style={{ fill: "black", fillOpacity: "1" }} />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p1989600} fill="var(--fill-0, black)" id="Vector_55" style={{ fill: "black", fillOpacity: "1" }} />
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
            <mask height="19" id="mask0_3_10653" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="120" x="0" y="2">
              <path clipRule="evenodd" d={svgPaths.p283f8700} fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 18" style={{ fill: "white", fillOpacity: "1" }} />
            </mask>
            <g mask="url(#mask0_3_10653)">
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
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[274.5px]" data-name="developed">
      <Mvs />
      <Infotech />
    </div>
  );
}

function Payment() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="payment">
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

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="Content">
      <Hero />
      <div id="history" className="w-full"><Section /></div>
      <Section3Animate />
      <ExpositionSection />
      <div id="tours" className="w-full"><Section1 /></div>
      <div id="spaces" className="w-full"><MuseumSpacesSection /></div>
      <div id="events" className="w-full"><HomeEventsSection /></div>
      <Frame33 />
      <Map />
      <div className="bg-[#f5f3e9] relative shrink-0 w-full" data-name="footer">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[56px] relative size-full">
          <Logo />
          <Contacts />
          <Main />
          <About />
          <SocialMedias />
          <Developed />
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default function Mobile() {
  const { lang } = useLanguage();
  return (
    <LangCtx.Provider value={lang}>
      <div className="bg-black content-stretch flex flex-col isolate items-center relative size-full" data-name="Mobile">
        <div className="h-[73px] shrink-0 sticky top-0 w-full z-[2]" data-name="header menu">
          <Frame1 />
        </div>
        <Content />
      </div>
    </LangCtx.Provider>
  );
}