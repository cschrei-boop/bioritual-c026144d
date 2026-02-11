import BlogPageTemplate from "@/components/blog/BlogPageTemplate";

const About = () => {
  return (
    <BlogPageTemplate
      seo={{
        title: "BioRitual | About Us",
        description:
          "The story behind BioRitual — from depression and ADHD to structured biological signaling, peptides, and ownership of your health.",
        canonicalUrl: "https://bioritual.lovable.app/about",
      }}
      hero={{
        type: "video",
        title: "About BioRitual",
      }}
      hideProtocolsCarousel
      hideDisclaimer
    >
      <article className="max-w-3xl mx-auto px-6 md:px-12 py-10 md:py-16 space-y-6 text-base leading-normal">
        <p>
          Four years ago, Hans went through a brutal depression and was eventually diagnosed with ADHD. By the time things were "under control," he weighed close to 300 pounds, his hormones were a mess, and the official treatment plan for ADHD felt… underwhelming. It was mostly "take these pills and good luck."
        </p>

        <p>We weren't sick. But we definitely weren't well.</p>

        <p>
          It took a toll on our relationship. On our energy. On how we showed up in the world. And if you've ever been in that weird in-between space — not hospitalized, not thriving — you know how frustrating that is. You can function. You just don't feel like yourself.
        </p>

        <p>
          Hans being Hans, he decided that wasn't good enough. He went down the rabbit hole. Research papers. Mechanisms. Metabolism. Neurobiology. GLP-1s. Peptides. Not because he wanted to become a biohacker influencer, but because he wanted to feel like his body belonged to him again.
        </p>

        <p>
          The peptides helped — yes. The weight came down. The labs improved. The pictures changed.
        </p>

        <p>But that wasn't the real shift.</p>

        <p>
          The real shift was realizing that most of what we call "discipline" is actually signaling. Our bodies respond to the inputs we give them. Hormones are signals. Sleep is a signal. Food is a signal. Even routines are signals.
        </p>

        <p>Bad habits aren't moral failures.</p>
        <p>Good habits aren't moral triumphs.</p>

        <p>They're responses.</p>

        <p>
          ADHD just turns the volume up on that reality. You feel the chaos of bad signals more intensely. But the principle applies to everyone: if the signals are inconsistent, the behavior will be too.
        </p>

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
          , we were thinking a lot about storytelling. The stories we tell about ourselves. The identities we cling to. The narratives that quietly shape what we believe we're capable of.
        </p>

        <p>And we started seeing the connection.</p>

        <p>Rituals are stories in action.</p>
        <p>Signals are biology in motion.</p>

        <p>
          When you change the signals, you change the behavior. When you change the story, you change the identity.
        </p>

        <p>BioRitual was born at that intersection.</p>

        <p>
          We're not here to sell miracle stacks or pretend peptides are magic. There's enough useless B.S. in this space already, and frankly, we're tired of it. Most people who are curious about peptides aren't reckless — they're undereducated. They're trying to take ownership of their health in a system that doesn't give them much guidance beyond "eat less, move more."
        </p>

        <p>
          Hans is the obsessive researcher. The systems guy. The one who wants to know why something works and when it shouldn't be used.
        </p>

        <p>
          Luis is the connector. The heart. The one who understands that none of this matters if it doesn't feel human.
        </p>

        <p>
          Together, we built BioRitual for people who aren't looking for hacks — they're looking for ownership. People who don't feel terrible, but don't feel great either. People who suspect their body is capable of more alignment than they're currently experiencing.
        </p>

        <p>This isn't about perfection. It's not about six-packs or moral superiority.</p>

        <p>It's about signals.</p>

        <p>It's about structure.</p>

        <p>It's about reclaiming authorship of your own story.</p>

        <p>
          And yes — it's about cutting through the noise with something grounded, structured, and actually useful.
        </p>
      </article>
    </BlogPageTemplate>
  );
};

export default About;
