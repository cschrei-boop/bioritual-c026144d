import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl font-serif tracking-wide mb-4">BIORITUAL</p>
            <p className="text-sm text-background/60">
              Structured biological optimization for minds in constant motion.
            </p>
          </motion.div>

          {/* Column 2 - Shop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs tracking-[0.2em] uppercase mb-4">Shop</p>
            <nav className="flex flex-col gap-3">
              <Link to="/protocols" className="text-sm text-background/60 hover:text-background transition-colors">All Protocols</Link>
              <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">Coaching</a>
              <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">AI Coach</a>
            </nav>
          </motion.div>

          {/* Column 3 - About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs tracking-[0.2em] uppercase mb-4">About</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">Our Story</a>
              <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">Science</a>
              <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">Contact</a>
            </nav>
          </motion.div>

          {/* Column 4 - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-xs tracking-[0.2em] uppercase mb-4">Stay Updated</p>
            <p className="text-sm text-background/60 mb-4">
              Get the latest protocols and insights.
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between gap-4"
        >
          <p className="text-xs text-background/40">
            © 2026 BIORITUAL. Research peptides are for research purposes only. Educational content is not medical advice.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-background/40 hover:text-background transition-colors">Privacy</a>
            <Link to="/terms" className="text-xs text-background/40 hover:text-background transition-colors">Terms</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
