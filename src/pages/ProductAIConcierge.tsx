import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, Bot, BookOpen, Brain, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCartStore } from "@/stores/cartStore";
import { storefrontApiRequest, PRODUCT_BY_HANDLE_QUERY, ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";

const ProductAIConcierge = () => {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  const { addItem, isLoading: isCartLoading } = useCartStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, {
          handle: "bio-signals-ai-concierge",
        });
        if (data?.data?.productByHandle) {
          setProduct({ node: data.data.productByHandle });
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setIsLoadingProduct(false);
      }
    };
    fetchProduct();
  }, []);

  const handleAddToCart = async () => {
    if (!product) return;
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) {
      toast.error("Product variant not available");
      return;
    }
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to cart", { description: "AI Concierge access added to your cart" });
  };

  const price = product?.node.priceRange.minVariantPrice.amount
    ? `$${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}`
    : "$9.99";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link
            to="/protocols"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Protocols
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Product Image/Icon */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-square bg-gradient-to-br from-secondary/50 to-secondary rounded-sm flex items-center justify-center"
          >
            <Bot className="w-32 h-32 text-foreground/20" />
          </motion.div>

          {/* Right: Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Digital Service
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Bio Signals: AI Concierge
              </h1>
              <p className="text-lg text-muted-foreground">
                Research-Guided Support for Optimization & Longevity
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-serif text-3xl font-bold">{price}</span>
              <span className="text-muted-foreground">· Ongoing access · Digital service</span>
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={isCartLoading || isLoadingProduct}
              className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 text-base"
            >
              {isCartLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Get Access"
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Digital access only · No physical products · No substances sold
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Overview</h2>
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p>
                The Bio Signals AI Concierge is an educational support system trained on current research across:
              </p>
              <ul className="mt-4 space-y-2">
                <li>Peptides</li>
                <li>Supplements</li>
                <li>Longevity science</li>
                <li>Metabolic and recovery frameworks</li>
              </ul>
              <p className="mt-6">
                Its purpose is to help you understand complex information, navigate options, and think more clearly about optimization — without hype, shortcuts, or medical claims.
              </p>
              <p className="mt-4 font-medium">
                This is not a medical tool.<br />
                It is an intelligent educational companion, designed to translate science into usable understanding.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What It Does Section */}
      <section className="border-t border-border bg-secondary/20">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
              What the AI Concierge Does
            </h2>
            <p className="text-lg text-foreground/80 mb-6">
              The AI Concierge helps you:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: BookOpen, text: "Understand current research and emerging concepts" },
                { icon: MessageSquare, text: "Ask better questions about protocols and tradeoffs" },
                { icon: Brain, text: "Compare approaches within a scientific context" },
                { icon: Sparkles, text: "Clarify terminology and mechanisms in plain language" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-sm border border-border">
                  <item.icon className="w-5 h-5 text-foreground/60 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-foreground/80">
              Think systemically rather than chasing trends. It is designed to support learning and decision-making, not to prescribe or direct medical action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What It's Trained On */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
              What It's Trained On
            </h2>
            <p className="text-lg text-foreground/80 mb-6">
              The AI Concierge is informed by:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2.5 flex-shrink-0" />
                Peer-reviewed research
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2.5 flex-shrink-0" />
                Educational literature on peptides and longevity science
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2.5 flex-shrink-0" />
                Metabolic, recovery, and signaling frameworks
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2.5 flex-shrink-0" />
                The Bio Signals protocol philosophy
              </li>
            </ul>
            <p className="mt-6 text-foreground/80">
              It is updated to reflect current scientific discourse, while remaining grounded in education and context.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What It Is Not */}
      <section className="border-t border-border bg-secondary/20">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
              What It Is Not
            </h2>
            <p className="text-lg text-foreground/80 mb-6">
              The AI Concierge does not:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                Provide medical advice
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                Diagnose or treat conditions
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                Prescribe medications or substances
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                Replace licensed healthcare professionals
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                Guarantee outcomes
              </li>
            </ul>
            <p className="mt-8 text-lg font-medium text-foreground">
              It is not a shortcut.<br />
              It is a clarity tool.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How People Use It */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
              How People Use It
            </h2>
            <p className="text-lg text-foreground/80 mb-6">Common use cases include:</p>
            <div className="space-y-4">
              {[
                "What does this peptide or compound actually do, conceptually?",
                "How do people think about this within longevity frameworks?",
                "What are the tradeoffs people discuss in research?",
                "How does this fit into a signaling vs forcing model?",
              ].map((question, index) => (
                <div
                  key={index}
                  className="p-4 bg-secondary/30 rounded-sm border-l-2 border-foreground/20"
                >
                  <p className="text-foreground/80 italic">"{question}"</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-foreground/80 font-medium">
              The focus is always on understanding, not instruction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Relationship to Protocols */}
      <section className="border-t border-border bg-secondary/20">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
              Relationship to Bio Signals Protocols
            </h2>
            <p className="text-lg text-foreground/80 mb-6">
              The AI Concierge can be used:
            </p>
            <ul className="space-y-3 text-foreground/80 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2.5 flex-shrink-0" />
                As a standalone educational tool, or
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2.5 flex-shrink-0" />
                Alongside a Bio Signals protocol for additional clarity and learning
              </li>
            </ul>
            <p className="text-foreground/80">
              It does not replace human guidance or structured protocols, but complements them by helping you make sense of information between sessions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Access & Delivery + Pricing */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl font-bold mb-6">Access & Delivery</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2.5 flex-shrink-0" />
                  Digital access only
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2.5 flex-shrink-0" />
                  Available on-demand
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2.5 flex-shrink-0" />
                  No physical products
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2.5 flex-shrink-0" />
                  No substances sold
                </li>
              </ul>
              <p className="mt-4 text-foreground/80">Access begins after purchase.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-serif text-2xl font-bold mb-6">Pricing</h2>
              <p className="text-3xl font-serif font-bold mb-4">{price}</p>
              <p className="text-sm text-muted-foreground mb-4">Digital Access</p>
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li>✓ Ongoing access to the Bio Signals AI Concierge</li>
                <li>✓ Research-informed educational support</li>
                <li>✓ Plain-language explanations of complex topics</li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                No medical services. No physical shipments. No guarantees.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border bg-secondary/20">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                {
                  q: "Is this medical advice?",
                  a: "No. The AI Concierge provides educational and informational support only.",
                },
                {
                  q: "Can it tell me what to take or how much?",
                  a: "No. It does not provide prescriptions, dosages, or instructions.",
                },
                {
                  q: "Is it trained on real research?",
                  a: "It is informed by current scientific literature and educational sources, but all information is provided at a conceptual and educational level.",
                },
                {
                  q: "Does this replace working with a doctor or clinician?",
                  a: "No. It is not a substitute for licensed healthcare professionals.",
                },
                {
                  q: "Are peptides or supplements sold through this service?",
                  a: "No. No substances are sold, prescribed, or itemized.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-border bg-background px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Required Disclosures */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
              Required Disclosures
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-secondary/30 rounded-sm border border-border">
                <h3 className="font-semibold mb-2">Educational Disclaimer</h3>
                <p className="text-sm text-foreground/70">
                  The AI Concierge provides educational and informational content only. It does not provide medical advice, diagnosis, or treatment.
                </p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-sm border border-border">
                <h3 className="font-semibold mb-2">No Medical Provider Relationship</h3>
                <p className="text-sm text-foreground/70">
                  Use of this service does not create a doctor–patient or clinician–patient relationship.
                </p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-sm border border-border">
                <h3 className="font-semibold mb-2">No Guaranteed Outcomes</h3>
                <p className="text-sm text-foreground/70">
                  Information provided is for understanding and learning purposes only. Outcomes vary and are not guaranteed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="border-t border-border bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl font-serif leading-relaxed max-w-2xl mx-auto">
              The Bio Signals AI Concierge exists to do one thing well:
            </p>
            <p className="text-xl md:text-2xl font-serif leading-relaxed max-w-2xl mx-auto mt-4 font-medium">
              Turn complex science into clear understanding — so you can think better, not blindly follow trends.
            </p>
            <Button
              onClick={handleAddToCart}
              disabled={isCartLoading || isLoadingProduct}
              className="mt-10 bg-background text-foreground hover:bg-background/90 rounded-none h-14 px-12 text-base"
            >
              {isCartLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                `Get Access · ${price}`
              )}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductAIConcierge;
