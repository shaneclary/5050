# 50/50 For All

Awareness site for extending California's 50/50 sports raffle framework (Penal Code 320.6)
to all California nonprofits currently stuck under the 90% rule (Penal Code 320.5).

**Status:** Phase 1 deployed — static landing, data, letter, about, press pages.
**Not deployed yet:** petition form, endorsement form, admin moderation (Phase 2).

## Stack

- Next.js 15 (App Router) on Vercel
- React 19
- Tailwind CSS v4
- Recharts for data viz
- Supabase (shared with mothership instance, `fiftyfifty` schema) — Phase 2
- Resend (email verification) — Phase 2

## Run locally

```bash
npm install
cp .env.local.example .env.local  # fill in values
npm run dev                        # http://localhost:3457
```

## Deploy

Connect this repo to Vercel. Set the same env vars from `.env.local.example` in Vercel
project settings. No special build commands — default Next.js build works.

## Data sources

- **Sports raffle figures** (`src/lib/data.ts`): compiled from individual 50/50 raffle
  reports filed with the CA Bureau of Gambling Control, 2016–2024. Raw PDFs live in the
  sibling research directory at `../5050forall/pdfs_5050/`.
- **90% rule claims**: CA AG's 2003 report is the only published aggregate. IRS 990
  sample analysis is in the sibling `../5050forall/` research directory.

## Project layout

```
src/
  app/
    page.tsx            landing
    letter/             open letter to Sen. Dodd
    about/              mission, FAQ
    data/               interactive 50/50 data + charts
    press/              press kit
  components/           shared React components
  lib/
    data.ts             baked-in raffle data
    utils.ts            cn() helper
```

## Phase 2 (pending)

- `fiftyfifty.petition_signers`, `fiftyfifty.newsletter_subscribers`,
  `fiftyfifty.nonprofit_endorsements` tables in shared Supabase
- `/sign` — petition form with Resend double opt-in
- `/endorse` — nonprofit endorsement form (moderated)
- `/endorsements` — public list of endorsing nonprofits
- `/admin` — Supabase-auth-gated moderation queue
