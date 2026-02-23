import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CoachingCallout from "@/components/sections/CoachingCallout";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import ShopByGoal from "@/components/sections/ShopByGoal";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const steps = [
  {
    label: "Step 1",
    title: "You talk to Jesse™",
    paragraphs: [
      "After purchase, Jesse™ — your personal AI coach — contacts you directly on WhatsApp or iMessage. Whichever you already use. No new app. No dashboard to log into.",
      "Jesse™ doesn't hand you a questionnaire. It asks questions the way a sharp, informed colleague would — building a picture of your history, your goal, your starting point, and what you've already tried. It keeps going until it has what it needs.",
      "This isn't intake for the sake of intake. What Jesse™ learns here determines what ships to you. Nothing is confirmed until that conversation is done.",
    ],
  },
  {
    label: "Step 2",
    title: "Your protocol is confirmed",
    paragraphs: [
      "Based on your intake, your specific protocol is finalized. The compounds, the sequencing, the supporting materials — built around your situation, not a generic goal category.",
      "We work with peptides and compounds relevant to your objective. Jesse™ will explain what's included, why it's included, and what you're watching for. If something doesn't make sense for your situation, it won't be in your protocol.",
      "You'll know what you're taking and why before anything ships.",
    ],
  },
  {
    label: "Step 3",
    title: "Everything arrives",
    paragraphs: [
      "Your peptides, supplies, and materials are shipped directly to you. You don't source anything separately or figure out logistics independently. Everything you need to run the protocol correctly is in what arrives.",
    ],
  },
  {
    label: "Step 4",
    title: "Jesse™ tracks with you",
    paragraphs: [
      "Jesse™ — your personal AI coach — stays active throughout your 3 months. It's not a chatbot you check in with when you remember. It's a presence in your existing messaging apps that prompts when relevant, shares insights when something shifts, and maintains a private Notion log of your protocol as you go.",
      "The log builds itself through your conversations. You don't fill out anything. By week 12, you have a structured, readable record of what you did, what changed, and what's worth continuing.",
      "Weekly summaries are the baseline. Real-time flags happen when something notable occurs — a marker improving, a pattern emerging, something worth paying attention to before next week.",
    ],
  },
  {
    label: "Step 5",
    title: "You understand what's happening and why",
    paragraphs: [
      "Your private client wiki documents every element of your protocol — what each compound does, why it's in your specific plan, and what you're watching for. This isn't a brochure. It's a working reference that evolves alongside your protocol.",
    ],
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>How It Works | BioRitual</title>
        <meta name="description" content="No forms. No guesswork. Here's exactly what happens after you decide to stop researching and start doing something about it." />
        <link rel="canonical" href="https://bioritual.us/how-it-works" />
      </Helmet>
      <Header />

      <main>
        <Hero
          tagline=""
          headline="No forms. No guesswork. No stack pulled off a shelf."
          bodyParagraphs={["Here's exactly what happens after you decide to stop researching and start doing something about it."]}
          ctaText=""
          ctaLink=""
          subHeroLine1=""
          subHeroLine2=""
        />

        {/* Steps */}
        {steps.map((step, i) => (
          <section
            key={step.label}
            className={`py-12 px-6 md:px-12 lg:px-16 ${i % 2 === 1 ? "bg-secondary rounded-3xl" : ""}`}
          >
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  {step.label}
                </p>
                <h2 className="text-3xl md:text-4xl mb-6">{step.title}</h2>
                <div className="space-y-4 text-foreground/80 leading-normal">
                  {step.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* A Note on Jesse */}
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">A note on Jesse™</h2>
              <div className="space-y-4 text-foreground/80 leading-normal">
                <p>
                  Jesse™ is an AI. It knows you know that, and it won't pretend otherwise. It hasn't been through what you've been through. It won't say it has.
                </p>
                <p>
                  What it will do is give you the best available information, ask better questions than most people in this space, and tell you plainly when a claim doesn't hold up — including claims made by BioRitual.
                </p>
                <p>
                  If Jesse™ recommends a product or tool outside of your protocol, it will tell you whether BioRitual has an affiliate relationship with that brand. Every time. Without being asked.
                </p>
                <p>
                  Jesse™ is skeptical of oversized claims. So are you. That's not a coincidence.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <CoachingCallout />

        <FinalCTA
          headline="Ready to start?"
          italicWord=""
          description="Choose the level of support that matches where you are right now."
          buttons={[
            { text: "See protocols", href: "/collection/protocols", variant: "primary" },
            { text: "Talk to Jesse™ first", href: "/ai-concierge", variant: "link" },
          ]}
        />
        <ShopByGoal />
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
