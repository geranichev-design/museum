import { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventDetailComponent from "../../imports/EventDetailComponent";

export default function EventDetailPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <EventDetailComponent
          onBack={() => navigate("/events")}
          onRelatedClick={() => window.scrollTo(0, 0)}
        />
      </div>
      <Footer />
    </div>
  );
}
