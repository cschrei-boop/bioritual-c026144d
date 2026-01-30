import ProductPageTemplate from "@/components/product/ProductPageTemplate";
import { standardProtocolFaqs, standardProtocolDisclosures } from "@/data/product-content";

const ProductBioSignals = () => {
  const description = (
    <>
      <p className="mb-4 font-medium text-foreground">
        Weight loss isn't one molecule. It's navigating many signals—without breaking your metabolism.
      </p>
      <p className="mb-3">
        There are dozens of peptides, supplements, and strategies marketed for weight loss. Some suppress appetite. Some improve insulin sensitivity. Some protect muscle. Some help recovery.
      </p>
      <p className="mb-3">
        Most people are handed one compound and told to figure the rest out.
      </p>
      <p className="mb-3">
        Bio Signals does the opposite.
      </p>
      <p className="mb-3">
        We help you navigate the entire landscape—and design a personalized weight-loss protocol that integrates:
      </p>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>GLP-1–based peptides (including retatrutide-style approaches)</li>
        <li>Supportive supplementation to protect lean mass, energy, and recovery</li>
        <li>Nutrition strategies that work with appetite signals instead of fighting them</li>
      </ul>
      <p className="mb-4">
        Not "take this and hope." A structured system that actually holds together.
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
