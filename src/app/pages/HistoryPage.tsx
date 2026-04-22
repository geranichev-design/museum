import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DesktopHistoryBase from "../../imports/Desktop-3-11477";
import MobileHistoryBase from "../../imports/Mobile-3-12177";
import { useHashScroll } from "../hooks/useHashScroll";

export default function HistoryPage() {
  const navigate = useNavigate();
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

      // Check for desktop navigation bar
      const navBar = target.closest('[data-name="Navigation Bar"]');
      if (navBar) {
        e.preventDefault();
        navigate("/");
        return;
      }

      // Check for mobile back button (icon or text)
      const svg = target.closest('svg');
      if (svg?.querySelector('[id="Back Icon"]')) {
        e.preventDefault();
        navigate("/");
        return;
      }

      // Check if clicked on "на головну" / "home" text
      const trimmed = target.textContent?.trim();
      if (trimmed === "на головну" || trimmed === "home") {
        e.preventDefault();
        navigate("/");
        return;
      }

      // Check for "Придбати квиток" / "Buy a ticket" button
      const button = target.closest('[data-name="button"]');
      if (button?.textContent?.includes("Придбати квиток") || button?.textContent?.includes("Buy a ticket")) {
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
        [data-name="Navigation Bar"],
        svg:has([id="Back Icon"]),
        [id="Back Icon"],
        p:is(:has-text("на головну")) {
          cursor: pointer !important;
          user-select: none;
        }
        svg:has([id="Back Icon"]) * {
          cursor: pointer !important;
        }

        /* Desktop header fixes */
        @media (min-width: 768px) {
          [data-name="header menu"] {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 1000 !important;
          }
        }

        /* Mobile header fixes */
        @media (max-width: 767px) {
          [data-name="header menu"] {
            background-color: transparent !important;
            max-width: 100% !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 1000 !important;
            height: 73px !important;
          }

          /* Frame1 inside mobile header */
          [data-name="header menu"] > div {
            position: relative !important;
          }

          /* Allow menu portal to extend beyond header */
          [data-name="header menu"]:has([data-menu-portal="true"]) {
            height: auto !important;
            min-height: 73px !important;
          }

          [data-name="Mobile"] {
            background-color: white !important;
          }
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
      `}</style>
      <Header />
      <div className="flex-1 overflow-x-hidden bg-black pt-[89px] pb-[40px] md:pt-[105px] md:pb-[72px]">
        {isMobile ? <MobileHistoryBase /> : <DesktopHistoryBase />}
      </div>
      <Footer />
    </div>
  );
}
