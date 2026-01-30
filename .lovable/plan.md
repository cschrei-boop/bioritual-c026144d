
# The Truth About Peptides - Landing Page Implementation

## Overview
Transform the "Meet The Peptide Collection" homepage section into "The Truth About Peptides" and create a dedicated article landing page. The homepage block and landing page hero will share the same image for visual continuity.

## Changes Summary

### 1. Update Homepage Section
**File:** `src/components/sections/FeaturedCollection.tsx`

- Change title from "Meet The Peptide Collection" to "The Truth About Peptides"
- Update description text to match article context (e.g., "Peptides are everywhere in longevity conversations—but clarity is rare. Here's what they actually are, how they work, and what you should know.")
- Change button text from "Learn More" to "Read Article"
- Update link destination from `/protocols` to `/truth-about-peptides`

### 2. Create New Landing Page
**File:** `src/pages/TruthAboutPeptides.tsx`

Structure following the existing editorial pattern:

```text
┌────────────────────────────────────────────────┐
│  HEADER (shared navigation)                    │
├────────────────────────────────────────────────┤
│                                                │
│  HERO SECTION                                  │
│  - Uses same featured-collection.jpg image    │
│  - Title: "The Truth About Peptides"          │
│  - Subtitle with educational context          │
│                                                │
├────────────────────────────────────────────────┤
│                                                │
│  ARTICLE CONTENT                               │
│  (Placeholder sections awaiting your content) │
│                                                │
├────────────────────────────────────────────────┤
│  FOOTER                                        │
└────────────────────────────────────────────────┘
```

Hero styling will match `WeightLossLanding.tsx`:
- Full-width header image with gradient overlay
- Minimum height of 70vh
- Animated title and subtitle

### 3. Add Route
**File:** `src/App.tsx`

Add new route: `/truth-about-peptides` → `TruthAboutPeptides`

## Image Linkage
Both the homepage "article block" and the landing page hero will use:
- **Image path:** `src/assets/featured-collection.jpg`

This ensures visual continuity when users click through from the homepage.

## Technical Details

### Page Template Structure
The new page will include:
- SEO meta tags via `react-helmet-async`
- Motion animations consistent with other landing pages
- Reusable `Section` component for animated content blocks
- Shared Header and Footer components
- Placeholder article sections that you can populate with your content

### Files Modified
| File | Action |
|------|--------|
| `src/components/sections/FeaturedCollection.tsx` | Edit title, description, link |
| `src/pages/TruthAboutPeptides.tsx` | Create new page |
| `src/App.tsx` | Add route |

## Next Steps After Implementation
Once this structure is in place, you can share the article content and I'll populate the landing page with:
- Article sections with proper headings
- Educational content blocks
- Internal links to protocols/services
- FAQ section if needed
- Call-to-action sections
