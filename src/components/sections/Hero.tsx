import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles, Calendar, BookOpen } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-24 overflow-hidden">
      {/* Oversized hero image - positioned absolutely */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute top-0 right-0 w-[50%] md:w-[45%] lg:w-[40%] h-full pointer-events-none hidden md:block"
      >
        <div className="relative w-full h-full">
          <img
            src={heroPortrait}
            alt="Wellness portrait"
            className="absolute top-1/2 right-0 -translate-y-1/2 w-full h-[90%] object-cover object-center rounded-l-3xl"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>
      </motion.div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light/50 via-transparent to-transparent pointer-events-none" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-xs tracking-[0.4em] text-muted-foreground uppercase">BIORITUAL</span>
        </motion.div>

        {/* Main headline - oversized */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-sans font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight uppercase text-foreground"
        >
          <span className="block">Tell me</span>
          <span className="block">how you</span>
          <span className="block">
            <span className="italic font-serif text-primary lowercase">really</span>{" "}
            feel
          </span>
        </motion.h1>

        {/* Mobile hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 md:hidden"
        >
          <img
            src={heroPortrait}
            alt="Wellness portrait"
            className="w-full h-64 object-cover object-top rounded-2xl"
          />
        </motion.div>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 max-w-md space-y-4"
        >
          <p className="text-muted-foreground">
            Not what the algorithm says.
            Not what you think you <em>should</em> say.
          </p>
          <p className="text-foreground/90">
            How your body actually feels —
            <span className="font-medium"> energy, focus, appetite, stress, recovery.</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Structured biological optimization for minds in constant motion.
          </p>
        </motion.div>

        {/* Email signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 max-w-md"
        >
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
            Start by telling us where you're at
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-muted/50 border-border/50 focus:border-primary/50 h-11"
              required
            />
            <Button 
              type="submit" 
              className="h-11 px-5 bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-sm"
            >
              Get the signal
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-3">
            No spam. No hype. Just clarity.
          </p>
        </motion.div>

        {/* Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border/20 max-w-2xl"
        >
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
            Or explore at your own pace
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="gap-2 border-border/40 hover:border-primary/50 hover:bg-muted/50 text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              AI Coach
            </Button>
            <Button variant="outline" size="sm" className="gap-2 border-border/40 hover:border-primary/50 hover:bg-muted/50 text-xs">
              <BookOpen className="w-3.5 h-3.5" />
              Peptide Protocols
            </Button>
            <Button variant="outline" size="sm" className="gap-2 border-border/40 hover:border-primary/50 hover:bg-muted/50 text-xs">
              <Calendar className="w-3.5 h-3.5" />
              1-on-1 Coaching
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
