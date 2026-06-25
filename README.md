# Rajneesh Kumar — Portfolio

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui primitives, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Features

- ⌘K / Ctrl+K command palette (navigation, contact links, theme switch)
- Dark mode by default, toggle in navbar (next-themes)
- Fully responsive, keyboard-accessible, respects prefers-reduced-motion
- Content sourced from `src/data/profile.ts` — edit this file to update the site

## Add your resume PDF

Drop a `resume.pdf` into `/public` — the command palette already links to `/resume.pdf`.

## Structure

```
src/
  app/                 # App router: layout.tsx, page.tsx, globals.css
  components/
    layout/            # Navbar, command palette, theme toggle
    sections/          # Hero, Experience, Projects, Skills, Case Studies, Contact
  data/profile.ts       # Single source of truth for all content
  lib/utils.ts          # cn() helper
```
