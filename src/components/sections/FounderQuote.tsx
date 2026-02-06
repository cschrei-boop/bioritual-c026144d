import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface FounderQuoteProps {
  quote?: string;
  attribution?: string;
  children?: ReactNode;
}

const FounderQuote = ({
  quote = "Clear, strategic frameworks that apply to every body type and lifestyle — and that are as simple to follow as they are to understand. BIORITUAL is a lifetime of wellness knowledge, distilled.",
  attribution = "— The BIORITUAL Team",
  children,
}: FounderQuoteProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section ref={ref} className="py-12 px-6 md:px-12 md:py-[24px] rounded-3xl bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {children ? (
            children
          ) : (
            <>
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-normal mb-8 whitespace-pre-line">
                {quote}
              </blockquote>
              {attribution && (
                <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                  {attribution}
                </p>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FounderQuote;
