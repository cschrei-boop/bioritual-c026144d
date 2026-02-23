

# Fix CTA Button Visibility in Hero Component

## Problem
The primary CTA button in the `Hero` component always renders, even when `ctaText` is passed as an empty string (e.g., on the How It Works page). This produces a dark button (`bg-foreground`) with no visible label, making it look like the font and background are the same color.

## Fix

**File: `src/components/sections/Hero.tsx`** (lines ~120-133)

Wrap the entire CTA `motion.div` block in a conditional so it only renders when there's actual button text to show:

- Only render the primary `<Button>` when `ctaText` is truthy (non-empty string)
- Only render the entire CTA container `motion.div` when at least one CTA has text
- The secondary link already has a guard (`ctaText2 && ctaLink2`), so it's fine

This is a one-line conditional wrap -- no styling or component changes needed.
