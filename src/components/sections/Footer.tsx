import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-border/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-sm tracking-[0.3em] text-foreground uppercase">
              BIORITUAL
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Structured biological optimization for the mind in constant motion
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <span className="text-sm tracking-[0.2em] text-muted-foreground uppercase">
              Contact
            </span>
            <a
              href="mailto:hello@bioritual.com"
              className="block text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              hello@bioritual.com
            </a>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <span className="text-sm tracking-[0.2em] text-muted-foreground uppercase">
              Quick Links
            </span>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                AI Coach
              </a>
              <a href="#" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                Peptide Protocols
              </a>
              <a href="#" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                1-on-1 Coaching
              </a>
            </nav>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border/30 pt-8"
        >
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            <span className="font-medium">Disclaimer:</span> Research peptides are sold for research purposes only. 
            Educational content is not medical advice. Always comply with applicable laws in your jurisdiction.
          </p>
          <p className="text-xs text-muted-foreground">
            © 2026 BIORITUAL. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
