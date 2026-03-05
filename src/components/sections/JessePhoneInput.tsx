import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const countryCodes = [
  { code: "+1", label: "US", flag: "🇺🇸" },
  { code: "+44", label: "UK", flag: "🇬🇧" },
  { code: "+61", label: "AU", flag: "🇦🇺" },
  { code: "+49", label: "DE", flag: "🇩🇪" },
  { code: "+33", label: "FR", flag: "🇫🇷" },
  { code: "+81", label: "JP", flag: "🇯🇵" },
  { code: "+91", label: "IN", flag: "🇮🇳" },
  { code: "+55", label: "BR", flag: "🇧🇷" },
  { code: "+52", label: "MX", flag: "🇲🇽" },
  { code: "+34", label: "ES", flag: "🇪🇸" },
];

type Platform = "whatsapp" | "imessage";

interface JessePhoneInputProps {
  className?: string;
  helperText?: string;
}

const JessePhoneInput = ({
  className = "",
  helperText = "Jesse will text you within a few minutes. Free for 7 days.",
}: JessePhoneInputProps) => {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [platform, setPlatform] = useState<Platform>("whatsapp");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCodes, setShowCodes] = useState(false);

  const selectedCountry = countryCodes.find((c) => c.code === countryCode) || countryCodes[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const fullPhone = `${countryCode}${phone.trim()}`;

      const { error } = await supabase.from("email_subscribers").insert({
        email: `${fullPhone}@phone.placeholder`,
        phone: fullPhone,
        interests: ["jesse-trial", platform],
      } as any);
      if (error) throw error;

      supabase.functions
        .invoke("klaviyo-subscribe", {
          body: {
            email: `${fullPhone}@phone.placeholder`,
            phone: fullPhone,
            interests: ["jesse-trial", platform],
          },
        })
        .catch((err) => console.error("Klaviyo sync failed:", err));

      toast({
        title: "Jesse will text you shortly.",
        description: `We'll reach you on ${platform === "whatsapp" ? "WhatsApp" : "iMessage"}.`,
      });
      setPhone("");
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`max-w-md ${className}`}>
      {/* Input row — styled like a message input bar */}
      <div className="flex items-center border border-foreground/20 bg-background rounded-full px-1 py-1 focus-within:border-foreground/40 transition-colors">
        {/* Country code selector */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowCodes(!showCodes)}
            className="flex items-center gap-1 px-3 py-2 text-sm hover:bg-secondary rounded-full transition-colors"
          >
            <span>{selectedCountry.flag}</span>
            <span className="text-foreground/60 text-xs">{selectedCountry.code}</span>
          </button>
          {showCodes && (
            <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto min-w-[140px]">
              {countryCodes.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    setCountryCode(c.code);
                    setShowCodes(false);
                  }}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-secondary transition-colors text-left"
                >
                  <span>{c.flag}</span>
                  <span className="text-foreground/60">{c.code}</span>
                  <span className="text-foreground/40 text-xs">{c.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Phone input */}
        <Input
          type="tel"
          placeholder="Your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          maxLength={15}
          className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none text-base placeholder:text-foreground/30"
        />

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-5 py-2 text-sm tracking-wide shrink-0"
        >
          {isSubmitting ? "..." : "Start talking to Jesse"}
          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
        </Button>
      </div>

      {/* Platform toggle */}
      <div className="flex items-center justify-between mt-3 px-2">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPlatform("whatsapp")}
            className={`flex items-center gap-1.5 text-xs tracking-wide transition-colors ${
              platform === "whatsapp"
                ? "text-foreground"
                : "text-foreground/30 hover:text-foreground/50"
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp
          </button>
          <span className="text-foreground/15 text-xs">|</span>
          <button
            type="button"
            onClick={() => setPlatform("imessage")}
            className={`flex items-center gap-1.5 text-xs tracking-wide transition-colors ${
              platform === "imessage"
                ? "text-foreground"
                : "text-foreground/30 hover:text-foreground/50"
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            iMessage
          </button>
        </div>
      </div>

      {/* Helper text */}
      <p className="text-foreground/40 text-xs mt-2 px-2" style={{ fontFamily: "'Inter', sans-serif" }}>
        {helperText}
      </p>
    </form>
  );
};

export default JessePhoneInput;
