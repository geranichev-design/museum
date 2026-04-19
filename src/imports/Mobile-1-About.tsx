import svgPaths from "./Desktop-1/svg-3y1rwqhzbp";
import imgImage103 from "./Desktop-1/0d9b0ae1908ad31d6398a074f9850d27aa46b21e.png";
import imgImage94 from "./Desktop-1/12d55ea741390a634a9e6b5bc97caec76f2eee58.png";
import imgRectangle837 from "./Desktop-1/b9c97d9f84f70aa97a7cf312696a6b0fb1c9c236.png";
import imgAtom1 from "./Desktop-1/6e507b6f905be2669cd6a7132ee56cbac1ba5620.png";
import imgExcursion1 from "./Desktop-1/2a9ee835dd5e339329f9844110e462c45ec767c5.png";
import imgTemple1 from "./Desktop-1/91bbcb127e963955343f67160a0ecbeada584668.png";
import imgInteractive1 from "./Desktop-1/02feace61403c7cb02cc03dfd5f5609d173359ec.png";
import imgProfit1 from "./Desktop-1/30ed0a4767c9278c6e76dc0bd776535ceefa0428.png";
import imgGreenTechnology1 from "./Desktop-1/bd58753f7c31ade7029417b315b85d921a4848f2.png";
import imgGallery1 from "./Desktop-1/ddd482c5d8266aee9a3f3a43cb818f3b355f059a.png";
import img202604101107531 from "./Desktop-1/a119321f294564e6c18e2e1f4d12ebc82fca35b5.png";
import img202604101107471 from "./Desktop-1/dd1b86e8f8df079eec1b66d99e510eef560679de.png";
import img202604101108021 from "./Desktop-1/12baeb51df2bb5e88a1a3885ff6fb148b92b6929.png";
import img202604101108071 from "./Desktop-1/6777e6dd7f6da9a3220a2228730dda7e0acf2631.png";

function SectionTitle({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div className="flex gap-[8px] items-center shrink-0">
      <div className="relative shrink-0 size-[24px]">
        <div className="absolute bg-[#e6bc00] inset-0" />
      </div>
      <p className={`font-['Oswald',sans-serif] font-medium leading-[normal] text-[28px] uppercase ${dark ? "text-white" : "text-black"}`}>{label}</p>
    </div>
  );
}

function DownloadIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute inset-[14.58%_20.83%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.667 22.667">
          <path d={svgPaths.p7648580} fill="var(--fill-0, black)" />
        </svg>
      </div>
    </div>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  return (
    <div className="relative w-full aspect-[375/220]" data-name="hero section">
      <img src="/about-hero-bg.jpg" alt="" className="absolute inset-0 max-w-none object-cover size-full" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col justify-end px-[16px] pb-[24px] gap-[12px]">
        <p className="font-['Oswald',sans-serif] font-medium text-[34px] leading-[1.2] text-[#f5f3e9] uppercase">Про Музей</p>
        <div className="bg-[#e6bc00] inline-flex items-center justify-center px-[16px] py-[8px] self-start" data-name="button">
          <p className="font-['Oswald',sans-serif] font-medium text-[16px] text-black uppercase leading-[1.2]">Придбати квиток</p>
        </div>
      </div>
    </div>
  );
}

/* ─── ABOUT ─── */
function AboutSection() {
  return (
    <div className="bg-white flex flex-col gap-[24px] px-[16px] py-[40px]" data-name="about">
      <SectionTitle label="Про музей" />

      <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-black">
        Національний музей «Чорнобиль» – державний науково-дослідний та культурно-освітній заклад, створений для збереження, вивчення та популяризації музейних предметів і колекцій, пов'язаних із Чорнобильською катастрофою та її наслідками.
      </p>
      <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-black">
        Національний музей «Чорнобиль» – це не просто музей. Це простір пам'яті, дослідження, діалогу і переосмислення однієї з наймасштабніших техногенних катастроф в історії людства. Національний музей «Чорнобиль» – єдиний у світі музей, який настільки широко розкриває тему аварії на ЧАЕС та її впливу на різні сфери життя.
      </p>
      <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-black">
        Тут історія не лише зафіксована – вона пояснена, досліджена і передана наступним поколінням через наукову та освітню діяльність.
      </p>

      <div className="w-full aspect-[343/229] relative overflow-hidden">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage103} />
      </div>

      <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-black">
        У 2026 році Україна та світ вшановують 40-ві роковини аварії на Чорнобильській АЕС. До цієї дати Музей представляє оновлений підхід до осмислення трагедії – не лише як катастрофи, а як спільного історичного досвіду українців.
      </p>
      <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-black">
        Музей відмовляється від застарілих підходів до сприйняття Чорнобиля, що ґрунтувалися на страху, замовчуванні та стигматизації. Натомість він формує новий наратив – про силу, відповідальність і досвід, який об'єднує суспільство.
      </p>
      <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-black">
        Національний музей «Чорнобиль» є одним із брендових музеїв України та виконує важливу представницьку функцію. Він розповідає світові про Україну через історію випробувань, стійкість і здатність до відновлення.
      </p>
      <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-black">
        Розташований у самому серці історичного Київ – на Подолі – Музей є частиною унікального культурного середовища. Він знаходиться на території пам'ятки археології місцевого значення «Культурний шар Подолу, ІХ–XVIII ст.», а також у межах Державного історико-архітектурного заповідника «Стародавній Київ».
      </p>
      <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-black">
        Будівля Музею – колишнє пожежне депо (пров. Хорива, 1) – є об'єктом культурної спадщини та перебуває під державною охороною. Під час оновлення було відреставровано фасад, усунено аварійність будівлі, а також створено безпечний і доступний простір для відвідувачів, зокрема людей з інвалідністю.
      </p>

      {/* Informer */}
      <div className="border-4 border-[#e6bc00] p-[16px]">
        <p className="font-['Montserrat',sans-serif] font-bold text-[15px] leading-[22px] text-black">
          Це місце, де історія говорить мовою фактів і людських доль. І кожен відвідувач може не лише дізнатися більше, а й відчути, усвідомити і переосмислити.
        </p>
      </div>
    </div>
  );
}

/* ─── MISSION ─── */
function MissionSection() {
  return (
    <div className="bg-white flex flex-col gap-[24px] px-[16px] py-[40px] border-t-4 border-black" data-name="mission">
      <SectionTitle label="Місія" />

      <div className="flex flex-col gap-[8px]">
        <p className="font-['Oswald',sans-serif] font-medium text-[18px] leading-[24px] text-black uppercase">Сьогодні Національний музей «Чорнобиль» це:</p>
        <ul className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-black list-disc">
          {[
            "місце пам'яті героїзму та самовідданості ліквідаторів аварії на ЧАЕС, зокрема представників органів, які нині входять до системи МВС;",
            "сховище унікальних реліквій, пов'язаних із Чорнобильським Поліссям;",
            "сучасний музейний простір, що передбачає взаємодію з відвідувачем через інтерактив, візуальний сторітелінг і залучення;",
            "лабораторія сучасних досліджень;",
            "простір для відкритого діалогу про атомну енергетику, радіаційну безпеку та відповідальність;",
            "освітній і розвивальний майданчик (бібліотека, інтерактивні та навчальні простори);",
            "відкрита платформа для подій, дискусій та партнерських ініціатив;",
            "відправна точка масштабних проєктів, пов'язаних із темою Чорнобиля.",
          ].map((item, i) => <li key={i} className="ms-[20px] mb-0">{item}</li>)}
        </ul>
      </div>

      <div className="w-full aspect-[343/229] relative overflow-hidden">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage94} />
      </div>

      <div className="flex flex-col gap-[8px]">
        <p className="font-['Oswald',sans-serif] font-medium text-[18px] leading-[24px] text-black uppercase">Місія</p>
        <ul className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-black list-disc">
          {[
            "допомогти усвідомити наслідки найбільшої ядерної катастрофи світу через долі людей – учасників, свідків і постраждалих;",
            "сформувати розуміння Чорнобиля як спільного історичного досвіду, що об'єднує українців;",
            "сприяти відповідальному діалогу між суспільством, наукою і технологіями;",
            "зберегти пам'ять про ліквідаторів і передати її наступним поколінням;",
            "розвінчувати міфи про ядерну енергетику та радіацію, спираючись на наукові дані;",
            "формувати нове ставлення до ядерної безпеки – від травми до відповідальності;",
            "застерігати світову спільноту від загроз ядерного тероризму.",
          ].map((item, i) => <li key={i} className="ms-[20px] mb-0">{item}</li>)}
        </ul>
      </div>

      <div className="flex flex-col gap-[8px]">
        <p className="font-['Oswald',sans-serif] font-medium text-[18px] leading-[24px] text-black uppercase">Основні завдання Музею</p>
        <ul className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-black list-disc">
          {[
            "наукове дослідження, збереження та популяризація спадщини Чорнобиля;",
            "поширення знань про катастрофу, її наслідки та подвиг ліквідаторів;",
            "висвітлення Чорнобиля як частини ширшого історичного досвіду України;",
            "формування культури безпеки та відповідальності;",
            "розвиток сучасного музейного простору, що поєднує меморіальну, освітню та інтерактивну функції;",
            "забезпечення доступності, безпеки і комфорту для відвідувачів;",
            "задоволення культурних, освітніх і пізнавальних потреб суспільства.",
          ].map((item, i) => <li key={i} className="ms-[20px] mb-0">{item}</li>)}
        </ul>
      </div>

      <div className="flex flex-col gap-[8px]">
        <p className="font-['Oswald',sans-serif] font-medium text-[18px] leading-[24px] text-black uppercase">Основні цінності</p>
        <ul className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-black list-disc">
          {[
            "повага, гідність, чутливість;",
            "доступність та інклюзивність;",
            "партнерство й довіра;",
            "професійність;",
            "креативність та інноваційність;",
            "гнучкість і динамічність.",
          ].map((item, i) => <li key={i} className="ms-[20px] mb-0">{item}</li>)}
        </ul>
      </div>

      <div className="flex flex-col gap-[8px]">
        <p className="font-['Oswald',sans-serif] font-medium text-[18px] leading-[24px] text-black uppercase">Основні напрями статутної діяльності</p>
        <ul className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-black list-disc">
          {["науково-дослідна", "культурно-освітня", "фондова", "експозиційна", "видавнича"].map((item, i) => (
            <li key={i} className="ms-[20px] mb-0">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── HISTORY ─── */
const HISTORY_ITEMS = [
  { year: "1992", text: "Музей створений на базі фотодокументальної виставки «Пам'ять мужності і слави», організованої у першу річницю трагедії учасниками ліквідації наслідків аварії на Чорнобильській АЕС – пожежними Київщини." },
  { year: "1996", text: "Указом Президента України від 25 квітня 1996 року № 288/96 «Про музей «Чорнобиль»» Музею надано статус «національний» та оновлено постійну експозицію." },
  { year: "1997", text: "Найбільше поповнення музейної колекції - 1446 експонатів." },
  { year: "2010", text: "Музеєм реалізовано проєкт грантової допомоги у сфері культури від Уряду Японії, що дозволило вперше впровадити у експозиційний простір інтерактивні технології: сенсорні інформаційні термінали з мультимедійними науково-допоміжними інформаційно-пошуковими системами." },
  { year: "2019", text: "Зафіксовано найвищу відвідуваність Музею - 79 тис. гостей." },
  { year: "2022", text: "Наказом Міністерства внутрішніх справ України від 05.10.2022 № 635 затверджено Концепцію осучаснення та розвитку Національного музею «Чорнобиль» на період до 2025 року." },
  { year: "2026", text: "Відкриття Музею після реставрації та реекспозиції." },
];

function HistorySection() {
  return (
    <div className="bg-black flex flex-col gap-[0px] px-[16px] py-[40px]" data-name="history">
      <SectionTitle label="Історія музею" dark />
      <div className="flex flex-col mt-[24px]">
        {HISTORY_ITEMS.map(({ year, text }) => (
          <div key={year} className="flex gap-[16px] py-[20px] border-b border-white/20">
            <p className="font-['Oswald',sans-serif] font-medium text-[28px] leading-[1.2] text-[#e6bc00] uppercase shrink-0 w-[72px]">{year}</p>
            <p className="font-['Montserrat',sans-serif] font-normal text-[14px] leading-[20px] text-white">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── TEAM ─── */
const TEAM_MEMBERS = [
  { name: "Віталіна Мартиновська", role: "Генеральний директор" },
  { name: "Яніна Швачко", role: "Заступник генерального директора", sub: "наукова та експозиційна діяльність" },
  { name: "Євген Кундель", role: "Заступник генерального директора", sub: "адміністративна та господарська діяльність" },
];

const DEPARTMENTS = [
  { icon: imgAtom1, title: "Сектор науково-дослідної та освітньої роботи", desc: "здійснення науково-методичної, науково-дослідної роботи, пов'язаної з колекціями Музею, організація науково-освітніх заходів, проведення практичних та теоретичних досліджень." },
  { icon: imgExcursion1, title: "Відділ екскурсійного обслуговування", desc: "екскурсійне обслуговування відвідувачів, розробка нових програм та активностей, розвиток інфраструктури експозиційного обслуговування в Музеї, проведення відкритих уроків, лекцій, майстер-класів." },
  { icon: imgTemple1, title: "Сектор обліку музейних фондів", desc: "зберігання, облік, дослідження та експонування предметів, що знаходяться у фондах Музею та представлені у стаціонарній експозиції." },
  { icon: imgInteractive1, title: "Сектор комунікації та промоції", desc: "розробка та втілення комунікаційної стратегії Музею, формування контент-планів та їх реалізація, ведення зовнішніх комунікацій та розвиток каналів комунікації, робота зі ЗМІ та громадськістю." },
  { icon: imgProfit1, title: "Сектор бухгалтерського обліку та звітності", desc: "ведення бухгалтерського обліку, фінансової звітності Музею та контроль за ефективним та економним витрачанням бюджетних коштів." },
  { icon: imgGreenTechnology1, title: "Інженерно-технічний та господарський персонал", desc: "забезпечення безперебійного та належного функціонування Музею." },
  { icon: imgGallery1, title: "Відділ експозиційної та виставкової роботи", desc: "розроблення концепцій виставкових проєктів, їх сценаріїв, тематико-експозиційних планів та художнього оформлення, проєктування та створення постійних і тимчасових, стаціонарних і пересувних експозицій і виставок." },
];

function TeamSection() {
  return (
    <div className="bg-[#f5f3e9] flex flex-col gap-[32px] px-[16px] py-[40px]" data-name="team">
      <SectionTitle label="Команда" />

      {TEAM_MEMBERS.map(({ name, role, sub }) => (
        <div key={name} className="flex gap-[16px] items-start">
          <div className="relative shrink-0 size-[80px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle837} />
            <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0" />
          </div>
          <div className="flex flex-col gap-[4px] text-black">
            <p className="font-['Oswald',sans-serif] font-medium text-[18px] leading-[22px] uppercase">{name}</p>
            <p className="font-['Montserrat',sans-serif] font-bold text-[13px] leading-[normal]">{role}</p>
            {sub && <p className="font-['Montserrat',sans-serif] font-normal text-[13px] leading-[normal]">{sub}</p>}
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-[24px]">
        {DEPARTMENTS.map(({ icon, title, desc }) => (
          <div key={title} className="flex gap-[12px] items-start">
            <img alt="" src={icon} className="shrink-0 size-[48px] object-contain" />
            <div className="flex flex-col gap-[4px] text-black">
              <p className="font-['Oswald',sans-serif] font-medium text-[16px] leading-[20px] uppercase">{title}</p>
              <p className="font-['Montserrat',sans-serif] font-normal text-[13px] leading-[18px]">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── PARTNERS ─── */
function PartnersSection() {
  return (
    <div className="bg-white flex flex-col gap-[32px] px-[16px] py-[40px]" data-name="partners">
      <SectionTitle label="Партнери" />
      <div className="flex flex-wrap gap-[24px] items-center justify-center">
        <img alt="" src={img202604101107531} className="h-[50px] object-contain" />
        <img alt="" src={img202604101107471} className="h-[60px] object-contain" />
        <img alt="" src={img202604101108021} className="h-[70px] object-contain" />
        <img alt="" src={img202604101108071} className="h-[60px] object-contain" />
      </div>
    </div>
  );
}

/* ─── ACCESSIBILITY ─── */
function AccessabilitySection() {
  return (
    <div className="bg-black flex flex-col gap-[24px] px-[16px] py-[40px]" data-name="accessability">
      <SectionTitle label="Доступність та інклюзивність" dark />
      <div className="flex flex-col gap-[24px]">
        <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-white">
          Музей створений як відкритий і зручний простір для всіх відвідувачів. Під час оновлення особливу увагу приділено створенню безбар'єрного простору та можливості самостійно орієнтуватися в будівлі. Простір обладнаний ліфтом і пандусами, що забезпечують зручне пересування між поверхами.
        </p>
        <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-white">
          У співпраці з Українським товариством глухих (УТОГ) основні відеоматеріали експозиції адаптовано для відвідувачів із порушеннями слуху.
        </p>
        <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-white">
          Інформаційні вказівники продубльовані шрифтом Брайля, нанесено контрастне маркування, що допомагає людям із порушеннями зору орієнтуватися в приміщенні. Також у музеї облаштовані універсальні кабіни санітарно-гігієнічних приміщень.
        </p>
        <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] text-white">
          Оновлений музей має укриття, пристосоване для безпечного перебування персоналу та відвідувачів під час повітряної тривоги. Простір укриття продуманий із урахуванням зручної навігації.
        </p>
        <p className="font-['Montserrat',sans-serif] font-bold text-[15px] leading-[22px] text-white text-center">
          Завдяки таким рішенням музей є доступним і комфортним середовищем, де кожен має можливість повноцінно ознайомитися з експозицією.
        </p>
      </div>
    </div>
  );
}

/* ─── DOCUMENTS ─── */
const DOCS = [
  "Указ Президента України «Про музей «Чорнобиль»",
  "Звіт про проведення радіаційного обстеження",
  "Статут Національного музею «Чорнобиль»",
  "Правила фотографування та проведення зйомок",
  "КОНЦЕПЦІЯ ОСУЧАСНЕННЯ ТА РОЗВИТКУ НАЦІОНАЛЬНОГО МУЗЕЮ «ЧОРНОБИЛЬ» на період ДО 2025 року",
  "Колективний договір Національного музею «Чорнобиль» на 2025-2028 роки",
  "ПРАВИЛА ВІДВІДУВАННЯ НАЦІОНАЛЬНОГО МУЗЕЮ «ЧОРНОБИЛЬ»",
  "План діяльності системи енергетичного менеджменту Національного музею «Чорнобиль»",
  "Положення про систему енергетичного менеджменту у Національному музеї «Чорнобиль»",
  "Декларація енергетичної політики Національного музею «Чорнобиль»",
];

function DocumentsSection() {
  return (
    <div className="bg-[#f5f3e9] flex flex-col gap-[16px] px-[16px] py-[40px]" data-name="docs">
      <SectionTitle label="Документи" />
      <div className="flex flex-col gap-[12px] mt-[8px]">
        {DOCS.map((doc) => (
          <div key={doc} className="flex items-center justify-between gap-[12px] px-[16px] py-[16px] relative">
            <div aria-hidden="true" className="absolute border-4 border-black border-solid inset-0 pointer-events-none" />
            <p className="font-['Oswald',sans-serif] font-medium text-[16px] leading-[20px] text-black uppercase flex-1">{doc}</p>
            <DownloadIcon />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── DONATE ─── */
function DonateSection() {
  return (
    <div className="bg-white flex flex-col gap-[24px] px-[16px] py-[40px]" data-name="donate">
      <SectionTitle label="Допомога музею" />

      <div className="flex flex-col gap-[8px] text-black">
        <p className="font-['Oswald',sans-serif] font-medium text-[18px] leading-[24px] uppercase">Донаторам</p>
        <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px]">
          Національний музей «Чорнобиль» щоденно працює над тим, щоб допомогти людству усвідомити наслідки найбільшої ядерної катастрофи світу та зберегти пам'ять про мужність, самовідданість і високий професіоналізм учасників ліквідації наслідків аварії на Чорнобильській АЕС.
        </p>
        <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px]">
          Кожен, хто бажає допомогти не дати світові забути уроки Чорнобильської трагедії, може підтримати Музей через благодійний внесок або волонтерську допомогу.
        </p>
      </div>

      <div className="bg-[#e6bc00] flex flex-col gap-[8px] p-[16px]">
        <p className="font-['Oswald',sans-serif] font-medium text-[18px] leading-[24px] uppercase text-black">Реквізити благодійного рахунку Музею:</p>
        <div className="font-['Montserrat',sans-serif] font-normal text-[14px] leading-[20px] text-black">
          <p><span className="font-bold">Одержувач:</span> Національний музей «Чорнобиль»</p>
          <p><span className="font-bold">Юридична адреса:</span> 04071, м. Київ, провулок Хорива, 1</p>
          <p><span className="font-bold">Контактний тел.:</span> (044) 425-44-62</p>
          <p><span className="font-bold">Код ЄДРПОУ:</span> 24520773</p>
          <p><span className="font-bold">р/рах.:</span> №UA028201720313231001301007687 – благодійні внески в ДКСУ м. Києва, МФО 820172</p>
          <p>Неприбуткова організація – ознака неприбутковості 0002</p>
          <p><span className="font-bold">В призначенні платежу зазначати:</span> Нецільова благодійна допомога</p>
        </div>
      </div>

      <div className="flex flex-col gap-[8px] text-black">
        <p className="font-['Oswald',sans-serif] font-medium text-[18px] leading-[24px] uppercase">Волонтерам</p>
        <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px]">
          Якщо ви маєте велике бажання зробити наш Музей кращим, а також кілька годин вільного часу на тиждень, запрошуємо стати частиною нашої волонтерської команди.
        </p>
        <p className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px]">Напрямами волонтерської допомоги є:</p>
        <ul className="font-['Montserrat',sans-serif] font-normal text-[15px] leading-[22px] list-disc">
          {[
            "Фото та відео зйомка музейних заходів",
            "Допомога під час проведення заходів для дітей",
            "Допомога в оцифровуванні фондів Музею",
            "Допомога у створенні сурдоперекладу до відеоматеріалів Музею",
            "Допомога у перекладі екскурсій для аудіогідів та інформаційних матеріалів.",
          ].map((item, i) => <li key={i} className="ms-[20px] mb-0">{item}</li>)}
        </ul>
      </div>

      <div className="bg-[#e6bc00] flex flex-col gap-[8px] p-[16px]">
        <p className="font-['Oswald',sans-serif] font-medium text-[18px] leading-[24px] uppercase text-black">Надсилайте запит на адресу</p>
        <p className="font-['Montserrat',sans-serif] font-normal text-[14px] leading-[20px] text-black">
          <a className="underline" href="mailto:info@chornobyl-museum.kyiv.ua">info@chornobyl-museum.kyiv.ua</a>
          {` з прикріпленим мотиваційним листом (до 200 слів). Тема листа: НМ "Чорнобиль". Волонтери.`}
        </p>
      </div>
    </div>
  );
}

/* ─── CONTACTS ─── */
function ContactsSection() {
  return (
    <div className="bg-black flex flex-col gap-[24px] px-[16px] py-[40px]" data-name="contacts">
      <SectionTitle label="Контакти" dark />

      <div className="flex flex-col gap-[16px]">
        <div className="border-2 border-white flex flex-col gap-[12px] p-[16px]">
          <p className="font-['Oswald',sans-serif] font-medium text-[16px] leading-[20px] text-[#dfbe22] uppercase">Як дістатися?</p>
          <ul className="font-['Montserrat',sans-serif] font-normal text-[14px] leading-[20px] text-white list-disc">
            <li className="ms-[20px]">пров. Хорива, 1, м. Київ</li>
            <li className="ms-[20px]">ст. м. Контрактова площа</li>
            <li className="ms-[20px]">Трамвай: 14,19,18,12</li>
            <li className="ms-[20px]">Автобус: 62</li>
          </ul>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[4px]">
            <p className="font-['Montserrat',sans-serif] font-semibold text-[14px] text-[#dfbe22]">Прокласти маршрут</p>
          </a>
        </div>

        <div className="border-2 border-white flex flex-col gap-[12px] p-[16px]">
          <p className="font-['Oswald',sans-serif] font-medium text-[16px] leading-[20px] text-[#dfbe22] uppercase">Графік роботи</p>
          <ul className="font-['Montserrat',sans-serif] font-normal text-[14px] leading-[20px] text-white list-disc">
            <li className="ms-[20px]">Понеділок – субота 10:00 – 18:00, неділя вихідний</li>
            <li className="ms-[20px]">Каса працює до 17.00</li>
            <li className="ms-[20px]">Останній понеділок місяця – санітарний день</li>
          </ul>
        </div>

        <div className="border-2 border-white flex flex-col gap-[12px] p-[16px]">
          <p className="font-['Oswald',sans-serif] font-medium text-[16px] leading-[20px] text-[#dfbe22] uppercase">Контакти</p>
          <ul className="font-['Montserrat',sans-serif] font-normal text-[14px] leading-[20px] text-white list-disc">
            <li className="ms-[20px]">тел. +38 044 482-56-27, +38 063 946-21-43</li>
            <li className="ms-[20px]">email: info@chornobyl-museum.kyiv.ua</li>
            <li className="ms-[20px]">Замовлення послуг: +38 044 482-56-27, +38 063 946-21-43</li>
            <li className="ms-[20px]"><span className="font-bold">Інформація щодо вартості послуг:</span> +38 044 482-56-27, +38 063 946-21-43</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─── ROOT ─── */
export default function MobileAbout() {
  return (
    <div className="bg-white flex flex-col w-full" data-name="Mobile">
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <HistorySection />
      <TeamSection />
      <PartnersSection />
      <AccessabilitySection />
      <DocumentsSection />
      <DonateSection />
      <ContactsSection />
    </div>
  );
}
