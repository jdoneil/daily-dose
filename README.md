# Daily Perlman

A comic gallery web app built with React, TypeScript, Vite, and Tailwind CSS.

The app lets you browse comics, filter and search them, view full details, and save favorites locally.

## Features

- Browse comics in a responsive gallery.
- Filter comics by tags.
- Search comics by caption from the header search box.
- View comic detail pages with previous/next/random navigation.
- Save and remove favorites using local storage.
- Sort favorites by most recent, most viewed, or alphabetical.
- Use loading skeletons on Gallery and Favorites pages to reduce layout shift.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS v4

## Getting Started

### Prerequisites

- Node.js 20+ (or current LTS)
- npm

### Install

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## Scripts

- `npm run dev` — Start Vite dev server.
- `npm run build` — Type-check and build for production.
- `npm run preview` — Preview the production build locally.
- `npm run lint` — Run ESLint.

## Routes

- `/` — Gallery page
- `/comic/:id` — Comic details page
- `/favorites` — Favorites page

## Data and State

- Comic data is loaded from `src/data/comics-data.json`.
- Favorites are persisted in `localStorage` under:
  - `favorites` (array of comic ids)
  - `lastAdded` (ISO date string)

## Project Structure

```text
src/
  components/      # Shared UI components
  data/            # Static comic data
  hooks/           # Reusable hooks (favorites state)
  pages/
    Gallery/       # Gallery page + filters + skeleton
    Details/       # Comic details page
    Favorites/     # Favorites page + controls + skeleton
  utils/           # Utility helpers
```

## Notes

- This project currently uses mock loading (`setTimeout`) for loading states.
- Selected favorites export is scaffolded but not fully implemented.
