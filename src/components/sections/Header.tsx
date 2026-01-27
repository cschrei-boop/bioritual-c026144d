import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-navy">
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-[50vw] md:w-auto md:h-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan via-magenta to-yellow shrink-0" />
            <span className="text-xs md:text-sm tracking-[0.3em] text-white uppercase font-medium">BIORITUAL</span>
          </div>
        </motion.div>

        {/* Contact Button */}
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          href="mailto:hello@sundayafternoonproject.com"
          className="text-xs md:text-sm text-white hover:text-cyan transition-colors uppercase tracking-wider font-medium"
        >
          Contact Us
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
