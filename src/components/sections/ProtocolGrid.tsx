import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { useProtocolProducts } from "@/hooks/useShopifyCollection";
import { AffirmMessage } from "@/components/product/AffirmMessage";
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

interface ProtocolGridProps {
  title?: string;
  subtitle?: string;
  showBottomLink?: boolean;
}

const ProtocolGrid = ({
  title = "Six protocols. One framework.",
  subtitle = "Each one built around a specific goal, confirmed through a Jesse™ intake conversation, and supported for the full three months.",
  showBottomLink = true,
}: ProtocolGridProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data: shopifyProducts } = useProtocolProducts();

  // Build a handle→{price, image} map from Shopify data
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
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            {title}
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {protocols.map((protocol, i) => {
            const handle = protocol.href.replace("/products/", "");
            const shopify = productMap[handle];
            const cardImage = shopify?.image || protocol.image;
            const price = shopify?.price;

            return (
              <motion.div
                key={protocol.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              >
                <Link to={protocol.href} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden mb-4">
                    <img
                      src={cardImage}
                      alt={protocol.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-background text-lg tracking-wide uppercase mb-1">
                        {protocol.title}
                      </h3>
                      <span className="inline-block text-xs tracking-[0.15em] uppercase text-background border-b border-background/60 pb-0.5 mb-3">
                        → Learn more
                      </span>
                      {price ? (
                        <div>
                          <p className="text-background text-lg font-medium">
                            Starting at ${Math.round(price)}
                          </p>
                          <p className="text-background/70 text-xs">
                            or 4 interest-free payments of ${Math.round(price / 4)} with{" "}
                            <span className="font-semibold">Affirm</span>
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {showBottomLink && (
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
        )}
      </div>
    </section>
  );
};

export default ProtocolGrid;
