# Admin Account Setup Guide

This guide explains how to create and manage admin accounts for the Abrimatt CRM system.

## Creating the First Admin Account

Since public registration only allows customer accounts for security reasons, you need to create the first admin account manually. Follow these steps:

### Method 1: Promote an Existing Account (Recommended)

1. **Register a regular customer account:**
   - Go to `/auth/register`
   - Fill in your details (this will create a customer account)
   - Complete the registration

2. **Promote to admin in Supabase:**
   - Go to your Supabase project dashboard
   - Navigate to **SQL Editor**
   - Run this query (replace with your email):
   \`\`\`sql
   UPDATE public.profiles 
   SET role = 'admin' 
   WHERE email = 'your-email@example.com';
   \`\`\`

3. **Verify the change:**
   - Log out and log back in
   - You should now be redirected to `/admin/dashboard`

### Method 2: Create Admin via Supabase Auth

1. **Create user in Supabase:**
   - Go to **Authentication** > **Users** in Supabase Dashboard
   - Click **Add User** > **Create new user**
   - Enter email and password
   - Click **Create user**

2. **Get the User ID:**
   - Copy the UUID of the newly created user

3. **Update profile to admin:**
   - Go to **SQL Editor**
   - Run this query (replace with the UUID):
   \`\`\`sql
   UPDATE public.profiles 
   SET role = 'admin' 
   WHERE id = 'USER_UUID_HERE';
   \`\`\`

4. **Login:**
   - Go to `/auth/login`
   - Use the credentials you created

## Creating Additional Admin Accounts

Once you have at least one admin account, you can create additional admins through the admin portal:

1. **Login as admin:**
   - Go to `/auth/login`
   - Use your admin credentials

2. **Navigate to User Management:**
   - Click **Users** in the admin navigation
   - Or go directly to `/admin/users`

3. **Create new user:**
   - Click **Create User** button
   - Fill in the user details
   - Select **Administrator** as the account type
   - Click **Create User**

## Admin Access

Admin accounts have access to:

- **Dashboard** (`/admin/dashboard`) - Overview of all CRM metrics
- **Customers** (`/admin/customers`) - View all customer accounts
- **Demo Requests** (`/admin/demo-requests`) - Manage product demo requests
- **Support Tickets** (`/admin/support-tickets`) - Handle customer support
- **Insights** (`/admin/insights`) - Manage blog posts and insights
- **Users** (`/admin/users`) - Create and manage all user accounts
- **Companies** (`/admin/companies`) - Manage company records

## Security Notes

- Regular users registering through `/auth/register` can only create customer accounts
- Only existing admins can create new admin accounts
- All admin pages are protected with role-based authentication
- Row Level Security (RLS) policies ensure data access is properly restricted

## Troubleshooting

**Issue: "Infinite recursion detected in policy"**
- Make sure you've run the `004_fix_rls_policies.sql` script
- This fixes the RLS policies to prevent infinite loops

**Issue: Can't access admin dashboard after promotion**
- Log out completely and log back in
- Clear browser cache if needed
- Verify the role was updated in the database

**Issue: "Forbidden" error when accessing admin pages**
- Verify your account has `role = 'admin'` in the profiles table
- Check that you're logged in with the correct account
