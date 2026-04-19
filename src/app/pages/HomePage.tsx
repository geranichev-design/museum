import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DesktopBase from "../../imports/Desktop";
import MobileBase from "../../imports/Mobile";

export default function HomePage() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

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
      const button = target.closest('[data-name="button"]');

      if (button?.textContent?.includes("Дізнатись більше") || button?.textContent?.includes("Learn more")) {
        e.preventDefault();
        navigate("/history");
      } else if (button?.textContent?.includes("Придбати квиток") || button?.textContent?.includes("Buy a ticket")) {
        e.preventDefault();
        navigate("/tickets");
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

        /* Hide Figma headers and footers */
        [data-name="Desktop"] > [data-name="header menu"],
        [data-name="Mobile"] > [data-name="header menu"],
        [data-name="Desktop"] > [data-name="Content"] > [data-name="footer"],
        [data-name="Mobile"] > [data-name="Content"] > [data-name="footer"] {
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
        {isMobile ? <MobileBase /> : <DesktopBase />}
      </div>
      <Footer />
    </div>
  );
}
