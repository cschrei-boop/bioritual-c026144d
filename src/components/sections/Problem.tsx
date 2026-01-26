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
    <section ref={ref} className="relative py-16 md:py-20 px-6 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text content in frosted glass */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-background/60 border border-border/50 rounded-3xl p-6 md:p-8"
          >
            <div className="space-y-4">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight">
                  You're not broken.
                </h2>
                <p className="font-serif text-xl md:text-2xl text-muted-foreground">
                  You're overloaded.
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                If you're in your late 30s or 40s, chances are you're starting to feel it:
              </p>

              <ul className="space-y-1.5">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 text-foreground/80 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {problem}
                  </motion.li>
                ))}
              </ul>

              <div className="pt-3 space-y-2 border-t border-border/30">
                <p className="text-sm text-foreground">
                  The problem isn't discipline. The problem isn't motivation.
                </p>
                <p className="text-lg font-medium">
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
            <div className="absolute bottom-3 left-3 right-3 backdrop-blur-md bg-background/50 rounded-xl px-3 py-2 border border-border/30">
              <p className="text-xs text-muted-foreground italic">Illustration placeholder</p>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 backdrop-blur-xl bg-background/60 border border-border/50 rounded-2xl p-6 max-w-xl mx-auto text-center"
        >
          <p className="font-serif text-lg italic text-foreground/90">
            "You don't need more advice. You need better systems."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default Problem;
