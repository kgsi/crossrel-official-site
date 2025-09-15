# Repository Guidelines

## Project Structure & Modules
- `src/pages/` public routes (`index.astro`, `events.astro`).
- `src/features/` feature-scoped layouts/components per page.
- `src/components/` shared UI (`*.astro`).
- `src/libs/` utilities (e.g., formatters).
- `src/content/` content collections via `src/content.config.ts`:
  - Events: `src/content/events/<slug>/{index.md,thumbnail.png}`
  - Staff: `src/content/staff/<handle>/{index.md,profile.jpg}`
  - Sponsors: `src/content/sponsors/<slug>/{index.md,thumbnail.png}`
- `public/` static assets copied as-is.
- Build output: `dist/`.

## Build, Test, and Development
- `pnpm dev` — Run Astro dev server with HMR.
- `pnpm build` — Production build to `dist/`.
- `pnpm preview` — Serve the production build locally.
- `pnpm astro check` — Type/diagnostic checks for `.astro`/TS.

## Coding Style & Naming
- Formatting: Prettier with `prettier-plugin-astro` (`.prettierrc.json`). Use single quotes, 100-char width, 2-space indent.
- Components: place shared in `src/components/` and feature-specific in `src/features/<feature>/components/`; use kebab-case filenames (e.g., `anchor-button.astro`).
- Content slugs: kebab-case folder names (e.g., `r35-okinawa`).
- TypeScript: strict config extends `astro/tsconfigs/strictest`.
- CSS: Tailwind (`tailwind.config.mjs`), prefer utility classes over custom CSS.

## Testing Guidelines
- No unit test framework is configured. Validate changes by:
  - `pnpm astro check` and TypeScript diagnostics.
  - Local run (`pnpm dev`) and visual verification.
  - For content, ensure schema fields match `content.config.ts`.

## Commit & Pull Requests
- Commit messages: short, imperative. Prefer Conventional Commits when practical:
  - Examples: `feat: add new event page`, `fix: correct header title`.
- PRs should include:
  - Summary of changes and rationale.
  - Linked issue (if any).
  - Screenshots/GIFs for UI changes (desktop and mobile).
  - Notes on content model updates and any migration steps.
- Before opening a PR: run `pnpm build` and fix warnings.

## Environment & Tooling
- Node: use version in `.node-version` (22.14.0). Package manager: `pnpm` (see `package.json`).
- Domain config lives in `astro.config.mjs` (`site` field). Avoid committing secrets; place static assets under `public/` or content collections.
