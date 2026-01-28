import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Adapt", description: "Your body begins to recognize new signals" },
  { num: "02", title: "Regulate", description: "Systems stabilize and optimize" },
  { num: "03", title: "Reveal", description: "Real, measurable results emerge" },
];

const WhyNinetyDays = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Timeline
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Why 90 Days?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-16">
            Biology responds to sustained signals. Ninety days allows adaptation, regulation, and real results.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-border" />
              )}
              
              <div className="relative z-10 bg-background">
                <p className="text-4xl md:text-5xl font-serif text-muted-foreground/30 mb-4">
                  {step.num}
                </p>
                <h3 className="text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 font-serif text-xl italic"
        >
          It's about building rituals.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyNinetyDays;
