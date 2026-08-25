# Naresh — Premium Portfolio (2026)

**Stack:** Next.js 14 (App Router) + React 18 + Tailwind + Framer Motion + Three.js / R3F + Node.js + Supabase

Dark futuristic, 3D, glassmorphism, cinematic scroll — high-end 2026 developer portfolio.

---

## Quick Start

```bash
npm install --legacy-peer-deps
cp .env.example .env.local  # add Supabase keys
npm run dev     # http://localhost:3000
npm run build
npm start
```

## Node.js + Supabase DB

Contact form → `POST /api/contact` (Node.js runtime)

- **Route:** `src/app/api/contact/route.ts` (`runtime = "nodejs"`)
- **DB:** Supabase Postgres table `contacts` (see `supabase.sql`)
- **Env:**
  ```
  NEXT_PUBLIC_SUPABASE_URL=
  NEXT_PUBLIC_SUPABASE_ANON_KEY=
  SUPABASE_SERVICE_ROLE_KEY=   # server only
  ```
- Run `supabase.sql` in Supabase SQL Editor. RLS enabled; `service_role` bypasses RLS.
- Without env, API returns `mocked:true` so site still works in dev.

Test:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"hi"}'
```

## Edit Content Without Touching UI

All editable data in `src/data/` + `src/data/site.ts`:

- `siteConfig` — name, tagline, email, stats, education, currentlyBuilding
- `projects.ts` — add projects array
- `skills.ts` — categories & orbit
- `experience.ts` — timeline

No hard-coded strings in components.

## Project Structure

```
src/
  app/
    api/contact/route.ts  # Node.js + Supabase
    layout.tsx / page.tsx
    globals.css
  components/
    Navbar, Hero, Hero3D, About, TechSphere, SkillsGrid,
    Projects, ProjectModal, Experience, EducationAndBuilding,
    Contact, ContactOrb, Footer, CustomCursor, LoadingScreen
  data/ site.ts projects.ts skills.ts experience.ts
  lib/ supabase.ts utils.ts
supabase.sql  # schema
```

## Performance

- Dynamic import for 3D (no SSR), lazy R3F
- Lenis smooth scroll (GPU-friendly)
- `prefers-reduced-motion` respected
- Tailwind purge, code-split, `transpilePackages: ["three"]`
- Mobile: reduced particles, no custom cursor, grid fallback for orb

## Deploy

Vercel (recommended): add env vars in dashboard → deploy. DB already on Supabase cloud.
