import ProductPageTemplate from "@/components/product/ProductPageTemplate";
import { coachingFaqs, coachingDisclosures } from "@/data/product-content";
import { Truck, RotateCcw } from "lucide-react";

const ProductCoaching = () => {
  const description = (
    <>
      <p className="mb-3">
        1:1 Optimization Coaching provides structured, personalized support for your health and performance journey. Through weekly video calls and ongoing async communication, you receive dedicated guidance tailored to your specific goals.
      </p>
      <p>
        This is not a quick-fix program. It's a commitment to understanding your body, building sustainable habits, and making informed decisions based on education and self-awareness.
      </p>
    </>
  );

  const whatsIncluded = [
    {
      title: "Weekly 1:1 Support",
      items: [
        "Weekly 1:1 video calls with your dedicated coach",
        "Async support via private messaging",
        "Custom protocol design tailored to your goals",
      ],
    },
    {
      title: "Resources & Tools",
      items: [
        "Access to the Private Client Wiki",
        "Progress tracking and accountability",
        "Educational resources and research summaries",
      ],
    },
  ];

  const whoIsFor = [
    "Structured guidance rather than generic advice",
    "Accountability and regular check-ins",
    "Educational context for their optimization decisions",
    "Someone to think alongside, not prescribe to them",
  ];

  return (
    <ProductPageTemplate
      productHandle="1-1-optimization-coaching"
      fallbackTitle="1:1 Optimization Coaching"
      fallbackPrice="$2,999"
      tagline="Personalized Optimization Support"
      description={description}
      whatsIncluded={whatsIncluded}
      whoIsFor={whoIsFor}
      whoIsForNote="This is not for those seeking quick fixes or medical treatment."
      faqs={coachingFaqs}
      disclosures={coachingDisclosures}
      ctaText="Enroll Now"
      trustBadges={[
        { icon: <Truck className="w-4 h-4" />, text: "Digital Delivery" },
        { icon: <RotateCcw className="w-4 h-4" />, text: "Satisfaction Focused" },
      ]}
    />
  );
};

export default ProductCoaching;
