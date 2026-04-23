import { type ReactNode } from "react";
import { Link, useNavigate } from "react-router";
import { Gallery } from "./ui/Gallery";
import { PageHero } from "./PageHero";

const HISTORY_IMAGES = [
  "/gallery/exp_history/expo_09.png",
  "/gallery/exp_history/expo_10.png",
  "/gallery/exp_history/expo_11.png",
  "/gallery/exp_history/expo_12.png",
  "/gallery/exp_history/expo_13.png",
  "/gallery/exp_history/expo_14.png",
  "/gallery/exp_history/expo_15.png",
  "/gallery/exp_history/expo_16.png",
  "/gallery/exp_history/expo_17.png",
  "/gallery/exp_history/expo_18.png",
];

const EDUCATION_IMAGES = [
  "/gallery/exp_osv/expo_01.png",
  "/gallery/exp_osv/expo_02.png",
  "/gallery/exp_osv/expo_03.png",
  "/gallery/exp_osv/expo_04.png",
  "/gallery/exp_osv/expo_05.png",
  "/gallery/exp_osv/expo_06.png",
  "/gallery/exp_osv/expo_07.png",
  "/gallery/exp_osv/expo_08.png",
];

// ── Icons ──────────────────────────────────────────────────────────────────────

function IconExhibits() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

function IconArtifacts() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function IconGroup() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="3" />
      <path d="M3 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <circle cx="18" cy="7" r="3" />
      <path d="M15 11h1a4 4 0 0 1 4 4v2" />
    </svg>
  );
}

function IconAccessible() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="2" />
      <path d="M12 6v6l3 3" />
      <path d="M8 10l4 2" />
      <path d="M9 20a5 5 0 1 0 6-7.4" />
    </svg>
  );
}

// ── Section subtitle ───────────────────────────────────────────────────────────

function SectionSubtitle({ children }: { children: ReactNode }) {
  return (
    <p className="font-['Oswald',sans-serif] font-medium text-[20px] md:text-[24px] text-black uppercase leading-none mb-[24px] md:mb-[32px]">
      {children}
    </p>
  );
}

// ── Stat row ───────────────────────────────────────────────────────────────────

interface Stat {
  icon: ReactNode;
  text: string;
}

function StatsRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="flex flex-col gap-[10px] mt-[32px]">
      {stats.map((s, i) => (
        <div key={i} className="flex items-center gap-[10px]">
          <span className="shrink-0 text-black">{s.icon}</span>
          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-black leading-[1.4]">
            {s.text}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Body text ──────────────────────────────────────────────────────────────────

function Body({ children }: { children: ReactNode }) {
  return (
    <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[16px] text-black leading-[1.6]">
      {children}
    </p>
  );
}

// ── Historical stats ───────────────────────────────────────────────────────────

const HISTORICAL_STATS: Stat[] = [
  { icon: <IconExhibits />, text: "2 виставкові зали" },
  { icon: <IconArtifacts />, text: "947 експонатів" },
  { icon: <IconClock />, text: "тривалість екскурсії 40-45 хв" },
  { icon: <IconGroup />, text: "15 відвідувачів одночасно" },
  { icon: <IconAccessible />, text: "Доступно" },
];

const EDUCATIONAL_STATS: Stat[] = [
  { icon: <IconExhibits />, text: "1 виставкова зала" },
  { icon: <IconArtifacts />, text: "95 експонатів" },
  { icon: <IconClock />, text: "тривалість екскурсії 45 хв" },
  { icon: <IconGroup />, text: "15-20 відвідувачів одночасно" },
  { icon: <IconAccessible />, text: "Доступно" },
];

// ── Navigation Bar ─────────────────────────────────────────────────────────────

function NavigationBar() {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-[4px] items-center max-w-[1200px] w-full cursor-pointer"
      data-name="Navigation Bar"
      onClick={() => navigate("/")}
    >
      <img
        src={encodeURI("/icons/2arrow_left_blak.svg")}
        alt=""
        aria-hidden="true"
        className="block shrink-0 size-[16px]"
      />
      <p className="font-['Montserrat',sans-serif] font-semibold leading-normal text-black text-[16px] whitespace-nowrap">
        на головну
      </p>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export function ExpositionPageContent() {
  return (
    <div className="w-full bg-white">
      <PageHero
        title="ЕКСПОЗИЦІЯ"
        imageSrc="/hero-bg.jpg"
        videoSrc="/video/exposition.mp4"
      />
      <div className="max-w-[1200px] mx-auto px-[16px] md:px-[55px] py-[32px] md:py-[48px] flex flex-col gap-[40px] md:gap-[56px]">

        {/* Navigation Bar */}
        <NavigationBar />

        {/* Gallery 1 */}
        <Gallery
          images={HISTORY_IMAGES.length > 0 ? HISTORY_IMAGES : ["/exposition-collage.png"]}
          aspectClass="aspect-[16/7]"
          lightbox
        />

        {/* Historical section */}
        <div className="flex flex-col gap-[24px] md:gap-[32px]">
          <SectionSubtitle>Історична частина</SectionSubtitle>

          {/* Two-column: image left + text right (desktop) / image top + text bottom (mobile) */}
          <div className="flex flex-col md:flex-row gap-[16px] md:gap-[40px] md:items-start">
            {/* Image — full width on mobile, 42% on desktop */}
            <div className="w-full md:w-[42%] md:shrink-0">
              <img
                src="/History_1.png"
                alt="Чорнобильська АЕС"
                className="w-full h-auto"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-[12px] md:gap-[16px] flex-1 min-w-0">
              <Body>
                Нова експозиція «Чорнобиль: люди і сенси» осмислює Чорнобильську катастрофу як спільний досвід і глибоку травму, яка водночас стала свідченням стійкості українців. Вона розкриває багатогранність поняття «Чорнобиль» — від трагедії до переосмислення, від пам'яті до майбутнього.
              </Body>
              <Body>
                Експозиція побудована у двох часових вимірах: момент аварії та ліквідації її наслідків і сьогодення. Історичні зали охоплюють період від будівництва Чорнобильської атомної електростанції і життя Прип'яті до аварії 1986 року, ліквідації її наслідків і сучасних викликів, зокрема подій, пов'язаних із повномасштабною війною. Особливий акцент зроблено на особистих історіях ліквідаторів — людей, які першими стали на захист світу від наслідків катастрофи.
              </Body>
              <Body>
                Зала №1 занурює у переддень трагедії та її перебіг, найгостріші години. Тут висвітлено життя Прип'яті, роботу станції в умовах радянської системи і сам момент вибуху ЧАЕС. Важливим елементом є унікальна рухома діорама станції, інсталяції та інтерактиви, що буквально «оживлюють» події 1986 року.
              </Body>
            </div>
          </div>

          {/* Full-width text below */}
          <Body>
            Зала №2 висвітлює наслідки, втрати і життя після катастрофи. Ця зала розповідає про зниклий світ Чорнобильського Полісся, евакуацію і нову реальність тисяч людей, створення зони відчуження та глобальний вплив трагедії. Тут Чорнобиль постає не лише як минуле, а як процес, що тривав — від екологічних викликів і міжнародної співпраці до закриття станції, спорудження «Арки» і навіть подій повномасштабної війни, які знову повернули ЧАЕС у центр світової уваги.
          </Body>

          {/* Stats */}
          <StatsRow stats={HISTORICAL_STATS} />
        </div>

        {/* Gallery 2 */}
        <Gallery
          images={
            EDUCATION_IMAGES.length > 0
              ? EDUCATION_IMAGES
              : HISTORY_IMAGES.length > 0
              ? HISTORY_IMAGES
              : ["/exposition-collage.png"]
          }
          aspectClass="aspect-[16/7]"
          lightbox
        />

        {/* Educational section */}
        <div className="flex flex-col gap-[24px] md:gap-[32px]">
          <SectionSubtitle>Освітня частина</SectionSubtitle>

          <div className="flex flex-col md:flex-row gap-[32px] md:gap-[56px] md:items-start">
            {/* Image — first on mobile, second on desktop */}
            <div className="w-full md:w-[42%] md:shrink-0 order-first md:order-last">
              <img
                src="/exposition-collage.png"
                alt="Освітня частина"
                className="w-full h-auto"
              />
            </div>

            {/* Text + stats — second on mobile, first on desktop */}
            <div className="flex flex-col gap-[12px] md:gap-[16px] flex-1 min-w-0 order-last md:order-first">
              <Body>
                Освітня частина експозиції Національного музею «Чорнобиль» переносить Чорнобиль у площину сьогодення, показуючи, як досвід катастрофи продовжує впливати на Україну та світ.
              </Body>
              <Body>
                Зала №3 змінює оптику: від трагедії — до осмислення і майбутнього. Тут йдеться про розвиток атомної енергетики, нове бачення Чорнобильської зони відчуження як простору відродження та унікальної наукової лабораторії під відкритим небом. Експозиція досліджує Чорнобиль як культурний феномен — у мистецтві, літературі, кіно та поп-культурі. І, водночас, розвінчує міфи, що роками формувалися довкола нього.
              </Body>
              <Body>
                Відеоінсталяції, інтерактивні зони та навіть просторові рішення — зокрема підлога, що відтворює плиту біологічного захисту реактора — створюють ефект занурення і пропонують відвідувачу не лише дізнатися, а й переосмислити Чорнобиль як досвід, що формує наше майбутнє.
              </Body>
              <StatsRow stats={EDUCATIONAL_STATS} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
