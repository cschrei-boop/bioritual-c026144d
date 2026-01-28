import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    title: "FUEL",
    subtitle: "Nutrition that works",
    description: "Clear frameworks for metabolic health and energy.",
  },
  {
    title: "SIGNALS",
    subtitle: "Peptide protocols",
    description: "Work with your biology, not against it.",
  },
  {
    title: "MOVEMENT",
    subtitle: "Sustainable training",
    description: "Build strength without burnout.",
  },
];

const ThreeLegs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 md:px-12 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
              Shop by Focus
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              The Three Pillars
            </h2>
          </div>
          <a href="#" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
            See All →
          </a>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.a
              key={pillar.title}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative aspect-square bg-background overflow-hidden"
            >
              {/* Placeholder for image - solid color for now */}
              <div className="absolute inset-0 bg-muted group-hover:scale-105 transition-transform duration-500" />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <h3 className="text-2xl md:text-3xl tracking-widest mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm opacity-80">
                  {pillar.subtitle}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeLegs;
