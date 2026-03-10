import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useProtocolProducts } from "@/hooks/useShopifyCollection";
import bioSignalsWeightLossHero from "@/assets/bio-signals-hero.jpg";
import bioSignalsEnergyHero from "@/assets/bio-signals-energy-hero.jpg";
import bioSignalsPerformanceHero from "@/assets/bio-signals-performance-hero.jpg";
import bioSignalsHairSkinHero from "@/assets/bio-signals-hair-skin-hero.jpg";
import bioSignalsCognitionHero from "@/assets/bio-signals-cognition-hero.jpg";
import bioSignalsLongevityHero from "@/assets/bio-signals-longevity-hero.jpg";

const protocols = [
  {
    title: "Weight Loss + Metabolic Health",
    description: "Six systems — appetite, metabolism, lean mass, energy, recovery, hormones — working together.",
    href: "/products/bio-signals-weight-loss-metabolic-health",
    image: bioSignalsWeightLossHero,
  },
  {
    title: "Energy",
    description: "Restore the baseline. Not the stimulant.",
    href: "/products/bio-signals-energy",
    image: bioSignalsEnergyHero,
  },
  {
    title: "Performance + Recovery",
    description: "Output requires recovery. This protocol addresses both sides of the cycle.",
    href: "/products/bio-signals-performance-recovery",
    image: bioSignalsPerformanceHero,
  },
  {
    title: "Hair + Skin",
    description: "Visible health is internal health. This protocol works on both.",
    href: "/products/bio-signals-hair-skin",
    image: bioSignalsHairSkinHero,
  },
  {
    title: "Cognition + Brain Health",
    description: "Clarity over activation. For minds working hard and not getting the output they expect.",
    href: "/products/bio-signals-cognition-brain-health",
    image: bioSignalsCognitionHero,
  },
  {
    title: "Longevity",
    description: "Stay capable over decades, not just years.",
    href: "/products/bio-signals-longevity",
    image: bioSignalsLongevityHero,
  },
];

const ProtocolCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data: shopifyProducts } = useProtocolProducts();

  const productMap = useMemo(() => {
    const map: Record<string, { price: number; image: string | null }> = {};
    if (shopifyProducts) {
      for (const p of shopifyProducts) {
        map[p.handle] = { price: parseFloat(p.price), image: p.image };
      }
    }
    return map;
  }, [shopifyProducts]);

  return (
    <section ref={ref} className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-3">
            Six protocols. One framework.
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Each one built around a specific goal, confirmed through a Jesse™ intake conversation, and supported for the full three months.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {protocols.map((protocol) => {
                const handle = protocol.href.replace("/products/", "");
                const shopify = productMap[handle];
                const cardImage = shopify?.image || protocol.image;
                const price = shopify?.price;

                return (
                  <CarouselItem
                    key={protocol.title}
                    className="pl-4 basis-[80%] sm:basis-1/2 lg:basis-1/3"
                  >
                    <Link to={protocol.href} className="group block">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={cardImage}
                          alt={protocol.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <h3 className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-background text-3xl md:text-4xl font-bold tracking-wide uppercase text-center px-4">
                            {protocol.title}
                          </h3>
                          <span className="inline-block text-xs tracking-[0.15em] uppercase text-background border-b border-background/60 pb-0.5 mb-3">
                            → Learn more
                          </span>
                          {price ? (
                            <div>
                              <p className="text-background text-xs font-medium">
                                Starting at ${Math.round(price / 3)}/month
                              </p>
                              <p className="text-background/70 text-[10px]">
                                with a 3 month commitment
                              </p>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0 -translate-x-1/2" />
              <CarouselNext className="right-0 translate-x-1/2" />
            </div>
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10"
        >
          <Link
            to="/protocols"
            className="inline-block text-sm tracking-[0.15em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
          >
            → See all protocols
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProtocolCarousel;
