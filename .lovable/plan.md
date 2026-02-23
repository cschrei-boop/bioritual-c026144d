

# Add Protocols Carousel to All Pages

## What Changes

Add the `ShopByGoal` protocols carousel to every page that currently lacks it, placed just above the `<Footer />`. Pages that already have it (Homepage via ProtocolGrid, BlogPageTemplate pages) remain unchanged.

## Pages to Update (9)

| Page | File | Currently Has It? |
|------|------|-------------------|
| The Journey | `src/pages/JourneyPage.tsx` | No |
| How It Works | `src/pages/HowItWorks.tsx` | No |
| Jesse | `src/pages/JessePage.tsx` | No |
| Start Here | `src/pages/StartHere.tsx` | No |
| Coaching | `src/pages/ProductCoaching.tsx` | No |
| Blog index | `src/pages/Blog.tsx` | No |
| Protocols Collection | `src/pages/ProtocolsCollection.tsx` | No |
| About | `src/pages/About.tsx` | No |
| Protocols Hub | `src/pages/Protocols.tsx` | No |

## Already Covered (no changes needed)

- **Homepage** (`Index.tsx`) -- uses `ProtocolGrid` (deliberate design choice)
- **Blog article pages** -- `BlogPageTemplate` already renders `ShopByGoal` via `hideProtocolsCarousel` prop (default: shown)
- **Protocol product pages** -- `DynamicProduct.tsx` / `ProductPageTemplate` already shows protocols context
- **Landing pages** (`LandingPage.tsx`) -- dynamic configs; will add ShopByGoal here too

## Technical Details

For each of the 9 pages listed above, plus `LandingPage.tsx`:

1. Import `ShopByGoal` from `@/components/sections/ShopByGoal`
2. Place `<ShopByGoal />` immediately before `<Footer />`

This is a straightforward addition -- no component changes needed. The `ShopByGoal` component fetches protocol products from Shopify and renders them in the `ProductCarousel` format with a "View All Protocols" link.

