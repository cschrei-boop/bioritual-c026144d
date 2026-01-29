import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Truck, RotateCcw } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { NotSureBlock } from "@/components/sections/NotSureBlock";
import { useCartStore } from "@/stores/cartStore";
import { storefrontApiRequest, PRODUCT_BY_HANDLE_QUERY, ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";
import { ProductImageGallery } from "@/components/product/ProductImageGallery";

const ProductBioSignals = () => {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const { addItem, isLoading } = useCartStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, {
          handle: "bio-signals-weight-loss-metabolic-health",
        });
        if (data?.data?.productByHandle) {
          setProduct({ node: data.data.productByHandle });
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  const variant = product?.node.variants.edges[0]?.node;
  const images = product?.node.images.edges || [];

  const handleAddToCart = async () => {
    if (!product || !variant) return;

    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });

    toast.success("Added to cart", {
      description: `${product.node.title} has been added to your cart.`,
    });
  };

  const includedFeatures = [
    "The Bio Signals Protocol (3 months)",
    "Private Client Wiki with progress tracking",
    "Protocol materials (non-itemized)",
    "SMS/Email reminders and check-ins",
    "Educational resources and references",
    "Feedback-driven adjustments throughout",
  ];

  const whoThisIsFor = [
    "Structured support around weight management",
    "Clear systems instead of trial-and-error",
    "Accountability and progress tracking",
    "A feedback-driven, non-extreme approach",
    "Education alongside implementation",
  ];

  const faqs = [
    {
      question: "Is this a medical program?",
      answer: "No. This is an educational and lifestyle optimization protocol. It does not provide medical advice, diagnosis, or treatment.",
    },
    {
      question: "Are peptides being sold on this site?",
      answer: "No. No individual compounds, substances, or peptides are sold, itemized, or priced on this site.",
    },
    {
      question: 'What does "protocol materials" mean?',
      answer: "Protocol materials refer to non-itemized resources that may be included or coordinated as part of the overall educational and concierge experience. These materials are not available for individual purchase.",
    },
    {
      question: "Do I need a prescription?",
      answer: "This protocol does not prescribe or dispense medication. Participants are responsible for consulting appropriate licensed professionals where applicable.",
    },
    {
      question: "Is this suitable for everyone?",
      answer: "No. This protocol is not appropriate for individuals seeking medical treatment, diagnosis, or condition-specific care. Always consult a qualified healthcare professional before making changes related to health or wellness.",
    },
    {
      question: "Are results guaranteed?",
      answer: "No. Outcomes vary based on individual biology, participation, consistency, and context. No specific results are promised or implied.",
    },
    {
      question: "What happens after the 3 months?",
      answer: "The protocol concludes after three months. Continued use of learned frameworks and systems is optional and self-directed unless otherwise arranged.",
    },
    {
      question: "Is this a subscription?",
      answer: "No. This is a one-time purchase for a defined 3-month protocol.",
    },
  ];

  const disclosures = [
    {
      title: "Educational Disclaimer",
      content: "This service provides education, coaching, and lifestyle optimization guidance only. It does not provide medical advice, diagnosis, or treatment.",
    },
    {
      title: "No Medical Provider Relationship",
      content: "Participation does not create a doctor–patient, clinician–patient, or other healthcare provider relationship. You are responsible for consulting licensed healthcare professionals as appropriate.",
    },
    {
      title: "Materials Disclosure",
      content: "Any materials provided are included as part of a broader protocol experience and are not sold individually. No substances are itemized or priced.",
    },
    {
      title: "No Guaranteed Outcomes",
      content: "Results vary based on individual participation, biology, and context. No specific outcomes are promised or guaranteed.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-6 md:pt-12">
        {/* Main Product Section - Two Column Layout */}
        <section className="px-4 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-12">
              {/* Left Column - Image Gallery */}
              <div className="w-full">
                {loading ? (
                  <div className="aspect-square bg-muted animate-pulse flex items-center justify-center">
                    <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
                  </div>
                ) : (
                  <ProductImageGallery 
                    images={images} 
                    productTitle={product?.node.title} 
                  />
                )}
              </div>

              {/* Right Column - Product Info */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                {/* Product Title */}
                <h1 className="font-serif text-3xl md:text-4xl mb-4">
                  {product?.node.title || "Bio Signals: Weight Loss + Metabolic Health"}
                </h1>

                {/* Price */}
                <div className="mb-6">
                  {loading ? (
                    <div className="h-8 w-32 bg-muted animate-pulse rounded" />
                  ) : variant ? (
                    <p className="text-2xl font-medium">
                      ${parseFloat(variant.price.amount).toLocaleString()}
                    </p>
                  ) : (
                    <p className="text-2xl font-medium">$699</p>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button
                  size="lg"
                  className="w-full bg-foreground text-background hover:bg-foreground/90 h-14 text-base mb-6"
                  onClick={handleAddToCart}
                  disabled={isLoading || loading || !product}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  ) : null}
                  Enroll Now
                </Button>

                {/* Trust Badges */}
                <div className="flex items-center gap-6 pb-6 border-b border-border text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>3-Month Duration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-4 h-4" />
                    <span>One-Time Purchase</span>
                  </div>
                </div>

                {/* Accordion Sections */}
                <Accordion type="single" collapsible className="w-full">
                  {/* Product Description */}
                  <AccordionItem value="description" className="border-b border-border">
                    <AccordionTrigger className="py-4 text-sm font-medium hover:no-underline">
                      Product Description
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-sm text-foreground/70 leading-relaxed">
                      <p className="mb-3">
                        This protocol uses bio signals and behavioral frameworks to support metabolic alignment and sustainable weight management.
                      </p>
                      <p className="mb-3">
                        Bio signals are inputs that guide biological processes through feedback, rather than forcing outcomes. This protocol combines education, structure, tracking, and guided implementation into a single, time-bound system.
                      </p>
                      <p className="font-medium text-foreground">
                        You are enrolling in an educational and lifestyle optimization protocol — not purchasing medical treatment or individual products.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* What's Included */}
                  <AccordionItem value="included" className="border-b border-border">
                    <AccordionTrigger className="py-4 text-sm font-medium hover:no-underline">
                      What's Included
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-sm text-foreground/70">
                      <ul className="space-y-2">
                        {includedFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Who This Is For */}
                  <AccordionItem value="who" className="border-b border-border">
                    <AccordionTrigger className="py-4 text-sm font-medium hover:no-underline">
                      Who This Is For
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-sm text-foreground/70">
                      <p className="mb-3">This protocol is designed for individuals who want:</p>
                      <ul className="space-y-2">
                        {whoThisIsFor.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-foreground">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-xs italic text-foreground/50">
                        This is not for those seeking medical treatment, diagnosis, or condition-specific care.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ */}
                  <AccordionItem value="faq" className="border-b border-border">
                    <AccordionTrigger className="py-4 text-sm font-medium hover:no-underline">
                      FAQ
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-sm text-foreground/70">
                      <div className="space-y-4">
                        {faqs.map((faq, index) => (
                          <div key={index}>
                            <p className="font-medium text-foreground mb-1">{faq.question}</p>
                            <p>{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Required Disclosures */}
                  <AccordionItem value="disclosures" className="border-b border-border">
                    <AccordionTrigger className="py-4 text-sm font-medium hover:no-underline">
                      Required Disclosures
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-sm text-foreground/70">
                      <div className="space-y-4">
                        {disclosures.map((disclosure, index) => (
                          <div key={index}>
                            <p className="font-medium text-foreground mb-1">{disclosure.title}</p>
                            <p>{disclosure.content}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>

      <NotSureBlock />
      <Footer />
    </div>
  );
};

export default ProductBioSignals;
