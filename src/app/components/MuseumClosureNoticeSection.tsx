import { useState } from "react";
import { Copy } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ImageLightbox } from "./ui/ImageLightbox";
import { VideoLightbox } from "./ui/VideoLightbox";

const NOTICE_TEXT = {
  uk: "Музей тимчасово не працює",
  en: "The museum is temporarily closed",
};

const DESCRIPTION = {
  uk: {
    title:
      'У ніч на 24 травня 2026 року внаслідок російського удару будівля Національного музею "Чорнобиль" зазнала критичних руйнувань.',
    body:
      "Музей, який після тривалої реставрації відкрився лише місяць тому. Працівники музею та рятувальники Державної служби України з надзвичайних ситуацій у перші години врятували значну частину експонатів. Водночас, через російську атаку близько 40% музейних предметів з експозицій були безповоротно втрачені. На жаль, зараз наші двері зачинені для відвідувачів, але ми неодмінно чекаємо на вас після відновлення музею.",
  },
  en: {
    title:
      'On the night of May 24, 2026, a Russian strike caused critical damage to the building of the National Museum "Chornobyl".',
    body:
      "The museum had reopened only a month earlier after a long restoration. Museum staff and rescuers from the State Emergency Service of Ukraine saved a significant part of the collection in the first hours. At the same time, because of the Russian attack, about 40% of the museum objects from the exhibitions were irretrievably lost. Unfortunately, our doors are now closed to visitors, but we will be waiting for you after the museum is restored.",
  },
};

const DONATION_TITLE = {
  uk: "Реквізити благодійного рахунку музею:",
  en: "Museum charitable account details:",
};

const DONATION_DETAILS = {
  uk: [
    ["Одержувач:", 'Національний музей "Чорнобиль"'],
    ["Юридична адреса:", "04071, м. Київ, провулок Хорива, 1"],
    ["Контактний тел.:", "(044) 425-44-62"],
    ["код ЄДРПОУ:", "24520773"],
    ["р/рах.:", "№UA028201720313231001301007687 - благодійні внески"],
    ["В призначенні платежу зазначати:", "Нецільова благодійна допомога"],
  ],
  en: [
    ["Recipient:", 'National Museum "Chornobyl"'],
    ["Legal address:", "1 Khoryva Lane, Kyiv, 04071, Ukraine"],
    ["Contact phone:", "(044) 425-44-62"],
    ["EDRPOU code:", "24520773"],
    ["Account:", "UA028201720313231001301007687 - charitable contributions"],
    ["Payment purpose:", "Non-targeted charitable assistance"],
  ],
};

const GALLERY_IMAGES = [
  "/new_main/galerry/01.png",
  "/new_main/galerry/02.png",
  "/new_main/galerry/03.png",
  "/new_main/galerry/04.png",
  "/new_main/galerry/05.png",
  "/new_main/galerry/06.png",
];

function Placeholder({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`bg-[#DFBE22] ${className}`} />;
}

function CopyButton({ value }: { value: string }) {
  const copyValue = () => {
    void navigator.clipboard?.writeText(value);
  };

  return (
    <button
      type="button"
      aria-label="Copy"
      onClick={copyValue}
      className="inline-flex size-[24px] shrink-0 items-center justify-center text-black transition-colors hover:text-white"
    >
      <Copy aria-hidden="true" strokeWidth={2.5} className="size-[20px]" />
    </button>
  );
}

function Marquee({ text }: { text: string }) {
  const items = Array.from({ length: 8 }, (_, index) => index);

  return (
    <div className="w-full overflow-hidden bg-[#DFBE22] text-black">
      <div className="closure-marquee flex w-max items-center gap-[72px] py-[16px] md:gap-[96px] md:py-[18px]">
        {items.map((item) => (
          <p
            key={item}
            className="whitespace-nowrap font-['Oswald',sans-serif] text-[22px] font-semibold uppercase leading-none md:text-[24px]"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

function MissileMarks() {
  return (
    <img
      src="/new_main/bombs.svg"
      alt=""
      aria-hidden="true"
      className="hidden h-auto w-[150px] self-start md:block"
    />
  );
}

export function MuseumClosureNoticeSection() {
  const { lang } = useLanguage();
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const notice = NOTICE_TEXT[lang];
  const description = DESCRIPTION[lang];
  const donationTitle = DONATION_TITLE[lang];
  const donationDetails = DONATION_DETAILS[lang];

  return (
    <section className="w-screen max-w-[100vw] overflow-hidden bg-black text-white md:w-full md:max-w-none" aria-labelledby="museum-closure-title">
      <style>{`
        @keyframes closure-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        .closure-marquee {
          animation: closure-marquee 24s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .closure-marquee {
            animation: none;
          }
        }
      `}</style>

      <Marquee text={notice} />

      <div className="mx-auto flex w-screen max-w-[100vw] flex-col gap-[32px] px-[16px] py-[40px] md:w-full md:max-w-[1200px] md:gap-[40px] md:px-[55px] md:py-[40px]">
        <div className="aspect-[1170/852] w-full overflow-hidden md:aspect-[1066/798]">
          <img
            src="/new_main/bunner_24.05.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="grid w-full max-w-[calc(100vw-32px)] grid-cols-1 gap-[24px] md:max-w-none md:grid-cols-2 md:gap-[32px]">
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="min-w-0 cursor-zoom-in border-[6px] border-white transition-colors hover:border-[#DFBE22] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[4px] focus-visible:outline-[#DFBE22] md:border-[5px]"
            aria-label={lang === "uk" ? "Відкрити відео" : "Open video"}
          >
            <div className="aspect-[513/363] w-full overflow-hidden bg-black">
              <video
                src="/new_main/IMG_1873.MP4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="pointer-events-none h-full w-full object-cover"
              />
            </div>
          </button>

          <div className="flex min-w-0 flex-col justify-start gap-[24px] md:pt-[2px]">
            <h2
              id="museum-closure-title"
              className="min-w-0 max-w-[calc(100vw-32px)] break-words font-['Oswald',sans-serif] text-[32px] font-medium uppercase leading-[1.05] text-white md:max-w-none md:text-[20px] md:leading-[22px]"
            >
              {description.title}
            </h2>
            <p className="min-w-0 max-w-[calc(100vw-32px)] break-words font-['Montserrat',sans-serif] text-[18px] font-normal leading-[1.48] text-white md:max-w-none md:text-[16px] md:leading-[22px]">
              {description.body.split(lang === "uk" ? "чекаємо на вас після відновлення музею." : "waiting for you after the museum is restored.")[0]}
              <strong>
                {lang === "uk"
                  ? "чекаємо на вас після відновлення музею."
                  : "waiting for you after the museum is restored."}
              </strong>
            </p>
            <MissileMarks />
          </div>
        </div>

        <div className="flex w-full gap-[24px] overflow-x-auto pb-[4px] md:grid md:grid-cols-6 md:gap-[20px] md:overflow-visible md:pb-0">
          {GALLERY_IMAGES.map((src, index) => (
            <button
              type="button"
              key={src}
              onClick={() => setGalleryIndex(index)}
              className="aspect-square w-[180px] shrink-0 cursor-zoom-in overflow-hidden border-[6px] border-white transition-colors hover:border-[#DFBE22] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[4px] focus-visible:outline-[#DFBE22] md:w-auto md:border-[5px]"
              aria-label={`${lang === "uk" ? "Відкрити фото" : "Open photo"} ${index + 1}`}
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#DFBE22] text-black">
        <div className="mx-auto grid w-screen max-w-[100vw] grid-cols-1 gap-[32px] px-[16px] py-[40px] md:w-full md:max-w-[1200px] md:grid-cols-[1fr_333px] md:gap-[88px] md:px-[55px] md:py-[40px]">
          <div className="flex min-w-0 flex-col gap-[24px]">
            <div className="flex max-w-[calc(100vw-32px)] items-start gap-[8px] md:max-w-none md:items-center">
              <div className="size-[32px] shrink-0 bg-black" />
              <h3 className="min-w-0 break-words font-['Oswald',sans-serif] text-[28px] font-medium uppercase leading-[1.08] md:text-[20px] md:leading-[22px]">
                {donationTitle}
              </h3>
            </div>

            <dl className="grid gap-[18px] font-['Montserrat',sans-serif] text-[18px] leading-[1.25] md:gap-[16px] md:text-[16px]">
              {donationDetails.map(([label, value]) => (
                <div key={label} className="grid min-w-0 max-w-[calc(100vw-32px)] grid-cols-[minmax(0,1fr)_auto] gap-x-[12px] gap-y-[6px] md:max-w-none md:grid-cols-[170px_minmax(0,1fr)_auto] md:items-start">
                  <dt className="font-bold md:col-start-1">{label}</dt>
                  <dd className="col-start-1 row-start-2 min-w-0 break-words md:col-start-2 md:row-start-1">{value}</dd>
                  <div className="col-start-2 row-span-2 row-start-1 self-start md:col-start-3 md:row-span-1">
                    <CopyButton value={value} />
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="min-w-0 border-[0px] border-white md:border-[0px]">
            <div className="aspect-square w-full overflow-hidden">
              <img
                src="/new_main/bunner_pay.png"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {galleryIndex !== null && (
        <ImageLightbox
          images={GALLERY_IMAGES}
          currentIndex={galleryIndex}
          onClose={() => setGalleryIndex(null)}
          onSelect={setGalleryIndex}
        />
      )}

      {videoOpen && (
        <VideoLightbox
          src="/new_main/IMG_1873.MP4"
          autoPlay
          onClose={() => setVideoOpen(false)}
        />
      )}
    </section>
  );
}
