import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Truck, RotateCcw, ArrowLeft } from "lucide-react";
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
import { useShopifyProduct } from "@/hooks/useShopifyProduct";
import { toast } from "sonner";
import { ProductImageGallery } from "@/components/product/ProductImageGallery";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicProduct = () => {
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const { addItem, isLoading: cartLoading } = useCartStore();
  
  const { data: product, isLoading, error, isError } = useShopifyProduct(handle);

  // Redirect to collection if product not found after loading completes
  useEffect(() => {
    if (!isLoading && !product && !isError) {
      // Product not found
      console.warn(`Product not found: ${handle}`);
      navigate("/collection/protocols", { replace: true });
    }
  }, [isLoading, product, isError, handle, navigate]);

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

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-6 md:pt-12">
          <section className="px-4 md:px-8 lg:px-16 pb-12 md:pb-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-12">
                <Skeleton className="aspect-square w-full" />
                <div className="space-y-4">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-10 w-3/4" />
                  <Skeleton className="h-8 w-24" />
                  <Skeleton className="h-14 w-full" />
                  <Skeleton className="h-20 w-full" />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // Error or not found state
  if (isError || !product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-6 md:pt-12">
          <section className="px-4 md:px-8 lg:px-16 pb-12 md:pb-16">
            <div className="max-w-2xl mx-auto text-center py-16">
              <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
              <p className="text-muted-foreground mb-8">
                The product "{handle}" could not be found in our store.
              </p>
              <Button
                variant="outline"
                onClick={() => navigate("/collection/protocols")}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Browse All Products
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-6 md:pt-12">
        <section className="px-4 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-12">
              {/* Left Column - Image Gallery */}
              <div className="w-full">
                <ProductImageGallery 
                  images={images} 
                  productTitle={product.node.title} 
                />
              </div>

              {/* Right Column - Product Info */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                {/* Product Title */}
                <h1 className="font-serif text-3xl md:text-4xl mb-4">
                  {product.node.title}
                </h1>

                {/* Price */}
                <div className="mb-6">
                  {selectedVariant ? (
                    <p className="text-2xl font-medium">
                      ${parseFloat(selectedVariant.price.amount).toLocaleString()}
                    </p>
                  ) : (
                    <p className="text-2xl font-medium">
                      ${parseFloat(product.node.priceRange.minVariantPrice.amount).toLocaleString()}
                    </p>
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
                          disabled={!variant.node.availableForSale}
                          className={cn(
                            "px-4 py-2 border text-sm transition-all",
                            selectedVariantIndex === index
                              ? "border-foreground bg-foreground text-background"
                              : "border-border hover:border-foreground",
                            !variant.node.availableForSale && "opacity-50 cursor-not-allowed"
                          )}
                        >
                          {variant.node.title}
                          {!variant.node.availableForSale && " (Sold Out)"}
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
                  disabled={cartLoading || !selectedVariant?.availableForSale}
                >
                  {cartLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  ) : null}
                  {selectedVariant?.availableForSale ? "Add to Cart" : "Sold Out"}
                </Button>

                {/* Trust Badges */}
                <div className="flex items-center gap-6 pb-6 border-b border-border text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>Digital Delivery</span>
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
                      {product.node.description || "No description available."}
                    </AccordionContent>
                  </AccordionItem>

                  {/* Product Options */}
                  {product.node.options && product.node.options.length > 0 && 
                   product.node.options[0].name !== "Title" && (
                    <AccordionItem value="options" className="border-b border-border">
                      <AccordionTrigger className="py-4 text-sm font-medium hover:no-underline">
                        Available Options
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-sm text-foreground/70">
                        <div className="space-y-3">
                          {product.node.options.map((option, index) => (
                            <div key={index}>
                              <p className="font-medium text-foreground mb-1">{option.name}</p>
                              <p>{option.values.join(", ")}</p>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )}
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

export default DynamicProduct;
