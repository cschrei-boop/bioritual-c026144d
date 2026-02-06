

## Refactor: Extract Myth Component into Blog Template System and Refactor GLP-1 Myths Page

### Overview
Move the `Myth` component out of `GLP1Myths.tsx` into the shared `src/components/blog/` system as a reusable component, then refactor the entire GLP-1 Myths page to use `BlogPageTemplate`, `AnimatedSection`, and the new shared component.

### New Component: `BlogQuoteBlock`

Rather than naming it "Myth" (too specific), the shared version will be called **`BlogQuoteBlock`** so it works for any article pattern that uses numbered quotes with attributions and explanations — myths, questions, facts, testimonials, etc.

**Props:**
- `number` — The item number displayed
- `quote` — The quoted text
- `attribution` — Source/attribution line
- `explanation` — The explanatory paragraph
- `labelPrefix` — Customizable label (defaults to `"Myth"`, but could be `"Fact"`, `"Question"`, etc.)

The component keeps its own scroll-triggered animation with the tighter `-50px` margin, matching the current behavior.

**File:** `src/components/blog/BlogQuoteBlock.tsx`

### Updated Barrel Export

**File:** `src/components/blog/index.ts`  
Add `BlogQuoteBlock` to the exports.

### Refactored GLP-1 Myths Page

**File:** `src/pages/GLP1Myths.tsx`

Changes:
- Remove all boilerplate imports (`Helmet`, `Header`, `Footer`, `VideoHero`, `motion`, `useInView`, `useRef`)
- Remove the local `Section` and `Myth` components entirely
- Import `BlogPageTemplate`, `AnimatedSection`, and `BlogQuoteBlock` from `@/components/blog`
- Pass SEO config (title, description, canonicalUrl, structuredData) to `BlogPageTemplate`
- Pass hero config as `type: "video"` with tagline, title, subtitle, description, and the CTA button
- Pass CTA config for the dark "Signals. Not shortcuts." section
- Wrap intro and conclusion content in `AnimatedSection`
- Render myths using `BlogQuoteBlock` with `labelPrefix="Myth"`

### Technical Details

```
src/components/blog/
  BlogQuoteBlock.tsx   <-- NEW (extracted + generalized)
  index.ts             <-- UPDATED (add export)

src/pages/
  GLP1Myths.tsx        <-- REFACTORED (use template + shared components)
```

### Result
- GLP-1 Myths page drops from ~290 lines to ~180 lines
- No visual or behavioral changes
- Future articles can reuse `BlogQuoteBlock` for any numbered-quote pattern with a custom label prefix
