import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";

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
    <section ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={heroPortrait} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content in frosted glass */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-background/60 border border-border/50 rounded-3xl p-8 md:p-10 shadow-lg"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
                  You're not broken.
                </h2>
                <p className="font-serif text-2xl md:text-3xl text-muted-foreground">
                  You're overloaded.
                </p>
              </div>

              {/* Context */}
              <p className="text-muted-foreground leading-relaxed">
                If you're in your late 30s or 40s, chances are you're starting to feel it:
              </p>

              {/* Problem list */}
              <ul className="space-y-2">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 text-foreground/80"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {problem}
                  </motion.li>
                ))}
              </ul>

              {/* Insight */}
              <div className="pt-4 space-y-3 border-t border-border/30">
                <p className="text-foreground">
                  The problem isn't discipline. The problem isn't motivation.
                </p>
                <p className="text-xl font-medium">
                  The problem is <span className="text-primary">noise</span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Placeholder image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img 
                src={heroPortrait} 
                alt="Placeholder for illustration" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Caption overlay */}
            <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-background/50 rounded-2xl px-4 py-3 border border-border/30">
              <p className="text-xs text-muted-foreground italic">
                Illustration placeholder
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 backdrop-blur-xl bg-background/60 border border-border/50 rounded-3xl p-8 max-w-2xl mx-auto text-center"
        >
          <p className="font-serif text-xl italic text-foreground/90">
            "You don't need more advice. You need better systems."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default Problem;
