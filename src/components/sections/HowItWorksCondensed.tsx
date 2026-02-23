import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    num: "1",
    title: "Talk to Jesse™",
    description:
      "Jesse™ — your personal AI coach — reaches out via WhatsApp or iMessage. No forms. Just questions, until the picture is clear.",
  },
  {
    num: "2",
    title: "Your protocol is confirmed",
    description:
      "Based on that conversation, your specific compounds and approach are finalized. Not a fixed stack — a reasoned starting position built around you.",
  },
  {
    num: "3",
    title: "Everything ships",
    description:
      "Peptides, supplies, materials. Directly to you. Nothing to source separately.",
  },
  {
    num: "4",
    title: "Jesse™ stays with you",
    description:
      "Weekly insights. Real-time flags. A private Notion log that builds itself through your conversations over 3 months.",
  },
];

const HowItWorksCondensed = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
            From your first conversation to the end of your protocol — here's what to expect.
          </h2>
        </motion.div>

        <div className="space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="flex gap-6"
            >
              <span className="text-5xl md:text-6xl font-bold text-foreground/10 leading-none shrink-0">
                {step.num}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl mb-2">{step.title}</h3>
                <p className="text-foreground/70 leading-normal">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <Link
            to="/how-it-works"
            className="inline-block text-sm tracking-[0.15em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
          >
            → How it works in full
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksCondensed;
