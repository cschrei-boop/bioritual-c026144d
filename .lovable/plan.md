

# Add "Millennial" Landing Page Variant

## What This Does

Adds a single new entry to `src/data/landing-pages.ts` with the slug `millennial`, using the verbatim copy from the PDF. The page will be live at `/lp/millennial` immediately -- no new files, no new components, no route changes.

## How the PDF Copy Maps to the Config

The existing landing page config supports string-based fields. The PDF copy will be mapped verbatim into those fields. Where the PDF uses bullet lists or multi-line formatting, those will be preserved using newline characters (`\n`) and bullet markers within the strings.

| PDF Section | Config Field(s) | Verbatim Copy |
|---|---|---|
| Hero headline | `hero.headline` | "This shouldn't be this confusing.\nIt's exhausting because too many people are confidently full of B.S." |
| Hero body | `hero.bodyParagraphs` | 6 paragraphs from the PDF, each as a separate array item |
| Hero CTA | `hero.ctaText` | "Start with clarity" |
| "Let's be specific" | `founderQuote.quote` | Full section text including bullets rendered with bullet characters |
| "What we actually do" | `featuredCollection.headline` + `featuredCollection.description` | Headline and body text |
| Peptides / GLP-1s | `threePillars.title` + `description1` + `description2` | Section heading and two description blocks |
| Value Props | `valueProps.values` | 4 cards derived from the PDF's key themes |
| Final CTA | `finalCTA.headline` + `finalCTA.description` + `finalCTA.buttonText` | Verbatim closing copy |

## Important Limitations (String-Only Fields)

The current components render these fields as plain text in `<p>` and `<blockquote>` tags. This means:

- Bullet lists from the PDF will be rendered as inline text with bullet characters (e.g., "- You've had at least one quiet...")
- Multi-line formatting relies on `\n` characters, which only render as line breaks if the component uses `whitespace-pre-line` styling
- The Hero component already renders `bodyParagraphs` as separate `<p>` tags (one per array item), so that section will preserve paragraph breaks naturally

If you want full bullet-list and rich formatting support in these sections, that would require updating the components (a separate task). For now, the text goes in verbatim as strings.

## Verbatim Content for Each Field

### Hero
- **tagline**: "" (empty -- no tagline in the PDF)
- **headline**: "This shouldn't be this confusing.\nIt's exhausting because too many people are confidently full of B.S."
- **bodyParagraphs**: Array of 6 strings matching each paragraph from the PDF
- **ctaText**: "Start with clarity"
- **subHeroLine1**: "" (empty)
- **subHeroLine2**: "" (empty)

### Founder Quote (maps to "Let's be specific")
- **quote**: The full "Let's be specific" text block, including bullet items as dash-prefixed lines
- **attribution**: "" (empty -- no attribution in the PDF for this section)

### Featured Collection (maps to "What we actually do")
- **headline**: "What we actually do"
- **description**: Full body text including the bullet list items

### Three Pillars (maps to "A grown-up word about peptides and GLP-1s")
- **title**: "A grown-up word about peptides and GLP-1s"
- **subtitle**: "" (empty)
- **description1**: First block of paragraphs (Yes/No statements + "They are biological signals" + "Used conservatively..." paragraph)
- **description2**: "The problem is not the tool.\nThe problem is pretending tools exist outside of context."

### Value Props
4 cards with titles and descriptions drawn from the PDF's core themes (the PDF doesn't define explicit value-prop cards, so these will be derived from the key messages while preserving the PDF's language)

### Final CTA
- **headline**: "You don't need to reinvent yourself."
- **italicWord**: "" (empty)
- **description**: "You just need to stop letting the loudest voice decide for you."
- **buttonText**: "Start with clarity"

### SEO
- **title**: "BioRitual | This Shouldn't Be This Confusing"
- **description**: "Peptides. Hormones. Supplements. GLP-1s. BioRitual exists for people who are tired of noise — not tired of health."

## File Modified

**`src/data/landing-pages.ts`** -- Add one new object to the `landingPages` array. No other files change.

