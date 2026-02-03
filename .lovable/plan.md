

# Add Video Support to Product Pages

## Overview

Enable product pages to display videos uploaded to Shopify alongside images. Currently, the gallery only fetches and displays images. This update will query Shopify's `media` field which includes both images and videos, and update the gallery component to render videos with proper playback controls.

---

## Technical Approach

### Shopify Media Types

The Storefront API supports several media types through the `media` field:
- **MediaImage**: Standard product images
- **Video**: Shopify-hosted video files with multiple source formats
- **ExternalVideo**: YouTube/Vimeo embeds

We'll support all three types using GraphQL fragments to fetch the appropriate fields for each.

---

## Changes Required

### 1. Update GraphQL Query (src/lib/shopify.ts)

Replace `images` with `media` in the `PRODUCT_BY_HANDLE_QUERY`:

```text
Current:
  images(first: 10) {
    edges {
      node {
        url
        altText
      }
    }
  }

New:
  media(first: 10) {
    edges {
      node {
        mediaContentType
        alt
        ... on MediaImage {
          image {
            url
            altText
          }
        }
        ... on Video {
          sources {
            url
            mimeType
          }
          previewImage {
            url
          }
        }
        ... on ExternalVideo {
          embedUrl
          host
          previewImage {
            url
          }
        }
      }
    }
  }
```

### 2. Update TypeScript Types (src/lib/shopify.ts)

Add new interface for media items:

```text
interface ProductMedia {
  node: {
    mediaContentType: 'IMAGE' | 'VIDEO' | 'EXTERNAL_VIDEO' | 'MODEL_3D';
    alt: string | null;
    image?: { url: string; altText: string | null };
    sources?: Array<{ url: string; mimeType: string }>;
    embedUrl?: string;
    host?: 'YOUTUBE' | 'VIMEO';
    previewImage?: { url: string };
  };
}
```

Update `ShopifyProduct` interface to include `media` alongside (or replacing) `images`.

### 3. Rename and Update Gallery Component

Rename `ProductImageGallery` to `ProductMediaGallery` (or keep name but update props):

**New Props Interface:**
```text
interface ProductMediaGalleryProps {
  media: ProductMedia[];
  productTitle?: string;
}
```

**Rendering Logic:**
- For `IMAGE`: Render `<img>` as currently done
- For `VIDEO`: Render `<video>` with controls, muted autoplay on hover (optional)
- For `EXTERNAL_VIDEO`: Render `<iframe>` for YouTube/Vimeo embeds

**Thumbnail Handling:**
- Images: Use the image URL as thumbnail
- Videos: Use `previewImage.url` as thumbnail, with a play icon overlay

### 4. Update DynamicProduct.tsx

Change from passing `images` to passing `media`:

```text
Current:
  const images = product?.node.images.edges || [];
  <ProductImageGallery images={images} .../>

New:
  const media = product?.node.media.edges || [];
  <ProductMediaGallery media={media} .../>
```

---

## Implementation Details

### Video Player Behavior

- Videos will autoplay muted when selected (common e-commerce pattern)
- Play/pause controls visible
- Loop enabled for product showcase videos
- Falls back to poster image (previewImage) before load

### Mobile Carousel

- Videos work in swipeable carousel
- Tap to play/pause
- Video pauses when swiping away

### Desktop Gallery

- Video thumbnail shows play icon overlay
- Clicking thumbnail starts video in main view
- Video controls visible on hover

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/lib/shopify.ts` | Update `PRODUCT_BY_HANDLE_QUERY` to fetch `media` instead of `images`, add `ProductMedia` type, update `ShopifyProduct` interface |
| `src/hooks/useShopifyProduct.ts` | Update `ProductNode` interface to include `media` field |
| `src/components/product/ProductImageGallery.tsx` | Rename to `ProductMediaGallery`, update props and rendering logic for images, videos, and external videos |
| `src/pages/DynamicProduct.tsx` | Pass `media` instead of `images` to gallery component |

---

## Backward Compatibility

The `media` field includes all images, so existing products with only images will continue to work. Products with videos will now display them in the gallery.

---

## Example Output

For a product with 2 images and 1 video:
- Desktop: Thumbnail strip shows 3 items (2 images + 1 video with play icon)
- Mobile: Carousel with 3 slides, dots indicator shows 3 items
- Clicking video thumbnail plays the video in the main view

