import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Route, Compass, ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import VideoHero from "@/components/sections/VideoHero";

export interface CardData {
  id: string;
  title: string;
  tagline: string;
  body: string;
  bestIf: string;
  ctaLabel: string;
  href: string;
  icon: LucideIcon;
  node: string;
}

export const defaultStartHereCards: CardData[] = [
  {
    id: "learn",
    title: "Jesse",
    tagline: "Learn & understand",
    body: "Your personal AI coach. Ask anything about peptides, GLP-1s, or longevity science — in plain language.",
    bestIf: "I want to understand this before acting.",
    ctaLabel: "Meet Jesse",
    href: "/ai-concierge",
    icon: Sparkles,
    node: "Learn",
  },
  {
    id: "focus",
    title: "Bio Signals Protocols",
    tagline: "One goal, structured plan",
    body: "3-month systems for a specific priority (metabolism, energy, recovery, cognition, longevity, hair + skin).",
    bestIf: "I know what I want to work on.",
    ctaLabel: "Explore Protocols",
    href: "/protocols",
    icon: Route,
    node: "Focus",
  },
  {
    id: "guided",
    title: "3-Month Coaching Sprint",
    tagline: "Full guidance & orientation",
    body: "Direct access to the founders — weekly sessions, ongoing oversight, and Jesse running alongside.",
    bestIf: "I don't know where to start.",
    ctaLabel: "See the Coaching Sprint",
    href: "/coaching",
    icon: Compass,
    node: "Guided",
  },
];

const WaveformBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1200 400"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <path
      d="M0,200 Q150,150 300,200 T600,200 T900,200 T1200,200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="text-foreground/[0.04]"
    />
    <path
      d="M0,220 Q150,270 300,220 T600,220 T900,220 T1200,220"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="text-foreground/[0.03]"
    />
  </svg>
);

const ContinuumBar = ({ cards }: { cards: CardData[] }) => (
  <div className="hidden md:flex items-center justify-center gap-0 mb-12">
    {cards.map((card, index) => (
      <div key={card.id} className="flex items-center">
        <Link
          to={card.href}
          className="flex flex-col items-center group"
        >
          <span className="w-3 h-3 rounded-full border-2 border-foreground/40 bg-background group-hover:bg-foreground/20 group-hover:border-foreground/60 transition-all" />
          <span className="text-xs tracking-wide text-foreground/60 mt-2 group-hover:text-foreground transition-colors">
            {card.node}
          </span>
        </Link>
        {index < cards.length - 1 && (
          <div className="w-24 lg:w-32 h-px bg-foreground/20 mx-4" />
        )}
      </div>
    ))}
  </div>
);

interface StartHereSectionProps {
  cards?: CardData[];
  footerText?: string;
  showHero?: boolean;
}

const StartHereSection = ({
  cards = defaultStartHereCards,
  footerText = "No \"best\" option—just the right one for right now. You can move between levels anytime.",
  showHero = true,
}: StartHereSectionProps) => {
  return (
    <>
      {showHero && (
        <VideoHero
          tagline="Start Here"
          title="Your body isn't random. It's sending signals."
          subtitle="Bio Signals turns signals (energy, appetite, recovery, focus, body composition) into a clear protocol—combining peptides, supplements, and nutrition into one structured system."
          description={<p>Choose the level of support that matches your clarity right now:</p>}
          minHeight="50vh"
        />
      )}

      <section className="relative px-6 md:px-12 lg:px-24 py-16 md:py-24 overflow-hidden">
        <WaveformBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Continuum Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContinuumBar cards={cards} />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  to={card.href}
                  aria-label={`${card.title} - ${card.tagline}`}
                  className={cn(
                    "group block h-full p-6 lg:p-8 border border-border rounded-lg bg-background",
                    "transition-all duration-300 ease-out",
                    "hover:shadow-lg hover:-translate-y-1 hover:border-foreground/20",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2"
                  )}
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="w-6 h-6 text-foreground/60 group-hover:text-foreground/80 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl mb-1">
                    {card.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-foreground/60 mb-4">
                    {card.tagline}
                  </p>

                  {/* Body */}
                  <p className="text-foreground/80 mb-4 leading-normal">
                    {card.body}
                  </p>

                  {/* Best If */}
                  <p className="text-sm text-foreground/60 mb-6 italic">
                    Best if: "{card.bestIf}"
                  </p>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 text-foreground font-medium group-hover:underline underline-offset-4 transition-all">
                    {card.ctaLabel}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-foreground/50 text-sm mt-12"
        >
          {footerText}
        </motion.p>
      </div>
    </section>
    </>
  );
};

export default StartHereSection;
