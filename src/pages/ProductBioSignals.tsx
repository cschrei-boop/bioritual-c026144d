import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Loader2 } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useCartStore } from "@/stores/cartStore";
import { useEffect, useState } from "react";
import { storefrontApiRequest, PRODUCTS_QUERY, ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";
import bioSignalsHero from "@/assets/bio-signals-hero.jpg";

const ProductBioSignals = () => {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await storefrontApiRequest(PRODUCTS_QUERY, { 
          first: 10, 
          query: "title:Bio Signals" 
        });
        const products = data?.data?.products?.edges || [];
        const bioSignalsProduct = products.find((p: ShopifyProduct) => 
          p.node.title.includes("Bio Signals")
        );
        if (bioSignalsProduct) {
          setProduct(bioSignalsProduct);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, []);

  const handleAddToCart = async () => {
    if (!product) return;
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    });
    
    toast.success("Added to cart", {
      description: "Bio Signals protocol has been added to your cart."
    });
  };

  const faqs = [
    {
      question: "Is this a medical program?",
      answer: "No. This is an educational and lifestyle optimization protocol. It does not provide medical advice, diagnosis, or treatment."
    },
    {
      question: "Are peptides being sold on this site?",
      answer: "No. No individual compounds, substances, or peptides are sold, itemized, or priced on this site."
    },
    {
      question: 'What does "protocol materials" mean?',
      answer: "Protocol materials refer to non-itemized resources that may be included or coordinated as part of the overall educational and concierge experience. These materials are not available for individual purchase."
    },
    {
      question: "Do I need a prescription?",
      answer: "This protocol does not prescribe or dispense medication. Participants are responsible for consulting appropriate licensed professionals where applicable."
    },
    {
      question: "Is this suitable for everyone?",
      answer: "No. This protocol is not appropriate for individuals seeking medical treatment, diagnosis, or condition-specific care. Always consult a qualified healthcare professional before making changes related to health or wellness."
    },
    {
      question: "Are results guaranteed?",
      answer: "No. Outcomes vary based on individual biology, participation, consistency, and context. No specific results are promised or implied."
    },
    {
      question: "What happens after the 3 months?",
      answer: "The protocol concludes after three months. Continued use of learned frameworks and systems is optional and self-directed unless otherwise arranged."
    },
    {
      question: "Is this a subscription?",
      answer: "No. This is a one-time purchase for a defined 3-month protocol."
    }
  ];

  const whoIsFor = [
    "Structured support around weight management",
    "Clear systems instead of trial-and-error",
    "Accountability and progress tracking",
    "A feedback-driven, non-extreme approach",
    "Education alongside implementation"
  ];

  const protocolIncludes = [
    "Metabolic signaling awareness",
    "Habit and behavior alignment",
    "Nutrition timing frameworks",
    "Lifestyle and recovery integration",
    "Ongoing adjustment based on feedback"
  ];

  const wikiIncludes = [
    "Personalized protocol documentation",
    "Progress tracking over time",
    "Notes and adjustments",
    "Educational references relevant to the protocol"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src={bioSignalsHero} 
          alt="Bio Signals Protocol" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>
      
      <main className="px-6 md:px-12 lg:px-16 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          
          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              3-Month Optimization Protocol
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Bio Signals: Weight Loss + Metabolic Health
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              $699 · One-time purchase · 3-month duration
            </p>
            <Button 
              size="lg"
              onClick={handleAddToCart}
              disabled={loading || isLoading || !product}
              className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 py-6 text-sm tracking-widest uppercase"
            >
              {loading || isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Enroll Now"
              )}
            </Button>
          </motion.section>

          {/* Overview Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Overview</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                This protocol uses bio signals and behavioral frameworks to support metabolic alignment and sustainable weight management.
              </p>
              <p>
                Bio signals are inputs that guide biological processes through feedback, rather than forcing outcomes. This protocol combines education, structure, tracking, and guided implementation into a single, time-bound system.
              </p>
              <p className="font-medium text-foreground">
                You are enrolling in an educational and lifestyle optimization protocol — not purchasing medical treatment or individual products.
              </p>
            </div>
          </motion.section>

          {/* Who This Is For */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Who This Protocol Is For</h2>
            <p className="text-muted-foreground mb-6">
              This protocol is appropriate for individuals who want:
            </p>
            <ul className="space-y-3 mb-6">
              {whoIsFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground border-l-2 border-border pl-4">
              This protocol is not intended for diagnosis or treatment of any medical condition.
            </p>
          </motion.section>

          {/* What's Included */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-8">What's Included</h2>
            
            {/* The Bio Signals Protocol */}
            <div className="mb-10">
              <h3 className="font-serif text-xl mb-4">The Bio Signals Protocol (3 Months)</h3>
              <p className="text-muted-foreground mb-4">
                A guided protocol focused on:
              </p>
              <ul className="space-y-2 mb-4">
                {protocolIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">
                The protocol is iterative and adapts based on participation and response.
              </p>
            </div>

            {/* Private Client Wiki */}
            <div className="mb-10">
              <h3 className="font-serif text-xl mb-4">Private Client Wiki</h3>
              <p className="text-muted-foreground mb-4">
                Each participant receives a private digital workspace used to support the protocol. The wiki includes:
              </p>
              <ul className="space-y-2 mb-4">
                {wikiIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">
                The wiki functions as a central reference point throughout the protocol period.
              </p>
            </div>

            {/* Protocol Materials */}
            <div className="mb-10">
              <h3 className="font-serif text-xl mb-4">Protocol Materials</h3>
              <p className="text-muted-foreground mb-4">
                Certain non-itemized materials may be included or coordinated as part of the protocol to support participation.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                  Materials are not sold separately
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                  Materials are not assigned individual prices
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                  Materials are provided only within the context of the protocol
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Access to materials is contingent on active participation in the protocol.
              </p>
            </div>

            {/* Reminders & Accountability */}
            <div className="mb-10">
              <h3 className="font-serif text-xl mb-4">Reminders & Accountability</h3>
              <p className="text-muted-foreground mb-2">Participants may opt into:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                  SMS and/or email reminders
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                  Periodic check-ins
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                  Prompts for tracking and reflection
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                These tools are designed to support consistency and engagement.
              </p>
            </div>

            {/* Educational Context */}
            <div className="mb-10">
              <h3 className="font-serif text-xl mb-4">Educational Context</h3>
              <p className="text-muted-foreground mb-2">Educational content may include discussion of:</p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                  Metabolic signaling concepts
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                  Appetite regulation frameworks
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                  Lifestyle and recovery considerations
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                  Bio signals, including peptides, discussed in a high-level educational and informational capacity
                </li>
              </ul>
              <p className="text-sm text-muted-foreground font-medium">
                No medical claims are made, and no substances are sold individually.
              </p>
            </div>
          </motion.section>

          {/* Pricing Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-16 md:mb-24 text-center py-12 border-y border-border"
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Pricing</h2>
            <p className="text-4xl font-serif mb-4">$699</p>
            <p className="text-muted-foreground mb-2">One-Time Purchase</p>
            <p className="text-sm text-muted-foreground mb-8">
              Includes full access to the 3-month protocol, private client wiki, protocol materials, reminders, and educational support.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>No subscriptions.</span>
              <span>No recurring billing.</span>
              <span>No add-ons.</span>
            </div>
            <div className="mt-8">
              <Button 
                size="lg"
                onClick={handleAddToCart}
                disabled={loading || isLoading || !product}
                className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 py-6 text-sm tracking-widest uppercase"
              >
                {loading || isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Enroll Now"
                )}
              </Button>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>

          {/* Required Disclosures */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-16 md:mb-24 bg-secondary/50 p-8 rounded-sm"
          >
            <h2 className="font-serif text-xl mb-6">Required Disclosures</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-1">Educational Disclaimer</p>
                <p>This service provides education, coaching, and lifestyle optimization guidance only.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">No Medical Provider Relationship</p>
                <p>Participation does not create a doctor–patient relationship.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Materials Disclosure</p>
                <p>Any materials provided are included as part of a broader protocol experience and are not sold individually.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Individual Responsibility</p>
                <p>Participants are responsible for their own decisions and should consult licensed professionals as appropriate.</p>
              </div>
            </div>
          </motion.section>

          {/* Final Statement */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <p className="text-muted-foreground italic">
              This protocol is designed to support structure, feedback, and consistency — not to replace medical care or force outcomes.
            </p>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductBioSignals;
