-- Drop existing problematic policies
DROP POLICY IF EXISTS "profiles_admin_all" ON public.profiles;
DROP POLICY IF EXISTS "companies_admin_all" ON public.companies;
DROP POLICY IF EXISTS "demo_requests_admin_all" ON public.demo_requests;
DROP POLICY IF EXISTS "support_tickets_admin_all" ON public.support_tickets;
DROP POLICY IF EXISTS "ticket_messages_admin_all" ON public.ticket_messages;
DROP POLICY IF EXISTS "ticket_messages_select_related" ON public.ticket_messages;
DROP POLICY IF EXISTS "ticket_messages_insert_related" ON public.ticket_messages;

-- Create a function to check if user is admin (bypasses RLS)
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = user_id AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a function to automatically create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name, company_name, phone, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'company_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'phone', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'customer')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Recreate admin policies using the security definer function
CREATE POLICY "profiles_admin_all" ON public.profiles FOR ALL 
  USING (public.is_admin(auth.uid()));

CREATE POLICY "companies_admin_all" ON public.companies FOR ALL 
  USING (public.is_admin(auth.uid()));

CREATE POLICY "demo_requests_admin_all" ON public.demo_requests FOR ALL 
  USING (public.is_admin(auth.uid()));

CREATE POLICY "support_tickets_admin_all" ON public.support_tickets FOR ALL 
  USING (public.is_admin(auth.uid()));

CREATE POLICY "ticket_messages_admin_all" ON public.ticket_messages FOR ALL 
  USING (public.is_admin(auth.uid()));

-- Recreate ticket_messages policies with fixed logic
CREATE POLICY "ticket_messages_select_related" ON public.ticket_messages FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.support_tickets 
      WHERE id = ticket_id AND user_id = auth.uid()
    ) OR public.is_admin(auth.uid())
  );

CREATE POLICY "ticket_messages_insert_related" ON public.ticket_messages FOR INSERT 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.support_tickets 
      WHERE id = ticket_id AND user_id = auth.uid()
    ) OR public.is_admin(auth.uid())
  );
