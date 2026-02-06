import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const features = [
  "Clear protocols that don't require constant decisions",
  "Flexible consistency that adapts to your schedule",
  "No shame, no guilt, just systems",
  "Works even on your worst days",
];

const BuiltFor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 md:px-12 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-muted order-2 md:order-1"
          >
            {/* Placeholder for lifestyle image */}
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 order-1 md:order-2"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              For Professionals
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              Built for How You{" "}
              <span className="italic">Actually</span>{" "}
              Work
            </h2>
            
            <p className="text-muted-foreground leading-normal">
              For busy professionals with high cognitive load and inconsistent schedules.
            </p>

            <ul className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button 
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 mt-6"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuiltFor;
