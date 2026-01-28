import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, Loader2, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { useCartStore } from "@/stores/cartStore";
import { storefrontApiRequest, PRODUCT_BY_HANDLE_QUERY, ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";

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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-8 md:pt-16">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-24 pb-16 md:pb-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-foreground" />
                </div>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
                1:1 Optimization Coaching
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-6">
                Weekly Guidance for Your Optimization Journey
              </p>

              {/* Variant Selection */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {loading ? (
                  <div className="flex items-center gap-2 text-foreground/60">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Loading options...
                  </div>
                ) : variants.length > 0 ? (
                  variants.map((variant, index) => (
                    <button
                      key={variant.node.id}
                      onClick={() => setSelectedVariantIndex(index)}
                      className={`px-6 py-4 border rounded-lg text-left transition-all ${
                        selectedVariantIndex === index
                          ? "border-foreground bg-foreground/5"
                          : "border-border hover:border-foreground/30"
                      }`}
                    >
                      <span className="block text-lg font-medium">
                        {variant.node.title}
                      </span>
                      <span className="block text-foreground/70">
                        ${parseFloat(variant.node.price.amount).toLocaleString()}
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="px-6 py-4 border border-foreground bg-foreground/5 rounded-lg">
                      <span className="block text-lg font-medium">3 Months</span>
                      <span className="block text-foreground/70">$2,999</span>
                    </div>
                    <div className="px-6 py-4 border border-border rounded-lg">
                      <span className="block text-lg font-medium">6 Months</span>
                      <span className="block text-foreground/70">$5,499</span>
                    </div>
                  </div>
                )}
              </div>

              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 px-8"
                onClick={handleAddToCart}
                disabled={isLoading || loading || !product}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : null}
                Enroll Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Overview</h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                1:1 Optimization Coaching provides structured, personalized support for your health and performance journey. Through weekly video calls and ongoing async communication, you receive dedicated guidance tailored to your specific goals.
              </p>
              <p>
                This is not a quick-fix program. It's a commitment to understanding your body, building sustainable habits, and making informed decisions based on education and self-awareness.
              </p>
              <p className="text-sm text-foreground/60 italic">
                Coaching is educational and lifestyle-focused. It does not replace medical care or provide diagnosis, treatment, or prescriptions.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border bg-foreground/[0.02]">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">What's Included</h2>
            <ul className="space-y-4">
              {includedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Who This Is For</h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                This coaching program is designed for self-directed individuals who want:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-foreground">•</span>
                  <span>Structured guidance rather than generic advice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground">•</span>
                  <span>Accountability and regular check-ins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground">•</span>
                  <span>Educational context for their optimization decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground">•</span>
                  <span>Someone to think alongside, not prescribe to them</span>
                </li>
              </ul>
              <p className="text-sm text-foreground/60 italic">
                This is not for those seeking medical treatment, quick fixes, or guarantees. Individual participation and consistency determine outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border bg-foreground/[0.02]">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Pricing</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg bg-background">
                <h3 className="text-xl font-medium mb-2">3-Month Coaching</h3>
                <p className="text-3xl font-serif mb-4">$2,999</p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• 12 weekly 1:1 calls</li>
                  <li>• Continuous async support</li>
                  <li>• Full protocol access</li>
                </ul>
              </div>
              <div className="p-6 border border-foreground rounded-lg bg-foreground/5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-medium">6-Month Coaching</h3>
                  <span className="text-xs bg-foreground text-background px-2 py-0.5 rounded">Best Value</span>
                </div>
                <p className="text-3xl font-serif mb-4">$5,499</p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• 24 weekly 1:1 calls</li>
                  <li>• Continuous async support</li>
                  <li>• Full protocol access</li>
                  <li>• Save $499 vs. two 3-month</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-foreground/60">
              One-time payment. No subscriptions. No hidden fees.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Required Disclosures Section */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border bg-foreground/[0.02]">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              Required Disclosures
            </h2>
            <div className="space-y-6 text-sm text-foreground/70">
              <div>
                <h3 className="font-medium text-foreground mb-2">
                  Educational Disclaimer
                </h3>
                <p>
                  1:1 Optimization Coaching provides educational and lifestyle support only. It does not provide medical advice, diagnosis, or treatment. All guidance is informational and educational in nature.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">
                  No Medical Provider Relationship
                </h3>
                <p>
                  Participation in this coaching program does not create a doctor–patient, clinician–patient, or other healthcare provider relationship. You are responsible for consulting licensed healthcare professionals as appropriate.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">
                  No Guaranteed Outcomes
                </h3>
                <p>
                  Results vary based on individual participation, biology, and context. No specific outcomes are promised or guaranteed.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">
                  No Substances Sold
                </h3>
                <p>
                  We do not sell, prescribe, or provide peptides, supplements, or any other substances. Any educational discussion of compounds is for informational purposes only.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <div className="max-w-3xl text-center mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Ready to Begin?
            </h2>
            <p className="text-foreground/70 mb-8">
              Start your optimization journey with structured guidance and dedicated support.
            </p>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 px-8"
              onClick={handleAddToCart}
              disabled={isLoading || loading || !product}
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : null}
              Enroll Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductCoaching;
