import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const features = [
  "Clear protocols",
  "Flexible consistency",
  "No shame, no guilt",
  "Works even on imperfect days",
];

const audiences = [
  "Busy professionals",
  "High cognitive load",
  "Inconsistent schedules",
];

const BuiltFor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-sm tracking-[0.2em] text-primary uppercase">
              Designed For You
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl">
              Built for How Your Mind{" "}
              <span className="italic text-primary">Actually</span> Works
            </h2>

            <p className="text-muted-foreground">
              This is biological optimization designed for:
            </p>

            <ul className="space-y-2">
              {audiences.map((audience, index) => (
                <motion.li
                  key={audience}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 text-foreground/90"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {audience}
                </motion.li>
              ))}
            </ul>

            <p className="text-muted-foreground pt-4">
              Our systems reduce friction instead of adding rules.
            </p>
          </motion.div>

          {/* Right content - features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card/50 border border-border/50 rounded-lg p-8"
          >
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground/90">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuiltFor;
