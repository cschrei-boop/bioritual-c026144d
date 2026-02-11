import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import VideoHero from "@/components/sections/VideoHero";
import { BlogImageHero, BlogCTASection, BlogDisclaimer } from "@/components/blog";
import ArticleCarousel from "@/components/blog/ArticleCarousel";
import ShopByGoal from "@/components/sections/ShopByGoal";

interface BlogCTAButton {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

interface BlogHeroConfig {
  /** Hero type: video (uses VideoHero) or image (uses BlogImageHero) */
  type: "video" | "image";
  /** Small uppercase tagline */
  tagline?: string;
  /** Main heading */
  title: string;
  /** Subtitle/description */
  subtitle?: string;
  /** Additional description (only for video hero) */
  description?: React.ReactNode;
  /** Image source (required for image type) */
  image?: string;
  /** Image alt text (required for image type) */
  imageAlt?: string;
  /** CTA content to render in hero */
  children?: React.ReactNode;
}

interface BlogCTAConfig {
  tagline?: string;
  title: string;
  description?: string;
  buttons?: BlogCTAButton[];
  dark?: boolean;
}

interface BlogSEOConfig {
  title: string;
  description: string;
  canonicalUrl: string;
  /** JSON-LD structured data object */
  structuredData?: object;
}

interface BlogPageTemplateProps {
  /** SEO configuration */
  seo: BlogSEOConfig;
  /** Hero section configuration */
  hero: BlogHeroConfig;
  /** Main content sections */
  children: React.ReactNode;
  /** Optional CTA section before footer */
  cta?: BlogCTAConfig;
  /** Optional disclaimer text (defaults to standard) */
  disclaimer?: string;
  /** Hide the disclaimer entirely */
  hideDisclaimer?: boolean;
  /** Hide the article carousel */
  hideArticleCarousel?: boolean;
  /** Hide the protocols carousel */
  hideProtocolsCarousel?: boolean;
}

/**
 * Reusable template for blog/article pages.
 * Provides consistent structure with configurable hero, CTA, and disclaimer.
 */
const BlogPageTemplate = ({
  seo,
  hero,
  children,
  cta,
  disclaimer,
  hideDisclaimer = false,
  hideArticleCarousel = false,
  hideProtocolsCarousel = false,
}: BlogPageTemplateProps) => {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonicalUrl} />
        {seo.structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(seo.structuredData)}
          </script>
        )}
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        {hero.type === "video" ? (
          <VideoHero
            tagline={hero.tagline}
            title={hero.title}
            subtitle={hero.subtitle}
            description={hero.description}
          >
            {hero.children}
          </VideoHero>
        ) : (
          <BlogImageHero
            image={hero.image!}
            imageAlt={hero.imageAlt || hero.title}
            tagline={hero.tagline}
            title={hero.title}
            subtitle={hero.subtitle}
          >
            {hero.children}
          </BlogImageHero>
        )}

        {/* Main Content */}
        {children}

        {/* Article Carousel */}
        {!hideArticleCarousel && (
          <ArticleCarousel currentHref={new URL(seo.canonicalUrl).pathname} />
        )}

        {/* Protocols Carousel */}
        {!hideProtocolsCarousel && <ShopByGoal />}

        {/* CTA Section */}
        {cta && (
          <BlogCTASection
            tagline={cta.tagline}
            title={cta.title}
            description={cta.description}
            buttons={cta.buttons}
            dark={cta.dark}
          />
        )}

        {/* Disclaimer */}
        {!hideDisclaimer && <BlogDisclaimer text={disclaimer} />}
      </main>

      <Footer />
    </>
  );
};

export default BlogPageTemplate;
