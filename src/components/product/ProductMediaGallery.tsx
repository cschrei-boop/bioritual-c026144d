import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import type { ProductMedia } from "@/lib/shopify";

interface ProductMediaGalleryProps {
  media: ProductMedia[];
  productTitle?: string;
}

// Helper to get thumbnail URL for any media type
function getThumbnailUrl(item: ProductMedia): string | null {
  const { node } = item;
  if (node.mediaContentType === 'IMAGE' && node.image?.url) {
    return node.image.url;
  }
  if ((node.mediaContentType === 'VIDEO' || node.mediaContentType === 'EXTERNAL_VIDEO') && node.previewImage?.url) {
    return node.previewImage.url;
  }
  return null;
}

// Helper to check if media is a video type
function isVideoType(item: ProductMedia): boolean {
  return item.node.mediaContentType === 'VIDEO' || item.node.mediaContentType === 'EXTERNAL_VIDEO';
}

// Video player component for Shopify-hosted videos
function VideoPlayer({ sources, poster, alt }: { 
  sources: Array<{ url: string; mimeType: string }>; 
  poster?: string;
  alt: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      controls
      loop
      muted
      autoPlay
      playsInline
      poster={poster}
      aria-label={alt}
    >
      {sources.map((source, index) => (
        <source key={index} src={source.url} type={source.mimeType} />
      ))}
      Your browser does not support the video tag.
    </video>
  );
}

// External video embed (YouTube/Vimeo)
function ExternalVideoPlayer({ embedUrl, host, alt }: { 
  embedUrl: string; 
  host?: 'YOUTUBE' | 'VIMEO';
  alt: string;
}) {
  // Add autoplay params for external videos
  const enhancedUrl = embedUrl.includes('?') 
    ? `${embedUrl}&autoplay=1&mute=1` 
    : `${embedUrl}?autoplay=1&mute=1`;

  return (
    <iframe
      src={enhancedUrl}
      className="w-full h-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={alt || `${host} video`}
    />
  );
}

// Main media renderer
function MediaRenderer({ item, productTitle }: { item: ProductMedia; productTitle: string }) {
  const { node } = item;
  const alt = node.alt || productTitle;

  switch (node.mediaContentType) {
    case 'IMAGE':
      return (
        <img
          src={node.image?.url}
          alt={node.image?.altText || alt}
          className="w-full h-full object-cover"
        />
      );
    
    case 'VIDEO':
      if (!node.sources || node.sources.length === 0) return null;
      return (
        <VideoPlayer 
          sources={node.sources} 
          poster={node.previewImage?.url}
          alt={alt}
        />
      );
    
    case 'EXTERNAL_VIDEO':
      if (!node.embedUrl) return null;
      return (
        <ExternalVideoPlayer 
          embedUrl={node.embedUrl} 
          host={node.host}
          alt={alt}
        />
      );
    
    default:
      return null;
  }
}

// Thumbnail with play icon overlay for videos
function MediaThumbnail({ 
  item, 
  index, 
  isSelected, 
  onClick, 
  productTitle 
}: { 
  item: ProductMedia;
  index: number;
  isSelected: boolean;
  onClick: () => void;
  productTitle: string;
}) {
  const thumbnailUrl = getThumbnailUrl(item);
  const isVideo = isVideoType(item);
  const alt = item.node.alt || `${productTitle} thumbnail ${index + 1}`;

  if (!thumbnailUrl) return null;

  return (
    <button
      onClick={onClick}
      className={cn(
        "aspect-square w-full overflow-hidden border-2 transition-all relative",
        isSelected
          ? "border-foreground"
          : "border-transparent hover:border-foreground/30"
      )}
    >
      <img
        src={thumbnailUrl}
        alt={alt}
        className="w-full h-full object-cover"
      />
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <Play className="w-6 h-6 text-white fill-white" />
        </div>
      )}
    </button>
  );
}

export function ProductMediaGallery({ media, productTitle = "Product" }: ProductMediaGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const isMobile = useIsMobile();

  // Handle carousel slide change
  useEffect(() => {
    if (!carouselApi) return;
    
    const onSelect = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
    };
    
    carouselApi.on('select', onSelect);
    return () => {
      carouselApi.off('select', onSelect);
    };
  }, [carouselApi]);

  // Sync carousel with thumbnail click
  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
    carouselApi?.scrollTo(index);
  };

  if (media.length === 0) {
    return (
      <div className="aspect-square bg-muted flex items-center justify-center">
        <span className="text-muted-foreground">No media available</span>
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
            {media.map((item, index) => (
              <CarouselItem key={index}>
                <div className="aspect-square w-full overflow-hidden bg-muted">
                  <MediaRenderer item={item} productTitle={productTitle} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Dot indicators */}
        {media.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {media.map((item, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  selectedIndex === index
                    ? "bg-foreground w-4"
                    : "bg-foreground/30",
                  isVideoType(item) && selectedIndex !== index && "ring-1 ring-foreground/50"
                )}
                aria-label={`Go to ${isVideoType(item) ? 'video' : 'image'} ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop: Thumbnails on left, main media on right
  return (
    <div className="flex gap-4">
      {/* Thumbnail strip */}
      {media.length > 1 && (
        <div className="flex flex-col gap-2 w-20 flex-shrink-0">
          {media.map((item, index) => (
            <MediaThumbnail
              key={index}
              item={item}
              index={index}
              isSelected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
              productTitle={productTitle}
            />
          ))}
        </div>
      )}

      {/* Main media */}
      <div className="flex-1 aspect-square overflow-hidden bg-muted">
        <MediaRenderer 
          item={media[selectedIndex]} 
          productTitle={productTitle} 
        />
      </div>
    </div>
  );
}
