import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TimelineIllustration } from "@/components/illustrations";

const WhyNinetyDays = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 px-6 overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Timeline Illustration */}
          <div className="w-full max-w-md mx-auto mb-6">
            <TimelineIllustration />
          </div>

          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4">
            Why <span className="bg-gradient-to-r from-cyan to-magenta bg-clip-text text-transparent">90 Days</span>?
          </h2>
          
          <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            Biology responds to sustained signals. Ninety days allows adaptation, regulation, and real results.
          </p>

          <div className="flex justify-center gap-4">
            {[
              { num: "1", label: "Adapt", color: "cyan" },
              { num: "2", label: "Regulate", color: "magenta" },
              { num: "3", label: "Reveal", color: "yellow" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-${item.color}/20 flex items-center justify-center mx-auto mb-2`}>
                  <span className={`text-xl font-serif text-${item.color}`}>{item.num}</span>
                </div>
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            It's about building <span className="font-serif italic text-foreground">rituals</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNinetyDays;
