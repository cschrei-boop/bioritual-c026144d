
# Bio Signals Product Page Implementation Plan

## Prerequisites

### Step 1: Enable Shopify Integration
Before any product page work can begin, we need to enable the Shopify integration. This will:
- Connect to Shopify's product catalog and checkout system
- Provide access to product management tools
- Enable secure payment processing through Shopify's infrastructure

**User action required:** Approve Shopify enablement and choose to either create a new development store or connect an existing one.

---

## Implementation Overview

Once Shopify is enabled, we will create a compliant product page that follows all the positioning rules and disclosure requirements you've outlined.

### Step 2: Create Product in Shopify

Create the "Bio Signals: Weight Loss + Metabolic Health" product with:
- **Title:** Bio Signals: Weight Loss + Metabolic Health
- **Price:** $699.00 (one-time, not subscription)
- **Type:** Digital/Service product
- **Description:** Educational and lifestyle optimization protocol

---

### Step 3: Create Product Page Component

**New file:** `src/pages/ProductBioSignals.tsx`

A dedicated product page following the exact structure and copy you provided:

#### Page Sections:

1. **Hero/Title Section**
   - Product title: "Bio Signals: Weight Loss + Metabolic Health"
   - Subtitle: "A 3-Month Optimization Protocol"
   - Price display: "$699 · One-time purchase · 3-month duration"
   - Add to Cart button connecting to Shopify checkout

2. **Overview Section**
   - Educational protocol positioning
   - Bio signals explanation
   - Clear "not medical treatment" language

3. **Who This Is For Section**
   - Bullet list of ideal participant traits
   - Disclaimer about diagnosis/treatment

4. **What's Included Sections**
   - The Bio Signals Protocol (3 Months)
   - Private Client Wiki
   - Protocol Materials (with required constraints)
   - Reminders & Accountability
   - Educational Context

5. **Pricing Section**
   - Clear $699 one-time pricing
   - No subscriptions/add-ons messaging

6. **FAQ Section (Accordion)**
   - All 8 required FAQs with compliant answers
   - Using the Accordion component for clean UX

7. **Required Disclosures Section**
   - Educational disclaimer
   - No medical provider relationship
   - Materials disclosure
   - Individual responsibility

---

### Step 4: Add Route to App

**Modify:** `src/App.tsx`

Add route for the product page:
```
/protocol/bio-signals-weight-loss
```

---

### Step 5: Update Navigation

**Modify:** `src/components/sections/Header.tsx`

Update navigation to include link to protocols/products.

---

## Technical Details

### Design Patterns
- Match existing clean, editorial aesthetic
- Use framer-motion for subtle animations
- Responsive layout with mobile-first approach
- Typography: Playfair Display headings, Inter body text

### Components Used
- `Accordion` for FAQ section
- `Button` for CTA actions
- Existing layout patterns from current sections

### Compliance Features
- All copy follows your provided language hierarchy
- No medical claims, outcome guarantees, or itemized materials
- Visible disclosures section
- Shopify-safe product structure

---

## File Changes Summary

| File | Action | Purpose |
|------|--------|---------|
| Shopify Integration | Enable | Connect to Shopify for products/checkout |
| `src/pages/ProductBioSignals.tsx` | Create | Main product page component |
| `src/App.tsx` | Modify | Add product page route |
| `src/components/sections/Header.tsx` | Modify | Add navigation link |

---

## Replication Note

This page structure will serve as a template for other Bio Signals protocols (Energy, Performance, Recovery) with only topic-specific language changes as specified in your requirements.
