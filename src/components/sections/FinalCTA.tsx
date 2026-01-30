import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section ref={ref} className="py-16 px-6 md:px-12 md:py-[26px]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Build Your{" "}
            <span className="italic">Ritual</span>
          </h2>
          
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            You don't need more motivation. You need better systems. Let's design yours.
          </p>

          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 py-6 text-sm tracking-widest uppercase" asChild>
            <Link to="/start-here">Get Started</Link>
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default FinalCTA;