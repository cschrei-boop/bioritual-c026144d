import ProductPageTemplate from "@/components/product/ProductPageTemplate";
import { standardProtocolFaqs, standardProtocolDisclosures } from "@/data/product-content";

const ProductBioSignalsLongevity = () => {
  const description = (
    <>
      <p className="mb-3">
        This protocol uses bio signals and behavioral frameworks to support long-term health, resilience, and functional capacity over time.
      </p>
      <p className="mb-3">
        Longevity is not about chasing extremes or short-term interventions. It's about preserving optionality, maintaining recovery capacity, and aligning daily inputs with long-term outcomes. This protocol focuses on structure, feedback, and consistency rather than forcing biological processes.
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
        "Long-term signaling awareness",
        "Recovery-first lifestyle alignment",
        "Stress and load management",
        "Habit design for sustainability",
        "Ongoing adjustment based on feedback",
      ],
      note: "The protocol is iterative and adapts based on participation and response.",
    },
    {
      title: "Private Client Wiki",
      description: "Each participant receives a private digital workspace.",
      items: [
        "Personalized protocol documentation",
        "Longitudinal tracking and observations",
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
        "Prompts for routine consistency and reflection",
      ],
    },
  ];

  const whoIsFor = [
    "Think in multi-year time horizons",
    "Want to preserve energy, function, and resilience",
    "Prefer maintenance and prevention frameworks",
    "Value consistency over intensity",
    "Want systems that age with them",
  ];

  return (
    <ProductPageTemplate
      productHandle="bio-signals-longevity"
      fallbackTitle="Bio Signals: Longevity"
      tagline="3-Month Optimization Protocol"
      description={description}
      whatsIncluded={whatsIncluded}
      whoIsFor={whoIsFor}
      faqs={standardProtocolFaqs}
      disclosures={standardProtocolDisclosures}
    />
  );
};

export default ProductBioSignalsLongevity;
