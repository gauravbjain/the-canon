# The Canon

Long-form summaries of the hundred nonfiction books that have mattered most —
the core idea, how the argument runs, where it is contested, and what each one
connects to.

Live: _(add the Vercel URL once connected)_

## Adding a book

1. Create `content/books/<slug>.ts` exporting a `Book` (see `content/types.ts`).
2. Import it in `content/index.ts` and add it to the `books` array.
3. Commit and push. Vercel rebuilds; the route, cover, and shelf entry appear
   automatically.

Covers are generated from the slug — deterministic palette, typographic layout,
no image assets to manage.

## Local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static generation for every book
```

## Stack

Next.js (App Router), TypeScript, no runtime dependencies. Every page is
prerendered as static HTML.
