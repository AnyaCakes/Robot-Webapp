Robot Code Builder — a static web app for a middle school robotics camp. Students pick a sensor and a behavior, and get a matching Arduino sketch they can tweak, copy, or download.

## Getting Started

```bash
npm run dev
```

Because the app is configured with a GitHub Pages `basePath`, open [http://localhost:3000/Robot-Webapp/](http://localhost:3000/Robot-Webapp/) (not the bare root).

## Building for deployment

```bash
npm run build
```

This produces a static export in `out/`, ready to publish to GitHub Pages. Update the `basePath` constant in `src/lib/basePath.ts` to match the actual repo name before deploying.

See `CLAUDE.md` for the project architecture.
