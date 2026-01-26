import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const applications = [
  "Metabolic optimization and appetite regulation (GLP-1–based peptides)",
  "Gut, tendon, and tissue repair (BPC-157, TB-500)",
  "Cognitive clarity and stress resilience (Semax, Selank)",
  "Longevity and cellular signaling (Epithalon, GHK-Cu)",
];

const regulations = [
  "Appetite and metabolism",
  "Tissue repair and inflammation",
  "Cognitive function and stress response",
  "Cellular repair and longevity pathways",
];

const Peptides = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square rounded-3xl overflow-hidden sticky top-24">
              <img 
                src={heroPortrait} 
                alt="Placeholder for illustration" 
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-background/50 rounded-2xl px-4 py-3 border border-border/30">
                <p className="text-xs text-muted-foreground italic">
                  Illustration placeholder
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content in frosted glass */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-xl bg-background/60 border border-border/50 rounded-3xl p-8"
            >
              <p className="text-sm tracking-[0.2em] text-primary uppercase mb-4 font-medium">
                Understanding Peptides
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">
                Peptides: Biology's{" "}
                <span className="italic text-primary">Native Language</span>
              </h2>
            </motion.div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="backdrop-blur-xl bg-background/60 border border-border/50 rounded-3xl p-8 space-y-4"
            >
              <p className="text-muted-foreground leading-relaxed">
                Peptides are short chains of amino acids used by the body as signaling molecules.
                Your body already produces thousands of peptides every day to regulate:
              </p>

              <ul className="grid sm:grid-cols-2 gap-2">
                {regulations.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-foreground/80 text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Distinction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="backdrop-blur-xl bg-background/60 border border-border/50 rounded-3xl p-8"
            >
              <p className="text-muted-foreground mb-4">
                Unlike supplements or medications, peptides:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-foreground/90">
                  <span className="text-primary font-bold">→</span>
                  Work within existing biological feedback loops
                </li>
                <li className="flex items-center gap-3 text-foreground/90">
                  <span className="text-primary font-bold">→</span>
                  Require receptor availability
                </li>
                <li className="flex items-center gap-3 text-foreground/90">
                  <span className="text-primary font-bold">→</span>
                  Respect the body's regulatory systems
                </li>
              </ul>
              <p className="text-foreground mt-6 font-medium">
                They don't replace your biology.
                They <span className="text-primary">communicate</span> with it.
              </p>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="backdrop-blur-xl bg-background/60 border border-border/50 rounded-3xl p-8 space-y-4"
            >
              <h3 className="font-serif text-xl text-foreground">
                Common peptide applications:
              </h3>
              <ul className="space-y-2">
                {applications.map((app, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="backdrop-blur-xl bg-primary/10 border border-primary/30 rounded-3xl p-8"
            >
              <p className="font-serif text-xl italic text-foreground/90">
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
