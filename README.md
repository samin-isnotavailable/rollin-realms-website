# Rollin Realms Website

Vite + React + TypeScript + Tailwind CSS v4. Static site, no backend.
Images live on Cloudflare R2 (`MEDIA_BASE_URL` in `src/data/content.ts`).

## Run locally
```bash
npm install
cp .env.example .env.local   # then fill in the key (see below)
npm run dev
```

## Booking form -> email
The form posts to [Web3Forms](https://web3forms.com), which emails each submission to your inbox.

1. Go to web3forms.com, enter the email that should receive bookings, and confirm it.
   You'll get an **access key** by email.
2. Put it in `.env.local` as `VITE_WEB3FORMS_KEY=...` (local) and in Vercel (production).
3. Submit the form once and check your inbox (and spam folder the first time).

Notes: the key ends up in the public JS bundle. That is normal for Web3Forms
(it can only send mail to your inbox). A hidden honeypot field blocks most bots.
Change the recipient later in the Web3Forms dashboard, no code change needed.

## Deploy (Vercel)
1. Push the repo to GitHub.
2. vercel.com -> Add New Project -> pick the repo. Vercel detects Vite automatically
   (build: `npm run build`, output: `dist`).
3. Add `VITE_WEB3FORMS_KEY` under Environment Variables **before** deploying
   (Vite reads it at build time; if you add it later, redeploy).
4. Deploy, then connect your custom domain under Settings -> Domains.

## Editing content
All text, image URLs and lists are in `src/data/content.ts`. Upload new images to R2
with the same filenames to replace them without touching code.

## Scripts
- `npm run dev`: dev server
- `npm run build`: production build into `dist/`
- `npm run preview`: serve the built site locally
- `npm run lint`: type check
