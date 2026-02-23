import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const JourneySnippet = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
            The way you live is the story you are telling.
          </h2>

          <div className="space-y-4 text-foreground/80 leading-normal mb-10">
            <p>
              Most health programs treat the body as a problem to solve. We treat it as a system to understand — and the person living in it as someone capable of authoring their own story.
            </p>
            <p>
              The hero's journey starts at home. It ends there too. What changes is everything in between — and who you are when you return.
            </p>
            <p>
              Health works the same way. Not a destination. Not a transformation. A continuous journey, measured in three-month cycles, that gets more honest and more effective each time you come back from a break.
            </p>
            <p>Because you will break. That's not failure. That's the journey.</p>
          </div>

          <Link
            to="/the-journey"
            className="inline-block text-sm tracking-[0.15em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
          >
            → Read more about our approach
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySnippet;
