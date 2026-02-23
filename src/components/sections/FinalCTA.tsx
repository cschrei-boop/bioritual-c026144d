import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTAButton {
  text: string;
  href: string;
  variant?: "primary" | "link";
}

interface FinalCTAProps {
  headline?: string;
  italicWord?: string;
  subheadline?: string;
  description?: string;
  body?: string;
  buttonText?: string;
  buttons?: CTAButton[];
}

const FinalCTA = ({
  headline = "Understand the",
  italicWord = "Framework",
  subheadline,
  description = "This page introduces how BioRitual is structured and what it is designed to support.",
  body,
  buttonText = "Explore the framework",
  buttons,
}: FinalCTAProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section ref={ref} className="py-16 px-6 md:px-12 md:py-[26px] bg-secondary rounded-3xl pb-[59px]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            {headline}{" "}
            {italicWord && <span className="italic">{italicWord}</span>}
          </h2>

          {subheadline && (
            <p className="text-xl md:text-2xl text-foreground/80 mb-6">
              {subheadline}
            </p>
          )}
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {description}
          </p>

          {body && (
            <p className="text-foreground/70 mb-6 max-w-lg mx-auto leading-normal">
              {body}
            </p>
          )}

          {buttons && buttons.length > 0 ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {buttons.map((btn, i) => (
                btn.variant === "link" ? (
                  <Link
                    key={i}
                    to={btn.href}
                    className="text-sm tracking-[0.15em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
                  >
                    → {btn.text}
                  </Link>
                ) : (
                  <Button
                    key={i}
                    size="lg"
                    className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 py-6 text-sm tracking-widest uppercase"
                    asChild
                  >
                    <Link to={btn.href}>{btn.text}</Link>
                  </Button>
                )
              ))}
            </div>
          ) : (
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 py-6 text-sm tracking-widest uppercase"
              asChild
            >
              <Link to="/start-here">{buttonText}</Link>
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
