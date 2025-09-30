-- Create first admin account
-- IMPORTANT: This script creates a default admin account for initial setup
-- After running this script, you MUST:
-- 1. Go to Supabase Dashboard > Authentication > Users
-- 2. Find the user with email 'admin@abrimatt.com'
-- 3. Copy their User ID
-- 4. Run the UPDATE command below with the actual User ID

-- First, you need to create the auth user manually in Supabase Dashboard:
-- Email: admin@abrimatt.com
-- Password: (set a secure password)
-- Then get the user ID and run this:

-- Replace 'YOUR_USER_ID_HERE' with the actual UUID from Supabase Auth
-- UPDATE public.profiles 
-- SET role = 'admin' 
-- WHERE id = 'YOUR_USER_ID_HERE';

-- Alternative: If you already have a customer account, you can promote it to admin:
-- UPDATE public.profiles 
-- SET role = 'admin' 
-- WHERE email = 'your-email@example.com';

-- To verify admin accounts:
SELECT id, email, role, first_name, last_name, created_at 
FROM public.profiles 
WHERE role = 'admin';
