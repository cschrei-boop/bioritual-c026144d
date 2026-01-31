
# Homepage Compliance Overhaul

## Summary
Complete rewrite of homepage content to remove all intervention/treatment language and reposition BioRitual as an educational wellness framework platform. This involves modifying 6 component files and removing 4 sections entirely from the page structure.

## Scope Confirmation
- **Page**: Homepage only (`src/pages/Index.tsx`)
- **No new pages** created
- **Sections to DELETE**: FeaturedServices, PressQuotes, ChooseYourPath, GetTheLook (ShopByGoal)
- **Sections to MODIFY**: Hero, FeaturedCollection, FounderQuote, FinalCTA, Footer

---

## Changes by Section

### 1. Index.tsx - Remove Deleted Sections
**File**: `src/pages/Index.tsx`

Remove imports and component references for:
- `FeaturedServices`
- `PressQuotes`
- `ShopByGoal`
- `ChooseYourPath`
- `GetTheLook`
- `NotSureBlock`

**Remaining sections in order**:
1. Header
2. Hero
3. FounderQuote (rewritten)
4. FeaturedCollection (rewritten as "Understanding Signaling Concepts")
5. ThreePillarsCarousel (to be converted to "Areas of Exploration")
6. ValueProps (apply global term replacements)
7. FinalCTA (rewritten)
8. Footer (with disclaimers)
9. StickyEmailFooter

---

### 2. Hero Section - Complete Rewrite
**File**: `src/components/sections/Hero.tsx`

| Element | Current | New |
|---------|---------|-----|
| Tagline | "Simple. Structured. Personalized Wellness." | "Simple. Structured. Educational Wellness Frameworks." |
| Headline | "Your body isn't broken." | "Your body is constantly adapting." |
| Body copy 1 | "It's responding to signals..." | "This framework focuses on understanding context, patterns, and inputs - not fixing the body." |
| Body copy 2 | "We design personalized protocols..." | "BioRitual presents educational frameworks for thinking about wellness-related choices. It does not recommend, prescribe, or design personalized interventions." |
| NEW line | (none) | "BioRitual is not a medical service and does not provide medical advice, diagnosis, or treatment." |
| Sub-hero text | "They need better signals — and a plan..." | "They need clearer frameworks to help them think through what to do next." |
| CTA button | "Start with a protocol designed for you" | "Learn how the framework is structured" |
| CTA link | `/collection/protocols` | `/start-here` |

---

### 3. FeaturedCollection - Rewrite as Signaling Concepts
**File**: `src/components/sections/FeaturedCollection.tsx`

**Current**:
```
The Truth About Peptides
Peptides are everywhere in longevity conversations...
```

**New**:
```
Understanding Signaling Concepts
This section explores how signaling is discussed in wellness contexts, without recommendations or prescriptions.
```

Button text remains "Read Article" linking to `/truth-about-peptides`

---

### 4. ThreePillarsCarousel - Convert to "Areas of Exploration"
**File**: `src/components/sections/ThreePillarsCarousel.tsx`

Replace the entire carousel with a simple text block:

```
Areas of Exploration
Examples of topics people often seek to understand more clearly.
BioRitual does not provide treatment-based or outcome-driven programs.
```

Do not list specific domains. Remove all pillar cards.

---

### 5. ValueProps - Global Term Replacements
**File**: `src/components/sections/ValueProps.tsx`

Apply these replacements to titles and descriptions:

| Current | New |
|---------|-----|
| "Better Systems" | Keep as-is (neutral) |
| "The world doesn't need more motivation. It needs better systems." | Keep as-is (neutral) |
| "Clean Protocols" | "Clear Frameworks" |
| "No pseudoscience, no fads. Just evidence-based optimization strategies." | "No pseudoscience, no fads. Just evidence-based decision-making approaches." |
| "High Performance" | "Structured Thinking" |
| "The optimization equivalent of a swiss army knife..." | "Easy, adaptable, multi-purpose frameworks for understanding wellness." |
| "Built for Busy" | Keep as-is (neutral) |
| "Designed for professionals with high cognitive load..." | Keep as-is (neutral) |

---

### 6. FounderQuote - Rewrite Quote
**File**: `src/components/sections/FounderQuote.tsx`

**Current**:
```
Clean, strategic, high-grade protocols that work with every body type and lifestyle — and that are as simple to follow as they are to master. BIORITUAL is a lifetime of optimization knowledge, distilled.
```

**New** (applying global term replacements):
```
Clear, strategic frameworks that apply to every body type and lifestyle — and that are as simple to follow as they are to understand. BIORITUAL is a lifetime of wellness knowledge, distilled.
```

---

### 7. FinalCTA - Complete Rewrite
**File**: `src/components/sections/FinalCTA.tsx`

**Current**:
```
Build Your Ritual
You don't need more motivation. You need better systems. Let's design yours.
Get Started
```

**New**:
```
Understand the Framework
This page introduces how BioRitual is structured and what it is designed to support.

[Explore the framework] → links to /start-here
```

---

### 8. Footer - Tagline + Disclaimer Additions
**File**: `src/components/sections/Footer.tsx`

**Tagline replacement**:
- Current: "Structured biological optimization for minds in constant motion."
- New: "Structured, educational frameworks for thinking clearly about wellness."

**Add Important Notice section** (above footer, as part of footer component):
```
Important Notice
All content on this site is provided for informational and educational purposes only.
BioRitual does not provide medical advice, diagnosis, treatment, or prescriptions.
```

**Add Disclaimer section** (new column or section in footer):
```
Disclaimer
BioRitual is an educational platform.
It does not replace licensed healthcare professionals.
Decisions made based on this information are the responsibility of the individual.
```

---

## Technical Implementation Details

### Files to Modify
1. `src/pages/Index.tsx` - Remove imports and section components
2. `src/components/sections/Hero.tsx` - Complete text rewrite
3. `src/components/sections/FeaturedCollection.tsx` - Title and description change
4. `src/components/sections/ThreePillarsCarousel.tsx` - Replace carousel with simple text
5. `src/components/sections/ValueProps.tsx` - Term replacements in data array
6. `src/components/sections/FounderQuote.tsx` - Quote text replacement
7. `src/components/sections/FinalCTA.tsx` - Complete block rewrite
8. `src/components/sections/Footer.tsx` - Tagline + add two disclaimer sections

### Files NOT Modified (but become unused)
These component files will remain but not be rendered on homepage:
- `src/components/sections/FeaturedServices.tsx`
- `src/components/sections/PressQuotes.tsx`
- `src/components/sections/ShopByGoal.tsx`
- `src/components/sections/ChooseYourPath.tsx`
- `src/components/sections/GetTheLook.tsx`

---

## Compliance Notes
- All intervention language removed ("optimize", "personalized", "protocols", "peptide protocols")
- Explicit non-medical disclaimers added in Hero (visible above fold) and Footer
- No specific health domains listed in "Areas of Exploration"
- CTAs now point to educational "Start Here" page, not product collection
- All pricing references removed with deleted sections
