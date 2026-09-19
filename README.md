# Babysitting with Carmen

One-page marketing site for **Carmen Maybee** — warm, trustworthy babysitting in **Lynchburg, VA and nearby communities**. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4317](http://127.0.0.1:4317).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub (or connect your git provider in Vercel).
2. In [Vercel](https://vercel.com/new), import the repository.
3. **Suggested project name:** `carmen-childcare` (yields `carmen-childcare.vercel.app`).
4. Framework preset: **Next.js** — defaults are fine; no env vars required.
5. Deploy. Production URL: **https://carmen-childcare.vercel.app**

### Flyer / print URL line

- **Website:** `carmen-childcare.vercel.app` (from `FLYER_WEBSITE_LINE` in `src/lib/site-config.ts`)

To change the public URL everywhere in one place, edit:

- `src/lib/site-config.ts` — update `PRODUCTION_HOST` to match your Vercel subdomain (or custom domain).

## Customize content

| What | Where |
|------|--------|
| Phone, flyer line, nav | `src/lib/site-config.ts` |
| Page copy & sections | `src/app/page.tsx` |
| Photos | JPEG files in `public/photos/` (`reading-time`, `playroom`, `outdoors`, `craft-table`); paths in `PHOTOS` in `page.tsx` |
| Reference quotes | `REFERENCES` array in `src/app/page.tsx` |

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui

No authentication or database.
