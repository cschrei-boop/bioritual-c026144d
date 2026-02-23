import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import defaultBackgroundVideo from "@/assets/hero-video.mp4";

interface HeroProps {
  tagline?: string;
  headline?: string;
  bodyParagraphs?: string[];
  ctaText?: string;
  ctaLink?: string;
  ctaText2?: string;
  ctaLink2?: string;
  subHeroLine1?: string;
  subHeroLine2?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}

const Hero = ({
  tagline = "Simple. Structured. Educational Wellness Frameworks.",
  headline = "Your body is constantly adapting.",
  bodyParagraphs,
  ctaText = "→ Learn how the framework is structured",
  ctaLink = "/start-here",
  ctaText2,
  ctaLink2,
  subHeroLine1 = "Most people don't need more supplements.",
  subHeroLine2 = "That's where we come in.",
  backgroundImage,
  backgroundVideo,
}: HeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = backgroundVideo || defaultBackgroundVideo;
  const useImage = !!backgroundImage;

  const defaultBody = [
    "This framework focuses on understanding context, patterns, and inputs — not fixing the body.",
    "BioRitual presents educational frameworks for thinking about wellness-related choices. It does not recommend, prescribe, or design personalized interventions.",
    "BioRitual is not a medical service and does not provide medical advice, diagnosis, or treatment.",
  ];

  const paragraphs = bodyParagraphs || defaultBody;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        {useImage ? (
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-transparent" />
      </div>

      {/* Content overlay - left aligned */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-2xl">
          {/* Tagline */}
          {tagline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase mb-6"
            >
              {tagline}
            </motion.p>
          )}

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl leading-none mb-6 whitespace-pre-line uppercase"
          >
            {headline}
          </motion.h1>

          {/* Supporting copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground mb-8 max-w-xl space-y-2"
          >
            {paragraphs.map((p, i) => {
              const isMedicalDisclaimer = p.includes("not a medical service");
              return (
                <p key={i} className={isMedicalDisclaimer ? "font-medium text-foreground" : ""}>
                  {p}
                </p>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-6 text-sm tracking-wider"
              asChild
            >
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
            {ctaText2 && ctaLink2 && (
              <Link
                to={ctaLink2}
                className="inline-flex items-center text-sm tracking-wider hover:opacity-60 transition-opacity underline underline-offset-4 px-2 py-3"
              >
                {ctaText2}
              </Link>
            )}
          </motion.div>

          {/* Sub-hero clarifier */}
          {(subHeroLine1 || subHeroLine2) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-foreground/20 max-w-lg"
            >
              {subHeroLine1 && (
                <p className="text-foreground text-sm leading-normal">
                  {subHeroLine1}
                  <br />
                  They need clearer frameworks to help them think through what to do next.
                </p>
              )}
              {subHeroLine2 && (
                <p className="text-foreground text-sm mt-3 font-medium">
                  {subHeroLine2}
                </p>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
