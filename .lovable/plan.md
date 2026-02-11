
# Add Protocols Carousel to BlogPageTemplate

## What Changes

Add the `ShopByGoal` protocols carousel to the `BlogPageTemplate` component, right after the `<Header />`. This will make it appear on all blog/article pages (Truth About Peptides, GLP-1 Myths, etc.) without modifying each page individually.

## Technical Details

### `src/components/blog/BlogPageTemplate.tsx`

- Import `ShopByGoal` from `@/components/sections/ShopByGoal`
- Insert `<ShopByGoal />` between `<Header />` and `<main>`
- Add an optional `hideProtocolsCarousel` prop (default `false`) so individual pages can opt out if needed
