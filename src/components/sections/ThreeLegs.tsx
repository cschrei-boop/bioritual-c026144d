import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Zap, Activity } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const pillars = [
  {
    icon: Flame,
    title: "FUEL",
    subtitle: "Nutrition systems that work in real life",
    description: "Clear frameworks that support metabolic health, energy regulation, and consistency.",
  },
  {
    icon: Zap,
    title: "SIGNALS",
    subtitle: "Peptides and targeted biological signaling",
    description: "Work with your body's existing biology to guide appetite, recovery, and cognition.",
  },
  {
    icon: Activity,
    title: "MOVEMENT",
    subtitle: "Training designed for sustainability",
    description: "Movement that builds strength and resilience — without punishment or burnout.",
  },
];

const ThreeLegs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroPortrait} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/98 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 backdrop-blur-xl bg-background/60 border border-border/50 rounded-3xl p-6 md:p-8 max-w-xl mx-auto"
        >
          <p className="text-xs tracking-[0.2em] text-primary uppercase mb-2 font-medium">
            What Makes BIORITUAL Different
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-3">
            The Three-Legged Stool
          </h2>
          <p className="text-sm text-muted-foreground">
            We believe in <span className="text-foreground font-medium">structure</span>, not willpower.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="backdrop-blur-xl bg-background/70 border border-border/50 rounded-2xl p-5 h-full transition-all duration-300 hover:bg-background/80 hover:border-primary/30">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <pillar.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xs tracking-[0.15em] text-primary mb-1 font-medium">
                  {pillar.title}
                </h3>
                <p className="font-serif text-lg text-foreground mb-2">
                  {pillar.subtitle}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 text-sm text-muted-foreground"
        >
          When all three are aligned, optimization becomes <span className="text-primary font-medium">sustainable</span>.
        </motion.p>
      </div>
    </section>
  );
};

export default ThreeLegs;
