import ProductPageTemplate from "@/components/product/ProductPageTemplate";
import { standardProtocolFaqs, standardProtocolDisclosures } from "@/data/product-content";

const ProductBioSignalsCognition = () => {
  const description = (
    <>
      <p className="mb-3">
        This protocol uses bio signals and behavioral frameworks to support cognitive function, mental clarity, and long-term brain health.
      </p>
      <p className="mb-3">
        Cognition is influenced by sleep, recovery, stress load, nutrition, and signaling balance. Rather than forcing focus or overstimulation, this protocol emphasizes clarity, stability, and cognitive resilience through structured inputs and feedback.
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
        "Cognitive signaling awareness",
        "Sleep and recovery alignment",
        "Stress-load and attention management",
        "Habit and environment design",
        "Ongoing adjustment based on feedback",
      ],
      note: "The protocol is iterative and adapts based on participation and response.",
    },
    {
      title: "Private Client Wiki",
      description: "Each participant receives a private digital workspace.",
      items: [
        "Personalized protocol documentation",
        "Cognitive patterns and routine tracking",
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
        "Prompts for focus, clarity, and routine consistency",
      ],
    },
  ];

  const whoIsFor = [
    "Want to support focus, clarity, and mental stamina",
    "Experience brain fog or cognitive inconsistency",
    "Work in cognitively demanding environments",
    "Want to protect long-term brain health",
    "Prefer systems and structure over short-term stimulants",
  ];

  return (
    <ProductPageTemplate
      productHandle="bio-signals-cognition"
      fallbackTitle="Bio Signals: Cognition + Brain Health"
      tagline="3-Month Optimization Protocol"
      description={description}
      whatsIncluded={whatsIncluded}
      whoIsFor={whoIsFor}
      faqs={standardProtocolFaqs}
      disclosures={standardProtocolDisclosures}
    />
  );
};

export default ProductBioSignalsCognition;
