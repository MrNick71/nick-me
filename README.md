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

### Automatic deploy on push (GitHub Actions)

Every push to `master` builds and deploys to Firebase Hosting automatically.

**One-time setup** — add a GitHub secret:

1. Open [Firebase Console → Project settings → Service accounts](https://console.firebase.google.com/project/mr-nick-4ebb3/settings/serviceaccounts/adminsdk)
2. Click **Generate new private key** and download the JSON file
3. In GitHub, go to **nick-me → Settings → Secrets and variables → Actions**
4. Click **New repository secret**
   - Name: `FIREBASE_SERVICE_ACCOUNT`
   - Value: paste the **entire contents** of the JSON file
5. Push to `master` — the [Deploy workflow](.github/workflows/deploy.yml) runs automatically

Check progress under the **Actions** tab on GitHub. Live site: [mr-nick.me](https://mr-nick.me)

### Manual deploy

```bash
npm run deploy
```

### Connect mr-nick.me (domain at Hostinger)

1. In **Firebase Console → Hosting → Add custom domain**, enter `mr-nick.me` (and optionally `www.mr-nick.me`).

2. Firebase will show **DNS records** to add (usually `A` records and a `TXT` record for verification).

3. In **Hostinger → Manage domain → DNS / Nameservers**, add those records for `mr-nick.me`. Keep any existing records Hostinger warns you about unless Firebase replaces them.

4. Wait for DNS propagation (often 15 minutes–48 hours). Firebase will provision SSL automatically.

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
