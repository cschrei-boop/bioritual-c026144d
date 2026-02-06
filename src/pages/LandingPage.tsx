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
        <link rel="canonical" href={`https://bioritual.lovable.app/lp/${config.slug}`} />
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
        <FounderQuote
          quote={config.founderQuote?.quote}
          attribution={config.founderQuote?.attribution}
        />
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
