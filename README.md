# nick.me — Personal Site

Personal website for **Nicholas Kwaku Akakpo** — entrepreneur, builder, designer, and leader.

Live at [nick.me](https://nick.me) (Hostinger).

> This repo is separate from [TradersBook](https://github.com) — it covers Nicholas's personal brand, background, businesses, and portfolio.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router, static export)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
```

Static files are output to the `out/` directory, ready for any static host.

## Deploy to Hostinger (nick.me)

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Upload `out/` contents** to your Hostinger public_html folder (or the document root for nick.me) via File Manager or FTP.

3. **Point the domain** — In Hostinger hPanel, ensure `nick.me` DNS points to your hosting plan and the domain is attached to the correct site folder.

4. **Optional: GitHub deploy** — Push this repo to GitHub (`nick-me`). You can connect Hostinger Git deployment or use a GitHub Action to build and upload on each push.

## Project structure

```
src/
  app/           # Pages and global styles
  components/    # UI sections (Hero, About, Businesses, etc.)
  data/site.ts   # All site content — edit here to update copy
```

## Content updates

All text, links, and section data live in `src/data/site.ts`. Update that file to change copy without touching components.

## License

Private — all rights reserved.
