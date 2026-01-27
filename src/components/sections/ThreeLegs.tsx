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
    href: "#fuel",
  },
  {
    icon: Zap,
    title: "SIGNALS",
    subtitle: "Peptide protocols",
    description: "Work with your biology, not against it.",
    color: "magenta",
    href: "#signals",
  },
  {
    icon: Activity,
    title: "MOVEMENT",
    subtitle: "Sustainable training",
    description: "Build strength without burnout.",
    color: "yellow",
    href: "#movement",
  },
];

const ThreeLegs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-6 md:py-14 px-4 md:px-6 overflow-hidden bg-transparent">
      {/* Decorative background */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </pattern>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto bg-background/70 backdrop-blur-md rounded-3xl p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
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
        <div className="flex flex-col gap-4">
          {pillars.map((pillar, index) => (
            <motion.a
              key={pillar.title}
              href={pillar.href}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-5 hover:shadow-lg hover:bg-card/80 transition-all">
                <div className={`w-12 h-12 rounded-xl bg-${pillar.color}/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <pillar.icon className={`w-6 h-6 text-${pillar.color}`} />
                </div>
                <h3 className={`font-objektiv text-3xl md:text-4xl lg:text-5xl tracking-wide text-${pillar.color} mb-2 uppercase font-bold`}>
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {pillar.subtitle} — {pillar.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom connector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-5"
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
