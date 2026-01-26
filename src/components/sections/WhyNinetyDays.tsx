import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const WhyNinetyDays = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroPortrait} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-background/70 border border-border/50 rounded-3xl p-6 md:p-8 text-center"
        >
          <p className="text-xs tracking-[0.2em] text-primary uppercase font-medium mb-2">
            The 90-Day Framework
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4">
            Why <span className="text-primary">90 Days</span> Matters
          </h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            Biology responds to <span className="text-foreground">sustained signals</span>, not chaos.
            Ninety days allows your system to adapt, regulate, and reveal what works.
          </p>

          <div className="flex justify-center gap-4 mb-6">
            {["Adapt", "Regulate", "Reveal"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="backdrop-blur-md bg-primary/10 border border-primary/30 rounded-xl px-4 py-3 text-center"
              >
                <span className="block text-xl font-serif text-primary">{i + 1}</span>
                <span className="text-xs text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            This isn't about streaks. It's about building <span className="font-serif italic text-foreground">rituals</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNinetyDays;
