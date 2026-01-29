import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Truck, RotateCcw, Plus, Minus } from "lucide-react";
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
import { cn } from "@/lib/utils";

const ProductCoaching = () => {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const { addItem, isLoading } = useCartStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, {
          handle: "1-1-optimization-coaching",
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

  const variants = product?.node.variants.edges || [];
  const selectedVariant = variants[selectedVariantIndex]?.node;
  const images = product?.node.images.edges || [];

  const handleAddToCart = async () => {
    if (!product || !selectedVariant) return;

    await addItem({
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });

    toast.success("Added to cart", {
      description: `${product.node.title} - ${selectedVariant.title}`,
    });
  };

  const includedFeatures = [
    "Weekly 1:1 video calls with your dedicated coach",
    "Async support via private messaging",
    "Custom protocol design tailored to your goals",
    "Access to the Private Client Wiki",
    "Progress tracking and accountability",
    "Educational resources and research summaries",
  ];

  const whoThisIsFor = [
    "Structured guidance rather than generic advice",
    "Accountability and regular check-ins",
    "Educational context for their optimization decisions",
    "Someone to think alongside, not prescribe to them",
  ];

  const faqs = [
    {
      question: "Is this medical advice or treatment?",
      answer: "No. 1:1 Optimization Coaching provides educational guidance and lifestyle support. We do not diagnose, treat, or prescribe. You remain responsible for consulting licensed healthcare professionals.",
    },
    {
      question: "What happens during weekly calls?",
      answer: "Calls are focused on understanding your goals, reviewing progress, adjusting protocols, and providing educational context. The format is conversational and tailored to your needs.",
    },
    {
      question: "How does async support work?",
      answer: "You'll have access to private messaging for questions between calls. Responses are typically within 24–48 hours on business days.",
    },
    {
      question: "What's the difference between 3 and 6 months?",
      answer: "Both include the same level of support. The 6-month option provides extended time for deeper optimization and includes a meaningful savings compared to two 3-month enrollments.",
    },
    {
      question: "Can I cancel or get a refund?",
      answer: "Once onboarding begins, refunds are not available. Coaching is a time-bound commitment. Please review our Terms of Service before enrolling.",
    },
    {
      question: "Do you sell peptides or supplements?",
      answer: "No. We do not sell, prescribe, or provide any substances. Any discussion of compounds is educational only.",
    },
    {
      question: "Who is coaching right for?",
      answer: "Coaching is for self-directed individuals who want structured guidance, accountability, and educational support in their optimization journey. It's not for those seeking quick fixes or medical treatment.",
    },
    {
      question: "How do I get started?",
      answer: "After purchase, you'll receive onboarding instructions within 24–48 hours. Your first call will be scheduled based on mutual availability.",
    },
  ];

  const disclosures = [
    {
      title: "Educational Disclaimer",
      content: "1:1 Optimization Coaching provides educational and lifestyle support only. It does not provide medical advice, diagnosis, or treatment. All guidance is informational and educational in nature.",
    },
    {
      title: "No Medical Provider Relationship",
      content: "Participation in this coaching program does not create a doctor–patient, clinician–patient, or other healthcare provider relationship. You are responsible for consulting licensed healthcare professionals as appropriate.",
    },
    {
      title: "No Guaranteed Outcomes",
      content: "Results vary based on individual participation, biology, and context. No specific outcomes are promised or guaranteed.",
    },
    {
      title: "No Substances Sold",
      content: "We do not sell, prescribe, or provide peptides, supplements, or any other substances. Any educational discussion of compounds is for informational purposes only.",
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
                  {product?.node.title || "1:1 Optimization Coaching"}
                </h1>

                {/* Price */}
                <div className="mb-6">
                  {loading ? (
                    <div className="h-8 w-32 bg-muted animate-pulse rounded" />
                  ) : selectedVariant ? (
                    <p className="text-2xl font-medium">
                      ${parseFloat(selectedVariant.price.amount).toLocaleString()}
                    </p>
                  ) : (
                    <p className="text-2xl font-medium">$2,999</p>
                  )}
                </div>

                {/* Variant Selection */}
                {variants.length > 1 && (
                  <div className="mb-6">
                    <p className="text-sm font-medium mb-3">Select Duration</p>
                    <div className="flex flex-wrap gap-3">
                      {variants.map((variant, index) => (
                        <button
                          key={variant.node.id}
                          onClick={() => setSelectedVariantIndex(index)}
                          className={cn(
                            "px-4 py-2 border text-sm transition-all",
                            selectedVariantIndex === index
                              ? "border-foreground bg-foreground text-background"
                              : "border-border hover:border-foreground"
                          )}
                        >
                          {variant.node.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

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
                    <span>Digital Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-4 h-4" />
                    <span>Satisfaction Focused</span>
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
                        1:1 Optimization Coaching provides structured, personalized support for your health and performance journey. Through weekly video calls and ongoing async communication, you receive dedicated guidance tailored to your specific goals.
                      </p>
                      <p>
                        This is not a quick-fix program. It's a commitment to understanding your body, building sustainable habits, and making informed decisions based on education and self-awareness.
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
                      <p className="mb-3">This coaching program is designed for self-directed individuals who want:</p>
                      <ul className="space-y-2">
                        {whoThisIsFor.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-foreground">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-xs italic text-foreground/50">
                        This is not for those seeking medical treatment, quick fixes, or guarantees.
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

export default ProductCoaching;
