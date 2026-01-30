import { motion } from "framer-motion";
import { Search, User, Menu, ChevronDown, Loader2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { CartDrawer } from "@/components/CartDrawer";
import { Link } from "react-router-dom";
import { useProtocolsNavigation } from "@/hooks/useProtocolsNavigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [protocolsOpen, setProtocolsOpen] = useState(false);
  const { protocols, isLoading: protocolsLoading } = useProtocolsNavigation();

  const navLinks = [
    { label: "AI Companion", href: "/ai-concierge" },
    { label: "1:1 Coaching", href: "/coaching" },
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
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg tracking-wide hover:opacity-60 transition-opacity"
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Mobile Protocols Collapsible */}
                <Collapsible open={protocolsOpen} onOpenChange={setProtocolsOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg tracking-wide hover:opacity-60 transition-opacity">
                    Guided Protocols by Goal
                    <ChevronDown className={`w-4 h-4 transition-transform ${protocolsOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 pt-3 space-y-3">
                    {protocols.map((protocol) => (
                      <Link
                        key={protocol.href}
                        to={protocol.href}
                        onClick={() => {
                          setIsOpen(false);
                          setProtocolsOpen(false);
                        }}
                        className="block text-base text-foreground/80 hover:text-foreground transition-colors"
                      >
                        {protocol.label}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="text-xl md:text-2xl font-serif tracking-wide">
              BIORITUAL
            </Link>
          </motion.div>

          {/* Navigation - Center (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm tracking-wide hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Desktop Protocols Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm tracking-wide hover:opacity-60 transition-opacity outline-none">
                Guided Protocols by Goal
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="center" 
                className="w-56 bg-background border border-border shadow-lg z-50"
              >
                {protocols.map((protocol) => (
                  <DropdownMenuItem key={protocol.href} asChild>
                    <Link
                      to={protocol.href}
                      className="w-full cursor-pointer"
                    >
                      {protocol.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
            <CartDrawer />
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
