import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DesktopAboutBase from "../../imports/Desktop-1/Desktop-4-2135";
import MobileAboutBase from "../../imports/Mobile-1-About";

export default function AboutPage() {
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

      if (button?.textContent?.includes("Придбати квиток")) {
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
        [data-name="Desktop"] {
          height: auto !important;
          width: 100% !important;
        }
      `}</style>
      <Header />
      <div className="flex-1">
        {isMobile ? <MobileAboutBase /> : <DesktopAboutBase />}
      </div>
      <Footer />
    </div>
  );
}
