import ProductPageTemplate from "@/components/product/ProductPageTemplate";
import { Truck, RotateCcw } from "lucide-react";

const ProductAIConcierge = () => {
  const description = (
    <>
      <p className="mb-3">
        The Bio Signals AI Concierge is an educational support system trained on current research across peptides, supplements, longevity science, and metabolic and recovery frameworks.
      </p>
      <p className="mb-3">
        Its purpose is to help you understand complex information, navigate options, and think more clearly about optimization — without hype, shortcuts, or medical claims.
      </p>
      <p className="font-medium text-foreground">
        This is not a medical tool. It is an intelligent educational companion, designed to translate science into usable understanding.
      </p>
    </>
  );

  const whatsIncluded = [
    {
      title: "AI-Powered Research Support",
      items: [
        "Understand current research and emerging concepts",
        "Ask better questions about protocols and tradeoffs",
        "Compare approaches within a scientific context",
        "Clarify terminology and mechanisms in plain language",
      ],
    },
    {
      title: "Knowledge Base",
      description: "The AI Concierge is informed by:",
      items: [
        "Peer-reviewed research",
        "Educational literature on peptides and longevity science",
        "Metabolic, recovery, and signaling frameworks",
        "The Bio Signals protocol philosophy",
      ],
    },
    {
      title: "Access & Delivery",
      items: [
        "Digital access only",
        "Available on-demand",
        "No physical products",
        "No substances sold",
      ],
    },
  ];

  const whoIsFor = [
    "Educational context for optimization decisions",
    "Research-informed answers to complex questions",
    "A thinking partner for navigating options",
    "Plain-language explanations of scientific concepts",
  ];

  const faqs = [
    {
      question: "Is this a medical tool?",
      answer: "No. The AI Concierge provides educational information only. It does not diagnose, treat, or prescribe anything.",
    },
    {
      question: "What can I ask it?",
      answer: "You can ask about research concepts, compare frameworks, understand terminology, and explore optimization approaches — all from an educational perspective.",
    },
    {
      question: "Does it replace a doctor?",
      answer: "No. The AI Concierge is not a substitute for medical advice. Always consult licensed healthcare professionals for medical decisions.",
    },
    {
      question: "Are peptides or supplements sold here?",
      answer: "No. This is a digital educational service only. No substances are sold, prescribed, or provided.",
    },
    {
      question: "How do I access it?",
      answer: "After purchase, you receive digital access to the AI Concierge. No physical delivery required.",
    },
    {
      question: "Is this a subscription?",
      answer: "This is a one-time purchase for ongoing access to the AI Concierge service.",
    },
  ];

  const disclosures = [
    {
      title: "Educational Disclaimer",
      content: "The AI Concierge provides educational information only. It does not provide medical advice, diagnosis, or treatment.",
    },
    {
      title: "No Medical Relationship",
      content: "Using this service does not create a doctor-patient or healthcare provider relationship.",
    },
    {
      title: "No Substances Sold",
      content: "This is a digital educational service. No peptides, supplements, or other substances are sold or provided.",
    },
    {
      title: "Individual Responsibility",
      content: "Users are responsible for their own decisions and should consult licensed professionals as appropriate.",
    },
  ];

  return (
    <ProductPageTemplate
      productHandle="bio-signals-ai-concierge"
      fallbackTitle="Bio Signals: AI Concierge"
      fallbackPrice="$9.99"
      tagline="Digital Service"
      description={description}
      whatsIncluded={whatsIncluded}
      whoIsFor={whoIsFor}
      whoIsForNote="This is not for those seeking medical advice or treatment."
      faqs={faqs}
      disclosures={disclosures}
      ctaText="Get Access"
      trustBadges={[
        { icon: <Truck className="w-4 h-4" />, text: "Digital Access" },
        { icon: <RotateCcw className="w-4 h-4" />, text: "Ongoing Service" },
      ]}
    />
  );
};

export default ProductAIConcierge;
