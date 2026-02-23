// Shared content for all product pages

export interface FAQ {
  question: string;
  answer: string;
}

export interface Disclosure {
  title: string;
  content: string;
}

export interface IncludedSection {
  title: string;
  description?: string;
  items: string[];
  note?: string;
}

// Standard FAQ used across all Bio Signals protocols
export const standardProtocolFaqs: FAQ[] = [
  {
    question: "Is this a medical program?",
    answer: "No. This is an educational and lifestyle optimization protocol. It does not provide medical advice, diagnosis, or treatment."
  },
  {
    question: "Are peptides being sold on this site?",
    answer: "No. No individual compounds, substances, or peptides are sold, itemized, or priced on this site."
  },
  {
    question: "What's included?",
    answer: "Everything you need is included — the peptides, the supplies, Jesse for the full 3 months, your private Notion log, and your client wiki. Nothing is sold separately."
  },
  {
    question: "Do I need a prescription?",
    answer: "This protocol does not prescribe or dispense medication. Participants are responsible for consulting appropriate licensed professionals where applicable."
  },
  {
    question: "Is this suitable for everyone?",
    answer: "No. This protocol is not appropriate for individuals seeking medical treatment, diagnosis, or condition-specific care. Always consult a qualified healthcare professional before making changes related to health or wellness."
  },
  {
    question: "Are results guaranteed?",
    answer: "No. Outcomes vary based on individual biology, participation, consistency, and context. No specific results are promised or implied."
  },
  {
    question: "What happens after the 3 months?",
    answer: "The protocol concludes after three months. Continued use of learned frameworks and systems is optional and self-directed unless otherwise arranged."
  },
  {
    question: "Is this a subscription?",
    answer: "No. This is a one-time purchase for a defined 3-month protocol."
  }
];

// Standard disclosures used across all protocols
export const standardProtocolDisclosures: Disclosure[] = [
  {
    title: "Educational Disclaimer",
    content: "This service provides education, coaching, and lifestyle optimization guidance only. It does not provide medical advice, diagnosis, or treatment."
  },
  {
    title: "No Medical Provider Relationship",
    content: "Participation does not create a doctor–patient, clinician–patient, or other healthcare provider relationship. You are responsible for consulting licensed healthcare professionals as appropriate."
  },
  {
    title: "What's Included",
    content: "Everything specified in the protocol is included — peptides, supplies, Jesse, Notion log, and client wiki. Nothing is sold separately or priced individually."
  },
  {
    title: "No Guaranteed Outcomes",
    content: "Results vary based on individual participation, biology, and context. No specific outcomes are promised or guaranteed."
  }
];

// Standard coaching disclosures (slightly different wording)
export const coachingDisclosures: Disclosure[] = [
  {
    title: "Educational Disclaimer",
    content: "1:1 Optimization Coaching provides educational and lifestyle support only. It does not provide medical advice, diagnosis, or treatment. All guidance is informational and educational in nature."
  },
  {
    title: "No Medical Provider Relationship",
    content: "Participation in this coaching program does not create a doctor–patient, clinician–patient, or other healthcare provider relationship. You are responsible for consulting licensed healthcare professionals as appropriate."
  },
  {
    title: "No Guaranteed Outcomes",
    content: "Results vary based on individual participation, biology, and context. No specific outcomes are promised or guaranteed."
  },
  {
    title: "No Substances Sold",
    content: "We do not sell, prescribe, or provide peptides, supplements, or any other substances. Any educational discussion of compounds is for informational purposes only."
  }
];

// Coaching-specific FAQs
export const coachingFaqs: FAQ[] = [
  {
    question: "Is this medical advice or treatment?",
    answer: "No. 1:1 Optimization Coaching provides educational guidance and lifestyle support. We do not diagnose, treat, or prescribe. You remain responsible for consulting licensed healthcare professionals."
  },
  {
    question: "What happens during weekly calls?",
    answer: "Calls are focused on understanding your goals, reviewing progress, adjusting protocols, and providing educational context. The format is conversational and tailored to your needs."
  },
  {
    question: "How does async support work?",
    answer: "You'll have access to private messaging for questions between calls. Responses are typically within 24–48 hours on business days."
  },
  {
    question: "What's the difference between 3 and 6 months?",
    answer: "Both include the same level of support. The 6-month option provides extended time for deeper optimization and includes a meaningful savings compared to two 3-month enrollments."
  },
  {
    question: "Can I cancel or get a refund?",
    answer: "Once onboarding begins, refunds are not available. Coaching is a time-bound commitment. Please review our Terms of Service before enrolling."
  },
  {
    question: "Do you sell peptides or supplements?",
    answer: "No. We do not sell, prescribe, or provide any substances. Any discussion of compounds is educational only."
  },
  {
    question: "Who is coaching right for?",
    answer: "Coaching is for self-directed individuals who want structured guidance, accountability, and educational support in their optimization journey. It's not for those seeking quick fixes or medical treatment."
  },
  {
    question: "How do I get started?",
    answer: "After purchase, you'll receive onboarding instructions within 24–48 hours. Your first call will be scheduled based on mutual availability."
  }
];

// Standard "What's Included" sections for protocols (legacy fallback — protocol-content.tsx now uses verbatim blocks)
export const standardProtocolIncludes: IncludedSection[] = [
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
      "It builds a picture of your history, your goal, and your starting point before your protocol is confirmed",
    ],
  },
  {
    title: "Jesse, for the full 3 months",
    items: [
      "Your personal AI coach, available in WhatsApp or iMessage throughout the protocol",
      "Jesse tracks what's changing, flags what's worth paying attention to, and shares weekly insights",
    ],
  },
  {
    title: "Your private Notion log",
    items: [
      "Jesse maintains a structured record of your protocol",
      "You don't fill it out. Jesse builds it through your conversations",
    ],
  },
  {
    title: "A private client wiki",
    items: [
      "Educational context for every element of your protocol",
      "What each compound does, why it's included, and what you're watching for",
    ],
  },
];
