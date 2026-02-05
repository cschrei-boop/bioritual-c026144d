import { ReactNode } from "react";
import { IncludedSection } from "./product-content";

export interface ProtocolEditorialContent {
  fallbackTitle: string;
  tagline: string;
  description: ReactNode;
  whatsIncluded: IncludedSection[];
  whoIsFor: string[];
}

export const protocolEditorialContent: Record<string, ProtocolEditorialContent> = {
  // Weight Loss Protocol
  "bio-signals-weight-loss-metabolic-health": {
    fallbackTitle: "Bio Signals: Weight Loss + Metabolic Health",
    tagline: "3-Month Optimization Protocol",
    description: (
      <>
        <p className="mb-4 font-medium text-foreground">
          Weight loss isn't one molecule. It's navigating many signals—without breaking your metabolism.
        </p>
        <p className="mb-3">
          There are dozens of peptides, supplements, and strategies marketed for weight loss. Some suppress appetite. Some improve insulin sensitivity. Some protect muscle. Some help recovery.
        </p>
        <p className="mb-3">
          Most people are handed one compound and told to figure the rest out.
        </p>
        <p className="mb-3">
          Bio Signals does the opposite.
        </p>
        <p className="mb-3">
          We help you navigate the entire landscape—and design a personalized weight-loss protocol that integrates:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>GLP-1–based peptides (including retatrutide-style approaches)</li>
          <li>Supportive supplementation to protect lean mass, energy, and recovery</li>
          <li>Nutrition strategies that work with appetite signals instead of fighting them</li>
        </ul>
        <p className="mb-4">
          Not "take this and hope." A structured system that actually holds together.
        </p>
        <p className="font-medium text-foreground">
          You are enrolling in an educational and lifestyle optimization protocol — not purchasing medical treatment or individual products.
        </p>
      </>
    ),
    whatsIncluded: [
      {
        title: "The Bio Signals Protocol (3 Months)",
        items: [
          "Weight and metabolic signaling awareness",
          "Habit and behavior design",
          "Recovery and stress-load management",
          "Ongoing adjustment based on feedback",
        ],
        note: "The protocol is iterative and adapts based on participation and response.",
      },
      {
        title: "Private Client Wiki",
        description: "Each participant receives a private digital workspace.",
        items: [
          "Personalized protocol documentation",
          "Weight and metabolic tracking over time",
          "Notes and adjustments",
          "Educational references relevant to the protocol",
        ],
      },
      {
        title: "Protocol Materials",
        items: [
          "Non-itemized materials included as part of the protocol",
          "Materials are not sold separately or priced individually",
        ],
        note: "Access contingent on active participation.",
      },
      {
        title: "Reminders & Accountability",
        items: [
          "SMS and/or email reminders",
          "Periodic check-ins",
          "Prompts for tracking consistency",
        ],
      },
    ],
    whoIsFor: [
      "Structured support around weight management",
      "Clear systems instead of trial-and-error",
      "Accountability and progress tracking",
      "A feedback-driven, non-extreme approach",
      "Education alongside implementation",
    ],
  },

  // Energy Protocol
  "bio-signals-energy": {
    fallbackTitle: "Bio Signals: Energy",
    tagline: "3-Month Optimization Protocol",
    description: (
      <>
        <p className="mb-3">
          This protocol uses bio signals and behavioral frameworks to support baseline energy, daily consistency, and resilience.
        </p>
        <p className="mb-3">
          Low or inconsistent energy is often not a motivation problem — it's a signal and recovery problem. This protocol focuses on restoring rhythm, reducing volatility, and aligning lifestyle inputs so energy becomes more predictable and sustainable.
        </p>
        <p className="font-medium text-foreground">
          You are enrolling in an educational and lifestyle optimization protocol — not purchasing medical treatment or individual products.
        </p>
      </>
    ),
    whatsIncluded: [
      {
        title: "The Bio Signals Protocol (3 Months)",
        items: [
          "Energy signaling awareness",
          "Circadian and rhythm alignment",
          "Habit and behavior design",
          "Recovery and stress-load management",
          "Ongoing adjustment based on feedback",
        ],
        note: "The protocol is iterative and adapts based on participation and response.",
      },
      {
        title: "Private Client Wiki",
        description: "Each participant receives a private digital workspace.",
        items: [
          "Personalized protocol documentation",
          "Energy and rhythm tracking over time",
          "Notes and adjustments",
          "Educational references relevant to the protocol",
        ],
      },
      {
        title: "Protocol Materials",
        items: [
          "Non-itemized materials included as part of the protocol",
          "Materials are not sold separately or priced individually",
        ],
        note: "Access contingent on active participation.",
      },
      {
        title: "Reminders & Accountability",
        items: [
          "SMS and/or email reminders",
          "Periodic check-ins",
          "Prompts for tracking energy patterns and consistency",
        ],
      },
    ],
    whoIsFor: [
      "Feel functional but consistently low-energy",
      "Experience energy crashes or wide daily swings",
      "Rely heavily on stimulants to get through the day",
      "Want steadier output without forcing intensity",
      "Prefer systems, structure, and feedback over hacks",
    ],
  },

  // Performance + Recovery Protocol
  "bio-signals-performance-recovery": {
    fallbackTitle: "Bio Signals: Performance + Recovery",
    tagline: "3-Month Optimization Protocol",
    description: (
      <>
        <p className="mb-3">
          This protocol uses bio signals and behavioral frameworks to support physical performance while protecting recovery capacity.
        </p>
        <p className="mb-3">
          Performance without recovery leads to stagnation, injury, or burnout. This protocol focuses on output with feedback intact, aligning training, recovery, and lifestyle inputs so adaptation can occur without forcing the system.
        </p>
        <p className="font-medium text-foreground">
          You are enrolling in an educational and lifestyle optimization protocol — not purchasing medical treatment or individual products.
        </p>
      </>
    ),
    whatsIncluded: [
      {
        title: "The Bio Signals Protocol (3 Months)",
        items: [
          "Performance and recovery signaling awareness",
          "Training load and stress-management frameworks",
          "Recovery prioritization and rhythm alignment",
          "Lifestyle inputs that support adaptation",
          "Ongoing adjustment based on feedback",
        ],
        note: "The protocol is iterative and adapts based on participation and response.",
      },
      {
        title: "Private Client Wiki",
        description: "Each participant receives a private digital workspace.",
        items: [
          "Personalized protocol documentation",
          "Training and recovery tracking over time",
          "Notes and adjustments",
          "Educational references relevant to the protocol",
        ],
      },
      {
        title: "Protocol Materials",
        items: [
          "Non-itemized materials included as part of the protocol",
          "Materials are not sold separately or priced individually",
        ],
        note: "Access contingent on active participation.",
      },
      {
        title: "Reminders & Accountability",
        items: [
          "SMS and/or email reminders",
          "Periodic check-ins",
          "Prompts for training, recovery, and readiness tracking",
        ],
      },
    ],
    whoIsFor: [
      "Train consistently and want better adaptation",
      "Feel under-recovered relative to workload",
      "Experience performance plateaus",
      "Want to improve output without increasing strain",
      "Prefer structured systems over guesswork",
    ],
  },

  // Hair + Skin Protocol
  "bio-signals-hair-skin": {
    fallbackTitle: "Bio Signals: Hair + Skin",
    tagline: "3-Month Optimization Protocol",
    description: (
      <>
        <p className="mb-3">
          This protocol uses bio signals and behavioral frameworks to support skin quality, tissue integrity, and hair health over time.
        </p>
        <p className="mb-3">
          Hair and skin are outward expressions of internal balance, recovery, and resource allocation. This protocol focuses on supporting signaling pathways that influence tissue quality, while aligning lifestyle, recovery, and consistency.
        </p>
        <p className="font-medium text-foreground">
          You are enrolling in an educational and lifestyle optimization protocol — not purchasing medical treatment or individual products.
        </p>
      </>
    ),
    whatsIncluded: [
      {
        title: "The Bio Signals Protocol (3 Months)",
        items: [
          "Tissue signaling awareness",
          "Skin and hair-supportive routines",
          "Recovery and stress-load alignment",
          "Lifestyle inputs that influence tissue quality",
          "Ongoing adjustment based on feedback",
        ],
        note: "The protocol is iterative and adapts based on participation and response.",
      },
      {
        title: "Private Client Wiki",
        description: "Each participant receives a private digital workspace.",
        items: [
          "Personalized protocol documentation",
          "Tracking of routines and observations",
          "Notes and adjustments",
          "Educational references relevant to the protocol",
        ],
      },
      {
        title: "Protocol Materials",
        items: [
          "Non-itemized materials included as part of the protocol",
          "Materials are not sold separately or priced individually",
        ],
        note: "Access contingent on active participation.",
      },
      {
        title: "Reminders & Accountability",
        items: [
          "SMS and/or email reminders",
          "Periodic check-ins",
          "Prompts for routine consistency and reflection",
        ],
      },
    ],
    whoIsFor: [
      "Care about visible indicators of health and maintenance",
      "Want to support skin quality and resilience",
      "Want to support hair health as part of a broader system",
      "Prefer long-term maintenance over short-term fixes",
      "Want structure, tracking, and consistency",
    ],
  },

  // Longevity Protocol
  "bio-signals-longevity": {
    fallbackTitle: "Bio Signals: Longevity",
    tagline: "3-Month Optimization Protocol",
    description: (
      <>
        <p className="mb-3">
          This protocol uses bio signals and behavioral frameworks to support long-term health, resilience, and functional capacity over time.
        </p>
        <p className="mb-3">
          Longevity is not about chasing extremes or short-term interventions. It's about preserving optionality, maintaining recovery capacity, and aligning daily inputs with long-term outcomes. This protocol focuses on structure, feedback, and consistency rather than forcing biological processes.
        </p>
        <p className="font-medium text-foreground">
          You are enrolling in an educational and lifestyle optimization protocol — not purchasing medical treatment or individual products.
        </p>
      </>
    ),
    whatsIncluded: [
      {
        title: "The Bio Signals Protocol (3 Months)",
        items: [
          "Long-term signaling awareness",
          "Recovery-first lifestyle alignment",
          "Stress and load management",
          "Habit design for sustainability",
          "Ongoing adjustment based on feedback",
        ],
        note: "The protocol is iterative and adapts based on participation and response.",
      },
      {
        title: "Private Client Wiki",
        description: "Each participant receives a private digital workspace.",
        items: [
          "Personalized protocol documentation",
          "Longitudinal tracking and observations",
          "Notes and adjustments",
          "Educational references relevant to the protocol",
        ],
      },
      {
        title: "Protocol Materials",
        items: [
          "Non-itemized materials included as part of the protocol",
          "Materials are not sold separately or priced individually",
        ],
        note: "Access contingent on active participation.",
      },
      {
        title: "Reminders & Accountability",
        items: [
          "SMS and/or email reminders",
          "Periodic check-ins",
          "Prompts for routine consistency and reflection",
        ],
      },
    ],
    whoIsFor: [
      "Think in multi-year time horizons",
      "Want to preserve energy, function, and resilience",
      "Prefer maintenance and prevention frameworks",
      "Value consistency over intensity",
      "Want systems that age with them",
    ],
  },

  // Cognition + Brain Health Protocol
  "bio-signals-cognition-brain-health": {
    fallbackTitle: "Bio Signals: Cognition + Brain Health",
    tagline: "3-Month Optimization Protocol",
    description: (
      <>
        <p className="mb-3">
          This protocol uses bio signals and behavioral frameworks to support cognitive function, mental clarity, and long-term brain health.
        </p>
        <p className="mb-3">
          Cognition is influenced by sleep, recovery, stress load, nutrition, and signaling balance. Rather than forcing focus or overstimulation, this protocol emphasizes clarity, stability, and cognitive resilience through structured inputs and feedback.
        </p>
        <p className="font-medium text-foreground">
          You are enrolling in an educational and lifestyle optimization protocol — not purchasing medical treatment or individual products.
        </p>
      </>
    ),
    whatsIncluded: [
      {
        title: "The Bio Signals Protocol (3 Months)",
        items: [
          "Cognitive signaling awareness",
          "Sleep and recovery alignment",
          "Stress-load and attention management",
          "Habit and environment design",
          "Ongoing adjustment based on feedback",
        ],
        note: "The protocol is iterative and adapts based on participation and response.",
      },
      {
        title: "Private Client Wiki",
        description: "Each participant receives a private digital workspace.",
        items: [
          "Personalized protocol documentation",
          "Cognitive patterns and routine tracking",
          "Notes and adjustments",
          "Educational references relevant to the protocol",
        ],
      },
      {
        title: "Protocol Materials",
        items: [
          "Non-itemized materials included as part of the protocol",
          "Materials are not sold separately or priced individually",
        ],
        note: "Access contingent on active participation.",
      },
      {
        title: "Reminders & Accountability",
        items: [
          "SMS and/or email reminders",
          "Periodic check-ins",
          "Prompts for focus, clarity, and routine consistency",
        ],
      },
    ],
    whoIsFor: [
      "Want to support focus, clarity, and mental stamina",
      "Experience brain fog or cognitive inconsistency",
      "Work in cognitively demanding environments",
      "Want to protect long-term brain health",
      "Prefer systems and structure over short-term stimulants",
    ],
  },
};
