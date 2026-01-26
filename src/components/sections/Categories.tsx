import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gauge, Brain, HeartPulse, Dna, Target } from "lucide-react";

const categories = [
  {
    icon: Gauge,
    title: "Metabolic Optimization",
    subtitle: "Weight management, appetite control, energy balance",
    description: "Designed for individuals experiencing metabolic slowdown, weight creep, or persistent hunger.",
  },
  {
    icon: Brain,
    title: "Cognitive Enhancement",
    subtitle: "Focus, mental clarity, stress resilience",
    description: "For professionals experiencing brain fog, decision fatigue, or cognitive overload.",
  },
  {
    icon: HeartPulse,
    title: "Recovery & Resilience",
    subtitle: "Tissue repair, gut health, inflammation support",
    description: "For those dealing with lingering injuries, digestive issues, or inconsistent recovery.",
  },
  {
    icon: Dna,
    title: "Longevity & Cellular Health",
    subtitle: "Mitochondrial function, cellular repair, healthspan",
    description: "Built for people thinking decades ahead — not quick fixes.",
  },
  {
    icon: Target,
    title: "Performance & Body Composition",
    subtitle: "Strength, muscle retention, physical confidence",
    description: "Not bodybuilding. Functional, sustainable performance.",
  },
];

const Categories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] text-primary uppercase mb-4">
            Optimization Categories
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Five Core Areas of Focus
          </h2>
        </motion.div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`group bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/80 ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg text-foreground mb-1">
                {category.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-primary/80 mb-3">
                {category.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
