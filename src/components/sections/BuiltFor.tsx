import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

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
    <section ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content in frosted glass */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-background/60 border border-border/50 rounded-3xl p-8 md:p-10"
          >
            <p className="text-sm tracking-[0.2em] text-primary uppercase mb-4 font-medium">
              Designed For You
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Built for How Your Mind{" "}
              <span className="italic text-primary">Actually</span> Works
            </h2>

            <p className="text-muted-foreground mb-6">
              This is biological optimization designed for:
            </p>

            <ul className="space-y-2 mb-8">
              {audiences.map((audience, index) => (
                <motion.li
                  key={audience}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 text-foreground/90"
                >
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {audience}
                </motion.li>
              ))}
            </ul>

            <p className="text-muted-foreground">
              Our systems reduce friction instead of adding rules.
            </p>
          </motion.div>

          {/* Right side with image and features */}
          <div className="space-y-6">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden">
                <img 
                  src={heroPortrait} 
                  alt="Placeholder for illustration" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-background/50 rounded-2xl px-4 py-3 border border-border/30">
                <p className="text-xs text-muted-foreground italic">
                  Illustration placeholder
                </p>
              </div>
            </motion.div>

            {/* Features in frosted glass */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="backdrop-blur-xl bg-background/60 border border-border/50 rounded-3xl p-8"
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
                    <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/90">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltFor;
