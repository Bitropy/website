# Blog Feature — Design Spec

**Date:** 2026-07-20
**Status:** Approved (design), pending implementation plan
**Site:** bitropy-website (Astro 5, `output: "server"`, Vercel adapter, Tailwind v4 + typography plugin)

## Goal

Ship a working blog on the marketing site. Blog scaffolding from the original
Astroship template exists but is deliberately disabled (dynamic routes redirect
to `/`, the content collection is empty, the nav link is commented out, and
`/blog/` is excluded from the sitemap). This feature re-activates and rebuilds
the blog so it matches the current redesigned site rather than the template.

## Scope

**In v1:**
- `/blog` index listing published posts (newest first), as text cards.
- `/blog/<slug>` individual post pages rendering MDX.
- `/rss.xml` RSS feed.
- Author + date byline on posts and cards.
- One seed post (real content).
- Nav link + sitemap inclusion + RSS `<link>` in head.

**Explicitly out of v1** (deferred, not designed here):
- Cover images (dropped).
- Category/tag display and filter pages.
- Pagination.
- Author bio pages, related posts, reading time.

## Architecture & Routing

All blog pages are **prerendered**: each page file sets `export const prerender = true`.
The site runs `output: "server"`, so without this flag `getStaticPaths` is
ignored and routes resolve at request time. Blog content is build-time MDX, so
static prerendering is correct.

| Route        | File                                   | Action  |
|--------------|----------------------------------------|---------|
| `/blog`      | `src/pages/blog.astro`                 | Rewrite |
| `/blog/<slug>` | `src/pages/blog/[slug].astro`        | Rewrite (remove the `Astro.redirect("/")` stub) |
| `/rss.xml`   | `src/pages/rss.xml.ts`                 | New     |
| `/blog/[...page]` | `src/pages/blog/[...page].astro`  | Delete (no pagination) |

## Content Schema (`src/content.config.ts`)

Keep the existing `blog` collection (glob loader over
`src/content/blog/**/*.{md,mdx}`). Change: make `image`, `category`, and `tags`
**optional** — they are retained for future features but not required or shown
in v1, so authors are not forced to populate them.

Final schema:
- `draft: z.boolean()`
- `title: z.string()`
- `snippet: z.string()`
- `publishDate: z.string().transform((str) => new Date(str))`
- `author: z.string().default("Bitropy")`
- `image: z.object({ src: z.string(), alt: z.string() }).optional()`
- `category: z.string().optional()`
- `tags: z.array(z.string()).optional()`

## Publish Filtering

Both the index and the RSS feed show a post only when
`!data.draft && data.publishDate <= new Date()`. Posts are sorted by
`publishDate` descending.

## Pages & Components

### `src/pages/blog.astro` (index)
- `export const prerender = true`.
- `getCollection("blog", ...)` with the publish filter, sorted newest first.
- Wrapped in `Layout` + `Container`, headed by `Sectionhead`
  (title "Blog", short desc).
- Each post is a text card: title (Bricolage Grotesque heading, links to
  `/blog/<slug>`), `snippet`, and an `author • formatted date` byline.
- Card styling follows the site (e.g. `bg-slate-50 rounded-xl p-6`, slate text,
  purple accents), consistent with `products.astro`.
- Graceful empty state if no posts (defensive; seed post means it won't be empty
  at launch).

### `src/pages/blog/[slug].astro` (post)
- `export const prerender = true`.
- `getStaticPaths` maps the collection to `{ params: { slug }, props: { entry } }`.
- Uses the content-layer API: `import { getCollection, render } from "astro:content"`
  and `const { Content } = await render(entry)`.
- Renders through the rewritten `BlogLayout`, passing frontmatter + `<Content />`.

### `src/layouts/BlogLayout.astro` (rewrite)
- Restyled to match the site: `Container`, Bricolage heading, `author • date`
  byline (drop the template's blue category label / cover markup),
  `prose prose-lg` body via the already-installed typography plugin,
  "← Back to Blog" link.
- Passes SEO through `Layout`: `title`, `description = snippet`,
  `ogType = "article"`.

### `src/pages/rss.xml.ts` (new)
- `export const prerender = true`.
- Uses `@astrojs/rss` (**new dependency**).
- Emits published posts (same filter), each with `title`, `pubDate`,
  `description = snippet`, `link = /blog/<slug>`.

## SEO (`src/layouts/Layout.astro`)

Add one optional prop, `ogType?: string` (default `"website"`), threaded into the
existing `astro-seo` `openGraph.basic.type`. Blog posts pass `"article"`. All
other pages are unchanged and keep the default OG image and type. No per-post OG
image in v1 (covers dropped) — posts use the site default `/opengraph.png`.

Also add an RSS discovery link to the site `<head>`:
`<link rel="alternate" type="application/rss+xml" title="Bitropy Blog" href="/rss.xml" />`.

## Wiring

- **Navbar** (`src/components/navbar/navbar.astro`): add
  `{ title: "Blog", path: "/blog" }` to `menuitems`, between About and Contact.
- **Sitemap** (`astro.config.mjs`): remove `/blog/` from the `sitemap` `filter`
  exclusion array so blog pages are indexed. Leave the other exclusions
  (`/features/`, `/pricing/`, `/integrations/`, `/404/`) intact.

## Seed Content

`src/content/blog/llm-router-failover.mdx`, ~700–900 words, `draft: false`.

**Topic:** "When your SOTA provider goes down: failover routing in the Bitropy
LLM router." Narrative: a primary top-tier provider starts erroring or degrading;
the Bitropy router automatically fails over to another deployment of the *same*
model (e.g. a different region or a second provider hosting that model), so
requests keep succeeding without a quality drop. Covers why same-model failover
preserves output quality (vs. falling back to a weaker model), what signals
trigger a reroute (errors, timeouts, latency/health), and a short config sketch.

Frontmatter: `draft`, `title`, `snippet`, `publishDate`, `author: "Bitropy"`.

## New Dependency

- `@astrojs/rss` (RSS feed generation).

## Success Criteria

- `/blog` lists the seed post; clicking it opens `/blog/llm-router-failover`
  rendering the MDX in site styling.
- `/rss.xml` returns valid RSS containing the seed post.
- Blog link appears in the navbar and routes to `/blog`.
- Draft and future-dated posts are excluded from index and RSS.
- `pnpm build` succeeds and blog pages are prerendered.
- Blog URLs appear in the generated sitemap.
```
