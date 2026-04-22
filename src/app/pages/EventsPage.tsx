import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventsComponent from "../../imports/EventsComponent";
import { useHashScroll } from "../hooks/useHashScroll";

export default function EventsPage() {
  const navigate = useNavigate();
  useHashScroll();

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
        <EventsComponent onBuyTicket={() => navigate("/tickets")} />
      </div>
      <Footer />
    </div>
  );
}
