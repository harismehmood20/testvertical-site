# TestVertical — Static Vite Website

This project is a client-side React + Vite website. It does not require a server, SSR, TanStack Start, Nitro, or server functions.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages

The repository is configured for GitHub Pages under:

`https://harismehmood20.github.io/testvertical-site-updated_v3_added/`

Build it for GitHub Pages with:

```bash
npm run build:github
```

The GitHub build also creates `dist/404.html` so client-side routes continue to work when a page is refreshed.

## Netlify

Use:

- Build command: `npm run build`
- Publish directory: `dist`

No server functions are required for this static site.
