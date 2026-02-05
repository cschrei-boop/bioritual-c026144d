import { useProtocolProducts } from "@/hooks/useShopifyCollection";
import ProductCarousel, { ProductCarouselItem } from "./ProductCarousel";

// Subtitle mapping based on handle (for UI enhancement)
const handleToSubtitle: Record<string, string> = {
  "bio-signals-weight-loss-metabolic-health": "Metabolic Health",
  "bio-signals-energy": "Vitality & Focus",
  "bio-signals-cognition-brain-health": "Brain Health",
  "bio-signals-longevity": "Aging Well",
  "bio-signals-performance-recovery": "Strength & Recovery",
  "bio-signals-hair-skin": "Appearance & Vitality",
};

const ShopByGoal = () => {
  const { data: products = [], isLoading } = useProtocolProducts();

  // Transform products for ProductCarousel
  const carouselProducts: ProductCarouselItem[] = products.map((product) => ({
    id: product.id,
    title: product.title.replace("Bio Signals: ", "").replace(" + ", " + "),
    subtitle: handleToSubtitle[product.handle] || "",
    handle: product.handle,
    image: product.image,
  }));

  return (
    <ProductCarousel
      title="Tailored Solutions for Different Goals"
      subtitle="Find the right protocol for your specific needs"
      products={carouselProducts}
      isLoading={isLoading}
      collectionHref="/collection/protocols"
      collectionLinkText="View All Protocols"
    />
  );
};

export default ShopByGoal;
