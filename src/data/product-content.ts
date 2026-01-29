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
    question: 'What does "protocol materials" mean?',
    answer: "Protocol materials refer to non-itemized resources that may be included or coordinated as part of the overall educational and concierge experience. These materials are not available for individual purchase."
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
    title: "Materials Disclosure",
    content: "Any materials provided are included as part of a broader protocol experience and are not sold individually. No substances are itemized or priced."
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

// Standard "What's Included" sections for protocols
export const standardProtocolIncludes: IncludedSection[] = [
  {
    title: "The Bio Signals Protocol (3 Months)",
    items: [
      "Signaling awareness and alignment",
      "Habit and behavior design",
      "Recovery and stress-load management",
      "Ongoing adjustment based on feedback"
    ],
    note: "The protocol is iterative and adapts based on participation and response."
  },
  {
    title: "Private Client Wiki",
    description: "Each participant receives a private digital workspace used to support the protocol.",
    items: [
      "Personalized protocol documentation",
      "Progress tracking over time",
      "Notes and adjustments",
      "Educational references relevant to the protocol"
    ],
    note: "The wiki functions as a central reference point throughout the protocol period."
  },
  {
    title: "Protocol Materials",
    description: "Certain non-itemized materials may be included or coordinated as part of the protocol to support participation.",
    items: [
      "Materials are not sold separately",
      "Materials are not assigned individual prices",
      "Materials are provided only within the context of the protocol"
    ],
    note: "Access to materials is contingent on active participation in the protocol."
  },
  {
    title: "Reminders & Accountability",
    description: "Participants may opt into:",
    items: [
      "SMS and/or email reminders",
      "Periodic check-ins",
      "Prompts for tracking and consistency"
    ],
    note: "These tools are designed to support adherence and awareness."
  }
];
