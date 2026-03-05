import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import JessePhoneInput from "@/components/sections/JessePhoneInput";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ── animation helper ── */
const FadeIn = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ── conversation examples (simple text for now) ── */
const conversations = [
  {
    client: "Should I be taking creatine?",
    jesse:
      "Probably. But that question is doing a lot of work. What are you hoping creatine does for you specifically? Because the answer changes the dose, the timing, and whether it's actually the first thing worth addressing.",
  },
  {
    client: "I keep seeing stuff about BPC-157 everywhere.",
    jesse:
      "Yeah, it's having a moment. Some of the attention is earned — it accelerates tissue repair across gut, tendon, and ligament pathways. Some of it is Reddit enthusiasm outrunning the evidence. What's going on with you that made it catch your eye?",
  },
  {
    client: "I fell off my protocol for a week.",
    jesse:
      "How long was the break last time? If it's shorter, that's the metric that matters. The protocol doesn't care about streaks. It cares about what you do next. What's the first thing you want to restart with?",
  },
  {
    client: "My buddy says GLP-1s are just Ozempic for lazy people.",
    jesse:
      "Your buddy sounds like your cousin who also doesn't believe in therapy and/or sunscreen. GLP-1 peptides are biological signals your body already produces. Calling them a shortcut is like calling glasses a shortcut for reading. What made this come up for you?",
  },
];

/* ── accordion items ── */
const accordionItems = [
  {
    headline: "Asks before it answers",
    text: "Jesse doesn't hand you a supplement list because you mentioned you're tired. It'll ask what tired means to you, what you've tried, and whether you've actually stuck with any of it.",
  },
  {
    headline: "Lives where you already are",
    text: "WhatsApp or iMessage. Wherever you text people. Jesse shows up there because the last thing you need is another app you'll open twice.",
  },
  {
    headline: "Keeps a record so you don't have to",
    text: "As you talk, Jesse builds a private log — what you're working on, what's changing, what's worth watching. You never fill out a form. Jesse does the admin.",
  },
  {
    headline: "Discloses everything",
    text: "When Jesse recommends something BioRitual has a financial relationship with, Jesse says so. Every time. Without being asked. That's the minimum standard for not being full of it.",
  },
  {
    headline: "Stays skeptical — including about us",
    text: "If something is overhyped, Jesse names it. If the evidence is thin, Jesse says so. Including on compounds BioRitual sells. The point of a thinking partner is that they think, not that they agree with you.",
  },
];

const JessePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Jesse — Your Personal AI Coach | BioRitual</title>
        <meta
          name="description"
          content="Jesse — your personal AI coach — lives in your WhatsApp or iMessage. A sharp, skeptical thinking partner for the wellness-overwhelmed."
        />
        <link rel="canonical" href="https://bioritual.us/ai-concierge" />
      </Helmet>
      <Header />

      <main>
        {/* ════════════════════════════════════════════
            SECTION 1 — HERO
        ════════════════════════════════════════════ */}
        <section className="pt-28 pb-20 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
                Raise your hand if you have been personally victimized by your supplement cabinet.
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10 max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                Jesse — your personal AI coach — lives in your WhatsApp or iMessage. No app to install. No dashboard to forget about. Just a sharp, skeptical thinking partner who asks questions before recommending anything — and who will tell you if you don't need what we sell.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <JessePhoneInput />
            </FadeIn>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            SECTION 2 — A CONVERSATION, NOT A CONSULTATION
        ════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">
                A conversation, not a consultation.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-5 text-foreground/75 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>
                  You text Jesse. Jesse texts back. That's it. No onboarding flow, no personality quiz, no "tell us about your wellness goals" dropdown menu.
                </p>
                <p>
                  Jesse asks what brought you here. What you've tried. What worked. What didn't. What's collecting dust next to the turmeric gummies. And specifically why it's collecting dust — because the failure mode matters more than the failure.
                </p>
                <p>
                  If you're the kind of person who bought ashwagandha from a podcast ad, collagen because Goop told you to, and a greens powder from a man with a ring light, the abs, and a birth certificate from 2002 — Jesse already knows the pattern. Every jar in that cabinet represents misplaced confidence and a little piece of you who died.
                </p>
                <p>Jesse's job is to make sure the next recommendation isn't another jar.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── SECTION 2B — CONVERSATION EXAMPLES (simple text for now) ── */}
        <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <div className="grid gap-6 md:grid-cols-2">
              {conversations.map((convo, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="bg-secondary rounded-2xl p-6">
                    <p className="text-sm font-medium text-foreground mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {convo.client}
                    </p>
                    <p className="text-sm text-foreground/60 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {convo.jesse}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            SECTION 3 — WHO THIS IS FOR
        ════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">
                You're not uninformed. You're overwhelmed.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-5 text-foreground/75 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>
                  Something happened recently. Maybe bloodwork came back wrong. Maybe you watched a parent decline and decided that wasn't your plan. Maybe you just turned 38 and your body stopped responding the way it used to, and the advice that worked at 25 — "just be consistent" — turns out to be useless when your biology has different opinions.
                </p>
                <p>
                  You've done the reading. You've listened to the podcasts. You've gone down the Reddit rabbit holes at 1am. You are not short on information. You are drowning in it, and most of it was written by someone who either wants to sell you something or has a physique built on genetics and undisclosed help.
                </p>
                <p>
                  You want a thinking partner who will be straight with you. Who won't sell you confidence it hasn't earned. Who will say "the evidence on this is thin" when it's thin, and "this is overhyped" when it is — including the stuff we sell.
                </p>
                <p>If that sounds like what you've been looking for, Jesse is for you.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            SECTION 4 — WHAT THE TRIAL IS FOR
        ════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">
                Seven days to figure out if we're right for you. Probably less.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-5 text-foreground/75 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>
                  BioRitual builds personalized peptide and longevity protocols. Jesse is how you figure out if one of those protocols actually fits your situation — before you spend anything or commit to anything.
                </p>
                <p>
                  During the trial, Jesse builds a picture: what triggered your interest, where your baseline is, what you've tried before and why it didn't stick, and what you're actually trying to accomplish in your own words. Once that picture is clear — whether that takes two days or six — Jesse makes a recommendation. Or Jesse tells you a protocol isn't the right move yet and explains what to think about first.
                </p>
                <p>
                  Every protocol gets a safety check from our medical director before it ships. Not a redesign — a confirmation that nothing in your history makes it the wrong call. If Jesse's recommendation turns out to be wrong, you can switch protocols or get a refund. That's not a disclaimer. That's how we think about it.
                </p>
                <p className="text-foreground text-lg md:text-xl font-medium">
                  Not everyone needs what we sell. We'll tell you if you don't.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="mt-10">
                <JessePhoneInput />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            SECTION 5 — HOW JESSE WORKS (ACCORDION)
        ════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-10">
                How Jesse works.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Accordion type="single" collapsible className="w-full">
                {accordionItems.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-foreground/10">
                    <AccordionTrigger className="text-left text-lg md:text-xl hover:no-underline py-5">
                      {item.headline}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/60 leading-relaxed pb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {item.text}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            SECTION 6 — WHAT JESSE IS NOT
        ════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-secondary">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">
                What Jesse is not.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-5 text-foreground/75 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>
                  Not a doctor. Not a replacement for one. Not going to tell you what you want to hear. Not going to pretend it's been through what you've been through, because it hasn't. Not going to bury a recommendation in language designed to make you miss the financial relationship behind it.
                </p>
                <p>
                  And not going to stall you. If Jesse has enough information to make a recommendation on day two, you'll get it on day two. The trial is up to seven days because some people need the time. If you don't, neither does Jesse.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            SECTION 7 — FINAL CTA
        ════════════════════════════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-10">
                The supplement graveyard deserves a better ending.
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex justify-center">
                <JessePhoneInput
                  helperText="Free for 7 days. Jesse will text you within a few minutes. No app to download. Works on WhatsApp or iMessage."
                />
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JessePage;
