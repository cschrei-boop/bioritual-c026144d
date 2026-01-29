
# Unified Product Page Template

## Overview
Create a single reusable `ProductPageTemplate` component based on the 1:1 Coaching layout. All 8 product pages will be refactored to use this template, passing their unique content as configuration props.

## Current State
- **8 product pages** with inconsistent layouts (300-525 lines each)
- 3 different layout patterns: two-column (Coaching), hero+scroll (Energy, Performance, Longevity, Hair/Skin, Cognition), custom sections (AI Concierge)
- ~3,500 lines of duplicated structural code
- Different data fetching approaches (`PRODUCT_BY_HANDLE_QUERY` vs `PRODUCTS_QUERY`)

## Proposed Architecture

### New Files

**1. `src/components/product/ProductPageTemplate.tsx`**
A configurable template component with the two-column "Jones Road Beauty" layout:
- Left column: Shopify `ProductImageGallery` 
- Right column: Sticky sidebar with title, price, variant selector, CTA, trust badges, and collapsible accordions

**2. `src/types/product.ts`**
TypeScript interfaces for product configuration:

```text
ProductPageConfig {
  shopifyHandle: string
  fallbackTitle: string
  fallbackPrice: string
  ctaText: string
  description: string[]
  includedFeatures: string[]
  whoThisIsFor: { intro: string, items: string[], disclaimer: string }
  faqs: { question: string, answer: string }[]
  disclosures: { title: string, content: string }[]
  trustBadges: { icon: string, label: string }[]
  showVariantSelector?: boolean
  variantSelectorLabel?: string
}
```

### Refactored Pages
Each page becomes ~50 lines (down from 300-500):

| Page | Lines Before | Lines After |
|------|-------------|-------------|
| ProductCoaching | 326 | ~60 |
| ProductBioSignals | 262 | ~50 |
| ProductBioSignalsEnergy | 494 | ~50 |
| ProductBioSignalsPerformance | 494 | ~50 |
| ProductBioSignalsHairSkin | 413 | ~50 |
| ProductBioSignalsLongevity | 413 | ~50 |
| ProductBioSignalsCognition | 413 | ~50 |
| ProductAIConcierge | 525 | ~55 |

## Template Features

### Layout (matching ProductCoaching)
```text
+------------------------------------------+
| Header                                   |
+------------------------------------------+
|                                          |
|  +------------------+  +--------------+  |
|  |                  |  | Title        |  |
|  | Product Gallery  |  | Price        |  |
|  | (swipeable mob)  |  | [Variants]   |  |
|  | (thumbnails dk)  |  | [Enroll CTA] |  |
|  |                  |  | Trust Badges |  |
|  +------------------+  | ------------ |  |
|                        | Accordions:  |  |
|                        | - Description|  |
|                        | - Included   |  |
|                        | - Who For    |  |
|                        | - FAQ        |  |
|                        | - Disclosures|  |
|                        +--------------+  |
|                        (sticky on scroll)|
+------------------------------------------+
| NotSureBlock                             |
+------------------------------------------+
| Footer                                   |
+------------------------------------------+
```

### Key Behaviors
1. **Shopify Data Fetching**: Uses `PRODUCT_BY_HANDLE_QUERY` for direct handle lookup
2. **Variant Selection**: Optional selector for products with multiple variants (Coaching 3mo/6mo)
3. **Trust Badges**: Configurable icons and labels per product
4. **Mobile/Desktop**: Carousel with dots on mobile, thumbnail strip on desktop

## Implementation Steps

1. **Create TypeScript interfaces** (`src/types/product.ts`)
   - `ProductPageConfig` interface
   - `TrustBadge` interface
   - `FAQ` and `Disclosure` types

2. **Build ProductPageTemplate** (`src/components/product/ProductPageTemplate.tsx`)
   - Accept `ProductPageConfig` as props
   - Implement two-column grid layout
   - Handle product fetching with handle
   - Render variant selector conditionally
   - Map accordion sections from config

3. **Create product config files** (`src/config/products/`)
   - One config file per product with all content
   - Export typed `ProductPageConfig` objects

4. **Refactor all 8 product pages**
   - Import template and config
   - Render `<ProductPageTemplate config={productConfig} />`

---

## Technical Details

### Template Props Interface
```typescript
interface ProductPageConfig {
  shopifyHandle: string;
  fallbackTitle: string;
  fallbackPrice: string;
  ctaText: string;
  description: string[];
  includedFeatures: string[];
  whoThisIsFor: {
    intro: string;
    items: string[];
    disclaimer?: string;
  };
  faqs: Array<{ question: string; answer: string }>;
  disclosures: Array<{ title: string; content: string }>;
  trustBadges: Array<{ 
    icon: 'truck' | 'rotateCcw' | 'clock' | 'zap';
    label: string;
  }>;
  showVariantSelector?: boolean;
  variantSelectorLabel?: string;
}
```

### Data Fetching Standardization
All pages will use `PRODUCT_BY_HANDLE_QUERY` for consistent, direct product lookup:
```typescript
const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, {
  handle: config.shopifyHandle,
});
```

### File Structure After Refactor
```text
src/
  components/
    product/
      ProductPageTemplate.tsx  (NEW - ~250 lines)
      ProductImageGallery.tsx  (existing)
  config/
    products/                  (NEW)
      coaching.ts
      bio-signals-weight-loss.ts
      bio-signals-energy.ts
      bio-signals-performance.ts
      bio-signals-hair-skin.ts
      bio-signals-longevity.ts
      bio-signals-cognition.ts
      ai-concierge.ts
  types/
    product.ts                 (NEW)
  pages/
    ProductCoaching.tsx        (~60 lines)
    ProductBioSignals.tsx      (~50 lines)
    ... (all simplified)
```

## Benefits
- **Maintainability**: Single source of truth for layout and behavior
- **Consistency**: All products use identical UX patterns
- **Reduced code**: ~3,000 lines removed
- **Easy updates**: Change template once, all pages update
- **Type safety**: TypeScript enforces content structure
