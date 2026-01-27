import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, BookOpen } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
const Hero = () => {
  return <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 overflow-hidden bg-transparent">
      {/* Background glow */}
      <div className="absolute top-1/2 right-16 w-64 h-64 rounded-full bg-gradient-to-br from-cyan/10 via-magenta/10 to-yellow/10 blur-3xl" />
      
      <div className="relative z-10 max-w-5xl bg-background/70 backdrop-blur-md rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-stretch">
        {/* Text Content */}
        <div className="flex-1">
          {/* Main headline */}
          <motion.h1 initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 0.1
        }} className="font-sans font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tighter uppercase text-foreground">
            <span className="block">Tell me</span>
            <span className="block">how you</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl">
              <span className="italic font-serif font-normal bg-gradient-to-r from-cyan via-magenta to-yellow bg-clip-text text-transparent lowercase">really</span>{" "}
              feel
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="mt-8 max-w-md space-y-2">
            <p className="text-foreground/80">
              Not what the algorithm says. Not what you think you <em>should</em> say.
            </p>
            <p className="text-foreground/80">
              How your body actually feels — energy, focus, appetite, stress, recovery.
            </p>
            <p className="text-foreground/80">At BioRitual, we specialize in STRUCTURED BIOLOGICAL OPTIMIZATION for minds in constant motion.</p>
          </motion.div>

          {/* Secondary CTAs */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="mt-10 pt-6 border-t border-border max-w-2xl">
            <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider font-bold">WE WORK AT YOUR PACE</p>
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

        {/* Hero Portrait Image */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1.2,
        delay: 0.2
      }} className="w-full md:w-64 lg:w-80 h-64 md:h-auto rounded-2xl overflow-hidden flex-shrink-0">
          <img src={heroPortrait} alt="Serene portrait" className="w-full h-full object-cover object-center" />
        </motion.div>
      </div>
    </section>;
};
export default Hero;