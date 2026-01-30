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
              The Truth About Peptides
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Peptides are everywhere in longevity conversations—but clarity is rare. Here's what they actually are, how they work, and what you should know.
            </p>
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 text-sm tracking-widest uppercase" asChild>
              <Link to="/truth-about-peptides">Read Article</Link>
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