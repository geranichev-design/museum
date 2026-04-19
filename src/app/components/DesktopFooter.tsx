import { MuseumLogo } from "./MuseumLogo";
import { useLanguage } from "../context/LanguageContext";

export default function DesktopFooter() {
  const { lang } = useLanguage();
  const uk = lang === 'uk';
  return (
    <div className="bg-[#f5f3e9] relative shrink-0 w-full min-h-[400px]" data-name="custom-footer">
      <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] px-[55px] py-[72px] relative w-full max-w-[1280px] mx-auto">
        {/* Column 1: Logo and Contacts */}
        <div className="col-1 relative row-1 shrink-0">
          <MuseumLogo linked color="black" width={267} height={74} />
        </div>

        <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-[2/span_2] self-start shrink-0 text-black">
          <p className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full">
            {uk ? 'Контактна інформація' : 'Contact information'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">
            {uk ? 'м. Київ, провулок Хорива, 1,' : 'Kyiv, Khoriva Lane, 1,'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">
            tel. +38 044 482-56-27
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">
            {uk ? 'Пн – Сб (Нд - вихідний день)' : 'Mon – Sat (Sun – day off)'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">
            {uk ? '10:00 – 18.00 (каса до 17.00)' : '10:00 – 18:00 (ticket office until 17:00)'}
          </p>
        </div>

        {/* Column 2: Main Navigation */}
        <div className="col-2 content-stretch flex flex-col items-start justify-between justify-self-stretch relative row-[1/span_3] self-stretch shrink-0">
          <p className="font-['Oswald',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]">
            {uk ? 'Головна' : 'Home'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black">
            {uk ? 'Придбати квитки' : 'Buy tickets'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black">
            {uk ? 'Екскурсії' : 'Tours'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black">
            {uk ? 'Анонс подій' : 'Upcoming events'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black">
            {uk ? 'Історія катастрофи' : 'History of the disaster'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black">
            {uk ? 'Простори музею' : 'Museum spaces'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black">
            {uk ? 'Вікторина' : 'Quiz'}
          </p>
        </div>

        {/* Column 3: About */}
        <div className="col-3 content-stretch flex flex-col items-start justify-between justify-self-stretch relative row-[1/span_3] self-stretch shrink-0">
          <p className="font-['Oswald',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]">
            {uk ? 'Про музей' : 'About museum'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black">
            {uk ? 'Історія' : 'History'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black">
            {uk ? 'Місія' : 'Mission'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black">
            {uk ? 'Команда' : 'Team'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black">
            {uk ? 'Партнери' : 'Partners'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black">
            {uk ? 'Доступність' : 'Accessibility'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black">
            {uk ? 'Документи' : 'Documents'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black">
            {uk ? 'Допомога музею' : 'Support the museum'}
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black">
            {uk ? 'Контакти' : 'Contacts'}
          </p>
        </div>

        {/* Column 4: Social Media */}
        <div className="col-4 content-stretch flex flex-col gap-[16px] items-start relative row-1 self-start shrink-0">
          <p className="font-['Oswald',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]">
            {uk ? 'Наші соцмережі' : 'Our social media'}
          </p>
          <div className="flex gap-[16px] items-center">
            <a href="#" aria-label="Facebook" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="/facebook.svg" alt="Facebook" width={32} height={32} />
            </a>
            <a href="#" aria-label="LinkedIn" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="/Linkedin.svg" alt="LinkedIn" width={32} height={32} />
            </a>
            <a href="#" aria-label="Twitter / X" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="/twitter.svg" alt="Twitter" width={32} height={32} />
            </a>
            <a href="#" aria-label="YouTube" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="/youtube.svg" alt="YouTube" width={32} height={32} />
            </a>
          </div>
        </div>

        {/* Column 4 Row 2: Support + Developer */}
        <div className="col-4 content-stretch flex gap-[32px] items-start relative row-2 self-start shrink-0">
          <div className="flex flex-col gap-[8px] items-start">
            <p className="font-['Montserrat',sans-serif] font-normal text-[14px] text-black">
              {uk ? 'За підтримки:' : 'Supported by:'}
            </p>
            <img src="/MIA.svg" alt={uk ? 'Міністерство внутрішніх справ України' : 'Ministry of Internal Affairs of Ukraine'} height={56} className="max-w-[120px]" />
          </div>
          <div className="flex flex-col gap-[8px] items-start">
            <p className="font-['Montserrat',sans-serif] font-normal text-[14px] text-black">
              {uk ? 'Розробник:' : 'Developer:'}
            </p>
            <img src="/DP.svg" alt="ІНФОТЕХ" height={40} className="max-w-[140px]" />
          </div>
        </div>

        {/* Column 4 Row 3: Payment */}
        <div className="col-4 content-stretch flex gap-[16px] items-center relative row-3 self-start shrink-0">
          <img src="/mastercard-svgrepo-com.svg" alt="Mastercard" width={40} height={26} />
          <img src="/visa-svgrepo-com.svg" alt="Visa" width={40} height={26} />
        </div>
      </div>
    </div>
  );
}
