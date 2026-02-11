import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const StickyEmailFooter = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("email_subscribers" as any).insert({
        email: email.trim(),
        interests: [],
      } as any);
      if (error) throw error;
      toast({ title: "You're in!", description: "Thanks for subscribing." });
      setEmail("");
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#4d4a93] border-t border-[#4d4a93] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 p-1 text-white/60 hover:text-white transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center justify-center px-6 md:px-12 py-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-sm tracking-wide text-white">
                Get the latest signals
              </p>
              
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-64 border-white/40 bg-white/10 text-white placeholder:text-white/50 rounded-none focus-visible:ring-white"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-[#4d4a93] hover:bg-white/90 rounded-none px-6"
                >
                  <span className="hidden sm:inline mr-2">{isSubmitting ? "..." : "Subscribe"}</span>
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
