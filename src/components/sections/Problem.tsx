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
    "Weight management feels harder than it used to",
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
              You're not broken.
              <br />
              <span className="text-muted-foreground">You're overloaded.</span>
            </h2>
          </div>

          {/* Context */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            If you're in your late 30s or 40s, chances are you're starting to feel it:
          </motion.p>

          {/* Problem list */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3"
          >
            {problems.map((problem, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 text-foreground/80"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                {problem}
              </motion.li>
            ))}
          </motion.ul>

          {/* Insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-8 space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              You're not out of shape — but you're not where you want to be.
            </p>
            
            <div className="space-y-2">
              <p className="text-foreground/80">The problem isn't discipline.</p>
              <p className="text-foreground/80">The problem isn't motivation.</p>
            </div>
            
            <p className="text-xl font-medium text-foreground">
              The problem is <span className="text-primary">noise</span>.
            </p>
          </motion.div>

          {/* The noise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              You're told to fix everything at once: Sleep more. Eat better. Lift heavier. 
              Do cardio. Take supplements. Track metrics. Cold plunge. Meditate.
            </p>
            
            <p className="text-muted-foreground mt-4">
              Most of it wasn't designed for your life — or your nervous system.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="border-l-2 border-primary/40 pl-6 py-2 mt-8"
          >
            <p className="font-serif text-xl italic text-foreground/90">
              You don't need more advice. You need better systems.
            </p>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
