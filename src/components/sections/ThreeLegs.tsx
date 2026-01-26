import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Zap, Activity } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "FUEL",
    subtitle: "Nutrition systems that work in real life",
    description:
      "Not extreme diets. Not constant tracking. Clear frameworks that support metabolic health, energy regulation, and consistency.",
  },
  {
    icon: Zap,
    title: "SIGNALS",
    subtitle: "Peptides and targeted biological signaling",
    description:
      "Peptides act as signals — not overrides. They work with your body's existing biology to guide appetite, recovery, cognition, and cellular health.",
  },
  {
    icon: Activity,
    title: "MOVEMENT",
    subtitle: "Training designed for sustainability",
    description:
      "Movement that builds strength, resilience, and confidence — without punishment or burnout.",
  },
];

const ThreeLegs = () => {
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
            What Makes BIORITUAL Different
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            The Three-Legged Stool of
            <br />
            <span className="text-muted-foreground">Biological Optimization</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We don't believe in willpower-based health.
            <br />
            We believe in <span className="text-foreground font-medium">structure</span>.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 h-full transition-all duration-300 hover:border-primary/30 hover:bg-card/80">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-sm tracking-[0.2em] text-primary mb-2">
                  {pillar.title}
                </h3>

                {/* Subtitle */}
                <p className="font-serif text-xl text-foreground mb-4">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16 max-w-xl mx-auto"
        >
          <p className="text-muted-foreground">
            When one pillar is neglected, the whole system wobbles.
          </p>
          <p className="text-foreground mt-2">
            When all three are aligned, optimization becomes{" "}
            <span className="text-primary">sustainable</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeLegs;
