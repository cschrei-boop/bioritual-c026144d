import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

interface ThreePillarsCarouselProps {
  subtitle?: string;
  title?: string;
  description1?: string;
  description2?: string;
}

const ThreePillarsCarousel = ({
  subtitle = "The Foundation",
  title = "A grown-up word about peptides and GLP-1s.",
  description1 = "Yes, we work with peptides. Yes, we discuss GLP-1 medications. No, they are not magic. And no, they are not moral failures.\n\nThey are biological signals. Used conservatively, sequenced properly, and supported with the right habits, they can help regulate appetite, improve metabolic flexibility, support recovery, and make long-term change possible.",
  description2 = "The problem is not the tool. The problem is pretending tools exist outside of context.",
}: ThreePillarsCarouselProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section ref={ref} className="py-16 px-6 md:px-12 bg-secondary md:py-[24px] rounded-3xl">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          {subtitle && (
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            {title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-muted-foreground mb-4 leading-normal whitespace-pre-line">
            {description1}
          </p>
          <p className="text-muted-foreground leading-normal whitespace-pre-line mb-8">
            {description2}
          </p>
          <Link
            to="/truth-about-peptides"
            className="inline-block text-sm tracking-[0.15em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
          >
            → Read: The truth about peptides
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreePillarsCarousel;
