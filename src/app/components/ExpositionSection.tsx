import { MuseumButton } from "./ui/MuseumButton";

export function ExpositionSection() {
  return (
    <section id="exposition" className="w-full bg-white">
      <div className="flex flex-col md:flex-row items-stretch max-w-[1200px] mx-auto px-[16px] md:px-[55px] py-[48px] md:py-[72px] gap-[40px] md:gap-[56px]">

        {/* Left — text content */}
        <div className="flex flex-col gap-[24px] flex-1 min-w-0">

          {/* Title */}
          <div className="flex gap-[8px] items-center">
            <div className="bg-[#dfbe22] shrink-0 size-[32px] md:size-[34px]" />
            <p className="font-['Oswald',sans-serif] font-medium text-[28px] md:text-[34px] text-black uppercase leading-none">
              ЕКСПОЗИЦІЯ
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-[16px] font-['Montserrat',sans-serif] text-[14px] md:text-[16px] text-black leading-[1.5]">

            <div>
              <p className="font-bold mb-[6px]">Експозиція налічує 2 простори:</p>
              <ul className="flex flex-col gap-[2px] pl-[4px]">
                <li className="flex gap-[8px]"><span className="shrink-0">·</span>історичний</li>
                <li className="flex gap-[8px]"><span className="shrink-0">·</span>освітній</li>
              </ul>
            </div>

            <p className="font-bold">Історична частина</p>

            <p>
              Нова експозиція «Чорнобиль: люди і сенси» осмислює Чорнобильську катастрофу як спільний досвід і глибоку
              травму, яка водночас стала свідченням стійкості українців. Вона розкриває багатогранність поняття
              «Чорнобиль» — від трагедії до переосмислення, від пам'яті до майбутнього.
            </p>

            <p>
              Експозиція побудована у двох часових вимірах: момент аварії та ліквідації її наслідків і сьогодення.
              Історичні зали охоплюють шлях від будівництва Чорнобильської атомної електростанції і життя Прип'яті до
              аварії 1986 року, ліквідації її наслідків і сучасних викликів, зокрема подій, пов'язаних із
              повномасштабною війною. Особливий акцент зроблено на особистих історіях ліквідаторів — людей, які першими
              стали на захист світу від наслідків катастрофи.
            </p>
          </div>

          {/* Image — mobile only (shown between text and button) */}
          <div className="md:hidden w-full aspect-[4/3] overflow-hidden">
            <img
              src="/exposition-collage.png"
              alt="Експозиція — АТОМ"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Button */}
          <div className="mt-auto">
            <MuseumButton icon="arrow" to="/exposition" className="w-full md:w-auto justify-center md:justify-start">
              ДІЗНАТИСЬ БІЛЬШЕ
            </MuseumButton>
          </div>
        </div>

        {/* Right — image (desktop only) */}
        <div className="hidden md:flex flex-1 min-w-0 items-center justify-center">
          <img
            src="/exposition-collage.png"
            alt="Експозиція — АТОМ"
            className="w-full h-full object-contain max-h-[500px]"
          />
        </div>

      </div>
    </section>
  );
}
