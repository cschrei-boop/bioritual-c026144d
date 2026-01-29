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
        <div className="max-w-2xl">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase mb-6"
          >
            Simple. Structured. Personalized Wellness.
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6"
          >
            Your body isn't broken.
          </motion.h1>

          {/* Supporting copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground mb-8 max-w-xl space-y-4"
          >
            <p>
              It's responding to signals — stress, age, sleep, nutrition, training.
            </p>
            <p>
              We design personalized protocols that align those signals by combining peptides, supplements, and nutrition into one clear, adaptive system — built for your biology, goals, and lifestyle.
            </p>
            <p className="font-medium text-foreground">
              No guesswork. No trends. Just structure.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-6 text-sm tracking-wider"
              asChild
            >
              <Link to="/start-here">→ Start with a protocol designed for you</Link>
            </Button>
          </motion.div>

          {/* Sub-hero clarifier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-foreground/20 max-w-lg"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              Most people don't need more supplements.<br />
              They need better signals — and a plan that tells their body what to do next.
            </p>
            <p className="text-foreground text-sm mt-3 font-medium">
              That's where we come in.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
