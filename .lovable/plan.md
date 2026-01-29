

# Product Page Redesign: Jones Road Beauty Style

## Overview

Redesign the product pages to match the modern e-commerce layout of Jones Road Beauty, featuring a two-column layout with an image gallery sourced directly from Shopify product images.

---

## Reference Layout Analysis

Based on the Jones Road Beauty product page:

```text
+------------------+------------------------+
|  [Thumb 1]       |                        |
|  [Thumb 2]       |    MAIN PRODUCT        |
|  [Thumb 3]       |      IMAGE             |
|  [Thumb 4]       |                        |
+------------------+------------------------+
                   | Product Title          |
                   | Price + Add to Cart    |
                   | Trust badges           |
                   |------------------------|
                   | [+] Product Description|
                   | [+] What's Included    |
                   | [+] How It Works       |
                   | [+] FAQ                |
                   +------------------------+
```

---

## Key Changes

### 1. Two-Column Layout (Desktop)
- **Left Column (60%)**: Image gallery with thumbnail strip
- **Right Column (40%)**: Product info, pricing, CTA, and collapsible accordions
- **Mobile**: Stack vertically with swipeable image carousel

### 2. Image Gallery Component
- Pulls images directly from Shopify product data (`product.node.images.edges`)
- Vertical thumbnail strip on the left (desktop) / horizontal dots on mobile
- Click thumbnail to change main image
- Main image takes majority of left column

### 3. Product Info Section (Right Column)
- Product title (clean, no icon)
- Price display with strike-through for compare prices
- Prominent "Add to Cart" button
- Trust badges (below CTA)

### 4. Collapsible Content Sections
Convert existing content into accordion sections:
- **Product Description**: Overview content
- **What's Included**: Features/benefits list
- **Who This Is For**: Target audience
- **How It Works**: Process explanation
- **FAQ**: Existing FAQ content
- **Required Disclosures**: Compliance content

---

## Technical Implementation

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/ProductCoaching.tsx` | Complete layout redesign |
| `src/lib/shopify.ts` | Increase image fetch limit to 10 |

### New Component Structure

```tsx
// ProductCoaching.tsx structure
<Header />
<main>
  <div className="grid lg:grid-cols-[1fr_400px]">
    {/* Left: Image Gallery */}
    <ProductImageGallery images={product.node.images.edges} />
    
    {/* Right: Product Info */}
    <div className="sticky top-0">
      <h1>{product.node.title}</h1>
      <PriceDisplay />
      <AddToCartButton />
      <TrustBadges />
      
      <Accordion>
        <AccordionItem>Product Description</AccordionItem>
        <AccordionItem>What's Included</AccordionItem>
        <AccordionItem>Who This Is For</AccordionItem>
        <AccordionItem>FAQ</AccordionItem>
        <AccordionItem>Required Disclosures</AccordionItem>
      </Accordion>
    </div>
  </div>
</main>
<Footer />
```

### Image Gallery Component

```tsx
// Inline component for image gallery
const [selectedImageIndex, setSelectedImageIndex] = useState(0);
const images = product?.node.images.edges || [];

<div className="flex gap-4">
  {/* Thumbnails */}
  <div className="flex flex-col gap-2">
    {images.map((img, idx) => (
      <button onClick={() => setSelectedImageIndex(idx)}>
        <img src={img.node.url} />
      </button>
    ))}
  </div>
  
  {/* Main Image */}
  <div className="flex-1">
    <img src={images[selectedImageIndex]?.node.url} />
  </div>
</div>
```

---

## Shopify Image Management

### How Images Work

- Images uploaded in Shopify Admin will automatically appear in the gallery
- The GraphQL query already fetches `images(first: 5)` - will increase to 10
- Image order in Shopify determines gallery order
- First image = default selected image

### Recommended Image Setup in Shopify

For best results, upload images to your Shopify product in this order:
1. Hero/lifestyle shot (main image)
2. Product details
3. What's included visualization
4. Process/how it works
5. Additional lifestyle shots

---

## Responsive Behavior

### Desktop (lg+)
- Side-by-side two-column layout
- Vertical thumbnail strip
- Sticky product info panel

### Tablet (md)
- Stacked layout
- Horizontal thumbnail carousel
- Full-width sections

### Mobile (sm)
- Single column
- Swipeable image carousel with dots
- Collapsed accordions

---

## Styling Details

- Clean, minimal aesthetic matching Jones Road
- No rounded corners on images (square/rectangular)
- Subtle hover states on thumbnails
- Accordion with plus/minus icons
- Trust badges with icons (shipping, returns)

---

## Scope

This redesign applies to `ProductCoaching.tsx` first as the template. Once approved, the same pattern can be applied to:
- `ProductBioSignals.tsx`
- `ProductBioSignalsEnergy.tsx`
- `ProductBioSignalsPerformance.tsx`
- `ProductBioSignalsHairSkin.tsx`
- `ProductBioSignalsLongevity.tsx`
- `ProductBioSignalsCognition.tsx`
- `ProductAIConcierge.tsx`

