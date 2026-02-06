

# Fix: Google Fonts Not Loading (including Bebas Neue)

## Root Cause

The `@import url(...)` for Google Fonts on line 5 of `src/index.css` is placed **after** the `@tailwind base/components/utilities` directives (lines 1-3). Per CSS spec, `@import` must appear before all other rules. The Tailwind directives expand into CSS output during build, which causes the `@import` to be silently ignored. This means **none** of the three fonts (Bebas Neue, Inter, Playfair Display) are actually loading from Google Fonts -- the browser uses generic fallbacks for everything.

## The Fix (2 changes)

### 1. Add Google Fonts `<link>` tag in `index.html`

Move font loading out of CSS entirely and into the HTML `<head>`. This is the most reliable approach -- the browser starts downloading fonts immediately, before any CSS is parsed.

Add these two lines inside `<head>` in `index.html`:
- A `preconnect` link to Google Fonts for faster loading
- The Google Fonts stylesheet `<link>` (same families and weights currently in the `@import`)

### 2. Remove the `@import url(...)` from `src/index.css`

Delete line 5 from `src/index.css` (the `@import url('https://fonts.googleapis.com/css2?...')`) since fonts will now load from the HTML `<link>` tag.

## Result

- **Bebas Neue** will properly load and render on all `h1`, `h2`, `h3` headings (via the existing global CSS rule)
- **Inter** and **Playfair Display** will also load correctly for body text and serif elements
- Font loading is faster and more reliable since the browser starts fetching fonts before CSS is parsed

