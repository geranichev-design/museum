import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router";
import { MuseumInput } from "../app/components/ui/MuseumInput";
import { PageHero } from "../app/components/PageHero";
import { MuseumButton } from "../app/components/ui/MuseumButton";
import { getFirstCollectionItemId } from "../data/collectionData";

function SectionTitle({ children, white, darkSquare }: { children: string; white?: boolean; darkSquare?: boolean }) {
  return (
    <div className="flex gap-[8px] items-center mb-[32px] md:mb-[40px]">
      <div className={`${darkSquare ? "bg-black" : "bg-[#DFBE22]"} shrink-0 size-[24px] md:size-[32px]`} />
      <p className={`font-['Oswald',sans-serif] font-medium text-[22px] md:text-[32px] uppercase leading-none ${white ? "text-white" : "text-black"}`}>
        {children}
      </p>
    </div>
  );
}

function SectionImage({ src }: { src: string }) {
  return (
    <img src={src} alt="" className="w-full h-auto mb-[16px] md:mb-[20px]" />
  );
}

function BulletList({ items, textClass = "text-white" }: { items: string[]; textClass?: string }) {
  return (
    <ul className="space-y-[5px] md:space-y-[6px]">
      {items.map((item) => (
        <li key={item} className={`font-['Montserrat',sans-serif] text-[13px] md:text-[14px] leading-[1.5] flex gap-[8px] ${textClass}`}>
          <span className="shrink-0 mt-[2px]">·</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageHero
      title="ДОСЛІДНИКАМ"
      imageSrc="/about-hero-bg.jpg"
      buttonText="ПОДАТИ ЗАЯВКУ"
      onButtonClick={scrollToForm}
    />
  );
}

const STATS = [
  { value: "22'711", label: "музейних предметів" },
  { value: "17'582", label: "одиниці основного фонду" },
  { value: "4'862", label: "одиниці науково-допоміжного фонду" },
  { value: "267", label: "одиниць обмінного фонду" },
];

const DIGITAL_ITEMS = [
  "Речові пам'ятки",
  "Фото-, кіно-, пам'ятки",
  "Образотворче мистецтво",
  "Декоративно-ужиткове мистецтво",
  "Писемні джерела",
];

const NEW_ITEMS = [
  { title: "Поповнення фондової колекції", itemId: "new-поповнення" },
  { title: "Нові надходження", itemId: "new-надходження" },
  { title: "Музей отримав обладнання від Рівненської АЕС", itemId: "new-рівненська-аес" },
] as const;

function CollectionCard({
  title,
  itemId,
  lookupMode = "collection",
}: {
  title: string;
  itemId?: string;
  lookupMode?: "collection" | "item";
}) {
  const navigate = useNavigate();
  const firstItemId = lookupMode === "item" ? itemId ?? null : getFirstCollectionItemId(title);
  const isAvailable = Boolean(firstItemId);

  const handleClick = () => {
    if (firstItemId) {
      navigate(`/collection/${firstItemId}`);
    }
  };

  return (
    <div
      className={`border-[6px] border-black px-[16px] md:px-[24px] py-[16px] md:py-[20px] transition-colors ${
        isAvailable ? "cursor-pointer hover:bg-gray-50" : "opacity-50 cursor-default"
      }`}
      onClick={handleClick}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[8px] md:gap-0">
        <p className="font-['Oswald',sans-serif] font-medium text-[18px] md:text-[20px] text-black uppercase leading-tight">
          {title}
        </p>
        <span className="font-['Oswald',sans-serif] font-medium text-[16px] md:text-[18px] text-black md:whitespace-nowrap md:ml-4">
          {isAvailable ? "Детальніше »" : "Незабаром"}
        </span>
      </div>
    </div>
  );
}

function FondsSection() {
  const [activeTab, setActiveTab] = useState<"digital" | "new">("digital");

  return (
    <section id="funds" className="w-full bg-[#F5F3E8]">
      <div className="px-[16px] md:px-[55px] py-[40px] md:py-[72px] max-w-[1200px] mx-auto w-full">
      <SectionTitle>Фонди</SectionTitle>

      {/* Stats — vertical stack with separators on mobile, horizontal row on desktop */}
      <div className="mb-[32px] md:mb-[48px]">
        {/* Mobile */}
        <div className="md:hidden flex flex-col">
          {STATS.map((s, i) => (
            <div key={s.value}>
              <div className="py-[20px] flex flex-col items-center text-center">
                <p className="font-['Oswald',sans-serif] font-medium text-[48px] text-black leading-none">
                  {s.value}
                </p>
                <p className="font-['Montserrat',sans-serif] text-[13px] text-black leading-[1.4] mt-[6px]">
                  {s.label}
                </p>
              </div>
              {i < STATS.length - 1 && <div className="h-[6px] bg-black" />}
            </div>
          ))}
        </div>
        {/* Desktop */}
        <div className="hidden md:flex gap-0">
          {STATS.map((s, i) => (
            <div key={s.value} className="flex items-stretch flex-1">
              <div className="flex flex-col gap-[8px] items-center text-center flex-1">
                <p className="font-['Oswald',sans-serif] font-medium text-[40px] text-black leading-none">
                  {s.value}
                </p>
                <p className="font-['Montserrat',sans-serif] text-[14px] text-black leading-[1.4]">
                  {s.label}
                </p>
              </div>
              {i < STATS.length - 1 && <div className="w-[6px] bg-black mx-[32px] self-stretch" />}
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-[32px] md:mb-[48px] max-w-[900px]">
        <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[16px] text-black leading-[1.6] mb-[12px]">
          Фондова колекція Музею формувалася протягом кількох десятиліть і на сьогодні є найбільшим в Україні та світі зібранням
          історико-культурних артефактів Чорнобильської катастрофи. Це музейні предмети та музейні колекції про:
        </p>
        <ul className="mb-[12px]">
          {[
            "історичні події, пов'язані з Чорнобильською катастрофою 1986 р., ліквідацію її техногенних, медичних, екологічних, соціальних, економічних, гуманітарних та культурних наслідків;",
            "осіб, організації та наукові установи, які брали участь у їх подоланні;",
            "історію і розвиток світової та української атомної галузі, функціонування атомних електростанцій та ін.;",
            "міжнародне співробітництво в атомній сфері;",
            "діяльність атомних об'єктів під час повномасштабного вторгнення в Україну російських військ у 2022 р.;",
            "матеріали, пов'язані з історією радянських атомних проєктів та ядерними випробуваннями;",
            "пам'ятки про історію, культуру, побут, традиції та звичаї Чорнобильського Полісся.",
          ].map((item) => (
            <li key={item} className="font-['Montserrat',sans-serif] text-[14px] md:text-[16px] text-black leading-[1.6] flex gap-[10px]">
              <span className="shrink-0 mt-[2px]">·</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[16px] text-black leading-[1.6]">
          Музей включено до Переліку музеїв та заповідників, в яких зберігаються музейні предмети, що є державною власністю і
          належать до державної частини Музейного фонду України (постанова Кабінету Міністрів України від 02.12.2021 № 1388).
        </p>
      </div>

      {/* Mobile: tabs + single-column cards */}
      <div className="md:hidden">
        <div className="flex border-b-2 border-black mb-[16px]">
          <button
            onClick={() => setActiveTab("digital")}
            className={`flex-1 py-[10px] font-['Oswald',sans-serif] font-medium text-[14px] uppercase text-center transition-colors ${
              activeTab === "digital" ? "bg-black text-white" : "text-black"
            }`}
          >
            ЦИФРОВА КОЛЕКЦІЯ
          </button>
          <button
            onClick={() => setActiveTab("new")}
            className={`flex-1 py-[10px] font-['Oswald',sans-serif] font-medium text-[14px] uppercase text-center transition-colors ${
              activeTab === "new" ? "bg-black text-white" : "text-black"
            }`}
          >
            НОВІ НАДХОДЖЕННЯ
          </button>
        </div>
        <div className="flex flex-col gap-[8px]">
          {activeTab === "digital"
            ? DIGITAL_ITEMS.map((title) => <CollectionCard key={title} title={title} />)
            : NEW_ITEMS.map(({ title, itemId }) => (
                <CollectionCard key={itemId} title={title} itemId={itemId} lookupMode="item" />
              ))}
        </div>
      </div>

      {/* Desktop: two-column */}
      <div className="hidden md:grid grid-cols-2 gap-[32px]">
        <div>
          <p className="font-['Oswald',sans-serif] font-medium text-[24px] text-black uppercase mb-[16px] pb-[8px] border-b-2 border-black">
            ЦИФРОВА КОЛЕКЦІЯ
          </p>
          <div className="flex flex-col gap-[8px]">
            {DIGITAL_ITEMS.map((title) => (
              <CollectionCard key={title} title={title} />
            ))}
          </div>
        </div>
        <div>
          <p className="font-['Oswald',sans-serif] font-medium text-[24px] text-black uppercase mb-[16px] pb-[8px] border-b-2 border-black">
            НОВІ НАДХОДЖЕННЯ
          </p>
          <div className="flex flex-col gap-[8px]">
            {NEW_ITEMS.map(({ title, itemId }) => (
              <CollectionCard key={itemId} title={title} itemId={itemId} lookupMode="item" />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

function LibrarySection() {
  return (
    <section id="library" className="w-full bg-black text-white">
      <div className="px-[16px] md:px-[55px] py-[40px] md:py-[72px] max-w-[1200px] mx-auto w-full">
        <SectionTitle white>МУЗЕЙНА БІБЛІОТЕКА</SectionTitle>

        {/* Stat */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-[24px] mb-[32px] md:mb-[48px]">
          <p className="font-['Oswald',sans-serif] font-medium text-[36px] md:text-[48px] text-white leading-none shrink-0 mb-[8px] md:mb-0">
            &lt;&nbsp;1'500
          </p>
          <div className="flex flex-col gap-[4px] md:pt-[4px]">
            <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-white leading-[1.5]">
              Налічує книжкова колекція Музею.
            </p>
            <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-white leading-[1.5]">
              Вона включає рідкісні та цінні книги різними мовами, присвячені Чорнобильській катастрофі.
            </p>
          </div>
        </div>

        {/* Three columns — stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mb-[32px] md:mb-[48px]">
          <div>
            <SectionImage src="/res_lib01.png" />
            <p className="font-['Oswald',sans-serif] font-medium text-[15px] md:text-[16px] text-white uppercase mb-[12px] md:mb-[16px]">
              У ФОНДІ ПРЕДСТАВЛЕНІ:
            </p>
            <BulletList items={[
              "наукова, технічна та довідкова література;",
              "науково-популярні видання;",
              "мемуари та спогади;",
              "художні твори.",
            ]} />
          </div>
          <div>
            <SectionImage src="/res_lib02.png" />
            <p className="font-['Oswald',sans-serif] font-medium text-[15px] md:text-[16px] text-white uppercase mb-[12px] md:mb-[16px]">
              ОСОБЛИВЕ МІСЦЕ ЗАЙМАЮТЬ:
            </p>
            <BulletList items={[
              "наукові дослідження Чорнобильської катастрофи та її наслідків;",
              "видання з ядерної фізики та енергетики;",
              "праці про медичні наслідки впливу радіації;",
              "дослідження з радіології та екології;",
              "матеріали про об'єкт «Укриття» та Новий безпечний конфайнмент («Арку») над 4-м реактором ЧАЕС.",
            ]} />
          </div>
          <div>
            <SectionImage src="/res_lib03.png" />
            <p className="font-['Oswald',sans-serif] font-medium text-[15px] md:text-[16px] text-white uppercase mb-[12px] md:mb-[16px]">
              ДО КОЛЕКЦІЇ ВХОДЯТЬ:
            </p>
            <BulletList items={[
              "довідкові та біографічні видання;",
              "книги пам'яті ліквідаторів;",
              "література з історії та етнографії Чорнобильського Полісся.",
            ]} />
            <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-white leading-[1.5] mt-[12px]">
              Паралельно з формуванням фондової колекції розвивається музейна бібліотека. Наразі вона налічує близько 500 примірників і постійно поповнюється за рахунок видань, подарованих:
            </p>
            <BulletList items={[
              "ліквідаторами;",
              "науковцями;",
              "гостями Музею.",
            ]} />
          </div>
        </div>

        {/* Bottom text */}
        <div className="border-t border-white/20 pt-[24px] md:pt-[32px] flex flex-col gap-[12px] md:gap-[16px]">
          <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-white leading-[1.6]">
            Серед художніх і документальних творів – як роботи відомих українських та іноземних авторів, так і тексти очевидців
            подій. Особливу цінність становлять мемуари учасників ліквідації наслідків аварії.
          </p>
          <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-white leading-[1.6]">
            Окремо представлені фотоальбоми, створені фотографами-документалістами та художниками, які досліджують Чорнобильську
            зону та прилеглі території.
          </p>
        </div>
      </div>
    </section>
  );
}

function NewspaperFundSection() {
  return (
    <section className="w-full bg-black text-white">
      <div className="px-[16px] md:px-[55px] py-[40px] md:py-[72px] max-w-[1200px] mx-auto w-full">
        <div className="mb-[24px] md:mb-[8px]">
          <p className="font-['Oswald',sans-serif] font-medium text-[22px] md:text-[32px] text-white uppercase leading-none">
            ГАЗЕТНИЙ ФОНД
          </p>
          <div className="h-[1px] bg-white mt-[12px] md:mt-[16px]" />
        </div>

        <div className="flex items-baseline gap-[12px] md:gap-[16px] my-[24px] md:my-[40px]">
          <p className="font-['Oswald',sans-serif] font-medium text-[36px] md:text-[48px] text-white leading-none">
            &lt;&nbsp;3'000
          </p>
          <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-white">
            одиниць зберігання
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
          <div>
            <SectionImage src="/res_lib04.png" />
            <p className="font-['Oswald',sans-serif] font-medium text-[15px] md:text-[16px] text-white uppercase mb-[10px] md:mb-[12px]">
              ДОКУМЕНТАЛЬНА КОЛЕКЦІЯ
            </p>
            <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-white leading-[1.5] mb-[10px]">
              Група «Документи» включає унікальні матеріали, пов'язані з ліквідацією наслідків аварії:
            </p>
            <BulletList items={[
              "особисті документи учасників ліквідації;",
              "перепустки до різних зон і об'єктів;",
              "щоденники та спогади;",
              "посвідчення, подяки, грамоти;",
              "розсекречені документи;",
              "карти.",
            ]} />
          </div>
          <div>
            <SectionImage src="/res_lib05.png" />
            <p className="font-['Oswald',sans-serif] font-medium text-[15px] md:text-[16px] text-white uppercase mb-[10px] md:mb-[12px]">
              PERIODИКА МІСТИТЬ МАТЕРІАЛИ ПРО:
            </p>
            <BulletList items={[
              "причини та наслідки аварії на ЧАЕС;",
              "подолання соціальних, економічних та екологічних викликів;",
              "медичні, політичні та радіоекологічні аспекти катастрофи.",
            ]} />
          </div>
          <div>
            <SectionImage src="/res_lib06.png" />
            <p className="font-['Oswald',sans-serif] font-medium text-[15px] md:text-[16px] text-white uppercase mb-[10px] md:mb-[12px]">
              МІСТИТЬ НАСТУПНІ ВИДАННЯ:
            </p>
            <BulletList items={[
              "загальнонаціональні, регіональні та місцеві видання;",
              "спеціалізована та галузева преса;",
              "газети організацій;",
              "іноземні періодичні видання.",
            ]} />
            <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-white leading-[1.5] mt-[12px]">
              Хронологія охоплює період з 1970-х років до сьогодення.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoFundSection() {
  return (
    <section className="w-full bg-black text-white">
      <div className="px-[16px] md:px-[55px] py-[40px] md:py-[72px] max-w-[1200px] mx-auto w-full">
        <div className="mb-[24px] md:mb-[8px]">
          <p className="font-['Oswald',sans-serif] font-medium text-[22px] md:text-[32px] text-white uppercase leading-none">
            ФОТОФОНД
          </p>
          <div className="h-[1px] bg-white mt-[12px] md:mt-[16px]" />
        </div>

        <div className="flex items-baseline gap-[12px] md:gap-[16px] my-[24px] md:my-[40px]">
          <p className="font-['Oswald',sans-serif] font-medium text-[36px] md:text-[48px] text-white leading-none">
            &lt;&nbsp;3'000
          </p>
          <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-white">
            Налічує колекція та охоплює різні periods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
          {[
            {
              label: "ДО АВАРІЇ:",
              image: "/res_lib07.png",
              items: ["життя Чорнобильського Полісся;", "будівництво та робота ЧАЕС;", "розвиток міста Прип'ять."],
            },
            {
              label: "PERIOD АВАРІЇ:",
              image: "/res_lib08.png",
              items: ["зруйнований 4-й енергоблок;", "евакуація населення;", "ліквідація наслідків."],
            },
            {
              label: "ПІСЛЯ АВАРІЇ:",
              image: "/res_lib09.png",
              items: ["життя в Зоні відчуження;", "трансформація територій;", "відродження природи."],
            },
          ].map((phase) => (
            <div key={phase.label}>
              <SectionImage src={phase.image} />
              <p className="font-['Oswald',sans-serif] font-medium text-[15px] md:text-[16px] text-white uppercase mb-[10px] md:mb-[12px]">
                {phase.label}
              </p>
              <BulletList items={phase.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ title, text, date, source }: { title: string; text: string; date: string; source: string }) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full aspect-square md:w-[220px] md:h-[220px] md:aspect-auto shrink-0 bg-[#2a2a2a]" />
      <div className="flex flex-col gap-[6px] md:gap-[8px] p-[12px] md:p-[16px] flex-1">
        <p className="font-['Oswald',sans-serif] font-medium text-[13px] md:text-[16px] text-black uppercase leading-tight">
          {title}
        </p>
        <p className="font-['Montserrat',sans-serif] text-[11px] md:text-[12px] text-gray-600 leading-[1.5]">
          {text}
        </p>
        <div>
          <p className="font-['Montserrat',sans-serif] text-[11px] md:text-[12px] text-gray-500">{date}</p>
          <p className="font-['Montserrat',sans-serif] text-[11px] md:text-[12px] text-gray-500">{source}</p>
        </div>
        <div className="mt-auto pt-[4px]">
          <MuseumButton variant="outlined" theme="light" icon="arrow" className="w-full md:w-auto">
            ПЕРЕГЛЯНУТИ
          </MuseumButton>
        </div>
      </div>
    </div>
  );
}

function ArticlesSection() {
  const [authorFilter, setAuthorFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const articles = Array(6).fill(null).map(() => ({
    title: "НАЗВА СТАТТІ, ПОШУК СЕНСУ ЖИТТЯ В УМОВАХ АПОКАЛІПСИСУ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "10.05.2026",
    source: "Краєзнавці НП",
  }));

  return (
    <section className="px-[16px] md:px-[55px] py-[40px] md:py-[72px] max-w-[1200px] mx-auto w-full">
      <SectionTitle>Наукові статті</SectionTitle>

      {/* Filters — stack on mobile */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-[10px] md:gap-[16px] mb-[32px] md:mb-[40px]">
        <div className="flex-1">
          <MuseumInput
            label="Автор публікації"
            value={authorFilter}
            onChange={setAuthorFilter}
          />
        </div>
        <div className="md:w-[220px]">
          <MuseumInput
            label="Дата публікації"
            type="date"
            value={dateFilter}
            onChange={setDateFilter}
          />
        </div>
        <MuseumButton variant="solid" theme="dark" iconOnly icon="search" className="self-start md:self-auto" />
      </div>

      {/* Grid — 1 col on mobile, 2 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px] mb-[32px] md:mb-[40px]">
        {articles.map((article, i) => (
          <ArticleCard key={i} {...article} />
        ))}
      </div>

      <div className="flex justify-center">
        <MuseumButton variant="solid" theme="dark" icon="arrow" className="w-full md:w-auto !text-black !border-transparent">
          ЗАВАНТАЖИТИ БІЛЬШЕ
        </MuseumButton>
      </div>
    </section>
  );
}

function ApplicationSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [institution, setInstitution] = useState("");
  const [position, setPosition] = useState("");
  const [education, setEducation] = useState("");
  const [researchTopic, setResearchTopic] = useState("");
  const [researchGoal, setResearchGoal] = useState("");
  const [visitPurpose, setVisitPurpose] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (!firstName || !lastName || !phone || !email) return;
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: "mykola.geranichev@infotech.gov.ua",
          from_name: `${firstName} ${lastName}`,
          reply_to: email,
          phone,
          visit_date: visitDate || "не вказано",
          institution: institution || "не вказано",
          position: position || "не вказано",
          education: education || "не вказано",
          research_topic: researchTopic || "не вказано",
          research_goal: researchGoal || "не вказано",
          visit_purpose: visitPurpose || "не вказано",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFirstName(""); setLastName(""); setPhone(""); setEmail("");
      setVisitDate(""); setInstitution(""); setPosition(""); setEducation("");
      setResearchTopic(""); setResearchGoal(""); setVisitPurpose("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="application-form" className="w-full bg-[#DFBE22]">
      <div className="px-[16px] md:px-[55px] py-[40px] md:py-[72px] max-w-[1200px] mx-auto w-full">
        <SectionTitle darkSquare>Подати заявку</SectionTitle>

        <div className="font-['Montserrat',sans-serif] text-[13px] md:text-[16px] text-black leading-[1.6] mb-[24px] md:mb-[40px] flex flex-col gap-[12px]">
          <p>
            Національний музей «Чорнобиль» володіє унікальною колекцією історичних матеріалів і відкритий до співпраці з дослідниками з України та світу. У Музеї облаштовано спеціальну кімнату для науково-дослідної роботи.
          </p>
          <p>
            Для роботи з фондами просимо надіслати запит на електронну адресу:{" "}
            <a href="mailto:research@chornobyl-museum.kyiv.ua" className="text-black font-bold underline">
              research@chornobyl-museum.kyiv.ua
            </a>
            {" "}<span className="font-bold">або заповніть форму на сайті</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-[12px] md:gap-y-[16px]">
          <MuseumInput label="Ваше ім'я *" value={firstName} onChange={setFirstName} />
          <MuseumInput label="Ваше прізвище *" value={lastName} onChange={setLastName} />
          <MuseumInput label="Ваш контактний номер телефона *" value={phone} onChange={setPhone} type="tel" />
          <MuseumInput label="Ваша електронна пошта *" value={email} onChange={setEmail} type="email" />
          <MuseumInput label="Оберіть бажану дату роботи" value={visitDate} onChange={setVisitDate} type="date" />
          <MuseumInput label="Назва установи/організації яку ви представляєте" value={institution} onChange={setInstitution} />
          <MuseumInput label="Ваша посада" value={position} onChange={setPosition} />
          <MuseumInput label="Ваша освіта та фах" value={education} onChange={setEducation} />
          <MuseumInput label="Тема вашого дослідження" value={researchTopic} onChange={setResearchTopic} />
          <MuseumInput label="Мета дослідження (дисертація, стаття, книга, фільм, проект т..." value={researchGoal} onChange={setResearchGoal} />
          <div className="col-span-1 md:col-span-2">
            <MuseumInput label="Коротко опишіть мету візиту та які консультації вам потрібні" value={visitPurpose} onChange={setVisitPurpose} multiline rows={4} />
          </div>
        </div>

        {status === "success" && (
          <p className="mt-[16px] font-['Montserrat',sans-serif] font-medium text-[15px] text-black">
            ✓ Заявку надіслано! Ми зв'яжемось з вами найближчим часом.
          </p>
        )}
        {status === "error" && (
          <p className="mt-[16px] font-['Montserrat',sans-serif] font-medium text-[15px] text-red-800">
            Помилка надсилання. Спробуйте ще раз або напишіть нам на пошту.
          </p>
        )}

        <div className="mt-[20px] md:mt-[24px]">
          <MuseumButton
            variant="solid"
            theme="dark"
            icon="arrow"
            className="w-full md:w-auto border-2 border-black"
            onClick={handleSubmit}
            disabled={status === "sending"}
          >
            {status === "sending" ? "НАДСИЛАННЯ..." : "ПОДАТИ ЗАЯВКУ"}
          </MuseumButton>
        </div>
      </div>
    </section>
  );
}

function RegistryBanner() {
  return (
    <div
      id="registry"
      className="w-full px-[16px] md:px-[55px] py-[24px] md:py-[32px] relative bg-cover bg-center"
      style={{ backgroundImage: "url('/reg_museum.png')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px] md:gap-0">
        <div className="flex items-center gap-[8px]">
          <div className="bg-[#DFBE22] shrink-0 size-[24px] md:size-[32px]" />
          <p className="font-['Oswald',sans-serif] font-medium text-[18px] md:text-[24px] text-white uppercase">
            РЕЄСТР МУЗЕЙНОГО ФОНДУ УКРАЇНИ
          </p>
        </div>
        <MuseumButton variant="solid" theme="dark" icon="arrow" className="w-full md:w-auto">
          ПЕРЕЙТИ ДО ФОНДУ
        </MuseumButton>
      </div>
    </div>
  );
}

interface ResearchersContentProps {
  onBuyTicket?: () => void;
}

export default function ResearchersContent({ onBuyTicket: _onBuyTicket }: ResearchersContentProps) {
  return (
    <div className="flex flex-col w-full" data-name="Desktop">
      <HeroSection />
      <FondsSection />
      <LibrarySection />
      <NewspaperFundSection />
      <PhotoFundSection />
      <ArticlesSection />
      <ApplicationSection />
      <RegistryBanner />
    </div>
  );
}
