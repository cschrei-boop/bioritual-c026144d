
# Landing Page Variant System -- Updated with Hero Background Control

## Overview

Build a data-driven landing page system where each audience variant is the **exact same homepage** with only the **text and hero background swapped out**. No new visual components, no layout changes -- just a config file and a template page.

Adding a new landing page = adding one object to a config array. It goes live at `/lp/your-slug` instantly.

## What stays the same across all variants

- Section order and layout
- All images in non-hero sections (value props, featured collection, etc.)
- Header, Footer, StickyEmailFooter
- Medical disclaimer (always present in the Hero)
- All navigation and links
- Animations, styling, typography

## What changes per variant

| Section | Overridable content |
|---------|-------------------|
| **Hero** | Background (video or image), tagline, headline, body copy, CTA button text, sub-hero text |
| **Founder Quote** | Quote text, attribution |
| **Featured Collection** | Headline, description |
| **Three Pillars** | Subtitle label, heading, description lines |
| **Value Props** | Title and description for each of the 4 cards |
| **Final CTA** | Headline, description, button text |

## Hero Background: How It Works

The Hero component will support **three background modes**, controlled from the config:

| Mode | Config value | Result |
|------|-------------|--------|
| Default video | _(no background specified)_ | Uses `hero-video.mp4` -- identical to the current homepage |
| Custom image | `backgroundImage: "/assets/protocol-energy-hero.jpg"` | Full-bleed static image with the same gradient overlay |
| Custom video | `backgroundVideo: "/assets/other-video.mp4"` | Full-bleed video with the same cinematic playback |

The gradient overlay, text positioning, and animations remain identical regardless of background type. Only the media source changes.

**Available image assets that could be used as hero backgrounds today:**
- `hero-portrait.jpg`
- `bio-signals-hero.jpg`, `bio-signals-energy-hero.jpg`, `bio-signals-performance-hero.jpg`, etc.
- `protocol-energy-hero.jpg`, `protocol-cognition-hero.jpg`, `protocol-longevity-hero.jpg`, etc.
- Any new images uploaded later

## Shared Component Behavior

Since all variants use the **same** Hero component:

- **Structural changes** (gradient style, animation timing, layout) apply to all variants and the homepage -- this keeps everything visually consistent
- **Content changes** (background, text, CTA) are per-variant via props
- The homepage (`Index.tsx`) passes no props, so it always uses the current defaults

## Initial 5 Audience Variants

| Slug | Audience | Hero Headline | Background |
|------|----------|---------------|------------|
| `busy-professionals` | Time-strapped professionals | "You don't need more time. You need a better system." | Default video |
| `athletes` | Athletes / fitness enthusiasts | "Recovery is where performance begins." | `bio-signals-performance-hero.jpg` |
| `beginners` | Newcomers to wellness frameworks | "No jargon. No overwhelm. Just a clear starting point." | Default video |
| `parents-over-40` | Health-conscious parents 40+ | "Your body changed. Your framework should too." | `hero-portrait.jpg` |
| `executives` | C-suite / high-performers | "The same rigor you bring to business, applied to biology." | `bio-signals-energy-hero.jpg` |

Each variant will also have tailored text for all six overridable sections, maintaining the BioRitual educational tone and including the medical disclaimer.

## How to Add More Variants Later

1. Open `src/data/landing-pages.ts`
2. Copy an existing config object
3. Change the slug, text, and optionally the background
4. It is immediately live at `/lp/new-slug`

No new files, routes, or components needed.

---

## Technical Details

### Files Created (2 new files)

**`src/data/landing-pages.ts`**
- TypeScript type `LandingPageConfig` with all overridable fields, including:
  - `hero.backgroundImage?: string` -- path to a static image
  - `hero.backgroundVideo?: string` -- path to a video (defaults to `hero-video.mp4` if neither is set)
- Array of 5 initial configs
- `getLandingPageBySlug(slug)` helper function

**`src/pages/LandingPage.tsx`**
- Reads `:slug` from the URL using `useParams`
- Looks up config from registry
- Renders the same section lineup as `Index.tsx`: Header, Hero, FounderQuote, FeaturedCollection, ThreePillarsCarousel, ValueProps, FinalCTA, Footer, StickyEmailFooter
- Passes content + background overrides as props to each section
- Includes per-variant SEO metadata via `react-helmet-async`
- Shows 404 if slug does not match

### Files Modified (7 existing files)

**`src/App.tsx`**
- Add one route: `/lp/:slug` pointing to `LandingPage`

**`src/components/sections/Hero.tsx`**
- Add optional props: `tagline`, `headline`, `bodyParagraphs` (array of strings), `ctaText`, `ctaLink`, `subHeroLine1`, `subHeroLine2`, `backgroundImage`, `backgroundVideo`
- When `backgroundImage` is provided: render a full-bleed `<img>` instead of `<video>`
- When `backgroundVideo` is provided: use that video source instead of the default
- When neither is provided: use `hero-video.mp4` (current behavior)
- Gradient overlay remains the same in all cases
- Homepage passes no props, so it renders identically to today

**`src/components/sections/FounderQuote.tsx`**
- Add optional props: `quote`, `attribution`
- Defaults to current hardcoded text

**`src/components/sections/FeaturedCollection.tsx`**
- Add optional props: `headline`, `description`
- Defaults to current text

**`src/components/sections/ThreePillarsCarousel.tsx`**
- Add optional props: `subtitle`, `title`, `description1`, `description2`
- Defaults to current text

**`src/components/sections/ValueProps.tsx`**
- Add optional prop: `values` (array of `{ title, description }`)
- Falls back to existing hardcoded array; images remain the same regardless

**`src/components/sections/FinalCTA.tsx`**
- Add optional props: `headline`, `italicWord`, `description`, `buttonText`
- Defaults to current text

### Not Modified

- `src/pages/Index.tsx` -- homepage is completely untouched
- All styling, layout, animations -- zero visual changes
- Header, Footer, StickyEmailFooter -- used as-is
- Blog system, Shopify integration, article carousel -- unaffected
