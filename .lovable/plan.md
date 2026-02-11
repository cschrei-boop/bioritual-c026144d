

# Email Popup with Interest Selection and Database Storage

## What It Does

A popup appears 5 seconds after the page loads, asking visitors for their email and optionally which health areas interest them. Submissions are stored in a database table so you can access and export them later.

## Popup Content

- Headline: "Stay in the loop"
- Subtitle: Brief copy about getting the latest signals
- Email input field (required)
- Optional checkboxes for health interest areas:
  - Weight Loss / Metabolic Health
  - Energy / Vitality
  - Cognition / Brain Health
  - Longevity
  - Performance / Recovery
  - Hair and Skin
- Submit button
- Small marketing disclaimer text at the bottom (e.g., "By subscribing, you agree to receive marketing emails from BioRitual. You can unsubscribe at any time.")
- Close (X) button

## Behavior

- 5-second delay before appearing
- Dismissed via close button or clicking outside
- Stores a flag in localStorage so it only shows once per visitor
- On submit: saves email + selected interests to the database, then closes
- Existing sticky email footer bar remains unchanged

---

## Technical Plan

### 1. Database: Create `email_subscribers` table

A new migration to create the table:

```sql
CREATE TABLE public.email_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  interests TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.email_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public signup form)
CREATE POLICY "Allow anonymous insert" ON public.email_subscribers
  FOR INSERT TO anon WITH CHECK (true);
```

No SELECT/UPDATE/DELETE policies for anon -- only you (via backend admin) can view or manage the data.

### 2. New file: `src/components/sections/EmailPopup.tsx`

- Uses the existing `Dialog` component
- Email input (required) + 6 checkbox options for interest areas
- On submit: inserts into `email_subscribers` table via Supabase client
- Marketing disclaimer in small text below the form
- localStorage check to show only once

### 3. Modified file: `src/pages/Index.tsx`

- Import and render `<EmailPopup />` alongside `<StickyEmailFooter />`

### Interest Categories (checkbox labels)

| Label | Value stored |
|---|---|
| Weight Loss / Metabolic Health | `weight-loss` |
| Energy / Vitality | `energy` |
| Cognition / Brain Health | `cognition` |
| Longevity | `longevity` |
| Performance / Recovery | `performance` |
| Hair and Skin | `hair-skin` |

