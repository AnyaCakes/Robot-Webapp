# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

A static, client-only web app for a middle school robotics camp. It covers two kinds of projects, both ending in the same result view: copy/download buttons plus a wiring diagram and plain-language explanation for a finished `.ino` sketch.

- **Robot Car** — a student picks a sensor (ultrasonic, IR, etc.) and a behavior (obstacle avoidance, etc.); the app finds the matching pre-written template for that exact pair.
- **General Projects** — standalone Arduino sketches that aren't part of the robot car (e.g. blinking an LED). No pairing involved; the student picks one project directly.

Either way, the student can tweak a couple of parameters before the code is generated.

No backend, no database, no API routes. Everything — including matching and parameter substitution — runs in the browser. The site is built with `output: 'export'` and deployed as static files to GitHub Pages.

## Commands

- `npm run dev` — dev server. Because `basePath` is set, the app is served at `http://localhost:3000/Robot-Webapp/` (not the bare root).
- `npm run build` — type-checks and produces the static export in `out/` (this *is* the production build; there is no separate server build).
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next`).
- To preview the production build locally, serve the `out/` folder with any static file server (e.g. `npx serve out`) — `next start` does not apply here since `output: 'export'` produces no server bundle.
- There is no test runner configured yet.

## Architecture

### The `content/` vs `src/` boundary is the load-bearing rule

- `content/` is pure data: sensors, behaviors, robot-car code templates, and general projects, each as one file per item plus an `index.ts` that exports the full array for that folder.
- `src/` is generic engine code that reads from `content/` and must never hardcode or branch on a specific sensor/behavior/template/project id or name. It may branch on *kind* of content (e.g. "was a `project` id or a `sensor`+`behavior` pair selected?"), since that's a structural distinction between the two content shapes, not a specific item.
- Adding a new sensor, behavior, robot-car template, or general project should only ever require adding one file under `content/` and one line in that folder's `index.ts`. If a change to `src/` seems necessary to support new content, that's a signal the content/engine boundary is being violated — reconsider before doing it.
- The one existing robot-car template (`content/templates/ultrasonic__obstacle-avoidance.ts`) is the reference vertical slice to copy when adding new sensor/behavior combinations. `content/generalProjects/led-blink.ts` is the reference for a new standalone general project.

### Matching and rendering pipeline

1. `src/app/page.tsx` — client component with two sections. **Robot Car** lets the student pick a sensor and behavior via `ItemSelector`, then navigates to `/result?sensor=<id>&behavior=<id>`. **General Projects** lets the student pick one project via `ItemSelector`, then navigates to `/result?project=<id>`. `ItemSelector` is a single generic radio-list component (reused for sensors, behaviors, and general projects — anything with `id`/`name`/`description`), not one component per content type.
2. Selection is passed as **query params, not a dynamic route segment** (`/result/[sensor]/[behavior]`), because a static export with no server can't resolve arbitrary dynamic params at request time. `src/app/result/page.tsx` wraps `ResultContent.tsx` in `<Suspense>` because `useSearchParams()` requires that boundary in a statically exported app.
3. `ResultContent.tsx` reads `project` (general project flow) or `sensor`+`behavior` (robot car flow) from `useSearchParams()` and resolves whichever is present into one common shape, via `findGeneralProject(id)` or `findTemplate(sensorId, behaviorId)` from `src/lib/templateEngine.ts`. Both are flat `Map` lookups — `findTemplate` keyed by `` `${sensorId}__${behaviorId}` `` (exact-pair only), `findGeneralProject` keyed by the project's own id.
4. Parameter values are held in local React state, seeded from each `TemplateParameter.defaultValue`. `substituteParameters()` in `templateEngine.ts` does plain `{{token}}` → value replacement (`String.replaceAll`, no regex) over the raw `.ino` template string on every state change.
5. The result is handed to `CodeViewer` (copy-to-clipboard), `DownloadButton` (saves as `.ino` via a Blob), and `WiringDiagram` (renders a wiring image + pin table — takes plain `name`/`wiringImage`/`pins` props, not a `Sensor`, so it works for both sensors and general projects).
6. Shared shapes for all of the above live in `src/lib/types.ts` (`Sensor`, `Behavior`, `TemplateParameter`, `CodeTemplate`, `GeneralProject`).

### GitHub Pages basePath

- `src/lib/basePath.ts` is the single source of truth for the deployed subpath. `next.config.ts` imports it to set `basePath`; anything rendering a `public/` asset by absolute path (e.g. `sensor.wiringImage`) must go through `withBasePath()` from that file, since Next.js does **not** auto-prefix a raw `<img>`/`<Image>` `src` string with `basePath` the way it does for `next/link` and the router.
- When the real GitHub repo name is known, update the `basePath` constant in that one file — nothing else needs to change.
- `images.unoptimized: true` and `trailingSlash: true` are both required for the export to work correctly on GitHub Pages (the latter so `/result` emits `result/index.html` rather than `result.html`).

### Path aliases

- `@/*` → `src/*`
- `@content/*` → `content/*`
