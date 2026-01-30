import { useState, useEffect } from "react";
import { storefrontApiRequest, PROTOCOL_PRODUCTS_QUERY, ShopifyProduct } from "@/lib/shopify";

// Centralized handle-to-route mapping
export const handleToRoute: Record<string, string> = {
  "bio-signals-weight-loss-metabolic-health": "/protocol/bio-signals-weight-loss",
  "bio-signals-energy": "/protocol/bio-signals-energy",
  "bio-signals-cognition-brain-health": "/protocol/bio-signals-cognition",
  "bio-signals-longevity": "/protocol/bio-signals-longevity",
  "bio-signals-performance-recovery": "/protocol/bio-signals-performance-recovery",
  "bio-signals-hair-skin": "/protocol/bio-signals-hair-skin"
};

// Fallback static protocols for when API fails
const fallbackProtocols = [
  { label: "View All Protocols", href: "/collection/protocols" },
  { label: "Weight Loss + Metabolic Health", href: "/protocol/bio-signals-weight-loss" },
  { label: "Energy", href: "/protocol/bio-signals-energy" },
  { label: "Performance + Recovery", href: "/protocol/bio-signals-performance-recovery" },
  { label: "Hair + Skin", href: "/protocol/bio-signals-hair-skin" },
  { label: "Longevity", href: "/protocol/bio-signals-longevity" },
  { label: "Cognition + Brain Health", href: "/protocol/bio-signals-cognition" },
];

export interface ProtocolNavItem {
  label: string;
  href: string;
}

export function useProtocolsNavigation() {
  const [protocols, setProtocols] = useState<ProtocolNavItem[]>(fallbackProtocols);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProtocols() {
      try {
        const data = await storefrontApiRequest(PROTOCOL_PRODUCTS_QUERY, {
          first: 20
        });

        const protocolProducts = data?.data?.protocols?.edges || [];
        
        const dynamicProtocols: ProtocolNavItem[] = [
          { label: "View All Protocols", href: "/collection/protocols" }
        ];

        protocolProducts.forEach((edge: { node: ShopifyProduct["node"] }) => {
          const product = edge.node;
          const route = handleToRoute[product.handle];
          
          if (route) {
            dynamicProtocols.push({
              label: product.title.replace("Bio Signals: ", ""),
              href: route
            });
          }
        });

        // Only update if we got results
        if (dynamicProtocols.length > 1) {
          setProtocols(dynamicProtocols);
        }
      } catch (error) {
        console.error("Failed to fetch protocols for navigation:", error);
        // Keep fallback protocols on error
      } finally {
        setIsLoading(false);
      }
    }

    fetchProtocols();
  }, []);

  return { protocols, isLoading };
}
