export type EventRecord = {
  id: string;
  tags: string[];
  title: string;
  date: string;
  category: string;
  description: string[];
  gallery: Array<{ src: string | null }>;
};

export const TAG_STYLES: Record<string, string> = {
  "Виставки": "bg-[#DFBE22]",
  "Майстер-класи": "bg-[#DFBE22]",
  "Тимчасові проєкти": "bg-[#d4d4d4]",
  "Лекції": "bg-[#a8d8ea]",
  "Дитячі програми": "bg-[#f0a0c8]",
};

const DEFAULT_DESCRIPTION = [
  "Музейний проєкт розкриває історію Чорнобиля через особисті свідчення, документи та візуальні матеріали, які допомагають побачити події в людському вимірі.",
  "Експозиція поєднує історичний контекст, дослідницькі матеріали та сучасну рефлексію про пам'ять, відповідальність і майбутнє.",
];

const DEFAULT_GALLERY: Array<{ src: string | null }> = [
  { src: "/hero-bg.jpg" },
  { src: "/about-hero-bg.jpg" },
  { src: null },
  { src: "/hero-bg.jpg" },
  { src: "/about-hero-bg.jpg" },
];

export const EVENTS_DATA: EventRecord[] = [
  { id: "0", tags: ["Виставки", "Майстер-класи"], category: "Виставки", title: "До та після трагедії", date: "2026-08-10", description: DEFAULT_DESCRIPTION, gallery: DEFAULT_GALLERY },
  { id: "1", tags: ["Майстер-класи"], category: "Майстер-класи", title: "Архів пам'яті: робота з родинними історіями", date: "2026-08-14", description: DEFAULT_DESCRIPTION, gallery: DEFAULT_GALLERY },
  { id: "2", tags: ["Тимчасові проєкти"], category: "Тимчасові проєкти", title: "Місто після вибуху", date: "2026-08-18", description: DEFAULT_DESCRIPTION, gallery: DEFAULT_GALLERY },
  { id: "3", tags: ["Лекції", "Майстер-класи"], category: "Лекції", title: "Зустріч-дискусія: 40 років після трагедії", date: "2026-08-21", description: DEFAULT_DESCRIPTION, gallery: DEFAULT_GALLERY },
  { id: "4", tags: ["Дитячі програми"], category: "Дитячі програми", title: "Чорнобиль для підлітків: говоримо чесно", date: "2026-08-24", description: DEFAULT_DESCRIPTION, gallery: DEFAULT_GALLERY },
  { id: "5", tags: ["Лекції"], category: "Лекції", title: "Свідчення ліквідаторів: публічна розмова", date: "2026-08-27", description: DEFAULT_DESCRIPTION, gallery: DEFAULT_GALLERY },
  { id: "6", tags: ["Лекції"], category: "Лекції", title: "Чорнобиль у світовій культурі пам'яті", date: "2026-09-02", description: DEFAULT_DESCRIPTION, gallery: DEFAULT_GALLERY },
  { id: "7", tags: ["Виставки"], category: "Виставки", title: "Маршрутами зони відчуження", date: "2026-09-06", description: DEFAULT_DESCRIPTION, gallery: DEFAULT_GALLERY },
  { id: "8", tags: ["Лекції"], category: "Лекції", title: "Радіація без міфів: пояснюють дослідники", date: "2026-09-10", description: DEFAULT_DESCRIPTION, gallery: DEFAULT_GALLERY },
  { id: "9", tags: ["Лекції"], category: "Лекції", title: "Політика пам'яті після катастроф", date: "2026-09-14", description: DEFAULT_DESCRIPTION, gallery: DEFAULT_GALLERY },
  { id: "10", tags: ["Дитячі програми"], category: "Дитячі програми", title: "Сімейний день у музеї", date: "2026-09-18", description: DEFAULT_DESCRIPTION, gallery: DEFAULT_GALLERY },
  { id: "11", tags: ["Тимчасові проєкти"], category: "Тимчасові проєкти", title: "Голоси з Прип'яті", date: "2026-09-22", description: DEFAULT_DESCRIPTION, gallery: DEFAULT_GALLERY },
];

export function pickRandom4(items: EventRecord[]): EventRecord[] {
  const shuffled = [...items].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
}
