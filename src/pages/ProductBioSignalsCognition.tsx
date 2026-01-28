import { useState, useEffect } from "react";
import { ArrowLeft, Check, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { NotSureBlock } from "@/components/sections/NotSureBlock";
import { useCartStore } from "@/stores/cartStore";
import { storefrontApiRequest, PRODUCTS_QUERY, ShopifyProduct } from "@/lib/shopify";
import heroImage from "@/assets/bio-signals-cognition-hero.jpg";

const ProductBioSignalsCognition = () => {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  const { addItem, isLoading: isCartLoading } = useCartStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await storefrontApiRequest(PRODUCTS_QUERY, { 
          first: 10,
          query: "title:Bio Signals Cognition"
        });
        const products = data?.data?.products?.edges || [];
        const cognitionProduct = products.find((p: ShopifyProduct) => 
          p.node.title.toLowerCase().includes('cognition')
        );
        if (cognitionProduct) {
          setProduct(cognitionProduct);
        }
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setIsLoadingProduct(false);
      }
    };
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
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const whoIsForItems = [
    "Want to support focus, clarity, and mental stamina",
    "Experience brain fog or cognitive inconsistency",
    "Work in cognitively demanding environments",
    "Want to protect long-term brain health",
    "Prefer systems and structure over short-term stimulants"
  ];

  const protocolFocusItems = [
    "Cognitive signaling awareness",
    "Sleep and recovery alignment",
    "Stress-load and attention management",
    "Habit and environment design",
    "Ongoing adjustment based on feedback"
  ];

  const wikiItems = [
    "Personalized protocol documentation",
    "Cognitive patterns and routine tracking",
    "Notes and adjustments",
    "Educational references relevant to the protocol"
  ];

  const materialsItems = [
    "Materials are not sold separately",
    "Materials are not assigned individual prices",
    "Materials are provided only within the context of the protocol"
  ];

  const remindersItems = [
    "SMS and/or email reminders",
    "Periodic check-ins",
    "Prompts for focus, clarity, and routine consistency"
  ];

  const educationalItems = [
    "Cognitive performance frameworks",
    "Sleep, stress, and attention regulation",
    "Lifestyle inputs that influence brain health",
    "Bio signals, including peptides, discussed in a high-level educational and informational capacity"
  ];

  const progressItems = [
    "Mental clarity and consistency",
    "Cognitive stamina throughout the day",
    "Focus stability",
    "Sustainability of routines"
  ];

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
      question: "What does \"protocol materials\" mean?",
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

  const disclosures = [
    { title: "Educational Disclaimer", content: "This service provides education, coaching, and lifestyle optimization guidance only." },
    { title: "No Medical Provider Relationship", content: "Participation does not create a doctor–patient relationship." },
    { title: "Materials Disclosure", content: "Any materials provided are included as part of a broader protocol experience and are not sold individually." },
    { title: "Individual Responsibility", content: "Participants are responsible for their own decisions and should consult licensed professionals as appropriate." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Bio Signals Cognition + Brain Health Protocol" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <motion.h1 
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
              {...fadeIn}
            >
              Bio Signals: Cognition + Brain Health
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 mb-2"
              {...fadeIn}
              transition={{ delay: 0.1 }}
            >
              A 3-Month Optimization Protocol
            </motion.p>
            <motion.p 
              className="text-base text-foreground/60"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              $699 · One-time purchase · 3-month duration
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        {/* Overview Section */}
        <motion.section className="mb-12 md:mb-16" {...fadeIn}>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6">Overview</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              This protocol uses bio signals and behavioral frameworks to support cognitive function, mental clarity, and long-term brain health.
            </p>
            <p>
              Cognition is influenced by sleep, recovery, stress load, nutrition, and signaling balance. Rather than forcing focus or overstimulation, this protocol emphasizes clarity, stability, and cognitive resilience through structured inputs and feedback.
            </p>
            <p className="text-sm text-foreground/60 italic border-l-2 border-border pl-4">
              You are enrolling in an educational and lifestyle optimization protocol — not purchasing medical treatment or individual products.
            </p>
          </div>
        </motion.section>

        {/* Who This Is For */}
        <motion.section className="mb-12 md:mb-16" {...fadeIn}>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6">Who This Protocol Is For</h2>
          <p className="text-foreground/80 mb-4">This protocol is appropriate for individuals who:</p>
          <ul className="space-y-3">
            {whoIsForItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-foreground/60 italic mt-6">
            This protocol is not intended for diagnosis or treatment of any medical condition.
          </p>
        </motion.section>

        {/* What's Included */}
        <motion.section className="mb-12 md:mb-16" {...fadeIn}>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-8">What's Included</h2>
          
          {/* The Bio Signals Protocol */}
          <div className="mb-10">
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">The Bio Signals Protocol (3 Months)</h3>
            <p className="text-foreground/80 mb-4">A guided protocol focused on:</p>
            <ul className="space-y-2">
              {protocolFocusItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-foreground/60 italic mt-4">
              The protocol is iterative and adapts based on participation and response.
            </p>
          </div>

          {/* Private Client Wiki */}
          <div className="mb-10">
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">Private Client Wiki</h3>
            <p className="text-foreground/80 mb-4">Each participant receives a private digital workspace used to support the protocol. The wiki includes:</p>
            <ul className="space-y-2">
              {wikiItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-foreground/60 italic mt-4">
              The wiki functions as a central reference point throughout the protocol period.
            </p>
          </div>

          {/* Protocol Materials */}
          <div className="mb-10">
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">Protocol Materials</h3>
            <p className="text-foreground/80 mb-4">
              Certain non-itemized materials may be included or coordinated as part of the protocol to support participation.
            </p>
            <ul className="space-y-2">
              {materialsItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-foreground/60 italic mt-4">
              Access to materials is contingent on active participation in the protocol.
            </p>
          </div>

          {/* Reminders & Accountability */}
          <div className="mb-10">
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">Reminders & Accountability</h3>
            <p className="text-foreground/80 mb-4">Participants may opt into:</p>
            <ul className="space-y-2">
              {remindersItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-foreground/60 italic mt-4">
              These tools are designed to support awareness and sustainability.
            </p>
          </div>

          {/* Educational Context */}
          <div className="mb-10">
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">Educational Context</h3>
            <p className="text-foreground/80 mb-4">Educational content may include discussion of:</p>
            <ul className="space-y-2">
              {educationalItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-foreground/60 italic mt-4">
              No medical claims are made, and no substances are sold individually.
            </p>
          </div>
        </motion.section>

        {/* How Progress Is Evaluated */}
        <motion.section className="mb-12 md:mb-16" {...fadeIn}>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6">How Progress Is Evaluated</h2>
          <p className="text-foreground/80 mb-4">Progress is evaluated using patterns and continuity, including:</p>
          <ul className="space-y-2">
            {progressItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-foreground/60 italic mt-4">
            The objective is clarity and resilience, not forced focus.
          </p>
        </motion.section>

        {/* Pricing Section */}
        <motion.section className="mb-12 md:mb-16 bg-muted/30 rounded-lg p-8" {...fadeIn}>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-4">Pricing</h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-4">$699 <span className="text-lg font-normal text-foreground/60">— One-Time Purchase</span></p>
          <p className="text-foreground/80 mb-6">
            Includes full access to the 3-month protocol, private client wiki, protocol materials, reminders, and educational support.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-foreground/60 mb-8">
            <span>No subscriptions.</span>
            <span>No recurring billing.</span>
            <span>No add-ons.</span>
          </div>
          <Button 
            size="lg" 
            className="w-full md:w-auto px-12"
            onClick={handleAddToCart}
            disabled={isLoadingProduct || isCartLoading || !product}
          >
            {isLoadingProduct ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : isCartLoading ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : null}
            {isLoadingProduct ? "Loading..." : "Enroll Now — $699"}
          </Button>
        </motion.section>

        {/* FAQ Section */}
        <motion.section className="mb-12 md:mb-16" {...fadeIn}>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* Required Disclosures */}
        <motion.section className="mb-12 md:mb-16 border border-border rounded-lg p-6 md:p-8" {...fadeIn}>
          <h2 className="font-playfair text-xl md:text-2xl font-bold text-foreground mb-6">Required Disclosures</h2>
          <div className="space-y-4">
            {disclosures.map((disclosure, index) => (
              <div key={index}>
                <h3 className="font-semibold text-foreground mb-1">{disclosure.title}</h3>
                <p className="text-sm text-foreground/70">{disclosure.content}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Final Statement */}
        <motion.section className="text-center py-8 border-t border-border" {...fadeIn}>
          <p className="text-foreground/80 italic max-w-2xl mx-auto">
            This protocol is designed to support clarity, cognitive resilience, and long-term brain health — emphasizing sustainability over stimulation and structure over force.
          </p>
        </motion.section>

      </main>

      <NotSureBlock />
      <Footer />
    </div>
  );
};

export default ProductBioSignalsCognition;
