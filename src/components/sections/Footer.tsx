import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-10 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan via-magenta to-yellow" />
            <span className="text-xs tracking-[0.3em] text-foreground uppercase font-medium">BIORITUAL</span>
          </motion.div>

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-6"
          >
            <a href="#" className="text-xs text-muted-foreground hover:text-cyan transition-colors">AI Coach</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-magenta transition-colors">Protocols</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-yellow transition-colors">Coaching</a>
            <a href="mailto:hello@bioritual.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </motion.nav>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 pt-6 border-t border-border"
        >
          <p className="text-[10px] text-muted-foreground">
            Research peptides are for research purposes only. Educational content is not medical advice. © 2026 BIORITUAL
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
