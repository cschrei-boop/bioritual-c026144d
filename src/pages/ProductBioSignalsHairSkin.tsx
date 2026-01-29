import ProductPageTemplate from "@/components/product/ProductPageTemplate";
import { standardProtocolFaqs, standardProtocolDisclosures } from "@/data/product-content";

const ProductBioSignalsHairSkin = () => {
  const description = (
    <>
      <p className="mb-3">
        This protocol uses bio signals and behavioral frameworks to support skin quality, tissue integrity, and hair health over time.
      </p>
      <p className="mb-3">
        Hair and skin are outward expressions of internal balance, recovery, and resource allocation. This protocol focuses on supporting signaling pathways that influence tissue quality, while aligning lifestyle, recovery, and consistency.
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
        "Tissue signaling awareness",
        "Skin and hair-supportive routines",
        "Recovery and stress-load alignment",
        "Lifestyle inputs that influence tissue quality",
        "Ongoing adjustment based on feedback",
      ],
      note: "The protocol is iterative and adapts based on participation and response.",
    },
    {
      title: "Private Client Wiki",
      description: "Each participant receives a private digital workspace.",
      items: [
        "Personalized protocol documentation",
        "Tracking of routines and observations",
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
    "Care about visible indicators of health and maintenance",
    "Want to support skin quality and resilience",
    "Want to support hair health as part of a broader system",
    "Prefer long-term maintenance over short-term fixes",
    "Want structure, tracking, and consistency",
  ];

  return (
    <ProductPageTemplate
      productHandle="bio-signals-hair-skin"
      fallbackTitle="Bio Signals: Hair + Skin"
      tagline="3-Month Optimization Protocol"
      description={description}
      whatsIncluded={whatsIncluded}
      whoIsFor={whoIsFor}
      faqs={standardProtocolFaqs}
      disclosures={standardProtocolDisclosures}
    />
  );
};

export default ProductBioSignalsHairSkin;
