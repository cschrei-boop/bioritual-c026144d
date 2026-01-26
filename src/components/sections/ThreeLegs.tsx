import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Zap, Activity } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "FUEL",
    subtitle: "Nutrition that works",
    description: "Clear frameworks for metabolic health and energy.",
    color: "cyan",
  },
  {
    icon: Zap,
    title: "SIGNALS",
    subtitle: "Peptide protocols",
    description: "Work with your biology, not against it.",
    color: "magenta",
  },
  {
    icon: Activity,
    title: "MOVEMENT",
    subtitle: "Sustainable training",
    description: "Build strength without burnout.",
    color: "yellow",
  },
];

const ThreeLegs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 px-6 overflow-hidden bg-transparent">
      {/* Decorative background */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </pattern>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto bg-background/80 backdrop-blur-md rounded-3xl p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan" />
            <div className="w-2 h-2 rounded-full bg-magenta" />
            <div className="w-2 h-2 rounded-full bg-yellow" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-2">
            The Three Pillars
          </h2>
          <p className="text-sm text-muted-foreground">
            Structure over willpower.
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
              className="group relative"
            >
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-${pillar.color}`} />
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-5 pt-6 h-full hover:shadow-lg transition-shadow">
                <div className={`w-10 h-10 rounded-xl bg-${pillar.color}/20 flex items-center justify-center mb-4`}>
                  <pillar.icon className={`w-5 h-5 text-${pillar.color}`} />
                </div>
                <h3 className={`text-xs tracking-[0.15em] text-${pillar.color} mb-1 font-medium`}>
                  {pillar.title}
                </h3>
                <p className="font-serif text-lg text-foreground mb-2">
                  {pillar.subtitle}
                </p>
                <p className="text-xs text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom connector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan" />
            <div className="w-8 h-px bg-magenta" />
            <div className="w-8 h-px bg-gradient-to-r from-yellow to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeLegs;
