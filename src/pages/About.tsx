import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>BioRitual | About Us</title>
        <meta name="description" content="The story behind BioRitual — from depression and ADHD to structured biological signaling, peptides, and ownership of your health." />
        <link rel="canonical" href="https://bioritual.us/about" />
      </Helmet>
      <Header />

      <main>
        <Hero
          tagline=""
          headline="About BioRitual"
          bodyParagraphs={[]}
          ctaText=""
          ctaLink=""
          subHeroLine1=""
          subHeroLine2=""
        />

        {/* Section 1 — Opening */}
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-4 text-foreground/80 leading-normal">
            <p>
              Four years ago, Hans went through a brutal depression and was eventually diagnosed with ADHD. By the time things were "under control," he weighed close to 300 pounds, his hormones were a mess, and the official treatment plan for ADHD felt… underwhelming. It was mostly "take these pills and good luck."
            </p>
            <p>We weren't sick. But we definitely weren't well.</p>
            <p>
              It took a toll on our relationship. On our energy. On how we showed up in the world. And if you've ever been in that weird in-between space — not hospitalized, not thriving — you know how frustrating that is. You can function. You just don't feel like yourself.
            </p>
          </div>
        </section>

        <div className="w-16 h-px bg-border mx-6 md:mx-12 lg:mx-16" />

        {/* Section 2 — The Rabbit Hole */}
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-4 text-foreground/80 leading-normal">
            <p>
              Hans being Hans, he decided that wasn't good enough. He went down the rabbit hole. Research papers. Mechanisms. Metabolism. Neurobiology. GLP-1s. Peptides. Not because he wanted to become a biohacker influencer, but because he wanted to feel like his body belonged to him again.
            </p>
            <p>The peptides helped — yes. The weight came down. The labs improved. The pictures changed.</p>
            <p>But that wasn't the real shift.</p>
            <p>
              The real shift was realizing that most of what we call "discipline" is actually signaling. Our bodies respond to the inputs we give them. Hormones are signals. Sleep is a signal. Food is a signal. Even routines are signals.
            </p>
            <p>Bad habits aren't moral failures. Good habits aren't moral triumphs. They're responses.</p>
            <p>
              ADHD just turns the volume up on that reality. You feel the chaos of bad signals more intensely. But the principle applies to everyone: if the signals are inconsistent, the behavior will be too.
            </p>
          </div>
        </section>

        <div className="w-16 h-px bg-border mx-6 md:mx-12 lg:mx-16" />

        {/* Section 3 — The Anchor */}
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-4 text-foreground/80 leading-normal">
            <p>
              What Hans discovered — and what took longer to articulate than to live — was that anchoring his days around health gave him something ADHD had always made elusive: a reliable structure that didn't depend on motivation.
            </p>
            <p>Not a rigid schedule. Not a perfect routine. A set of signals, consistently enough maintained, that his days had shape even when his brain didn't cooperate.</p>
            <p>That insight is what eventually became Jesse.</p>
            <p>
              Jesse — your personal AI coach — is in many ways the product of Hans's own experience navigating health with an ADHD brain. The questions Jesse asks are the questions Hans learned to ask himself. The way Jesse tracks without demanding perfect consistency is the way Hans learned to track his own progress. The way Jesse responds to a break — without judgment, with immediate forward orientation — is the response Hans needed and rarely got.
            </p>
            <p>Building Jesse wasn't a technology decision. It was a personal one.</p>
          </div>
        </section>

        <div className="w-16 h-px bg-border mx-6 md:mx-12 lg:mx-16" />

        {/* Section 4 — The Storytelling Layer */}
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-4 text-foreground/80 leading-normal">
            <p>
              At the same time, through our nonprofit work with{" "}
              <a
                href="https://thesundayafternoonproject.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-60 transition-opacity"
              >
                The Sunday Afternoon Project
              </a>
              , we were thinking deeply about storytelling. Not as a craft — as a mechanism. The stories we tell about ourselves. The identities we cling to. The narratives that quietly determine what we believe we're capable of.
            </p>
            <p>
              Three years of research into how narrative shapes behavior led to an uncomfortable conclusion: most people aren't failing at health because they lack information or willpower. They're failing because the story they're telling about themselves doesn't have room for success.
            </p>
            <p>
              "I've never been a gym person." "I don't have the discipline for this." "I've tried everything." These aren't observations. They're plot decisions.
            </p>
            <p>And we started seeing the connection to health with new clarity.</p>
            <p>Rituals are stories in action. Signals are biology in motion.</p>
            <p>
              When you change the signals, you change the behavior. When you change the story, you change the identity. BioRitual was born at that intersection — and the hero's journey became the framework that holds it together. Not as a metaphor. As an operating system.
            </p>
            <p>The journey starts at home. It ends there too. What changes is who you are when you return.</p>
          </div>
        </section>

        <div className="w-16 h-px bg-border mx-6 md:mx-12 lg:mx-16" />

        {/* Section 5 — Luis */}
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-4 text-foreground/80 leading-normal">
            <p>Luis is the other half of this — and the part that keeps it human.</p>
            <p>
              Where Hans sees systems, Luis sees people. Where Hans asks "what's the mechanism," Luis asks "what's actually stopping them." That distinction matters more than it sounds.
            </p>
            <p>
              The wellness industry is full of people who understand biology and have no idea why their clients don't follow through. Luis does. He understands the gap between knowing what to do and actually doing it — the emotional friction, the identity resistance, the quiet shame of feeling behind. He understands it because he's watched it up close, and because he's the kind of person people tell the truth to.
            </p>
            <p>
              BioRitual without Luis would be a very well-researched protocol with no idea why you're struggling to start it. Luis is why the methodology accounts for the human on the other end of it.
            </p>
          </div>
        </section>

        <div className="w-16 h-px bg-border mx-6 md:mx-12 lg:mx-16" />

        {/* Section 6 — What We Built and Why */}
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-4 text-foreground/80 leading-normal">
            <p>
              We're not here to sell miracle stacks or pretend peptides are magic. There's enough of that already, and frankly, we're tired of it.
            </p>
            <p>
              Most people curious about peptides aren't reckless. They're undereducated, overwhelmed, and trying to take ownership of their health in a system that offers them almost no useful guidance. BioRitual exists for those people — the ones who are smart enough to be skeptical and stuck enough to need a framework that actually accounts for how they think and live.
            </p>
            <p>Not the biohacker. Not the already-optimized. The person in the middle, looking for something grounded, structured, and honest.</p>
          </div>
        </section>

        <div className="w-16 h-px bg-border mx-6 md:mx-12 lg:mx-16" />

        {/* Section 7 — Closing */}
        <section className="py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-4 text-foreground/80 leading-normal">
            <p>This isn't about perfection. It's not about six-packs or moral superiority.</p>
            <p>It's about signals. It's about structure. It's about reclaiming authorship of your own story.</p>
            <p>
              Hans is the obsessive researcher. The systems architect. The person who needed to understand why something works before he could trust it enough to use it — and who built Jesse because he needed something like Jesse and it didn't exist yet.
            </p>
            <p>
              Luis is the connector. The person in the room who understands what's actually keeping you from starting, and who makes sure the methodology accounts for that reality.
            </p>
            <p>Together, we built BioRitual for people who aren't looking for hacks. They're looking for ownership.</p>
            <p>
              And yes — for something that cuts through the noise with a little structure, a lot of honesty, and something genuinely useful on the other end.
            </p>
          </div>
        </section>

        {/* CTAs */}
        <section className="py-16 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl flex flex-col sm:flex-row gap-4">
            <Link
              to="/ai-concierge"
              className="text-sm tracking-[0.15em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
            >
              → Meet Jesse — your personal AI coach
            </Link>
            <Link
              to="/how-it-works"
              className="text-sm tracking-[0.15em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
            >
              → See how it works
            </Link>
            <Link
              to="/collection/protocols"
              className="text-sm tracking-[0.15em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
            >
              → Start with a protocol
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
