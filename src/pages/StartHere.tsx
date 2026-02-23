import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Route, Compass, ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";
import ShopByGoal from "@/components/sections/ShopByGoal";

interface PathCard {
  id: string;
  title: string;
  bestIf: string;
  body: string;
  extra?: string;
  ctaLabel: string;
  href: string;
  icon: LucideIcon;
}

const paths: PathCard[] = [
  {
    id: "jesse",
    title: "Talk to Jesse™ first",
    bestIf: "I want to understand this before I commit to anything.",
    body: "Jesse™ — your personal AI coach — lives in your WhatsApp or iMessage. Ask it anything about peptides, GLP-1s, longevity science, or metabolic health. It'll give you straight answers, tell you when the evidence is thin, and help you figure out whether any of this makes sense for your situation.",
    extra: "No protocol. No peptides. Just clarity.",
    ctaLabel: "Meet Jesse™",
    href: "/ai-concierge",
    icon: Sparkles,
  },
  {
    id: "protocols",
    title: "Bio Signals Protocols",
    bestIf: "I know what I want to work on. I want a structured system to do it.",
    body: "A 3-month protocol built around your specific goal. Jesse™ — your personal AI coach — handles your intake, your protocol is confirmed, everything ships, and Jesse™ stays with you.",
    extra: "Six goal areas: Weight Loss, Energy, Performance + Recovery, Hair + Skin, Cognition, Longevity.",
    ctaLabel: "See protocols",
    href: "/collection/protocols",
    icon: Route,
  },
  {
    id: "coaching",
    title: "3-Month Coaching Sprint",
    bestIf: "I want a human in the room. Someone who built this and knows it cold.",
    body: "Everything in a Bio Signals Protocol, plus direct access to Hans and Luis — the founders — via weekly video calls and ongoing oversight. Jesse™ — your personal AI coach — is still part of the experience. This adds the human layer for people who want it.",
    extra: "Not everyone needs this. If you're unsure, start with a protocol. We'll tell you if you should escalate.",
    ctaLabel: "Learn about the Coaching Sprint",
    href: "/coaching",
    icon: Compass,
  },
];

const StartHere = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Start Here | BioRitual</title>
        <meta name="description" content="Not sure where to begin? Good. That's what this page is for. Three paths, one framework." />
        <link rel="canonical" href="https://bioritual.us/start-here" />
      </Helmet>
      <Header />
      <main>
        <Hero
          tagline=""
          headline="Not sure where to begin? Good. That's what this page is for."
          bodyParagraphs={["Most people who find BioRitual know something needs to change. They're just not sure what, or how much support they actually need. These three paths exist for exactly that reason."]}
          ctaText=""
          ctaLink=""
          subHeroLine1=""
          subHeroLine2=""
        />
        <section className="px-6 md:px-12 lg:px-16 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {paths.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div key={card.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <Link to={card.href} className={cn("group block h-full p-6 lg:p-8 border border-border rounded-lg bg-background transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:border-foreground/20")}>
                    <div className="mb-4"><Icon className="w-6 h-6 text-foreground/60 group-hover:text-foreground/80 transition-colors" /></div>
                    <h3 className="text-xl lg:text-2xl mb-2">{card.title}</h3>
                    <p className="text-sm text-foreground/60 mb-4 italic">Best if: "{card.bestIf}"</p>
                    <p className="text-foreground/80 mb-3 leading-normal">{card.body}</p>
                    {card.extra && <p className="text-sm text-foreground/60 mb-6">{card.extra}</p>}
                    <span className="inline-flex items-center gap-2 text-foreground font-medium group-hover:underline underline-offset-4">→ {card.ctaLabel}<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
        <section className="py-12 px-6 md:px-12 lg:px-16 bg-secondary rounded-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-4">Not sure which path?</h2>
            <p className="text-foreground/70 leading-normal mb-6">Ask Jesse™. Seriously. Describe your situation and Jesse™ — your personal AI coach — will tell you which path makes sense and why. It has no incentive to push you toward the most expensive option. If a lower tier is right for you, that's what it'll say.</p>
            <Link to="/ai-concierge" className="inline-block text-sm tracking-[0.15em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity">→ Talk to Jesse™</Link>
          </div>
        </section>
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl mb-6">How it all connects</h2>
            <div className="space-y-4 text-foreground/80 leading-normal">
              <p>Jesse™ exists at every level. At the entry tier, Jesse™ is the product — your thinking partner for navigating the wellness noise. In a protocol, Jesse™ runs your intake, tracks your progress, and maintains your Notion log for 3 months. In the Coaching Sprint, Jesse™ does all of that while Hans and Luis provide direct oversight.</p>
              <p>You can start anywhere. People move between paths as their needs change. Starting with Jesse™ and upgrading to a protocol mid-conversation is common. There's no wrong entry point.</p>
            </div>
            <div className="mt-8">
              <Link to="/how-it-works" className="inline-block text-sm tracking-[0.15em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity">→ See how it works</Link>
            </div>
          </div>
        </section>
        <ShopByGoal />
      </main>
      <Footer />
    </div>
  );
};

export default StartHere;
