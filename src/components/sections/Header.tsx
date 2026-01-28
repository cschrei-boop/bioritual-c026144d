import { motion } from "framer-motion";
import { Search, User } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-foreground text-background text-center py-2 px-4">
        <p className="text-xs tracking-widest uppercase">
          Free shipping on orders over $100
        </p>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-serif tracking-wide"
          >
            BIORITUAL
          </motion.a>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
              Shop All
            </a>
            <a href="#" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
              Protocols
            </a>
            <a href="#" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
              Coaching
            </a>
            <a href="#" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
              About
            </a>
          </nav>

          {/* Right Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <button className="hover:opacity-60 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <User className="w-5 h-5" />
            </button>
            <a
              href="mailto:hello@bioritual.com"
              className="hidden sm:block text-sm tracking-wide hover:opacity-60 transition-opacity"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header;
