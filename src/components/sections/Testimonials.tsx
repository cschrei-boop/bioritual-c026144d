import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "I've been skeptical of every wellness program I've tried. BioRitual was the first one that didn't talk down to me. The structure made sense from day one.",
    name: "Sarah M.",
    detail: "Weight Loss + Metabolic Health protocol",
  },
  {
    quote:
      "Jesse asked me questions my doctor never did. Three months in, my labs told a different story than they did a year ago.",
    name: "David R.",
    detail: "Energy protocol",
  },
  {
    quote:
      "I didn't need another supplement stack. I needed someone to help me think clearly about what I was actually doing. That's what this gave me.",
    name: "Monica L.",
    detail: "Cognition + Brain Health protocol",
  },
  {
    quote:
      "The Affirm option made it accessible. The coaching calls made it personal. I'm renewing for another cycle.",
    name: "James T.",
    detail: "Performance + Recovery protocol",
  },
  {
    quote:
      "No hype. No miracle promises. Just a structured approach that respects my intelligence and my time. Exactly what I was looking for.",
    name: "Karen W.",
    detail: "Longevity protocol",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6 md:px-12 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            What members are saying
          </p>
          <h2 className="text-3xl md:text-4xl">
            Real results. No theatrics.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full flex flex-col justify-between bg-background border border-border p-8">
                    <blockquote className="text-base leading-relaxed text-foreground/85 mb-6">
                      "{t.quote}"
                    </blockquote>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {t.detail}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0 -translate-x-1/2" />
              <CarouselNext className="right-0 translate-x-1/2" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
