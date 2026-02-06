

# Tighten Line Spacing and Paragraph Spacing Site-Wide

## What Changes

Two global adjustments to reduce both the space between lines within a paragraph (line-height) and the space between separate paragraphs/blocks (margins).

## Changes

### 1. Global line-height (`src/index.css`)

Reduce the base body `line-height` from `1.6` to `1.45`. This tightens every paragraph, heading, and text block across the site in one change.

### 2. Replace `leading-relaxed` with `leading-normal` across all section components

Tailwind's `leading-relaxed` sets `line-height: 1.625` -- even looser than the current body default. Swapping to `leading-normal` (`line-height: 1.5`) brings these elements in line with the tighter global setting. This affects roughly 15 instances across these files:

- `src/components/sections/Hero.tsx`
- `src/components/sections/FounderQuote.tsx`
- `src/components/sections/FeaturedCollection.tsx`
- `src/components/sections/ThreePillarsCarousel.tsx`
- `src/components/sections/Footer.tsx`
- `src/components/sections/ValueProps.tsx`
- `src/components/sections/PressQuotes.tsx`
- `src/components/sections/Peptides.tsx`
- `src/components/sections/BuiltFor.tsx`
- `src/components/sections/StartHereSection.tsx`
- `src/components/blog/BlogDisclaimer.tsx`
- `src/components/blog/BlogQuoteBlock.tsx`
- `src/components/blog/BlogCTASection.tsx`
- `src/components/product/ProductPageTemplate.tsx`

### 3. Reduce paragraph spacing in key containers

- **Hero body paragraphs**: Change `space-y-4` (16px gap) to `space-y-2` (8px gap)
- **Peptides section**: Change `space-y-6` to `space-y-4`
- **BuiltFor section**: Change `space-y-6` to `space-y-4`
- **Problem list**: Change `space-y-4` to `space-y-3`

### 4. Reduce whitespace-pre-line paragraph gaps

Add a small global CSS rule so that `\n`-based line breaks in `whitespace-pre-line` blocks don't create oversized gaps. This is already handled by the line-height reduction -- no extra rule needed.

## Summary

| Property | Before | After |
|---|---|---|
| Body line-height | 1.6 | 1.45 |
| Component line-height | leading-relaxed (1.625) | leading-normal (1.5) |
| Hero paragraph gap | space-y-4 (16px) | space-y-2 (8px) |
| Peptides/BuiltFor gap | space-y-6 (24px) | space-y-4 (16px) |
| Problem list gap | space-y-4 (16px) | space-y-3 (12px) |

## Impact

Every page on the site gets tighter text. No content, layout, or component structure changes -- purely spacing adjustments.
