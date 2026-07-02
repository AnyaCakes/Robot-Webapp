// Update this when the GitHub Pages repo name is known — it must match the
// repo name exactly (e.g. a repo at github.com/you/robot-camp -> "/robot-camp").
// next.config.ts imports this same constant, so it only needs to change here.
export const basePath = "/Robot-Webapp";

// Absolute paths to files in public/ (e.g. wiring diagrams) are not
// automatically prefixed with basePath by Next.js, so anything that renders
// a public/ asset by path must run it through this first.
export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
