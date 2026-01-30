import ProductPageTemplate from "@/components/product/ProductPageTemplate";
import { standardProtocolFaqs, standardProtocolDisclosures } from "@/data/product-content";

const ProductBioSignalsPerformance = () => {
  const description = (
    <>
      <p className="mb-3">
        This protocol uses bio signals and behavioral frameworks to support physical performance while protecting recovery capacity.
      </p>
      <p className="mb-3">
        Performance without recovery leads to stagnation, injury, or burnout. This protocol focuses on output with feedback intact, aligning training, recovery, and lifestyle inputs so adaptation can occur without forcing the system.
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
        "Performance and recovery signaling awareness",
        "Training load and stress-management frameworks",
        "Recovery prioritization and rhythm alignment",
        "Lifestyle inputs that support adaptation",
        "Ongoing adjustment based on feedback",
      ],
      note: "The protocol is iterative and adapts based on participation and response.",
    },
    {
      title: "Private Client Wiki",
      description: "Each participant receives a private digital workspace.",
      items: [
        "Personalized protocol documentation",
        "Training and recovery tracking over time",
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
        "Prompts for training, recovery, and readiness tracking",
      ],
    },
  ];

  const whoIsFor = [
    "Train consistently and want better adaptation",
    "Feel under-recovered relative to workload",
    "Experience performance plateaus",
    "Want to improve output without increasing strain",
    "Prefer structured systems over guesswork",
  ];

  return (
    <ProductPageTemplate
      productHandle="bio-signals-performance-recovery"
      fallbackTitle="Bio Signals: Performance + Recovery"
      tagline="3-Month Optimization Protocol"
      description={description}
      whatsIncluded={whatsIncluded}
      whoIsFor={whoIsFor}
      faqs={standardProtocolFaqs}
      disclosures={standardProtocolDisclosures}
    />
  );
};

export default ProductBioSignalsPerformance;
