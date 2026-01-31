import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import protocolHero from "@/assets/protocol-weight-loss-hero.jpg";
import pillarSignals from "@/assets/pillar-signals.jpg";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are GLP-1s?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GLP-1s are signaling molecules that participate in appetite regulation, insulin signaling, and energy balance. They amplify natural signals already present in the body."
      }
    },
    {
      "@type": "Question",
      "name": "What is retratutide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retratutide is a multi-pathway signaling compound being studied for its effects on metabolic signaling. It acts on multiple receptors simultaneously, providing more information to the body's regulatory systems."
      }
    },
    {
      "@type": "Question",
      "name": "Are GLP-1s a complete weight loss solution?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. GLP-1s are signals, not solutions. Without supportive habits, nutrition, and structure, they often lead to issues like muscle loss, fatigue, and difficult transitions off the compound."
      }
    }
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BioRitual",
  "description": "Educational wellness frameworks for structured thinking about health decisions",
  "url": "https://bioritual.lovable.app"
};

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

const GLP1RetratutideGuide = () => {
  return (
    <>
      <Helmet>
        <title>Understanding GLP-1s and Retratutide | Bio Signals Education</title>
        <meta 
          name="description" 
          content="An educational guide to GLP-1 compounds, retratutide, and why sustainable weight loss requires a systems-based approach. No medical advice or prescriptions." 
        />
        <link rel="canonical" href="https://bioritual.lovable.app/glp-1-retratutide-guide" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section - No buttons */}
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={protocolHero}
              alt="Understanding GLP-1s and modern biohacking"
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
                The Truth About GLP-1s, Retratutide, and Modern{" "}
                <span className="italic">Biohacking</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-xl"
              >
                Why weight loss works best when you treat biology as a system — not a shortcut.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Introduction - Text Only */}
        <Section className="py-16 md:py-24 px-6 md:px-12 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
              <p>GLP-1 compounds have changed the weight loss conversation.</p>
              <p className="text-muted-foreground">
                They reduce appetite, quiet food noise, and shift how the body responds to energy intake. 
                For many, they've provided something that felt impossible before: relief.
              </p>
              <p className="text-muted-foreground">
                But here's what often gets lost in the conversation:
              </p>
              <p className="font-medium">GLP-1s are signals, not solutions.</p>
              <p className="text-muted-foreground">
                They don't fix the underlying system. They inform it. And without the right support, 
                that signal can become noise—or worse, a dependency.
              </p>
            </div>
          </div>
        </Section>

        {/* What GLP-1s Actually Do */}
        <Section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              What GLP-1s Actually Do
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  GLP-1 (glucagon-like peptide-1) is a signaling molecule the body already produces. 
                  Synthetic versions amplify this natural signal.
                </p>
                <ul className="space-y-4 pt-2">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                    <span><strong>Appetite regulation:</strong> They reduce hunger by signaling satiety to the brain earlier and more persistently.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                    <span><strong>Insulin signaling:</strong> They influence how the body responds to glucose, helping regulate blood sugar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                    <span><strong>Energy balance:</strong> They shift the body's metabolic set point, making it easier to maintain a deficit.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                    <span><strong>Signal amplification:</strong> They don't create new responses—they amplify existing biological pathways.</span>
                  </li>
                </ul>
                <p className="text-foreground font-medium">
                  The key insight: these are amplification tools, not overrides.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={pillarSignals} 
                  alt="Bio signals and metabolic pathways" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Why GLP-1s Alone Are Incomplete */}
        <Section className="py-16 md:py-24 px-6 md:px-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              Why GLP-1s Alone Are Incomplete
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                When used in isolation—without structure, nutrition support, or muscle-protective strategies—GLP-1s 
                often lead to unintended consequences:
              </p>
              <div className="grid md:grid-cols-2 gap-6 py-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-foreground">Muscle Loss</h3>
                  <p className="text-sm">
                    Rapid weight loss without adequate protein and resistance training often results in 
                    significant lean mass reduction—not just fat loss.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-foreground">Fatigue</h3>
                  <p className="text-sm">
                    Reduced caloric intake without proper nutrient timing and micronutrient support 
                    can leave the body depleted and under-recovered.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-foreground">Metabolic Slowdown</h3>
                  <p className="text-sm">
                    Without signals that preserve metabolic rate—like adequate protein and strategic 
                    movement—the body adapts by burning less.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-foreground">Difficult Transitions</h3>
                  <p className="text-sm">
                    Coming off GLP-1s without a system in place often results in rapid regain, 
                    sometimes beyond the original starting point.
                  </p>
                </div>
              </div>
              <p className="text-foreground font-medium">
                The problem isn't the compound. It's the lack of system support around it.
              </p>
            </div>
          </div>
        </Section>

        {/* Where Retratutide Changes the Landscape */}
        <Section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              Where Retratutide Changes the Landscape
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Retratutide represents a shift in how researchers think about metabolic signaling.
              </p>
              <p>
                Unlike single-pathway compounds, retratutide acts on multiple receptors simultaneously—GIP, 
                GLP-1, and glucagon receptors. This multi-pathway approach means more information is entering 
                the system at once.
              </p>
              <div className="py-4 pl-6 border-l-2 border-foreground/20 space-y-2">
                <p>More pathways don't mean better outcomes automatically.</p>
                <p>They mean more signals to integrate.</p>
              </div>
              <p>
                For those exploring retratutide conceptually, the important thing to understand is that 
                complexity increases, not decreases, the need for structure. More signals require a more 
                sophisticated system to interpret them.
              </p>
              <p className="text-foreground font-medium italic">
                This is why education matters more as the tools become more powerful.
              </p>
            </div>
          </div>
        </Section>

        {/* Our Philosophy: Bio Signals - Key Positioning Section */}
        <Section className="py-20 md:py-32 px-6 md:px-12 bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-background/60 mb-6">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-10">
              Bio Signals: A Systems-Based Perspective
            </h2>
            <div className="space-y-6 text-background/80 leading-relaxed text-lg">
              <p>We do not believe in one-molecule solutions.</p>
              <p>Peptides are tools, not overrides.</p>
              <p>Frameworks matter more than compounds.</p>
            </div>
            <div className="mt-10 pt-10 border-t border-background/20 text-left max-w-2xl mx-auto">
              <p className="text-background/80 leading-relaxed">
                At BioRitual, we view GLP-1s, retratutide, and other signaling compounds as parts of a 
                larger system—one that includes nutrition, supplementation, movement, recovery, and structure.
              </p>
              <p className="mt-4 text-background leading-relaxed">
                A peptide without a protocol is just an experiment. A peptide within a framework is a tool 
                that can be understood, adjusted, and integrated.
              </p>
            </div>
          </div>
        </Section>

        {/* Why Frameworks Matter */}
        <Section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              Why Frameworks Matter
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>There's a fundamental difference between:</p>
              <div className="grid md:grid-cols-2 gap-8 py-4">
                <div className="p-6 border border-border">
                  <h3 className="font-medium text-foreground mb-3">Taking a Compound</h3>
                  <p className="text-sm">
                    Adding a single input and hoping for results. No structure. No integration. 
                    No way to understand what's working or why.
                  </p>
                </div>
                <div className="p-6 border-2 border-foreground">
                  <h3 className="font-medium text-foreground mb-3">Following a Structured Framework</h3>
                  <p className="text-sm">
                    Integrating multiple inputs—peptides, supplements, nutrition, movement—into a 
                    coherent system with feedback and adjustment.
                  </p>
                </div>
              </div>
              <p>
                The landscape of signaling tools is vast—dozens of peptides, hundreds of supplements, 
                countless dietary approaches. Without a framework, this becomes overwhelming noise.
              </p>
              <p className="text-foreground font-medium">
                With a framework, it becomes a system you can understand and navigate.
              </p>
              <p>
                Integration matters. Sequencing matters. Context matters. The goal isn't to take more—it's 
                to understand how different signals interact and support each other over time.
              </p>
            </div>
          </div>
        </Section>

        {/* Soft CTA Section */}
        <Section className="py-16 md:py-24 px-6 md:px-12 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">
                Explore Further
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you're just beginning to learn or ready to implement a structured approach, 
                there are different ways to engage with these concepts.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Option 1: AI Concierge */}
              <Card className="rounded-none border-border bg-background">
                <CardContent className="p-8 space-y-4">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Learning</p>
                  <h3 className="font-serif text-2xl">Learn with the AI Concierge</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Explore questions about signaling compounds, frameworks, and longevity science 
                    at your own pace. Educational and self-guided.
                  </p>
                  <Link 
                    to="/ai-concierge" 
                    className="inline-block text-sm border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
                  >
                    Start exploring →
                  </Link>
                </CardContent>
              </Card>
              
              {/* Option 2: Protocols */}
              <Card className="rounded-none border-foreground border-2 bg-background">
                <CardContent className="p-8 space-y-4">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Structure</p>
                  <h3 className="font-serif text-2xl">Explore Weight-Loss Frameworks</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Structured, goal-specific frameworks that integrate multiple signals into 
                    a coherent system with educational context.
                  </p>
                  <Link 
                    to="/protocols" 
                    className="inline-block text-sm border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
                  >
                    View frameworks →
                  </Link>
                </CardContent>
              </Card>
              
              {/* Option 3: Coaching */}
              <Card className="rounded-none border-border bg-background">
                <CardContent className="p-8 space-y-4">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Guidance</p>
                  <h3 className="font-serif text-2xl">Start with the Coaching Sprint</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Founder-led guidance for those who want direct support in building and 
                    understanding their approach.
                  </p>
                  <Link 
                    to="/coaching" 
                    className="inline-block text-sm border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
                  >
                    Learn about coaching →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Educational Disclaimer */}
        <Section className="py-12 px-6 md:px-12 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Educational Content Only
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This article is for informational and educational purposes only. BioRitual does not 
              sell peptides, provide medical advice, or prescribe treatments. All decisions regarding 
              health interventions should be made in consultation with qualified healthcare professionals.
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
};

export default GLP1RetratutideGuide;
