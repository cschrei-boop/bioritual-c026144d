import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gauge, Brain, HeartPulse, Dna, Target } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const categories = [
  { icon: Gauge, title: "Metabolic", desc: "Weight, appetite, energy" },
  { icon: Brain, title: "Cognitive", desc: "Focus, clarity, resilience" },
  { icon: HeartPulse, title: "Recovery", desc: "Repair, gut health" },
  { icon: Dna, title: "Longevity", desc: "Cellular health, healthspan" },
  { icon: Target, title: "Performance", desc: "Strength, body composition" },
];

const Categories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroPortrait} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 backdrop-blur-xl bg-background/60 border border-border/50 rounded-2xl p-6 max-w-md mx-auto"
        >
          <p className="text-xs tracking-[0.2em] text-primary uppercase mb-2 font-medium">
            Optimization Categories
          </p>
          <h2 className="font-serif text-2xl md:text-3xl">Five Core Areas</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="backdrop-blur-xl bg-background/70 border border-border/50 rounded-2xl p-4 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <cat.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-sm text-foreground mb-1">{cat.title}</h3>
              <p className="text-xs text-muted-foreground">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
