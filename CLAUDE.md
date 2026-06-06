# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 (via `@tailwindcss/postcss`) · pnpm. Path alias `@/*` resolves to the repo root.

## Commands

- `pnpm dev` — start dev server on http://localhost:3000
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next/core-web-vitals` + `/typescript`)

There is no test suite configured.

## Architecture

### Content-as-config (the central pattern)

**All page copy, CTAs, image paths, and structural lists live in `data/site-data.ts`** as named exports (`HERO`, `WHO_WE_ARE`, `WHAT_WE_DO`, `FAQ`, `FOOTER`, `VISION_MISSION_VALUES`, `OUR_TEAM`, `MEASURE_LASTING_CHANGE`, etc.). Page files under `app/<route>/page.tsx` import these and spread them into matching presentational components in `components/sections/`. Example: `app/page.tsx` composes `<Hero {...HERO} />`, `<WhoWeAre {...WHO_WE_ARE} />`, … from `site-data.ts`.

Consequences:
- For copy/image/CTA edits, change `data/site-data.ts` — do not hardcode strings or paths inside components. `CONTENT-GUIDE.md` documents the editable shape of each config object for non-developer edits.
- Section components should accept the shape of their config object as props and stay presentational. New homepage-style sections follow the same pattern: add a named export to `site-data.ts`, a component in `components/sections/`, then wire them up in the page.
- Images live under `public/assets/<Section>/…` and are referenced by string path from `site-data.ts`.

### Layout

`app/layout.tsx` renders `Navbar` (`components/layouts/Navbar.tsx`) and `Footer` (`components/layouts/Footer.tsx`, fed `FOOTER` from `site-data.ts`) around every page. The Geist Sans/Mono fonts are loaded via `next/font/google` and exposed as CSS variables. Global styles are in `app/globals.css`.

Use `cn()` from `lib/utils.ts` (clsx + tailwind-merge) for conditional Tailwind classes.

### Donations pipeline

Two payment providers behind one form (`components/donate/DonationForm.tsx`) used by `app/donate/page.tsx`:

- **Paystack** (default for NGN) and **Flutterwave** (cards/USD). Provider logic lives in `lib/payment/paystack.ts` and `lib/payment/flutterwave.ts`. Shared types and `PRESET_AMOUNTS` / `CURRENCY_SYMBOLS` are in `lib/donate-types.ts`.
- API routes under `app/api/donate/`:
  - `initialize/route.ts` — validates the request, dispatches to the provider's init function, returns a reference + access code / payment link.
  - `verify/route.ts` — confirms a transaction after redirect.
  - `webhooks/paystack/route.ts` and `webhooks/flutterwave/route.ts` — server-to-server notifications.
- Confirmation + contact emails are sent via ZeptoMail through `lib/payment/email.ts`.
- `app/api/contact/route.ts` handles the contact form using the same ZeptoMail client.

Monetary amounts are passed to providers in the smallest unit (kobo/cents — see `paystack.ts`). New currencies require updates to both `donate-types.ts` (`Currency`, presets, symbols) and the validation block in `app/api/donate/initialize/route.ts`.

### Required environment variables

Defined in `.env.local` (gitignored):

- `PAYSTACK_SECRET_KEY`, `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
- `FLUTTERWAVE_SECRET_KEY`, `NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY`, `FLUTTERWAVE_WEBHOOK_HASH`
- `ZEPTOMAIL_API_TOKEN`

The `NEXT_PUBLIC_*` keys are returned from `initialize/route.ts` to the client to bootstrap the provider SDK loaded by `components/donate/PaymentScripts.tsx`.

### Routes

Each top-level folder under `app/` is a route (`about`, `our-story`, `our-work`, `gallery`, `faqs`, `contact`, `donate`, `partner`, `support`, `careers`, `internships`). `app/not-found.tsx` is the 404. Most pages are server components that read from `site-data.ts`; interactive pieces (donation form, gallery lightbox at `components/gallery/ImageLightbox.tsx`) are client components.
