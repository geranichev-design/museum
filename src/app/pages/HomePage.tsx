import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DesktopBase from "../../imports/Desktop";
import MobileBase from "../../imports/Mobile";
import { PageHero } from "../components/PageHero";
import { useHashScroll } from "../hooks/useHashScroll";
import { useLanguage } from "../context/LanguageContext";

export default function HomePage() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const uk = lang === "uk";
  const [isMobile, setIsMobile] = useState(false);
  useHashScroll();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('[data-name="button"]') as HTMLElement | null;
      const pText = target.closest('p')?.textContent?.trim() ?? "";

      // Hero CTA buttons
      if (button?.textContent?.includes("Дізнатись більше") || button?.textContent?.includes("Learn more")) {
        e.preventDefault();
        navigate("/history");
        return;
      }
      if (button?.textContent?.includes("Придбати квиток") || button?.textContent?.includes("Buy a ticket")) {
        e.preventDefault();
        navigate("/tickets");
        return;
      }

      // Events section (section 6 / section6 — Desktop vs Mobile naming)
      if (target.closest('[data-name="section 6"]') || target.closest('[data-name="section6"]')) {
        e.preventDefault();
        navigate("/events");
        return;
      }

      // Tours "Детальніше" / "More details" links
      if (pText === "Детальніше" || pText === "More details") {
        e.preventDefault();
        navigate("/tickets");
        return;
      }

      // Footer navigation
      const footerNav: Record<string, string> = {
        "Головна": "/",                       "Home": "/",
        "Придбати квитки": "/tickets",         "Buy tickets": "/tickets",
        "Екскурсії": "/tickets",               "Tours": "/tickets",
        "Анонс подій": "/events",              "Upcoming events": "/events",
        "Історія катастрофи": "/history",      "History of the disaster": "/history",
        "Простори музею": "/spaces",           "Museum spaces": "/spaces",
        "Про музей": "/about",                 "About museum": "/about",
      };
      if (footerNav[pText]) {
        e.preventDefault();
        navigate(footerNav[pText]);
        return;
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <style>{`
        [data-name="button"]:has(p) {
          cursor: default;
        }
        [data-name="button"]:has(p:has-text("Дізнатись більше")),
        [data-name="button"]:has(p:has-text("Придбати квиток")) {
          cursor: pointer !important;
        }
        [data-name="button"]:has(p:has-text("Дізнатись більше")) *,
        [data-name="button"]:has(p:has-text("Придбати квиток")) * {
          cursor: pointer !important;
        }

        /* Events section */
        [data-name="section 6"] [data-name="button"],
        [data-name="section 6"] [data-name="button"] *,
        [data-name="section6"] [data-name="button"],
        [data-name="section6"] [data-name="button"] *,
        [data-name="section 6"] p,
        [data-name="section6"] p {
          cursor: pointer !important;
        }

        /* Tours "Детальніше" */
        [data-name="section 4"] p[class*="semibold"],
        [data-name="section4"] p[class*="semibold"] {
          cursor: pointer !important;
        }

        /* Footer nav items */
        [data-name="atoms"] p,
        [data-name="main"] > p,
        [data-name="about"] > p {
          cursor: pointer !important;
        }

        /* Hide section 7 */
        [data-name="section7"],
        [data-name="section 7"] {
          display: none !important;
        }

        /* Hide section 3 (mobile) */
        [data-name="section 3(animate)"] {
          display: none !important;
        }

        /* Hide quiz section (mobile) */
        [data-name="quiz-section"] {
          display: none !important;
        }

        /* Hide Figma headers, footers and original heroes */
        [data-name="Desktop"] > [data-name="header menu"],
        [data-name="Mobile"] > [data-name="header menu"],
        [data-name="Desktop"] > [data-name="Content"] > [data-name="footer"],
        [data-name="Mobile"] > [data-name="Content"] > [data-name="footer"],
        [data-name="Hero"] {
          display: none !important;
        }

        /* Remove size-full from Desktop/Mobile to allow footer to flow naturally */
        [data-name="Desktop"],
        [data-name="Mobile"] {
          height: auto !important;
          min-height: 0 !important;
        }

        /* Mobile content spacing */
        @media (max-width: 767px) {
          [data-name="Mobile"] {
            background-color: white !important;
          }
        }
      `}</style>
      <Header />
      <div className="flex-1">
        <PageHero
          titleTop={uk ? "ЧОРНОБИЛЬ" : "CHORNOBYL"}
          title={uk ? "ПАМʼЯТЬ, ЩО ФОРМУЄ МАЙБУТНЄ" : "MEMORY THAT SHAPES THE FUTURE"}
          imageSrc="/hero-bg.jpg"
          buttonText={uk ? "Придбати квиток" : "Buy a ticket"}
          buttonTo="/tickets"
        />
        {isMobile ? <MobileBase /> : <DesktopBase />}
      </div>
      <Footer />
    </div>
  );
}
