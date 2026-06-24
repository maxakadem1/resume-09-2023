# Maxim Abdulkhalikov Portfolio

<img width="1392" height="1215" alt="image" src="https://github.com/user-attachments/assets/8237fb82-efa9-4c0d-9d87-db71a9c031e4" />


A personal portfolio and resume website for Maxim Abdulkhalikov. The app
showcases professional experience, project case studies, artwork, contact links,
and an embedded resume PDF.

The site is built as a small static-friendly Next.js application with App Router
routes, Tailwind styling, animated section transitions, and locally hosted media
assets.

## Tech Stack

- Next.js 16 App Router
- React
- TypeScript
- Tailwind CSS
- React Spring for panel transitions
- React Icons for navigation and external-link indicators
- React GA4 for page-view analytics

## Features

- Minimal single-screen home experience with animated background media.
- Interactive content panels for experience, projects, about, and contact.
- Standalone project pages with image galleries.
- Embedded PDF resume route.
- Open Graph and Twitter metadata using `public/Header.png`.
- GA4 page-view tracking.
- ESLint configured for Next.js and TypeScript.

## Routes

| Route                    | Purpose                                  |
| ------------------------ | ---------------------------------------- |
| `/`                      | Home page and interactive portfolio menu |
| `/resume`                | Embedded `public/Resume.pdf` viewer      |
| `/projects/artwork`      | Personal artwork gallery                 |
| `/projects/devclub`      | UofM DevClub project page                |
| `/projects/musica`       | Musica project page                      |
| `/projects/musicAnimals` | Music Animals project page               |
| `/projects/packetvis`    | PacketVis project page                   |

## Project Structure

```text
.
├── analytics.ts
├── public/
│   ├── Resume.pdf
│   ├── Header.png
│   ├── GlassBlocks2.webm
│   ├── GlassBlocks2.mp4
│   ├── glassDonuts.webm
│   ├── glassDonuts.mp4
│   └── project image folders
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── resume/page.tsx
│   │   └── projects/*/page.tsx
│   └── components/
│       ├── HomePage.tsx
│       ├── ProjectDetailPage.tsx
│       └── content section components
├── eslint.config.mjs
├── tailwind.config.ts
└── package.json
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                                     |
| --------------- | ----------------------------------------------- |
| `npm run dev`   | Starts the Next.js development server           |
| `npm run build` | Creates a production build and runs type checks |
| `npm run start` | Serves the production build                     |
| `npm run lint`  | Runs ESLint with zero warnings allowed          |

## Quality Checks

Run these before deploying or opening a pull request:

```bash
npm run lint
npm run build
npm audit --omit=dev
```

The project currently uses an npm `overrides` entry to keep PostCSS on a patched
version required by the dependency tree.

## Deployment

The app can be deployed to Vercel or any hosting provider that supports Next.js.
For production:

1. Set `NEXT_PUBLIC_SITE_URL` to the deployed URL.
2. Run `npm run lint`.
3. Run `npm run build`.
4. Deploy the generated Next.js application.
