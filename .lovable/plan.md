
# Update Weight Loss Protocol Description

## Summary
Replace the current product description on the Bio Signals Weight Loss page with the new compelling copy that focuses on the educational and systems-based approach to weight management.

## Changes Required

### File: `src/pages/ProductBioSignals.tsx`

Update the `description` variable (lines 5-16) with the new copy, structured as follows:

**New Description Content:**

1. **Opening Hook**: "Weight loss isn't one molecule. It's navigating many signals—without breaking your metabolism."

2. **Problem Statement**: Explain the landscape of peptides/supplements and how most people are given one compound without support.

3. **Bio Signals Approach**: Position the protocol as a navigation system that integrates multiple elements:
   - GLP-1-based peptides (including retatrutide-style approaches)
   - Supportive supplementation for lean mass, energy, and recovery
   - Nutrition strategies that work with appetite signals

4. **Closing Statement**: "Not 'take this and hope.' A structured system that actually holds together."

5. **Compliance Footer** (retained): Educational protocol disclaimer

## Technical Implementation

The description will use:
- `<p className="mb-3">` for standard paragraphs
- `<p className="mb-4 font-medium text-foreground">` for the opening hook
- `<ul className="list-disc pl-5 mb-4 space-y-1">` for the bullet list
- Maintain the final compliance disclaimer with `font-medium text-foreground` styling

## Compliance Notes
- The copy uses educational framing ("help you navigate," "educational context")
- References compounds in an educational context, not as products for sale
- Maintains the required enrollment disclaimer at the end
- Aligns with brand guidelines: "Clarity over Conversion"
