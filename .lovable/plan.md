
# Product Link & Handle Audit - Correction Plan

## Summary
After auditing all product links and Shopify handle mappings across the codebase, I found **2 critical mismatches** between the handles used in product pages vs. the handles expected in navigation/carousel components.

---

## Issues Found

### Issue 1: Performance Protocol Handle Mismatch
| Location | Handle Used |
|----------|-------------|
| `ProductBioSignalsPerformance.tsx` | `bio-signals-performance` |
| `ShopByGoal.tsx` mapping | `bio-signals-performance-recovery` |

**Problem:** The product page tries to fetch a different handle than what the carousel expects from Shopify.

### Issue 2: Cognition Protocol Handle Mismatch  
| Location | Handle Used |
|----------|-------------|
| `ProductBioSignalsCognition.tsx` | `bio-signals-cognition` |
| `ShopByGoal.tsx` mapping | `bio-signals-cognition-brain-health` |

**Problem:** Same issue - inconsistent handle naming.

---

## Files to Update

### 1. `src/pages/ProductBioSignalsPerformance.tsx`
Change `productHandle` from `"bio-signals-performance"` to `"bio-signals-performance-recovery"` to match the expected Shopify handle.

### 2. `src/pages/ProductBioSignalsCognition.tsx`
Change `productHandle` from `"bio-signals-cognition"` to `"bio-signals-cognition-brain-health"` to match the expected Shopify handle.

---

## Expected Shopify Product Handles
After correction, the application will expect these 8 products in your Shopify store:

| Product | Expected Shopify Handle |
|---------|------------------------|
| Weight Loss Protocol | `bio-signals-weight-loss-metabolic-health` |
| Energy Protocol | `bio-signals-energy` |
| Performance Protocol | `bio-signals-performance-recovery` |
| Hair + Skin Protocol | `bio-signals-hair-skin` |
| Longevity Protocol | `bio-signals-longevity` |
| Cognition Protocol | `bio-signals-cognition-brain-health` |
| AI Concierge | `bio-signals-ai-concierge` |
| 1:1 Coaching | `1-1-optimization-coaching` |

---

## Navigation Links Audit (All Correct)
The following navigation links in `Header.tsx` and `Protocols.tsx` are correctly configured:
- `/protocol/bio-signals-weight-loss`
- `/protocol/bio-signals-energy`
- `/protocol/bio-signals-performance-recovery`
- `/protocol/bio-signals-hair-skin`
- `/protocol/bio-signals-longevity`
- `/protocol/bio-signals-cognition`
- `/protocols`
- `/ai-concierge`
- `/coaching`

---

## Important Note
The 401 UNAUTHORIZED errors in your network requests suggest the Storefront API token may not have all required scopes enabled yet. Once you verify the token has the correct permissions (product listings, collection listings, checkouts), and I apply these handle corrections, the products should load properly.

---

## Technical Changes

```text
File: src/pages/ProductBioSignalsPerformance.tsx
Line 69: productHandle="bio-signals-performance"
      -> productHandle="bio-signals-performance-recovery"

File: src/pages/ProductBioSignalsCognition.tsx  
Line 69: productHandle="bio-signals-cognition"
      -> productHandle="bio-signals-cognition-brain-health"
```
