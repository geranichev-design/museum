import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DesktopTicketsBase from "../../imports/Desktop/Desktop-4-29";
import MobileTicketsBase from "../../imports/Mobile/Mobile-4-743";
import { useHashScroll } from "../hooks/useHashScroll";

export default function TicketsPage() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState<"single" | "group" | "free" | "additional">("single");
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

      // Handle tab clicks
      const tab = target.closest('[data-name="tab"]');
      if (tab) {
        const tabText = tab.textContent?.trim();
        if (tabText === "Персональний" || tabText === "Personal") {
          setActiveTab("single");
        } else if (tabText === "Груповий" || tabText === "Group") {
          setActiveTab("group");
        } else if (tabText === "Безкоштовні" || tabText === "Free") {
          setActiveTab("free");
        } else if (tabText === "Додаткові" || tabText === "Additional") {
          setActiveTab("additional");
        }
        return;
      }

      // Handle navigation
      const logo = target.closest('[data-name="Лого національного музею «Чорнобиль»_текст справа_чорний 1"]');
      if (logo) {
        e.preventDefault();
        navigate("/");
        return;
      }

      // Handle "Придбати квиток" button in header
      const headerButton = target.closest('[data-name="button"]');
      const externalBuyLink = target.closest('a[href*="next.privat24.ua/payments/form"]');
      if (externalBuyLink) {
        return;
      }
      if (headerButton?.textContent?.includes("Придбати квиток") && !headerButton.classList.contains('bg-[#DFBE22]')) {
        e.preventDefault();
        navigate("/tickets");
        return;
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <style>{`
        [data-name="Лого національного музею «Чорнобиль»_текст справа_чорний 1"] {
          cursor: pointer !important;
        }
        [data-name="Лого національного музею «Чорнобиль»_текст справа_чорний 1"] * {
          cursor: pointer !important;
        }
        [data-name="tab"] {
          cursor: pointer !important;
        }
        [data-name="tab"] * {
          cursor: pointer !important;
        }

        /* Hide Figma headers and footers */
        [data-name="Desktop"] > [data-name="header menu"],
        [data-name="Mobile"] > [data-name="header menu"],
        [data-name="Desktop"] [data-name="footer"],
        [data-name="Mobile"] [data-name="footer"] {
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
        {isMobile
          ? <MobileTicketsBase activeTab={activeTab} onTabChange={(v) => setActiveTab(v as "single" | "group" | "free" | "additional")} />
          : <DesktopTicketsBase activeTab={activeTab} />}
      </div>
      <Footer />
    </div>
  );
}
