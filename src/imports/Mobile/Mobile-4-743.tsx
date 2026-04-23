import svgPaths from "./svg-70t9wxys24";
import { imgGroup } from "./svg-iau4z";
import { MuseumSelect } from "../../app/components/ui/MuseumSelect";
import { createContext, useContext } from "react";
import { useLanguage, type Lang } from "../../app/context/LanguageContext";

const LangCtx = createContext<Lang>('uk');
const useLang = () => useContext(LangCtx);
function T({ uk, en }: { uk: string; en: string }) {
  const lang = useLang();
  return <>{lang === 'uk' ? uk : en}</>;
}

const TICKET_OPTIONS_UK = [
  { value: "single", label: "Персональний" },
  { value: "group", label: "Груповий" },
  { value: "free", label: "Безкоштовні" },
  { value: "additional", label: "Додаткові" },
];
const TICKET_OPTIONS_EN = [
  { value: "single", label: "Personal" },
  { value: "group", label: "Group" },
  { value: "free", label: "Free" },
  { value: "additional", label: "Additional" },
];

const GROUP_TICKETS_UK = [
  {
    title: "Екскурсійний квиток для групи до 10 осіб",
    description: "Обслуговування окремих відвідувачів на територіях та у приміщеннях музеїв під час огляду експозицій тощо (українською мовою)",
    price: "579 грн",
  },
  {
    title: "Екскурсійний квиток для групи від 10 до 20 осіб",
    description: "Обслуговування екскурсійних груп на територіях та у приміщеннях музеїв під час огляду експозицій тощо (українською мовою)",
    price: "355 грн",
  },
  {
    title: "Екскурсійний квиток для групи від 10 до 20 осіб",
    description: "Обслуговування екскурсійних груп на територіях та у приміщеннях музеїв під час огляду експозицій тощо (іноземними мовами)",
    price: "177 грн",
  },
  {
    title: "Екскурсійний квиток для групи від 10 до 20 осіб",
    description: "Обслуговування екскурсійних груп на територіях та у приміщеннях музеїв під час огляду експозицій тощо (іноземними мовами)",
    price: "362 грн",
  },
  {
    title: "Екскурсійний квиток для групи до 10 осіб",
    description: "Обслуговування окремих відвідувачів на територіях та у приміщеннях музеїв під час огляду експозицій тощо (іноземними мовами)",
    price: "592 грн",
  },
];
const GROUP_TICKETS_EN = [
  {
    title: "Tour ticket for groups up to 10 people",
    description: "Service for individual visitors on museum premises during exhibition tours (in Ukrainian)",
    price: "579 UAH",
  },
  {
    title: "Tour ticket for groups of 10 to 20 people",
    description: "Service for tour groups on museum premises during exhibition tours (in Ukrainian)",
    price: "355 UAH",
  },
  {
    title: "Tour ticket for groups of 10 to 20 people",
    description: "Service for tour groups on museum premises during exhibition tours (in foreign languages)",
    price: "177 UAH",
  },
  {
    title: "Tour ticket for groups of 10 to 20 people",
    description: "Service for tour groups on museum premises during exhibition tours (in foreign languages)",
    price: "362 UAH",
  },
  {
    title: "Tour ticket for groups up to 10 people",
    description: "Service for individual visitors on museum premises during exhibition tours (in foreign languages)",
    price: "592 UAH",
  },
];

const FREE_TICKETS_UK: { title: string; items?: string[]; description?: string }[] = [
  {
    title: "Відвідування музею (перший вівторок місяця)",
    items: [
      "діти шкільного віку",
      "учні професійно-технічних училищ",
      "студенти закладів вищої освіти України",
    ],
  },
  {
    title: "Відвідування музею без екскурсійного обслуговування",
    items: [
      "особи з інвалідністю І та ІІ групи",
      "ветерани війни (учасники бойових дій, особи з інвалідністю внаслідок війни, учасники війни)",
      "особи, які отримали статус постраждалого учасника Революції Гідності",
      "військовослужбовці строкової служби та які були призвані на військову службу за призовом у зв'язку з мобілізацією",
      "особи, звільнені з військової служби, які стали особами з інвалідністю під час проходження військової служби",
      "батьки військовослужбовця, який загинув (помер) або пропав безвісти під час проходження військової служби",
      "члени сім'ї загиблого (померлого) ветерана війни",
      "реабілітовані особи, які набули статус “особа з інвалідністю” внаслідок репресій або є пенсіонерами",
      "учасники ліквідації наслідків на ЧАЕС та особи, які постраждали внаслідок Чорнобильської катастрофи І - ІV категорій",
      "діти-сироти",
      "діти, позбавлені батьківського піклування",
      "діти дошкільного віку",
      "працівники музеїв та закладів музейного типу",
      "здобувачі вищої освіти відповідного фахового напрямку",
    ],
  },
  {
    title: "Дні відкритих дверей",
    description: "Щороку 18 травня (Міжнародний день музеїв) та 26 квітня (День чорнобильської трагедії) є безкоштовними для відвідування Музею усіма категоріями населення.",
  },
  {
    title: "Відвідування музею з екскурсійним обслуговуванням",
    items: [
      "іноземні делегації (за офіційними зверненнями органів виконавчої влади/місцевого самоврядування)",
      "групи осіб із соціально незахищених верств населення (за офіційними зверненнями соціальних служб міста Києва)",
      "члени національних спілок, громадських організацій відповідно до фахового напрямку культурно-освітнього закладу",
      "члени Міжнародної ради музеїв (ICOM)",
    ],
  },
];
const FREE_TICKETS_EN: { title: string; items?: string[]; description?: string }[] = [
  {
    title: "Museum visit (first Tuesday of the month)",
    items: [
      "school-age children;",
      "vocational school students;",
      "students of higher education institutions of Ukraine.",
    ],
  },
  {
    title: "Museum visit without guided tour",
    items: [
      "persons with disabilities of group I and II;",
      "war veterans (combat participants, persons with war-related disabilities, war participants);",
      "persons with the status of a victim of the Revolution of Dignity;",
      "conscript servicepersons and those called up during mobilization;",
      "persons discharged from military service who became disabled during service;",
      "parents of a serviceperson who died or went missing during service;",
      "family members of a deceased war veteran;",
      "rehabilitated persons who became disabled as a result of repression or are pensioners;",
      "participants in the liquidation of the Chornobyl NPP accident and persons affected by the Chornobyl catastrophe (categories I–IV);",
      "orphaned children;",
      "children deprived of parental care;",
      "preschool-age children;",
      "museum and museum-type institution employees;",
      "higher education students in relevant professional fields.",
    ],
  },
  {
    title: "Open-door days",
    description: "Every year on May 18 (International Museum Day) and April 26 (Chornobyl Tragedy Day) admission is free for all visitors.",
  },
  {
    title: "Museum visit with guided tour",
    items: [
      "foreign delegations (upon official requests from executive/local government authorities);",
      "socially vulnerable groups (upon official requests from Kyiv social services);",
      "members of national unions and public organizations in the relevant cultural-educational field;",
      "members of the International Council of Museums (ICOM).",
    ],
  },
];

const ADDITIONAL_TICKETS_UK = [
  {
    title: "Віртуальна 3D-екскурсія зоною відчуження",
    description: "Віртуальна 3D-екскурсія Зоною відчуження (англійською та українською мовами)",
    price: "155 грн",
  },
  {
    title: "Прокат аудіогіду",
    description: "Аудіоекскурсійне обслуговування окремих відвідувачів (українською, англійською, японською, німецькою, французькою, італійською, іспанською та турецькою мовами)",
    price: "362 грн",
  },
  {
    title: "Проведення відеозйомки (40 хв)",
    description: "Проведення відеозйомки приміщень та інтер'єрів, територій та об'єктів музейних закладів, окремих експонатів, експозицій, окремих сторінок документів з музейних фондів",
    price: "279 грн",
  },
  {
    title: "Проведення фотозйомки (25 хв)",
    description: "Проведення фотозйомки приміщень та інтер'єрів, територій та об'єктів музейних закладів, окремих експонатів, експозицій, окремих сторінок документів з музейних фондів",
    price: "224 грн",
  },
];
const ADDITIONAL_TICKETS_EN = [
  {
    title: "Virtual 3D tour of the exclusion zone",
    description: "Virtual 3D tour of the Exclusion Zone (in English and Ukrainian)",
    price: "155 UAH",
  },
  {
    title: "Audio guide rental",
    description: "Audio tour service for individual visitors (in Ukrainian, English, Japanese, German, French, Italian, Spanish, and Turkish)",
    price: "362 UAH",
  },
  {
    title: "Video filming (40 min)",
    description: "Video filming of museum rooms, interiors, grounds, exhibits, exhibitions, and individual document pages from museum collections",
    price: "279 UAH",
  },
  {
    title: "Photo shooting (25 min)",
    description: "Photo shooting of museum rooms, interiors, grounds, exhibits, exhibitions, and individual document pages from museum collections",
    price: "224 UAH",
  },
];

function Group() {
  return (
    <div className="absolute inset-[8.4%_73.04%_8.78%_3.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.539px_0px] mask-size-[47.345px_47.205px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.2669 47.2046">
        <g id="Group">
          <path d={svgPaths.p29004400} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p20e2880} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p217b6700} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p319d0780} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p14d47380} fill="var(--fill-0, white)" id="Vector_5" />
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
          <path d={svgPaths.p3cfaacc0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[48.07%_0.49%_28.09%_32.38%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123.518 13.5861">
          <path d={svgPaths.p1738a200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="bg-[#dfbe22] content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="button">
        <div className="relative shrink-0 size-[24px]" data-name="icons">
          <div className="absolute inset-[16.67%_8.33%]" data-name="icon/maps/local_activity_24px">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p165b6a00} fill="var(--fill-0, black)" id="icon/maps/local_activity_24px" />
            </svg>
          </div>
        </div>
      </div>
      <button className="content-stretch cursor-pointer flex flex-col gap-[6px] items-center justify-center relative shrink-0 size-[24px]" data-name="icons">
        <div className="h-[4px] relative shrink-0 w-full" data-name="Line 60 (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 4">
            <path d="M24 0V4H0V0H24Z" fill="var(--fill-0, #F5F3EA)" id="Line 60 (Stroke)" />
          </svg>
        </div>
        <div className="h-[4px] relative shrink-0 w-full" data-name="Line 61 (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 4">
            <path d="M24 0V4H0V0H24Z" fill="var(--fill-0, #F5F3EA)" id="Line 60 (Stroke)" />
          </svg>
        </div>
        <div className="h-[4px] relative shrink-0 w-full" data-name="Line 62 (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 4">
            <path d="M24 0V4H0V0H24Z" fill="var(--fill-0, #F5F3EA)" id="Line 60 (Stroke)" />
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
      <Frame3 />
    </div>
  );
}

function Informer() {
  return (
    <div className="border-4 border-[#e6bc00] col-1 justify-self-stretch relative row-3 self-start shrink-0" data-name="informer">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center gap-[16px] px-[16px] py-[32px] relative size-full">
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-center w-full">
            <T uk="У разі виникнення запитань телефонуйте за номерами:" en="If you have any questions, please call:" />
          </p>
          <p className="font-['Montserrat',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black text-center w-full">+38 044 425-44-62, +38 063 946-21-43</p>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-center justify-self-start relative row-1 self-start shrink-0" data-name="title">
      <div className="relative shrink-0 size-[32px]" data-name="icons">
        <div className="absolute bg-[#e6bc00] inset-0" />
      </div>
      <p className="font-['Oswald',sans-serif] font-medium leading-[normal] relative shrink-0 text-[34px] text-black uppercase whitespace-nowrap"><T uk="Квитки" en="Tickets" /></p>
    </div>
  );
}

function TicketGenericRow({ title, description, price }: { title: string; description: string; price: string }) {
  return (
    <div className="gap-y-[8px] flex flex-col py-[16px] relative shrink-0 w-full" data-name="ticket">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start text-black">
        <p className="font-['Oswald',sans-serif] font-medium leading-[24px] text-[20px] uppercase w-full">{title}</p>
        <p className="font-['Montserrat',sans-serif] font-normal leading-[22px] text-[16px] w-full">{description}</p>
      </div>
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] text-[20px] text-black text-center uppercase">{price}</p>
    </div>
  );
}

function FreeTicketMobileRow({ title, items, description }: { title: string; items?: string[]; description?: string }) {
  return (
    <div className="gap-y-[8px] flex flex-col py-[16px] relative shrink-0 w-full" data-name="ticket">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] text-[20px] text-black uppercase w-full">{title}</p>
      {description && (
        <p className="font-['Montserrat',sans-serif] font-normal leading-[22px] text-[16px] text-black w-full">{description}</p>
      )}
      {items && (
        <ul className="block font-['Montserrat',sans-serif] font-normal list-disc text-[16px] text-black w-full">
          {items.map((item, i) => (
            <li key={i} className="ms-[24px] leading-[22px]">{item}</li>
          ))}
        </ul>
      )}
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] text-[20px] text-black uppercase whitespace-nowrap"><T uk="Безкоштовно" en="Free" /></p>
    </div>
  );
}

function Text() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0 text-black" data-name="text">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full"><T uk="Вхідний квиток" en="Admission ticket" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] w-full"><T uk="Відвідування музеїв" en="Museum visit" /></p>
    </div>
  );
}

function Ticket() {
  return (
    <div className="gap-y-[8px] flex flex-col py-[16px] relative shrink-0 w-full" data-name="ticket">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <Text />
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] text-[20px] text-black text-center uppercase">131 грн</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0 text-black" data-name="text">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full"><T uk="Пільговий вхідний квиток" en="Concession admission ticket" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] w-full"><T uk="Відвідування музеїв на пільгових умовах, передбачених законодавством" en="Museum visit under preferential conditions provided by law" /></p>
    </div>
  );
}

function Ticket1() {
  return (
    <div className="gap-y-[8px] flex flex-col py-[16px] relative shrink-0 w-full" data-name="ticket">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <Text1 />
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] text-[20px] text-black text-center uppercase">66 грн</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0 text-black" data-name="text">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full"><T uk="Екскурсійний квиток" en="Tour ticket" /></p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] w-full"><T uk="Обслуговування окремих відвідувачів на територіях та у приміщеннях музеїв під час огляду експозицій тощо" en="Service for individual visitors on museum premises during exhibition tours, etc." /></p>
    </div>
  );
}

function Ticket2() {
  return (
    <div className="gap-y-[8px] flex flex-col py-[16px] relative shrink-0 w-full" data-name="ticket">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <Text2 />
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] text-[20px] text-black text-center uppercase">579 грн</p>
    </div>
  );
}

function TicketsSingle({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  const lang = useLang();
  const ticketOptions = lang === 'uk' ? TICKET_OPTIONS_UK : TICKET_OPTIONS_EN;
  const groupTickets = lang === 'uk' ? GROUP_TICKETS_UK : GROUP_TICKETS_EN;
  const freeTickets = lang === 'uk' ? FREE_TICKETS_UK : FREE_TICKETS_EN;
  const additionalTickets = lang === 'uk' ? ADDITIONAL_TICKETS_UK : ADDITIONAL_TICKETS_EN;
  return (
    <div className="bg-white gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] px-[16px] py-[48px] relative shrink-0 w-full max-w-[375px] mx-auto z-[2]" data-name="tickets single">
      <Informer />
      <Title />
      <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-2 self-start shrink-0 w-full" data-name="квитки">
        <MuseumSelect
          options={ticketOptions}
          value={activeTab}
          onChange={onTabChange}
          bold
        />
        {activeTab === "single" && (
          <>
            <Ticket />
            <Ticket1 />
            <Ticket2 />
          </>
        )}
        {activeTab === "group" && groupTickets.map((t, i) => (
          <TicketGenericRow key={i} title={t.title} description={t.description} price={t.price} />
        ))}
        {activeTab === "free" && freeTickets.map((t, i) => (
          <FreeTicketMobileRow key={i} title={t.title} items={t.items} description={t.description} />
        ))}
        {activeTab === "additional" && additionalTickets.map((t, i) => (
          <TicketGenericRow key={i} title={t.title} description={t.description} price={t.price} />
        ))}
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
            <path d={svgPaths.pfd24680} fill="var(--fill-0, black)" />
            <path d={svgPaths.p5f57000} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2a4c4ff0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1dd2e500} fill="var(--fill-0, black)" />
            <path d={svgPaths.p13b69400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3aae51e0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p31f77400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p30737400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p16eb0100} fill="var(--fill-0, black)" />
            <path d={svgPaths.p24f1f600} fill="var(--fill-0, black)" />
            <path d={svgPaths.p23c3be00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p637da80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p13034400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1c6a0f00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p5927a00} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p3921c600} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.pa542500} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p176ad800} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pfb63080} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p2eec500} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p38e33740} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p34c01130} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p1799e200} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1f3e2740} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p19bbd000} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p38e7ff70} fill="var(--fill-0, black)" />
          </g>
          <path d={svgPaths.p1d550b80} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Contacts() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="contacts">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full">Контактна інформація</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">м. Київ, провулок Хорива, 1,</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">тел. +38 044 482-56-27</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Пн – Сб (Нд - вихідний день)</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">10:00 – 18:0 (каса працює до 17:00)</p>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col h-[236.008px] items-start justify-between relative shrink-0 text-black w-full" data-name="main">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full">Головна</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Придбати квитки</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Історія катастрофи</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Екскурсії</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Анонс подій</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Простори музею</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Вікторина</p>
    </div>
  );
}

function About() {
  return (
    <div className="content-stretch flex flex-col h-[236.008px] items-start justify-between relative shrink-0 text-black w-full" data-name="about">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full">Про музей</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Історія</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Місія</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Команда</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Партнери</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Доступність</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Документи</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Допомога музею</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Контакти</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23.9998">
        <g id="Group">
          <path d={svgPaths.p30a69580} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1efe400} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2d1943f0} fill="var(--fill-0, black)" id="Vector_3" />
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
          <path d={svgPaths.p128b0d80} fill="var(--fill-0, black)" id="Vector" />
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
          <path d={svgPaths.p396bb380} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1948ba00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p728d600} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p53fb900} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p399cc700} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.pce9980} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[20px] items-end relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p3ae40300} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
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
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]">Наші соцмережі</p>
      <Frame2 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute inset-[8.33%_8.01%]" data-name="МВС_Лого">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.6617 36.3822">
        <g id="ÐÐÐ¡_ÐÐ¾Ð³Ð¾">
          <g id="Group">
            <path d={svgPaths.p2442d40} fill="var(--fill-0, black)" id="Vector" />
            <path d={svgPaths.p2a222180} fill="var(--fill-0, black)" id="Vector_2" />
            <path d={svgPaths.p1c8adf80} fill="var(--fill-0, black)" id="Vector_3" />
            <path d={svgPaths.p2bde6780} fill="var(--fill-0, black)" id="Vector_4" />
            <path d={svgPaths.p383c8b80} fill="var(--fill-0, black)" id="Vector_5" />
            <path d={svgPaths.p13802100} fill="var(--fill-0, black)" id="Vector_6" />
            <path d={svgPaths.paad2670} fill="var(--fill-0, black)" id="Vector_7" />
            <path d={svgPaths.p18df2270} fill="var(--fill-0, black)" id="Vector_8" />
            <path d={svgPaths.p280f2f40} fill="var(--fill-0, black)" id="Vector_9" />
            <path d={svgPaths.p1074100} fill="var(--fill-0, black)" id="Vector_10" />
            <path d={svgPaths.pa5c1980} fill="var(--fill-0, black)" id="Vector_11" />
            <path d={svgPaths.p9a4ae00} fill="var(--fill-0, black)" id="Vector_12" />
            <path d={svgPaths.p506bb00} fill="var(--fill-0, black)" id="Vector_13" />
            <path d={svgPaths.p384320a0} fill="var(--fill-0, black)" id="Vector_14" />
            <path d={svgPaths.pdd80670} fill="var(--fill-0, black)" id="Vector_15" />
            <path d={svgPaths.p13ad3100} fill="var(--fill-0, black)" id="Vector_16" />
            <path d={svgPaths.pa18f200} fill="var(--fill-0, black)" id="Vector_17" />
            <path d={svgPaths.p29ef8300} fill="var(--fill-0, black)" id="Vector_18" />
            <path d={svgPaths.p39206580} fill="var(--fill-0, black)" id="Vector_19" />
            <path d={svgPaths.p26e46b00} fill="var(--fill-0, black)" id="Vector_20" />
            <path d={svgPaths.p64a0980} fill="var(--fill-0, black)" id="Vector_21" />
            <path d={svgPaths.p13a97100} fill="var(--fill-0, black)" id="Vector_22" />
            <path d={svgPaths.p10cceb80} fill="var(--fill-0, black)" id="Vector_23" />
            <path d={svgPaths.p18266380} fill="var(--fill-0, black)" id="Vector_24" />
            <path d={svgPaths.p2037c100} fill="var(--fill-0, black)" id="Vector_25" />
            <path d={svgPaths.p358225b0} fill="var(--fill-0, black)" id="Vector_26" />
            <path d={svgPaths.p83e7b00} fill="var(--fill-0, black)" id="Vector_27" />
            <path d={svgPaths.p2765d4f0} fill="var(--fill-0, black)" id="Vector_28" />
            <path d={svgPaths.p24ee9500} fill="var(--fill-0, black)" id="Vector_29" />
            <path d={svgPaths.pd408400} fill="var(--fill-0, black)" id="Vector_30" />
            <path d={svgPaths.p34c31980} fill="var(--fill-0, black)" id="Vector_31" />
            <path d={svgPaths.p3057f900} fill="var(--fill-0, black)" id="Vector_32" />
            <path d={svgPaths.p3f8c0e00} fill="var(--fill-0, black)" id="Vector_33" />
            <path d={svgPaths.p171c9fc0} fill="var(--fill-0, black)" id="Vector_34" />
            <path d={svgPaths.p3f37fb80} fill="var(--fill-0, black)" id="Vector_35" />
            <path d={svgPaths.p3a55d3f2} fill="var(--fill-0, black)" id="Vector_36" />
            <path d={svgPaths.p9690880} fill="var(--fill-0, black)" id="Vector_37" />
            <path d={svgPaths.p33c689a0} fill="var(--fill-0, black)" id="Vector_38" />
            <path d={svgPaths.p19aea680} fill="var(--fill-0, black)" id="Vector_39" />
            <path d={svgPaths.p3d0300} fill="var(--fill-0, black)" id="Vector_40" />
            <path d={svgPaths.p3ed95300} fill="var(--fill-0, black)" id="Vector_41" />
            <path d={svgPaths.p3d0e0300} fill="var(--fill-0, black)" id="Vector_42" />
            <path d={svgPaths.p23b7980} fill="var(--fill-0, black)" id="Vector_43" />
            <path d={svgPaths.p2ae86200} fill="var(--fill-0, black)" id="Vector_44" />
            <path d={svgPaths.p3d683840} fill="var(--fill-0, black)" id="Vector_45" />
            <path d={svgPaths.p11e4ac80} fill="var(--fill-0, black)" id="Vector_46" />
            <path d={svgPaths.p298ccb00} fill="var(--fill-0, black)" id="Vector_47" />
            <path d={svgPaths.p3e93ec80} fill="var(--fill-0, black)" id="Vector_48" />
          </g>
          <path d={svgPaths.p22fad480} fill="var(--fill-0, black)" id="Vector_49" />
          <path d={svgPaths.p20cc8780} fill="var(--fill-0, black)" id="Vector_50" />
          <path d={svgPaths.p3b19f200} fill="var(--fill-0, black)" id="Vector_51" />
          <path d={svgPaths.p3da0fb80} fill="var(--fill-0, black)" id="Vector_52" />
          <path d={svgPaths.p3e64c900} fill="var(--fill-0, black)" id="Vector_53" />
          <g id="Group_2">
            <path d={svgPaths.p188ef000} fill="var(--fill-0, black)" id="Vector_54" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p1989600} fill="var(--fill-0, black)" id="Vector_55" />
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
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">За підтримки:</p>
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
            <mask height="19" id="mask0_4_555" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="120" x="0" y="2">
              <path clipRule="evenodd" d={svgPaths.p283f8700} fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 18" />
            </mask>
            <g mask="url(#mask0_4_555)">
              <path clipRule="evenodd" d={svgPaths.p2d183d80} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 17" />
            </g>
          </g>
          <path clipRule="evenodd" d={svgPaths.p2e30f700} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 1" />
          <path clipRule="evenodd" d={svgPaths.p1f4b1200} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 3" />
          <path clipRule="evenodd" d={svgPaths.p17ffc00} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 5" />
          <path clipRule="evenodd" d={svgPaths.p1a819f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 8" />
          <path clipRule="evenodd" d={svgPaths.p393f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 10" />
          <path clipRule="evenodd" d={svgPaths.p2398d580} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill 12" />
        </g>
      </svg>
    </div>
  );
}

function Infotech() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="infotech">
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">Розробник:</p>
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
            <path d={svgPaths.p342dad00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[50px]" data-name="visa-svgrepo-com">
        <div className="absolute inset-[16.67%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 33.3333">
            <path d={svgPaths.p33e73f00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Mobile({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  const { lang } = useLanguage();
  return (
    <LangCtx.Provider value={lang}>
    <div className="bg-white content-stretch flex flex-col gap-[5px] isolate items-start relative size-full pb-[64px]" data-name="Mobile">
      <div className="h-[73px] max-w-[375px] shrink-0 sticky top-0 w-full z-[3]" data-name="header menu">
        <Frame1 />
      </div>
      <TicketsSingle activeTab={activeTab} onTabChange={onTabChange} />
      <div className="bg-[#f5f3e9] content-stretch flex flex-col gap-[24px] items-start max-w-[375px] px-[16px] py-[56px] relative shrink-0 w-[375px] z-[1]" data-name="footer">
        <Logo />
        <Contacts />
        <Main />
        <About />
        <SocialMedias />
        <Developed />
        <Payment />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#e6bc00]">
        <a
          href="https://next.privat24.ua/payments/form/%7B%22token%22:%220e2e9a669370d88b9b0e991d32ade8f4r4fampry%22,%22outSource%22:%22QR-mob%22%7D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-[16px] py-[16px]"
        >
          <p className="font-['Oswald',sans-serif] font-medium leading-[24px] text-[20px] text-black uppercase"><T uk="Придбати квитки" en="Buy tickets" /></p>
        </a>
      </div>
    </div>
    </LangCtx.Provider>
  );
}
