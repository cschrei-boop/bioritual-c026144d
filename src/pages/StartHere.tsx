import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import StartHereSection from "@/components/sections/StartHereSection";
import { Button } from "@/components/ui/button";

const StartHere = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-8 md:pt-16">
        {/* New Start Here Section */}
        <StartHereSection />

        {/* Option 1: AI Concierge */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-2">Option 1</p>
              <h2 className="font-serif text-2xl md:text-3xl mb-2">AI Concierge</h2>
              <p className="text-foreground/60 mb-6">For Learning & Understanding</p>

              <div className="space-y-4 text-foreground/80 mb-6">
                <p>
                  The AI Concierge is an educational companion trained on current research across peptides, supplements, and longevity science.
                </p>
                <p>It helps you:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Understand terminology and concepts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Explore tradeoffs and frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Make sense of research in plain language</span>
                  </li>
                </ul>
                <p>
                  This option is best if you want to learn before acting.
                </p>
                <p className="text-sm text-foreground/60">
                  It is fully self-guided and does not include protocols, coaching, or medical advice.
                </p>
              </div>

              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-none" asChild>
                <Link to="/ai-concierge">
                  Learn more about the AI Concierge
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Option 2: Bio Signals Protocols */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border bg-foreground/[0.02]">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-2">Option 2</p>
              <h2 className="font-serif text-2xl md:text-3xl mb-2">Bio Signals Protocols</h2>
              <p className="text-foreground/60 mb-6">For Hands-On Work in One Area</p>

              <div className="space-y-4 text-foreground/80 mb-6">
                <p>
                  Bio Signals Protocols are structured, 3-month optimization systems focused on a specific priority, such as energy, metabolism, recovery, cognition, or longevity.
                </p>
                <p>Each protocol includes:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>A defined framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>A private client wiki</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Tracking and accountability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Protocol materials and education</span>
                  </li>
                </ul>
                <p>
                  This option is best if you know what you want to work on and want structure without weekly coaching.
                </p>
              </div>

              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-none" asChild>
                <Link to="/protocols">
                  Explore Bio Signals Protocols
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Option 3: Coaching Sprint */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-2">Option 3</p>
              <h2 className="font-serif text-2xl md:text-3xl mb-2">3-Month Coaching Sprint</h2>
              <p className="text-foreground/60 mb-6">For Full Guidance & Orientation</p>

              <div className="space-y-4 text-foreground/80 mb-6">
                <p>
                  The 3-Month Coaching Sprint is a founder-led experience designed for people who don't know where to start.
                </p>
                <p>
                  It focuses on orientation before optimization, helping you establish BioRitual — a repeatable set of practices and signals that anchor your wellness journey.
                </p>
                <p>This option includes:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Weekly sessions with our founders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Personalized educational protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>A baseline DEXA scan (via third party)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>A private client wiki</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Protocol materials and printed education</span>
                  </li>
                </ul>
                <p className="font-medium">
                  This is the most guided Bio Signals experience.
                </p>
              </div>

              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-none" asChild>
                <Link to="/coaching">
                  Learn more about the Coaching Sprint
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* How These Fit Together */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border bg-foreground/[0.02]">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl mb-6">How These Fit Together</h2>
              <div className="space-y-4 text-foreground/80">
                <p>People use Bio Signals in different ways.</p>
                <p>
                  Some start with learning.<br />
                  Some start with a focused protocol.<br />
                  Some start with full guidance.
                </p>
                <p>Many move between levels over time as their needs change.</p>
                <p className="font-medium text-foreground">
                  There is no required order — only the right level of support for your current stage.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Decision Guidance */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl mb-6">Still not sure?</h2>
              <div className="space-y-4 text-foreground/80 text-left max-w-xl mx-auto">
                <p>
                  <span className="font-medium text-foreground">Choose the AI Concierge</span> if you want to understand the landscape.
                </p>
                <p>
                  <span className="font-medium text-foreground">Choose a Bio Signals Protocol</span> if you're ready to work on one thing.
                </p>
                <p>
                  <span className="font-medium text-foreground">Choose the Coaching Sprint</span> if you want guidance and orientation.
                </p>
              </div>
              <p className="mt-8 text-foreground/60">
                You can always move to a different level later.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StartHere;
