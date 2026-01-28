import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Loader2, ExternalLink } from "lucide-react";

interface CheckoutConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

const ACKNOWLEDGMENTS = [
  "I understand this is an educational and lifestyle optimization protocol",
  "I understand this is not medical treatment",
  "I understand protocol materials are included and not sold individually",
  "I understand materials may be shipped",
  "I understand results are not guaranteed",
  "I understand this is a one-time 3-month purchase",
];

export const CheckoutConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading = false,
}: CheckoutConfirmationModalProps) => {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [consentChecked, setConsentChecked] = useState(false);

  const allChecked =
    ACKNOWLEDGMENTS.every((_, index) => checked[index]) && consentChecked;

  const handleCheckChange = (index: number, value: boolean) => {
    setChecked((prev) => ({ ...prev, [index]: value }));
  };

  const handleConfirm = () => {
    if (allChecked) {
      onConfirm();
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setChecked({});
      setConsentChecked(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">
            Confirm Your Enrollment
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed pt-2">
            You're enrolling in a 3-month Bio Signals optimization protocol.
            This includes digital education, guided structure, and protocol
            materials shipped as part of the experience.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* What Happens Next */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
              What Happens Next
            </h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• You receive onboarding instructions</li>
              <li>• Your private client wiki is activated</li>
              <li>• Protocol materials and printed education are shipped</li>
              <li>• Optional reminders and tracking begin</li>
            </ul>
            <p className="text-xs text-muted-foreground italic">
              This is a guided, time-bound protocol — not a retail transaction.
            </p>
          </div>

          {/* Required Acknowledgments */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
              Required Acknowledgments
            </h4>
            <div className="space-y-3">
              {ACKNOWLEDGMENTS.map((text, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Checkbox
                    id={`ack-${index}`}
                    checked={checked[index] || false}
                    onCheckedChange={(value) =>
                      handleCheckChange(index, value === true)
                    }
                    className="mt-0.5"
                  />
                  <Label
                    htmlFor={`ack-${index}`}
                    className="text-sm leading-relaxed cursor-pointer"
                  >
                    {text}
                  </Label>
                </div>
              ))}
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 pt-2 border-t border-border">
              <Checkbox
                id="consent-acknowledgment"
                checked={consentChecked}
                onCheckedChange={(value) => setConsentChecked(value === true)}
                className="mt-0.5"
              />
              <Label
                htmlFor="consent-acknowledgment"
                className="text-sm leading-relaxed cursor-pointer"
              >
                I have read and agree to the Bio Signals{" "}
                <Link
                  to="/consent"
                  className="underline hover:text-muted-foreground"
                  target="_blank"
                >
                  Consent & Acknowledgment
                </Link>
                .
              </Label>
            </div>
          </div>

          {/* Final Statement */}
          <div className="bg-secondary/30 p-4 rounded-sm border border-border">
            <p className="text-xs text-muted-foreground leading-relaxed">
              By completing this purchase, you acknowledge that you are
              enrolling in an educational optimization protocol that includes
              guided structure, digital tools, and protocol materials — not a
              medical service or retail product. See our{" "}
              <Link
                to="/terms"
                className="underline hover:text-foreground"
                target="_blank"
              >
                Terms of Service
              </Link>
              ,{" "}
              <Link
                to="/fulfillment"
                className="underline hover:text-foreground"
                target="_blank"
              >
                Fulfillment & Shipping Policy
              </Link>
              , and{" "}
              <Link
                to="/consent"
                className="underline hover:text-foreground"
                target="_blank"
              >
                Consent & Acknowledgment
              </Link>{" "}
              for full details.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Button
            onClick={handleConfirm}
            disabled={!allChecked || isLoading}
            className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none"
            size="lg"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <ExternalLink className="w-4 h-4 mr-2" />
                Proceed to Checkout
              </>
            )}
          </Button>
          <Button
            variant="ghost"
            onClick={onClose}
            className="w-full"
            disabled={isLoading}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
