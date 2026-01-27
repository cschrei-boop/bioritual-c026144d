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
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              <motion.div whileHover={{
              scale: 1.05
            }} transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }} className="flex-1 min-w-[200px] bg-background/70 backdrop-blur-md border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_4px_12px_rgba(0,0,0,0.1)] rounded-xl px-5 py-4 flex flex-col items-center justify-center gap-2 hover:border-cyan/60 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_24px_rgba(0,200,200,0.25)] transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-cyan" />
                  <span className="text-sm font-black uppercase tracking-wider text-foreground">AI CONCIERGE</span>
                </div>
                <p className="text-xs text-muted-foreground text-center">A no-BS guide to peptides, nutrition, supplements and more.</p>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }} className="flex-1 min-w-[200px] bg-background/70 backdrop-blur-md border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_4px_12px_rgba(0,0,0,0.1)] rounded-xl px-5 py-4 flex flex-col items-center justify-center gap-2 hover:border-magenta/60 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_24px_rgba(255,0,150,0.25)] transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-magenta" />
                  <span className="text-sm font-black uppercase tracking-wider text-foreground">1:1 PROTOCOL DESIGN</span>
                </div>
                <p className="text-xs text-muted-foreground text-center">Get your own Wiki and tracking.</p>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }} className="flex-1 min-w-[200px] bg-background/70 backdrop-blur-md border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_4px_12px_rgba(0,0,0,0.1)] rounded-xl px-5 py-4 flex flex-col items-center justify-center gap-2 hover:border-yellow/60 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_24px_rgba(255,200,0,0.25)] transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-yellow" />
                  <span className="text-sm font-black uppercase tracking-wider text-foreground">COACHING SPRINT</span>
                </div>
                <p className="text-xs text-muted-foreground text-center">90 day sprints with weekly guidance.</p>
              </motion.div>
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