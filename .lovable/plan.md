

# Better Presentation: "This Is For You If" Manifesto Block

## The Problem

Right now, this entire block is crammed into a single `<blockquote>` styled in Playfair Display italic at ~32px. Everything -- the intro, the qualifying bullets, and the closing manifesto punch lines -- looks exactly the same. The result: the most powerful lines on the page ("You are not anti-science. You are anti-nonsense.") have zero visual weight. They get lost in a wall of identical serif text.

## The Solution: Three Visual Zones

Break this content into three typographically distinct zones within the same section:

```text
+--------------------------------------------------+
|                                                  |
|  LET'S BE SPECIFIC.            (small label)     |
|                                                  |
|  This is for you if:           (intro line)      |
|                                                  |
|  - You've had at least one...  (bullet list,     |
|  - Your body doesn't respond...  left-aligned,   |
|  - You're skeptical of...        body font)      |
|  - You listen to podcasts...                     |
|  - You've tried "just be...                      |
|                                                  |
|  ─────────────────────         (thin divider)    |
|                                                  |
|  YOU ARE NOT ANTI-SCIENCE.     (BEBAS NEUE,      |
|  YOU ARE ANTI-NONSENSE.         large, bold,     |
|                                  display type)   |
|  YOU DON'T WANT A MIRACLE.                       |
|  YOU WANT TO STOP MAKING       (these are the    |
|  AVOIDABLE MISTAKES.            lines that hit)  |
|                                                  |
+--------------------------------------------------+
```

**Zone 1 -- Qualifying list**: Left-aligned, Inter (body font), normal weight, comfortable spacing. Feels like a conversation, not a headline. Each bullet gets breathing room.

**Zone 2 -- Divider**: A thin horizontal rule or generous whitespace to create a visual pause before the payoff.

**Zone 3 -- Manifesto closer**: Bebas Neue, large (3xl-5xl), uppercase, centered. These lines become the emotional anchor of the entire page. The contrast/antithesis structure ("not anti-science / anti-nonsense", "don't want a miracle / want to stop making avoidable mistakes") gets the typographic weight it deserves.

## Technical Approach

### 1. Add `children` prop to FounderQuote component

Update `src/components/sections/FounderQuote.tsx` to accept an optional `children` prop. When `children` is provided, render the children instead of the default blockquote. This keeps the component backward-compatible for all other landing pages.

### 2. Update landing page config for millennial variant

In `src/data/landing-pages.ts`, restructure the millennial `founderQuote` data into separate fields:
- `introLabel`: "Let's be specific."
- `qualifiers`: Array of the 5 bullet strings
- `manifestoLines`: Array of the closing statement pairs

### 3. Render custom JSX in LandingPage for millennial

In `src/pages/LandingPage.tsx`, when the millennial variant is detected (or when structured manifesto data exists in config), pass custom JSX as children to `FounderQuote`:

- **Zone 1**: `<p>` with small tracking label for "Let's be specific.", followed by "This is for you if:" as an intro, then `<ul>` with styled list items in Inter
- **Zone 2**: `<hr>` or `<div>` spacer with a subtle border
- **Zone 3**: `<h2>`-level lines in Bebas Neue via the global heading rule, large size, uppercase, centered

### 4. No changes to other landing pages

All other landing page variants (busy-professionals, athletes, beginners, etc.) continue using the default `quote` string prop and render identically to how they do now.

## Files Changed

| File | Change |
|------|--------|
| `src/components/sections/FounderQuote.tsx` | Add optional `children` prop; render children when provided instead of default blockquote |
| `src/data/landing-pages.ts` | Add structured manifesto fields to millennial config (`introLabel`, `qualifiers`, `manifestoLines`) |
| `src/pages/LandingPage.tsx` | Conditionally render custom manifesto JSX as FounderQuote children for millennial variant |

