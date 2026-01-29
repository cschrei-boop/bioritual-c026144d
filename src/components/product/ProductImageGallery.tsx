import { useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

interface ProductImage {
  node: {
    url: string;
    altText: string | null;
  };
}

interface ProductImageGalleryProps {
  images: ProductImage[];
  productTitle?: string;
}

export function ProductImageGallery({ images, productTitle = "Product" }: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const isMobile = useIsMobile();

  // Handle carousel slide change
  const onSelect = () => {
    if (!carouselApi) return;
    setSelectedIndex(carouselApi.selectedScrollSnap());
  };

  // Sync carousel with thumbnail click
  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
    carouselApi?.scrollTo(index);
  };

  if (images.length === 0) {
    return (
      <div className="aspect-square bg-muted flex items-center justify-center">
        <span className="text-muted-foreground">No images available</span>
      </div>
    );
  }

  // Mobile: Swipeable carousel with dots
  if (isMobile) {
    return (
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{ loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={image.node.url}
                    alt={image.node.altText || `${productTitle} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                    onLoad={() => carouselApi?.reInit()}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  selectedIndex === index
                    ? "bg-foreground w-4"
                    : "bg-foreground/30"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop: Thumbnails on left, main image on right
  return (
    <div className="flex gap-4">
      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex flex-col gap-2 w-20 flex-shrink-0">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "aspect-square w-full overflow-hidden border-2 transition-all",
                selectedIndex === index
                  ? "border-foreground"
                  : "border-transparent hover:border-foreground/30"
              )}
            >
              <img
                src={image.node.url}
                alt={image.node.altText || `${productTitle} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main image */}
      <div className="flex-1 aspect-square overflow-hidden">
        <img
          src={images[selectedIndex]?.node.url}
          alt={images[selectedIndex]?.node.altText || productTitle}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
