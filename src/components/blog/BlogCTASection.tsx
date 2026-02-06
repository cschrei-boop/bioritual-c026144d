import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

interface BlogCTAButton {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

interface BlogCTASectionProps {
  /** Small uppercase tagline above the heading */
  tagline?: string;
  /** Main heading */
  title: string;
  /** Supporting paragraph */
  description?: string;
  /** CTA buttons (up to 2 recommended) */
  buttons?: BlogCTAButton[];
  /** Use dark (inverted) background */
  dark?: boolean;
}

/**
 * Reusable CTA section for blog/article pages.
 * Supports light (muted) or dark (inverted) backgrounds.
 */
const BlogCTASection = ({
  tagline,
  title,
  description,
  buttons = [],
  dark = true,
}: BlogCTASectionProps) => {
  return (
    <section
      className={`py-20 md:py-32 px-6 md:px-12 ${
        dark ? "bg-foreground text-background" : "bg-muted/30"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection as="div">
          {tagline && (
            <p
              className={`text-xs tracking-[0.3em] uppercase mb-6 ${
                dark ? "text-background/60" : "text-muted-foreground"
              }`}
            >
              {tagline}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            {title}
          </h2>
          {description && (
            <p
              className={`leading-normal mb-10 max-w-xl mx-auto ${
                dark ? "text-background/80" : "text-muted-foreground"
              }`}
            >
              {description}
            </p>
          )}
          {buttons.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {buttons.map((button, index) => {
                const isPrimary = button.variant !== "outline";
                return (
                  <Button
                    key={index}
                    size="lg"
                    variant={isPrimary ? "default" : "outline"}
                    className={`rounded-none px-10 py-6 text-sm tracking-wider ${
                      dark
                        ? isPrimary
                          ? "bg-background text-foreground hover:bg-background/90"
                          : "border-background/30 text-background hover:bg-background hover:text-foreground"
                        : isPrimary
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "border-foreground"
                    }`}
                    asChild
                  >
                    <Link to={button.href}>{button.label}</Link>
                  </Button>
                );
              })}
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BlogCTASection;
