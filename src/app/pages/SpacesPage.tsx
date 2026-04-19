import { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SpacesComponent from "../../imports/SpacesComponent";

export default function SpacesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
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
        <SpacesComponent onBuyTicket={() => navigate("/tickets")} />
      </div>
      <Footer />
    </div>
  );
}
