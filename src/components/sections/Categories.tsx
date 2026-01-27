import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gauge, Brain, HeartPulse, Dna, Target } from "lucide-react";

const categories = [
  { icon: Gauge, title: "Metabolic", color: "cyan" },
  { icon: Brain, title: "Cognitive", color: "magenta" },
  { icon: HeartPulse, title: "Recovery", color: "yellow" },
  { icon: Dna, title: "Longevity", color: "cyan" },
  { icon: Target, title: "Performance", color: "magenta" },
];

const Categories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-10 md:py-14 px-6 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-3xl mx-auto bg-background/70 backdrop-blur-md rounded-3xl p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="font-serif text-2xl md:text-3xl mb-2">Five Core Areas</h2>
          <div className="flex justify-center gap-1">
            {["cyan", "magenta", "yellow", "cyan", "magenta"].map((color, i) => (
              <div key={i} className={`w-6 h-1 rounded-full bg-${color}/50`} />
            ))}
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className={`flex items-center gap-3 bg-card/60 backdrop-blur-sm border border-border rounded-full px-5 py-3 hover:border-${cat.color}/50 transition-colors`}
            >
              <cat.icon className={`w-4 h-4 text-${cat.color}`} />
              <span className="text-sm font-medium">{cat.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
