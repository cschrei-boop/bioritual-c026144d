import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const applications = [
  "Metabolic optimization (GLP-1–based peptides)",
  "Tissue repair (BPC-157, TB-500)",
  "Cognitive clarity (Semax, Selank)",
  "Longevity signaling (Epithalon, GHK-Cu)",
];

const Peptides = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden sticky top-20">
              <img src={heroPortrait} alt="Placeholder" className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 right-3 backdrop-blur-md bg-background/50 rounded-xl px-3 py-2 border border-border/30">
                <p className="text-xs text-muted-foreground italic">Illustration placeholder</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-4 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-xl bg-background/60 border border-border/50 rounded-2xl p-5"
            >
              <p className="text-xs tracking-[0.2em] text-primary uppercase mb-2 font-medium">
                Understanding Peptides
              </p>
              <h2 className="font-serif text-2xl md:text-3xl">
                Biology's <span className="italic text-primary">Native Language</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="backdrop-blur-xl bg-background/60 border border-border/50 rounded-2xl p-5"
            >
              <p className="text-sm text-muted-foreground mb-3">
                Peptides are signaling molecules your body already produces. Unlike supplements or medications, they:
              </p>
              <ul className="space-y-1.5 text-sm">
                <li className="flex items-center gap-2 text-foreground/90">
                  <span className="text-primary font-bold">→</span>
                  Work within existing biological feedback loops
                </li>
                <li className="flex items-center gap-2 text-foreground/90">
                  <span className="text-primary font-bold">→</span>
                  Respect your body's regulatory systems
                </li>
              </ul>
              <p className="text-sm text-foreground mt-3 font-medium">
                They <span className="text-primary">communicate</span> with your biology, not override it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="backdrop-blur-xl bg-background/60 border border-border/50 rounded-2xl p-5"
            >
              <h3 className="font-serif text-lg text-foreground mb-3">Common applications:</h3>
              <ul className="grid grid-cols-2 gap-2">
                {applications.map((app, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="backdrop-blur-xl bg-primary/10 border border-primary/30 rounded-2xl p-5"
            >
              <p className="font-serif text-lg italic text-foreground/90">
                "Your body decides how to respond — based on what it needs."
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Peptides;
