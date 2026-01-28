import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroPortrait from "@/assets/hero-portrait.jpg";

const services = [
  {
    title: "AI Concierge",
    description: "24/7 intelligent guidance for your optimization journey.",
    price: "$10/mo",
    badge: "New",
    image: heroPortrait,
  },
  {
    title: "Protocol Design",
    description: "Personalized 90-day programs with clear milestones.",
    price: "From $199",
    badge: "Popular",
    image: heroPortrait,
  },
  {
    title: "1-on-1 Coaching",
    description: "Weekly check-ins and protocol adjustments.",
    price: "3 months",
    badge: "Bestseller",
    image: heroPortrait,
  },
  {
    title: "Group Sprint",
    description: "Community-driven 90-day transformation.",
    price: "$499",
    badge: null,
    image: heroPortrait,
  },
];

const FeaturedServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-xs tracking-[0.3em] uppercase">Featured Services</h2>
          <a href="#" className="text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity">
            See All
          </a>
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
            <CarouselContent className="-ml-4">
              {services.map((service) => (
                <CarouselItem key={service.title} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className="group cursor-pointer">
                    {/* Image */}
                    <div className="relative aspect-square mb-4 overflow-hidden bg-muted">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {service.badge && (
                        <span className="absolute top-3 right-3 text-[10px] tracking-[0.2em] uppercase bg-background px-2 py-1">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg mb-1">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                    <p className="text-sm font-medium mb-3">{service.price}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-none border-foreground hover:bg-foreground hover:text-background text-xs tracking-wider"
                    >
                      Learn More
                    </Button>
                  </div>
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

export default FeaturedServices;
