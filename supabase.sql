-- Run this in Supabase SQL Editor to create the contacts table
-- Node.js backend will insert into this table via service_role key

create table if not exists public.contacts (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamp with time zone default now()
);

-- Enable RLS but allow insert via service_role (and anon if you want public inserts)
alter table public.contacts enable row level security;

-- Policy: allow anon insert (if you use anon key from frontend/server)
-- For Node.js service_role, RLS is bypassed, but keep this for anon usage
drop policy if exists "allow_insert" on public.contacts;
create policy "allow_insert" on public.contacts
  for insert with check (true);

-- Policy: only service_role can select (keep messages private)
drop policy if exists "allow_select_service" on public.contacts;
create policy "allow_select_service" on public.contacts
  for select using (auth.role() = 'service_role');

-- Optional: view contacts in dashboard
-- grant usage if needed
