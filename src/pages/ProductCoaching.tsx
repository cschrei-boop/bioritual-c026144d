import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const ProductCoaching = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>3-Month Coaching Sprint | BioRitual</title>
        <meta name="description" content="For people who want a human in the room. A 3-month protocol with direct access to the founders." />
        <link rel="canonical" href="https://bioritual.us/coaching" />
      </Helmet>
      <Header />
      <main>
        <section className="py-20 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight uppercase mb-6">For people who want a human in the room.</h1>
              <p className="text-lg text-foreground/70">A 3-month protocol with direct access to the founders — the people who built this, tested it, and know it cold.</p>
            </motion.div>
          </div>
        </section>
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl mb-6">What this is</h2>
            <div className="space-y-4 text-foreground/80 leading-normal">
              <p>This is not a managed service where someone checks in on you once a week and calls it coaching. This is Hans and Luis — directly involved in your protocol, available for real questions, and present enough to notice when something isn't working.</p>
              <p>Jesse — your personal AI coach — is still part of this. It handles your intake, tracks your progress, maintains your Notion log, and stays active in your WhatsApp or iMessage throughout the 3 months. The Coaching Sprint adds a layer on top of that: two founders with direct experience in everything BioRitual does, available for weekly video calls and ongoing oversight.</p>
              <p>If you've been through the noise long enough to know you want someone accountable on the other end, this is that.</p>
            </div>
          </div>
        </section>
        <section className="py-12 px-6 md:px-12 lg:px-16 bg-secondary rounded-3xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl mb-8">What's included</h2>
            <div className="space-y-8">
              <div><h3 className="text-xl font-medium mb-2">Everything in a Bio Signals Protocol</h3><p className="text-foreground/70 leading-normal">Your intake consultation with Jesse — your personal AI coach — your personalized protocol, the peptides and supplies shipped directly to you, your private client wiki, and Jesse active for the full 3 months.</p></div>
              <div><h3 className="text-xl font-medium mb-2">Weekly video calls with Hans and Luis</h3><p className="text-foreground/70 leading-normal">Not a check-in call. A working session. We review what's happening, what's shifting, and what needs adjusting. You come with questions. We come with observations.</p></div>
              <div><h3 className="text-xl font-medium mb-2">Ongoing async access to the founders</h3><p className="text-foreground/70 leading-normal">Between calls, Hans and Luis are reachable. Not response-guaranteed-in-five-minutes, but genuinely available for things that can't wait until next week.</p></div>
              <div><h3 className="text-xl font-medium mb-2">Protocol adjustments as needed</h3><p className="text-foreground/70 leading-normal">Three months is long enough for the picture to change. If something isn't working or something new emerges, the protocol adapts. That's not an upsell — it's part of what you're paying for.</p></div>
            </div>
          </div>
        </section>
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl mb-6">Who it's for</h2>
            <div className="space-y-4 text-foreground/80 leading-normal">
              <p>You've done enough research to know this is real, but you want someone accountable on the other end of the decisions. You're not looking for a protocol to follow alone — you want oversight, iteration, and the ability to ask "is this right for my situation?" and get an answer from someone who actually knows.</p>
              <p>You may also be earlier in the process than you'd like to admit — not sure where to start, not confident in your own read of the information yet. That's a completely valid reason to be here. The Coaching Sprint is built for both.</p>
            </div>
          </div>
        </section>
        <section className="py-12 px-6 md:px-12 lg:px-16 bg-secondary rounded-3xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl mb-6">A direct note</h2>
            <div className="space-y-4 text-foreground/80 leading-normal">
              <p>Not everyone needs this. If a Bio Signals Protocol with Jesse is sufficient for your situation, that's what we'll tell you. The goal is the right level of support for your specific starting point — not the most expensive option by default.</p>
              <p>If you're unsure, start with a protocol or talk to Jesse first. You can always move up. We'll tell you if it makes sense.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/ai-concierge" className="text-sm tracking-[0.15em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity">→ Talk to Jesse — your personal AI coach</Link>
              <Link to="/collection/protocols" className="text-sm tracking-[0.15em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity">→ See Bio Signals Protocols</Link>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">Ready to work directly with the founders?</h2>
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 py-6 text-sm tracking-widest uppercase" asChild>
              <Link to="/coaching">Apply for the Coaching Sprint →</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCoaching;
