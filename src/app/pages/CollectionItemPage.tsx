import { useParams, useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CollectionItemComponent from "../../imports/CollectionItemComponent";
import { COLLECTION_ITEMS, getRelatedItems } from "../../data/collectionData";
import { useHashScroll } from "../hooks/useHashScroll";

export default function CollectionItemPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  useHashScroll();

  const item = COLLECTION_ITEMS.find((i) => i.id === id);

  if (!item) {
    navigate("/researchers");
    return null;
  }

  const relatedItems = getRelatedItems(item);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <CollectionItemComponent
          item={item}
          relatedItems={relatedItems}
          onBack={() => navigate("/researchers#funds")}
          onRelatedClick={(relatedId) => navigate(`/collection/${relatedId}`)}
        />
      </div>
      <Footer />
    </div>
  );
}
