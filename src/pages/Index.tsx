import Header from "@/components/sections/Header";
import ShopByGoal from "@/components/sections/ShopByGoal";
import Hero from "@/components/sections/Hero";
import FounderQuote from "@/components/sections/FounderQuote";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import ArticleCarousel from "@/components/blog/ArticleCarousel";
import StartHereSection from "@/components/sections/StartHereSection";
import ThreePillarsCarousel from "@/components/sections/ThreePillarsCarousel";
import ValueProps from "@/components/sections/ValueProps";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import StickyEmailFooter from "@/components/sections/StickyEmailFooter";

const qualifiers = [
  "You've had at least one quiet \"oh… shit\" moment about aging.",
  "Your body doesn't respond the way it did at 28.",
  "You're skeptical of pharma hype and influencer hype.",
  "You listen to podcasts with interest — and with raised eyebrows.",
  "You've tried \"just be consistent\" and discovered that biology does not care about motivational quotes.",
];

const manifestoLines = [
  "You are not anti-science.",
  "You are anti-nonsense.",
  "You don't want a miracle.",
  "You want to stop making avoidable mistakes.",
];

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero
        tagline=""
        headline={"This shouldn't be this confusing.\nIt's exhausting because too many people are confidently full of B.S."}
        bodyParagraphs={[
          "Peptides. Hormones. Supplements. GLP-1s.\nEvery week there's a new hero, a new villain, and a new podcast guest who \"finally explains everything.\"",
          "You've seen this before.",
          "You're old enough to remember when wellness meant a magazine in a waiting room. Then it became blogs. Then influencers. Then \"biohackers.\" Then TikTok doctors. Then the algorithm.",
          "Now every decision feels louder than it needs to be.",
          "BioRitual exists for people who are tired of that.",
          "Not tired of health.\nTired of noise.",
        ]}
        ctaText="Start with clarity"
        ctaLink="/collection/protocols"
        subHeroLine1=""
        subHeroLine2=""
      />
      <ShopByGoal />
      <FounderQuote>
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Let's be specific.
        </p>
        <p className="text-lg md:text-xl mb-4 font-serif">This is for you if:</p>
        <ul className="text-left max-w-xl mx-auto space-y-2 mb-8">
          {qualifiers.map((q, i) => (
            <li key={i} className="text-base md:text-lg leading-normal text-foreground/85 flex gap-3">
              <span className="text-muted-foreground mt-1 shrink-0">—</span>
              <span>{q}</span>
            </li>
          ))}
        </ul>
        <div className="w-16 h-px bg-border mx-auto my-8" />
        <div className="space-y-0">
          {manifestoLines.map((line, i) => (
            <h2
              key={i}
              className={`text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide ${
                i === 1 || i === 3 ? "mb-4" : ""
              }`}
            >
              {line}
            </h2>
          ))}
        </div>
      </FounderQuote>
      <FeaturedCollection
        headline="What we actually do"
        description={"We help you think clearly about your health.\n\nNot by giving you a reset button.\nNot by promising to \"optimize\" you into a superhero.\nBut by helping you understand what matters, what doesn't, and what comes next.\n\nWe organize decisions around:\n\n- Lifestyle and recovery\n- Training and muscle retention\n- Supplements\n- Peptides and metabolic signaling — including GLP-1s\n\nBecause certainty sells.\nClarity lasts."}
      />
      <StartHereSection showHero={false} />
      <ArticleCarousel />
      <ThreePillarsCarousel
        subtitle=""
        title="A grown-up word about peptides and GLP-1s"
        description1={"Yes, we work with peptides.\nYes, we discuss GLP-1 medications.\n\nNo, they are not magic.\nAnd no, they are not moral failures.\n\nThey are biological signals.\n\nUsed conservatively, sequenced properly, and supported with the right habits, they can help regulate appetite, improve metabolic flexibility, support recovery, and make long-term change possible."}
        description2={"The problem is not the tool.\nThe problem is pretending tools exist outside of context."}
      />
      <ValueProps
        values={[
          { title: "Tired of Noise", description: "You don't need another podcast hero. You need a framework that respects your intelligence and your time." },
          { title: "Anti-Nonsense", description: "You're not anti-science. You're anti-B.S. We organize decisions, not hype cycles." },
          { title: "Context Over Magic", description: "Peptides and GLP-1s aren't miracles or moral failures. They're tools — and tools need context." },
          { title: "Clarity Over Certainty", description: "Because certainty sells. Clarity lasts. We help you think clearly, not follow blindly." },
        ]}
      />
      <ShopByGoal />
      <FinalCTA
        headline="You don't need to reinvent yourself."
        italicWord=""
        description="You just need to stop letting the loudest voice decide for you."
        buttonText="Start with clarity"
      />
      <Footer />
      <StickyEmailFooter />
    </main>
  );
};

export default Index;
