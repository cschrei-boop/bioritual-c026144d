import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { articles } from "@/data/article-content";

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
        <link rel="canonical" href="https://bioritual.lovable.app/blog" />
      </Helmet>

      <Header />

      <main>
        {/* Page Header */}
        <section className="pt-32 pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
            >
              Education · Science · Clarity
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4"
            >
              Articles
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              Clear, science-based thinking on peptides, GLP-1s, bio signals, and structured wellness.
            </motion.p>
          </div>
        </section>

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
      </main>

      <Footer />
    </>
  );
};

export default Blog;
