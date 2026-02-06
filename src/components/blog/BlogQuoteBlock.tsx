import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface BlogQuoteBlockProps {
  /** The item number displayed */
  number: number;
  /** The quoted text */
  quote: string;
  /** Source/attribution line */
  attribution: string;
  /** The explanatory paragraph */
  explanation: string;
  /** Customizable label prefix (defaults to "Myth") */
  labelPrefix?: string;
}

/**
 * Reusable numbered quote block with attribution and explanation.
 * Works for myths, questions, facts, testimonials, etc.
 * Uses its own scroll-triggered animation with a tighter margin.
 */
const BlogQuoteBlock = ({
  number,
  quote,
  attribution,
  explanation,
  labelPrefix = "Myth",
}: BlogQuoteBlockProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="border-b border-border last:border-b-0 py-[24px]"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
        {labelPrefix} #{number}
      </p>
      <blockquote className="font-serif text-xl md:text-2xl leading-normal mb-3">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <p className="text-sm text-muted-foreground italic mb-6">
        — {attribution}
      </p>
      <p className="text-muted-foreground leading-normal">{explanation}</p>
    </motion.div>
  );
};

export default BlogQuoteBlock;
