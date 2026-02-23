import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import { useProtocolProducts } from "@/hooks/useShopifyCollection";
import { Skeleton } from "@/components/ui/skeleton";

const ProtocolsCollection = () => {
  const { data: products = [], isLoading } = useProtocolProducts();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Hero
        tagline=""
        headline="Bio Signals Protocols"
        bodyParagraphs={["3-month structured systems designed for your specific goal"]}
        ctaText=""
        ctaLink=""
        subHeroLine1=""
        subHeroLine2=""
      />

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[4/5] w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/4" />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            No protocols found
          </p>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            {...fadeIn}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/products/${product.handle}`}
                  className="group block"
                >
                  {/* Product Image */}
                  <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-muted">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-muted-foreground">No image</span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <h3 className="font-serif text-xl text-foreground mb-2 group-hover:underline underline-offset-4">
                    {product.title}
                  </h3>
                  <p className="text-sm text-foreground/60 line-clamp-2 mb-2">
                    {product.description}
                  </p>
                  <p className="text-foreground font-medium">
                    ${parseFloat(product.price).toFixed(0)}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Learn More Link */}
        <motion.div
          className="text-center mt-16 pt-12 border-t border-border"
          {...fadeIn}
        >
          <p className="text-foreground/60 mb-4">
            Want to understand the science behind Bio Signals?
          </p>
          <Link
            to="/protocols"
            className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Learn about our approach →
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ProtocolsCollection;