# mr-nick.me — Personal Site

Personal website for **Nicholas Kwaku Akakpo** — entrepreneur, builder, designer, and leader.

Live at [mr-nick.me](https://mr-nick.me) (Firebase Hosting).

> This repo is separate from TradersBook — it covers Nicholas's personal brand, background, businesses, and portfolio.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router, static export)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static files are output to the `out/` directory.

## Deploy to Firebase

### First-time setup

1. **Create a Firebase project** at [console.firebase.google.com](https://console.firebase.google.com) named `mr-nick-me` (or your preferred name).

2. **Enable Hosting** in the Firebase console (Build → Hosting → Get started).

3. **Log in and link the project**
   ```bash
   npx firebase login
   npx firebase use --add
   ```
   Select your Firebase project. Update `.firebaserc` if you used a different project ID.

4. **Deploy**
   ```bash
   npm run deploy
   ```
   Your site will be live at `https://<project-id>.web.app`.

### Connect mr-nick.me (domain at Hostinger)

1. In **Firebase Console → Hosting → Add custom domain**, enter `mr-nick.me` (and optionally `www.mr-nick.me`).

2. Firebase will show **DNS records** to add (usually `A` records and a `TXT` record for verification).

3. In **Hostinger → Manage domain → DNS / Nameservers**, add those records for `mr-nick.me`. Keep any existing records Hostinger warns you about unless Firebase replaces them.

4. Wait for DNS propagation (often 15 minutes–48 hours). Firebase will provision SSL automatically.

### Subsequent deploys

```bash
npm run deploy
```

## Project structure

```
src/
  app/           # Pages and global styles
  components/    # UI sections (Hero, About, Businesses, etc.)
  data/site.ts   # All site content — edit here to update copy
firebase.json    # Firebase Hosting config (serves the out/ folder)
```

## Content updates

All text, links, and section data live in `src/data/site.ts`. Update that file to change copy without touching components.

## License

Private — all rights reserved.
