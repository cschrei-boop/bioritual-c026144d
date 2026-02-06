

# Tighten Line Spacing and Paragraph Spacing in the Manifesto Block

## What Changes

All spacing adjustments are in **one file**: `src/pages/LandingPage.tsx`, within the manifesto JSX block (lines 43-79).

### Zone 1 -- Qualifying List

| Element | Current | New |
|---------|---------|-----|
| Intro label bottom margin | `mb-6` | `mb-4` |
| "This is for you if:" bottom margin | `mb-6` | `mb-4` |
| Bullet list vertical spacing | `space-y-3` | `space-y-2` |
| Bullet list bottom margin | `mb-10` | `mb-8` |
| Bullet item line-height | `leading-relaxed` (1.625) | `leading-normal` (1.5) |

### Zone 2 -- Divider

| Element | Current | New |
|---------|---------|-----|
| Divider vertical margin | `my-10` | `my-8` |

### Zone 3 -- Manifesto Closer

| Element | Current | New |
|---------|---------|-----|
| Lines container spacing | `space-y-1` | `space-y-0` (Bebas Neue already has tight metrics; removing inter-line gaps makes the paired couplets read as cohesive blocks) |
| Pair gap (after lines 2 and 4) | `mb-6` | `mb-4` |

## Result

The block will feel noticeably more compact and editorially tight, consistent with the site's existing spacing guidelines (body line-height 1.45, `leading-normal`, reduced `space-y` values). No font sizes or font families change.

