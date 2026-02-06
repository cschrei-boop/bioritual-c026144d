

# Fix: Bebas Neue Not Rendering on Hero Headline

## The Problem

There is a global CSS rule in `src/index.css` (lines 106-108) that forces all `h1`, `h2`, `h3` tags to use **Playfair Display**:

```css
h1, h2, h3 {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 500;
}
```

This overrides the Tailwind `font-display` class on the Hero `<h1>`, so **Bebas Neue never actually renders** -- the browser always falls back to Playfair Display.

## The Fix

### 1. Update `src/index.css` (lines 106-109)

Remove `font-family` from the global heading rule so Tailwind utility classes can control the font per-component. Keep only `font-weight`:

```css
h1, h2, h3 {
  font-weight: 500;
}
```

### 2. Add `font-serif` to headings that should stay Playfair Display

Most section headings currently rely on the global rule to get Playfair Display. After removing it, they need `font-serif` added explicitly. The affected components are:

- `FounderQuote.tsx` -- main quote heading
- `FeaturedCollection.tsx` -- section title
- `ThreePillarsCarousel.tsx` -- section title
- `ValueProps.tsx` -- section title
- `PressQuotes.tsx` -- section title
- `Peptides.tsx` -- section title
- `BuiltFor.tsx` -- section title
- `Problem.tsx` -- section title
- `ShopByGoal.tsx` -- section title
- `FinalCTA.tsx` -- section title
- `StartHereSection.tsx` -- section title
- `Categories.tsx` -- section title
- `WhyNinetyDays.tsx` -- section title
- `ChooseYourPath.tsx` -- section title
- `NotSureBlock.tsx` -- section title
- Blog and product templates -- article headings

Each heading `<h2>` or `<h3>` in those files gets `font-serif` added to its className.

### 3. Hero stays as-is

The Hero `<h1>` already has `font-display` which maps to Bebas Neue -- once the global override is removed, it will render correctly.

## Result

- Hero headline renders in **Bebas Neue** (tall, condensed, all-caps)
- All other section headings keep **Playfair Display** via explicit `font-serif`
- No visual change anywhere except the Hero, which finally gets the intended font

