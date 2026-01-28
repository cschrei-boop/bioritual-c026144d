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

const goals = [
  {
    title: "Metabolic",
    subtitle: "Energy & Weight",
    image: heroPortrait,
  },
  {
    title: "Cognitive",
    subtitle: "Focus & Clarity",
    image: heroPortrait,
  },
  {
    title: "Recovery",
    subtitle: "Sleep & Repair",
    image: heroPortrait,
  },
  {
    title: "Longevity",
    subtitle: "Aging Well",
    image: heroPortrait,
  },
  {
    title: "Performance",
    subtitle: "Strength & Endurance",
    image: heroPortrait,
  },
];

const ShopByGoal = () => {
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
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {goals.map((goal) => (
                <CarouselItem key={goal.title} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <a href="#" className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden mb-4">
                      <img
                        src={goal.image}
                        alt={goal.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      {/* Text */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-background">
                        <h3 className="text-lg tracking-wide mb-1">{goal.title}</h3>
                        <p className="text-xs opacity-80">{goal.subtitle}</p>
                      </div>
                    </div>
                  </a>
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

export default ShopByGoal;
