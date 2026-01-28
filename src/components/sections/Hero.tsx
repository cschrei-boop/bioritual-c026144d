import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={heroPortrait}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content overlay - left aligned */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-xl">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase mb-6"
          >
            Structured Biological Optimization
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
          >
            Tell me how you{" "}
            <span className="italic">really</span>{" "}
            feel
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground mb-8 max-w-md"
          >
            Not what the algorithm says. How your body actually feels — energy, focus, appetite, stress, recovery.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-6 text-sm tracking-widest uppercase"
              asChild
            >
              <Link to="/start-here">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
