import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { storefrontApiRequest, COLLECTION_BY_HANDLE_QUERY, ShopifyProduct } from "@/lib/shopify";
import { Skeleton } from "@/components/ui/skeleton";

// Mapping from Shopify handle to local route
const handleToRoute: Record<string, string> = {
  "bio-signals-weight-loss-metabolic-health": "/protocol/bio-signals-weight-loss",
  "bio-signals-energy": "/protocol/bio-signals-energy",
  "bio-signals-cognition-brain-health": "/protocol/bio-signals-cognition",
  "bio-signals-longevity": "/protocol/bio-signals-longevity",
  "bio-signals-performance-recovery": "/protocol/bio-signals-performance-recovery",
  "bio-signals-hair-skin": "/protocol/bio-signals-hair-skin",
};

// Subtitle mapping based on handle
const handleToSubtitle: Record<string, string> = {
  "bio-signals-weight-loss-metabolic-health": "Metabolic Health",
  "bio-signals-energy": "Vitality & Focus",
  "bio-signals-cognition-brain-health": "Brain Health",
  "bio-signals-longevity": "Aging Well",
  "bio-signals-performance-recovery": "Strength & Recovery",
  "bio-signals-hair-skin": "Appearance & Vitality",
};

interface CollectionProduct {
  id: string;
  title: string;
  handle: string;
  image: string | null;
  subtitle: string;
  href: string;
}

const ShopByGoal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [products, setProducts] = useState<CollectionProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProtocols() {
      try {
        const data = await storefrontApiRequest(COLLECTION_BY_HANDLE_QUERY, {
          handle: "protocols",
          first: 20,
        });

        const collectionProducts = data?.data?.collectionByHandle?.products?.edges || [];
        
        const formattedProducts: CollectionProduct[] = collectionProducts
          .map((edge: { node: ShopifyProduct["node"] }) => {
            const product = edge.node;
            const route = handleToRoute[product.handle];
            
            // Only include products that have a mapped route
            if (!route) return null;

            return {
              id: product.id,
              title: product.title.replace("Bio Signals: ", "").replace(" + ", " + "),
              handle: product.handle,
              image: product.images?.edges?.[0]?.node?.url || null,
              subtitle: handleToSubtitle[product.handle] || "",
              href: route,
            };
          })
          .filter(Boolean) as CollectionProduct[];

        setProducts(formattedProducts);
      } catch (error) {
        console.error("Failed to fetch protocols collection:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProtocols();
  }, []);

  // Loading skeleton
  const renderSkeleton = () => (
    <div className="flex gap-4 overflow-hidden">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0">
          <Skeleton className="aspect-[3/4] w-full" />
          <Skeleton className="h-5 w-3/4 mt-4" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </div>
      ))}
    </div>
  );

  return (
    <section ref={ref} className="py-10 md:py-16 px-6 md:px-12">
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
          ) : products.length === 0 ? (
            <p className="text-center text-muted-foreground">No protocols found</p>
          ) : (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {products.map((product) => (
                  <CarouselItem key={product.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <Link to={product.href} className="group block">
                      <div className="relative aspect-[3/4] overflow-hidden mb-4">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.title}
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
                          <h3 className="text-lg tracking-wide mb-1">{product.title}</h3>
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
