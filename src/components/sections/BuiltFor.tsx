import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const features = ["Clear protocols", "Flexible consistency", "No shame, no guilt", "Works on imperfect days"];

const BuiltFor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-background/60 border border-border/50 rounded-3xl p-6"
          >
            <p className="text-xs tracking-[0.2em] text-primary uppercase mb-2 font-medium">
              Designed For You
            </p>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Built for How You <span className="italic text-primary">Actually</span> Work
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Biological optimization for busy professionals with high cognitive load and inconsistent schedules.
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <div className="w-5 h-5 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/90 text-xs">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={heroPortrait} alt="Placeholder" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-3 left-3 right-3 backdrop-blur-md bg-background/50 rounded-xl px-3 py-2 border border-border/30">
              <p className="text-xs text-muted-foreground italic">Illustration placeholder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuiltFor;
