import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import backgroundVideo from "@/assets/hero-video.mp4";

interface VideoHeroProps {
  tagline?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  minHeight?: string;
}

const VideoHero = ({
  tagline,
  title,
  subtitle,
  description,
  children,
  minHeight = "70vh"
}: VideoHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down for cinematic effect
    }
  }, []);

  return (
    <section className={`relative flex items-center`} style={{ minHeight }}>
      {/* Full-bleed background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-transparent" />
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
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-foreground/90 mb-4 max-w-xl"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Description */}
          {description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground mb-8 max-w-xl"
            >
              {description}
            </motion.div>
          )}

          {/* Additional content (buttons, etc.) */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
