import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroPortrait from "@/assets/hero-portrait.jpg";

const pillars = [
  {
    title: "FUEL",
    subtitle: "Nutrition that works",
    description: "Clear frameworks for metabolic health and sustained energy throughout your day.",
    image: heroPortrait,
  },
  {
    title: "SIGNALS",
    subtitle: "Peptide protocols",
    description: "Work with your biology, not against it. Evidence-based signaling optimization.",
    image: heroPortrait,
  },
  {
    title: "MOVEMENT",
    subtitle: "Sustainable training",
    description: "Build strength and resilience without burnout. Protocols that fit your life.",
    image: heroPortrait,
  },
];

const ThreePillarsCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
              The Foundation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">The Three Pillars</h2>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {pillars.map((pillar) => (
                <CarouselItem key={pillar.title} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="group">
                    {/* Image */}
                    <div className="aspect-[4/3] mb-6 overflow-hidden">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl tracking-widest mb-2">{pillar.title}</h3>
                    <p className="text-sm font-medium mb-2">{pillar.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {pillar.description}
                    </p>
                    <a
                      href="#"
                      className="text-sm border-b border-foreground pb-0.5 hover:opacity-60 transition-opacity"
                    >
                      Learn More
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreePillarsCarousel;
