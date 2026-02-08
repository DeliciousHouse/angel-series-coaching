# Angel Series Coaching

Production-ready marketing, booking, and payment site for Angel Series Coaching.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content editing

- Blog posts: `content/blog/*.mdx`
- Testimonials: `content/testimonials/testimonials.json`
- FAQ: `content/faq/faq.json`
- Events: `content/events/events.json`
- Downloads metadata: `content/resources/downloads.json`
- Downloadable files: `public/downloads`

## Stripe setup

1. Create products/prices in Stripe for each tier.
2. Set these env vars in `.env.local`:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `STRIPE_PRICE_111`
   - `STRIPE_PRICE_222`
   - `STRIPE_PRICE_333`
3. For paid events, set `stripePriceEnv` in `content/events/events.json` and add
   the corresponding price IDs in `.env.local`.
4. Webhook endpoint: `/api/stripe/webhook`

## Resend / SMTP email

Preferred: Resend
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`

Fallback: SMTP (used when Resend is not set)
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_SECURE`
- `SMTP_FROM_EMAIL`

Admin notifications:
- `ADMIN_EMAIL`

## Scheduler embed

Add your scheduler URL (Calendly or Cal.com):
- `NEXT_PUBLIC_SCHEDULER_EMBED_URL`

If not set, the booking page shows a contact CTA.

## Docker

```bash
docker compose up --build
```

The app will be available at `http://localhost:3000`.

## Scripts

- `npm run dev` - development server
- `npm run build` - production build
- `npm start` - start production server
- `npm run lint` - lint
- `npm run typecheck` - TypeScript check
