
# Link Audit & Shopify Integration Plan

## ⚠️ BLOCKER: Invalid Shopify API Token

**Current Status:** The Shopify Storefront API is returning 401 Unauthorized errors. The token `bdb8a7e49aa7c9494a218628b8a233cb` is not valid.

### How to Fix

1. Go to **Shopify Admin** → **Settings** → **Apps and sales channels**
2. Click **Develop apps** (if not visible, enable custom app development first)
3. Create a new app or select an existing one
4. Go to **API credentials** tab
5. Under **Storefront API access tokens**, click **Install app** to generate a token
6. Make sure the following scopes are enabled:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_collection_listings`
   - `unauthenticated_write_checkouts`
   - `unauthenticated_read_checkouts`
7. Copy the **Storefront API access token** and provide it

---

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

### 3. Add Error States ✅ DONE
Updated `ProductPageTemplate.tsx` to show a user-friendly message if a product isn't found in Shopify (instead of infinite loading).

---

## Implementation Plan

### Step 1: Get Valid Storefront API Token ⏳ WAITING
Need a valid Storefront API token from the Shopify admin.

### Step 2: Query Shopify to Discover Actual Products
Once we have a valid token, we'll query your Shopify store to see what products actually exist and their handles.

### Step 3: Update Handle Mappings
Based on the query results, update:
- `ShopByGoal.tsx` - `handleToRoute` and `handleToSubtitle` mappings
- Each product page's `productHandle` prop
- `Header.tsx` protocols array if needed

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

### Files Modified

1. **`src/lib/shopify.ts`** ✅
   - Added `debugFetchAllProducts()` function to discover products
   - Added `ALL_PRODUCTS_QUERY` for debugging

2. **`src/components/product/ProductPageTemplate.tsx`** ✅
   - Added error state when product not found
   - Shows "Product Unavailable" message with link to browse protocols

### Files to Update Once Token Works

1. **`src/components/sections/ShopByGoal.tsx`**
   - Update `handleToRoute` mapping to match actual Shopify handles
   - Add fallback for unmapped products

2. **Product Pages** (6 protocol pages + AI Concierge + Coaching)
   - Verify/update `productHandle` props to match Shopify

3. **`src/components/sections/Header.tsx`**
   - Verify menu links match available products

---

## Summary

The site architecture is correct—it's a properly integrated headless Shopify storefront. **The current blocker is an invalid Storefront API token.** Once you provide a valid token, I can query your store and update all handle mappings.

