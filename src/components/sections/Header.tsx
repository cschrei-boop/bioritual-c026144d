import { motion } from "framer-motion";
import { Search, User, Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { CartDrawer } from "@/components/CartDrawer";
import { Link } from "react-router-dom";
import { useProtocolsNavigation } from "@/hooks/useProtocolsNavigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [protocolsOpen, setProtocolsOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const {
    protocols,
    isLoading: protocolsLoading
  } = useProtocolsNavigation();

  // Primary nav links (shown as standalone items)
  const primaryLinks = [
    { label: "How It Works", href: "/how-it-works" },
  ];

  // "Learn" dropdown items
  const learnLinks = [
    { label: "Blog", href: "/blog" },
    { label: "About BioRitual", href: "/about" },
    { label: "Contact", href: "mailto:hello@bioritual.com", isExternal: true },
  ];

  return <>
      {/* Announcement Scroller */}
      <div className="bg-[#4d4a93] text-white overflow-hidden py-2">
        <div className="animate-marquee whitespace-nowrap flex">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="mx-12 tracking-widest uppercase text-sm font-bold inline-block">
              PRE-LAUNCH MEMBERS GET AN EVERGREEN $100 DISCOUNT
            </span>
          ))}
        </div>
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
                {/* How It Works */}
                {primaryLinks.map(link => (
                  <Link key={link.label} to={link.href} onClick={() => setIsOpen(false)} className="text-lg tracking-wide hover:opacity-60 transition-opacity">
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Protocols Collapsible */}
                <Collapsible open={protocolsOpen} onOpenChange={setProtocolsOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg tracking-wide hover:opacity-60 transition-opacity">
                    Protocols
                    <ChevronDown className={`w-4 h-4 transition-transform ${protocolsOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 pt-3 space-y-3">
                    {protocols.map(protocol => (
                      <Link key={protocol.href} to={protocol.href} onClick={() => {
                        setIsOpen(false);
                        setProtocolsOpen(false);
                      }} className="block text-base text-foreground/80 hover:text-foreground transition-colors">
                        {protocol.label}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Jesse AI */}
                <Link to="/ai-concierge" onClick={() => setIsOpen(false)} className="text-lg tracking-wide hover:opacity-60 transition-opacity">
                  Jesse™ AI
                </Link>

                {/* Coaching */}
                <Link to="/coaching" onClick={() => setIsOpen(false)} className="text-lg tracking-wide hover:opacity-60 transition-opacity">
                  Coaching
                </Link>

                {/* Mobile Learn Collapsible */}
                <Collapsible open={learnOpen} onOpenChange={setLearnOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg tracking-wide hover:opacity-60 transition-opacity">
                    Learn
                    <ChevronDown className={`w-4 h-4 transition-transform ${learnOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 pt-3 space-y-3">
                    {learnLinks.map(link => (
                      link.isExternal ? (
                        <a key={link.label} href={link.href} onClick={() => {
                          setIsOpen(false);
                          setLearnOpen(false);
                        }} className="block text-base text-foreground/80 hover:text-foreground transition-colors">
                          {link.label}
                        </a>
                      ) : (
                        <Link key={link.label} to={link.href} onClick={() => {
                          setIsOpen(false);
                          setLearnOpen(false);
                        }} className="block text-base text-foreground/80 hover:text-foreground transition-colors">
                          {link.label}
                        </Link>
                      )
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Mobile CTA */}
                <Link
                  to="/start-here"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 inline-block bg-foreground text-background text-center text-base font-semibold tracking-wide px-6 py-3 hover:opacity-90 transition-opacity"
                >
                  Start Here
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6
        }}>
            <Link to="/" className="text-xl md:text-2xl tracking-wide font-sans font-extrabold">BIORITUAL™</Link>
          </motion.div>

          {/* Navigation - Center (Desktop) */}
          <nav className="hidden md:flex items-center gap-7">
            {/* How It Works */}
            {primaryLinks.map(link => (
              <Link key={link.label} to={link.href} className="text-sm tracking-wide hover:opacity-60 transition-opacity">
                {link.label}
              </Link>
            ))}

            {/* Desktop Protocols Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm tracking-wide hover:opacity-60 transition-opacity outline-none">
                Protocols
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 bg-background border border-border shadow-lg z-50">
                {protocols.map(protocol => (
                  <DropdownMenuItem key={protocol.href} asChild>
                    <Link to={protocol.href} className="w-full cursor-pointer">
                      {protocol.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Jesse AI */}
            <Link to="/ai-concierge" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
              Jesse™ AI
            </Link>

            {/* Coaching */}
            <Link to="/coaching" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
              Coaching
            </Link>

            {/* Desktop Learn Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm tracking-wide hover:opacity-60 transition-opacity outline-none">
                Learn
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48 bg-background border border-border shadow-lg z-50">
                {learnLinks.map((link, index) => (
                  <DropdownMenuItem key={link.label} asChild>
                    {link.isExternal ? (
                      <a href={link.href} className="w-full cursor-pointer">
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href} className="w-full cursor-pointer">
                        {link.label}
                      </Link>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right Section: CTA + Icons */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6
        }} className="flex items-center gap-4">
            {/* Start Here CTA - Desktop only */}
            <Link
              to="/start-here"
              className="hidden md:inline-block bg-foreground text-background text-sm font-semibold tracking-wide px-5 py-2 hover:opacity-90 transition-opacity"
            >
              Start Here
            </Link>
            <button className="hover:opacity-60 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            <CartDrawer />
            <button className="hover:opacity-60 transition-opacity hidden sm:block">
              <User className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </header>
    </>;
};
export default Header;
