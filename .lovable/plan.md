

# Comprehensive Shopify Integration Audit

## Executive Summary

This audit identifies **systemic architectural issues** that prevent the headless storefront from properly reflecting changes made in the Shopify backend. The current implementation relies on manual mappings and hardcoded handles, creating a fragile system where new products or variations are invisible to the site.

---

## Issues Identified

### 1. CRITICAL: Static Handle-to-Route Mapping

**Problem**: Products only appear on the site if they're manually added to hardcoded mappings.

**Current State**:
```text
// useProtocolsNavigation.ts - Lines 5-12
handleToRoute = {
  "bio-signals-weight-loss-metabolic-health": "/protocol/bio-signals-weight-loss",
  "bio-signals-energy": "/protocol/bio-signals-energy",
  // ... only 6 handles mapped
}
```

**Impact**:
- `1-1-optimization-coaching-v2` (handle: `1-1-optimization-coaching-v2`, $49.95) is NOT in the mapping
- When you create a new product in Shopify, it won't appear anywhere until a developer adds it
- Collection pages filter OUT products without mappings (ProtocolsCollection.tsx line 38: `if (!route) return null`)

**Shopify Store Reality** (12 products):
| Product | Handle | In Mapping? |
|---------|--------|-------------|
| 1:1 Optimization Coaching | `1-1-optimization-coaching` | Yes (to /coaching) |
| 1:1 Optimization Coaching V2 | `1-1-optimization-coaching-v2` | Yes (but wrong - same page) |
| Bio Signals: AI Concierge | `bio-signals-ai-concierge` | Not in protocol mapping |
| Bio Signals: Weight Loss... | `bio-signals-weight-loss-metabolic-health` | Yes |
| Bio Signals: Energy | `bio-signals-energy` | Yes |
| Bio Signals: Cognition... | `bio-signals-cognition-brain-health` | Yes |
| Bio Signals: Longevity | `bio-signals-longevity` | Yes |
| Bio Signals: Beauty | `bio-signals-hair-skin` | Yes |
| Bio Signals: Performance... | `bio-signals-performance-recovery` | Yes |
| METBOLIC PROTOCOL | Unknown | No |
| Sample photo pack | Unknown | No |
| Legendary Romance... | Unknown | No |

---

### 2. CRITICAL: Curated Pages Use Hardcoded Handles

**Problem**: Each product page is hardcoded to a single Shopify handle.

```text
// ProductCoaching.tsx - Line 45
productHandle="1-1-optimization-coaching"
```

Even if `/products/1-1-optimization-coaching-v2` redirects to `/coaching`, the page ALWAYS loads data for `1-1-optimization-coaching` ($2,999) instead of the V2 product ($49.95).

**All Affected Pages**:
| Page | Hardcoded Handle | Price Loaded |
|------|------------------|--------------|
| `/coaching` | `1-1-optimization-coaching` | $2,999 |
| `/protocol/bio-signals-weight-loss` | `bio-signals-weight-loss-metabolic-health` | $699 |
| `/protocol/bio-signals-energy` | `bio-signals-energy` | $699 |
| `/protocol/bio-signals-cognition` | `bio-signals-cognition-brain-health` | $699 |
| `/protocol/bio-signals-longevity` | `bio-signals-longevity` | $699 |
| `/protocol/bio-signals-performance-recovery` | `bio-signals-performance-recovery` | $699 |
| `/protocol/bio-signals-hair-skin` | `bio-signals-hair-skin` | $699 |
| `/ai-concierge` | `bio-signals-ai-concierge` | $9.99 |

---

### 3. HIGH: /products/:handle Redirects Instead of Displays

**Problem**: ProductRedirect.tsx forces all Shopify URLs through a mapping table.

```text
// ProductRedirect.tsx - Current behavior
/products/1-1-optimization-coaching-v2 
  -> looks up in handleToRoute 
  -> redirects to /coaching 
  -> /coaching loads "1-1-optimization-coaching" ($2,999)
  -> User sees WRONG PRICE
```

This breaks:
- Email marketing links from Shopify
- Direct product shares
- Shopify-generated URLs
- Any new product until manually mapped

---

### 4. HIGH: Collections Filter Out Unmapped Products

**Problem**: ProtocolsCollection.tsx only shows products with mapped handles.

```text
// ProtocolsCollection.tsx - Line 38
if (!route) return null;
```

If you add a new protocol in Shopify, it won't appear in `/collection/protocols` until a developer adds the mapping AND creates a new page component.

---

### 5. MEDIUM: No Dynamic Data Refresh

**Problem**: Product data is fetched on component mount with no caching strategy.

```text
// ProductPageTemplate.tsx uses useEffect for one-time fetch
// No React Query, no stale-while-revalidate
```

If you update a price in Shopify, users may see stale data until they hard-refresh.

---

### 6. MEDIUM: Cart Links Don't Auto-Open

**Problem**: `/cart` and `/cart?discount=X` silently redirect to homepage.

```text
// CartRedirect.tsx - Only stores discount, doesn't trigger drawer
sessionStorage.setItem("shopify_discount", discount);
navigate("/", { replace: true });
```

Users clicking cart links from emails land on homepage with no visual feedback.

---

### 7. LOW: Inconsistent Product Type Filtering

**Problem**: PROTOCOL_PRODUCTS_QUERY filters by product_type.

```text
query: "product_type:Protocol OR product_type:'Digital Protocol'"
```

Products must have exact type "Protocol" or "Digital Protocol" to appear. Typos or variations (e.g., "Coaching Service") are excluded from protocol listings.

---

## Recommended Architecture

### Phase 1: Dynamic Product Resolution (Fixes Issues 1, 2, 3)

Create a universal product page that works for ANY Shopify handle:

```text
/products/:handle -> DynamicProduct.tsx
  - Fetches product by exact URL handle
  - Displays product with generic template
  - No mapping required
  - Falls back to /collection/protocols if not found
```

For curated experiences (rich content, custom layouts), keep existing pages but make them secondary, not required.

### Phase 2: Dynamic Collection Pages (Fixes Issue 4)

Remove filtering by mapped routes:

```text
ProtocolsCollection.tsx
  - Show ALL products from Shopify with type "Protocol" or "Digital Protocol"
  - Link to /products/:handle (dynamic page)
  - No mapping table needed
```

### Phase 3: Cart Auto-Open (Fixes Issue 6)

Implement sessionStorage flag system:

```text
/cart -> CartRedirect.tsx
  - Set "auto_open_cart" flag
  - Store discount if present
  - Redirect to "/"
  
CartDrawer.tsx
  - Check flag on mount
  - Open drawer automatically
  - Clear flag
```

### Phase 4: Data Freshness (Fixes Issue 5)

Migrate Shopify fetches to React Query with appropriate cache settings:

```text
useQuery({
  queryKey: ['product', handle],
  queryFn: () => fetchProductByHandle(handle),
  staleTime: 1000 * 60 * 5, // 5 minutes
  refetchOnWindowFocus: true
})
```

---

## Implementation Plan

### Files to Create

| File | Purpose |
|------|---------|
| `src/pages/DynamicProduct.tsx` | Universal product page for any Shopify handle |
| `src/hooks/useShopifyProduct.ts` | React Query hook for product fetching |
| `src/hooks/useShopifyCollection.ts` | React Query hook for collection fetching |

### Files to Modify

| File | Changes |
|------|---------|
| `src/App.tsx` | Route `/products/:handle` to DynamicProduct |
| `src/pages/CartRedirect.tsx` | Add auto-open cart flag |
| `src/components/CartDrawer.tsx` | Check for auto-open flag on mount |
| `src/pages/ProtocolsCollection.tsx` | Remove handleToRoute filtering, link to dynamic pages |
| `src/components/sections/ShopByGoal.tsx` | Link to dynamic pages instead of curated routes |
| `src/hooks/useProtocolsNavigation.ts` | Remove route mapping, just provide navigation data |

### Files to Delete

| File | Reason |
|------|--------|
| `src/pages/ProductRedirect.tsx` | Replaced by DynamicProduct |

---

## Technical Details

### DynamicProduct.tsx Structure

```text
1. Extract handle from URL params
2. Fetch product using React Query + PRODUCT_BY_HANDLE_QUERY
3. Handle states:
   - Loading: Skeleton UI
   - Not found: Redirect to /collection/protocols
   - Success: Display with generic template
     - Image gallery
     - Title, description from Shopify
     - Price, variants
     - Add to cart
4. Add to cart uses exact variant IDs from fetched product
```

### Curated Pages Integration

Existing curated pages (`/coaching`, `/protocol/*`) remain available for direct navigation. They provide rich, custom content. The dynamic page provides a fallback for any handle, ensuring all Shopify products are purchasable.

### Collection Page Flow

```text
User visits /collection/protocols
  -> Fetch ALL products with type "Protocol" or "Digital Protocol"
  -> Display grid with Shopify titles, images, prices
  -> Each card links to /products/:handle
  -> Clicking loads DynamicProduct with correct data
```

---

## Outcome

After implementation:

- Any product created in Shopify is immediately accessible via `/products/:handle`
- No code changes needed to add new products
- Shopify URLs in emails work correctly
- Prices always match Shopify (V2 shows $49.95, original shows $2,999)
- Cart links auto-open the drawer
- Collection pages show all protocols dynamically
- Curated pages still work for direct navigation with rich content

