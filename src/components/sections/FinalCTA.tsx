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
    <section ref={ref} className="relative py-16 md:py-20 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroPortrait} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background" />
      </div>

      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-primary/15 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[200px] h-[200px] bg-accent/15 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-background/70 border border-border/50 rounded-3xl p-6 md:p-8 text-center"
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4">
            Build Your <span className="italic text-primary">BIORITUAL</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            You don't need more motivation. <span className="text-foreground font-medium">You need better systems.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Button className="gap-2 bg-primary hover:bg-primary/90 h-10 px-5 rounded-xl text-sm">
              <Sparkles className="w-4 h-4" />
              AI Coach
              <ArrowRight className="w-3 h-3" />
            </Button>
            <Button variant="outline" className="gap-2 h-10 px-5 rounded-xl text-sm">
              <FlaskConical className="w-4 h-4" />
              Protocols
            </Button>
            <Button variant="outline" className="gap-2 h-10 px-5 rounded-xl text-sm">
              <Calendar className="w-4 h-4" />
              Consult
            </Button>
          </div>

          <p className="font-serif text-lg italic text-muted-foreground">
            Let's design your ritual.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
