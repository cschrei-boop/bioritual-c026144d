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
import { Link } from "react-router-dom";
import serviceAiConcierge from "@/assets/service-ai-concierge.jpg";
import serviceProtocols from "@/assets/service-protocols.jpg";
import serviceCoaching from "@/assets/service-coaching.jpg";
import serviceStartHere from "@/assets/service-start-here.jpg";

const paths = [
  {
    title: "AI Concierge",
    description: "24/7 intelligent guidance for your optimization journey. Ask anything, get personalized answers.",
    price: "$10/mo",
    badge: "Most Popular",
    image: serviceAiConcierge,
    href: "/ai-concierge",
  },
  {
    title: "Bio Signals Protocols",
    description: "Get a custom 90-day protocol designed specifically for your goals and lifestyle.",
    price: "From $199",
    badge: null,
    image: serviceProtocols,
    href: "/protocols",
  },
  {
    title: "1-on-1 Coaching",
    description: "Weekly check-ins, protocol adjustments, and direct access to our optimization experts.",
    price: "From $2,999",
    badge: "Bestseller",
    image: serviceCoaching,
    href: "/coaching",
  },
  {
    title: "Start Here",
    description: "Not sure where to begin? Compare all Bio Signals options and find the right fit.",
    price: "Free",
    badge: null,
    image: serviceStartHere,
    href: "/start-here",
  },
];

const ChooseYourPath = () => {
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
              Get Started
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Choose Your Path</h2>
          </div>
          <Link to="/start-here" className="text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity">
            See All
          </Link>
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
              {paths.map((path) => (
                <CarouselItem key={path.title} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className="group bg-background p-6 h-full flex flex-col">
                    {/* Badge */}
                    {path.badge && (
                      <span className="text-[10px] tracking-[0.2em] uppercase mb-4 block">
                        {path.badge}
                      </span>
                    )}
                    {!path.badge && <div className="h-5 mb-4" />}

                    {/* Image */}
                    <div className="aspect-square mb-6 overflow-hidden">
                      <img
                        src={path.image}
                        alt={path.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl mb-2">{path.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                      {path.description}
                    </p>
                    <p className="text-sm font-medium mb-4">{path.price}</p>
                    <Button
                      variant="outline"
                      className="w-full rounded-none border-foreground hover:bg-foreground hover:text-background text-xs tracking-wider"
                      asChild
                    >
                      <Link to={path.href}>Learn More</Link>
                    </Button>
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

export default ChooseYourPath;
