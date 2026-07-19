# Shivam Sharma — Portfolio

Personal portfolio for Shivam Sharma, a 2025 AI & Data Science grad who ships SaaS products solo using AI-assisted development.

Live site: _coming soon_ (deployed via Vercel)

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Email:** Resend (contact form)
- **Icons:** lucide-react
- **Fonts:** Next/font (serif + mono pairing)

## Features

- Editorial-style hero with staggered line reveal
- Three featured SaaS projects (ResearchOps AI, PitchDeck Studio, ContentPilot)
- Skills matrix grouped by category
- About section with formatted fact sheet
- Contact form with server-side validation + email delivery via Resend
- Warm charcoal + gold design system, film grain texture, subtle ambient gradients
- Fully responsive, accessible, no third-party UI kit bloat

## Getting started

```bash
# Install
bun install    # or: npm install

# Set env vars
cp .env.example .env
# Fill in RESEND_API_KEY and CONTACT_* values

# Run dev server
bun run dev    # or: npm run dev
# Open http://localhost:3000
```

## Environment variables

See [.env.example](./.env.example) for the full list. Required for production:

| Var | Purpose |
|-----|---------|
| `RESEND_API_KEY` | Resend API key for email delivery |
| `CONTACT_RECIPIENT_EMAIL` | Inbox that receives contact form submissions |
| `CONTACT_FROM_EMAIL` | Sender address (use `onboarding@resend.dev` on free tier) |

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Homepage composition
│   ├── globals.css       # Design system, gradients, grain
│   └── api/contact/      # Resend-powered contact endpoint
└── components/
    └── portfolio/
        ├── nav.tsx
        ├── hero.tsx
        ├── projects.tsx
        ├── skills.tsx
        ├── about.tsx
        ├── contact.tsx
        └── footer.tsx
```

## Deploy

This site is built for Vercel. Push to GitHub, import the repo at
[vercel.com/new](https://vercel.com/new), set env vars, and ship.

```bash
# Build locally to verify
npm run build

# One-shot deploy script (requires VERCEL_TOKEN)
VERCEL_TOKEN=vercel_xxx bash scripts/deploy-vercel.sh
```

## Contact

Shivam Sharma — [@shivamsharma-3](https://github.com/shivamsharma-3) — shivamsharma4c@gmail.com
