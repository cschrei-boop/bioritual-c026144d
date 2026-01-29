
# Unified Product Page Template

## Problem
Currently, each product page is written from scratch (~300-500 lines each), duplicating:
- Shopify data fetching logic
- Cart integration
- Layout structure  
- Styling patterns
- FAQs and disclosures

## Solution
Create a single `ProductPageTemplate` component that accepts configuration props, reducing each product page to ~50-100 lines of content configuration.

---

## Template Component Design

### Props Interface
```typescript
interface ProductPageTemplateProps {
  // Shopify
  productHandle: string;
  
  // Hero
  heroImage?: string;
  heroIcon?: React.ComponentType;
  tagline: string;  // e.g., "3-Month Optimization Protocol"
  subtitle?: string;
  
  // Content Sections
  overview: React.ReactNode;
  whoIsFor: string[];
  whatsIncluded: IncludedSection[];
  progressMetrics?: string[];
  
  // FAQ & Disclosures  
  faqs: { question: string; answer: string }[];
  disclosures: { title: string; content: string }[];
  
  // CTA
  ctaText?: string;  // defaults to "Enroll Now"
  priceNote?: string;  // e.g., "One-time purchase · 3-month duration"
}
```

### Template Structure (Coaching Layout)
The template will use the two-column e-commerce layout from ProductCoaching:
```text
+--------------------------------------------------+
| Header                                           |
+------------------------+-------------------------+
|                        | Title                   |
|   ProductImageGallery  | Price                   |
|   (from Shopify)       | [Enroll Now]            |
|                        | Trust Badges            |
|                        +-------------------------+
|                        | [+] Description         |
|                        | [+] What's Included     |
|                        | [+] Who This Is For     |
|                        | [+] FAQ                 |
|                        | [+] Disclosures         |
+------------------------+-------------------------+
| NotSureBlock                                     |
| Footer                                           |
+--------------------------------------------------+
```

---

## Files to Create/Modify

| Action | File | Purpose |
|--------|------|---------|
| CREATE | `src/components/product/ProductPageTemplate.tsx` | Reusable template (~200 lines) |
| MODIFY | `src/pages/ProductCoaching.tsx` | Reduce to config only (~80 lines) |
| MODIFY | `src/pages/ProductAIConcierge.tsx` | Reduce to config only (~80 lines) |
| MODIFY | `src/pages/ProductBioSignals.tsx` | Reduce to config only (~100 lines) |
| MODIFY | `src/pages/ProductBioSignalsEnergy.tsx` | Reduce to config only (~100 lines) |
| MODIFY | `src/pages/ProductBioSignalsPerformance.tsx` | Reduce to config only |
| MODIFY | `src/pages/ProductBioSignalsHairSkin.tsx` | Reduce to config only |
| MODIFY | `src/pages/ProductBioSignalsLongevity.tsx` | Reduce to config only |
| MODIFY | `src/pages/ProductBioSignalsCognition.tsx` | Reduce to config only |

---

## Example: Before vs After

### Before (ProductBioSignalsEnergy.tsx - 494 lines)
```tsx
const ProductBioSignalsEnergy = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  // ... 50+ lines of Shopify fetching
  // ... 100+ lines of content arrays
  // ... 300+ lines of JSX layout
};
```

### After (~80 lines)
```tsx
import ProductPageTemplate from "@/components/product/ProductPageTemplate";
import heroImage from "@/assets/protocol-energy-hero.jpg";

const ProductBioSignalsEnergy = () => (
  <ProductPageTemplate
    productHandle="bio-signals-energy"
    heroImage={heroImage}
    tagline="3-Month Optimization Protocol"
    subtitle="Support baseline energy, daily consistency, and resilience"
    overview={
      <p>This protocol uses bio signals and behavioral frameworks...</p>
    }
    whoIsFor={[
      "Feel functional but consistently low-energy",
      "Experience energy crashes or wide daily swings",
      // ...
    ]}
    whatsIncluded={[
      {
        title: "The Bio Signals Protocol (3 Months)",
        items: ["Energy signaling awareness", "Circadian alignment", ...]
      },
      // ...
    ]}
    faqs={energyFaqs}
    disclosures={standardDisclosures}
  />
);
```

---

## Template Features

### 1. Shopify Integration (Built-in)
- Automatic product fetching by handle
- Price display with loading states
- Variant selection (for coaching 3mo/6mo)
- Cart integration via `useCartStore`

### 2. Image Gallery
- Uses `ProductImageGallery` component
- Falls back to hero image if no Shopify images

### 3. Accordion Sections
All content organized in collapsible accordions:
- Product Description (from `overview` prop)
- What's Included (from `whatsIncluded` prop)
- Who This Is For (from `whoIsFor` prop)
- FAQ (from `faqs` prop)
- Required Disclosures (from `disclosures` prop)

### 4. Shared Components
- Header/Footer
- NotSureBlock
- Trust badges

---

## Shared Data Files

Create shared content that's reused across protocols:

```typescript
// src/data/product-content.ts
export const standardDisclosures = [
  {
    title: "Educational Disclaimer",
    content: "This protocol provides educational and lifestyle support only..."
  },
  // ... 4 standard disclosures
];

export const standardFaqBase = [
  { question: "Is this a medical program?", answer: "..." },
  { question: "Are peptides being sold?", answer: "..." },
  // ... common FAQs
];
```

---

## Benefits

| Metric | Before | After |
|--------|--------|-------|
| Total lines (8 pages) | ~3,500 | ~800 |
| Lines per page | 300-500 | 50-100 |
| Duplicated code | High | None |
| Consistency | Variable | Guaranteed |
| Maintenance | 8 files | 1 template |

---

## Technical Notes

- Template handles all state management internally
- Product-specific content passed as props or JSX children
- Variant selector shown automatically when `variants.length > 1`
- Mobile-responsive using existing Tailwind breakpoints
- All animations/transitions handled by template
