# LiveHindustan - Front Page Clone (Next.js)

This is a simplified clone of the LiveHindustan front page built with Next.js.

Quick start

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

Notes

- Uses `getStaticProps` with ISR (`revalidate: 60`) for the home page.
- Mock data is in `/data/articles.json`.
- Dynamic article pages at `/article/[id]`.
- Uses Next.js `Image` for optimized images. Add allowed domains in `next.config.js` if fetching external images.

App Router & API proxy

- This project now includes the Next.js App Router under `app/` and a small API proxy at `/api/news`.
- If you add `NEWSAPI_KEY` to `.env.local`, the proxy will fetch live headlines from NewsAPI.org. Otherwise it falls back to `data/articles.json`.

Tests

- Run tests with:

```bash
npm install
npm test
```

The test suite includes a simple test for the client-side fetch component which validates loading skeletons and rendering.
