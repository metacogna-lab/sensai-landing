# Cloudflare Deployment

This project deploys to Cloudflare via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare) and [`wrangler.jsonc`](wrangler.jsonc).

## Do not use Workers Sites

Never add a `[site]` block to Wrangler config. That legacy pattern makes `wrangler deploy` look for `workers-site/index.js` and fails with:

```
The entry-point file at "workers-site/index.js" was not found.
```

Use **OpenNext** output (`.open-next/worker.js`) instead.

## Cloudflare Pages dashboard (Git-connected)

The [`wrangler.jsonc`](wrangler.jsonc) file is the source of truth. Connect the repo to Cloudflare Pages with:

| Setting | Value |
|---------|-------|
| Framework preset | None |
| Build command | `npm run cf:build` |
| Build output directory | *(auto-detected from wrangler.jsonc)* |
| Deploy command | *(empty)* |

**Do not** set build command to bare `wrangler deploy` — always use the OpenNext pipeline.

## CLI deploy

```bash
npm install
npm run deploy
```

This runs `opennextjs-cloudflare build` then `opennextjs-cloudflare deploy` using [`wrangler.jsonc`](wrangler.jsonc). `wrangler.jsonc` defines the output directory (`.open-next/assets`) and compatibility settings.

## Local preview (Workers runtime)

```bash
npm run preview
```

## Environment variables

Set in the Cloudflare dashboard or `npx wrangler secret put`:

- `HUBSPOT_PORTAL_ID` (optional — contact form degrades gracefully)
- `HUBSPOT_FORM_ID` (optional)

## Verify build locally

```bash
npm run clean
npm run cf:build
ls .open-next/worker.js .open-next/assets
```
