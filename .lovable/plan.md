

# Redesign Plan: Jones Road Clean Aesthetic for BioRitual

## Overview

This plan transforms the current BioRitual landing page to match the clean, minimal, editorial aesthetic of Jones Road Beauty. The key design principles we're adopting:

- **Pure white background** — No more iridescent background image
- **Full-bleed hero images** — Large, edge-to-edge photography
- **Minimal color palette** — Mostly black, white, and subtle accents
- **Clean typography** — Simple sans-serif, generous whitespace
- **No glassmorphism** — Remove frosted glass effects, use solid backgrounds
- **Editorial layout** — Magazine-style sections with breathing room
- **Horizontal product/feature grids** — Clean card layouts

---

## Section-by-Section Redesign

### 1. Header (Simplified)
**Current:** Navy frosted glass with logo + Contact button
**New Design:**
- Thin announcement bar at the very top (optional, for promos/news)
- Clean white header with black logo text
- Simple navigation: Shop All | Protocols | Coaching | About
- Right side: Search icon, Account icon, Contact

### 2. Hero Section (Full-Bleed)
**Current:** Glassmorphic card with text + portrait image inside
**New Design:**
- Full-viewport hero with edge-to-edge background image
- Left-aligned text overlay on the image:
  - Small tagline above headline
  - Large serif headline: "Tell me how you really feel"
  - Brief supporting copy
  - Single "Shop Now" / "Get Started" button (black, rectangular)
- Image extends to all edges (no rounded corners, no card container)

### 3. Featured Products/Services Row
**Current:** Spread across multiple sections (Services, Categories)
**New Design:**
- Clean heading: "FEATURED SERVICES" with "SEE ALL" link
- Horizontal scroll or 4-column grid of service cards:
  - Clean white cards with subtle border
  - Small image/icon at top
  - Service name in bold
  - Brief description
  - Price/duration badge
- Minimal hover effect (subtle shadow)

### 4. Social Proof / Press Section
**Current:** Not present
**New Design (Jones Road style):**
- Horizontal row of testimonial quotes from press/clients
- Logos of publications/certifications below
- Subtle gray background to differentiate

### 5. Shop by Category (Three Pillars)
**Current:** Vertical stack with glassmorphic cards, large colored titles
**New Design:**
- Heading: "Shop by Focus Area"
- 3-column grid with large square images
- Overlay text at bottom of each image:
  - "FUEL" | "SIGNALS" | "MOVEMENT"
- Clean hover effect (slight zoom on image)

### 6. Featured Quote / Founder Section
**Current:** Scattered quotes throughout
**New Design:**
- Full-width section with centered quote
- Founder name and title below
- Optional small portrait image
- Clean typography, generous whitespace

### 7. Peptides Section (Educational)
**Current:** Two-column with applications grid
**New Design:**
- Left: Large image (DNA illustration or clean product shot)
- Right: Clean text content:
  - Small label: "PEPTIDES"
  - Headline: "Biology's Native Language"
  - Body copy
  - "Learn More" link
- No background effects, just clean white

### 8. Why 90 Days (Timeline)
**Current:** Centered card with timeline illustration
**New Design:**
- Horizontal 3-step process:
  - Step 1: Adapt (with icon)
  - Step 2: Regulate (with icon)
  - Step 3: Reveal (with icon)
- Clean lines connecting the steps
- Minimal, no background colors

### 9. Built For Section
**Current:** Card with illustration and feature tags
**New Design:**
- Two-column layout:
  - Left: Image of professional/lifestyle
  - Right: "Built for How You Actually Work"
  - Bullet points as clean text list
  - "Get Started" button

### 10. Final CTA
**Current:** Centered card with gradient B icon
**New Design:**
- Full-width clean section
- Large headline centered
- Single prominent CTA button
- Minimal, black on white

### 11. Footer
**Current:** Glassmorphic card with links
**New Design:**
- Clean multi-column footer:
  - Column 1: Logo + tagline
  - Column 2: Quick links
  - Column 3: Contact info
  - Column 4: Newsletter signup
- Bottom bar with copyright and legal links
- Black or dark gray background with white text

### 12. Sticky Email Footer
**Current:** Navy glassmorphic bar
**New Design:**
- Clean white bar with subtle top shadow
- Black text: "Get the latest signals"
- White input with black border
- Black "Subscribe" button

---

## Color & Typography Changes

### Colors
```
Background: Pure white (#FFFFFF)
Text: Black/Charcoal (#1a1a1a)
Accent: Keep subtle CMY for brand identity, but muted
Borders: Light gray (#e5e5e5)
```

### Typography
- **Headings:** Keep Playfair Display serif, but larger and bolder
- **Body:** Inter, slightly larger (16px base)
- **All Caps Labels:** Smaller, wider letter-spacing

---

## Technical Changes

### Files to Modify

1. **src/index.css** — Update CSS variables for white background, darker text
2. **src/pages/Index.tsx** — Remove ImageBackground component
3. **src/components/sections/Header.tsx** — White header, simplified nav
4. **src/components/sections/Hero.tsx** — Full-bleed layout, remove glassmorphism
5. **src/components/sections/Problem.tsx** — Clean white layout
6. **src/components/sections/ThreeLegs.tsx** — Image grid with overlays
7. **src/components/sections/Peptides.tsx** — Two-column clean layout
8. **src/components/sections/Categories.tsx** — Horizontal pill row or remove
9. **src/components/sections/Services.tsx** — Clean product grid
10. **src/components/sections/WhyNinetyDays.tsx** — Horizontal steps
11. **src/components/sections/BuiltFor.tsx** — Two-column layout
12. **src/components/sections/FinalCTA.tsx** — Minimal black/white CTA
13. **src/components/sections/Footer.tsx** — Multi-column dark footer
14. **src/components/sections/StickyEmailFooter.tsx** — White minimal bar

### Components to Remove
- `ImageBackground.tsx` usage in Index.tsx
- All `backdrop-blur-md` and `bg-background/70` glassmorphism classes
- Gradient color effects (keep as subtle accents only)

### New Assets Needed
- High-quality lifestyle/hero photography (you may need to provide these)
- Clean product/service icons or illustrations

---

## Estimated Scope

This is a significant visual overhaul affecting 12+ files. The structure and content remain the same, but the visual treatment changes completely.

**Recommendation:** Implement in phases:
1. Phase 1: Global styles + Header + Hero (biggest visual impact)
2. Phase 2: Main content sections
3. Phase 3: Footer + Final CTA + Sticky bar

