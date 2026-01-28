import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  { title: "Metabolic", count: "12 protocols" },
  { title: "Cognitive", count: "8 protocols" },
  { title: "Recovery", count: "10 protocols" },
  { title: "Longevity", count: "6 protocols" },
  { title: "Performance", count: "9 protocols" },
];

const Categories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6 md:px-12 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map((cat, index) => (
            <motion.a
              key={cat.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group text-center px-6 py-4 hover:bg-secondary transition-colors"
            >
              <p className="text-lg md:text-xl tracking-wide group-hover:opacity-60 transition-opacity">
                {cat.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {cat.count}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
