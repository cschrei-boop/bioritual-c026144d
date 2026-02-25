import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface JesseWaitlistFormProps {
  /** Visual variant */
  variant?: "inline" | "stacked";
  /** Additional className for the wrapper */
  className?: string;
}

const JesseWaitlistForm = ({ variant = "inline", className = "" }: JesseWaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("email_subscribers").insert({
        email: email.trim(),
        interests: ["jesse-waitlist"],
      });
      if (error) throw error;
      toast({ title: "You're on the list!", description: "We'll be in touch when Jesse™ is ready." });
      setEmail("");
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === "stacked") {
    return (
      <form onSubmit={handleSubmit} className={`space-y-3 max-w-sm ${className}`}>
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          maxLength={255}
          className="border-foreground rounded-none focus-visible:ring-foreground"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none text-sm tracking-widest uppercase"
        >
          {isSubmitting ? "Joining..." : "Join the Jesse™ waitlist"}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        maxLength={255}
        className="w-64 border-foreground rounded-none focus-visible:ring-foreground"
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-6 text-sm tracking-widest uppercase"
      >
        {isSubmitting ? "Joining..." : "Join the Jesse™ waitlist"}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
};

export default JesseWaitlistForm;
