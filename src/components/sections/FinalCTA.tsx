import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, FlaskConical, Calendar, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 bg-muted/30">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Build Your <span className="italic text-primary">BIORITUAL</span>
          </h2>

          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              You don't need more motivation.
            </p>
            <p className="text-foreground font-medium">
              You need better systems.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-4"
          >
            <p className="text-muted-foreground mb-8">
              Start where it feels easiest:
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button className="gap-2 bg-primary hover:bg-primary/90 h-12 px-6">
                <Sparkles className="w-4 h-4" />
                Start the AI Coach
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="gap-2 border-border/50 hover:border-primary/50 h-12 px-6">
                <FlaskConical className="w-4 h-4" />
                Explore Peptide Protocols
              </Button>
              <Button variant="outline" className="gap-2 border-border/50 hover:border-primary/50 h-12 px-6">
                <Calendar className="w-4 h-4" />
                Book a 1-on-1 Consultation
              </Button>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-xl italic text-muted-foreground pt-8"
          >
            Let's design your ritual.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
