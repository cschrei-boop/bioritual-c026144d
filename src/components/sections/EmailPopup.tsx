import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const INTERESTS = [
  { label: "Weight Loss / Metabolic Health", value: "weight-loss" },
  { label: "Energy / Vitality", value: "energy" },
  { label: "Cognition / Brain Health", value: "cognition" },
  { label: "Longevity", value: "longevity" },
  { label: "Performance / Recovery", value: "performance" },
  { label: "Hair and Skin", value: "hair-skin" },
] as const;

const STORAGE_KEY = "emailPopupDismissed";

const EmailPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = (isOpen: boolean) => {
    if (!isOpen) {
      localStorage.setItem(STORAGE_KEY, "true");
    }
    setOpen(isOpen);
  };

  const toggleInterest = (value: string) => {
    setSelectedInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("email_subscribers" as any).insert({
        email: email.trim(),
        interests: selectedInterests,
      } as any);

      if (error) throw error;

      // Push to Klaviyo
      supabase.functions.invoke("klaviyo-subscribe", {
        body: { email: email.trim(), interests: selectedInterests },
      }).catch((err) => console.error("Klaviyo sync failed:", err));

      toast({ title: "You're in!", description: "Thanks for subscribing." });
      localStorage.setItem(STORAGE_KEY, "true");
      setOpen(false);
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleDismiss}>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">Stay in the loop</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Get the latest protocols, signals, and insights — delivered straight to your inbox.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={255}
            className="border-foreground rounded-none focus-visible:ring-foreground"
          />

          <div className="space-y-2">
            <p className="text-sm font-medium">I'm interested in (optional):</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {INTERESTS.map(({ label, value }) => (
                <label
                  key={value}
                  className="flex items-center gap-2 cursor-pointer text-sm"
                >
                  <Checkbox
                    checked={selectedInterests.includes(value)}
                    onCheckedChange={() => toggleInterest(value)}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>

          <p className="text-[11px] text-muted-foreground leading-tight">
            By subscribing, you agree to receive marketing emails from BioRitual. You can unsubscribe at any time.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailPopup;
