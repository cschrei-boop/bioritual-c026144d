import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import truthAboutPeptidesHero from "@/assets/truth-about-peptides-hero.png";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const TruthAboutPeptides = () => {
  return (
    <>
      <Helmet>
        <title>The Truth About Peptides | Bio Signals Education</title>
        <meta 
          name="description" 
          content="What peptides actually are, how they work, and what you should know before exploring them. An educational deep dive into bio signals and longevity science." 
        />
        <link rel="canonical" href="https://bioritual.lovable.app/truth-about-peptides" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={truthAboutPeptidesHero}
              alt="The Truth About Peptides"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          </div>
          
          <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-20">
            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
              >
                Education · Science · Clarity
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
              >
                The Truth About{" "}
                <span className="italic">Peptides</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground mb-8 max-w-xl"
              >
                Peptides are everywhere in longevity conversations—but clarity is rare. Here's what they actually are, how they work, and what you should know.
              </motion.p>
            </div>
          </div>
        </section>

        {/* High-Impact Abstract */}
        <Section className="py-16 md:py-24 px-6 md:px-12 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed">
              <p>Peptides don't work by force.</p>
              <p className="italic">They work by signaling.</p>
              <p className="text-muted-foreground">
                They don't replace sleep, nutrition, movement, or recovery — they sit alongside them, 
                providing information the body may respond to if the system is receptive.
              </p>
              <div className="py-4 space-y-2 text-muted-foreground">
                <p>Without context, peptides do very little.</p>
                <p>Without feedback, they're just another variable.</p>
                <p>Without structure, they become noise.</p>
              </div>
              <p>Peptides aren't magic.</p>
              <p className="italic">They're part of a system.</p>
            </div>
          </div>
        </Section>

        {/* Main Article Intro */}
        <Section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Peptides have gained attention as powerful tools for optimization — often discussed in isolation, 
                without enough context to understand what they actually do.
              </p>
              <p className="text-foreground font-medium">The reality is more grounded.</p>
              <p>
                Peptides are short chains of amino acids that participate in communication processes already 
                present in the body. Their role is not to create outcomes directly, but to signal direction.
              </p>
              <p className="text-foreground font-medium italic">That distinction matters.</p>
              <div className="py-4 pl-6 border-l-2 border-foreground/20 space-y-2">
                <p>A signal can guide a response.</p>
                <p>It cannot guarantee one.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Peptides Are Context-Dependent */}
        <Section className="py-16 md:py-24 px-6 md:px-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              Peptides Are Context-Dependent
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>The body is a responsive system governed by feedback, not commands.</p>
              <p>
                For any signal — molecular or otherwise — to have an effect, the surrounding conditions must 
                support it. Sleep, nutrition, movement, stress, and recovery all shape how the body interprets 
                incoming information.
              </p>
              <p>
                When those foundations are in place, a peptide may help refine or support an adaptive response.
              </p>
              <p className="text-foreground font-medium">
                When they're not, the signal is dampened — or ignored entirely.
              </p>
              <p>
                This is why the same peptide can produce dramatically different experiences in different people, 
                or even in the same person at different times.
              </p>
            </div>
          </div>
        </Section>

        {/* Signals Work Together */}
        <Section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              Signals Work Together, Not Alone
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>Peptides exist on the same continuum as other biological inputs:</p>
              <div className="grid md:grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-foreground shrink-0" />
                  <span>sleep signals <em>repair</em></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-foreground shrink-0" />
                  <span>movement signals <em>adaptation</em></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-foreground shrink-0" />
                  <span>nutrition signals <em>availability</em></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-foreground shrink-0" />
                  <span>light signals <em>timing</em></span>
                </div>
              </div>
              <p className="text-foreground font-medium">
                Peptides don't override these signals. They interact with them.
              </p>
              <p>
                Used responsibly, they may help clarify or reinforce a direction the body is already prepared 
                to move toward. Used without structure, they add complexity without clarity.
              </p>
            </div>
          </div>
        </Section>

        {/* Why "More" Rarely Helps */}
        <Section className="py-16 md:py-24 px-6 md:px-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              Why "More" Rarely Helps
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>Biology is sensitive to timing and dosage.</p>
              <p>
                When signals are excessive, mistimed, or layered without feedback, responsiveness decreases. 
                Sensitivity changes. The body adapts.
              </p>
              <p className="text-foreground font-medium">
                This is why escalation and stacking rarely produce better outcomes.
              </p>
              <p>
                The most effective use of peptides respects the body's limits — and its ability to regulate itself.
              </p>
            </div>
          </div>
        </Section>

        {/* A Systems-Based Perspective */}
        <Section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              A Systems-Based Perspective
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>Peptides make sense only within a broader system.</p>
              <p>That system includes:</p>
              <ul className="space-y-3 py-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                  <span>education</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                  <span>structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                  <span>observation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                  <span>adjustment over time</span>
                </li>
              </ul>
              <p>Without those elements, peptides are reduced to experiments without interpretation.</p>
              <p className="text-foreground font-medium italic">
                Understanding how your body responds is more valuable than adding another input.
              </p>
            </div>
          </div>
        </Section>

        {/* The Bottom Line */}
        <Section className="py-16 md:py-24 px-6 md:px-12 bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              The Bottom Line
            </h2>
            <div className="space-y-4 text-background/80 leading-relaxed text-lg">
              <p>Peptides are not shortcuts.</p>
              <p>They are not guarantees.</p>
              <p>And they are not substitutes for foundational health signals.</p>
            </div>
            <p className="mt-8 text-xl">
              They are context-dependent tools that may support adaptation when the system is ready.
            </p>
            <p className="mt-6 text-background/80">
              Progress comes from working with biology — not trying to outsmart it.
            </p>
            <p className="mt-8 font-serif text-2xl italic">
              That's the truth about peptides.
            </p>
          </div>
        </Section>

        {/* Call to Action */}
        <Section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Ready to Explore?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're just starting to learn about peptides or ready to implement a structured protocol, 
              we have resources to support your journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-6 text-sm tracking-widest uppercase"
                asChild
              >
                <Link to="/protocols">View Protocols</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-none px-8 py-6 text-sm tracking-widest uppercase border-foreground"
                asChild
              >
                <Link to="/ai-concierge">Ask AI Concierge</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
};

export default TruthAboutPeptides;
