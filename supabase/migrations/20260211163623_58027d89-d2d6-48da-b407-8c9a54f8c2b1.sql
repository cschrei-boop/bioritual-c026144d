CREATE TABLE public.email_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  interests TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.email_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert" ON public.email_subscribers
  FOR INSERT TO anon WITH CHECK (true);