import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Use 'section' or 'div' as the wrapper element */
  as?: "section" | "div";
}

/**
 * Reusable animated section that fades in and slides up on scroll.
 * Uses framer-motion's useInView for scroll-triggered animations.
 */
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  as = "section",
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const Component = as === "section" ? motion.section : motion.div;

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
