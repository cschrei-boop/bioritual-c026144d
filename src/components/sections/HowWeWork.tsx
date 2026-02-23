import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "1",
    title: "You talk. Jesse™ listens.",
    body: "After purchase, Jesse™ — your personal AI coach — reaches out via WhatsApp or iMessage to start your intake. No forms. Jesse™ asks questions until it has a clear picture of your history, your goal, and your starting point.",
  },
  {
    num: "2",
    title: "Your protocol is confirmed.",
    body: "Based on that conversation, your specific protocol is finalized. The compounds, the approach, the sequencing. Not a fixed stack pulled off a shelf — a reasoned starting position built around your situation.",
  },
  {
    num: "3",
    title: "Everything ships to you.",
    body: "The peptides, the supplies, and the materials you need arrive directly. You don't source anything separately.",
  },
  {
    num: "4",
    title: "Jesse™ tracks as you go.",
    body: "Jesse™ — your personal AI coach — stays with you for the full 3 months. Weekly insights. Real-time flags when something shifts. A private Notion log that builds itself through your conversations — you don't fill out anything.",
  },
  {
    num: "5",
    title: "You understand what's happening and why.",
    body: "Your private client wiki documents every element of your protocol. What it does, why it's there, what you're watching for.",
  },
];

const HowWeWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl">How we work</h2>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="flex gap-6"
            >
              <span className="text-4xl md:text-5xl font-bold text-foreground/10 leading-none shrink-0">
                {step.num}
              </span>
              <div>
                <h3 className="text-lg md:text-xl mb-2 font-medium">{step.title}</h3>
                <p className="text-foreground/70 leading-normal">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
