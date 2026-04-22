import { useState } from "react";
import { MuseumButton } from "./ui/MuseumButton";
import { VideoLightbox } from "./ui/VideoLightbox";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="w-full bg-[#F5F3E9]">
      <div className="max-w-[1200px] mx-auto px-[16px] md:px-[55px] py-[48px] md:py-[64px] flex flex-col gap-[32px] md:grid md:grid-cols-2 md:gap-x-[56px] md:gap-y-[40px]">

        {/* Title — row 1, spans both columns */}
        <div className="flex gap-[8px] items-center md:col-span-2">
          <div className="bg-[#dfbe22] shrink-0 size-[32px] md:size-[34px]" />
          <p className="hidden md:block font-['Oswald',sans-serif] font-medium text-[34px] text-black uppercase leading-none">
            ПРОСТОРИ МУЗЕЮ
          </p>
          <p className="md:hidden font-['Oswald',sans-serif] font-medium text-[28px] text-black uppercase leading-none">
            МАПА МУЗЕЮ
          </p>
        </div>

        {/* Video — row 2, col 1 (desktop only) */}
        <div
          className="hidden md:block cursor-pointer md:col-start-1 md:row-start-2"
          onClick={() => setLightboxOpen(true)}
        >
          <video
            src="/museum_720.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>

        {/* Tabs + text + button — row 2, col 2 (desktop) / full width (mobile) */}
        <div className="flex flex-col gap-[32px] md:col-start-2 md:row-start-2 md:justify-center">

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

          {/* Video — mobile only */}
          <div className="md:hidden w-full cursor-pointer" onClick={() => setLightboxOpen(true)}>
            <video
              src="/museum_720.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full object-contain pointer-events-none"
            />
          </div>

          {/* Button */}
          <div>
            <MuseumButton icon="arrow" to="/spaces" className="w-full md:w-auto justify-center md:justify-start">
              ДО ПРОСТОРІВ МУЗЕЮ
            </MuseumButton>
          </div>
        </div>

      </div>

      {lightboxOpen && (
        <VideoLightbox src="/museum_720.mp4" onClose={() => setLightboxOpen(false)} />
      )}
    </section>
  );
}
