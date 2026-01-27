import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const StickyEmailFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4"
    >
      <div className="max-w-xl mx-auto bg-background/90 backdrop-blur-md rounded-2xl border border-border p-4 shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center">
          <div className="flex-1 w-full">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-secondary/50 border-border focus:border-primary h-11"
              required
            />
          </div>
          <Button
            type="submit"
            className="h-11 px-5 bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-sm whitespace-nowrap w-full sm:w-auto"
          >
            Get the signal
            <ArrowRight className="w-4 h-4" />
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          No spam. No hype. Just clarity.
        </p>
      </div>
    </motion.div>
  );
};

export default StickyEmailFooter;
