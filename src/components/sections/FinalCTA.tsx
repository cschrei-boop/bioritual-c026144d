import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FinalCTAProps {
  headline?: string;
  italicWord?: string;
  description?: string;
  buttonText?: string;
}

const FinalCTA = ({
  headline = "Understand the",
  italicWord = "Framework",
  description = "This page introduces how BioRitual is structured and what it is designed to support.",
  buttonText = "Explore the framework",
}: FinalCTAProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section ref={ref} className="py-16 px-6 md:px-12 md:py-[26px] bg-secondary rounded-3xl pb-[59px]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            {headline}{" "}
            <span className="italic">{italicWord}</span>
          </h2>
          
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            {description}
          </p>

          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 py-6 text-sm tracking-widest uppercase"
            asChild
          >
            <Link to="/start-here">{buttonText}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
