# SODAG

A community site where every contributor gets their own profile page. Built with React, Vite, Tailwind CSS v4 and React Router.

## Run it locally

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (production build), `npm run lint`, `npm run preview`.

## How it works

- Each file in `src/contributors/` is one person. `omkar.json` becomes the page `/omkar`.
- The home page lists every profile automatically, sorted by name.
- Routes live in `src/App.jsx` (React Router). Adding a profile never requires touching them.
- Files starting with `_` (such as `_template.json`) are ignored.

## Add your profile

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Deploying

The site is a single-page app, so the host must serve `index.html` for unknown paths. `vercel.json` (Vercel) and `public/_redirects` (Netlify, Cloudflare Pages) already do this.


# end to end student attendance management system