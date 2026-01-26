import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const applications = [
  { name: "Metabolic", peptides: "GLP-1", color: "cyan" },
  { name: "Tissue repair", peptides: "BPC-157", color: "magenta" },
  { name: "Cognitive", peptides: "Semax", color: "yellow" },
  { name: "Longevity", peptides: "Epithalon", color: "cyan" },
];

const Peptides = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 px-6 overflow-hidden">
      {/* DNA-like graphic */}
      <svg className="absolute right-0 top-0 h-full w-32 opacity-10" viewBox="0 0 50 200">
        <path d="M25 0 Q40 50 25 100 Q10 150 25 200" fill="none" stroke="hsl(185 100% 45%)" strokeWidth="1" />
        <path d="M25 0 Q10 50 25 100 Q40 150 25 200" fill="none" stroke="hsl(320 100% 50%)" strokeWidth="1" />
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan to-magenta" />
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase font-medium">
                Peptides
              </p>
            </div>
            
            <h2 className="font-serif text-2xl md:text-3xl">
              Biology's <span className="italic text-cyan">Native</span> Language
            </h2>
            
            <p className="text-sm text-muted-foreground">
              Peptides are signaling molecules your body already produces. They communicate with your biology — not override it.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-cyan">→</span>
                <span>Work within existing feedback loops</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-magenta">→</span>
                <span>Respect regulatory systems</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow">→</span>
                <span>Require receptor availability</span>
              </li>
            </ul>
          </motion.div>

          {/* Right - Applications grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            {applications.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`bg-card border border-border rounded-xl p-4 hover:border-${app.color}/50 transition-colors`}
              >
                <div className={`w-2 h-2 rounded-full bg-${app.color} mb-2`} />
                <p className="font-medium text-sm">{app.name}</p>
                <p className="text-xs text-muted-foreground">{app.peptides}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-cyan/10 via-magenta/10 to-yellow/10 rounded-2xl p-5 text-center"
        >
          <p className="font-serif text-lg italic">
            "Your body decides how to respond — based on what it needs."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Peptides;
