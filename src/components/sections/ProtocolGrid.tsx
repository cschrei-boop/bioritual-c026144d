import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import bioSignalsWeightLossHero from "@/assets/bio-signals-hero.jpg";
import bioSignalsEnergyHero from "@/assets/bio-signals-energy-hero.jpg";
import bioSignalsPerformanceHero from "@/assets/bio-signals-performance-hero.jpg";
import bioSignalsHairSkinHero from "@/assets/bio-signals-hair-skin-hero.jpg";
import bioSignalsCognitionHero from "@/assets/bio-signals-cognition-hero.jpg";
import bioSignalsLongevityHero from "@/assets/bio-signals-longevity-hero.jpg";

const protocols = [
  {
    title: "Weight Loss + Metabolic Health",
    description: "Six systems, working together.",
    href: "/products/bio-signals-weight-loss-metabolic-health",
    image: bioSignalsWeightLossHero,
  },
  {
    title: "Energy",
    description: "Restore the baseline, not the stimulant.",
    href: "/products/bio-signals-energy",
    image: bioSignalsEnergyHero,
  },
  {
    title: "Performance + Recovery",
    description: "Output requires recovery. This protocol addresses both.",
    href: "/products/bio-signals-performance-recovery",
    image: bioSignalsPerformanceHero,
  },
  {
    title: "Hair + Skin",
    description: "Visible health is internal health.",
    href: "/products/bio-signals-hair-skin",
    image: bioSignalsHairSkinHero,
  },
  {
    title: "Cognition + Brain Health",
    description: "Clarity over activation.",
    href: "/products/bio-signals-cognition-brain-health",
    image: bioSignalsCognitionHero,
  },
  {
    title: "Longevity",
    description: "Stay capable over decades, not just years.",
    href: "/products/bio-signals-longevity",
    image: bioSignalsLongevityHero,
  },
];

const ProtocolGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Six protocols. One framework.
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Each one built around a specific goal, confirmed through a Jesse intake conversation, and supported for the full three months.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {protocols.map((protocol, i) => (
            <motion.div
              key={protocol.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <Link to={protocol.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden mb-4">
                  <img
                    src={protocol.image}
                    alt={protocol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-background text-lg tracking-wide uppercase mb-1">
                      {protocol.title}
                    </h3>
                    <p className="text-background/80 text-sm mb-3">
                      {protocol.description}
                    </p>
                    <span className="inline-block text-xs tracking-[0.15em] uppercase text-background border-b border-background/60 pb-0.5">
                      → Learn more
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10"
        >
          <Link
            to="/collection/protocols"
            className="inline-block text-sm tracking-[0.15em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
          >
            → See all protocols
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProtocolGrid;
