import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Important Notice - Above Footer */}
      <section className="bg-background text-foreground py-12 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xs tracking-[0.3em] uppercase mb-4">Important Notice</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            All content on this site is provided for informational and educational purposes only.
            <br />
            BioRitual does not provide medical advice, diagnosis, treatment, or prescriptions.
          </p>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            {/* Column 1 - Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl font-serif tracking-wide mb-4">BIORITUAL</p>
              <p className="text-sm text-background/60">
                Structured, educational frameworks for thinking clearly about wellness.
              </p>
            </motion.div>

            {/* Column 2 - Explore */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-4">Explore</p>
              <nav className="flex flex-col gap-3">
                <Link to="/protocols" className="text-sm text-background/60 hover:text-background transition-colors">All Frameworks</Link>
                <Link to="/blog" className="text-sm text-background/60 hover:text-background transition-colors">Blog</Link>
              </nav>
            </motion.div>

            {/* Column 3 - Getting Started */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-4">Getting Started</p>
              <nav className="flex flex-col gap-3">
                <Link to="/start-here" className="text-sm text-background/60 hover:text-background transition-colors">Start Here</Link>
                <a href="mailto:hello@bioritual.com" className="text-sm text-background/60 hover:text-background transition-colors">Contact</a>
              </nav>
            </motion.div>

            {/* Column 4 - Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-4">Disclaimer</p>
              <p className="text-sm text-background/60 leading-relaxed">
                BioRitual is an educational platform. It does not replace licensed healthcare professionals. Decisions made based on this information are the responsibility of the individual.
              </p>
            </motion.div>

            {/* Column 5 - Stay Updated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-xs tracking-[0.2em] uppercase mb-4">Stay Updated</p>
              <p className="text-sm text-background/60 mb-4">
                Get the latest frameworks and insights.
              </p>
              <a href="mailto:hello@bioritual.com" className="text-sm hover:opacity-60 transition-opacity">
                hello@bioritual.com
              </a>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between gap-4"
          >
            <p className="text-xs text-background/40">
              © 2026 BIORITUAL. Educational content only. Not medical advice.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <Link to="/terms" className="text-xs text-background/40 hover:text-background transition-colors">Privacy</Link>
              <Link to="/terms" className="text-xs text-background/40 hover:text-background transition-colors">Terms</Link>
              <Link to="/fulfillment" className="text-xs text-background/40 hover:text-background transition-colors">Shipping</Link>
              <Link to="/consent" className="text-xs text-background/40 hover:text-background transition-colors">Consent</Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
