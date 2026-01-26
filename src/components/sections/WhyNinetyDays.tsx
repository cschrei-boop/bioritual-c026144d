import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhyNinetyDays = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = ["Adapt", "Regulate", "Reveal what's actually working"];

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-sm tracking-[0.2em] text-primary uppercase">
            The 90-Day Framework
          </p>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Why <span className="text-primary">90 Days</span> Matters
          </h2>

          <div className="space-y-6 pt-4">
            <p className="text-lg text-muted-foreground">
              Biology doesn't respond to chaos.
              <br />
              It responds to <span className="text-foreground">sustained signals</span>.
            </p>

            <p className="text-foreground/90">
              Ninety days gives your system time to:
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center gap-8 py-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="text-2xl font-serif text-primary">
                    {index + 1}
                  </span>
                  <span className="text-sm text-muted-foreground">
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
            className="pt-8"
          >
            <p className="text-muted-foreground">
              This isn't about streaks.
            </p>
            <p className="text-foreground font-medium mt-2">
              It's about building <span className="italic">rituals</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNinetyDays;
