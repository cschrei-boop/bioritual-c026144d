import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    "Energy isn't consistent",
    "Focus comes and goes",
    "Recovery takes longer",
    "Weight management feels harder",
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Main message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              The Problem
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              You're not broken.{" "}
              <span className="italic">You're overloaded.</span>
            </h2>
            <p className="text-muted-foreground">
              If you're in your late 30s or 40s, you're starting to feel it.
            </p>
          </motion.div>

          {/* Right - Problem list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 py-4 border-b border-border"
                >
                  <span className="text-muted-foreground text-sm">0{index + 1}</span>
                  <span className="text-lg">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-24 text-center max-w-2xl mx-auto"
        >
          <p className="font-serif text-2xl md:text-3xl italic">
            "You don't need more advice. You need better systems."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default Problem;
