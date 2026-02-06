import { motion } from "framer-motion";

interface BlogImageHeroProps {
  /** Hero background image source */
  image: string;
  /** Alt text for the image */
  imageAlt: string;
  /** Small uppercase tagline */
  tagline?: string;
  /** Main heading (can include JSX for italics, etc.) */
  title: React.ReactNode;
  /** Subtitle/description paragraph */
  subtitle?: string;
  /** Optional CTA button or other content */
  children?: React.ReactNode;
}

/**
 * Image-based hero section for blog/article pages.
 * Features a gradient overlay for text readability.
 */
const BlogImageHero = ({
  image,
  imageAlt,
  tagline,
  title,
  subtitle,
  children,
}: BlogImageHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-2xl">
          {tagline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
            >
              {tagline}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogImageHero;
