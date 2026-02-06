import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

export interface ProductCarouselItem {
  id: string;
  title: string;
  subtitle?: string;
  handle: string;
  image: string | null;
}

interface ProductCarouselProps {
  /** Section heading */
  title: string;
  /** Optional subheading below title */
  subtitle?: string;
  /** Products to display */
  products: ProductCarouselItem[];
  /** Whether data is loading */
  isLoading?: boolean;
  /** Link to the full collection page */
  collectionHref?: string;
  /** Text for the collection link (defaults to "View All") */
  collectionLinkText?: string;
  /** Number of skeleton items to show while loading */
  skeletonCount?: number;
  /** Carousel item basis classes for responsive sizing */
  itemBasis?: string;
}

const ProductCarousel = ({
  title,
  subtitle,
  products,
  isLoading = false,
  collectionHref,
  collectionLinkText = "View All",
  skeletonCount = 5,
  itemBasis = "basis-1/2 md:basis-1/3 lg:basis-1/5",
}: ProductCarouselProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const renderSkeleton = () => (
    <div className="flex gap-4 overflow-hidden">
      {Array.from({ length: skeletonCount }).map((_, i) => (
        <div key={i} className={`${itemBasis} flex-shrink-0`}>
          <Skeleton className="aspect-[3/4] w-full" />
          <Skeleton className="h-5 w-3/4 mt-4" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </div>
      ))}
    </div>
  );

  return (
    <section
      ref={ref}
      className="py-10 px-6 md:px-[24px] md:py-[24px] rounded-3xl bg-primary-foreground"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="text-center flex-1">
            <h2 className="text-3xl md:text-4xl mb-2">{title}</h2>
            {subtitle && (
              <p className="text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {collectionHref && (
            <Link
              to={collectionHref}
              className="text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity whitespace-nowrap"
            >
              {collectionLinkText} →
            </Link>
          )}
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isLoading ? (
            renderSkeleton()
          ) : products.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No products found
            </p>
          ) : (
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {products.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className={`pl-4 ${itemBasis}`}
                  >
                    <Link
                      to={`/products/${product.handle}`}
                      className="group block"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden mb-4">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <span className="text-muted-foreground text-sm">
                              No image
                            </span>
                          </div>
                        )}
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                        {/* Text */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-background">
                          <h3 className="text-lg tracking-wide mb-1">
                            {product.title}
                          </h3>
                          {product.subtitle && (
                            <p className="text-xs opacity-80">
                              {product.subtitle}
                            </p>
                          )}
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

export default ProductCarousel;
