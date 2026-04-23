import { useState, useEffect, type ReactElement } from "react";
import { Link, useSearchParams } from "react-router";
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
function IconClock() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
function IconVr() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9h6l2 2 2-2h6v8h-6l-2-2-2 2H4V9Z" />
      <path d="M10 11.5v1M14 11.5v1" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h16" />
      <path d="M7 20V12" />
      <path d="M12 20V8" />
      <path d="M17 20V15" />
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
type FeatureIcon = "monitor" | "star" | "person" | "briefcase" | "camera" | "coffee" | "lab" | "wifi" | "tower" | "clock" | "vr" | "chart";

interface Feature { icon: FeatureIcon; text: string }
interface Space { name: string; gallery: string[]; description: string; features: Feature[] }

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
  clock: <IconClock />,
  vr: <IconVr />,
  chart: <IconChart />,
};

const SPACES: Space[] = [
  {
    name: "Мультимедійна зала",
    gallery: [
      "/gallery/sapces_multimedia_hall/multi_01.png",
      "/gallery/sapces_multimedia_hall/multi_02.png",
      "/gallery/sapces_multimedia_hall/multi_03.png",
    ],
    description: "Мультимедійна зала музею — це сучасний простір, де історія Чорнобильської аварії оживає через відео та інтерактивні формати. Тут відвідувачі можуть переглянути документальні та художні фільми, відвідати кінопокази або долучитися до музейних зустрічей. Оформлення зали створює атмосферу глибокого занурення, допомагаючи краще зрозуміти події Чорнобильської катастрофи та їхній вплив на світ. Це місце поєднує освіту, культуру й живе спілкування.",
    features: [
      { icon: "monitor", text: "Обладнання: проектор, екран" },
      { icon: "star", text: "Підходить для кінопоказів, лекцій та презентацій" },
      { icon: "person", text: "Місткість: до 30 осіб" },
      { icon: "briefcase", text: "Можливість проведення закритих подій, показів, презентацій" },
    ],
  },
  {
    name: "Оглядова вежа",
    gallery: [
      "/gallery/sapces_observation_tower/tower_01.png",
      "/gallery/sapces_observation_tower/tower_02.png",
      "/gallery/sapces_observation_tower/tower_03.png",
      "/gallery/sapces_observation_tower/tower_04.png",
    ],
    description: "Унікальною частиною оновленого музейного простору є спостережна каланча — частина історичної будівлі Пожежного депо Подільської поліцейської дільниці. Первісно вежа використовувалась для дозорної служби та сигналізації — оповіщення сусідніх пожежних частин про розміри й місце виникнення пожежі, сушіння пожежних рукавів.\n\nТриярусна вежа музею має 2 відкриті оглядові майданчики. З майданчиків вежі відкривається один з кращих видів на Поділ — історичну частину Києва, популярне місце серед туристів та містян. Кожен бажаючий має можливість піднятися нагору і побачити район з унікальною архітектурою, де поєднується старий та новий Київ. Щоб зробити цей досвід більш змістовним, на оглядовому майданчику встановлені спеціальні інформаційні таблички «Що я бачу?». Вони допоможуть зорієнтуватися і підкажуть, що саме ви бачите: історичні будівлі, вулиці та знакові місця.",
    features: [
      { icon: "star", text: "Історична частина будівлі пожежного депо" },
      { icon: "tower", text: "Загальна висота вежі — 40 м" },
      { icon: "camera", text: "Панорамний вид на Поділ" },
      { icon: "monitor", text: "2 оглядові майданчики (15 м і 28 м)" },
      { icon: "person", text: "Доступна для індивідуальних відвідувань та груп до 10 осіб" },
      { icon: "briefcase", text: "Кількість сходинок — 122" },
      { icon: "clock", text: "Час підйому — 5–7 хвилин" },
    ],
  },
  {
    name: "Віртуальна зона",
    gallery: [
      "/gallery/sapces_virtual_zone/virtual_01.png",
      "/gallery/sapces_virtual_zone/virtual_02.png",
      "/gallery/sapces_virtual_zone/virtual_03.png",
    ],
    description: "Віртуальна зона Музею — це інноваційна зона, де відвідувачі можуть подивитися VR-тур зоною відчуження чи «відвідати» віртуальний музей «Чорнобиль: історія перемоги». Тут кожен має змогу «перенестися» до Прип'яті, побачити місця, які сьогодні недоступні або змінені часом. Завдяки VR відчуття присутності стає максимально реалістичним, а історія — ближчою й зрозумілішою. Цей простір поєднує технології та пам'ять, відкриваючи новий формат пізнання, що викликає сильні емоції та глибокі роздуми.",
    features: [
      { icon: "monitor", text: "VR-зона з ефектом повного занурення" },
      { icon: "vr", text: "Віртуальні тури зоною відчуження та Прип'яттю" },
      { icon: "person", text: "Одночасна участь: 3 особи" },
      { icon: "star", text: "Інтерактивні сценарії перегляду" },
      { icon: "briefcase", text: "Музейний досвід, недоступний у реальному просторі" },
    ],
  },
  {
    name: "Лабораторія",
    gallery: [
      "/gallery/sapces_laboratory/lab_01.png",
      "/gallery/sapces_laboratory/lab_02.png",
      "/gallery/sapces_laboratory/lab_03.png",
      "/gallery/sapces_laboratory/lab_04.png",
      "/gallery/sapces_laboratory/lab_05.png",
      "/gallery/sapces_laboratory/lab_06.png",
      "/gallery/sapces_laboratory/lab_07.png",
    ],
    description: "Лабораторія музею — це сучасний освітній простір, діяльність якого поєднує гнучкість та адаптивність. Модульні меблі дозволяють швидко змінювати простір залежно від потреб освітнього процесу, забезпечуючи його безперервність. Заняття, пов'язані із чорнобильською тематикою, проводяться фахівцями музею в доступній та цікавій формі, використовуючи мультимедійні засоби і різноманітні ігрові матеріали.\n\nВідвідувачі вчаться вимірювати радіаційний фон побутових предметів, розуміючи принципи роботи дозиметра, можуть відгадати чорнобильські артефакти на дотик, зіграти у «хрестики-нулики», де замість традиційних фішок використовуються знак атома та знак радіації, пройти пізнавальні вікторини та скласти пазли на мультимедійній панелі.",
    features: [
      { icon: "person", text: "Місткість — до 20 осіб" },
      { icon: "briefcase", text: "Робочі місця для індивідуальної та командної роботи" },
      { icon: "wifi", text: "Стабільне підключення до інтернету" },
      { icon: "star", text: "Тиха робоча атмосфера" },
      { icon: "monitor", text: "Зони для обговорень і зустрічей" },
      { icon: "chart", text: "Можливість оренди для роботи чи подій" },
    ],
  },
  {
    name: "Художній клас музею",
    gallery: [
      "/gallery/sapces_museum_art_class/art_01.png",
      "/gallery/sapces_museum_art_class/art_02.png",
    ],
    description: "Художній клас музею — спеціально облаштований простір, призначений для проведення творчих занять, майстер-класів та освітніх програм. Тут відвідувачі різного віку мають змогу зануритися у світ мистецтва на чорнобильську тематику, розвивати власні художні здібності та експериментувати з різними техніками і матеріалами.\n\nУ цьому класі регулярно організовуються заняття з живопису, графіки та декоративно-ужиткового мистецтва. Художник Музею та запрошені митці допомагають учасникам опановувати нові навички, розкривати творчий потенціал і знаходити власний стиль. Атмосфера простору сприяє натхненню, відкритості до нових ідей та творчому самовираженню.",
    features: [
      { icon: "star", text: "Простір для творчих занять і майстер-класів" },
      { icon: "briefcase", text: "Заняття з живопису, графіки та декоративного мистецтва" },
      { icon: "person", text: "Підходить для відвідувачів різного віку" },
      { icon: "lab", text: "Робота з різними техніками та матеріалами" },
      { icon: "camera", text: "Заняття проводять художник музею та запрошені митці" },
      { icon: "monitor", text: "Можливість участі в освітніх програмах" },
    ],
  },
  {
    name: "Етнографічний клас",
    gallery: [
      "/gallery/sapces_ethnographic_class/etnoclass.png",
    ],
    description: "Етнографічний клас музею — це пізнавальний та інтерактивний простір, присвячений вивченню традицій, побуту та культурної спадщини Чорнобильського Полісся. Тут відвідувачі мають змогу глибше ознайомитися з історією, звичаями, ремеслами та повсякденним життям місцевих жителів Полісся — поліщуків через освітні програми і практичні заняття.\n\nУ класі проводяться тематичні майстер-класи, лекції та інтерактивні заняття, під час яких учасники можуть дізнатися більше про традиційні ремесла — ткацтво, вишивку, гончарство чи розпис. Окрім цього, тут організовуються відтворення фрагментів обрядових дійств і святкових традицій. Етнографічний простір музею створює атмосферу живого зв'язку з минулим, сприяє збереженню нематеріальної культурної спадщини та формує повагу до традицій Чорнобильського Полісся.",
    features: [
      { icon: "star", text: "Простір для вивчення традицій і культури Полісся" },
      { icon: "monitor", text: "Інтерактивні заняття та освітні програми" },
      { icon: "lab", text: "Майстер-класи з традиційних ремесел (ткацтво, вишивка, гончарство, розпис)" },
      { icon: "briefcase", text: "Лекції та тематичні зустрічі" },
      { icon: "camera", text: "Відтворення обрядових дійств і традицій" },
    ],
  },
  {
    name: "Коворкінг",
    gallery: [
      "/gallery/sapces_coworking_space/coworking_01.png",
      "/gallery/sapces_coworking_space/coworking_02.png",
      "/gallery/sapces_coworking_space/coworking_03.png",
      "/gallery/sapces_coworking_space/coworking_04.png",
    ],
    description: "Коворкінг музею — це сучасний простір для роботи, навчання та обговорень. Тут створено комфортні умови для індивідуальної роботи й командних зустрічей, а атмосфера сприяє зосередженню та натхненню. Перебування в цьому місці додає глибини звичайним робочим процесам, адже поруч — історія, що змушує замислитися про відповідальність, науку й майбутнє. Коворкінг музею є не лише робочою зоною, а й простором народження нових проєктів.",
    features: [
      { icon: "person", text: "Місткість — до 20 осіб" },
      { icon: "briefcase", text: "Робочі місця для індивідуальної та командної роботи" },
      { icon: "wifi", text: "Стабільне підключення до інтернету" },
      { icon: "star", text: "Тиха робоча атмосфера" },
      { icon: "monitor", text: "Зони для обговорень і зустрічей" },
      { icon: "coffee", text: "Можливість оренди для роботи чи подій" },
    ],
  },
  {
    name: "Кав'ярня",
    gallery: [
      "/gallery/sapces_cafe/cafe_01.png",
      "/gallery/sapces_cafe/cafe_02.png",
    ],
    description: "Це простий і зручний простір, де можна перепочити після огляду експозиції, роботи в коворкінгу або бібліотеці. Тут спокійна атмосфера, яка логічно продовжує настрій музею: без зайвого шуму, з можливістю зупинитися і трохи «переварити» побачене. У кав'ярні можна взяти каву чи чай, перекусити або просто зробити паузу між залами. У меню також свіжа випічка та легкі перекуси.",
    features: [
      { icon: "coffee", text: "Кава та гарячі напої" },
      { icon: "star", text: "Щоденна свіжа випічка" },
      { icon: "briefcase", text: "Швидкі перекуси та бургери" },
      { icon: "monitor", text: "Комфортний простір для відпочинку" },
      { icon: "person", text: "Зручне розташування всередині музею" },
    ],
  },
  {
    name: "Виставковий простір",
    gallery: [
      "/gallery/sapces_open_space/open_space_01.png",
      "/gallery/sapces_open_space/open_space_02.png",
      "/gallery/sapces_open_space/open_space_03.png",
    ],
    description: "Нова виставкова зала музею — це простір, створений для експонування нових історичних та мистецьких проєктів. Вона дає можливість представляти тимчасові виставки та авторські інсталяції, доповнюючи основну експозицію музею та розширюючи традиційний формат експозиції. Зала, де народжуються нові інтерпретації теми Чорнобиля, легко адаптується під різні формати — від історичних документальних проєктів до сучасного мистецтва.",
    features: [
      { icon: "monitor", text: "Екран 5120 × 2880 — висока деталізація зображення" },
      { icon: "briefcase", text: "Площа — 137 м²" },
      { icon: "star", text: "Простір для тимчасових виставок" },
      { icon: "camera", text: "Гнучка адаптація під різні формати" },
      { icon: "lab", text: "Підходить для мистецьких і документальних проєктів" },
      { icon: "person", text: "Можливість проведення подій та презентацій" },
      { icon: "tower", text: "Окремі авторські інсталяції" },
    ],
  },
  {
    name: "Укриття",
    gallery: [
      "/gallery/sapces_shelter/shelter_01.png",
      "/gallery/sapces_shelter/shelter_02.png",
      "/gallery/sapces_shelter/shelter_03.png",
    ],
    description: "Оновлений музей має облаштоване укриття. Укриття пристосоване для безпечного перебування персоналу та відвідувачів під час повітряної тривоги, із урахуванням зручної навігації. Звідси можна швидко піднятися на перший поверх за допомогою спеціального підйомника, а далі — скористатися ліфтом, щоб потрапити до будь-якого простору музею. Це забезпечує безперервний і комфортний доступ до всіх зон будівлі.",
    features: [
      { icon: "star", text: "Безпечний простір у будівлі музею" },
      { icon: "briefcase", text: "Адаптоване для перебування відвідувачів" },
      { icon: "person", text: "Місткість: до 96 осіб" },
      { icon: "monitor", text: "Підйомник на 1 поверх (для маломобільних громадян)" },
    ],
  },
];

// ── Component ──────────────────────────────────────────────────────────────
export default function SpacesComponent({ onBuyTicket }: { onBuyTicket?: () => void }) {
  const [searchParams] = useSearchParams();
  const [activeIdx, setActiveIdx] = useState(() => {
    const name = searchParams.get("space");
    if (!name) return 0;
    const idx = SPACES.findIndex((s) => s.name === name || (s.name === "Виставковий простір" && name === "Виставковий простір (Open-space)"));
    return idx >= 0 ? idx : 0;
  });
  useEffect(() => {
    const name = searchParams.get("space");
    if (!name) return;
    const idx = SPACES.findIndex((s) => s.name === name || (s.name === "Виставковий простір" && name === "Виставковий простір (Open-space)"));
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
        videoSrc="/video/spaces.mp4"
        buttonText="ПРИДБАТИ КВИТОК"
        onButtonClick={onBuyTicket}
      />

      {/* Content */}
      <div className="bg-white py-[48px] md:py-[80px]">
        <div className="mx-auto max-w-[1200px] px-[16px] md:px-[24px] flex flex-col gap-[32px] md:gap-[40px]">

          {/* Section title */}
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#DFBE22] shrink-0 size-[32px]" />
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
                    ? "border-[#DFBE22] text-black font-semibold"
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
            <div className="hidden md:flex flex-col w-[260px] shrink-0 border-r-[6px] border-black">
              {SPACES.map((s, i) => (
                <button
                  key={i}
                  onClick={() => selectSpace(i)}
                  className={`w-full text-left px-[16px] py-[14px] mr-[16px] font-['Montserrat',sans-serif] text-[16px] leading-[1.3] transition-colors ${
                    activeIdx === i
                      ? "bg-[#DFBE22] text-black font-medium"
                      : "text-black hover:bg-[#f5f3e9]"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>

            {/* Right: gallery + info */}
            <div className="flex-1 md:pl-[40px] flex flex-col gap-[24px]">

              <Gallery key={activeIdx} images={space.gallery} aspectClass="aspect-[3/2]" lightbox />

              {/* Description */}
              <p className="font-['Montserrat',sans-serif] font-normal text-[16px] text-black leading-[1.65]">
                {space.description}
              </p>

              {/* Separator */}
              <div className="border-b-[6px] border-black" />

              {/* Features */}
              <div className="flex flex-col gap-[16px] pb-[8px]">
                {space.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-[12px]">
                    <div className="text-[#DFBE22] shrink-0 size-[24px] flex items-center justify-center">
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
