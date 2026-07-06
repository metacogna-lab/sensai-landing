# sensai-landing

## Two apps in one repo

| Layer | Directory | Stack | Notes |
|-------|-----------|-------|-------|
| **Production site** | `app/`, `components/`, `lib/`, `hooks/`, `styles/` | Next.js 15 (App Router), Tailwind v4, motion, shadcn/ui | Deployed to Cloudflare Workers via `@opennextjs/cloudflare` |
| **Scratch playground** | `src/` | `Bun.serve()` + React 19 | Excluded from Next.js tsconfig — not part of production |

## Commands

| Command | What it actually does |
|---------|----------------------|
| `bun run dev` | Starts the Bun scratch app (`localhost:3000`). **NOT Next.js.** |
| `bun run preview` | `wrangler dev` — local Cloudflare Workers preview. Only way to test Next.js locally. |
| `bun run build` | `next build` — builds Next.js for production |
| `bun run cf:build` | `npx @opennextjs/cloudflare build` — Full OpenNext Cloudflare build |
| `bun run deploy` | `npx @opennextjs/cloudflare deploy` — Deploys to Cloudflare Workers |
| `bun run clean` | `rm -rf .next .open-next` — clean build artifacts |
| `bun test` | No tests exist yet. Framework: `bun:test` |
| `bun install` | Install deps (canonical lockfile: `bun.lock`) |

## Gotchas

- **`src/` is excluded** from Next.js (`tsconfig.json` `"exclude"`: `["node_modules", "src", "dist"]`). Do not edit `src/` for production work.
- **No `next dev`** script exists. The Next.js site cannot run locally via dev server — only via `wrangler dev` or deploy.
- **No CI/CD** — no `.github/`, no workflows.
- **HubSpot env vars** (`HUBSPOT_PORTAL_ID`, `HUBSPOT_FORM_ID` in `.env.example`) are optional — contact API degrades gracefully.
- **`_headers`** in `public/` sets 1-year immutable cache for `/_next/static/*`.
- Never use bare `wrangler deploy` with a `[site]` block — causes `workers-site/index.js` not found errors.

## Existing instruction files

- `CLAUDE.md` — generic Bun-over-Node.js guidance (applies broadly but not repo-specific)
- `.cursor/rules/use-bun-instead-of-node-vite-npm-pnpm.mdc` — identical copy
