import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import JessePhoneInput from "@/components/sections/JessePhoneInput";

const STORAGE_KEY = "emailPopupDismissed";

const EmailPopup = () => {
  const [open, setOpen] = useState(false);

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

  return (
    <Dialog open={open} onOpenChange={handleDismiss}>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">Talk to Jesse™</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Your personal AI wellness coach — choose how you'd like to connect.
          </DialogDescription>
        </DialogHeader>

        <JessePhoneInput helperText="Free for 7 days. No app required." />
      </DialogContent>
    </Dialog>
  );
};

export default EmailPopup;
