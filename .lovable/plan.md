
# Unified Product Page Template

## ✅ COMPLETED

Implementation completed on 2026-01-29.

## Summary

Created a unified `ProductPageTemplate` component that accepts configuration props, reducing each product page from ~300-500 lines to ~60-100 lines of content configuration.

## Files Created

| File | Purpose |
|------|---------|
| `src/components/product/ProductPageTemplate.tsx` | Reusable template (~280 lines) |
| `src/data/product-content.ts` | Shared FAQs, disclosures, and types |

## Files Refactored

| File | Before | After | Reduction |
|------|--------|-------|-----------|
| `ProductCoaching.tsx` | 326 lines | ~65 lines | 80% |
| `ProductAIConcierge.tsx` | 525 lines | ~115 lines | 78% |
| `ProductBioSignals.tsx` | 304 lines | ~80 lines | 74% |
| `ProductBioSignalsEnergy.tsx` | 494 lines | ~85 lines | 83% |
| `ProductBioSignalsPerformance.tsx` | 494 lines | ~85 lines | 83% |
| `ProductBioSignalsHairSkin.tsx` | 413 lines | ~85 lines | 79% |
| `ProductBioSignalsLongevity.tsx` | 413 lines | ~85 lines | 79% |
| `ProductBioSignalsCognition.tsx` | 413 lines | ~85 lines | 79% |

**Total: ~3,382 lines → ~685 lines (80% reduction)**

## Template Features

### 1. Shopify Integration (Built-in)
- Automatic product fetching by handle via `PRODUCT_BY_HANDLE_QUERY`
- Price display with loading states
- Variant selection (for coaching 3mo/6mo)
- Cart integration via `useCartStore`

### 2. Image Gallery
- Uses `ProductImageGallery` component
- Loading skeleton while fetching

### 3. Accordion Sections
All content organized in collapsible accordions:
- Product Description
- What's Included
- Who This Is For
- FAQ
- Required Disclosures

### 4. Shared Components
- Header/Footer
- NotSureBlock
- Customizable trust badges

## Shared Data

`src/data/product-content.ts` exports:
- `standardProtocolFaqs` - 8 standard FAQ items for all Bio Signals protocols
- `standardProtocolDisclosures` - 4 standard disclosure items
- `coachingFaqs` - 8 coaching-specific FAQ items
- `coachingDisclosures` - 4 coaching-specific disclosure items
- TypeScript interfaces: `FAQ`, `Disclosure`, `IncludedSection`

## Benefits Achieved

| Metric | Before | After |
|--------|--------|-------|
| Total lines (8 pages) | ~3,382 | ~685 |
| Average lines per page | 423 | 86 |
| Duplicated code | High | None |
| Consistency | Variable | Guaranteed |
| Maintenance | 8 files | 1 template |
