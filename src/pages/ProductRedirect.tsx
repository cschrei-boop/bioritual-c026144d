import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Map Shopify product handles to internal routes
const handleToRoute: Record<string, string> = {
  // Protocols
  "bio-signals-weight-loss-metabolic-health": "/protocol/bio-signals-weight-loss",
  "bio-signals-energy": "/protocol/bio-signals-energy",
  "bio-signals-cognition-brain-health": "/protocol/bio-signals-cognition",
  "bio-signals-longevity": "/protocol/bio-signals-longevity",
  "bio-signals-performance-recovery": "/protocol/bio-signals-performance-recovery",
  "bio-signals-hair-skin": "/protocol/bio-signals-hair-skin",
  // Services
  "bio-signals-ai-concierge": "/ai-concierge",
  "1-1-optimization-coaching": "/coaching",
};

const ProductRedirect = () => {
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (handle) {
      const route = handleToRoute[handle];
      if (route) {
        navigate(route, { replace: true });
      } else {
        // If no mapping found, redirect to protocols collection
        console.warn(`No route mapping found for handle: ${handle}`);
        navigate("/collection/protocols", { replace: true });
      }
    }
  }, [handle, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirecting...</p>
    </div>
  );
};

export default ProductRedirect;
