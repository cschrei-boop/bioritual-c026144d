import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import ShopByGoal from "@/components/sections/ShopByGoal";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const sections = [
  {
    id: "premise",
    title: "Not metaphorically. Literally.",
    paragraphs: [
      "Every habit, every choice, every pattern you repeat is a narrative in motion. The person who says \"I'll start Monday\" is telling a story. So is the person who starts on Wednesday after failing on Tuesday. The difference isn't discipline. It's authorship.",
      "Most health programs treat the body as a problem to be solved. We treat it as a system to be understood — and the person living in it as someone capable of understanding it, if given the right framework and the right information.",
      "That framework is older than peptides. Older than biohacking. It's the hero's journey — and it turns out it maps onto health with uncomfortable precision.",
    ],
  },
  {
    id: "heros-journey",
    title: "The hero's journey — the version that actually applies to your life",
    paragraphs: [
      "Every hero's journey starts at home. Not a physical place — a psychological one. The familiar. The known. The place where you are safe and, if you're honest, a little stuck.",
      "The hero leaves. Not because they're ready — heroes rarely are — but because something has shifted. A health flag. A birthday. A parent's decline. A quiet \"oh, shit\" moment at 3am. Something made staying home feel less safe than it used to.",
      "Then come the trials. Some are won. Many aren't. The hero fails, regroups, adjusts, and continues. The failures are not interruptions to the journey. They are the journey.",
      "And then the hero comes home.",
      "Not to the same home. To a better understanding of it. The destination was never the point. The point was who you became on the way back.",
    ],
  },
  {
    id: "home",
    title: "Home",
    paragraphs: [
      "Home, in this context, is where you regroup.",
      "It's the Sunday after a week that went sideways. The morning after you broke a streak you were proud of. The moment you stop, take stock, and decide what comes next.",
      "For people with ADHD patterns — and for many people who don't have a diagnosis but recognize the pattern — home is the hardest part. Because breaks feel like endings. A missed workout becomes a missed week. A bad meal becomes a bad month. The catastrophic logic of all-or-nothing thinking turns every small failure into evidence that you were never going to make it anyway.",
      "It isn't evidence of that. It's evidence that you're human.",
      "Home is not failure. Home is where the next journey begins. And the next one starts from a stronger position than the last — because you now have one less thing to try, one more thing you know about yourself, and a shorter distance between drifting and returning.",
      "The goal is not to stop breaking. The goal is to shorten the time between breaking and coming back.",
    ],
  },
  {
    id: "cost-reward",
    title: "The cost-reward analysis — and why it has to be yours",
    paragraphs: [
      "There is no universal destination.",
      "Someone who wants to run a marathon once — just to know they can — and someone who wants to win it are running the same race. The training protocols, the sacrifices, the acceptable tradeoffs, and the timelines are completely different. Neither approach is wrong. They are responses to different questions about what the reward is worth.",
      "The same logic applies to everything.",
      "McDonald's once a week may be entirely compatible with your goal. It may be incompatible with someone else's. The methodology doesn't decide that for you. It helps you decide it for yourself — clearly, honestly, without the noise of someone else's standard mapped onto your situation.",
      "This requires unpacking two things most health programs skip entirely:",
    ],
    bullets: [
      "What does the reward actually look like for you, specifically? Not the aspirational version. The real one.",
      "What are you actually willing to trade for it? Not what you think you should be willing to trade. What you will.",
    ],
    closing: "The gap between those two answers is where most health journeys fail. Not because of willpower. Because the cost-reward analysis was never done honestly in the first place.",
  },
  {
    id: "long-view",
    title: "The long view — intentionally blurry",
    paragraphs: [
      "The long-term goal exists as orientation, not as a map.",
      "Painting the details of who you'll be in 18 months when month 1 isn't clear yet is a reliable path to paralysis or disappointment. The picture gets clearer as you move — and it will look different than you expected, because you will be different than you expected.",
      "What we focus on: tomorrow, with clarity. Next month, with structure. The long term, with direction rather than definition.",
      "Three months is the unit of measurement. Long enough to produce something real and trackable — a meaningful shift in a specific direction, a body of data about how your system responds, a record of what worked and what didn't. Short enough to stay honest about what's achievable without projecting too far into a future you can't fully see yet.",
      "The protocol ends. The journey doesn't.",
    ],
  },
  {
    id: "what-better-looks-like",
    title: "What \"better\" actually looks like",
    paragraphs: [
      "Not a six-pack. Not a complete transformation. Not the version of yourself from a before-and-after photo that someone else took under good lighting.",
      "After one cycle, better looks like this: you understand your own patterns more clearly than you did three months ago. You know what triggers a break and roughly how long your breaks last. You have a more honest read of what you're willing to trade for what you want. You have data — real data, not feelings — about how your body responds to specific inputs.",
      "After several cycles, better looks like this: your breaks get shorter. Your return home gets faster. The cost-reward analysis gets sharper. The story you're telling about yourself starts to match the one you actually want to be living.",
      "That's the goal. Not perfection. Authorship.",
    ],
  },
  {
    id: "how-bioritual-fits",
    title: "How BioRitual fits into this",
    paragraphs: [
      "Jesse — your personal AI coach — is the thinking partner for the journey. Not a cheerleader. Not a drill sergeant. Something closer to a sharp colleague who has processed an enormous amount of information about biology, behavior, and habit formation, and has no interest in telling you what you want to hear.",
      "The protocols give the journey structure in three-month units. The peptides are tools within that structure — biological signals that support the work you're doing, not substitutes for doing it.",
      "The coaching sprint adds human oversight for people who want founders directly involved in the navigation.",
      "None of it works without the journey. All of it works better because of it.",
    ],
  },
];

const JourneyPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>The Journey | BioRitual</title>
        <meta name="description" content="The way you live is the story you are telling. Most people haven't chosen that story deliberately. BioRitual exists for people who are ready to." />
        <link rel="canonical" href="https://bioritual.us/the-journey" />
      </Helmet>
      <Header />

      <main>
        <Hero
          tagline=""
          headline="The way you live is the story you are telling."
          bodyParagraphs={["Most people haven't chosen that story deliberately. BioRitual exists for people who are ready to."]}
          ctaText="See how it works"
          ctaLink="/how-it-works"
          ctaText2="Talk to Jesse — your personal AI coach"
          ctaLink2="/ai-concierge"
          subHeroLine1=""
          subHeroLine2=""
        />

        {/* Sections */}
        {sections.map((section, i) => (
          <section
            key={section.id}
            className={`py-12 md:py-16 px-6 md:px-12 lg:px-16 ${i % 2 === 1 ? "bg-secondary rounded-3xl" : ""}`}
          >
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl mb-6">{section.title}</h2>
                <div className="space-y-4 text-foreground/80 leading-normal">
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {section.bullets && (
                    <ul className="list-disc pl-5 space-y-2">
                      {section.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {section.closing && <p>{section.closing}</p>}
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        <FinalCTA
          headline="Ready to start the first cycle?"
          italicWord=""
          description="You don't need to know where it ends. You just need to know where you are now."
          buttons={[
            { text: "See protocols", href: "/collection/protocols", variant: "primary" },
            { text: "Talk to Jesse first", href: "/ai-concierge", variant: "link" },
          ]}
        />
        <ShopByGoal />
      </main>

      <Footer />
    </div>
  );
};

export default JourneyPage;
