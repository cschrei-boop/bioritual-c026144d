import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BlogPageTemplate, AnimatedSection } from "@/components/blog";
import truthAboutPeptidesHero from "@/assets/truth-about-peptides-hero.png";

const TruthAboutPeptides = () => {
  return (
    <BlogPageTemplate
      seo={{
        title: "The Truth About Peptides | Bio Signals Education",
        description:
          "What peptides actually are, how they work, and what you should know before exploring them. An educational deep dive into bio signals and longevity science.",
        canonicalUrl: "https://bioritual.us/truth-about-peptides",
      }}
      hero={{
        type: "image",
        image: truthAboutPeptidesHero,
        imageAlt: "The Truth About Peptides",
        tagline: "Education · Science · Clarity",
        title: "The Truth About Peptides",
        subtitle:
          "Peptides are everywhere in longevity conversations—but clarity is rare. Here's what they actually are, how they work, and what you should know.",
      }}
      cta={{
        tagline: "Next Steps",
        title: "Ready to Explore?",
        description:
          "Whether you're just starting to learn about peptides or ready to implement a structured protocol, we have resources to support your journey.",
        buttons: [
          { label: "View Protocols", href: "/protocols", variant: "primary" },
          { label: "Join the Jesse™ waitlist", href: "/ai-concierge", variant: "outline" },
        ],
        dark: false,
      }}
    >
      {/* High-Impact Abstract */}
      <AnimatedSection className="py-16 md:py-24 px-6 md:px-12 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed">
            <p>Peptides don't work by force.</p>
            <p className="italic">They work by signaling.</p>
            <p className="text-muted-foreground">
              They don't replace sleep, nutrition, movement, or recovery — they sit alongside them,
              providing information the body may respond to if the system is receptive.
            </p>
            <div className="py-4 space-y-2 text-muted-foreground">
              <p>Without context, peptides do very little.</p>
              <p>Without feedback, they're just another variable.</p>
              <p>Without structure, they become noise.</p>
            </div>
            <p>Peptides aren't magic.</p>
            <p className="italic">They're part of a system.</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Article Intro */}
      <AnimatedSection className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Peptides have gained attention as powerful tools for optimization — often discussed in isolation,
              without enough context to understand what they actually do.
            </p>
            <p className="text-foreground font-medium">The reality is more grounded.</p>
            <p>
              Peptides are short chains of amino acids that participate in communication processes already
              present in the body. Their role is not to create outcomes directly, but to signal direction.
            </p>
            <p className="text-foreground font-medium italic">That distinction matters.</p>
            <div className="py-4 pl-6 border-l-2 border-foreground/20 space-y-2">
              <p>A signal can guide a response.</p>
              <p>It cannot guarantee one.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Peptides Are Context-Dependent */}
      <AnimatedSection className="py-16 md:py-24 px-6 md:px-12 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-8">
            Peptides Are Context-Dependent
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>The body is a responsive system governed by feedback, not commands.</p>
            <p>
              For any signal — molecular or otherwise — to have an effect, the surrounding conditions must
              support it. Sleep, nutrition, movement, stress, and recovery all shape how the body interprets
              incoming information.
            </p>
            <p>
              When those foundations are in place, a peptide may help refine or support an adaptive response.
            </p>
            <p className="text-foreground font-medium">
              When they're not, the signal is dampened — or ignored entirely.
            </p>
            <p>
              This is why the same peptide can produce dramatically different experiences in different people,
              or even in the same person at different times.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Signals Work Together */}
      <AnimatedSection className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-8">
            Signals Work Together, Not Alone
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>Peptides exist on the same continuum as other biological inputs:</p>
            <div className="grid md:grid-cols-2 gap-4 py-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-foreground shrink-0" />
                <span>sleep signals <em>repair</em></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-foreground shrink-0" />
                <span>movement signals <em>adaptation</em></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-foreground shrink-0" />
                <span>nutrition signals <em>availability</em></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-foreground shrink-0" />
                <span>light signals <em>timing</em></span>
              </div>
            </div>
            <p className="text-foreground font-medium">
              Peptides don't override these signals. They interact with them.
            </p>
            <p>
              Used responsibly, they may help clarify or reinforce a direction the body is already prepared
              to move toward. Used without structure, they add complexity without clarity.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Why "More" Rarely Helps */}
      <AnimatedSection className="py-16 md:py-24 px-6 md:px-12 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-8">
            Why "More" Rarely Helps
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>Biology is sensitive to timing and dosage.</p>
            <p>
              When signals are excessive, mistimed, or layered without feedback, responsiveness decreases.
              Sensitivity changes. The body adapts.
            </p>
            <p className="text-foreground font-medium">
              This is why escalation and stacking rarely produce better outcomes.
            </p>
            <p>
              The most effective use of peptides respects the body's limits — and its ability to regulate itself.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* A Systems-Based Perspective */}
      <AnimatedSection className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-8">
            A Systems-Based Perspective
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>Peptides make sense only within a broader system.</p>
            <p>That system includes:</p>
            <ul className="space-y-3 py-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                <span>education</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                <span>structure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                <span>observation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-px bg-foreground mt-3 shrink-0" />
                <span>adjustment over time</span>
              </li>
            </ul>
            <p>Without those elements, peptides are reduced to experiments without interpretation.</p>
            <p className="text-foreground font-medium italic">
              Understanding how your body responds is more valuable than adding another input.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* The Bottom Line */}
      <AnimatedSection className="py-16 md:py-24 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-8">
            The Bottom Line
          </h2>
          <div className="space-y-4 text-background/80 leading-relaxed text-lg">
            <p>Peptides are not shortcuts.</p>
            <p>They are not guarantees.</p>
            <p>And they are not substitutes for foundational health signals.</p>
          </div>
          <p className="mt-8 text-xl">
            They are context-dependent tools that may support adaptation when the system is ready.
          </p>
          <p className="mt-6 text-background/80">
            Progress comes from working with biology — not trying to outsmart it.
          </p>
          <p className="mt-8 font-serif text-2xl italic">
            That's the truth about peptides.
          </p>
        </div>
      </AnimatedSection>
    </BlogPageTemplate>
  );
};

export default TruthAboutPeptides;
