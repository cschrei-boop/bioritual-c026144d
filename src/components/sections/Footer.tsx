import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-10 px-6 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-xl bg-background/60 border border-border/50 rounded-2xl p-6">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs tracking-[0.3em] text-foreground uppercase font-medium">BIORITUAL</span>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Structured biological optimization for the mind in constant motion
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Contact</span>
              <a href="mailto:hello@bioritual.com" className="block text-xs text-foreground/80 hover:text-primary transition-colors mt-2">
                hello@bioritual.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Links</span>
              <nav className="flex gap-4 mt-2">
                <a href="#" className="text-xs text-foreground/80 hover:text-primary transition-colors">AI Coach</a>
                <a href="#" className="text-xs text-foreground/80 hover:text-primary transition-colors">Protocols</a>
                <a href="#" className="text-xs text-foreground/80 hover:text-primary transition-colors">Coaching</a>
              </nav>
            </motion.div>
          </div>

          <div className="border-t border-border/30 pt-4">
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              <span className="font-medium">Disclaimer:</span> Research peptides are for research purposes only. Educational content is not medical advice.
            </p>
            <p className="text-[10px] text-muted-foreground mt-1">© 2026 BIORITUAL. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
