import bioSignalsPerformanceHero from "@/assets/bio-signals-performance-hero.jpg";
import heroPortrait from "@/assets/hero-portrait.jpg";
import bioSignalsEnergyHero from "@/assets/bio-signals-energy-hero.jpg";

export interface LandingPageConfig {
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  hero?: {
    backgroundImage?: string;
    backgroundVideo?: string;
    tagline?: string;
    headline?: string;
    bodyParagraphs?: string[];
    ctaText?: string;
    ctaLink?: string;
    subHeroLine1?: string;
    subHeroLine2?: string;
  };
  founderQuote?: {
    quote?: string;
    attribution?: string;
  };
  featuredCollection?: {
    headline?: string;
    description?: string;
  };
  threePillars?: {
    subtitle?: string;
    title?: string;
    description1?: string;
    description2?: string;
  };
  valueProps?: {
    values?: { title: string; description: string }[];
  };
  finalCTA?: {
    headline?: string;
    italicWord?: string;
    description?: string;
    buttonText?: string;
  };
}

export const landingPages: LandingPageConfig[] = [
  {
    slug: "busy-professionals",
    seo: {
      title: "Wellness Frameworks for Busy Professionals | BioRitual",
      description: "Structured wellness frameworks designed for professionals with high cognitive load and inconsistent schedules. No fads — just systems.",
    },
    hero: {
      tagline: "Structured Wellness for High-Output Professionals.",
      headline: "You don't need more time. You need a better system.",
      bodyParagraphs: [
        "Between meetings, deadlines, and decision fatigue — most wellness advice falls apart. BioRitual offers structured frameworks that work within your schedule, not against it.",
        "Educational systems for understanding how your body responds to stress, sleep, and fuel — so you can make better decisions without adding complexity.",
        "BioRitual is not a medical service and does not provide medical advice, diagnosis, or treatment.",
      ],
      ctaText: "→ See how the framework is structured",
      subHeroLine1: "You already have discipline. What you need is a framework that matches it.",
      subHeroLine2: "That's where we come in.",
    },
    founderQuote: {
      quote: "Most professionals don't lack willpower — they lack a system that respects their time. BioRitual is built for the way you actually live.",
      attribution: "— The BIORITUAL Team",
    },
    featuredCollection: {
      headline: "Frameworks That Fit Your Calendar",
      description: "Explore structured approaches to understanding energy, recovery, and daily performance — designed for people who think in systems.",
    },
    threePillars: {
      subtitle: "The Foundation",
      title: "Systems Over Motivation",
      description1: "Frameworks for professionals who need clarity, not more information.",
      description2: "BioRitual does not provide treatment-based or outcome-driven programs.",
    },
    valueProps: {
      values: [
        { title: "Time-Efficient", description: "Frameworks designed for 60-hour weeks — not 60-minute morning routines." },
        { title: "Decision-Ready", description: "Reduce cognitive load around wellness. Know what matters, ignore what doesn't." },
        { title: "Systems Thinking", description: "The same structured approach you use at work, applied to understanding your body." },
        { title: "No Pseudoscience", description: "Evidence-based educational frameworks. No fads, no hype, no wasted effort." },
      ],
    },
    finalCTA: {
      headline: "Build Your",
      italicWord: "System",
      description: "Stop guessing. Start understanding the frameworks behind sustainable wellness.",
      buttonText: "Explore the framework",
    },
  },
  {
    slug: "athletes",
    seo: {
      title: "Wellness Frameworks for Athletes | BioRitual",
      description: "Educational frameworks for understanding recovery, adaptation, and performance signals. Built for athletes who think beyond the gym.",
    },
    hero: {
      backgroundImage: bioSignalsPerformanceHero,
      tagline: "Educational Wellness Frameworks for Athletes.",
      headline: "Recovery is where performance begins.",
      bodyParagraphs: [
        "Training breaks you down. Recovery builds you up. BioRitual provides educational frameworks for understanding the signals your body sends between sessions.",
        "Explore how adaptation, fuel timing, and recovery patterns are discussed in modern wellness — without prescriptions or personalized protocols.",
        "BioRitual is not a medical service and does not provide medical advice, diagnosis, or treatment.",
      ],
      ctaText: "→ Explore the recovery framework",
      subHeroLine1: "You already train hard. Now understand what happens between sessions.",
      subHeroLine2: "That's where we come in.",
    },
    founderQuote: {
      quote: "The athletes who sustain performance aren't the ones who train hardest — they're the ones who understand recovery. BioRitual gives you that framework.",
      attribution: "— The BIORITUAL Team",
    },
    featuredCollection: {
      headline: "Understanding Recovery Signals",
      description: "Explore how recovery, adaptation, and performance intersect in educational wellness frameworks.",
    },
    threePillars: {
      subtitle: "The Foundation",
      title: "Beyond the Training Plan",
      description1: "Frameworks for understanding what your body is telling you between workouts.",
      description2: "BioRitual does not provide treatment-based or outcome-driven programs.",
    },
    valueProps: {
      values: [
        { title: "Recovery-First", description: "Frameworks centered on understanding recovery patterns, not just training volume." },
        { title: "Signal Awareness", description: "Learn to interpret the signals your body sends — energy, soreness, adaptation." },
        { title: "Structured Thinking", description: "Move beyond intuition. Understand the systems behind sustainable performance." },
        { title: "Evidence-Based", description: "Educational frameworks grounded in how adaptation is discussed in current research." },
      ],
    },
    finalCTA: {
      headline: "Understand the",
      italicWord: "Signals",
      description: "Your body communicates constantly. Learn the frameworks for interpreting what it's telling you.",
      buttonText: "Explore the framework",
    },
  },
  {
    slug: "beginners",
    seo: {
      title: "Wellness Frameworks for Beginners | BioRitual",
      description: "No jargon. No overwhelm. Clear, structured wellness frameworks for people just getting started on their health journey.",
    },
    hero: {
      tagline: "Clear Frameworks. No Overwhelm.",
      headline: "No jargon. No overwhelm. Just a clear starting point.",
      bodyParagraphs: [
        "The wellness space is noisy. Everyone has an opinion, a product, a protocol. BioRitual cuts through the noise with simple, structured frameworks for understanding your body.",
        "No complicated stacks. No confusing terminology. Just educational systems that help you think more clearly about wellness.",
        "BioRitual is not a medical service and does not provide medical advice, diagnosis, or treatment.",
      ],
      ctaText: "→ Start with the basics",
      subHeroLine1: "You don't need to become an expert. You just need a clear framework to follow.",
      subHeroLine2: "That's where we come in.",
    },
    founderQuote: {
      quote: "The hardest part of wellness isn't doing — it's knowing where to start. BioRitual gives you that starting point, without the overwhelm.",
      attribution: "— The BIORITUAL Team",
    },
    featuredCollection: {
      headline: "Start With Understanding",
      description: "Simple, educational frameworks that make wellness concepts accessible — no prior knowledge required.",
    },
    threePillars: {
      subtitle: "The Foundation",
      title: "Clarity First",
      description1: "Frameworks designed for people who want to understand, not memorize.",
      description2: "BioRitual does not provide treatment-based or outcome-driven programs.",
    },
    valueProps: {
      values: [
        { title: "No Jargon", description: "Every framework is written in plain language. No acronyms, no assumed knowledge." },
        { title: "Step-by-Step", description: "Structured systems that build understanding progressively — not all at once." },
        { title: "No Pressure", description: "Learn at your own pace. There's no right speed for understanding your body." },
        { title: "Trusted Sources", description: "Frameworks grounded in how wellness concepts are discussed in credible contexts." },
      ],
    },
    finalCTA: {
      headline: "Start",
      italicWord: "Here",
      description: "The beginning is the most important part. And this one is simple.",
      buttonText: "Explore the framework",
    },
  },
  {
    slug: "parents-over-40",
    seo: {
      title: "Wellness Frameworks for Parents Over 40 | BioRitual",
      description: "Your body changed. Your framework should too. Educational wellness systems for health-conscious parents navigating midlife.",
    },
    hero: {
      backgroundImage: heroPortrait,
      tagline: "Educational Wellness for the Next Chapter.",
      headline: "Your body changed. Your framework should too.",
      bodyParagraphs: [
        "After 40, the rules change. Sleep matters more. Recovery takes longer. Energy is currency. BioRitual provides educational frameworks for understanding these shifts.",
        "Designed for parents juggling family, career, and their own wellbeing — with frameworks that acknowledge the reality of midlife.",
        "BioRitual is not a medical service and does not provide medical advice, diagnosis, or treatment.",
      ],
      ctaText: "→ Explore frameworks for midlife wellness",
      subHeroLine1: "You're not broken. Your body is adapting. Understand the new rules.",
      subHeroLine2: "That's where we come in.",
    },
    founderQuote: {
      quote: "Midlife isn't decline — it's adaptation. The frameworks that worked at 25 need updating. BioRitual helps you understand what's changed and why.",
      attribution: "— The BIORITUAL Team",
    },
    featuredCollection: {
      headline: "Understanding Midlife Adaptation",
      description: "Explore how the body's signaling and recovery patterns shift — and what frameworks help you understand these changes.",
    },
    threePillars: {
      subtitle: "The Foundation",
      title: "Updated Frameworks",
      description1: "Educational systems for understanding how wellness needs evolve over time.",
      description2: "BioRitual does not provide treatment-based or outcome-driven programs.",
    },
    valueProps: {
      values: [
        { title: "Age-Aware", description: "Frameworks that acknowledge what changes after 40 — without fearmongering." },
        { title: "Family-Compatible", description: "Systems designed for people with responsibilities beyond themselves." },
        { title: "Recovery-Focused", description: "Understanding why recovery matters more now, and what influences it." },
        { title: "Long-Term Thinking", description: "Frameworks built for decades, not 30-day challenges." },
      ],
    },
    finalCTA: {
      headline: "Update Your",
      italicWord: "Framework",
      description: "Your body evolved. Your understanding should too.",
      buttonText: "Explore the framework",
    },
  },
  {
    slug: "executives",
    seo: {
      title: "Wellness Frameworks for Executives | BioRitual",
      description: "The same rigor you bring to business, applied to biology. Structured wellness frameworks for high-performers and decision-makers.",
    },
    hero: {
      backgroundImage: bioSignalsEnergyHero,
      tagline: "Strategic Wellness Frameworks for Decision-Makers.",
      headline: "The same rigor you bring to business, applied to biology.",
      bodyParagraphs: [
        "You wouldn't run a company without data. Why navigate wellness without frameworks? BioRitual provides structured, educational systems for executives who think strategically.",
        "Understand the inputs that influence energy, cognition, and resilience — with the same analytical approach you apply to everything else.",
        "BioRitual is not a medical service and does not provide medical advice, diagnosis, or treatment.",
      ],
      ctaText: "→ See the strategic framework",
      subHeroLine1: "You optimize everything else. Now apply that thinking to your biology.",
      subHeroLine2: "That's where we come in.",
    },
    founderQuote: {
      quote: "The best executives treat their health like a strategic asset. BioRitual gives you the frameworks to think about it that way.",
      attribution: "— The BIORITUAL Team",
    },
    featuredCollection: {
      headline: "Strategic Wellness Thinking",
      description: "Frameworks for understanding how energy, cognition, and resilience connect — designed for analytical minds.",
    },
    threePillars: {
      subtitle: "The Foundation",
      title: "Data-Driven Frameworks",
      description1: "Structured systems for executives who want clarity, not wellness noise.",
      description2: "BioRitual does not provide treatment-based or outcome-driven programs.",
    },
    valueProps: {
      values: [
        { title: "Strategic Approach", description: "Frameworks that mirror how you already think — systems, inputs, outputs." },
        { title: "Cognitive Edge", description: "Understand the factors that influence mental clarity and sustained focus." },
        { title: "Time-Optimized", description: "Maximum insight, minimum time. No 2-hour morning routines required." },
        { title: "Evidence-Based", description: "Frameworks grounded in research — the same rigor you expect from your team." },
      ],
    },
    finalCTA: {
      headline: "Think",
      italicWord: "Strategically",
      description: "Apply the same structured thinking to your wellness that drives your professional success.",
      buttonText: "Explore the framework",
    },
  },
  {
    slug: "millennial",
    seo: {
      title: "BioRitual | This Shouldn't Be This Confusing",
      description: "Peptides. Hormones. Supplements. GLP-1s. BioRitual exists for people who are tired of noise — not tired of health.",
    },
    hero: {
      tagline: "",
      headline: "This shouldn't be this confusing.\nIt's exhausting because too many people are confidently full of B.S.",
      bodyParagraphs: [
        "Peptides. Hormones. Supplements. GLP-1s.\nEvery week there's a new hero, a new villain, and a new podcast guest who \"finally explains everything.\"",
        "You've seen this before.",
        "You're old enough to remember when wellness meant a magazine in a waiting room. Then it became blogs. Then influencers. Then \"biohackers.\" Then TikTok doctors. Then the algorithm.",
        "Now every decision feels louder than it needs to be.",
        "BioRitual exists for people who are tired of that.",
        "Not tired of health.\nTired of noise.",
      ],
      ctaText: "Start with clarity",
      subHeroLine1: "",
      subHeroLine2: "",
    },
    founderQuote: {
      quote: "Let's be specific.\n\nThis is for you if:\n\n- You've had at least one quiet \"oh… shit\" moment about aging.\n- Your body doesn't respond the way it did at 28.\n- You're skeptical of pharma hype and influencer hype.\n- You listen to podcasts with interest — and with raised eyebrows.\n- You've tried \"just be consistent\" and discovered that biology does not care about motivational quotes.\n\nYou are not anti-science.\nYou are anti-nonsense.\n\nYou don't want a miracle.\nYou want to stop making avoidable mistakes.",
      attribution: "",
    },
    featuredCollection: {
      headline: "What we actually do",
      description: "We help you think clearly about your health.\n\nNot by giving you a reset button.\nNot by promising to \"optimize\" you into a superhero.\nBut by helping you understand what matters, what doesn't, and what comes next.\n\nWe organize decisions around:\n\n- Lifestyle and recovery\n- Training and muscle retention\n- Supplements\n- Peptides and metabolic signaling — including GLP-1s\n\nBecause certainty sells.\nClarity lasts.",
    },
    threePillars: {
      subtitle: "",
      title: "A grown-up word about peptides and GLP-1s",
      description1: "Yes, we work with peptides.\nYes, we discuss GLP-1 medications.\n\nNo, they are not magic.\nAnd no, they are not moral failures.\n\nThey are biological signals.\n\nUsed conservatively, sequenced properly, and supported with the right habits, they can help regulate appetite, improve metabolic flexibility, support recovery, and make long-term change possible.",
      description2: "The problem is not the tool.\nThe problem is pretending tools exist outside of context.",
    },
    valueProps: {
      values: [
        { title: "Tired of Noise", description: "You don't need another podcast hero. You need a framework that respects your intelligence and your time." },
        { title: "Anti-Nonsense", description: "You're not anti-science. You're anti-B.S. We organize decisions, not hype cycles." },
        { title: "Context Over Magic", description: "Peptides and GLP-1s aren't miracles or moral failures. They're tools — and tools need context." },
        { title: "Clarity Over Certainty", description: "Because certainty sells. Clarity lasts. We help you think clearly, not follow blindly." },
      ],
    },
    finalCTA: {
      headline: "You don't need to reinvent yourself.",
      italicWord: "",
      description: "You just need to stop letting the loudest voice decide for you.",
      buttonText: "Start with clarity",
    },
  },
];

export function getLandingPageBySlug(slug: string): LandingPageConfig | undefined {
  return landingPages.find((lp) => lp.slug === slug);
}
