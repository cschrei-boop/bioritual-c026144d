import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { ProfessionalIllustration } from "@/components/illustrations";

const features = ["Clear protocols", "Flexible consistency", "No shame", "Works on off days"];

const BuiltFor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-6 md:py-14 px-4 md:px-6 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-card/60 backdrop-blur-sm border border-border rounded-3xl p-5 md:p-6"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Left - Illustration */}
            <div className="flex-shrink-0 w-28 h-28 md:w-32 md:h-32">
              <ProfessionalIllustration />
            </div>

            {/* Right - Content */}
            <div className="flex-1">
              <h2 className="font-serif text-xl md:text-2xl mb-3">
                Built for How You <span className="italic text-magenta">Actually</span> Work
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                For busy professionals with high cognitive load and inconsistent schedules.
              </p>
              <div className="flex flex-wrap gap-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    className="flex items-center gap-1.5 bg-secondary/50 rounded-full px-3 py-1.5"
                  >
                    <Check className="w-3 h-3 text-cyan" />
                    <span className="text-xs">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltFor;
