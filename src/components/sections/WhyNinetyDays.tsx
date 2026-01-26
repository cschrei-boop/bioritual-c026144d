import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const WhyNinetyDays = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = ["Adapt", "Regulate", "Reveal what's actually working"];

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={heroPortrait} 
          alt="" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-background/70 border border-border/50 rounded-3xl p-8 md:p-12 text-center"
        >
          <p className="text-sm tracking-[0.2em] text-primary uppercase font-medium mb-4">
            The 90-Day Framework
          </p>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8">
            Why <span className="text-primary">90 Days</span> Matters
          </h2>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Biology doesn't respond to chaos.
              It responds to <span className="text-foreground font-medium">sustained signals</span>.
            </p>

            <p className="text-foreground/90">
              Ninety days gives your system time to:
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6 py-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="backdrop-blur-md bg-primary/10 border border-primary/30 rounded-2xl px-6 py-4 text-center"
                >
                  <span className="block text-3xl font-serif text-primary mb-1">
                    {index + 1}
                  </span>
                  <span className="text-sm text-foreground">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-6 border-t border-border/30 mt-8"
          >
            <p className="text-muted-foreground">
              This isn't about streaks.
            </p>
            <p className="text-foreground font-medium mt-2 text-lg">
              It's about building <span className="font-serif italic">rituals</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNinetyDays;
