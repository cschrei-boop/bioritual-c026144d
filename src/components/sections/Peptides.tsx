import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
    <section ref={ref} className="relative py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.2em] text-primary uppercase mb-4">
            Understanding Peptides
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Peptides: Biology's{" "}
            <span className="italic text-primary">Native Language</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="space-y-12">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Peptides are short chains of amino acids used by the body as signaling molecules.
            </p>
            
            <p className="text-foreground/90">
              Your body already produces thousands of peptides every day to regulate:
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              {regulations.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                  className="flex items-center gap-3 text-foreground/80 text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Distinction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-card/50 border border-border/50 rounded-lg p-8"
          >
            <p className="text-muted-foreground mb-4">
              Unlike supplements (raw materials) or medications (forced outcomes), peptides:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-foreground/90">
                <span className="text-primary">→</span>
                Work within existing biological feedback loops
              </li>
              <li className="flex items-center gap-3 text-foreground/90">
                <span className="text-primary">→</span>
                Require receptor availability
              </li>
              <li className="flex items-center gap-3 text-foreground/90">
                <span className="text-primary">→</span>
                Respect the body's regulatory systems
              </li>
            </ul>
            <p className="text-foreground mt-6 font-medium">
              They don't replace your biology.
              <br />
              They <span className="text-primary">communicate</span> with it.
            </p>
          </motion.div>

          {/* Applications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-xl text-foreground">
              Common peptide applications include:
            </h3>
            <ul className="space-y-3">
              {applications.map((app, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                  {app}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-l-2 border-primary/40 pl-6 py-2"
          >
            <p className="font-serif text-xl italic text-foreground/90">
              Your body decides how to respond — based on what it needs.
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};

export default Peptides;
