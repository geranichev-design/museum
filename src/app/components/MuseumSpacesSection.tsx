import { useState } from "react";

const FLOORS = [
  {
    label: "Поверх 1",
    text: "Перший поверх музею об'єднує простори для роботи, дослідження та подій. Тут поруч розташовані бібліотека, коворкінг, мультимедійна і виставкова зали — усе, щоб відвідувачі могли зручно поєднати навчання, роботу й відпочинок. Матеріали з бібліотеки можна одразу опрацювати в коворкінгу, а далі — перейти до виставкових проєктів або мультимедійної зали. Така логіка простору дозволяє не просто переглянути експозицію, а глибше зануритися в тему й осмислити побачене.",
  },
  {
    label: "Поверх 2",
    text: "На другому поверсі музею розміщено постійну експозицію, що розкриває події Чорнобильської аварії та її наслідки. Простір поділено на історичну та освітню частини: перша занурює відвідувачів у хронологію подій та особисті історії очевидців, а друга — розповідає про сучасність атомної енергетики, вплив Чорнобильської катастрофи на культуру, сьогоднішній стан зони відчуження. Така структура поєднує емоційне переживання з пізнанням, формуючи цілісне бачення події та її значення для сучасності.",
  },
  {
    label: "Поверх 3",
    text: "На третьому поверсі музею зосереджені освітні простори для навчання, творчості та пізнання. Тут можна долучитися до художніх занять, краще зрозуміти історію й етнографію Полісся, а також дізнатися більше про відродження зони відчуження. Завдяки співпраці з фахівцями Чорнобильського радіаційно-екологічного біосферного заповідника відвідувачі отримують актуальні знання й можливість подивитися на цю територію не лише через призму минулого, а й сьогодення.",
  },
];

export function MuseumSpacesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white">
      <div className="flex flex-col md:flex-row items-stretch max-w-[1200px] mx-auto px-[16px] md:px-[55px] pt-[48px] md:pt-0 pb-[48px] md:pb-0 gap-[40px] md:gap-[56px]">

        {/* Left — content */}
        <div className="flex flex-col gap-[32px] flex-1 min-w-0 md:justify-center md:py-[40px]">

          {/* Title */}
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#dfbe22] shrink-0 size-[32px] md:size-[34px]" />
            {/* Desktop title */}
            <p className="hidden md:block font-['Oswald',sans-serif] font-medium text-[34px] text-black uppercase leading-none">
              ПРОСТОРИ МУЗЕЮ
            </p>
            {/* Mobile title */}
            <p className="md:hidden font-['Oswald',sans-serif] font-medium text-[28px] text-black uppercase leading-none">
              МАПА МУЗЕЮ
            </p>
          </div>

          {/* Tabs */}
          <div>
            <div className="flex items-end gap-0 border-b-2 border-black">
              {FLOORS.map((floor, i) => (
                <button
                  key={floor.label}
                  onClick={() => setActive(i)}
                  className={`px-[16px] md:px-[20px] py-[8px] md:py-[10px] font-['Montserrat',sans-serif] font-bold text-[16px] uppercase transition-colors whitespace-nowrap ${
                    active === i
                      ? "bg-black text-white"
                      : "bg-transparent text-black hover:text-[#dfbe22]"
                  }`}
                >
                  {floor.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab text */}
          <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[16px] text-black leading-[1.6]">
            {FLOORS[active].text}
          </p>

          {/* Image — mobile only */}
          <div className="md:hidden w-full">
            <img
              src="/spaces.png"
              alt="Простори музею"
              className="w-full object-contain"
            />
          </div>

          {/* Button */}
          <div>
            <button className="w-full md:w-auto bg-[#e6bc00] px-[16px] py-[8px] font-['Oswald',sans-serif] font-medium text-[20px] text-black uppercase flex items-center justify-center md:justify-start gap-[8px] hover:bg-[#d4aa00] transition-colors">
              ДО ПРОСТОРІВ МУЗЕЮ &raquo;
            </button>
          </div>
        </div>

        {/* Right — image (desktop only) */}
        <div className="hidden md:flex flex-1 min-w-0 items-end justify-center">
          <img
            src="/spaces.png"
            alt="Простори музею"
            className="w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}
