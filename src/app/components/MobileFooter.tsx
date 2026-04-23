import { Link } from "react-router";
import { MuseumLogo } from "./MuseumLogo";
import { useLanguage } from "../context/LanguageContext";

export default function MobileFooter() {
  const { lang } = useLanguage();
  const uk = lang === 'uk';
  return (
    <div className="bg-[#f5f3e9] relative shrink-0 w-full min-h-[400px]" data-name="custom-footer">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[56px] relative w-full">
        <MuseumLogo linked color="black" width={267} height={74} className="pr-[16px]" />

        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full">
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

        <div className="content-stretch flex flex-col gap-[12px] items-start justify-between relative shrink-0 text-black w-full">
          <Link to="/" className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full hover:underline block">
            {uk ? 'Головна' : 'Home'}
          </Link>
          <Link to="/tickets" className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full hover:underline block">
            {uk ? 'Придбати квитки' : 'Buy tickets'}
          </Link>
          <Link to="/history" className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full hover:underline block">
            {uk ? 'Історія катастрофи' : 'History of the disaster'}
          </Link>
          <Link to="/events" className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full hover:underline block">
            {uk ? 'Анонс подій' : 'Upcoming events'}
          </Link>
          <Link to="/spaces" className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full hover:underline block">
            {uk ? 'Простори музею' : 'Museum spaces'}
          </Link>
        </div>

        <div className="content-stretch flex flex-col gap-[12px] items-start justify-between relative shrink-0 text-black w-full">
          <Link to="/about" className="font-['Oswald',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] uppercase w-full hover:underline block">
            {uk ? 'Про музей' : 'About museum'}
          </Link>
          <Link to="/about#history" className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full hover:underline block">
            {uk ? 'Історія' : 'History'}
          </Link>
          <Link to="/about#mission" className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full hover:underline block">
            {uk ? 'Місія' : 'Mission'}
          </Link>
          <Link to="/about#team" className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full hover:underline block">
            {uk ? 'Команда' : 'Team'}
          </Link>
          <Link to="/about#partners" className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full hover:underline block">
            {uk ? 'Партнери' : 'Partners'}
          </Link>
          <Link to="/about#accessibility" className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full hover:underline block">
            {uk ? 'Доступність' : 'Accessibility'}
          </Link>
          <Link to="/about#documents" className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full hover:underline block">
            {uk ? 'Документи' : 'Documents'}
          </Link>
          <Link to="/about#help" className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full hover:underline block">
            {uk ? 'Допомога музею' : 'Support the museum'}
          </Link>
          <Link to="/about#contacts" className="font-['Montserrat',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full hover:underline block">
            {uk ? 'Контакти' : 'Contacts'}
          </Link>
        </div>

        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
          <p className="font-['Oswald',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[20px] text-black uppercase w-[min-content]">
            {uk ? 'Наші соцмережі' : 'Our social media'}
          </p>
          <div className="flex gap-[16px] items-center">
            <a href="https://www.facebook.com/museumchornobyl/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="/facebook.svg" alt="Facebook" width={32} height={32} />
            </a>
            <a href="https://www.instagram.com/national.museum.chornobyl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src="/instagram.svg" alt="Instagram" width={32} height={32} />
            </a>
          </div>
        </div>

        {/* Support + Developer */}
        <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
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

        {/* Payment */}
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <img src="/mastercard-svgrepo-com.svg" alt="Mastercard" width={40} height={26} />
          <img src="/visa-svgrepo-com.svg" alt="Visa" width={40} height={26} />
        </div>
      </div>
    </div>
  );
}
