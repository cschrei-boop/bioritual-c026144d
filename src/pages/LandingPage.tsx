import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getLandingPageBySlug } from "@/data/landing-pages";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import FounderQuote from "@/components/sections/FounderQuote";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import ThreePillarsCarousel from "@/components/sections/ThreePillarsCarousel";
import ValueProps from "@/components/sections/ValueProps";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import StickyEmailFooter from "@/components/sections/StickyEmailFooter";
import NotFound from "@/pages/NotFound";

const LandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const config = slug ? getLandingPageBySlug(slug) : undefined;

  if (!config) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{config.seo.title}</title>
        <meta name="description" content={config.seo.description} />
        <link rel="canonical" href={`https://bioritual.us/lp/${config.slug}`} />
      </Helmet>
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <Hero
          tagline={config.hero?.tagline}
          headline={config.hero?.headline}
          bodyParagraphs={config.hero?.bodyParagraphs}
          ctaText={config.hero?.ctaText}
          ctaLink={config.hero?.ctaLink}
          subHeroLine1={config.hero?.subHeroLine1}
          subHeroLine2={config.hero?.subHeroLine2}
          backgroundImage={config.hero?.backgroundImage}
          backgroundVideo={config.hero?.backgroundVideo}
        />
        {config.founderQuote?.qualifiers ? (
          <FounderQuote>
            {/* Zone 1: Intro label + qualifying bullets */}
            {config.founderQuote.introLabel && (
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                {config.founderQuote.introLabel}
              </p>
            )}
            <p className="text-lg md:text-xl mb-4 font-serif">This is for you if:</p>
            <ul className="text-left max-w-xl mx-auto space-y-2 mb-8">
              {config.founderQuote.qualifiers.map((q, i) => (
                <li key={i} className="text-base md:text-lg leading-normal text-foreground/85 flex gap-3">
                  <span className="text-muted-foreground mt-1 shrink-0">—</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>

            {/* Zone 2: Divider */}
            <div className="w-16 h-px bg-border mx-auto my-8" />

            {/* Zone 3: Manifesto closer */}
            {config.founderQuote.manifestoLines && (
              <div className="space-y-0">
                {config.founderQuote.manifestoLines.map((line, i) => (
                  <h2
                    key={i}
                    className={`text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide ${
                      i === 1 || i === 3 ? "mb-4" : ""
                    }`}
                  >
                    {line}
                  </h2>
                ))}
              </div>
            )}
          </FounderQuote>
        ) : (
          <FounderQuote
            quote={config.founderQuote?.quote}
            attribution={config.founderQuote?.attribution}
          />
        )}
        <FeaturedCollection
          headline={config.featuredCollection?.headline}
          description={config.featuredCollection?.description}
        />
        <ThreePillarsCarousel
          subtitle={config.threePillars?.subtitle}
          title={config.threePillars?.title}
          description1={config.threePillars?.description1}
          description2={config.threePillars?.description2}
        />
        <ValueProps values={config.valueProps?.values} />
        <FinalCTA
          headline={config.finalCTA?.headline}
          italicWord={config.finalCTA?.italicWord}
          description={config.finalCTA?.description}
          buttonText={config.finalCTA?.buttonText}
        />
        <Footer />
        <StickyEmailFooter />
      </main>
    </>
  );
};

export default LandingPage;
