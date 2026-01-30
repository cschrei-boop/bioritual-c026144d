import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import featuredCollection from "@/assets/featured-collection.jpg";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const TruthAboutPeptides = () => {
  return (
    <>
      <Helmet>
        <title>The Truth About Peptides | Bio Signals Education</title>
        <meta 
          name="description" 
          content="What peptides actually are, how they work, and what you should know before exploring them. An educational deep dive into bio signals and longevity science." 
        />
        <link rel="canonical" href="https://bioritual.lovable.app/truth-about-peptides" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={featuredCollection}
              alt="The Truth About Peptides"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          </div>
          
          <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-20">
            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
              >
                Education · Science · Clarity
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
              >
                The Truth About{" "}
                <span className="italic">Peptides</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground mb-8 max-w-xl"
              >
                Peptides are everywhere in longevity conversations—but clarity is rare. Here's what they actually are, how they work, and what you should know.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Placeholder Article Content */}
        <Section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              Article Content Coming Soon
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                This page is ready for your article content. Share your content and we'll populate this 
                landing page with properly formatted sections, educational content blocks, internal links 
                to protocols and services, and any additional components you need.
              </p>
              <p>
                The hero section above uses the same image as the homepage block for visual continuity 
                when visitors click through.
              </p>
            </div>
          </div>
        </Section>

        {/* Call to Action */}
        <Section className="py-16 md:py-24 px-6 md:px-12 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Ready to Explore?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're just starting to learn about peptides or ready to implement a structured protocol, 
              we have resources to support your journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-6 text-sm tracking-widest uppercase"
                asChild
              >
                <Link to="/protocols">View Protocols</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-none px-8 py-6 text-sm tracking-widest uppercase border-foreground"
                asChild
              >
                <Link to="/ai-concierge">Ask AI Concierge</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
};

export default TruthAboutPeptides;
