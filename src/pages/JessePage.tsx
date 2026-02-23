import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const JessePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Jesse — Your Personal AI Coach | BioRitual</title>
        <meta name="description" content="Meet Jesse — your personal AI coach. A BS filter for the wellness industry, available in WhatsApp or iMessage." />
        <link rel="canonical" href="https://bioritual.us/ai-concierge" />
      </Helmet>
      <Header />

      <main>
        <Hero
          tagline=""
          headline="Meet Jesse. Your BS filter for the wellness industry."
          bodyParagraphs={["An AI coaching companion that lives in your WhatsApp or iMessage. No app. No dashboard. No new thing to forget about."]}
          ctaText=""
          ctaLink=""
          subHeroLine1=""
          subHeroLine2=""
        />

        {/* What Jesse Is */}
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl mb-6">What Jesse is</h2>
            <div className="space-y-4 text-foreground/80 leading-normal">
              <p>You've heard about AI. This is what it actually looks like in your life.</p>
              <p>
                Jesse asks questions before it says anything. It won't hand you a supplement list because you mentioned you're tired. It'll ask what tired means to you, what your sleep looks like, what you've already tried, and whether you've actually stuck with any of it. Then it'll have something useful to say.
              </p>
              <p>Responses are short. Always under a paragraph. Always ending with a question or a thought worth sitting with.</p>
              <p>
                Jesse is not a doctor. It will be the first to tell you so. If you ask why you should trust it, the answer will be something like: "You probably shouldn't, automatically. Evaluate what I say, push back, ask better questions. I'll give you the best information available. What you do with it is yours."
              </p>
              <p>That's not a disclaimer. That's the point.</p>
            </div>
          </div>
        </section>

        {/* What Jesse Does */}
        <section className="py-12 px-6 md:px-12 lg:px-16 bg-secondary rounded-3xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl mb-8">What Jesse does</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-2">Listens before it talks</h3>
                <p className="text-foreground/70 leading-normal">
                  Jesse builds a picture of your situation through conversation. Not a 47-question intake form — actual dialogue, the way a sharp colleague would approach it.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Tracks without the admin</h3>
                <p className="text-foreground/70 leading-normal">
                  As you talk, Jesse builds a private Notion log — a structured record of what you're working on, what's changing, and what's worth watching. You don't fill it out. Jesse does.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Shares insights on your timeline</h3>
                <p className="text-foreground/70 leading-normal">
                  Weekly summaries as a baseline. Real-time flags when something notable happens. No noise for the sake of it.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Recommends without hiding the math</h3>
                <p className="text-foreground/70 leading-normal">
                  Jesse will occasionally recommend a supplement, a tool, or a product. When it does, it tells you plainly if BioRitual has an affiliate relationship with that brand. Every time. Without being asked.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Stays skeptical</h3>
                <p className="text-foreground/70 leading-normal">
                  Jesse doesn't get excited about new heroes or new villains. If something is overhyped, Jesse will say so. If the evidence is thin, Jesse will say that too.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Where Jesse Lives */}
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl mb-6">Where Jesse lives</h2>
            <div className="space-y-4 text-foreground/80 leading-normal">
              <p>Your WhatsApp. Your iMessage. Wherever you already talk to people.</p>
              <p>
                No download. No subscription dashboard. No app you'll open twice and forget. Jesse is there when you need it, quiet when you don't.
              </p>
            </div>
          </div>
        </section>

        {/* What Jesse Is Not */}
        <section className="py-12 px-6 md:px-12 lg:px-16 bg-secondary rounded-3xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl mb-6">What Jesse is not</h2>
            <p className="text-foreground/80 leading-normal">
              Not a doctor. Not a replacement for one. Not going to tell you what you want to hear. Not going to pretend it's been through what you've been through, because it hasn't. Not going to bury an affiliate recommendation in language designed to make you miss it.
            </p>
          </div>
        </section>

        {/* Who Jesse Is For */}
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl mb-6">Who Jesse is for</h2>
            <p className="text-foreground/80 leading-normal">
              You're curious about peptides, GLP-1s, or longevity science but every time you search, you end up more confused than when you started. You want a thinking partner — something that respects your intelligence, doesn't have a product to push, and will tell you when a question doesn't have a clean answer yet.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 md:px-12 lg:px-16 bg-secondary rounded-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-foreground/70 mb-2">Cancel anytime.</p>
            <p className="text-foreground/70 mb-8">
              If you decide to move into a Bio Signals Protocol, Jesse comes with it — already knowing your history, already tracking your progress.
            </p>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 py-6 text-sm tracking-widest uppercase"
              asChild
            >
              <Link to="/ai-concierge">Start talking to Jesse →</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JessePage;
