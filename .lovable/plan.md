
Goal: Make all six protocol product pages show the same clean, sectioned (collapsible) layout as the old protocol pages—without bringing back separate hardcoded “page components”.

What I found (from the current codebase)
- The “rich” protocol layout already exists: `src/components/product/ProductPageTemplate.tsx` renders multiple accordion sections:
  - Product Description
  - What’s Included
  - Who This Is For
  - FAQ
  - Required Disclosures
- The generic dynamic product layout (`BasicDynamicProductPage` inside `src/pages/DynamicProduct.tsx`) only has a single “Product Description” accordion, so if a protocol ever falls back to this basic view, the Shopify description (often containing headings like “What’s Included…”) looks “crammed” into one section.
- Your site still has internal links pointing to `/protocol/...` (e.g. `src/pages/Protocols.tsx`, `src/pages/WeightLossLanding.tsx`), and those legacy slugs don’t always match the actual Shopify handles (notably:
  - `/protocol/bio-signals-weight-loss` vs Shopify handle `bio-signals-weight-loss-metabolic-health`
  - `/protocol/bio-signals-cognition` vs Shopify handle `bio-signals-cognition-brain-health`)
  This increases the chance users end up on a route/handle that doesn’t trigger the rich protocol template.

Likely root cause of what you’re seeing
- You’re landing on a protocol URL/slug that is not being resolved to the canonical protocol handle (or not being detected as a protocol), so the app renders the basic dynamic product page.
- The basic page shows the entire Shopify description in a single accordion (“Product Description”), which reads as “all copy crammed together”.

Implementation plan (no separate hardcoded protocol page components)
1) Add a “canonical handle resolver” for protocol slugs
   - Create a small mapping of legacy protocol slugs → canonical Shopify handles, e.g.:
     - `bio-signals-weight-loss` → `bio-signals-weight-loss-metabolic-health`
     - `bio-signals-cognition` → `bio-signals-cognition-brain-health`
     - others map to themselves
   - Normalize incoming params: `trim()`, `toLowerCase()`

2) Ensure protocol detection is robust (so protocols never fall back to the basic one-accordion layout)
   - In `DynamicProduct.tsx`, resolve `canonicalHandle` first, then use it consistently:
     - for looking up protocol editorial content
     - for passing into `ProductPageTemplate`
   - Optional safety net: if the product is fetched and has tag `protocol` (you already have tags in the storefront queries for the disclaimer work), treat it as a protocol even if the handle wasn’t in the map (helps future-proof v2 handles).
   - Result: any protocol always renders `ProductPageTemplate` (multi-accordion), not `BasicDynamicProductPage`.

3) Make `/protocol/:handle` and `/products/:handle` both work, but keep `/products/:handle` as the “real” canonical route
   - Add a route in `src/App.tsx`:
     - `/protocol/:handle` should render the same `DynamicProduct` component (or redirect to `/products/:canonicalHandle`).
   - This removes ambiguity when users navigate from older internal links or bookmarks.

4) Fix internal links so the site primarily uses `/products/<canonicalHandle>`
   - Update:
     - `src/pages/Protocols.tsx` protocol cards/CTAs from `/protocol/...` → `/products/...`
     - `src/pages/WeightLossLanding.tsx` links from `/protocol/...` → `/products/...`
     - Search the codebase for any remaining `"/protocol/"` occurrences and update them similarly.
   - Even if we keep `/protocol/:handle` working, this prevents users from entering the legacy path in the first place.

5) QA checklist (verify the exact issue is resolved)
   For each protocol, verify BOTH URLs show the multi-accordion layout and the copy is separated correctly:
   - Longevity
     - `/products/bio-signals-longevity`
     - `/protocol/bio-signals-longevity`
   - Energy
     - `/products/bio-signals-energy`
     - `/protocol/bio-signals-energy`
   - Performance + Recovery
     - `/products/bio-signals-performance-recovery`
     - `/protocol/bio-signals-performance-recovery`
   - Hair + Skin
     - `/products/bio-signals-hair-skin`
     - `/protocol/bio-signals-hair-skin`
   - Cognition (legacy slug should resolve correctly)
     - `/products/bio-signals-cognition-brain-health`
     - `/protocol/bio-signals-cognition` (should resolve/redirect)
   - Weight Loss (legacy slug should resolve correctly)
     - `/products/bio-signals-weight-loss-metabolic-health`
     - `/protocol/bio-signals-weight-loss` (should resolve/redirect)
   Also verify non-protocol products still use the basic dynamic product page.

Notes on the “no hardcoded pages” requirement
- This plan does not reintroduce per-protocol page components/routes with custom React pages.
- It does keep protocol editorial structure/content centralized (currently in `src/data/protocol-content.tsx`) to power the richer accordion sections.
- If you want to go further and avoid hardcoding editorial copy in the codebase entirely, the next step would be moving the structured protocol content into Shopify (metafields) and having `DynamicProduct` populate the template from those fields. That’s a follow-on enhancement after we fix the immediate “crammed copy” UX.

Files that will be changed (implementation phase)
- `src/pages/DynamicProduct.tsx`
  - Add canonical handle resolution
  - Ensure protocol products always render `ProductPageTemplate`
- `src/App.tsx`
  - Add `/protocol/:handle` route (render or redirect)
- `src/pages/Protocols.tsx`
  - Update protocol links to `/products/...`
- `src/pages/WeightLossLanding.tsx`
  - Update links to `/products/...`
- (Potentially others found via search for `"/protocol/"`)

Expected outcome
- All six protocol products render with the same multi-section accordion layout (no more “everything in one accordion”).
- Legacy `/protocol/...` paths won’t lead to the wrong layout (or 404), and internal navigation will consistently use `/products/...`.
