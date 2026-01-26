import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, FlaskConical, Calendar, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-magenta/5" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative element */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan via-magenta to-yellow p-0.5">
            <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
              <span className="font-serif text-2xl">B</span>
            </div>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-3">
            Build Your <span className="italic bg-gradient-to-r from-cyan via-magenta to-yellow bg-clip-text text-transparent">BIORITUAL</span>
          </h2>
          
          <p className="text-sm text-muted-foreground mb-6">
            You don't need more motivation. You need better systems.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button className="gap-2 bg-primary hover:bg-primary/90 h-10 px-5 rounded-xl text-sm">
              <Sparkles className="w-4 h-4" />
              AI Coach
              <ArrowRight className="w-3 h-3" />
            </Button>
            <Button variant="outline" className="gap-2 h-10 px-5 rounded-xl text-sm hover:border-magenta hover:text-magenta">
              <FlaskConical className="w-4 h-4" />
              Protocols
            </Button>
            <Button variant="outline" className="gap-2 h-10 px-5 rounded-xl text-sm hover:border-yellow hover:text-yellow">
              <Calendar className="w-4 h-4" />
              Consult
            </Button>
          </div>

          <p className="font-serif text-lg italic text-muted-foreground mt-6">
            Let's design your ritual.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
