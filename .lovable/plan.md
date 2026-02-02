
# Open Graph Image & Metadata Implementation

## Summary

Use the provided abstract molecular macro photograph as the default Open Graph image for link previews across the site. The image will be cropped to OG dimensions (1200x630) and placed in the public folder for direct URL access.

---

## Image Handling

The uploaded image is a square format. For OG images, the standard dimensions are 1200x630 pixels (approximately 1.91:1 aspect ratio). 

**Cropping approach:**
- Center-crop horizontally to capture the molecular structures
- The pink/magenta and blue tones with molecular imagery align well with the BioRitual brand

**File location:** `public/og/og-default.png`
- Must be in `public` folder (not `src/assets`) because OG images are referenced via direct URLs in meta tags, not imported as ES6 modules

---

## Files to Create/Update

| File | Action |
|------|--------|
| `public/og/og-default.png` | Create - Copy and save the image (cropped to 1200x630) |
| `index.html` | Update - Add comprehensive OG and Twitter Card meta tags |

---

## Meta Tags to Add in index.html

```html
<!-- Open Graph defaults -->
<meta property="og:site_name" content="BioRitual" />
<meta property="og:type" content="website" />
<meta property="og:title" content="BioRitual - Structured Biological Optimization" />
<meta property="og:description" content="Simple, structured wellness protocols combining peptides, supplements, nutrition, and habits—built for your biology, goals, and lifestyle." />
<meta property="og:image" content="https://bioritual.lovable.app/og/og-default.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter Card defaults -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="BioRitual - Structured Biological Optimization" />
<meta name="twitter:description" content="Simple, structured wellness protocols combining peptides, supplements, nutrition, and habits—built for your biology, goals, and lifestyle." />
<meta name="twitter:image" content="https://bioritual.lovable.app/og/og-default.png" />
```

---

## Technical Note

Since the source image is square and OG requires 1200x630, I will:
1. Copy the image to `public/og/og-default.png`
2. Use CSS `object-fit` and `object-position` concepts - but since this is a static meta image, it will display as-is
3. The image will work but may appear slightly cropped on some platforms

**Alternative:** If you have access to image editing, you could provide a pre-cropped 1200x630 version for pixel-perfect previews. Otherwise, the square image will work (platforms auto-crop to fit).

---

## After Implementation

Test link previews using:
- iMessage (with cache-buster: `?v=2`)
- Facebook Sharing Debugger
- Twitter Card Validator
