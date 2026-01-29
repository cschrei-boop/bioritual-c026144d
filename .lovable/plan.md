
# Replace Hero Image with Video Background

## Overview
Replace the static hero image on the homepage with a looping video background. The project already has a video file (`background-video.mp4`) and a `VideoBackground` component ready to use.

## Implementation

### File to Modify
**`src/components/sections/Hero.tsx`**

### Changes
1. Remove the static image import (`hero-portrait.jpg`)
2. Replace the `<img>` element with a `<video>` element that:
   - Auto-plays, loops, and is muted (required for autoplay)
   - Uses `playsInline` for mobile compatibility
   - Covers the full hero section with `object-cover`
   - Has a slightly reduced playback rate for a subtle, cinematic feel
3. Keep the existing gradient overlay for text readability
4. Import the video from `@/assets/background-video.mp4`

### Technical Approach
```text
┌─────────────────────────────────────┐
│ Hero Section                        │
│ ┌─────────────────────────────────┐ │
│ │ Video (absolute, object-cover)  │ │
│ │ autoPlay, loop, muted           │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ Gradient Overlay (for text)     │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ Content (tagline, headline,     │ │
│ │ copy, CTA button)               │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### Notes
- The video will be contained within the Hero section only (not fixed to the viewport)
- Mobile users will see the video with `playsInline` to prevent fullscreen takeover
- The existing gradient overlay will ensure text remains readable
