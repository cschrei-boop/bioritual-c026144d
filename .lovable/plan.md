

# Add TM Symbol to All Mentions of Jesse

## Scope

447 occurrences of "Jesse" across 21 files need the trademark symbol (™) appended, becoming "Jesse™" everywhere it appears as a name reference.

## Files to Update (21)

| File | Approx Mentions |
|------|----------------|
| `src/pages/JessePage.tsx` | ~30 |
| `src/pages/StartHere.tsx` | ~12 |
| `src/pages/ProductCoaching.tsx` | ~8 |
| `src/pages/JourneyPage.tsx` | ~4 |
| `src/pages/HowItWorks.tsx` | ~4 |
| `src/pages/About.tsx` | ~3 |
| `src/pages/Index.tsx` | ~2 |
| `src/pages/WeightLossLanding.tsx` | ~3 |
| `src/pages/GLP1Myths.tsx` | ~2 |
| `src/pages/GLP1RetratutideGuide.tsx` | ~2 |
| `src/components/sections/JesseIntro.tsx` | ~6 |
| `src/components/sections/HowItWorksCondensed.tsx` | ~3 |
| `src/components/sections/HowWeWork.tsx` | ~3 |
| `src/components/sections/ChooseYourPath.tsx` | ~4 |
| `src/components/sections/FeaturedServices.tsx` | ~2 |
| `src/components/sections/NotSureBlock.tsx` | ~2 |
| `src/components/sections/StartHereSection.tsx` | ~3 |
| `src/components/sections/CoachingCallout.tsx` | ~2 |
| `src/data/protocol-content.tsx` | ~20 |
| `src/data/product-content.ts` | ~10 |
| `src/data/landing-pages.ts` | ~5 |

## Rules

- Every visible instance of "Jesse" in user-facing copy becomes "Jesse™"
- Internal identifiers (variable names, component names, file names, CSS classes, route IDs like `id: "jesse"`) stay unchanged
- HTML entities or the Unicode character ™ (U+2122) will be used directly in JSX: `Jesse™`
- Applies to headlines, body copy, CTA labels, FAQ answers, and data strings

## Technical Approach

For each file, find-and-replace all user-facing string instances of "Jesse" with "Jesse™" while leaving code identifiers untouched. Each file will be edited using targeted line replacements.

