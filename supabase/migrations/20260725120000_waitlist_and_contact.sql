-- FreshlyToo pazarlama sitesi: bekleme listesi ve iletişim formu tabloları.
--
-- Site statik olarak yayınlandığı için kayıtlar tarayıcıdan anon anahtarıyla
-- gelir. Bu yüzden RLS altında YALNIZCA insert açıktır: kimse listeyi okuyamaz,
-- güncelleyemez, silemez. Okuma service_role ile (panel / sunucu) yapılır.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------- waitlist --

create table if not exists public.waitlist (
  id           uuid primary key default gen_random_uuid(),
  email        text        not null,
  role         text        not null default 'customer'
                 check (role in ('customer', 'business')),
  language     text        not null default 'tr'
                 check (language in ('tr', 'en')),
  -- KVKK onayının alındığı an; kaydın kendisiyle birlikte saklanır.
  consented_at timestamptz not null default now(),
  created_at   timestamptz not null default now(),
  constraint waitlist_email_format check (position('@' in email) > 1)
);

-- Aynı e-posta ikinci kez katılmayı denerse uygulama bunu başarı sayar.
create unique index if not exists waitlist_email_key
  on public.waitlist (lower(email));

alter table public.waitlist enable row level security;

drop policy if exists "waitlist_anon_insert" on public.waitlist;
create policy "waitlist_anon_insert"
  on public.waitlist
  for insert
  to anon, authenticated
  with check (true);

-- --------------------------------------------------------- contact_messages --

create table if not exists public.contact_messages (
  id           uuid primary key default gen_random_uuid(),
  name         text        not null check (length(btrim(name)) between 1 and 120),
  email        text        not null,
  subject      text        not null,
  message      text        not null check (length(btrim(message)) between 1 and 4000),
  language     text        not null default 'tr'
                 check (language in ('tr', 'en')),
  consented_at timestamptz not null default now(),
  created_at   timestamptz not null default now(),
  constraint contact_messages_email_format check (position('@' in email) > 1)
);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

alter table public.contact_messages enable row level security;

drop policy if exists "contact_messages_anon_insert" on public.contact_messages;
create policy "contact_messages_anon_insert"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);

-- ------------------------------------------------------------------ grants --
-- Politikalar insert'e izin verse de tablo yetkisi ayrıca verilmeli.
-- Select/update/delete bilinçli olarak geri alınıyor.

grant insert on table public.waitlist, public.contact_messages to anon, authenticated;
revoke select, update, delete
  on table public.waitlist, public.contact_messages
  from anon, authenticated;
