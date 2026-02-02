import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/protocol-weight-loss-hero.jpg";

// Reusable animated section component
const Section = ({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 30
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 0.8,
    delay
  }} className={className}>
      {children}
    </motion.div>;
};

// Myth component for consistent styling
const Myth = ({
  number,
  quote,
  attribution,
  explanation
}: {
  number: number;
  quote: string;
  attribution: string;
  explanation: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 20
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 0.6
  }} className="border-b border-border last:border-b-0 py-[24px]">
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
        Myth #{number}
      </p>
      <blockquote className="font-serif text-xl md:text-2xl leading-relaxed mb-3">
        "{quote}"
      </blockquote>
      <p className="text-sm text-muted-foreground italic mb-6">
        — {attribution}
      </p>
      <p className="text-muted-foreground leading-relaxed">
        {explanation}
      </p>
    </motion.div>;
};
const GLP1Myths = () => {
  const myths = [{
    quote: "GLP-1s are magic. I'll be skinny in six weeks and never think about my weight again.",
    attribution: "a clickbait article that skipped the middle part.",
    explanation: "GLP-1 medications don't bypass biology. They regulate appetite and satiety so sustainable habits can finally take hold. If nothing else changes, results stall. These are signals, not fairy dust."
  }, {
    quote: "I'll be able to eat McDonald's every day and still look amazing.",
    attribution: "a 22-year-old man on TikTok with a ring light and no mortgage.",
    explanation: "GLP-1s don't make calories irrelevant. They reduce compulsive overeating by calming appetite signals. Most users naturally eat less—not because they're forcing discipline, but because they no longer need to."
  }, {
    quote: "These drugs are sketchy and basically experimental.",
    attribution: "a podcast host who also thinks seed oils are a government psy-op.",
    explanation: "GLP-1 medications are FDA-approved, extensively studied, and prescribed to millions worldwide. This is mainstream metabolic medicine—not biohacking or experimentation."
  }, {
    quote: "Once you start, you're a slave to them for life.",
    attribution: "your cousin who also doesn't believe in therapy and/or sunscreen.",
    explanation: "We don't apply this logic to blood-pressure medication, antidepressants, or glasses. GLP-1s can be temporary, long-term, or somewhere in between—depending on goals and physiology."
  }, {
    quote: "This is cheating. Everyone knows beauty is suffering and pain—I just choose not to suffer.",
    attribution: "society, said confidently and without evidence.",
    explanation: "This belief confuses struggle with virtue. GLP-1s don't remove effort—they remove unnecessary resistance. Biology responds to signals, not martyrdom."
  }, {
    quote: "The side effects will ruin your life.",
    attribution: "a friend of a friend whose cousin wanted to lose 10 pounds a week before her wedding.",
    explanation: "Most GLP-1 side effects are mild, temporary, and largely avoidable with proper dosage and gradual titration. Horror stories usually come from rushing protocols—not from the medication itself. Drama is not required."
  }, {
    quote: "You'll never enjoy food again.",
    attribution: "your uncle who treats Thanksgiving dinner like an endurance sport.",
    explanation: "GLP-1 users consistently report the opposite. Food stops being moralized. Pleasure remains. Obsession and guilt fade. Appetite regulation restores a normal relationship with eating."
  }, {
    quote: "You'll get Ozempic face.",
    attribution: "an Instagram person who also happens to sell fillers.",
    explanation: "\"Ozempic face\" is not a medical diagnosis. Facial changes can occur with any significant weight loss. The term exists to shame people into staying unhealthy—or upsell cosmetic solutions."
  }, {
    quote: "GLP-1s destroy muscle and make you skinny-fat.",
    attribution: "a fitness influencer who also sells a supplement.",
    explanation: "Muscle loss comes from insufficient protein, lack of resistance training, and overly aggressive weight loss—not from GLP-1s themselves. Used correctly, lean mass can be preserved."
  }, {
    quote: "This is just vanity. Why do you want to change anything about yourself? You're perfect.",
    attribution: "a genetically gifted 22-year-old influencer who thinks Call Her Daddy is the gospel.",
    explanation: "Wanting to look better does not make you shallow. Especially over 35, looking better usually means moving better, sleeping better, and living with more ease. Health and aesthetics are not enemies."
  }];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "Article",
      "headline": "GLP-1 Myths, Side Effects & Safety | We've Heard It All",
      "description": "Tired of conflicting advice about GLP-1 weight loss drugs? We break down the most common GLP-1 myths, side effects, and safety concerns—without hype or shame.",
      "author": {
        "@type": "Organization",
        "name": "BioRitual"
      },
      "publisher": {
        "@type": "Organization",
        "name": "BioRitual",
        "url": "https://bioritual.lovable.app"
      }
    }, {
      "@type": "FAQPage",
      "mainEntity": myths.slice(0, 5).map((myth, index) => ({
        "@type": "Question",
        "name": `GLP-1 Myth: ${myth.quote}`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": myth.explanation
        }
      }))
    }]
  };
  return <>
      <Helmet>
        <title>GLP-1 Myths, Side Effects & Safety | We've Heard It All</title>
        <meta name="description" content="Tired of conflicting advice about GLP-1 weight loss drugs? We break down the most common GLP-1 myths, side effects, and safety concerns—without hype or shame." />
        <link rel="canonical" href="https://bioritual.lovable.app/glp-1-myths" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Understanding GLP-1 medications" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent" />
          </div>
          
          <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-20">
            <div className="max-w-2xl">
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="text-xs tracking-[0.3em] uppercase mb-6">
                Education · Science · Clarity
              </motion.p>

              <motion.h1 initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.1
            }} className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                We've Heard It All.
              </motion.h1>

              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="text-lg md:text-xl text-foreground/90 mb-4 max-w-xl">
                Everything you've been told about GLP-1s—and why most of it exists to keep you exactly where you are.
              </motion.p>

              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} className="text-muted-foreground mb-8 max-w-xl">
                Clear, science-based context for adults over 35 who are tired of taking health advice from TikTok.
              </motion.p>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }}>
                <Button variant="outline" size="lg" className="rounded-none px-8 py-6 text-sm tracking-wider border-foreground/30 hover:bg-foreground hover:text-background" asChild>
                  <Link to="/glp-1-retratutide-guide">Learn how we approach GLP-1s as biological signals</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 px-6 md:px-12 md:py-[24px]">
          <div className="max-w-3xl mx-auto">
            <Section>
              <p className="text-lg md:text-xl leading-relaxed text-foreground mb-6">
                We've heard it from cousins, coworkers, podcasts, TikTok philosophers, Instagram experts, and that one friend who "did their research" at 1 a.m.
              </p>
            </Section>

            <Section delay={0.1}>
              <div className="space-y-3 mb-8">
                <p className="text-muted-foreground leading-relaxed">We've heard why GLP-1 medications are magic.</p>
                <p className="text-muted-foreground leading-relaxed">We've heard why GLP-1s are dangerous.</p>
                <p className="text-muted-foreground leading-relaxed">We've heard why GLP-1 weight loss is cheating, vanity, a scam, or something you'll regret forever.</p>
              </div>
            </Section>

            <Section delay={0.2}>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What all these opinions have in common isn't science—it's comfort.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most myths about GLP-1s exist to protect the status quo. To make staying exactly where you are feel safer than trying something new. And for many adults over 35, that resistance isn't laziness. It's exhaustion. It's past disappointment. It's having tried everything already.
              </p>
            </Section>

            <Section delay={0.3}>
              <p className="text-lg text-foreground font-medium mb-4">So here's the list.</p>
              <p className="text-muted-foreground leading-relaxed mb-2">Not of concerns—but of quotes we've actually heard, over and over again.</p>
              <p className="text-muted-foreground leading-relaxed mb-2">No shaming.</p>
              <p className="text-muted-foreground leading-relaxed mb-2">No hype.</p>
              <p className="text-muted-foreground leading-relaxed">Just clarity.</p>
            </Section>
          </div>
        </section>

        {/* Myths Section */}
        <section className="py-16 px-6 md:px-12 bg-muted/30 md:py-[24px]">
          <div className="max-w-3xl mx-auto">
            <Section>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-12">
                10 GLP-1 Myths We've Actually Heard<br />
                <span className="text-muted-foreground">(And Why They Stick)</span>
              </h2>
            </Section>

            <div>
              {myths.map((myth, index) => <Myth key={index} number={index + 1} quote={myth.quote} attribution={myth.attribution} explanation={myth.explanation} />)}
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="py-16 px-6 md:px-12 md:py-[24px]">
          <div className="max-w-3xl mx-auto">
            <Section>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8">
                The Part No One Likes to Say Out Loud
              </h2>
            </Section>

            <Section delay={0.1}>
              <p className="text-lg text-foreground mb-6">
                Most GLP-1 myths aren't about safety.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                They're about protecting what's familiar—even when it's not working.
              </p>
            </Section>

            <Section delay={0.2}>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">GLP-1s aren't shortcuts.</p>
                <p className="text-muted-foreground leading-relaxed">They're biological signals—tools that help adults regain control of appetite, behavior, and long-term health.</p>
                <p className="text-muted-foreground leading-relaxed">No shame.</p>
                <p className="text-muted-foreground leading-relaxed">No hype.</p>
                <p className="text-muted-foreground leading-relaxed font-medium text-foreground">Just structure.</p>
              </div>
            </Section>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center">
            <Section>
              <p className="text-xs tracking-[0.3em] uppercase mb-6 text-background/60">
                Our Approach
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                Signals. Not shortcuts.
              </h2>
              <p className="text-background/80 leading-relaxed mb-10 max-w-xl mx-auto">
                We believe in understanding biology, not fighting it. GLP-1s are one tool among many—used deliberately, not blindly.
              </p>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-none px-10 py-6 text-sm tracking-wider" asChild>
                <Link to="/start-here">Learn more about our approach</Link>
              </Button>
            </Section>
          </div>
        </section>

        {/* Educational Disclaimer */}
        <section className="py-12 px-6 md:px-12 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs text-muted-foreground leading-relaxed text-center">
              Educational content only. Not medical advice. Individual decisions should be made with appropriate clinical guidance.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>;
};
export default GLP1Myths;