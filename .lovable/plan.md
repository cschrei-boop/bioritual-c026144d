
# Plan: Fix Shopify Product Link Architecture

## Problem Summary
When users click Shopify-generated product links (e.g., from email campaigns), they land on the wrong product. For example:
- `/products/1-1-optimization-coaching-v2` redirects to `/coaching`
- But `/coaching` loads product data for `1-1-optimization-coaching` (a different product at $2,999)
- The actual `-v2` product is $49.95 - completely different pricing

This breaks email promotions and any Shopify-generated links.

## Solution Overview
Create a dynamic product page that fetches and displays whatever Shopify handle is in the URL, without redirecting to curated pages.

---

## Implementation Steps

### 1. Create Dynamic Product Page Component

Create a new `src/pages/DynamicProduct.tsx` that:
- Reads the `:handle` parameter from the URL
- Fetches product data directly from Shopify using that exact handle
- Displays product information using a simplified version of the existing product template
- Shows a "Product not found" state if the handle doesn't exist in Shopify
- Falls back to `/collection/protocols` for unknown handles (per user preference)

### 2. Update App.tsx Routing

Replace the current redirect approach:

```text
Current:
/products/:handle -> ProductRedirect -> /coaching (hardcoded handle)

New:
/products/:handle -> DynamicProduct (fetches exact handle from Shopify)
```

Changes to `src/App.tsx`:
- Import `DynamicProduct` instead of `ProductRedirect`
- Route `/products/:handle` to `DynamicProduct`

### 3. Add Cart Drawer Open State

To support auto-opening the cart drawer when redirected from `/cart`:

**Option A: Add state to cart store**
Add `isCartOpen` and `setCartOpen` to `cartStore.ts`

**Option B: Use sessionStorage flag**
Set a flag in `CartRedirect`, check and clear it in `CartDrawer`

Recommendation: Use sessionStorage (simpler, no store changes needed)

### 4. Update CartRedirect Component

Modify `src/pages/CartRedirect.tsx` to:
- Set a `sessionStorage` flag to auto-open cart
- Redirect to homepage

### 5. Update CartDrawer Component

Modify `src/components/CartDrawer.tsx` to:
- Check for auto-open flag on mount
- Open drawer if flag is present
- Clear the flag after opening

---

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `src/pages/DynamicProduct.tsx` | Create | New dynamic product page that fetches any Shopify handle |
| `src/App.tsx` | Modify | Update routing to use DynamicProduct |
| `src/pages/CartRedirect.tsx` | Modify | Add auto-open cart flag |
| `src/components/CartDrawer.tsx` | Modify | Check for auto-open flag on mount |
| `src/pages/ProductRedirect.tsx` | Delete | No longer needed |

---

## Technical Details

### DynamicProduct.tsx Structure

```text
1. Extract handle from URL params
2. Fetch product from Shopify using PRODUCT_BY_HANDLE_QUERY
3. Display states:
   - Loading: Show skeleton/spinner
   - Not found: Show error + link to collection
   - Success: Show product with:
     - Image gallery
     - Title, price, variants
     - Add to cart button
     - Basic product description from Shopify
4. Add to cart uses the exact variant from this handle
```

### Content Approach

The dynamic page will use Shopify's product description rather than the curated content from existing pages. This ensures:
- Any handle works automatically
- New products added in Shopify "just work"
- No manual mapping required for new products

Curated pages (`/coaching`, `/protocol/...`) remain available for direct navigation with their richer content.

### Cart Auto-Open Flow

```text
User clicks: /cart?discount=COACH
  -> CartRedirect.tsx
    -> Store discount in sessionStorage
    -> Set "auto_open_cart" flag in sessionStorage
    -> Navigate to "/"
  -> Homepage loads
    -> CartDrawer checks for flag
    -> Opens drawer automatically
    -> Clears flag
```

---

## Outcome

After implementation:
- `/products/1-1-optimization-coaching-v2` shows the V2 product ($49.95)
- `/products/1-1-optimization-coaching` shows the original product ($2,999)
- `/products/bio-signals-energy` shows the Energy protocol
- Any new Shopify product works without code changes
- `/cart?discount=COACH` opens cart drawer automatically
- Existing curated pages (`/coaching`, `/protocol/...`) continue working unchanged
