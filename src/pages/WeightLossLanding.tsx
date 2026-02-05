import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { NotSureBlock } from "@/components/sections/NotSureBlock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import protocolHero from "@/assets/protocol-weight-loss-hero.jpg";

const faqs = [
  {
    question: "Why is weight loss harder after 40?",
    answer: "As we age, factors like hormonal shifts, reduced recovery capacity, increased stress, and metabolic adaptation all influence how the body responds to weight loss efforts. Strategies that worked at 25 often need to change at 40."
  },
  {
    question: "What are bio signals in weight loss?",
    answer: "Bio signals are inputs that guide the body through feedback—such as sleep, nutrition timing, movement, stress, and recovery. Weight loss is more sustainable when these signals are aligned rather than overridden."
  },
  {
    question: "What is retatrutide?",
    answer: "Retatrutide is being studied in research settings for its role in appetite regulation and metabolic signaling. It is often discussed alongside other GLP-1–related compounds, but it is not a standalone solution."
  },
  {
    question: "Is retatrutide a supplement or a drug?",
    answer: "Retatrutide is not a dietary supplement. Discussions around it typically occur in clinical or research contexts. Understanding how such compounds work conceptually is important before considering whether they fit into a broader wellness strategy."
  },
  {
    question: "Do peptides replace diet and exercise?",
    answer: "No. Peptides are discussed as signals, not substitutes. Without supportive habits, structure, and recovery, even powerful signals tend to underperform or fail."
  },
  {
    question: "Do you sell peptides or weight loss drugs?",
    answer: "No. Bio Signals does not sell or prescribe substances. We provide education, structured protocols, and decision support to help people understand their options."
  },
  {
    question: "Is this a medical weight loss program?",
    answer: "No. This is an educational and lifestyle optimization approach focused on structure, habits, and informed decision-making."
  },
  {
    question: "Who is this approach best for?",
    answer: "This approach is designed for adults who want sustainable weight loss, understand that their bodies have changed over time, and are looking for clarity rather than quick fixes."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bio Signals",
  "description": "Educational wellness protocols and structured optimization programs",
  "url": "https://welcome-mat-maker-79.lovable.app"
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

const WeightLossLanding = () => {
  return (
    <>
      <Helmet>
        <title>Simple, Structured Wellness for Weight Loss | Bio Signals</title>
        <meta 
          name="description" 
          content="A science-backed, structured approach to weight loss. Learn how bio signals, habits, and protocols—including peptides like retatrutide—fit together." 
        />
        <link rel="canonical" href="https://welcome-mat-maker-79.lovable.app/weight-loss-structured-wellness" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={protocolHero}
              alt="Structured wellness approach to weight loss"
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
                Education · Protocols · Decision Support
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
              >
                Simple, Structured Wellness for{" "}
                <span className="italic">Weight Loss</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground mb-8 max-w-xl"
              >
                A science-backed, structured approach to weight loss. Learn how bio signals, habits, and protocols fit together for sustainable results.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-6 text-sm tracking-widest uppercase"
                  asChild
                >
                  <Link to="/start-here">Get Started</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-none px-8 py-6 text-sm tracking-widest uppercase border-foreground"
                  asChild
                >
                  <Link to="/products/bio-signals-weight-loss-metabolic-health">View Protocol</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Weight Loss Feels Different After 40 */}
        <Section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              Why Weight Loss Feels Different After 40
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                If weight loss feels harder than it used to, you're not imagining it. Hormonal shifts, accumulated stress, 
                reduced recovery capacity, and metabolic adaptation all change how the body responds to the same inputs 
                that worked a decade ago.
              </p>
              <p>
                What worked at 25—aggressive calorie restriction, intense cardio, willpower-driven diets—often backfires 
                at 40. The body has learned to protect itself. It adapts. It remembers. And it resists strategies that 
                feel like threats.
              </p>
              <p>
                This is why sustainable weight loss for adults requires a different approach—one that works <em>with</em> your 
                biology rather than against it.
              </p>
            </div>
          </div>
        </Section>

        {/* Our Bio Signals Approach */}
        <Section className="py-16 md:py-24 px-6 md:px-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              Our Bio Signals Approach to Sustainable Weight Loss
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Bio signals are the inputs that guide the body through feedback loops—sleep, nutrition timing, movement 
                patterns, stress management, and recovery. When these signals are aligned, the body responds. When 
                they're scattered or conflicting, even the best intentions stall.
              </p>
              <p>
                Our approach doesn't focus on restriction or deprivation. Instead, we focus on understanding which 
                signals matter most for <em>your</em> body, and building a structured protocol around them.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="space-y-2">
                  <h3 className="font-medium">Behavioral Signals</h3>
                  <p className="text-sm">Sleep, meal timing, movement, stress patterns</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Environmental Signals</h3>
                  <p className="text-sm">Light exposure, temperature, social context</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Molecular Signals</h3>
                  <p className="text-sm">Peptides, nutrients, compounds being studied in research</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                to="/products/bio-signals-weight-loss-metabolic-health" 
                className="text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
              >
                Explore our structured weight loss protocol →
              </Link>
            </div>
          </div>
        </Section>

        {/* What Are Peptides */}
        <Section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              What Are Peptides—and Where Does Retatrutide Fit?
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Peptides are short chains of amino acids—signaling molecules that the body already uses to communicate 
                between systems. They're being studied in research settings for their role in appetite regulation, 
                metabolic signaling, and energy balance.
              </p>
              <p>
                Retatrutide is one of several compounds being studied for its potential effects on metabolic signaling. 
                It's often discussed alongside other GLP-1–related compounds, but it's important to understand: these 
                are not standalone solutions. They're signals—and signals only work when there's a system to receive them.
              </p>
              <p>
                Without supportive habits, structure, and recovery, even powerful signals tend to underperform or fail 
                entirely. This is why education matters before exploration.
              </p>
            </div>
            <div className="mt-8">
              <Link 
                to="/ai-concierge" 
                className="text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
              >
                Learn more about peptides and longevity science →
              </Link>
            </div>
          </div>
        </Section>

        {/* We Don't Sell Molecules */}
        <Section className="py-16 md:py-24 px-6 md:px-12 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              We Don't Sell You Molecules.<br />
              <span className="italic">We Help You Make Sense of Them.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              <p>
                Bio Signals does not sell or prescribe substances. We don't run a clinic. We don't give medical advice.
              </p>
              <p>
                What we do is provide education, structured protocols, and decision support—so you can understand your 
                options, build sustainable habits, and make informed choices about your own wellness journey.
              </p>
              <p>
                This is about clarity, not quick fixes.
              </p>
            </div>
          </div>
        </Section>

        {/* A Weight Loss System */}
        <Section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              A Weight Loss System Built for Real Adult Bodies
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                This isn't a crash diet or a 30-day challenge. It's a structured, 3-month optimization protocol 
                designed for adults who understand that their bodies have changed over time.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                  <span>Structured daily and weekly protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                  <span>Educational context for every recommendation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                  <span>Progress tracking through bio signals, not just weight</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                  <span>Accountability without judgment</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Choose the Right Level of Support */}
        <Section className="py-16 md:py-24 px-6 md:px-12 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">
              Choose the Right Level of Support
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* AI Concierge */}
              <div className="bg-background p-8 space-y-4">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Learning</p>
                <h3 className="font-serif text-2xl">AI Concierge</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Research-guided answers to your questions about peptides, protocols, and longevity science.
                </p>
                <p className="font-medium">$9.99</p>
                <Link 
                  to="/ai-concierge" 
                  className="inline-block text-sm border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
                >
                  Learn more →
                </Link>
              </div>
              
              {/* Protocol */}
              <div className="bg-background p-8 space-y-4 ring-2 ring-foreground">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Action</p>
                <h3 className="font-serif text-2xl">Weight Loss Protocol</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A structured 3-month system with daily protocols, tracking, and educational context.
                </p>
                <p className="font-medium">$699</p>
                <Link 
                  to="/products/bio-signals-weight-loss-metabolic-health" 
                  className="inline-block text-sm border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
                >
                  View protocol →
                </Link>
              </div>
              
              {/* Coaching */}
              <div className="bg-background p-8 space-y-4">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Guidance</p>
                <h3 className="font-serif text-2xl">Coaching Sprint</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Founder-led 1:1 coaching with weekly sessions, async support, and personalized protocols.
                </p>
                <p className="font-medium">From $2,999</p>
                <Link 
                  to="/coaching" 
                  className="inline-block text-sm border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
                >
                  Guided weight loss coaching →
                </Link>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link 
                to="/start-here" 
                className="text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
              >
                Compare Bio Signals options →
              </Link>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-10 text-center">
              Frequently Asked Questions About Weight Loss, Peptides & Protocols
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-medium pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>

        {/* Not Sure Block */}
        <NotSureBlock />
      </main>

      <Footer />
    </>
  );
};

export default WeightLossLanding;
