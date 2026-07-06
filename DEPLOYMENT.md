# Cloudflare Deployment

This project deploys to Cloudflare via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare) and [`wrangler.jsonc`](wrangler.jsonc).

## Do not use Workers Sites

Never add a `[site]` block to Wrangler config. That legacy pattern makes `wrangler deploy` look for `workers-site/index.js` and fails with:

```
The entry-point file at "workers-site/index.js" was not found.
```

Use **OpenNext** output (`.open-next/worker.js`) instead.

## Cloudflare Pages dashboard (Git-connected)

| Setting | Value |
|---------|-------|
| Framework preset | None |
| Build command | `npm run cf:build` or `npx opennextjs-cloudflare build` |
| Build output directory | *(leave empty — OpenNext manages output)* |
| Deploy command | *(empty)* or `npx opennextjs-cloudflare deploy` |

**Do not** set deploy command to bare `wrangler deploy` without running `opennextjs-cloudflare build` first.

## CLI deploy

```bash
npm install
npm run deploy
```

This runs `opennextjs-cloudflare build` then `opennextjs-cloudflare deploy` using [`wrangler.jsonc`](wrangler.jsonc).

## Local preview (Workers runtime)

```bash
npm run preview
```

## Environment variables

Set in the Cloudflare dashboard (or `wrangler secret put`):

- `HUBSPOT_PORTAL_ID` (optional)
- `HUBSPOT_FORM_ID` (optional)

## Verify build locally

```bash
npm run clean
npm run cf:build
ls .open-next/worker.js .open-next/assets
```
