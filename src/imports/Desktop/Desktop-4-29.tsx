import svgPaths from "./svg-j9zlden02d";
import { imgGroup } from "./svg-jkoqv";

function Group() {
  return (
    <div className="absolute inset-[8.4%_73.04%_8.78%_3.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.539px_0px] mask-size-[47.345px_47.205px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.2666 47.2046">
        <g id="Group">
          <path d={svgPaths.p2fbd0070} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p14e8a900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p217b6700} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p17119a80} fill="var(--fill-0, white)" id="Vector_4" />
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

function Frame2() {
  return (
    <div className="content-stretch flex font-['Oswald',sans-serif] font-medium gap-[19px] items-center leading-[22px] relative shrink-0 text-[20px] uppercase whitespace-nowrap">
      <p className="relative shrink-0 text-[#dfbe22]">укр</p>
      <p className="relative shrink-0 text-white">eng</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-end relative shrink-0 w-[561px]">
      <Frame2 />
      <a
        href="https://next.privat24.ua/payments/form/%7B%22token%22:%220e2e9a669370d88b9b0e991d32ade8f4r4fampry%22,%22outSource%22:%22QR-mob%22%7D"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#dfbe22] content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0"
        data-name="button"
      >
        <div className="flex flex-col font-['Oswald',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black uppercase whitespace-nowrap">
          <p className="leading-[22px]">Придбати квиток</p>
        </div>
      </a>
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

function Content() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] h-[73px] items-center justify-between max-w-[1200px] min-w-px py-[8px] relative" data-name="content">
      <a href="/" className="block">
        <Component1 />
      </a>
      <Frame3 />
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

function Informer() {
  return (
    <div className="border-4 border-[#e6bc00] col-1 justify-self-stretch relative row-3 self-start shrink-0" data-name="informer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[32px] relative size-full">
          <p className="flex-[1_0_0] font-['Montserrat',sans-serif] font-normal leading-[0] min-w-px relative text-[0px] text-black text-center whitespace-pre-wrap">
            <span className="leading-[normal] text-[16px]">
              {`У разі виникнення запитань телефонуйте за номерами: `}
              <br aria-hidden="true" />
            </span>
            <span className="font-['Montserrat',sans-serif] font-bold leading-[normal] text-[16px]">+38 044 425-44-62, +38 063 946-21-43</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="col-1 content-stretch flex items-center justify-between justify-self-stretch relative row-1 self-start shrink-0 w-full" data-name="title">
      <div className="flex gap-[8px] items-center">
        <div className="relative shrink-0 size-[32px]" data-name="icons">
          <div className="absolute bg-[#e6bc00] inset-0" />
        </div>
        <p className="font-['Oswald',sans-serif] font-medium leading-[normal] relative shrink-0 text-[34px] text-black uppercase whitespace-nowrap">Квитки</p>
      </div>
      <a
        href="https://next.privat24.ua/payments/form/%7B%22token%22:%220e2e9a669370d88b9b0e991d32ade8f4r4fampry%22,%22outSource%22:%22QR-mob%22%7D"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#e6bc00] content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0 cursor-pointer pointer-events-auto z-10"
        data-name="button"
      >
        <div className="flex flex-col font-['Oswald',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black uppercase whitespace-nowrap">
          <p className="leading-[24px]">Купити квиток</p>
        </div>
      </a>
    </div>
  );
}

const TAB_LABELS: Record<string, string> = {
  single: "Персональний",
  group: "Груповий",
  free: "Безкоштовні",
  additional: "Додаткові",
};

function Tabs({ activeTab }: { activeTab: string }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="tabs">
      {Object.entries(TAB_LABELS).map(([id, label]) => (
        <div key={id} className="cursor-pointer flex-[1_0_0] min-w-px relative" data-name="tab">
          <div aria-hidden="true" className={`absolute ${activeTab === id ? "border-b-8" : "border-b"} border-black border-solid inset-0 pointer-events-none`} />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[8px] py-[16px] relative size-full">
              <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] text-black text-center uppercase whitespace-nowrap">{label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TicketRow({ title, description, price }: { title: string; description: string; price: string }) {
  return (
    <div className="gap-x-[24px] grid grid-cols-[minmax(0,1fr)_auto] grid-rows-[repeat(1,fit-content(100%))] py-[16px] relative shrink-0 w-full" data-name="ticket">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0 text-black" data-name="text">
        <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full">{title}</p>
        <p className="font-['Montserrat',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] w-full">{description}</p>
      </div>
      <p className="col-2 font-['Oswald',sans-serif] font-medium justify-self-end leading-[24px] relative row-1 self-start shrink-0 text-[20px] text-black uppercase">{price}</p>
    </div>
  );
}

function FreeTicketRow({ title, items, description }: { title: string; items?: string[]; description?: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-[24px] py-[16px] relative shrink-0 w-full" data-name="ticket">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0 text-black" data-name="text">
        <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full">{title}</p>
        {description && (
          <p className="font-['Montserrat',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] w-full">{description}</p>
        )}
        {items && (
          <ul className="block font-['Montserrat',sans-serif] font-normal list-disc relative shrink-0 text-[16px] w-full">
            {items.map((item, i) => (
              <li key={i} className="ms-[24px] leading-[22px]">{item}</li>
            ))}
          </ul>
        )}
      </div>
      <p className="col-2 font-['Oswald',sans-serif] font-medium leading-[24px] relative row-1 self-start shrink-0 text-[20px] text-black uppercase whitespace-nowrap">Безкоштовно</p>
    </div>
  );
}

const FREE_TICKETS: { title: string; items?: string[]; description?: string }[] = [
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

const ADDITIONAL_TICKETS = [
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

const GROUP_TICKETS = [
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

function Text() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0 text-black" data-name="text">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full">{`Вхідний квиток `}</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] w-full">Відвідування музеїв</p>
    </div>
  );
}

function Ticket() {
  return (
    <div className="gap-x-[24px] grid grid-cols-[minmax(0,1fr)_auto] py-[16px] relative shrink-0 w-full" data-name="ticket">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <Text />
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative self-start shrink-0 text-[20px] text-black uppercase whitespace-nowrap">{`131 грн`}</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0 text-black" data-name="text">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full">Пільговий вхідний квиток</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] w-full">{`Відвідування музеїв на пільгових умовах, передбачених законодавством `}</p>
    </div>
  );
}

function Ticket1() {
  return (
    <div className="gap-x-[24px] grid grid-cols-[minmax(0,1fr)_auto] py-[16px] relative shrink-0 w-full" data-name="ticket">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <Text1 />
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative self-start shrink-0 text-[20px] text-black uppercase whitespace-nowrap">66 грн</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0 text-black" data-name="text">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full">Екскурсійний квиток</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] w-full">Обслуговування окремих відвідувачів на територіях та у приміщеннях музеїв під час огляду експозицій тощо</p>
    </div>
  );
}

function Ticket2() {
  return (
    <div className="gap-x-[24px] grid grid-cols-[minmax(0,1fr)_auto] py-[16px] relative shrink-0 w-full" data-name="ticket">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <Text2 />
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative self-start shrink-0 text-[20px] text-black uppercase whitespace-nowrap">579 грн</p>
    </div>
  );
}

function TicketsSingle({ activeTab }: { activeTab: string }) {
  return (
    <div className="bg-white gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] px-[55px] py-[72px] relative shrink-0 w-full max-w-[1200px] mx-auto z-[2]" data-name="tickets single">
      <Informer />
      <Title />
      <div className="col-1 content-stretch flex flex-col gap-[32px] items-start relative row-2 self-start shrink-0 w-full" data-name="квитки">
        <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
        <Tabs activeTab={activeTab} />
        {activeTab === "single" && (
          <>
            <Ticket />
            <Ticket1 />
            <Ticket2 />
          </>
        )}
        {activeTab === "group" && GROUP_TICKETS.map((t, i) => (
          <TicketRow key={i} title={t.title} description={t.description} price={t.price} />
        ))}
        {activeTab === "free" && FREE_TICKETS.map((t, i) => (
          <FreeTicketRow key={i} title={t.title} items={t.items} description={t.description} />
        ))}
        {activeTab === "additional" && ADDITIONAL_TICKETS.map((t, i) => (
          <TicketRow key={i} title={t.title} description={t.description} price={t.price} />
        ))}
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
            <path d={svgPaths.p1849bc00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p11e81980} fill="var(--fill-0, black)" />
            <path d={svgPaths.p171cf380} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1f06c000} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1cf81b80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2c5f1600} fill="var(--fill-0, black)" />
            <path d={svgPaths.p253ba300} fill="var(--fill-0, black)" />
            <path d={svgPaths.p399bef2} fill="var(--fill-0, black)" />
            <path d={svgPaths.p16eb0100} fill="var(--fill-0, black)" />
            <path d={svgPaths.p381ce880} fill="var(--fill-0, black)" />
            <path d={svgPaths.p39ee5b80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p637da80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p20f83a00} fill="var(--fill-0, black)" />
            <path d={svgPaths.pbda700} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1c935d00} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p2f7a8f00} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p1a10d000} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p6c166f0} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p215ba800} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p123e6600} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.pb1a0b80} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2d98600} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.pc91bd00} fill="var(--fill-0, black)" />
            <path d={svgPaths.pa4dbb00} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p278eadc0} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p38e7ff70} fill="var(--fill-0, black)" />
          </g>
          <path d={svgPaths.p19e06680} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Contacts() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-[2/span_2] self-start shrink-0 text-black" data-name="contacts">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full">Контактна інформація</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">м. Київ, провулок Хорива, 1,</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">тел. +38 044 482-56-27</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">Пн – Сб (Нд - вихідний день)</p>
      <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">10:00 – 18.00 (каса до 17.00)</p>
    </div>
  );
}

function Main() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-between justify-self-stretch relative row-[1/span_3] self-stretch shrink-0" data-name="main">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]">Головна</p>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Придбати квитки</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Екскурсії</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Анонс подій</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Історія катастрофи</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Простори музею</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Вікторина</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-between justify-self-stretch relative row-[1/span_3] self-stretch shrink-0" data-name="about">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]">Про музей</p>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Історія</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Місія</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Команда</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Партнери</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Доступність</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Документи</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Допомога музею</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="atoms">
        <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">Контакти</p>
      </div>
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

function Frame1() {
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
    <div className="col-4 content-stretch flex flex-col gap-[6px] items-start relative row-1 self-start shrink-0 w-[274.5px]" data-name="social medias">
      <p className="font-['Oswald',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]">Наші соцмережі</p>
      <Frame1 />
    </div>
  );
}

function Payment() {
  return (
    <div className="col-4 content-stretch flex gap-[16px] items-center justify-self-start relative row-3 self-start shrink-0" data-name="payment">
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

function Component() {
  return (
    <div className="absolute inset-[8.33%_8.01%]" data-name="МВС_Лого">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.6617 36.3822">
        <g id="ÐÐÐ¡_ÐÐ¾Ð³Ð¾">
          <g id="Group">
            <path d={svgPaths.p2ea19db0} fill="var(--fill-0, black)" id="Vector" />
            <path d={svgPaths.p12b7ba80} fill="var(--fill-0, black)" id="Vector_2" />
            <path d={svgPaths.pc6c0200} fill="var(--fill-0, black)" id="Vector_3" />
            <path d={svgPaths.p3acc3200} fill="var(--fill-0, black)" id="Vector_4" />
            <path d={svgPaths.p3f0b0f00} fill="var(--fill-0, black)" id="Vector_5" />
            <path d={svgPaths.p12bb6df0} fill="var(--fill-0, black)" id="Vector_6" />
            <path d={svgPaths.p274ee400} fill="var(--fill-0, black)" id="Vector_7" />
            <path d={svgPaths.p20521f00} fill="var(--fill-0, black)" id="Vector_8" />
            <path d={svgPaths.p10eccf00} fill="var(--fill-0, black)" id="Vector_9" />
            <path d={svgPaths.p20cacd00} fill="var(--fill-0, black)" id="Vector_10" />
            <path d={svgPaths.p32ca9bb0} fill="var(--fill-0, black)" id="Vector_11" />
            <path d={svgPaths.p97e400} fill="var(--fill-0, black)" id="Vector_12" />
            <path d={svgPaths.p125f1800} fill="var(--fill-0, black)" id="Vector_13" />
            <path d={svgPaths.p17cae700} fill="var(--fill-0, black)" id="Vector_14" />
            <path d={svgPaths.p19524b00} fill="var(--fill-0, black)" id="Vector_15" />
            <path d={svgPaths.p372e7a00} fill="var(--fill-0, black)" id="Vector_16" />
            <path d={svgPaths.pd240170} fill="var(--fill-0, black)" id="Vector_17" />
            <path d={svgPaths.p15789d00} fill="var(--fill-0, black)" id="Vector_18" />
            <path d={svgPaths.p1fa49880} fill="var(--fill-0, black)" id="Vector_19" />
            <path d={svgPaths.p38962700} fill="var(--fill-0, black)" id="Vector_20" />
            <path d={svgPaths.p2d8fa500} fill="var(--fill-0, black)" id="Vector_21" />
            <path d={svgPaths.p1074a880} fill="var(--fill-0, black)" id="Vector_22" />
            <path d={svgPaths.p2c096200} fill="var(--fill-0, black)" id="Vector_23" />
            <path d={svgPaths.p295615f0} fill="var(--fill-0, black)" id="Vector_24" />
            <path d={svgPaths.p651f800} fill="var(--fill-0, black)" id="Vector_25" />
            <path d={svgPaths.p3dcfda80} fill="var(--fill-0, black)" id="Vector_26" />
            <path d={svgPaths.paa2ad00} fill="var(--fill-0, black)" id="Vector_27" />
            <path d={svgPaths.p3dbb6a00} fill="var(--fill-0, black)" id="Vector_28" />
            <path d={svgPaths.p2bd7ee80} fill="var(--fill-0, black)" id="Vector_29" />
            <path d={svgPaths.p2d9b700} fill="var(--fill-0, black)" id="Vector_30" />
            <path d={svgPaths.p31da2a00} fill="var(--fill-0, black)" id="Vector_31" />
            <path d={svgPaths.p4020d80} fill="var(--fill-0, black)" id="Vector_32" />
            <path d={svgPaths.p16082d00} fill="var(--fill-0, black)" id="Vector_33" />
            <path d={svgPaths.p65a8380} fill="var(--fill-0, black)" id="Vector_34" />
            <path d={svgPaths.p2e8fec70} fill="var(--fill-0, black)" id="Vector_35" />
            <path d={svgPaths.p2e169b00} fill="var(--fill-0, black)" id="Vector_36" />
            <path d={svgPaths.p24278600} fill="var(--fill-0, black)" id="Vector_37" />
            <path d={svgPaths.pa08ddc0} fill="var(--fill-0, black)" id="Vector_38" />
            <path d={svgPaths.p31b5f700} fill="var(--fill-0, black)" id="Vector_39" />
            <path d={svgPaths.p3e539400} fill="var(--fill-0, black)" id="Vector_40" />
            <path d={svgPaths.p26e67370} fill="var(--fill-0, black)" id="Vector_41" />
            <path d={svgPaths.p6dfeb00} fill="var(--fill-0, black)" id="Vector_42" />
            <path d={svgPaths.p3a74a900} fill="var(--fill-0, black)" id="Vector_43" />
            <path d={svgPaths.p37733c80} fill="var(--fill-0, black)" id="Vector_44" />
            <path d={svgPaths.p3015fc00} fill="var(--fill-0, black)" id="Vector_45" />
            <path d={svgPaths.p379f2e70} fill="var(--fill-0, black)" id="Vector_46" />
            <path d={svgPaths.p3b3c4c80} fill="var(--fill-0, black)" id="Vector_47" />
            <path d={svgPaths.p23daeb80} fill="var(--fill-0, black)" id="Vector_48" />
          </g>
          <path d={svgPaths.p1ed8600} fill="var(--fill-0, black)" id="Vector_49" />
          <path d={svgPaths.p2ad02a80} fill="var(--fill-0, black)" id="Vector_50" />
          <path d={svgPaths.p17beee70} fill="var(--fill-0, black)" id="Vector_51" />
          <path d={svgPaths.p33987500} fill="var(--fill-0, black)" id="Vector_52" />
          <path d={svgPaths.p11e64b00} fill="var(--fill-0, black)" id="Vector_53" />
          <g id="Group_2">
            <path d={svgPaths.p210aef00} fill="var(--fill-0, black)" id="Vector_54" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p2d0a9e00} fill="var(--fill-0, black)" id="Vector_55" />
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
    <div className="col-4 content-stretch flex gap-[16px] items-start relative row-2 self-start shrink-0 w-[274.5px]" data-name="developed">
      <Mvs />
      <Infotech />
    </div>
  );
}

export default function Desktop({ activeTab = "single" }: { activeTab?: string }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] isolate items-start relative size-full" data-name="Desktop">
      <div className="bg-black content-stretch flex flex-col items-center shrink-0 sticky top-0 w-full z-[3]" data-name="header menu">
        <Head />
      </div>
      <TicketsSingle activeTab={activeTab} />
      <div className="bg-[#f5f3e9] gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] px-[55px] py-[72px] relative shrink-0 w-[1280px] z-[1]" data-name="footer">
        <Logo />
        <Contacts />
        <Main />
        <About />
        <SocialMedias />
        <Payment />
        <Developed />
      </div>
    </div>
  );
}
