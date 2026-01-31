
# GLP-1 and Retratutide Educational Landing Page

## Summary
Create a new educational article page at `/glp-1-retratutide-guide` using the existing landing page template established in `TruthAboutPeptides.tsx` and `WeightLossLanding.tsx`. This page will serve as an ad destination for GLP-1/retratutide traffic, educating visitors on these concepts while positioning BioRitual's systems-based philosophy.

---

## Page Details

**Route**: `/glp-1-retratutide-guide`
**Page Component**: `src/pages/GLP1RetratutideGuide.tsx`

---

## Technical Implementation

### Files to Create
1. `src/pages/GLP1RetratutideGuide.tsx` - The main page component

### Files to Modify
1. `src/App.tsx` - Add route for the new page
2. `public/sitemap.xml` - Add new URL for SEO

---

## Page Structure (Following Existing Template Pattern)

### 1. Hero Section
- **Headline**: "The Truth About GLP-1s, Retratutide, and Modern Biohacking"
- **Subheadline**: "Why weight loss works best when you treat biology as a system - not a shortcut."
- **Visual**: Full-width hero using `protocol-weight-loss-hero.jpg` (existing asset, metabolic/human-focused)
- **No buttons** in hero (as specified)
- **Label text**: "Education - Science - Clarity" (matching existing pattern)

### 2. Introduction (Text-Only Section)
Short paragraphs explaining:
- GLP-1s have changed weight loss conversations
- They reduce appetite and food noise
- But they are signals, not solutions
- Neutral, authoritative tone
- No CTAs

### 3. Section: "What GLP-1s Actually Do"
- Header with explanation of mechanism
- Bullet list covering:
  - Appetite regulation
  - Insulin signaling
  - Energy balance
  - Amplification of natural signals
- Optional inline image using `pillar-signals.jpg`

### 4. Section: "Why GLP-1s Alone Are Incomplete"
- Alternating background (`bg-muted/30`)
- Explain common issues in isolation:
  - Muscle loss
  - Fatigue
  - Metabolic slowdown
  - Difficult transitions off
- Emphasis on lack of system support
- No fear-based language - factual and educational

### 5. Section: "Where Retratutide Changes the Landscape"
- Explain multi-pathway signaling at high level
- Position as "more information entering the system"
- Avoid dosage, sourcing, or procurement language
- Educational framing only

### 6. Section: "Our Philosophy: Bio Signals" (Key Positioning)
- Visual breathing room (generous padding)
- Clearly state:
  - We do not believe in one-molecule solutions
  - Peptides are tools, not overrides
  - Frameworks matter more than compounds
- Reinforce peptides + supplements + nutrition as a system
- Use inverted color scheme (`bg-foreground text-background`) for emphasis

### 7. Section: "Why Frameworks Matter"
- Explain difference between:
  - Taking a compound
  - Following a structured framework
- Mention array of peptides and supplements without specific products
- Emphasize integration and sequencing

### 8. Soft CTA Section (Three Options)
- Use existing card pattern from WeightLossLanding.tsx
- Three options as cards (not aggressive buttons):

**Option 1**: "Learn with the AI Concierge"
- Educational, self-guided
- Links to `/ai-concierge`

**Option 2**: "Explore Weight-Loss Frameworks"
- Structured, goal-specific
- Links to `/protocols`

**Option 3**: "Start with the Coaching Sprint"
- Founder-led guidance
- Links to `/coaching`

- Invitational tone, not urgent

---

## Component Structure

```text
GLP1RetratutideGuide.tsx
+-- Helmet (SEO meta tags, structured data)
+-- Header
+-- main
    +-- Hero Section (full-width image, headline, subheadline)
    +-- Introduction Section (text-only)
    +-- "What GLP-1s Actually Do" Section
    +-- "Why GLP-1s Alone Are Incomplete" Section (bg-muted/30)
    +-- "Where Retratutide Changes the Landscape" Section
    +-- "Our Philosophy: Bio Signals" Section (bg-foreground text-background)
    +-- "Why Frameworks Matter" Section
    +-- Soft CTA Section (three cards)
+-- Footer
```

---

## Design Specifications

### Typography (Matching Existing)
- Headlines: `font-serif text-3xl md:text-4xl`
- Body text: `text-muted-foreground leading-relaxed`
- Section labels: `text-xs tracking-[0.3em] uppercase`

### Spacing (Matching Existing)
- Standard sections: `py-16 md:py-24 px-6 md:px-12`
- Max content width: `max-w-4xl mx-auto`

### Animation (Matching Existing)
- Reusable `Section` component with framer-motion
- `useInView` for scroll-triggered animations
- `initial={{ opacity: 0, y: 30 }}` pattern

### Visual Styling
- Alternating backgrounds: transparent / `bg-muted/30`
- Bullet lists: `w-6 h-px bg-foreground` dash pattern
- Key section: inverted colors `bg-foreground text-background`

---

## Image Usage

| Section | Image Asset |
|---------|-------------|
| Hero | `protocol-weight-loss-hero.jpg` |
| What GLP-1s Do (optional) | `pillar-signals.jpg` |

---

## SEO Implementation

### Meta Tags
- Title: "Understanding GLP-1s and Retratutide | Bio Signals Education"
- Description: "An educational guide to GLP-1 compounds, retratutide, and why sustainable weight loss requires a systems-based approach. No medical advice or prescriptions."
- Canonical URL: `https://bioritual.lovable.app/glp-1-retratutide-guide`

### Structured Data
- FAQPage schema for key questions
- Organization schema (matching existing pattern)

---

## Compliance Requirements

- No selling of peptides or mention of purchasing
- No medical advice language
- Everything framed as education, framework design, and guidance
- Uses compliant terminology:
  - "Frameworks" instead of "Protocols"
  - "Understanding" instead of "Optimization"
  - "Educational" instead of "Personalized"

---

## Route Configuration

Add to `src/App.tsx`:
```tsx
import GLP1RetratutideGuide from "./pages/GLP1RetratutideGuide";

// In Routes:
<Route path="/glp-1-retratutide-guide" element={<GLP1RetratutideGuide />} />
```

---

## Sitemap Update

Add to `public/sitemap.xml`:
```xml
<url>
  <loc>https://bioritual.lovable.app/glp-1-retratutide-guide</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```
