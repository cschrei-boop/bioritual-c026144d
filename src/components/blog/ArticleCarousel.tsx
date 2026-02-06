import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { articles, type ArticleMetadata } from "@/data/article-content";

interface ArticleCarouselProps {
  /** Current page href — this article will be excluded from the carousel */
  currentHref?: string;
}

const ArticleCarousel = ({ currentHref }: ArticleCarouselProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered: ArticleMetadata[] = currentHref
    ? articles.filter((a) => a.href !== currentHref)
    : articles;

  if (filtered.length === 0) return null;

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
            <h2 className="font-serif text-3xl md:text-4xl mb-2">
              Blog: All You Wanted to Know About Biohacking
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity whitespace-nowrap"
          >
            All Articles →
          </Link>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel
            opts={{ align: "start", loop: filtered.length > 3 }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {filtered.map((article) => (
                <CarouselItem
                  key={article.id}
                  className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <Link
                    to={article.href}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden mb-4">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      {/* Text */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-background">
                        <h3 className="text-lg tracking-wide mb-1">
                          {article.title}
                        </h3>
                        <p className="text-xs opacity-80 mb-3">
                          {article.subtitle}
                        </p>
                        <span className="inline-block text-xs tracking-[0.15em] uppercase border border-background/60 px-4 py-1.5 hover:bg-background hover:text-foreground transition-colors">
                          Read More
                        </span>
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
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleCarousel;
