import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useProtocolProducts } from "@/hooks/useShopifyCollection";
import { Skeleton } from "@/components/ui/skeleton";

// Subtitle mapping based on handle (for UI enhancement)
const handleToSubtitle: Record<string, string> = {
  "bio-signals-weight-loss-metabolic-health": "Metabolic Health",
  "bio-signals-energy": "Vitality & Focus",
  "bio-signals-cognition-brain-health": "Brain Health",
  "bio-signals-longevity": "Aging Well",
  "bio-signals-performance-recovery": "Strength & Recovery",
  "bio-signals-hair-skin": "Appearance & Vitality"
};

const ShopByGoal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  
  const { data: products = [], isLoading } = useProtocolProducts();

  // Transform products for display
  const displayProducts = products.map(product => ({
    ...product,
    subtitle: handleToSubtitle[product.handle] || "",
    displayTitle: product.title.replace("Bio Signals: ", "").replace(" + ", " + "),
  }));

  // Loading skeleton
  const renderSkeleton = () => (
    <div className="flex gap-4 overflow-hidden">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0">
          <Skeleton className="aspect-[3/4] w-full" />
          <Skeleton className="h-5 w-3/4 mt-4" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </div>
      ))}
    </div>
  );

  return (
    <section ref={ref} className="py-10 px-6 md:px-[24px] md:py-[24px] rounded-3xl bg-primary-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-3">
            Tailored Solutions for Different Goals
          </h2>
          <p className="text-muted-foreground">
            Find the right protocol for your specific needs
          </p>
        </motion.div>

        {/* Goals Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isLoading ? (
            renderSkeleton()
          ) : displayProducts.length === 0 ? (
            <p className="text-center text-muted-foreground">No protocols found</p>
          ) : (
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {displayProducts.map(product => (
                  <CarouselItem key={product.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <Link to={`/products/${product.handle}`} className="group block">
                      <div className="relative aspect-[3/4] overflow-hidden mb-4">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.displayTitle}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <span className="text-muted-foreground text-sm">No image</span>
                          </div>
                        )}
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                        {/* Text */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-background">
                          <h3 className="text-lg tracking-wide mb-1">{product.displayTitle}</h3>
                          <p className="text-xs opacity-80">{product.subtitle}</p>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="left-0 -translate-x-1/2" />
                <CarouselNext className="right-0 translate-x-1/2" />
              </div>
            </Carousel>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ShopByGoal;