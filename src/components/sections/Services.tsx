import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "1-on-1 Coaching",
    description: "Personalized guidance with weekly check-ins and protocol adjustments.",
    price: "3 months",
    featured: true,
  },
  {
    title: "AI Coach",
    description: "24/7 intelligent support for your optimization journey.",
    price: "$10/mo",
    featured: false,
  },
  {
    title: "Protocols",
    description: "Structured 90-day programs with clear milestones.",
    price: "90 days",
    featured: false,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 md:px-12 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
              Featured
            </p>
            <h2 className="text-3xl md:text-4xl">
              Choose Your Path
            </h2>
          </div>
          <a href="#" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
            See All →
          </a>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`bg-background p-8 border border-border hover:shadow-md transition-shadow ${
                service.featured ? "ring-1 ring-foreground" : ""
              }`}
            >
              {service.featured && (
                <p className="text-xs tracking-[0.2em] uppercase mb-4">Most Popular</p>
              )}
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{service.description}</p>
              <p className="text-sm font-medium mb-6">{service.price}</p>
              <Button
                variant={service.featured ? "default" : "outline"}
                className={`w-full rounded-none ${
                  service.featured 
                    ? "bg-foreground text-background hover:bg-foreground/90" 
                    : "border-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
