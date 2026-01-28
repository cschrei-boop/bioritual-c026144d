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
import { Link } from "react-router-dom";
import heroPortrait from "@/assets/hero-portrait.jpg";

const looks = [
  {
    title: "Weight Loss Protocol",
    subtitle: "90-day metabolic optimization",
    image: heroPortrait,
    href: "/protocol/bio-signals-weight-loss",
  },
  {
    title: "Cognition Protocol",
    subtitle: "Focus & mental clarity",
    image: heroPortrait,
    href: "/protocol/bio-signals-cognition",
  },
  {
    title: "Performance Protocol",
    subtitle: "Recovery & performance stack",
    image: heroPortrait,
    href: "/protocol/bio-signals-performance-recovery",
  },
  {
    title: "Longevity Protocol",
    subtitle: "Anti-aging fundamentals",
    image: heroPortrait,
    href: "/protocol/bio-signals-longevity",
  },
];

const GetTheLook = () => {
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
          className="mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl">Get The Protocol</h2>
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
              {looks.map((look) => (
                <CarouselItem key={look.title} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <Link to={look.href} className="group block">
                    {/* Image */}
                    <div className="aspect-[3/4] mb-4 overflow-hidden">
                      <img
                        src={look.image}
                        alt={look.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg mb-1 group-hover:opacity-60 transition-opacity">
                      {look.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{look.subtitle}</p>
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

export default GetTheLook;
