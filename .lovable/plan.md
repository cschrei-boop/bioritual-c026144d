
# Critical Fix: Checkout 404 Error - Domain Mismatch

## Diagnosis Summary

I've conducted extensive testing and found the **true root cause** of the checkout 404 error.

### What's Actually Happening

When a cart is created, Shopify returns a checkout URL like:
```
http://bioritual.us/cart/c/hWN8MZrCNdZKHzK7VuJRinFo?key=...
```

The problem is that `bioritual.us` is configured as your **Lovable frontend domain**, not as a Shopify checkout domain. When users try to access checkout on `bioritual.us`, they get a 404 because Lovable's router doesn't have that path.

### Proof

I tested both domains:

| Domain | URL Path | Result |
|--------|----------|--------|
| `bioritual.us` | `/cart/c/...` | **404 Page Not Found** |
| `1agu0r-uf.myshopify.com` | `/cart/c/...` | **Checkout loads successfully** |

### Why the HTTPS Fix Wasn't Enough

The previous fix added `url.protocol = 'https:'` which was correct but incomplete. The **domain itself** needs to be replaced, not just the protocol.

---

## Solution

Update the `formatCheckoutUrl` function to replace the custom domain with the Shopify myshopify.com domain.

### File: `src/lib/shopify.ts`

**Current Code (lines 429-438):**
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

**Fixed Code:**
```javascript
function formatCheckoutUrl(checkoutUrl: string): string {
  try {
    const url = new URL(checkoutUrl);
    // Force HTTPS for secure checkout
    url.protocol = 'https:';
    // Replace custom domain with Shopify's myshopify.com domain
    // Custom domains like bioritual.us don't properly route /cart/c/ checkout URLs
    url.hostname = SHOPIFY_STORE_PERMANENT_DOMAIN;
    url.searchParams.set('channel', 'online_store');
    return url.toString();
  } catch {
    return checkoutUrl;
  }
}
```

### URL Transformation

Before (broken):
```
http://bioritual.us/cart/c/hWN8MZrCNdZKHzK7VuJRinFo?key=xxx
```

After (working):
```
https://1agu0r-uf.myshopify.com/cart/c/hWN8MZrCNdZKHzK7VuJRinFo?key=xxx&channel=online_store
```

---

## Answer to Your Question: Was This Broken 5 Hours Ago?

**Yes, likely.** The Shopify API has always been returning checkout URLs with `bioritual.us` as the domain. Any cart created before this fix would have had the same 404 issue when proceeding to checkout.

The HTTPS fix applied earlier only addressed protocol (http vs https) but didn't address the domain mismatch which is the actual cause of the 404.

---

## Additional Note

After implementing this fix, users with existing carts in localStorage will still have the old broken URL cached. For a complete fix, you may want to:

1. Clear your browser's localStorage (`shopify-cart` key) to test fresh
2. Or create a new cart by removing items and re-adding them

The fix will work automatically for all new carts created after deployment.
