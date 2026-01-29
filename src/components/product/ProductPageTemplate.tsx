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
import { cn } from "@/lib/utils";
import type { FAQ, Disclosure, IncludedSection } from "@/data/product-content";

export interface ProductPageTemplateProps {
  // Shopify
  productHandle: string;
  
  // Display
  fallbackTitle: string;
  fallbackPrice?: string;
  tagline?: string;
  
  // Content
  description: React.ReactNode;
  whatsIncluded: IncludedSection[];
  whoIsFor: string[];
  whoIsForNote?: string;
  faqs: FAQ[];
  disclosures: Disclosure[];
  
  // CTA
  ctaText?: string;
  trustBadges?: { icon: React.ReactNode; text: string }[];
}

const ProductPageTemplate = ({
  productHandle,
  fallbackTitle,
  fallbackPrice = "$699",
  tagline,
  description,
  whatsIncluded,
  whoIsFor,
  whoIsForNote = "This is not for those seeking medical treatment, diagnosis, or condition-specific care.",
  faqs,
  disclosures,
  ctaText = "Enroll Now",
  trustBadges,
}: ProductPageTemplateProps) => {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const { addItem, isLoading } = useCartStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, {
          handle: productHandle,
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
  }, [productHandle]);

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

  const defaultTrustBadges = [
    { icon: <Truck className="w-4 h-4" />, text: "3-Month Duration" },
    { icon: <RotateCcw className="w-4 h-4" />, text: "One-Time Purchase" },
  ];

  const badges = trustBadges || defaultTrustBadges;

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
                {/* Tagline */}
                {tagline && (
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    {tagline}
                  </p>
                )}

                {/* Product Title */}
                <h1 className="font-serif text-3xl md:text-4xl mb-4">
                  {product?.node.title || fallbackTitle}
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
                    <p className="text-2xl font-medium">{fallbackPrice}</p>
                  )}
                </div>

                {/* Variant Selection (for products with multiple variants) */}
                {variants.length > 1 && (
                  <div className="mb-6">
                    <p className="text-sm font-medium mb-3">Select Option</p>
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
                  {ctaText}
                </Button>

                {/* Trust Badges */}
                <div className="flex items-center gap-6 pb-6 border-b border-border text-sm text-foreground/70">
                  {badges.map((badge, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {badge.icon}
                      <span>{badge.text}</span>
                    </div>
                  ))}
                </div>

                {/* Accordion Sections */}
                <Accordion type="single" collapsible className="w-full">
                  {/* Product Description */}
                  <AccordionItem value="description" className="border-b border-border">
                    <AccordionTrigger className="py-4 text-sm font-medium hover:no-underline">
                      Product Description
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-sm text-foreground/70 leading-relaxed">
                      {description}
                    </AccordionContent>
                  </AccordionItem>

                  {/* What's Included */}
                  <AccordionItem value="included" className="border-b border-border">
                    <AccordionTrigger className="py-4 text-sm font-medium hover:no-underline">
                      What's Included
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-sm text-foreground/70">
                      <div className="space-y-6">
                        {whatsIncluded.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <p className="font-medium text-foreground mb-2">{section.title}</p>
                            {section.description && (
                              <p className="mb-2">{section.description}</p>
                            )}
                            <ul className="space-y-1.5">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                            {section.note && (
                              <p className="text-xs text-foreground/50 mt-2 italic">{section.note}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Who This Is For */}
                  <AccordionItem value="who" className="border-b border-border">
                    <AccordionTrigger className="py-4 text-sm font-medium hover:no-underline">
                      Who This Is For
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-sm text-foreground/70">
                      <p className="mb-3">This is designed for individuals who want:</p>
                      <ul className="space-y-2">
                        {whoIsFor.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-foreground">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {whoIsForNote && (
                        <p className="mt-3 text-xs italic text-foreground/50">
                          {whoIsForNote}
                        </p>
                      )}
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

export default ProductPageTemplate;
