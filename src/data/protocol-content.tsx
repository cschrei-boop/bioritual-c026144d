import { ReactNode } from "react";
import { IncludedSection } from "./product-content";

export interface ProtocolEditorialContent {
  fallbackTitle: string;
  tagline: string;
  description: ReactNode;
  whatsIncluded: IncludedSection[];
  whoIsFor: string[];
  showDexaBlock?: boolean;
}

// Map legacy protocol slugs → canonical Shopify handles
export const protocolSlugMap: Record<string, string> = {
  "bio-signals-weight-loss": "bio-signals-weight-loss-metabolic-health",
  "bio-signals-cognition": "bio-signals-cognition-brain-health",
  // Others map to themselves (no redirect needed)
};

// Resolve a handle to its canonical form
export function resolveProtocolHandle(handle: string | undefined): string | undefined {
  if (!handle) return undefined;
  const normalized = handle.trim().toLowerCase();
  return protocolSlugMap[normalized] || normalized;
}

// Universal What's Included block — used on all protocol pages
const universalWhatsIncluded: IncludedSection[] = [
  {
    title: "The peptides and everything you need to use them",
    items: [
      "The compounds, the supplies, and the materials arrive directly to you",
      "You don't source anything separately or figure out dosing alone",
      "Your protocol specifies what, how much, and when",
    ],
  },
  {
    title: "A consultation before anything ships",
    items: [
      "Jesse — your personal AI coach — walks you through an intake conversation first",
      "Not a form — a dialogue",
      "It builds a picture of your history, your goal, and your starting point before your protocol is confirmed and materials are sent",
    ],
  },
  {
    title: "Jesse, for the full 3 months",
    items: [
      "Your personal AI coach, available in WhatsApp or iMessage throughout the protocol",
      "Jesse tracks what's changing, flags what's worth paying attention to, and shares weekly insights — or real-time ones when something notable happens",
      "It asks more than it tells. That's intentional",
    ],
  },
  {
    title: "Your private Notion log",
    items: [
      "Jesse maintains a structured record of your protocol — what you're taking, what you're tracking, what's shifting",
      "You don't fill it out. Jesse builds it through your conversations",
      "At any point you have a clear, organized picture of where you are",
    ],
  },
  {
    title: "A private client wiki",
    items: [
      "Educational context for every element of your protocol",
      "What each compound does, why it's included for your goal, and what you're watching for over 3 months",
      "You understand what you're doing and why",
    ],
  },
];

// DEXA block — Weight Loss + Performance only
const dexaBlock: IncludedSection = {
  title: "DEXA scan (where available)",
  items: [
    "A DEXA scan gives you an objective baseline — body composition, not just weight",
    "We provide a redemption code for a partner provider near you",
    "Availability varies by location",
  ],
};

export const protocolEditorialContent: Record<string, ProtocolEditorialContent> = {
  // Weight Loss Protocol
  "bio-signals-weight-loss-metabolic-health": {
    fallbackTitle: "Bio Signals: Weight Loss + Metabolic Health",
    tagline: "3-Month Optimization Protocol",
    showDexaBlock: true,
    description: (
      <>
        <h3 className="text-xl md:text-2xl mb-3 font-medium text-foreground">
          Weight loss isn't one problem. It's about six, running simultaneously.
        </h3>
        <p className="mb-3 text-foreground/80">
          Appetite. Metabolism. Lean mass. Energy. Recovery. Hormones. A protocol that only addresses one of them will eventually hit a wall.
        </p>
        <p className="mb-3">
          GLP-1 compounds changed what's possible for metabolic health. They also generated approximately one thousand hot takes, half of which exist to sell you something and the other half to shame you for considering it.
        </p>
        <p className="mb-3">
          Here's the unsexy version: they work when they're part of a system. They don't work as a substitute for one.
        </p>
        <p className="mb-3">
          This protocol is built around your specific metabolic picture — not a generic stack. Jesse — your personal AI coach — starts by understanding your history, your starting point, and what you've already tried. The peptide approach follows from that conversation, not before it.
        </p>
        <p className="mb-3">
          Compounds we work with in this area include GLP-1 based peptides such as retatrutide-style approaches, alongside supportive compounds for lean mass retention, energy, and recovery. What's right for you depends on your situation. That's what the consultation is for.
        </p>
      </>
    ),
    whatsIncluded: [...universalWhatsIncluded, dexaBlock],
    whoIsFor: [
      "You've tried approaches that worked briefly and then stopped",
      "You're not looking for aggressive or extreme",
      "You want something that accounts for the whole picture — appetite, energy, muscle, metabolism — and builds from there",
      "You prefer to understand what you're doing and why",
    ],
  },

  // Energy Protocol
  "bio-signals-energy": {
    fallbackTitle: "Bio Signals: Energy",
    tagline: "3-Month Optimization Protocol",
    description: (
      <>
        <h3 className="text-xl md:text-2xl mb-3 font-medium text-foreground">
          If your energy were a stock, it would be flagged for volatility.
        </h3>
        <p className="mb-3 text-foreground/80">
          Crashing by 2pm. Relying on caffeine to feel human. Functional, but barely. This protocol is for that specific kind of tired.
        </p>
        <p className="mb-3">
          Low energy is rarely about motivation. It's usually about signal disruption — sleep quality, cortisol rhythm, recovery debt, or some combination of the three quietly compounding over time.
        </p>
        <p className="mb-3">
          Stimulants manage the symptom. This protocol looks at what's producing it.
        </p>
        <p className="mb-3">
          Jesse — your personal AI coach — will ask about your sleep, your stress load, your training, your diet, and your current inputs before anything is recommended. The goal is to restore a baseline that doesn't require constant management — energy that's there without forcing it.
        </p>
        <p className="mb-3">
          Compounds in this area support mitochondrial function, cortisol regulation, and recovery signaling. The specific approach depends on what Jesse finds in your intake.
        </p>
      </>
    ),
    whatsIncluded: [...universalWhatsIncluded],
    whoIsFor: [
      "You function. You're not broken",
      "But you know the difference between this and how you used to feel, and the gap is widening",
      "You're tired of propping yourself up and want to understand what's actually going on",
    ],
  },

  // Performance + Recovery Protocol
  "bio-signals-performance-recovery": {
    fallbackTitle: "Bio Signals: Performance + Recovery",
    tagline: "3-Month Optimization Protocol",
    showDexaBlock: true,
    description: (
      <>
        <h3 className="text-xl md:text-2xl mb-3 font-medium text-foreground">
          You're putting in the work. Your recovery isn't keeping up.
        </h3>
        <p className="mb-3 text-foreground/80">
          Plateaus, soreness that lingers, output that isn't matching effort. The problem is usually not the training. It's what happens after.
        </p>
        <p className="mb-3">
          The adaptation happens during recovery, not during the session. If recovery is incomplete, training accumulates as stress rather than stimulus. More volume doesn't fix that. Better recovery does.
        </p>
        <p className="mb-3">
          Jesse — your personal AI coach — will assess your training load, your sleep, your nutrition, and your current recovery inputs before anything is recommended. The protocol is built around restoring the balance between output and adaptation.
        </p>
        <p className="mb-3">
          Compounds in this area support tissue repair, growth hormone signaling, and recovery capacity. The specific approach depends on what Jesse identifies in your intake.
        </p>
      </>
    ),
    whatsIncluded: [...universalWhatsIncluded, dexaBlock],
    whoIsFor: [
      "You train consistently and the results aren't matching the effort",
      "Recovery takes longer than it used to",
      "You've hit a plateau you can't think your way out of",
      "You want to understand the mechanism, not just follow a plan",
    ],
  },

  // Hair + Skin Protocol
  "bio-signals-hair-skin": {
    fallbackTitle: "Bio Signals: Hair + Skin",
    tagline: "3-Month Optimization Protocol",
    description: (
      <>
        <h3 className="text-xl md:text-2xl mb-3 font-medium text-foreground">
          Hair and skin aren't vanity metrics. They're readouts.
        </h3>
        <p className="mb-3 text-foreground/80">
          What shows up on the outside reflects what's happening on the inside. This protocol works on both.
        </p>
        <p className="mb-3">
          Collagen production, tissue integrity, inflammation load, hormonal balance — these are the upstream variables. Hair thinning and skin quality are often downstream signals of something systemic, not isolated problems with isolated fixes.
        </p>
        <p className="mb-3">
          This protocol supports the signaling pathways that influence tissue quality and regeneration, while addressing recovery, nutrition, and lifestyle inputs that affect them. Compounds in this area include peptides that support collagen synthesis and tissue repair.
        </p>
        <p className="mb-3">
          Jesse — your personal AI coach — will ask about your history — hormonal shifts, recent changes, current health context — before the protocol is confirmed. Visible results take time. Three months gives the system enough runway to produce something measurable.
        </p>
      </>
    ),
    whatsIncluded: [...universalWhatsIncluded],
    whoIsFor: [
      "You've noticed changes you'd like to slow down or reverse",
      "You're not chasing dramatic transformation — you want to support what's there and maintain it over time",
      "You prefer understanding the mechanism to just buying a product and hoping",
    ],
  },

  // Longevity Protocol
  "bio-signals-longevity": {
    fallbackTitle: "Bio Signals: Longevity",
    tagline: "3-Month Optimization Protocol",
    description: (
      <>
        <h3 className="text-xl md:text-2xl mb-3 font-medium text-foreground">
          You're not trying to live forever. You're trying to stay capable.
        </h3>
        <p className="mb-3 text-foreground/80">
          Energy, function, resilience, and recovery — the things that make the next 30 years worth having. This protocol is built around preserving them.
        </p>
        <p className="mb-3">
          Longevity science has produced a lot of noise. Rapamycin debates. NAD+ discourse. Cold plunge evangelism. Most of it is either premature or irrelevant to anyone not already in excellent baseline health.
        </p>
        <p className="mb-3">
          This protocol starts from a different question: what inputs, consistently maintained, give your biology the best chance of staying functional over time? Cellular repair, inflammation management, metabolic flexibility, and recovery capacity are the variables that matter most at 40, 45, and 50.
        </p>
        <p className="mb-3">
          Compounds in this area support autophagy, cellular repair signaling, and metabolic resilience. Jesse — your personal AI coach — will assess your current baseline, your risk factors, and your priorities before anything is confirmed. This is a long game. Three months is the beginning of the framework, not the finish.
        </p>
      </>
    ),
    whatsIncluded: [...universalWhatsIncluded],
    whoIsFor: [
      "You think in decades, not months",
      "You watched a parent decline earlier than they should have and decided that wasn't your plan",
      "You're not sick, but you're paying attention",
      "You want a system that builds, not a product that promises",
    ],
  },

  // Cognition + Brain Health Protocol
  "bio-signals-cognition-brain-health": {
    fallbackTitle: "Bio Signals: Cognition + Brain Health",
    tagline: "3-Month Optimization Protocol",
    description: (
      <>
        <h3 className="text-xl md:text-2xl mb-3 font-medium text-foreground">
          Brain fog is not a personality trait.
        </h3>
        <p className="mb-3 text-foreground/80">
          Inconsistent focus. Slow recall. Cognitive fatigue by midday. This protocol is built for minds that are working hard and not getting the output they expect.
        </p>
        <p className="mb-3">
          Cognition is downstream of sleep, stress, gut health, inflammation, and metabolic function. Stimulants override the signal. This protocol works on the signal.
        </p>
        <p className="mb-3">
          The gut-brain axis, neuroinflammation, and sleep quality are frequent culprits in cognitive inconsistency — especially in people operating under sustained high load. Compounds in this area support neuroprotection, neuroplasticity, and recovery signaling. The specific approach depends on what Jesse — your personal AI coach — identifies in your intake.
        </p>
        <p className="mb-3">
          This protocol is particularly relevant for people with ADHD patterns, high cognitive workload, or anyone who suspects their current baseline is meaningfully below their actual capacity.
        </p>
      </>
    ),
    whatsIncluded: [...universalWhatsIncluded],
    whoIsFor: [
      "You work hard mentally and the output isn't matching the effort",
      "You've tried stimulants and found them blunt instruments",
      "You want clarity, not just activation — and you want it to last past noon",
    ],
  },
};
