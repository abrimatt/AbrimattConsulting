-- Newsletter subscribers table
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  source TEXT DEFAULT 'website',
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Lead captures table
CREATE TABLE IF NOT EXISTS public.lead_captures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  name TEXT,
  phone TEXT,
  company TEXT,
  interest TEXT,
  message TEXT,
  source TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'lost')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_captures ENABLE ROW LEVEL SECURITY;

-- RLS Policies for newsletter_subscribers
CREATE POLICY "newsletter_subscribers_insert_policy" ON public.newsletter_subscribers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "newsletter_subscribers_admin_all" ON public.newsletter_subscribers
  FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for lead_captures
CREATE POLICY "lead_captures_insert_policy" ON public.lead_captures
  FOR INSERT WITH CHECK (true);

CREATE POLICY "lead_captures_admin_all" ON public.lead_captures
  FOR ALL USING (public.is_admin(auth.uid()));

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON public.newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON public.newsletter_subscribers(status);
CREATE INDEX IF NOT EXISTS idx_lead_email ON public.lead_captures(email);
CREATE INDEX IF NOT EXISTS idx_lead_status ON public.lead_captures(status);
CREATE INDEX IF NOT EXISTS idx_lead_created ON public.lead_captures(created_at DESC);
