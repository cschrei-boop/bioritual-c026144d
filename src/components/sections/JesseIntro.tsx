import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import JesseWaitlistForm from "@/components/sections/JesseWaitlistForm";

const JesseIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6 md:px-12 bg-secondary rounded-3xl">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
            Meet Jesse™. Your BS filter for the wellness industry.
          </h2>

          <div className="space-y-4 text-foreground/80 leading-normal mb-10">
            <p>
              Jesse™ — your personal AI coach — lives in your WhatsApp or iMessage. No app. No dashboard. No new thing to forget about.
            </p>
            <p>
              Jesse™ asks questions before it says anything. It won't hand you a supplement list because you mentioned you're tired. It'll ask what tired means to you, what you've already tried, and whether you've actually stuck with any of it.
            </p>
            <p>
              It is not a doctor. It will be the first to tell you so. If you ask why you should trust it, the answer will be something like: "You probably shouldn't, automatically. Evaluate what I say, push back, ask better questions."
            </p>
            <p>That's not a disclaimer. That's the point.</p>
            <p>
              Jesse™ is available on its own as a starting point — no protocol, no peptides, just clarity. It's also included in every Bio Signals Protocol for the full three months.
            </p>
          </div>

          <JesseWaitlistForm variant="stacked" />
        </motion.div>
      </div>
    </section>
  );
};

export default JesseIntro;
