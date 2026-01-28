import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const StartHere = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-8 md:pt-16">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-24 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                Which Bio Signals Experience Is Right for You?
              </h1>
              <p className="text-lg md:text-xl text-foreground/70">
                Three levels of support — from learning, to hands-on work, to full guidance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-foreground/80 leading-relaxed"
            >
              <p>
                Bio Signals is designed as a system of support, not a single product.
              </p>
              <p>
                Different people arrive with different levels of clarity. Some want to learn. Some want to act on a specific goal. Others want full guidance to help them figure out where to begin.
              </p>
              <p>
                This page is here to help you choose the right level of support for where you are right now.
              </p>
              <p className="font-medium text-foreground">
                There is no "best" option — only the most appropriate one.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border bg-foreground/[0.02]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">
                The Three Levels of Bio Signals
              </h2>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-4 text-left text-sm font-medium text-foreground/60"></th>
                      <th className="p-4 text-center">
                        <Link to="/ai-concierge" className="font-serif text-lg hover:opacity-70 transition-opacity">
                          AI Concierge
                        </Link>
                      </th>
                      <th className="p-4 text-center">
                        <Link to="/protocols" className="font-serif text-lg hover:opacity-70 transition-opacity">
                          Bio Signals Protocols
                        </Link>
                      </th>
                      <th className="p-4 text-center">
                        <Link to="/coaching" className="font-serif text-lg hover:opacity-70 transition-opacity">
                          3-Month Coaching Sprint
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 text-sm font-medium text-foreground/60">Best for</td>
                      <td className="p-4 text-center text-foreground/80">Learning & understanding</td>
                      <td className="p-4 text-center text-foreground/80">Hands-on work in one area</td>
                      <td className="p-4 text-center text-foreground/80">Full guidance & orientation</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-sm font-medium text-foreground/60">Level of support</td>
                      <td className="p-4 text-center text-foreground/80">Self-guided</td>
                      <td className="p-4 text-center text-foreground/80">Structured protocol</td>
                      <td className="p-4 text-center text-foreground/80">Founder-led coaching</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-sm font-medium text-foreground/60">Human involvement</td>
                      <td className="p-4 text-center text-foreground/80">None</td>
                      <td className="p-4 text-center text-foreground/80">Light / asynchronous</td>
                      <td className="p-4 text-center text-foreground/80">Weekly live sessions</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-sm font-medium text-foreground/60">Scope</td>
                      <td className="p-4 text-center text-foreground/80">Broad education</td>
                      <td className="p-4 text-center text-foreground/80">One specific priority</td>
                      <td className="p-4 text-center text-foreground/80">Whole-person foundation</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-sm font-medium text-foreground/60">Ideal if you're thinking</td>
                      <td className="p-4 text-center text-foreground/80 italic">"I want to understand this better."</td>
                      <td className="p-4 text-center text-foreground/80 italic">"I know what I want to work on."</td>
                      <td className="p-4 text-center text-foreground/80 italic">"I don't know where to start."</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-6">
                {[
                  {
                    title: "AI Concierge",
                    link: "/ai-concierge",
                    bestFor: "Learning & understanding",
                    support: "Self-guided",
                    human: "None",
                    scope: "Broad education",
                    thinking: '"I want to understand this better."',
                  },
                  {
                    title: "Bio Signals Protocols",
                    link: "/protocols",
                    bestFor: "Hands-on work in one area",
                    support: "Structured protocol",
                    human: "Light / asynchronous",
                    scope: "One specific priority",
                    thinking: '"I know what I want to work on."',
                  },
                  {
                    title: "3-Month Coaching Sprint",
                    link: "/coaching",
                    bestFor: "Full guidance & orientation",
                    support: "Founder-led coaching",
                    human: "Weekly live sessions",
                    scope: "Whole-person foundation",
                    thinking: '"I don\'t know where to start."',
                  },
                ].map((option, index) => (
                  <div key={index} className="border border-border rounded-lg p-6 bg-background">
                    <Link to={option.link} className="font-serif text-xl mb-4 block hover:opacity-70 transition-opacity">
                      {option.title}
                    </Link>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Best for</span>
                        <span className="text-foreground/80">{option.bestFor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Support</span>
                        <span className="text-foreground/80">{option.support}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Human involvement</span>
                        <span className="text-foreground/80">{option.human}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Scope</span>
                        <span className="text-foreground/80">{option.scope}</span>
                      </div>
                      <div className="pt-2 border-t border-border">
                        <span className="text-foreground/80 italic">{option.thinking}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

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

              <Link
                to="/ai-concierge"
                className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
              >
                Learn more about the AI Concierge
                <ArrowRight className="w-4 h-4" />
              </Link>
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

              <Link
                to="/protocols"
                className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
              >
                Explore Bio Signals Protocols
                <ArrowRight className="w-4 h-4" />
              </Link>
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

              <Link
                to="/coaching"
                className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
              >
                Learn more about the Coaching Sprint
                <ArrowRight className="w-4 h-4" />
              </Link>
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
