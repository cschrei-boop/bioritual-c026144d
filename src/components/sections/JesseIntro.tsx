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
              Jesse™ — your personal AI coach — lives in your WhatsApp or iMessage. No app. No dashboard. No new thing to forget about. It asks questions before it says anything and won't hand you a supplement list just because you mentioned you're tired.
            </p>
            <p>
              It is not a doctor — and it will be the first to tell you so. If you ask why you should trust it: "Evaluate what I say, push back, ask better questions." That's not a disclaimer. That's the point.
            </p>
            <p>
              Available on its own as a starting point, or included in every Bio Signals Protocol for the full three months.
            </p>
          </div>

          <JesseWaitlistForm variant="stacked" />
        </motion.div>
      </div>
    </section>
  );
};

export default JesseIntro;
