# Cloudflare Deployment

This project deploys to **Cloudflare Workers** (with static Assets) via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare) and [`wrangler.jsonc`](wrangler.jsonc).

## Architecture

`@opennextjs/cloudflare@1.x` targets **Cloudflare Workers + Assets**, not Cloudflare Pages.

| File | Purpose |
|------|---------|
| `.open-next/worker.js` | SSR Worker entry point — wrangler bundles this on deploy |
| `.open-next/assets/` | Static files served by the `ASSETS` binding |

## Cloudflare dashboard setup (git-connected Worker)

In **Workers & Pages → Create application → Workers**:

| Setting | Value |
|---------|-------|
| Build command | `npm run cf:build` |
| Deploy command | `npx wrangler deploy` (or leave empty and use CLI deploy) |
| Node.js version | 22 (set `NODE_VERSION=22` in project env vars) |

> **If you have an existing Pages project**: you must delete it and create a new Worker project, or migrate by going to the project settings and switching to Workers format. Cloudflare Pages with `pages_build_output_dir` is incompatible with `@opennextjs/cloudflare@1.x`.

## CLI deploy (recommended for first deploy)

```bash
npm install
npm run cf:build        # Next.js build → OpenNext bundle
npx wrangler deploy     # Bundle worker and push to Cloudflare
```

Or in one step:

```bash
npm run deploy          # runs opennextjs-cloudflare deploy (= cf:build + wrangler deploy)
```

## Local preview (Cloudflare Workers runtime)

```bash
npm run preview         # wrangler dev
```

## Environment variables

Set via the Cloudflare dashboard (Workers → Settings → Variables) or `npx wrangler secret put`:

| Variable | Notes |
|----------|-------|
| `HUBSPOT_PORTAL_ID` | Optional — contact form degrades gracefully without it |
| `HUBSPOT_FORM_ID` | Optional |

## Verify build locally

```bash
npm run clean
npm run cf:build
ls .open-next/worker.js .open-next/assets/
```
