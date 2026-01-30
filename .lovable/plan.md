

# Dynamic Header Protocols Dropdown

## Problem
The "Guided Protocols by Goal" dropdown in the header uses hardcoded links that don't automatically sync with your Shopify store. If a product handle changes or new protocols are added, the header won't reflect those changes.

## Solution
Make the header dropdown dynamically fetch products from the Shopify "protocols" collection - the same data source used by the homepage carousel.

---

## What Will Change

### User Experience
- The dropdown will show the actual protocol products from your Shopify store
- A "View All Protocols" link will appear at the top of the dropdown
- While loading, users will see a brief loading indicator
- If fetch fails, the dropdown falls back to the static list (graceful degradation)

### Both Desktop and Mobile
The fix applies to both:
- Desktop: Dropdown menu under "Guided Protocols by Goal"
- Mobile: Collapsible menu in the hamburger navigation

---

## Technical Details

### 1. Create a Shared Hook: `useProtocolsNavigation`
A new custom hook in `src/hooks/useProtocolsNavigation.ts` that:
- Fetches the "protocols" collection from Shopify
- Maps Shopify product handles to internal routes using the same mapping from ShopByGoal
- Returns a list of `{ label, href }` items for navigation
- Caches results to prevent redundant API calls

### 2. Update `Header.tsx`
- Import and use the new `useProtocolsNavigation` hook
- Replace the hardcoded `protocols` array with the dynamic data
- Add loading state handling for the dropdown
- Always include "View All Protocols" as the first item

### Handle-to-Route Mapping
The mapping will be centralized and shared:

| Shopify Handle | App Route |
|----------------|-----------|
| `bio-signals-weight-loss-metabolic-health` | `/protocol/bio-signals-weight-loss` |
| `bio-signals-energy` | `/protocol/bio-signals-energy` |
| `bio-signals-performance-recovery` | `/protocol/bio-signals-performance-recovery` |
| `bio-signals-hair-skin` | `/protocol/bio-signals-hair-skin` |
| `bio-signals-longevity` | `/protocol/bio-signals-longevity` |
| `bio-signals-cognition-brain-health` | `/protocol/bio-signals-cognition` |

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/hooks/useProtocolsNavigation.ts` | Create - new shared hook |
| `src/components/sections/Header.tsx` | Modify - use dynamic data |
| `src/components/sections/ShopByGoal.tsx` | Modify - import shared mapping |

---

## Fallback Behavior
If the Shopify API request fails, the header will still show the original hardcoded list to ensure navigation always works.

