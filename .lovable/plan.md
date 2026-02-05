

# Remove Hardcoded Protocol Pages and Use Dynamic Product Pages

## Overview

Currently there are two separate routes for protocol products:
- `/protocol/bio-signals-longevity` - Uses `ProductPageTemplate` with rich editorial content
- `/products/bio-signals-longevity` - Uses `DynamicProduct` with only basic Shopify data

You want to consolidate to just `/products/:handle` for all products, including protocols with their full editorial content.

## Solution

Enhance `DynamicProduct.tsx` to detect when a product handle matches a known protocol, and render the rich `ProductPageTemplate` with all the editorial content (description, what's included, who it's for, FAQs, disclosures).

## Files to Modify

| File | Change |
|------|--------|
| `src/App.tsx` | Remove 6 hardcoded `/protocol/*` routes |
| `src/data/protocol-content.ts` | New file - centralize editorial content for all 6 protocols |
| `src/pages/DynamicProduct.tsx` | Check handle against protocol map, render `ProductPageTemplate` if match |

## Protocol Handle Mapping

| Shopify Handle | Editorial Content Key |
|----------------|----------------------|
| `bio-signals-weight-loss-metabolic-health` | Weight Loss |
| `bio-signals-energy` | Energy |
| `bio-signals-performance-recovery` | Performance |
| `bio-signals-hair-skin` | Hair + Skin |
| `bio-signals-longevity` | Longevity |
| `bio-signals-cognition-brain-health` | Cognition |

## Technical Implementation

### 1. Create `src/data/protocol-content.ts`

This file will export a map of `handle -> editorial content`:

```typescript
export const protocolEditorialContent: Record<string, {
  fallbackTitle: string;
  tagline: string;
  description: ReactNode;
  whatsIncluded: IncludedSection[];
  whoIsFor: string[];
}> = {
  "bio-signals-longevity": {
    fallbackTitle: "Bio Signals: Longevity",
    tagline: "3-Month Optimization Protocol",
    description: <JSX content>,
    whatsIncluded: [...],
    whoIsFor: [...]
  },
  // ... other 5 protocols
};
```

### 2. Update `DynamicProduct.tsx`

```typescript
import { protocolEditorialContent } from "@/data/protocol-content";
import ProductPageTemplate from "@/components/product/ProductPageTemplate";

const DynamicProduct = () => {
  const { handle } = useParams();
  
  // Check if this handle has editorial content
  const editorialContent = handle ? protocolEditorialContent[handle] : null;
  
  if (editorialContent) {
    // Render rich protocol page
    return (
      <ProductPageTemplate
        productHandle={handle}
        fallbackTitle={editorialContent.fallbackTitle}
        tagline={editorialContent.tagline}
        description={editorialContent.description}
        whatsIncluded={editorialContent.whatsIncluded}
        whoIsFor={editorialContent.whoIsFor}
        faqs={standardProtocolFaqs}
        disclosures={standardProtocolDisclosures}
      />
    );
  }
  
  // Otherwise render basic dynamic product page
  return <BasicDynamicProductLayout ... />;
};
```

### 3. Update `App.tsx`

Remove these 6 routes:
```tsx
// DELETE THESE LINES:
<Route path="/protocol/bio-signals-weight-loss" element={<ProductBioSignals />} />
<Route path="/protocol/bio-signals-energy" element={<ProductBioSignalsEnergy />} />
<Route path="/protocol/bio-signals-performance-recovery" element={<ProductBioSignalsPerformance />} />
<Route path="/protocol/bio-signals-hair-skin" element={<ProductBioSignalsHairSkin />} />
<Route path="/protocol/bio-signals-longevity" element={<ProductBioSignalsLongevity />} />
<Route path="/protocol/bio-signals-cognition" element={<ProductBioSignalsCognition />} />
```

## Files to Delete (After Implementation)

These individual page files will no longer be needed:
- `src/pages/ProductBioSignals.tsx`
- `src/pages/ProductBioSignalsEnergy.tsx`
- `src/pages/ProductBioSignalsPerformance.tsx`
- `src/pages/ProductBioSignalsHairSkin.tsx`
- `src/pages/ProductBioSignalsLongevity.tsx`
- `src/pages/ProductBioSignalsCognition.tsx`

## Result

| URL | Before | After |
|-----|--------|-------|
| `/products/bio-signals-longevity` | Basic Shopify layout | Full editorial + template |
| `/protocol/bio-signals-longevity` | Full editorial | 404 (removed) |
| `/products/1-1-optimization-coaching` | Basic Shopify layout | Basic Shopify layout (no editorial) |

All Shopify links will now work correctly with `/products/:handle`, and protocol products will automatically get the rich editorial content.

