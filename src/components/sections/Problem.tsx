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
    <section ref={ref} className="relative py-16 md:py-20 px-6 overflow-hidden">
      {/* Graphic elements */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full border border-cyan/30" />
      <div className="absolute top-16 left-16 w-16 h-16 rounded-full border border-magenta/30" />
      <div className="absolute bottom-20 right-16 w-20 h-20 rounded-full bg-yellow/10" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-start gap-6">
            {/* Graphic accent */}
            <div className="hidden sm:flex flex-col gap-2 pt-2">
              <div className="w-3 h-3 rounded-full bg-cyan" />
              <div className="w-3 h-3 rounded-full bg-magenta" />
              <div className="w-3 h-3 rounded-full bg-yellow" />
            </div>

            <div className="flex-1 space-y-4">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight">
                  You're not broken.
                </h2>
                <p className="font-serif text-xl md:text-2xl text-muted-foreground">
                  You're <span className="text-magenta">overloaded</span>.
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                If you're in your late 30s or 40s, you're starting to feel it:
              </p>

              <ul className="grid grid-cols-2 gap-2">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 text-foreground/80 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                    {problem}
                  </motion.li>
                ))}
              </ul>

              <div className="pt-3 border-t border-border">
                <p className="text-lg font-medium">
                  The problem is <span className="bg-gradient-to-r from-cyan to-magenta bg-clip-text text-transparent">noise</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote with accent */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 flex items-center gap-4 max-w-xl mx-auto"
        >
          <div className="w-1 h-12 bg-gradient-to-b from-cyan via-magenta to-yellow rounded-full" />
          <p className="font-serif text-lg italic text-foreground/90">
            "You don't need more advice. You need better systems."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default Problem;
