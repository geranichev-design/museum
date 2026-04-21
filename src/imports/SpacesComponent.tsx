import { useState, useEffect, type ReactElement } from "react";
import { useSearchParams } from "react-router";
import { Gallery } from "../app/components/ui/Gallery";
import { PageHero } from "../app/components/PageHero";

// ── Icons ──────────────────────────────────────────────────────────────────
function IconMonitor() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="1" />
      <path d="M8 21H16M12 17V21" />
    </svg>
  );
}
function IconStar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function IconPerson() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M4 21C4 17.134 7.582 14 12 14C16.418 14 20 17.134 20 21" />
    </svg>
  );
}
function IconBriefcase() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="1" />
      <path d="M16 7V5C16 3.895 15.105 3 14 3H10C8.895 3 8 3.895 8 5V7" />
      <path d="M2 12H22" />
    </svg>
  );
}
function IconCamera() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}
function IconCoffee() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18" />
      <path d="M2 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5786 15.0609 21 14 21H6C4.93913 21 3.92172 20.5786 3.17157 19.8284C2.42143 19.0783 2 18.0609 2 17V8Z" />
      <path d="M6 1V4M10 1V4M14 1V4" />
    </svg>
  );
}
function IconLab() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3H15M9 3V10L4.5 18C4.5 18 3 21 6 21H18C21 21 19.5 18 19.5 18L15 10V3M9 3H15" />
      <path d="M6.5 16H17.5" />
    </svg>
  );
}
function IconWifi() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.42 9C4.53 5.89 8.73 4 13 4C17.27 4 21.47 5.89 24.58 9" />
      <path d="M5 12.55C7.35 10.19 10.09 9 13 9C15.91 9 18.65 10.19 21 12.55" />
      <path d="M8.53 16.11C10.05 14.59 11.47 14 13 14C14.53 14 15.95 14.59 17.47 16.11" />
      <circle cx="13" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}
function IconTower() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L12 22" />
      <path d="M5 8H19" />
      <path d="M7 14H17" />
      <path d="M9 20H15" />
      <path d="M12 2L5 8M12 2L19 8" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────
type FeatureIcon = "monitor" | "star" | "person" | "briefcase" | "camera" | "coffee" | "lab" | "wifi" | "tower";

interface Feature { icon: FeatureIcon; text: string }
interface Space { name: string; description: string; features: Feature[] }

const ICON_MAP: Record<FeatureIcon, ReactElement> = {
  monitor: <IconMonitor />,
  star: <IconStar />,
  person: <IconPerson />,
  briefcase: <IconBriefcase />,
  camera: <IconCamera />,
  coffee: <IconCoffee />,
  lab: <IconLab />,
  wifi: <IconWifi />,
  tower: <IconTower />,
};

const SPACES: Space[] = [
  {
    name: "Експозиція",
    description: "Постійна експозиція музею розповідає про трагедію Чорнобиля через унікальні артефакти, документи та фотоматеріали. Відвідувачі можуть дізнатися про події квітня 1986 року, долі людей та наслідки катастрофи для України і світу. Тут зберігаються понад 7 000 музейних предметів, пов'язаних із Чорнобильською аварією.",
    features: [
      { icon: "star", text: "Понад 7 000 унікальних музейних предметів" },
      { icon: "person", text: "Для відвідувачів усіх вікових груп" },
      { icon: "briefcase", text: "Індивідуальні та групові екскурсії" },
      { icon: "monitor", text: "Мультимедійні елементи в експозиції" },
    ],
  },
  {
    name: "Мультимедійна зала",
    description: "Мультимедійна зала музею - це сучасний простір, де історія Чорнобильської аварії оживає через відео та інтерактивні формати. Тут відвідувачі можуть переглянути документальні та художні фільми, відвідати кінопокази або долучитися до музейних зустрічей. Оформлення зали створює атмосферу глибокого занурення, допомагаючи краще зрозуміти події Чорнобильської катастрофи та їхній вплив на світ. Це місце поєднує освіту, культуру й живе спілкування.",
    features: [
      { icon: "monitor", text: "Обладнання: проектор, екран" },
      { icon: "star", text: "Підходить для кінопоказів, лекцій та презентацій" },
      { icon: "person", text: "Місткість: до 30 осіб" },
      { icon: "briefcase", text: "Можливість проведення закритих подій, показів, презентацій" },
    ],
  },
  {
    name: "Оглядова вежа",
    description: "Оглядова вежа музею надає унікальну можливість побачити панораму Подільського району Києва. З її висоти відкривається вид на Поділ, Дніпро та пам'ятки архітектури. Це простір для роздумів і відпочинку після занурення в музейну експозицію.",
    features: [
      { icon: "tower", text: "Панорамний вид на Поділ та Дніпро" },
      { icon: "person", text: "Місткість: до 15 осіб одночасно" },
      { icon: "star", text: "Унікальна архітектурна точка" },
      { icon: "briefcase", text: "Відкрита у години роботи музею" },
    ],
  },
  {
    name: "Віртуальна зона",
    description: "Віртуальна зона музею дозволяє відвідати Зону відчуження, не виїжджаючи з Києва. За допомогою VR-технологій ви можете поринути у атмосферу покинутого Прип'яті та дізнатись більше про наслідки катастрофи. Це унікальний інтерактивний досвід для всіх бажаючих.",
    features: [
      { icon: "camera", text: "VR-обладнання та 3D-тури" },
      { icon: "person", text: "Від 12 років (за умови супроводу дорослих — від 7 років)" },
      { icon: "star", text: "Віртуальна екскурсія зоною відчуження" },
      { icon: "monitor", text: "Сучасне мультимедійне обладнання" },
    ],
  },
  {
    name: "Лабораторія",
    description: "Лабораторія музею — це освітній простір для проведення майстер-класів, наукових занять та інтерактивних програм для школярів і студентів. Тут проводяться дослідницькі проєкти, пов'язані з темою Чорнобиля, радіаційної безпеки та ядерної фізики.",
    features: [
      { icon: "lab", text: "Обладнання для наукових дослідів" },
      { icon: "star", text: "Освітні програми для шкіл та університетів" },
      { icon: "person", text: "Місткість: до 20 осіб" },
      { icon: "briefcase", text: "Майстер-класи та наукові воркшопи" },
    ],
  },
  {
    name: "Коворкінг",
    description: "Коворкінг у музеї — це сучасний робочий простір у неповторній атмосфері. Тут можна орендувати робоче місце, провести зустріч або невелику нараду. Швидкий Wi-Fi, зручні меблі та натхненне оточення музейного середовища.",
    features: [
      { icon: "wifi", text: "Безлімітний швидкісний Wi-Fi" },
      { icon: "person", text: "Місткість: до 12 робочих місць" },
      { icon: "briefcase", text: "Оренда на годину або повний день" },
      { icon: "coffee", text: "Кава та чай включені" },
    ],
  },
  {
    name: "Кав'ярня",
    description: "Музейна кав'ярня — затишне місце для відпочинку та спілкування. Тут подають каву, чай та легкі закуски. Інтер'єр кав'ярні гармоніює з духом музею: стримано, стильно і наповнено змістом.",
    features: [
      { icon: "coffee", text: "Свіжозварена кава та авторські напої" },
      { icon: "person", text: "Місткість: до 25 відвідувачів" },
      { icon: "star", text: "Легкі закуски та десерти" },
      { icon: "briefcase", text: "Відкрита у години роботи музею" },
    ],
  },
  {
    name: "Виставковий простір (Open-space)",
    description: "Відкритий виставковий простір музею призначений для тимчасових виставок, культурних подій та художніх інсталяцій. Гнучке планування дозволяє організовувати різноманітні заходи — від камерних виставок до масштабних публічних подій.",
    features: [
      { icon: "star", text: "Гнучке планування простору" },
      { icon: "person", text: "Місткість: до 100 осіб" },
      { icon: "briefcase", text: "Оренда для виставок, перформансів та подій" },
      { icon: "monitor", text: "Технічне оснащення за запитом" },
    ],
  },
];

const GALLERY_IMAGES = [
  "/hero-bg.jpg",
  "/about-hero-bg.jpg",
  "/hero-bg.jpg",
  "/about-hero-bg.jpg",
  "/hero-bg.jpg",
];

// ── Component ──────────────────────────────────────────────────────────────
export default function SpacesComponent({ onBuyTicket }: { onBuyTicket?: () => void }) {
  const [searchParams] = useSearchParams();
  const [activeIdx, setActiveIdx] = useState(() => {
    const name = searchParams.get("space");
    if (!name) return 0;
    const idx = SPACES.findIndex((s) => s.name === name);
    return idx >= 0 ? idx : 0;
  });
  useEffect(() => {
    const name = searchParams.get("space");
    if (!name) return;
    const idx = SPACES.findIndex((s) => s.name === name);
    if (idx >= 0) setActiveIdx(idx);
  }, [searchParams]);

  const space = SPACES[activeIdx];

  function selectSpace(i: number) {
    setActiveIdx(i);
  }

  return (
    <div data-name="Desktop">
      <PageHero
        title="ПРОСТОРИ МУЗЕЮ"
        imageSrc="/hero-bg.jpg"
        buttonText="ПРИДБАТИ КВИТОК"
        onButtonClick={onBuyTicket}
      />

      {/* Content */}
      <div className="bg-white py-[48px] md:py-[80px]">
        <div className="mx-auto max-w-[1200px] px-[16px] md:px-[24px] flex flex-col gap-[32px] md:gap-[40px]">

          {/* Section title */}
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#e6bc00] shrink-0 size-[32px]" />
            <p className="font-['Oswald',sans-serif] font-medium text-[34px] md:text-[40px] text-black uppercase leading-[1]">
              ПРОСТОРИ
            </p>
          </div>

          {/* Mobile: horizontal tab strip */}
          <div className="md:hidden flex overflow-x-auto gap-0 border-b border-[#d4d4d4]">
            {SPACES.map((s, i) => (
              <button
                key={i}
                onClick={() => selectSpace(i)}
                className={`shrink-0 px-[12px] py-[10px] font-['Montserrat',sans-serif] text-[13px] whitespace-nowrap border-b-2 transition-colors ${
                  activeIdx === i
                    ? "border-[#e6bc00] text-black font-semibold"
                    : "border-transparent text-[#555] hover:text-black"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* Desktop: sidebar + content */}
          <div className="flex gap-0 items-start">

            {/* Sidebar — desktop only */}
            <div className="hidden md:flex flex-col w-[260px] shrink-0 border-r border-[#d4d4d4]">
              {SPACES.map((s, i) => (
                <button
                  key={i}
                  onClick={() => selectSpace(i)}
                  className={`w-full text-left px-[16px] py-[14px] font-['Montserrat',sans-serif] text-[16px] leading-[1.3] transition-colors ${
                    activeIdx === i
                      ? "bg-[#e6bc00] text-black font-medium"
                      : "text-black hover:bg-[#f5f3e9]"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>

            {/* Right: gallery + info */}
            <div className="flex-1 md:pl-[40px] flex flex-col gap-[24px]">

              <Gallery key={activeIdx} images={GALLERY_IMAGES} aspectClass="aspect-[3/2]" lightbox />

              {/* Description */}
              <p className="font-['Montserrat',sans-serif] font-normal text-[16px] text-black leading-[1.65]">
                {space.description}
              </p>

              {/* Separator */}
              <div className="border-b-2 border-black" />

              {/* Features */}
              <div className="flex flex-col gap-[16px] pb-[8px]">
                {space.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-[12px]">
                    <div className="text-[#e6bc00] shrink-0 size-[24px] flex items-center justify-center">
                      {ICON_MAP[f.icon]}
                    </div>
                    <span className="font-['Montserrat',sans-serif] font-normal text-[16px] text-black">
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
