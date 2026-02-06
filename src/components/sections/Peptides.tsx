import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Peptides = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] bg-muted"
          >
            {/* Placeholder for editorial image */}
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Peptides
            </p>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
              Biology's{" "}
              <span className="italic">Native</span>{" "}
              Language
            </h2>
            
            <p className="text-muted-foreground leading-normal">
              Peptides are signaling molecules your body already produces. They communicate with your biology — not override it. They work within existing feedback loops, respect regulatory systems, and require receptor availability.
            </p>

            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3">
                <span className="w-6 h-px bg-foreground" />
                <span>Work within existing feedback loops</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-px bg-foreground" />
                <span>Respect regulatory systems</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-px bg-foreground" />
                <span>Require receptor availability</span>
              </li>
            </ul>

            <a href="#" className="inline-block text-sm tracking-wide border-b border-foreground pb-1 hover:opacity-60 transition-opacity mt-6">
              Learn More →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Peptides;
