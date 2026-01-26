import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, FlaskConical, Calendar, ArrowRight } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={heroPortrait} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background" />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-accent/15 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-background/70 border border-border/50 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Build Your <span className="italic text-primary">BIORITUAL</span>
          </h2>

          <div className="space-y-2 mb-8">
            <p className="text-lg text-muted-foreground">
              You don't need more motivation.
            </p>
            <p className="text-foreground font-medium text-xl">
              You need better systems.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-8">
              Start where it feels easiest:
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button className="gap-2 bg-primary hover:bg-primary/90 h-12 px-6 rounded-xl">
                <Sparkles className="w-4 h-4" />
                Start the AI Coach
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="gap-2 border-border/50 hover:border-primary/50 h-12 px-6 rounded-xl">
                <FlaskConical className="w-4 h-4" />
                Explore Protocols
              </Button>
              <Button variant="outline" className="gap-2 border-border/50 hover:border-primary/50 h-12 px-6 rounded-xl">
                <Calendar className="w-4 h-4" />
                Book Consultation
              </Button>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-xl italic text-muted-foreground pt-8 mt-8 border-t border-border/30"
          >
            Let's design your ritual.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
