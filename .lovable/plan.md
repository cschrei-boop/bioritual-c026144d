

## Fix: Shopify Checkout 404 Error

### Root Cause

The `formatCheckoutUrl` function in `src/lib/shopify.ts` rewrites the checkout URL hostname from whatever Shopify returns (likely your custom domain `bioritual.us` or the default checkout domain) to `1agu0r-uf.myshopify.com`. This rewrite is likely producing an invalid checkout path -- the `.myshopify.com` permanent domain may not properly serve `/cart/c/` checkout URLs.

### Fix

**File: `src/lib/shopify.ts`** -- Update `formatCheckoutUrl` to stop overriding the hostname. Keep the URL exactly as Shopify returns it, only appending the `channel=online_store` query parameter:

```typescript
export function formatCheckoutUrl(checkoutUrl: string): string {
  try {
    const url = new URL(checkoutUrl);
    url.protocol = 'https:';
    url.searchParams.set('channel', 'online_store');
    return url.toString();
  } catch {
    return checkoutUrl;
  }
}
```

This is a single-line removal (deleting the `url.hostname = SHOPIFY_STORE_PERMANENT_DOMAIN;` line). The rest of the checkout flow remains unchanged.

### Why This Should Work

Shopify returns checkout URLs with the domain that is configured to handle checkout routing. Overriding it to the `.myshopify.com` permanent domain breaks the routing because that domain is meant for API access, not for serving checkout pages.

