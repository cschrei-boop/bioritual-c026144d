import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import { articles } from "@/data/article-content";
import ShopByGoal from "@/components/sections/ShopByGoal";

const Blog = () => {
  const displayed = articles.slice(0, 6);

  return (
    <>
      <Helmet>
        <title>Articles & Education | BioRitual</title>
        <meta
          name="description"
          content="Science-based articles on peptides, GLP-1s, bio signals, and structured wellness. Education without hype."
        />
        <link rel="canonical" href="https://bioritual.us/blog" />
      </Helmet>

      <Header />

      <main>
        <Hero
          tagline="Education · Science · Clarity"
          headline="Articles"
          bodyParagraphs={["Clear, science-based thinking on peptides, GLP-1s, bio signals, and structured wellness."]}
          ctaText=""
          ctaLink=""
          subHeroLine1=""
          subHeroLine2=""
        />

        {/* Article Grid */}
        <section className="pb-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayed.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Link to={article.href} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden mb-4">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      {/* Text */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-background">
                        <h2 className="font-serif text-xl md:text-2xl tracking-wide mb-1">
                          {article.title}
                        </h2>
                        <p className="text-sm opacity-80 leading-relaxed">
                          {article.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ShopByGoal />
      </main>

      <Footer />
    </>
  );
};

export default Blog;
