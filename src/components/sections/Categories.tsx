import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gauge, Brain, HeartPulse, Dna, Target } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

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
    <section ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={heroPortrait} 
          alt="" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header in frosted glass */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 backdrop-blur-xl bg-background/60 border border-border/50 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto"
        >
          <p className="text-sm tracking-[0.2em] text-primary uppercase mb-4 font-medium">
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
              className={`group ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="backdrop-blur-xl bg-background/70 border border-border/50 rounded-3xl p-6 h-full transition-all duration-300 hover:bg-background/80 hover:border-primary/30 hover:shadow-lg">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg text-foreground mb-1">
                  {category.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-primary/80 mb-3 font-medium">
                  {category.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
