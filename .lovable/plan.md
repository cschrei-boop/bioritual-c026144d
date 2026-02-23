

# BioRitual Handoff Document Implementation Plan

This document specifies a comprehensive site-wide update covering new pages, updated copy, new components, retired elements, and navigation changes. All copy marked VERBATIM will be implemented exactly as written.

---

## Summary of Changes

The handoff touches **every major page** on the site. Here is the full scope:

### Global Changes
- **Navigation**: Add "How It Works" and "The Journey" links. Rename "AI Companion" to "Jesse." Rename "Guided Protocols by Goal" (if desired).
- **Retire "Founder-led"** from all pages.
- **Retire "Protocol Materials"** from all product pages -- replace with new What's Included blocks.
- **Retire "AI Companion" / "AI Concierge"** as visible labels -- replace with "Jesse" everywhere.
- **Jesse naming convention**: First reference on every page reads "Jesse -- your personal AI coach." Subsequent references use "Jesse" alone.

### New Pages (4)
1. **JessePage** (`/ai-concierge`) -- Full Jesse product page, replaces current ProductAIConcierge
2. **HowItWorksFull** (`/how-it-works`) -- Standalone 5-step editorial page
3. **JourneyPage** (`/the-journey`) -- Philosophical long-form editorial page
4. Routes added in App.tsx for `/how-it-works` and `/the-journey`

### New Components (6)
1. **JesseIntro.tsx** -- Homepage snippet introducing Jesse
2. **HowItWorksCondensed.tsx** -- 4-step homepage block (repurposes WhyNinetyDays pattern)
3. **JourneySnippet.tsx** -- Philosophy snippet for homepage
4. **HowWeWork.tsx** -- Reusable 5-step block for all 6 protocol pages
5. **ProtocolGrid.tsx** -- 6-card protocol grid replacing ShopByGoal on homepage
6. **CoachingCallout.tsx** -- Bottom-of-page CTA for protocol pages and How It Works

### Updated Pages (6)
1. **Homepage (Index.tsx)** -- Complete section reorder and copy update
2. **Start Here** -- Full copy rewrite with new three-path cards
3. **Coaching** -- Full copy rewrite
4. **About** -- Expanded to 7 sections with new Jesse/Luis/storytelling content
5. **AI Concierge** -- Becomes Jesse page (new component replaces old)
6. **All 6 Protocol pages** -- New descriptions, HowWeWork block, updated What's Included

### Updated Components (5)
1. **Hero.tsx** -- Support dual CTA buttons
2. **FounderQuote.tsx** -- Updated qualifier list (6th item added)
3. **FinalCTA.tsx** -- Support body text and multiple CTAs
4. **ArticleCarousel.tsx** -- Headline changed to "From the archive"
5. **ThreePillarsCarousel.tsx** -- Condensed copy, add CTA link

### Retired Elements
- **ValueProps.tsx** removed from homepage
- **ShopByGoal** replaced by ProtocolGrid on homepage
- **"Protocol Materials"** sections removed from all protocol content
- Single "Start with clarity" CTA replaced with dual-button treatment
- Blog headline "All You Wanted to Know About Biohacking" replaced

---

## Detailed Implementation Steps

### Phase 1: Global + Navigation

**Header.tsx**
- Rename `"AI Companion"` to `"Jesse"` in navLinks
- Add `{ label: "How It Works", href: "/how-it-works" }` to navLinks
- Add `{ label: "The Journey", href: "/the-journey" }` to navLinks
- Remove "Founder-led" if present anywhere in nav labels

### Phase 2: New Reusable Components

**src/components/sections/HowWeWork.tsx** (new)
- 5 numbered steps, verbatim copy from document
- Clean left-aligned layout, generous spacing
- Reusable across all 6 protocol pages

**src/components/sections/CoachingCallout.tsx** (new)
- "What about the Coaching Sprint?" headline
- Verbatim body copy
- CTA linking to `/coaching`
- Used on all protocol pages and How It Works page

**src/components/sections/ProtocolGrid.tsx** (new)
- Section headline: "Six protocols. One framework."
- 6 cards in 3x2 grid (desktop), responsive
- Each card: image, uppercase title, one-line description, "Learn more" CTA
- Links to each protocol product page
- Section CTA: "See all protocols" linking to `/collection/protocols`

**src/components/sections/JesseIntro.tsx** (new)
- Light background panel
- Headline: "Meet Jesse. Your BS filter for the wellness industry."
- Verbatim body copy from document
- CTA: "Meet Jesse" linking to `/ai-concierge`

**src/components/sections/HowItWorksCondensed.tsx** (new)
- 4 numbered steps with verbatim copy
- Subhead included
- CTA: "How it works in full" linking to `/how-it-works`

**src/components/sections/JourneySnippet.tsx** (new)
- Headline: "The way you live is the story you are telling."
- 3 paragraphs of verbatim body copy
- CTA: "Read more about our approach" linking to `/the-journey`

### Phase 3: Updated Existing Components

**Hero.tsx**
- Add support for a second CTA button (secondary text-link style)
- Props: `ctaText2`, `ctaLink2`

**FounderQuote.tsx / Index.tsx**
- Add 6th qualifier: "You suspect the story you're telling about your health isn't the one you actually want to be living."
- Update 3rd qualifier to add "in equal measure" at end

**FinalCTA.tsx**
- Extend to support `body` text prop and multiple CTA buttons (array of `{text, href}`)
- Homepage usage: headline + subhead + body paragraph + 3 CTAs

**ArticleCarousel.tsx**
- Change headline from "Blog: All You Wanted to Know About Biohacking" to "From the archive"
- Add subhead: "No heroes. No villains. Just useful thinking."
- Update "All Articles" link text to "See all articles"

**ThreePillarsCarousel.tsx**
- Update to condensed copy per document
- Add CTA: "Read: The truth about peptides" linking to `/truth-about-peptides`

### Phase 4: Homepage Rebuild (Index.tsx)

New section order (fixed, per document):
1. **Hero** -- existing copy, dual CTAs: "See how it works" + "Talk to Jesse -- your personal AI coach"
2. **Qualifier** (FounderQuote) -- updated list with 6 items + manifesto
3. **JourneySnippet** -- new component
4. **HowItWorksCondensed** -- new component
5. **JesseIntro** -- new component
6. **ProtocolGrid** -- new component (replaces both ShopByGoal instances)
7. **Peptides Note** (ThreePillarsCarousel) -- condensed
8. **Blog Carousel** (ArticleCarousel) -- updated headline
9. **FinalCTA** -- updated with body text + 3 CTAs

Removed from homepage: ValueProps, ShopByGoal (both instances), FeaturedCollection, StartHereSection

### Phase 5: New Pages

**src/pages/JessePage.tsx** (`/ai-concierge`)
- Replaces ProductAIConcierge entirely
- Editorial page (not product template): Hero, What Jesse Is, What Jesse Does (features list), Where Jesse Lives, What Jesse Is Not, Who Jesse Is For, CTA
- All copy verbatim from document

**src/pages/HowItWorks.tsx** (`/how-it-works`)
- 5-step editorial page with large number anchors
- Hero + 5 steps + "A note on Jesse" + CoachingCallout + Final CTA (dual buttons)
- All copy verbatim

**src/pages/JourneyPage.tsx** (`/the-journey`)
- Most philosophical page -- slower typography, more white space
- Sections: Hero, The Premise, The Hero's Journey, Home, Cost-Reward Analysis, The Long View, What Better Looks Like, How BioRitual Fits, Final CTA
- All copy verbatim
- Pull quotes rendered large between sections

### Phase 6: Updated Pages

**StartHere.tsx**
- Full rewrite with new hero, three-path cards (Jesse / Protocols / Coaching Sprint)
- NotSureBlock with updated copy
- "How it all connects" editorial section
- All copy verbatim

**ProductCoaching.tsx**
- Full rewrite: editorial hero, What This Is, What's Included, Who It's For, A Direct Note, CTA ("Apply for the Coaching Sprint")
- Secondary CTAs: Talk to Jesse, See Protocols
- All copy verbatim

**About.tsx**
- Expand from single narrative to 7 distinct sections with dividers
- Add Jesse/anchor section (Section 3), storytelling layer (Section 4), Luis section (Section 5), What We Built (Section 6)
- Updated closing (Section 7)
- 3 CTAs at bottom
- All copy verbatim

### Phase 7: Protocol Pages

**src/data/protocol-content.tsx**
- Replace all 6 protocol descriptions with verbatim copy from document
- Replace all whatsIncluded arrays with new Universal block
- Add DEXA block to Weight Loss and Performance protocols only
- Replace all whoIsFor arrays with verbatim copy
- Remove all "Protocol Materials" sections
- Remove all "educational and lifestyle optimization protocol" disclaimer paragraphs (replaced by new copy)

Each protocol product page will also render:
- **HowWeWork** component (between description and Who It's For)
- **CoachingCallout** component (at bottom)

This requires updating ProductPageTemplate.tsx to accept optional `showHowWeWork` and `showCoachingCallout` props.

### Phase 8: App.tsx Routes

Add:
```
<Route path="/how-it-works" element={<HowItWorks />} />
<Route path="/the-journey" element={<JourneyPage />} />
```

### Phase 9: Landing Pages

- Update `src/data/landing-pages.ts` to remove "Founder-led" from any landing page configs
- Update StartHereSection default cards to use "Jesse" instead of "AI Concierge"

---

## Files Created (10)
- `src/components/sections/HowWeWork.tsx`
- `src/components/sections/CoachingCallout.tsx`
- `src/components/sections/ProtocolGrid.tsx`
- `src/components/sections/JesseIntro.tsx`
- `src/components/sections/HowItWorksCondensed.tsx`
- `src/components/sections/JourneySnippet.tsx`
- `src/pages/JessePage.tsx`
- `src/pages/HowItWorks.tsx`
- `src/pages/JourneyPage.tsx`
- (StartHere.tsx, ProductCoaching.tsx, About.tsx are rewrites of existing files)

## Files Modified (~15)
- `src/App.tsx` (routes)
- `src/pages/Index.tsx` (homepage rebuild)
- `src/pages/StartHere.tsx` (full rewrite)
- `src/pages/ProductCoaching.tsx` (full rewrite)
- `src/pages/About.tsx` (expanded)
- `src/pages/ProductAIConcierge.tsx` (replaced by JessePage)
- `src/components/sections/Header.tsx` (nav updates)
- `src/components/sections/Hero.tsx` (dual CTA support)
- `src/components/sections/FinalCTA.tsx` (multi-CTA + body)
- `src/components/blog/ArticleCarousel.tsx` (headline)
- `src/components/sections/ThreePillarsCarousel.tsx` (condensed + CTA)
- `src/components/sections/StartHereSection.tsx` (card content update)
- `src/data/protocol-content.tsx` (all 6 protocols rewritten)
- `src/components/product/ProductPageTemplate.tsx` (HowWeWork + CoachingCallout slots)
- `src/data/landing-pages.ts` (retire "Founder-led", update Jesse naming)

