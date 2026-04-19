import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResearchersContent from "../../imports/ResearchersContent";

export default function ResearchersPage() {
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
        <ResearchersContent onBuyTicket={() => navigate("/tickets")} />
      </div>
      <Footer />
    </div>
  );
}
