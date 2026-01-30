
# Link Audit & Shopify Integration Plan

## Overview

After a thorough audit of the codebase, I found that the architecture is correctly designed as a headless Shopify storefront. All product pages already connect to Shopify via the Storefront API and support add-to-cart functionality.

## Current State

The site uses internal routes that fetch Shopify data dynamically:

| Section | Current Link | Shopify Integration |
|---------|-------------|---------------------|
| Header Protocols | `/protocol/bio-signals-*` | ProductPageTemplate fetches by handle |
| FeaturedServices | Internal routes | Linked to product pages |
| ShopByGoal | `/protocol/bio-signals-*` | Fetches "protocols" collection, maps to routes |
| ProductPages | Internal | Fetches product + adds to Shopify cart |

## What Needs Verification/Fixing

### 1. Verify Shopify Product Handles Match
The product pages expect these Shopify handles to exist:

```text
bio-signals-weight-loss-metabolic-health
bio-signals-energy
bio-signals-performance-recovery
bio-signals-hair-skin
bio-signals-longevity
bio-signals-cognition-brain-health
bio-signals-ai-concierge
1-1-optimization-coaching
```

If these don't match your Shopify store, pages will fail to load product data.

### 2. ShopByGoal Handle Mapping
The `ShopByGoal.tsx` component has a hardcoded mapping. If products exist in Shopify with different handles, they won't appear in this carousel.

### 3. Add Error States
Currently, if a product doesn't exist in Shopify, the page shows a loading spinner indefinitely.

---

## Implementation Plan

### Step 1: Query Shopify to Discover Actual Products
Before making code changes, we should query your Shopify store to see what products actually exist and their handles.

### Step 2: Update Handle Mappings
Based on the query results, update:
- `ShopByGoal.tsx` - `handleToRoute` and `handleToSubtitle` mappings
- Each product page's `productHandle` prop
- `Header.tsx` protocols array if needed

### Step 3: Add Graceful Error Handling
Update `ProductPageTemplate.tsx` to show a user-friendly message if a product isn't found in Shopify (instead of infinite loading).

### Step 4: Verify End-to-End Flow
Test the complete purchase flow:
1. Browse homepage carousels
2. Click through to product page
3. Verify Shopify data loads (title, price, images)
4. Add to cart
5. Proceed to checkout
6. Confirm Shopify checkout loads

---

## Technical Details

### Files to Modify

1. **`src/lib/shopify.ts`**
   - Add a query to fetch all products for debugging
   - Add error handling improvements

2. **`src/components/sections/ShopByGoal.tsx`**
   - Update `handleToRoute` mapping to match actual Shopify handles
   - Add fallback for unmapped products

3. **`src/components/product/ProductPageTemplate.tsx`**
   - Add "Product not found" error state
   - Improve loading/error UX

4. **Product Pages** (6 protocol pages + AI Concierge + Coaching)
   - Verify/update `productHandle` props to match Shopify

5. **`src/components/sections/Header.tsx`**
   - Verify menu links match available products

### New Debugging Tool
Add a temporary admin component or console log to show:
- All products in Shopify store
- Their handles
- Which ones are mapped vs unmapped

---

## Questions Before Proceeding

Before I implement these changes, I need to verify:

1. **What products exist in your Shopify store?** I can query this programmatically.
2. **What are their exact handles?** The handles must match exactly.
3. **Should unmapped products be hidden or shown with a generic link?**

---

## Summary

The site architecture is correct—it's a properly integrated headless Shopify storefront. The issue is likely a mismatch between the hardcoded product handles in the code and the actual handles in your Shopify store.

Next step: Query your Shopify store to discover the actual product inventory and handles, then update the mappings accordingly.
