import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, ArrowRight } from "lucide-react";

const StickyEmailFooter = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center justify-center px-6 md:px-12 py-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-sm tracking-wide">
                Get the latest signals
              </p>
              
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-64 border-foreground rounded-none focus-visible:ring-foreground"
                  required
                />
                <Button
                  type="submit"
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-6"
                >
                  <span className="hidden sm:inline mr-2">Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyEmailFooter;
