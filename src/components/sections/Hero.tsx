import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles, Calendar, BookOpen } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light/50 via-transparent to-transparent pointer-events-none" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm tracking-[0.4em] text-muted-foreground uppercase">BIORITUAL</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8"
        >
          Tell me how you{" "}
          <span className="italic text-primary">really</span> feel.
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 mb-8"
        >
          <p className="text-muted-foreground text-lg">
            Not what the algorithm says.
            <br />
            Not what you think you <em>should</em> say.
          </p>
          <p className="text-foreground/90">
            How your body actually feels —
            <br />
            <span className="font-medium">energy, focus, appetite, stress, recovery.</span>
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground mb-12"
        >
          Structured biological optimization for minds in constant motion.
        </motion.p>

        {/* Email signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Start by telling us where you're at
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-muted/50 border-border/50 focus:border-primary/50 h-12"
              required
            />
            <Button 
              type="submit" 
              className="h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              Get the BIORITUAL signal
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
          className="pt-8 border-t border-border/30"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Or explore at your own pace:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="gap-2 border-border/50 hover:border-primary/50 hover:bg-muted/50">
              <Sparkles className="w-4 h-4" />
              Start with AI Coach
            </Button>
            <Button variant="outline" className="gap-2 border-border/50 hover:border-primary/50 hover:bg-muted/50">
              <BookOpen className="w-4 h-4" />
              Explore Peptide Protocols
            </Button>
            <Button variant="outline" className="gap-2 border-border/50 hover:border-primary/50 hover:bg-muted/50">
              <Calendar className="w-4 h-4" />
              Book 1-on-1 Optimization
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
