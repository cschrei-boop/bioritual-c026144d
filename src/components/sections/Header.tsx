import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-navy/70 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={logo} 
            alt="Logo" 
            className="w-[50vw] md:w-auto h-auto md:h-10 object-contain"
          />
        </motion.a>

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
