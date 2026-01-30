import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const quotes = [{
  text: "A new standard for biological optimization that actually works with your body.",
  source: "Health & Wellness Today"
}, {
  text: "Finally, a science-based approach to peptides that busy professionals can trust.",
  source: "The Modern Executive"
}, {
  text: "BIORITUAL's 90-day protocols are changing how we think about longevity.",
  source: "Longevity Magazine"
}, {
  text: "The AI coaching feature alone is worth the subscription.",
  source: "Tech Health Review"
}, {
  text: "Clear, actionable protocols without the pseudoscience.",
  source: "Biohacker Weekly"
}];
const PressQuotes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section ref={ref} className="py-10 px-6 md:px-12 bg-secondary md:py-[24px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            What They're Saying
          </p>
        </motion.div>

        {/* Quotes Carousel */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8,
        delay: 0.2
      }}>
          <Carousel opts={{
          align: "center",
          loop: true
        }} className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {quotes.map((quote, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="px-4 text-center">
                    <blockquote className="font-serif text-lg italic mb-4 leading-relaxed">
                      "{quote.text}"
                    </blockquote>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      — {quote.source}
                    </p>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>;
};
export default PressQuotes;