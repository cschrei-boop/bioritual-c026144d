import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import FounderQuote from "@/components/sections/FounderQuote";
import JourneySnippet from "@/components/sections/JourneySnippet";
import HowItWorksCondensed from "@/components/sections/HowItWorksCondensed";
import JesseIntro from "@/components/sections/JesseIntro";
import ProtocolGrid from "@/components/sections/ProtocolGrid";
import ThreePillarsCarousel from "@/components/sections/ThreePillarsCarousel";
import ArticleCarousel from "@/components/blog/ArticleCarousel";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import StickyEmailFooter from "@/components/sections/StickyEmailFooter";

const qualifiers = [
  "You've had at least one quiet \"oh… shit\" moment about aging.",
  "Your body doesn't respond the way it did at 28.",
  "You're skeptical of pharma hype and influencer hype in equal measure.",
  "You listen to podcasts with interest — and raised eyebrows.",
  "You've tried \"just be consistent\" and discovered that biology does not care about motivational quotes.",
  "You suspect the story you're telling about your health isn't the one you actually want to be living.",
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
        ctaText="See how it works"
        ctaLink="/how-it-works"
        ctaText2="Talk to Jesse™ — your personal AI coach"
        ctaLink2="/ai-concierge"
        subHeroLine1=""
        subHeroLine2=""
      />
      <FounderQuote>
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Let's be specific. This is for you if:
        </p>
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
      <JourneySnippet />
      <HowItWorksCondensed />
      <JesseIntro />
      <ProtocolGrid />
      <ThreePillarsCarousel
        subtitle=""
        title="A grown-up word about peptides and GLP-1s."
        description1={"Yes, we work with peptides. Yes, we discuss GLP-1 medications. No, they are not magic. And no, they are not moral failures.\n\nThey are biological signals. Used conservatively, sequenced properly, and supported with the right habits, they can help regulate appetite, improve metabolic flexibility, support recovery, and make long-term change possible."}
        description2={"The problem is not the tool. The problem is pretending tools exist outside of context."}
      />
      <ArticleCarousel />
      <FinalCTA
        headline="You don't need to reinvent yourself."
        italicWord=""
        subheadline="You just need to stop letting the loudest voice decide for you."
        description=""
        body="Start wherever you are. Talk to Jesse™ first if you're not sure. Move into a protocol when you're ready. Bring in the founders if you want a human in the room. There's no wrong entry point."
        buttons={[
          { text: "Talk to Jesse™ — your personal AI coach", href: "/ai-concierge", variant: "link" },
          { text: "See protocols", href: "/collection/protocols", variant: "link" },
          { text: "How it works", href: "/how-it-works", variant: "link" },
        ]}
      />
      <Footer />
      <StickyEmailFooter />
    </main>
  );
};

export default Index;
