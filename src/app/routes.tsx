import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import TicketsPage from "./pages/TicketsPage";
import AboutPage from "./pages/AboutPage";
import ResearchersPage from "./pages/ResearchersPage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import SpacesPage from "./pages/SpacesPage";
import ExpositionPage from "./pages/ExpositionPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/history",
    Component: HistoryPage,
  },
  {
    path: "/tickets",
    Component: TicketsPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/researchers",
    Component: ResearchersPage,
  },
  {
    path: "/events",
    Component: EventsPage,
  },
  {
    path: "/events/:id",
    Component: EventDetailPage,
  },
  {
    path: "/spaces",
    Component: SpacesPage,
  },
  {
    path: "/exposition",
    Component: ExpositionPage,
  },
  {
    path: "*",
    Component: HomePage,
  },
]);
