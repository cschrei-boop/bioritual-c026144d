import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ThreePillarsCarouselProps {
  subtitle?: string;
  title?: string;
  description1?: string;
  description2?: string;
}

const ThreePillarsCarousel = ({
  subtitle = "The Foundation",
  title = "Areas of Exploration",
  description1 = "Examples of topics people often seek to understand more clearly.",
  description2 = "BioRitual does not provide treatment-based or outcome-driven programs.",
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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            {title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">
            {description1}
          </p>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {description2}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreePillarsCarousel;
