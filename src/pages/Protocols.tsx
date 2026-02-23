import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ShopByGoal from "@/components/sections/ShopByGoal";
import VideoHero from "@/components/sections/VideoHero";
const protocols = [{
  title: "Weight Loss + Metabolic Health",
  href: "/products/bio-signals-weight-loss-metabolic-health",
  description: "Support metabolic signaling and sustainable weight management"
}, {
  title: "Energy",
  href: "/products/bio-signals-energy",
  description: "Optimize energy production and reduce fatigue patterns"
}, {
  title: "Performance + Recovery",
  href: "/products/bio-signals-performance-recovery",
  description: "Enhance adaptation and protect recovery capacity"
}, {
  title: "Hair + Skin",
  href: "/products/bio-signals-hair-skin",
  description: "Support tissue quality and visible health indicators"
}, {
  title: "Cognition + Brain Health",
  href: "/products/bio-signals-cognition-brain-health",
  description: "Promote mental clarity and long-term brain function"
}, {
  title: "Longevity",
  href: "/products/bio-signals-longevity",
  description: "Preserve resilience and functional capacity over time"
}];
const bioSignalsIs = ["Educational", "Structured", "Feedback-driven", "Time-bound", "Personalized through tracking"];
const bioSignalsIsNot = ["A supplement store", "A shortcut", "A medical clinic", "A one-size-fits-all plan"];
const whoIsFor = ["Want clarity instead of hype", "Prefer systems over hacks", "Care about long-term outcomes", "Want to understand why something works, not just that it does"];
const protocolIncludes = ["A structured optimization protocol", "A private client wiki", "Tracking and accountability tools", "Educational context and explanations", "Protocol-specific materials coordinated as part of the experience"];
const Protocols = () => {
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 20
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    },
    transition: {
      duration: 0.6
    }
  };
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <VideoHero tagline="Bio Signals Protocols" title="Science-backed optimization, explained in plain language." subtitle="Structured 3-month systems that combine education, tracking, and accountability for lasting results." />

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        {/* What Are Bio Signals */}
        <motion.section className="mb-16 md:mb-24" {...fadeIn}>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6">What Are Bio Signals?</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Bio signals are inputs that guide the body through feedback, rather than forcing outcomes.
            </p>
            <p>
              They exist on the same continuum as sleep, training, nutrition, light exposure, and recovery — signals that influence how the body allocates energy, repairs tissue, and adapts over time.
            </p>
            <div className="py-4 space-y-2 text-foreground/70 italic">
              <p>Some bio signals are behavioral.</p>
              <p>Some are environmental.</p>
              <p>Some are molecular.</p>
            </div>
          </div>
        </motion.section>

        {/* What About Peptides */}
        <motion.section className="mb-16 md:mb-24 bg-muted/30 rounded-lg p-8" {...fadeIn}>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6">"What about peptides?"</h2>
          <p className="text-foreground/80 mb-6">You may have heard names like:</p>
          <ul className="space-y-2 mb-6 text-foreground/80">
            <li className="font-medium">Semaglutide</li>
            <li className="font-medium">NAD+</li>
            <li className="font-medium">BPC-157</li>
            <li className="font-medium">CJC-1295</li>
          </ul>
          <div className="space-y-2 text-foreground/60 italic mb-6">
            <p>Are these supplements?</p>
            <p>Are they drugs?</p>
            <p>Are they safe?</p>
            <p>Do they work?</p>
          </div>
          <p className="text-foreground/80 mb-4">
            Most people encounter these terms without context, which leads to confusion, misuse, or unrealistic expectations.
          </p>
          <p className="text-foreground font-medium">
            That's where Bio Signals comes in.
          </p>
        </motion.section>

        {/* What We Actually Do */}
        <motion.section className="mb-16 md:mb-24" {...fadeIn}>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6">What We Actually Do</h2>
          <p className="text-foreground/80 mb-4">We develop science-backed protocols that combine:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {["Education", "Structure", "Tracking", "Accountability"].map(item => <div key={item} className="text-center py-4 border border-border rounded-lg">
                <span className="font-medium text-foreground">{item}</span>
              </div>)}
          </div>
          <p className="text-foreground/80 mb-6">
            We explain complex concepts — including peptides — in plain language, grounded in biology and real-world feedback.
          </p>
          <div className="border-l-2 border-foreground/20 pl-6 space-y-2 text-foreground/70 italic">
            <p>You are not buying molecules.</p>
            <p>You are enrolling in a guided protocol that helps you understand what signals matter, how to apply them responsibly, and how to observe your response over time.</p>
          </div>
        </motion.section>

        {/* What Bio Signals Is (and Is Not) */}
        <motion.section className="mb-16 md:mb-24" {...fadeIn}>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-8">What Bio Signals Is (and Is Not)</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Bio Signals is:</h3>
              <ul className="space-y-3">
                {bioSignalsIs.map(item => <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Bio Signals is not:</h3>
              <ul className="space-y-3">
                {bioSignalsIsNot.map(item => <li key={item} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-foreground/40 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/60">{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border text-sm text-foreground/60 italic space-y-1">
            <p>No substances are sold individually.</p>
            <p>No medical claims are made.</p>
          </div>
        </motion.section>

        {/* The Bio Signals Protocols */}
        <motion.section className="mb-16 md:mb-24" {...fadeIn}>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-4">The Bio Signals Protocols</h2>
          <p className="text-foreground/80 mb-4">
            Each protocol is a 3-month system, priced at <span className="font-semibold text-foreground">$699</span>, and includes:
          </p>
          <ul className="space-y-2 mb-8">
            {protocolIncludes.map(item => <li key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </li>)}
          </ul>
          
          <p className="text-foreground font-medium mb-6">Choose the protocol that matches your current priority:</p>
          
          <div className="grid gap-4">
            {protocols.map(protocol => <Link key={protocol.href} to={protocol.href} className="group flex items-center justify-between p-6 border border-border rounded-lg hover:border-foreground/30 transition-all text-destructive-foreground bg-[#bfd0fd]">
                <div>
                  <h3 className="font-playfair font-semibold mb-1 text-primary-foreground text-2xl">{protocol.title}</h3>
                  <p className="text-sm text-primary-foreground">{protocol.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>)}
          </div>
          
          <p className="text-sm text-foreground/60 italic mt-6 text-center">
            Each protocol stands alone, but all share the same underlying framework.
          </p>
        </motion.section>

        {/* Why Protocols, Not Products? */}
        <motion.section className="mb-16 md:mb-24 bg-muted/30 rounded-lg p-8" {...fadeIn}>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6">Why Protocols, Not Products?</h2>
          <p className="text-foreground/80 mb-6">Because outcomes don't come from substances alone.</p>
          <p className="text-foreground/80 mb-4">They come from:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {["Context", "Consistency", "Feedback", "Adjustment"].map(item => <div key={item} className="text-center py-4 border border-border bg-background rounded-lg">
                <span className="font-medium text-foreground">{item}</span>
              </div>)}
          </div>
          <p className="text-foreground/80">
            Bio Signals protocols are designed to help you understand the signal, apply it responsibly, and evaluate your response — so you're not guessing, stacking, or chasing trends.
          </p>
        </motion.section>

        {/* Who This Is For */}
        <motion.section className="mb-16 md:mb-24" {...fadeIn}>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6">Who This Is For</h2>
          <p className="text-foreground/80 mb-4">Bio Signals is for people who:</p>
          <ul className="space-y-3 mb-6">
            {whoIsFor.map(item => <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </li>)}
          </ul>
          <p className="text-foreground/60 italic">
            If you're looking for a quick fix or a product checkout, this isn't it.
          </p>
        </motion.section>

        {/* Final Statement */}
        <motion.section className="text-center py-12 border-t border-border" {...fadeIn}>
          <h2 className="font-playfair text-xl md:text-2xl font-bold text-foreground mb-4">
            Bio Signals is about understanding biology, not overriding it.
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            We translate science into usable protocols — and guide you through them with structure, tracking, and plain-language explanation.
          </p>
        </motion.section>

        <ShopByGoal />
      </main>

      <Footer />
    </div>;
};
export default Protocols;