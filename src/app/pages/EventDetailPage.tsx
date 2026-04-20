import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventDetailComponent from "../../imports/EventDetailComponent";
import { EVENTS_DATA } from "../../data/eventsData";

export default function EventDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const event = EVENTS_DATA.find((item) => item.id === id);
  const relatedEvents = event
    ? EVENTS_DATA.filter((item) => item.id !== event.id).slice(0, 4)
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!event) {
      navigate("/events", { replace: true });
    }
  }, [event, navigate]);

  if (!event) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <EventDetailComponent
          event={event}
          relatedEvents={relatedEvents}
          onBack={() => navigate(-1)}
          onRelatedClick={(relatedId) => navigate(`/events/${relatedId}`)}
        />
      </div>
      <Footer />
    </div>
  );
}
