import Header from "../components/Header";
import Footer from "../components/Footer";
import { ExpositionPageContent } from "../components/ExpositionPageContent";

export default function ExpositionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <ExpositionPageContent />
      </div>
      <Footer />
    </div>
  );
}
