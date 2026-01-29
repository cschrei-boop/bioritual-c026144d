import ProductPageTemplate from "@/components/product/ProductPageTemplate";
import { standardProtocolFaqs, standardProtocolDisclosures } from "@/data/product-content";

const ProductBioSignalsEnergy = () => {
  const description = (
    <>
      <p className="mb-3">
        This protocol uses bio signals and behavioral frameworks to support baseline energy, daily consistency, and resilience.
      </p>
      <p className="mb-3">
        Low or inconsistent energy is often not a motivation problem — it's a signal and recovery problem. This protocol focuses on restoring rhythm, reducing volatility, and aligning lifestyle inputs so energy becomes more predictable and sustainable.
      </p>
      <p className="font-medium text-foreground">
        You are enrolling in an educational and lifestyle optimization protocol — not purchasing medical treatment or individual products.
      </p>
    </>
  );

  const whatsIncluded = [
    {
      title: "The Bio Signals Protocol (3 Months)",
      items: [
        "Energy signaling awareness",
        "Circadian and rhythm alignment",
        "Habit and behavior design",
        "Recovery and stress-load management",
        "Ongoing adjustment based on feedback",
      ],
      note: "The protocol is iterative and adapts based on participation and response.",
    },
    {
      title: "Private Client Wiki",
      description: "Each participant receives a private digital workspace.",
      items: [
        "Personalized protocol documentation",
        "Energy and rhythm tracking over time",
        "Notes and adjustments",
        "Educational references relevant to the protocol",
      ],
    },
    {
      title: "Protocol Materials",
      items: [
        "Non-itemized materials included as part of the protocol",
        "Materials are not sold separately or priced individually",
      ],
      note: "Access contingent on active participation.",
    },
    {
      title: "Reminders & Accountability",
      items: [
        "SMS and/or email reminders",
        "Periodic check-ins",
        "Prompts for tracking energy patterns and consistency",
      ],
    },
  ];

  const whoIsFor = [
    "Feel functional but consistently low-energy",
    "Experience energy crashes or wide daily swings",
    "Rely heavily on stimulants to get through the day",
    "Want steadier output without forcing intensity",
    "Prefer systems, structure, and feedback over hacks",
  ];

  return (
    <ProductPageTemplate
      productHandle="bio-signals-energy"
      fallbackTitle="Bio Signals: Energy"
      tagline="3-Month Optimization Protocol"
      description={description}
      whatsIncluded={whatsIncluded}
      whoIsFor={whoIsFor}
      faqs={standardProtocolFaqs}
      disclosures={standardProtocolDisclosures}
    />
  );
};

export default ProductBioSignalsEnergy;
