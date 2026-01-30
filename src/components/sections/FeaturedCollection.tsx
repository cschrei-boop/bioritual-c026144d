import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import featuredCollection from "@/assets/featured-collection.jpg";
const FeaturedCollection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section ref={ref} className="py-10 md:py-16 px-6 md:px-12 pt-[24px] pb-[24px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }} className="order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Meet The Peptide Collection
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Five intentional formulas designed to optimize recovery, enhance cognition, and support overall biological health. Each protocol is backed by research and designed for real-world results.
            </p>
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 text-sm tracking-widest uppercase" asChild>
              <Link to="/protocols">Learn More</Link>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="order-1 md:order-2">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={featuredCollection} alt="Peptide Collection" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default FeaturedCollection;