import ProductPageTemplate from "@/components/product/ProductPageTemplate";
import { standardProtocolFaqs, standardProtocolDisclosures } from "@/data/product-content";

const ProductBioSignals = () => {
  const description = (
    <>
      <p className="mb-3">
        This protocol uses bio signals and behavioral frameworks to support metabolic alignment and sustainable weight management.
      </p>
      <p className="mb-3">
        Bio signals are inputs that guide biological processes through feedback, rather than forcing outcomes. This protocol combines education, structure, tracking, and guided implementation into a single, time-bound system.
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
        "Weight and metabolic signaling awareness",
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
        "Weight and metabolic tracking over time",
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
        "Prompts for tracking consistency",
      ],
    },
  ];

  const whoIsFor = [
    "Structured support around weight management",
    "Clear systems instead of trial-and-error",
    "Accountability and progress tracking",
    "A feedback-driven, non-extreme approach",
    "Education alongside implementation",
  ];

  return (
    <ProductPageTemplate
      productHandle="bio-signals-weight-loss-metabolic-health"
      fallbackTitle="Bio Signals: Weight Loss + Metabolic Health"
      tagline="3-Month Optimization Protocol"
      description={description}
      whatsIncluded={whatsIncluded}
      whoIsFor={whoIsFor}
      faqs={standardProtocolFaqs}
      disclosures={standardProtocolDisclosures}
    />
  );
};

export default ProductBioSignals;
