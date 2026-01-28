import { motion } from "framer-motion";
import { Search, User, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Shop All", href: "#" },
    { label: "Protocols", href: "#" },
    { label: "Coaching", href: "#" },
    { label: "About", href: "#" },
  ];

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
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="hover:opacity-60 transition-opacity">
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] pt-12">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg tracking-wide hover:opacity-60 transition-opacity"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="mailto:hello@bioritual.com"
                  onClick={() => setIsOpen(false)}
                  className="text-lg tracking-wide hover:opacity-60 transition-opacity"
                >
                  Contact
                </a>
              </nav>
            </SheetContent>
          </Sheet>

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

          {/* Navigation - Center (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm tracking-wide hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
            ))}
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
            <button className="hover:opacity-60 transition-opacity hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <a
              href="mailto:hello@bioritual.com"
              className="hidden md:block text-sm tracking-wide hover:opacity-60 transition-opacity"
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
