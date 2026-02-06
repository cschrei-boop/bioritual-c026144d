import truthAboutPeptidesHero from "@/assets/truth-about-peptides-hero.png";
import glp1MythsHero from "@/assets/glp1-myths-hero-v2.png";
import pillarSignals from "@/assets/pillar-signals.jpg";
import protocolWeightLossHero from "@/assets/protocol-weight-loss-hero.jpg";

export interface ArticleMetadata {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  image: string;
}

/**
 * Central registry of all editorial articles.
 * Add new entries here to automatically include them in the blog page
 * and the "Keep Reading" carousel on every article.
 * Order: newest first.
 */
export const articles: ArticleMetadata[] = [
  {
    id: "glp1-myths",
    title: "We've Heard It All",
    subtitle: "10 GLP-1 myths, side effects & safety concerns—debunked without hype or shame.",
    href: "/glp-1-myths",
    image: glp1MythsHero,
  },
  {
    id: "truth-about-peptides",
    title: "The Truth About Peptides",
    subtitle: "What peptides actually are, how they work, and what you should know before exploring them.",
    href: "/truth-about-peptides",
    image: truthAboutPeptidesHero,
  },
  {
    id: "glp1-retratutide-guide",
    title: "GLP-1s, Retratutide & Modern Biohacking",
    subtitle: "Why weight loss works best when you treat biology as a system—not a shortcut.",
    href: "/glp-1-retratutide-guide",
    image: pillarSignals,
  },
  {
    id: "weight-loss-structured-wellness",
    title: "Simple, Structured Wellness for Weight Loss",
    subtitle: "A science-backed approach to weight loss through bio signals, habits, and protocols.",
    href: "/weight-loss-structured-wellness",
    image: protocolWeightLossHero,
  },
];
