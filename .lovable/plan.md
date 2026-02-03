
# Fix: Checkout 404 Error

## Problem Analysis

When users click "Proceed to Checkout," they get a 404 error. The root cause is that Shopify's API returns a checkout URL with:

1. **HTTP protocol** instead of HTTPS: `http://bioritual.us/cart/c/...`
2. **Custom domain** (`bioritual.us`) that may not have proper routing for the new cart checkout path format

The current `formatCheckoutUrl` function only adds the `channel=online_store` query parameter but doesn't ensure the URL uses HTTPS.

## Solution

Update the `formatCheckoutUrl` function in `src/lib/shopify.ts` to:

1. **Force HTTPS protocol** - Convert any `http://` URLs to `https://`
2. **Keep the `channel=online_store` parameter** - This is required for checkout to work

## Changes Required

### File: `src/lib/shopify.ts`

**Current Code (lines 429-437):**
```javascript
function formatCheckoutUrl(checkoutUrl: string): string {
  try {
    const url = new URL(checkoutUrl);
    url.searchParams.set('channel', 'online_store');
    return url.toString();
  } catch {
    return checkoutUrl;
  }
}
```

**Updated Code:**
```javascript
function formatCheckoutUrl(checkoutUrl: string): string {
  try {
    const url = new URL(checkoutUrl);
    // Force HTTPS for secure checkout
    url.protocol = 'https:';
    url.searchParams.set('channel', 'online_store');
    return url.toString();
  } catch {
    return checkoutUrl;
  }
}
```

## Why This Works

- The Shopify Storefront API sometimes returns HTTP URLs for custom domains
- Forcing HTTPS ensures the checkout page loads securely
- The `channel=online_store` parameter remains in place to bypass password protection

## Verification

After this fix:
- Checkout URL: `http://bioritual.us/cart/c/xxx?key=xxx`
- Becomes: `https://bioritual.us/cart/c/xxx?key=xxx&channel=online_store`

## Notes

If the 404 persists after this change, the issue may be on Shopify's side with the custom domain configuration. In that case, you would need to:
1. Verify SSL is properly configured for `bioritual.us` in Shopify admin
2. Ensure the domain is properly connected to the Shopify store
3. Consider using the default Shopify checkout domain as a fallback
