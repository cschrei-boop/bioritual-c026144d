import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SHOPIFY_STORE_PERMANENT_DOMAIN = '1agu0r-uf.myshopify.com';

/**
 * Catches Shopify checkout paths (/cart/c/...) that land on the Lovable app
 * (because bioritual.us now points to Lovable) and redirects them to the
 * Shopify permanent domain where checkout actually lives.
 */
const ShopifyCheckoutRedirect = () => {
  const location = useLocation();

  useEffect(() => {
    const shopifyUrl = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}${location.pathname}${location.search}`;
    window.location.replace(shopifyUrl);
  }, [location]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">Redirecting to checkout…</p>
    </div>
  );
};

export default ShopifyCheckoutRedirect;
