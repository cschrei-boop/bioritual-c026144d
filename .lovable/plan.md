
# Add Video Hero to All Pages Missing It

## What Changes

Replace the plain-text hero `<section>` on **8 pages** with the reusable `Hero` component (video background, gradient overlay, animated entrance, dual CTAs). The `Hero` component already supports all needed props -- no component changes required.

## Pages to Update

Each page gets its existing headline/subtitle passed into the `Hero` component. Body paragraphs and sub-hero lines are set to empty strings where not needed (to suppress defaults).

### 1. JourneyPage (`/the-journey`)
- Headline: "The way you live is the story you are telling."
- Body: "Most people haven't chosen that story deliberately..."
- CTAs: "See how it works" + "Talk to Jesse"

### 2. HowItWorks (`/how-it-works`)
- Headline: "No forms. No guesswork. No stack pulled off a shelf."
- Body: "Here's exactly what happens after you decide..."
- No dual CTA needed (single page scroll)

### 3. JessePage (`/ai-concierge`)
- Headline: "Meet Jesse. Your BS filter for the wellness industry."
- Body: "An AI coaching companion that lives in your WhatsApp..."
- No dual CTA needed

### 4. StartHere (`/start-here`)
- Headline: "Not sure where to begin? Good. That's what this page is for."
- Body: "Most people who find BioRitual know something needs to change..."
- No dual CTA needed

### 5. ProductCoaching (`/coaching`)
- Headline: "For people who want a human in the room."
- Body: "A 3-month protocol with direct access to the founders..."
- No dual CTA needed

### 6. About (`/about`)
- Headline: "About BioRitual"
- No body paragraphs (just the headline)
- No dual CTA needed

### 7. Blog (`/blog`)
- Headline: "Articles"
- Body: "Clear, science-based thinking on peptides, GLP-1s..."
- Tagline: "Education . Science . Clarity"
- No dual CTA, no sub-hero lines

### 8. ProtocolsCollection (`/collection/protocols`)
- Headline: "Bio Signals Protocols"
- Body: "3-month structured systems designed for your specific goal"
- No dual CTA needed

## Technical Details

For each page:
1. Import `Hero` from `@/components/sections/Hero`
2. Remove the custom hero `<section>` block
3. Replace with `<Hero>` configured with page-specific props
4. Set `subHeroLine1=""` and `subHeroLine2=""` to suppress default sub-hero text
5. Set `bodyParagraphs` to the page's existing subtitle/description text
6. On pages that don't need body copy or CTAs, pass empty strings to suppress defaults

No changes to the `Hero` component itself -- it already handles all variations via props.
