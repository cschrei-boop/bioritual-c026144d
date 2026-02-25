import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import ProtocolGrid from "@/components/sections/ProtocolGrid";
import CoachingCallout from "@/components/sections/CoachingCallout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import JesseWaitlistForm from "@/components/sections/JesseWaitlistForm";
import { Helmet } from "react-helmet-async";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Protocols = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Bio Signals Protocols | BioRitual</title>
        <meta
          name="description"
          content="Six goals. One approach. A 3-month system built around your specific biology, your starting point, and what you're actually willing to do."
        />
        <link rel="canonical" href="https://bioritual.us/protocols" />
      </Helmet>
      <Header />

      <main>
        {/* Hero */}
        <Hero
          tagline=""
          headline="Six goals. One approach. Everything you need to work on it."
          bodyParagraphs={[
            "A Bio Signals Protocol is a 3-month system built around your specific biology, your starting point, and what you're actually willing to do. Not a fixed stack. A reasoned starting position confirmed through conversation.",
          ]}
          ctaText=""
          ctaLink=""
          subHeroLine1=""
          subHeroLine2=""
        />

        {/* What a Protocol Is */}
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl mb-6">What a protocol is</h2>
              <div className="space-y-4 text-foreground/80 leading-normal">
                <p>
                  Every protocol starts with Jesse™ — your personal AI coach — asking questions. Not a form. A conversation that builds a picture of your history, your goal, and what you've already tried. The compounds, the sequencing, and the supporting materials follow from that conversation.
                </p>
                <p>
                  The peptides and everything you need to use them ship directly to you. Jesse™ stays with you for the full three months — tracking, flagging, maintaining a private Notion log of your progress. Your private client wiki documents every element of your protocol so you understand what you're doing and why.
                </p>
                <p>
                  Three months is the unit. Long enough to produce something measurable. Short enough to stay honest about what's achievable.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What a Protocol Is Not */}
        <section className="py-12 px-6 md:px-12 lg:px-16 bg-secondary rounded-3xl">
          <div className="max-w-3xl">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl mb-6">What a protocol is not</h2>
              <p className="text-foreground/80 leading-normal">
                A supplement store. A shortcut. A fixed stack that ships without a conversation first. A one-size-fits-all plan. A product that assumes it knows your situation before asking.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Protocol Grid */}
        <ProtocolGrid
          title="Choose the goal that matches where you are right now."
          subtitle="Jesse™ will handle the rest."
          showBottomLink={false}
        />

        {/* Not Sure Which One */}
        <section className="py-12 px-6 md:px-12 lg:px-16 bg-secondary rounded-3xl">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl mb-6">Not sure which one?</h2>
              <div className="space-y-4 text-foreground/80 leading-normal mb-8">
                <p>
                  That's what Jesse™ is for. Describe your situation and Jesse™ — your personal AI coach — will tell you which protocol makes sense and why. No pressure toward any particular option. If a different starting point makes more sense, that's what you'll hear.
                </p>
              </div>
              <JesseWaitlistForm variant="stacked" />
            </motion.div>
          </div>
        </section>

        {/* Want More Support */}
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl mb-6">Want more support?</h2>
              <div className="space-y-4 text-foreground/80 leading-normal mb-8">
                <p>
                  The 3-Month Coaching Sprint adds direct access to Hans and Luis — the founders — via weekly video calls and ongoing oversight. Jesse™ is still part of it. This adds the human layer for people who want it.
                </p>
                <p>Not everyone needs it. We'll tell you if you don't.</p>
              </div>
              <Link
                to="/coaching"
                className="inline-block text-sm tracking-[0.15em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
              >
                → Learn about the Coaching Sprint
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Protocols;
