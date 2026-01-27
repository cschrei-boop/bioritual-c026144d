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
  return <motion.div initial={{
    y: 100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.6,
    delay: 1
  }} className="fixed bottom-0 left-0 right-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="max-w-xl mx-auto bg-navy/70 backdrop-blur-md rounded-full border border-white/10 p-2 sm:p-3 shadow-lg">
        <p className="text-xs text-white/90 mb-2 sm:hidden font-medium uppercase tracking-wider text-center">Get the latest signals</p>
        <form onSubmit={handleSubmit} className="flex flex-row gap-2 sm:gap-3 items-center">
          <div className="flex-1">
            <Input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} className="bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/50 h-9 sm:h-10 text-sm rounded-full" required />
          </div>
          <Button type="submit" className="h-9 sm:h-10 px-4 sm:px-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white gap-1 sm:gap-2 text-xs sm:text-sm whitespace-nowrap rounded-full uppercase tracking-wider font-medium">
            <span className="hidden sm:inline">Get the latest signals</span>
            <span className="sm:hidden">Go</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </form>
      </div>
    </motion.div>;
};
export default StickyEmailFooter;