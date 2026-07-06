# Sensai Studio Landing

Marketing site for Sensai Studio, built with Next.js and deployed to Cloudflare via OpenNext.

## Setup

```bash
npm install
```

Copy environment variables for local development:

```bash
cp .env.example .env.local
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cloudflare Pages / Workers

This project uses [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare) to build and deploy the Next.js App Router to Cloudflare.

### Preview locally (Workers runtime)

```bash
npm run preview
```

### Deploy

```bash
npm run deploy
```

### Git-connected deploys (Cloudflare Pages)

In the Cloudflare dashboard, connect this repository and use:

| Setting | Value |
|---------|-------|
| Framework preset | None |
| Build command | `npx opennextjs-cloudflare build` |
| Build output directory | `.open-next` (managed by OpenNext) |

For Workers-style CLI deploys, `npm run deploy` runs the full OpenNext build and `wrangler deploy`.

Set production secrets in the Cloudflare dashboard (or via `wrangler secret put`):

- `HUBSPOT_PORTAL_ID`
- `HUBSPOT_FORM_ID`
