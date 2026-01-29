
# Redesigned "Start Here" Section

## Overview
Create a new visually compelling, highly clickable "Start Here" section as a reusable component that replaces the current hero and comparison table sections on the `/start-here` page.

## Component Architecture

### New File
**`src/components/sections/StartHereSection.tsx`** - A standalone, reusable component (~200 lines)

### Modified File
**`src/pages/StartHere.tsx`** - Replace current hero + comparison table with the new component

## Visual Structure

```
+----------------------------------------------------------+
| SECTION LABEL: "START HERE"                              |
+----------------------------------------------------------+
| HEADLINE: "Your body isn't random. It's sending signals."|
+----------------------------------------------------------+
| SUBHEAD: Bio Signals turns signals into clear protocols  |
+----------------------------------------------------------+
| MICRO-INSTRUCTION: Choose the level of support...        |
+----------------------------------------------------------+
|                                                          |
|   CONTINUUM BAR (horizontal line with 3 nodes)           |
|   ○ Learn  ────────  ○ Focus  ────────  ○ Guided         |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   |
|  │  💬 Icon     │  │  ✓ Icon      │  │  🧭 Icon     │   |
|  │              │  │              │  │              │   |
|  │ AI Concierge │  │  Protocols   │  │  Coaching    │   |
|  │              │  │              │  │    Sprint    │   |
|  │ Learn &      │  │ One goal,    │  │ Full         │   |
|  │ understand   │  │ structured   │  │ guidance     │   |
|  │              │  │ plan         │  │              │   |
|  │ Explore...   │  │ 3-month...   │  │ Founder-led  │   |
|  │              │  │              │  │              │   |
|  │ Best if:...  │  │ Best if:...  │  │ Best if:...  │   |
|  │              │  │              │  │              │   |
|  │ [CTA →]      │  │ [CTA →]      │  │ [CTA →]      │   |
|  └──────────────┘  └──────────────┘  └──────────────┘   |
|                                                          |
|  WAVEFORM ACCENT (subtle SVG background)                 |
|                                                          |
+----------------------------------------------------------+
| FOOTER: "No 'best' option—just the right one..."         |
+----------------------------------------------------------+
```

## Technical Implementation

### 1. Card Data Structure
```typescript
interface StartHereCard {
  id: string;
  title: string;
  tagline: string;
  body: string;
  bestIf: string;
  ctaLabel: string;
  href: string;
  icon: LucideIcon;
}
```

### 2. Continuum Navigation
- Horizontal line with 3 clickable nodes
- Click scrolls/focuses the relevant card
- Nodes linked to Learn/Focus/Guided terminology
- Visual indicator showing progression

### 3. Full-Card Clickability
- Entire card wrapped in `<Link>` component
- Button styled inside but navigation handled by card wrapper
- Proper `tabIndex` and `aria-label` for accessibility

### 4. Hover/Focus States
- Card: `transform: translateY(-4px)` + subtle shadow
- CTA label: underline animation
- Focus: visible ring (outline-2 outline-offset-2)

### 5. Signal Motif (SVG Background)
- Subtle sine wave pattern behind cards
- Very low opacity (~5-8%)
- Positioned absolute, non-interactive

### 6. Icons (Lucide)
- AI Concierge: `MessageSquare` or `Sparkles`
- Protocols: `ClipboardList` or `Route`
- Coaching: `Compass` or `HandHelping`

### 7. Animations (Framer Motion)
- Section entrance: `fadeInUp` with staggered children
- Cards: `whileInView` trigger
- Hover: `whileHover={{ y: -4, boxShadow: "..." }}`

## Content Mapping (Exact Copy)

| Card | Title | Tagline | Body | Best If | CTA | Link |
|------|-------|---------|------|---------|-----|------|
| 1 | AI Concierge | Learn & understand | Explore peptides + supplements in plain language. | "I want to understand this before acting." | Learn with the AI Concierge → | /ai-concierge |
| 2 | Bio Signals Protocols | One goal, structured plan | 3-month systems for a specific priority... | "I know what I want to work on." | Explore Protocols → | /protocols |
| 3 | 3-Month Coaching Sprint | Full guidance & orientation | Founder-led, weekly sessions to build BioRitual... | "I don't know where to start." | See the Coaching Sprint → | /coaching |

## Responsive Behavior

### Desktop (lg+)
- 3-column grid: `grid-cols-3`
- Continuum bar visible
- Cards side-by-side

### Tablet (md)
- 3-column grid maintained
- Reduced padding

### Mobile (sm)
- Single column: stacked cards
- Continuum bar simplified or hidden
- Full-width cards with preserved hierarchy

## Accessibility Checklist
- Proper heading hierarchy (h2, h3)
- ARIA labels on card links
- Keyboard-navigable (tab order)
- High contrast text (foreground/80 minimum)
- Focus-visible rings
- Screen reader friendly CTA text

## Files Summary

| Action | File | Changes |
|--------|------|---------|
| CREATE | `src/components/sections/StartHereSection.tsx` | New reusable component |
| MODIFY | `src/pages/StartHere.tsx` | Replace hero/table with new component, keep detail sections below |
