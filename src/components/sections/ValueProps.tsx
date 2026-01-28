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
import valueSystems from "@/assets/value-systems.jpg";
import valueClean from "@/assets/value-clean.jpg";
import valuePerformance from "@/assets/value-performance.jpg";
import valueBusy from "@/assets/value-busy.jpg";

const values = [
  {
    title: "Better Systems",
    description: "The world doesn't need more motivation. It needs better systems.",
    image: valueSystems,
  },
  {
    title: "Clean Protocols",
    description: "No pseudoscience, no fads. Just evidence-based optimization strategies.",
    image: valueClean,
  },
  {
    title: "High Performance",
    description: "The optimization equivalent of a swiss army knife. Easy, adaptable, multi-purpose protocols.",
    image: valuePerformance,
  },
  {
    title: "Built for Busy",
    description: "Designed for professionals with high cognitive load and inconsistent schedules.",
    image: valueBusy,
  },
];

const ValueProps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 md:px-12 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {values.map((value) => (
                <CarouselItem key={value.title} className="pl-6 md:basis-1/2 lg:basis-1/4">
                  <div className="group">
                    {/* Image */}
                    <div className="aspect-square mb-6 overflow-hidden">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {value.description}
                    </p>
                    <Link
                      to="/start-here"
                      className="text-sm border-b border-foreground pb-0.5 hover:opacity-60 transition-opacity"
                    >
                      Learn More
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-between items-center mt-8">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">1</span>/4
              </div>
              <div className="flex gap-2">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProps;
