

# Add Collection and Blog Blocks to Homepage

## Overview

Three new block placements on the homepage using existing components (no hardcoding):

1. **Protocols carousel** right after the Header (before Hero)
2. **Blog article carousel** right after the "What we actually do" block
3. **Protocols carousel** again near the bottom (before FinalCTA)

## Section Order (Updated)

```text
Header
ShopByGoal (protocols carousel)       <-- NEW
Hero
FounderQuote (manifesto)
FeaturedCollection ("What we actually do")
ArticleCarousel (blog)                <-- NEW
ThreePillarsCarousel
ValueProps
ShopByGoal (protocols carousel)       <-- NEW
FinalCTA
Footer
StickyEmailFooter
```

## Changes

### `src/pages/Index.tsx`

- Import `ShopByGoal` from `@/components/sections/ShopByGoal`
- Import `ArticleCarousel` from `@/components/blog/ArticleCarousel`
- Add `<ShopByGoal />` immediately after `<Header />`
- Add `<ArticleCarousel />` immediately after `<FeaturedCollection />`
- Add `<ShopByGoal />` immediately before `<FinalCTA />`

Both components are fully dynamic -- `ShopByGoal` fetches protocols from Shopify and `ArticleCarousel` pulls from the article registry. No new files or hardcoded data needed.
