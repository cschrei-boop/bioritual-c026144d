
# Improve AI Crawler Access & SEO

## Summary
Update the site to allow ChatGPT and other AI crawlers to access your content, and add a sitemap to help with discoverability.

## Changes Required

### 1. Update `public/robots.txt`
Add explicit entries for AI crawlers:
- **GPTBot** - OpenAI's web crawler for training and browsing
- **ChatGPT-User** - ChatGPT's live browsing feature
- **Claude-Web** - Anthropic's crawler
- **PerplexityBot** - Perplexity AI's crawler
- **Bytespider** - ByteDance/TikTok AI crawler
- **CCBot** - Common Crawl (used by many AI systems)

### 2. Create `public/sitemap.xml`
Add a sitemap listing all your pages so crawlers can discover them:
- Homepage
- All protocol pages (Weight Loss, Energy, Performance, Cognition, etc.)
- The Truth About Peptides
- Start Here
- Protocols Collection
- Terms, Fulfillment Policy, Consent pages

### 3. Update `index.html`
Add a reference to the sitemap in the HTML head for better discoverability.

## Important Note
Even with these changes, some AI tools may still have trouble fully reading your SPA content because they don't execute JavaScript. The robots.txt and sitemap improvements help with crawlers that DO support JavaScript rendering. For full static content (which search engines and AI can always read), you would need to add server-side rendering (SSR) or static site generation (SSG) - but that would require moving to a framework like Next.js.

## Technical Implementation

**robots.txt additions:**
```
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /
```

**sitemap.xml structure:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://bioritual.lovable.app/</loc></url>
  <url><loc>https://bioritual.lovable.app/protocols</loc></url>
  <!-- ... all pages -->
</urlset>
```
