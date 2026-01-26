import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles, Calendar, BookOpen } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 overflow-hidden">
      {/* Graphic elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan to-primary opacity-20 blur-2xl" />
      <div className="absolute top-40 right-32 w-20 h-20 rounded-full bg-magenta opacity-15 blur-xl" />
      <div className="absolute bottom-32 right-20 w-24 h-24 rounded-full bg-yellow opacity-20 blur-xl" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-cyan" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-magenta" />
      <div className="absolute bottom-1/3 right-1/5 w-2 h-2 rounded-full bg-yellow" />
      
      {/* Decorative lines */}
      <svg className="absolute top-32 right-16 w-48 h-48 opacity-30" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(185 100% 45%)" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="hsl(320 100% 50%)" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="hsl(45 100% 55%)" strokeWidth="0.5" />
      </svg>
      
      <div className="relative z-10 max-w-4xl">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan via-magenta to-yellow" />
          <span className="text-xs tracking-[0.4em] text-muted-foreground uppercase">BIORITUAL</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-sans font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight uppercase text-foreground"
        >
          <span className="block">Tell me</span>
          <span className="block">how you</span>
          <span className="block">
            <span className="italic font-serif bg-gradient-to-r from-cyan via-magenta to-yellow bg-clip-text text-transparent lowercase">really</span>{" "}
            feel
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-md space-y-2"
        >
          <p className="text-muted-foreground">
            Not what the algorithm says. Not what you think you <em>should</em> say.
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
          className="mt-8 max-w-md"
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
              className="flex-1 bg-secondary/50 border-border focus:border-primary h-11"
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
          className="mt-10 pt-6 border-t border-border max-w-2xl"
        >
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
            Or explore at your own pace
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="gap-2 hover:border-cyan hover:text-cyan text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              AI Coach
            </Button>
            <Button variant="outline" size="sm" className="gap-2 hover:border-magenta hover:text-magenta text-xs">
              <BookOpen className="w-3.5 h-3.5" />
              Peptide Protocols
            </Button>
            <Button variant="outline" size="sm" className="gap-2 hover:border-yellow hover:text-yellow text-xs">
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
