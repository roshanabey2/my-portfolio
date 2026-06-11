# Roshan Abeysekera Portfolio

A Next.js portfolio site with two presentation modes:

- `showcase`: glitch typography, matrix background, and cyber-styled cards.
- `minimal`: quieter serif typography and warmer card styling.

The selected mode is stored in `localStorage` as `siteMode`, so returning visitors keep the mode they chose on the splash screen.

## Stack

- Next.js 15 App Router
- React 18
- Tailwind CSS 4
- Sass
- Embla Carousel
- Framer Motion
- Playwright

## Getting Started

Install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open `http://localhost:3000`.

## Scripts

```bash
yarn dev
yarn build
yarn start
```

## Project Structure

- `src/app`: App Router pages and API routes.
- `src/components`: Reusable page sections and UI components.
- `src/context/ModeContext.js`: Global mode state and localStorage persistence.
- `src/constants`: Project data, writing fallbacks, theme constants, and default assets.
- `public`: Fonts, icons, avatars, and project screenshots.

## Writings And Substack

The writings page works without external services by rendering local fallback posts from `src/constants/writings.js`.

It can also consume a future Substack publication through RSS. Set this environment variable:

```bash
SUBSTACK_RSS_URL=https://your-publication.substack.com/feed
```

Then restart the server. The API route at `src/app/api/writings/route.js` will fetch the RSS feed, normalize recent posts, and fall back to local posts if the feed is unavailable.

In production, the feed request is cached with a one-hour revalidation window.

## Notes

- `/splash` is the mode picker.
- `/` renders the portfolio homepage.
- `/about`, `/writings`, and `/links` are secondary pages.
