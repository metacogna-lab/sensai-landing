# sensai-landing

## Two apps in one repo

| Layer | Directory | Stack | Notes |
|-------|-----------|-------|-------|
| **Production site** | `app/`, `components/`, `lib/`, `hooks/`, `styles/` | Next.js 15 (App Router), Tailwind v4, motion, shadcn/ui | Deployed to Cloudflare Workers via `@opennextjs/cloudflare` |
| **Scratch playground** | `src/` | `Bun.serve()` + React 19 | Excluded from Next.js tsconfig — not part of production |

## Commands

| Command | What it actually does |
|---------|----------------------|
| `npm run dev` | Starts the Bun scratch app (`localhost:3000`). **NOT Next.js.** Requires `bun` installed locally. |
| `npm run preview` | `wrangler dev` — local Cloudflare Workers preview. Only way to test Next.js locally. |
| `npm run build` | `next build` — builds Next.js for production |
| `npm run cf:build` | `npx @opennextjs/cloudflare build` — Full OpenNext Cloudflare build |
| `npm run deploy` | `npx @opennextjs/cloudflare deploy` — Deploys to Cloudflare Workers |
| `npm run clean` | `rm -rf .next .open-next` — clean build artifacts |
| `npm test` | No tests exist yet. |
| `npm install` | Install deps (canonical lockfile: `package-lock.json`) |

## Gotchas

- **`src/` is excluded** from Next.js (`tsconfig.json` `"exclude"`: `["node_modules", "src", "dist"]`). Do not edit `src/` for production work.
- **No `next dev`** script exists. The Next.js site cannot run locally via dev server — only via `wrangler dev` or deploy.
- **No CI/CD** — no `.github/`, no workflows.
- **HubSpot env vars** (`HUBSPOT_PORTAL_ID`, `HUBSPOT_FORM_ID` in `.env.example`) are optional — contact API degrades gracefully.
- **`_headers`** in `public/` sets 1-year immutable cache for `/_next/static/*`.
- Never use bare `wrangler deploy` with a `[site]` block — causes `workers-site/index.js` not found errors.
- **Package manager is `npm`**, not bun. `bun.lock` removed — `package-lock.json` is canonical. The `.cursor/rules/` and `CLAUDE.md` advocating bun were removed for consistency.
