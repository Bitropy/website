# Blog Feature Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-activate and rebuild the disabled Astroship blog on the Bitropy marketing site — a `/blog` index, individual post pages, and an RSS feed — styled to match the current redesigned site.

**Architecture:** Astro content collection (`glob` loader over `src/content/blog`) drives prerendered `/blog` and `/blog/<slug>` pages plus a `/rss.xml` endpoint. The existing `Layout` is extended with an `ogType` prop; `BlogLayout` is restyled to the site's design tokens. Nav, footer, and sitemap are wired to include the blog.

**Tech Stack:** Astro ^6.3.3 (content layer), MDX, Tailwind CSS v4 + `@tailwindcss/typography`, `@astrojs/rss` (new), `astro-seo`, Vercel adapter.

## Global Constraints

Every task's requirements implicitly include these:

- Astro version is `^6.3.3`; `astro.config.mjs` has `output: "server"`. **Every blog page/endpoint file MUST set `export const prerender = true`** or `getStaticPaths` is ignored and routes resolve at request time.
- Content-layer API (Astro 5/6): import `render` from `astro:content` and call `await render(entry)`; the per-entry identifier is `entry.id` (no extension), **not** `entry.slug`.
- Publish filter, used identically on the index, the post `getStaticPaths`, and the RSS feed: `!data.draft && data.publishDate <= new Date()`. `publishDate` is already transformed to a `Date` by the schema.
- Match the site's design tokens: headings in the default sans (Bricolage Grotesque, via `font-bold`), body text `text-slate-600`, accent `text-purple-600`, cards `bg-slate-50 rounded-xl p-6`, page width via the `Container` component. Follow the patterns in `src/pages/products.astro` and `src/pages/about.astro`.
- No emojis anywhere. Reuse existing components (`Layout`, `Container`, `Sectionhead`) and the `getFormattedDate` util rather than re-implementing.
- Path alias `@/*` maps to `src/*`.
- Verification gate is `pnpm build` (authoritative — catches schema, prerender, and import errors) plus `dist/` inspection; final task also runs `pnpm lint`. There is no unit-test framework in this repo.

---

### Task 1: Make schema fields optional and add the published-posts helper

**Files:**
- Modify: `src/content.config.ts`
- Create: `src/utils/posts.ts`

**Interfaces:**
- Produces: the `blog` collection with `image`, `category`, `tags` optional; required fields `draft`, `title`, `snippet`, `publishDate` (→ `Date`), `author` (default `"Bitropy"`). All later tasks read `entry.data` with these fields.
- Produces: `getPublishedPosts()` from `src/utils/posts.ts` — returns published (`!draft && publishDate <= now`) blog entries sorted by `publishDate` descending. Consumed by Tasks 5 (post `getStaticPaths`), 6 (index), and 7 (RSS).

- [ ] **Step 1: Replace the schema**

Overwrite `src/content.config.ts` with:

```ts
import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string().default("Bitropy"),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
```

- [ ] **Step 2: Create the published-posts helper**

Create `src/utils/posts.ts`:

```ts
import { getCollection } from "astro:content";

/**
 * Published blog posts (not draft, publish date in the past),
 * newest first. Single source of truth for the index, post pages, and RSS.
 */
export async function getPublishedPosts() {
  const posts = await getCollection(
    "blog",
    ({ data }) => !data.draft && data.publishDate <= new Date(),
  );
  return posts.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );
}
```

- [ ] **Step 3: Verify it builds**

Run: `pnpm build`
Expected: build completes with no schema/collection/type errors (the collection is still empty, which is fine).

- [ ] **Step 4: Commit**

```bash
git add src/content.config.ts src/utils/posts.ts
git commit -m "Make blog fields optional and add published-posts helper

Covers and category/tag display are deferred out of blog v1, so authors are not
forced to populate those fields. getPublishedPosts() centralizes the publish
filter and sort shared by the index, post pages, and RSS feed."
```

---

### Task 2: Add the seed post

**Files:**
- Create: `src/content/blog/llm-router-failover.mdx`
- Delete: `src/content/blog/.gitkeep` (no longer needed once a real post exists)

**Interfaces:**
- Consumes: the schema from Task 1.
- Produces: one published post with `id = "llm-router-failover"`, consumed by the index, post page, and RSS tasks.

- [ ] **Step 1: Create the post**

Create `src/content/blog/llm-router-failover.mdx`:

```mdx
---
draft: false
title: "When Your SOTA Provider Goes Down: Failover Routing in the Bitropy LLM Router"
snippet: "Top-tier model providers have bad days too. Here is how same-model failover in the Bitropy router keeps your AI features answering, without silently dropping to a weaker model."
publishDate: "2026-07-18"
author: "Bitropy"
---

Every team building on frontier models eventually learns the same lesson: the
provider hosting your best model is a dependency, and dependencies fail. A
region degrades. A rollout goes sideways. Rate limits tighten without warning
during a spike. When that happens, the naive setup does the worst possible
thing: it returns errors to your users while your dashboards stay green,
because the model itself is "fine" everywhere except the one endpoint you
happen to be calling.

The Bitropy LLM router treats a model as something you can reach through more
than one door. When the door you are using jams, it walks you to another one
that opens onto the same room.

## Same model, different deployment

The key idea is same-model failover. Most frontier models are available through
more than one deployment: a first-party API, one or more cloud-hosted versions
(for example the same model offered through a major cloud's managed AI service),
and often multiple regions within each. These are the *same weights* producing
the *same responses*. They just sit behind different endpoints, quotas, and
failure domains.

Bitropy lets you declare those deployments as a pool behind a single logical
model name. Your application asks for one model; the router decides which
concrete deployment actually serves each request. When the primary deployment
starts failing, traffic shifts to a healthy sibling automatically, and the
response your user gets is indistinguishable from the one they would have gotten
on a normal day.

This is deliberately different from falling back to a *weaker* model. Dropping
from your top model to a smaller, cheaper one during an incident is a silent
quality regression at the worst possible moment: your users are already
frustrated, and now the answers get worse too. Same-model failover keeps the
quality bar fixed and only changes the plumbing underneath.

## What triggers a reroute

The router does not wait for a human to notice. It reacts to the signals that
actually predict a bad request:

- **Hard errors:** 5xx responses, connection resets, and provider-side
  "overloaded" or capacity errors mark a deployment as unhealthy.
- **Timeouts:** requests that exceed a configured deadline are treated as
  failures, not just slow successes.
- **Latency drift:** sustained p95 latency well above a deployment's baseline
  is an early warning that it is degrading before it starts returning errors.
- **Rate limiting:** 429s route around the throttled deployment instead of
  retrying into the same wall.

Healthy deployments are preferred; unhealthy ones are taken out of rotation and
periodically probed so they rejoin automatically once they recover. Retries are
bounded so a single failing request cannot fan out into a storm.

## A minimal configuration

Declaring a resilient model is mostly a matter of listing its deployments in
priority order:

```yaml
models:
  gpt-frontier:
    strategy: failover
    deployments:
      - name: primary-provider
        endpoint: https://api.provider.example/v1
        priority: 1
      - name: cloud-region-eu
        endpoint: https://eu.cloud.example/openai/v1
        priority: 2
      - name: cloud-region-us
        endpoint: https://us.cloud.example/openai/v1
        priority: 3
    health:
      timeout_ms: 20000
      error_budget: 3      # consecutive failures before eviction
      probe_interval_s: 30 # how often to re-test an evicted deployment
```

Your application keeps calling `gpt-frontier`. On a good day every request goes
to `primary-provider`. During an incident, requests slide down to
`cloud-region-eu`, then `cloud-region-us`, and back up again as each deployment
recovers, with no code change and no redeploy on your side.

## Why route this through Bitropy at all

You could hand-roll this in every service that talks to a model, but then every
service owns its own retry logic, its own health tracking, and its own blind
spots. Centralizing it in the router means failover, observability, cost
tracking, and policy all live in one place. When the next provider incident
happens, the answer is not a frantic config change under pressure. It already
happened, automatically, and the only evidence is a quiet line on a dashboard
instead of a spike in your error rate.

Resilience is not a feature you bolt on after the first outage. It is the
default you want in place before it.
```

- [ ] **Step 2: Remove the placeholder**

```bash
git rm src/content/blog/.gitkeep
```

- [ ] **Step 3: Verify it builds and parses**

Run: `pnpm build`
Expected: build completes; no frontmatter/schema validation error for `llm-router-failover`.

- [ ] **Step 4: Commit**

```bash
git add src/content/blog/llm-router-failover.mdx
git commit -m "Add seed blog post on LLM router failover

Gives the blog real end-to-end content: same-model failover routing when a
primary SOTA provider degrades."
```

---

### Task 3: Extend Layout with ogType and RSS discovery link

**Files:**
- Modify: `src/layouts/Layout.astro`

**Interfaces:**
- Produces: `Layout` accepts an optional `ogType?: string` prop (default `"website"`) threaded into `openGraph.basic.type`. Consumed by `BlogLayout` (Task 4), which passes `"article"`.

- [ ] **Step 1: Add the prop to the interface**

In `src/layouts/Layout.astro`, change the `Props` interface from:

```ts
export interface Props {
  title: string;
  description?: string;
  footerMargin?: boolean;
}
```

to:

```ts
export interface Props {
  title: string;
  description?: string;
  footerMargin?: boolean;
  ogType?: string;
}
```

- [ ] **Step 2: Destructure the prop**

Change:

```ts
const { title, description, footerMargin = true } = Astro.props;
```

to:

```ts
const { title, description, footerMargin = true, ogType = "website" } = Astro.props;
```

- [ ] **Step 3: Thread it into the SEO block**

In the `<SEO>` `openGraph` object, change `type: "website",` to `type: ogType,`. The block becomes:

```jsx
      openGraph={{
        basic: {
          url: canonicalURL,
          type: ogType,
          title: ogTitle,
          image: resolvedImageWithDomain,
        },
        image: {
          alt: OG_IMAGE_ALT,
        },
      }}
```

- [ ] **Step 4: Add the RSS discovery link**

Inside `<head>`, immediately after the closing `/>` of the `<SEO ... />` component, add:

```html
    <link
      rel="alternate"
      type="application/rss+xml"
      title="Bitropy Blog"
      href="/rss.xml"
    />
```

- [ ] **Step 5: Verify build and that non-blog pages are unaffected**

Run: `pnpm build`
Expected: build succeeds.
Run: `grep -c 'og:type" content="website"' dist/index.html`
Expected: `1` (the homepage still uses the default `website` type).

- [ ] **Step 6: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "Add ogType prop and RSS discovery link to Layout

Lets blog posts declare og:type=article and exposes the feed to readers, with
non-blog pages unchanged (default website type)."
```

---

### Task 4: Rewrite BlogLayout to match the site

**Files:**
- Modify: `src/layouts/BlogLayout.astro`

**Interfaces:**
- Consumes: `Layout`'s `ogType` prop (Task 3); `getFormattedDate` from `src/utils/all.js`.
- Produces: a `frontmatter` prop contract — `{ title, snippet, author, publishDate }` — supplied by the post page (Task 5). Renders post body via `<slot />`.

- [ ] **Step 1: Overwrite the layout**

Overwrite `src/layouts/BlogLayout.astro` with:

```astro
---
import Layout from "@/layouts/Layout.astro";
import Container from "@/components/container.astro";
import { getFormattedDate } from "@/utils/all.js";

const { frontmatter } = Astro.props;
const publishDate = new Date(frontmatter.publishDate);
---

<Layout
  title={frontmatter.title}
  description={frontmatter.snippet}
  ogType="article">
  <Container>
    <article class="mx-auto max-w-3xl mt-14">
      <header>
        <h1
          class="text-4xl lg:text-5xl font-bold lg:tracking-tight lg:leading-tight">
          {frontmatter.title}
        </h1>
        <div class="flex gap-2 mt-4 items-center text-slate-500">
          <span>{frontmatter.author}</span>
          <span>•</span>
          <time datetime={publishDate.toISOString()}>
            {getFormattedDate(publishDate)}
          </time>
        </div>
      </header>

      <div class="prose prose-lg mt-8 max-w-none">
        <slot />
      </div>

      <div class="mt-12">
        <a
          href="/blog"
          class="text-purple-600 font-medium hover:text-purple-700 transition"
          >← Back to Blog</a
        >
      </div>
    </article>
  </Container>
</Layout>
```

- [ ] **Step 2: Verify it builds**

Run: `pnpm build`
Expected: build succeeds (BlogLayout is not yet rendered by a route until Task 5, but it must compile).

- [ ] **Step 3: Commit**

```bash
git add src/layouts/BlogLayout.astro
git commit -m "Restyle BlogLayout to match the redesigned site

Drops the template's blue category header and cover markup for the site's
Container, prose typography, and slate/purple tokens; passes ogType=article."
```

---

### Task 5: Rewrite the post page

**Files:**
- Modify: `src/pages/blog/[slug].astro`

**Interfaces:**
- Consumes: `BlogLayout` (Task 4) with `frontmatter={entry.data}`; the seed post (Task 2); `getPublishedPosts()` (Task 1); content-layer `render` (Global Constraints).
- Produces: prerendered `/blog/<id>` routes.

- [ ] **Step 1: Overwrite the page**

Overwrite `src/pages/blog/[slug].astro` with:

```astro
---
export const prerender = true;

import { render } from "astro:content";
import BlogLayout from "@/layouts/BlogLayout.astro";
import { getPublishedPosts } from "@/utils/posts.ts";

export async function getStaticPaths() {
  const posts = await getPublishedPosts();
  return posts.map((entry) => ({
    params: { slug: entry.id },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content } = await render(entry);
---

<BlogLayout frontmatter={entry.data}>
  <Content />
</BlogLayout>
```

- [ ] **Step 2: Verify the post prerenders**

Run: `pnpm build`
Expected: build succeeds and reports a page built for `blog/llm-router-failover`.
Run: `test -f dist/blog/llm-router-failover/index.html && echo FOUND`
Expected: `FOUND`.
Run: `grep -c "failover" dist/blog/llm-router-failover/index.html`
Expected: a number greater than `0` (post body rendered).

- [ ] **Step 3: Commit**

```bash
git add "src/pages/blog/[slug].astro"
git commit -m "Render blog posts via BlogLayout

Replaces the redirect stub with real content-layer rendering (render(entry),
entry.id), prerendered and filtered to published posts."
```

---

### Task 6: Rewrite the blog index and remove pagination

**Files:**
- Modify: `src/pages/blog.astro`
- Delete: `src/pages/blog/[...page].astro`

**Interfaces:**
- Consumes: `getPublishedPosts()` (Task 1), `Sectionhead`, `Container`, `Layout`, `getFormattedDate`, and `post.id` for links.

- [ ] **Step 1: Overwrite the index page**

Overwrite `src/pages/blog.astro` with:

```astro
---
export const prerender = true;

import Layout from "@/layouts/Layout.astro";
import Container from "@/components/container.astro";
import Sectionhead from "@/components/sectionhead.astro";
import { getFormattedDate } from "@/utils/all.js";
import { getPublishedPosts } from "@/utils/posts.ts";

const posts = await getPublishedPosts();
---

<Layout
  title="Blog"
  description="Insights on enterprise AI operations, security, and reliability from the Bitropy team.">
  <Container>
    <Sectionhead>
      <Fragment slot="title">Blog</Fragment>
      <Fragment slot="desc">Insights on running AI in production.</Fragment>
    </Sectionhead>

    <div class="mx-auto max-w-3xl mt-12 flex flex-col gap-6">
      {
        posts.length === 0 && (
          <p class="text-center text-slate-500">
            No posts yet. Check back soon.
          </p>
        )
      }
      {
        posts.map((post) => (
          <a
            href={`/blog/${post.id}`}
            class="block bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition">
            <h2 class="text-2xl font-bold tracking-tight">{post.data.title}</h2>
            <p class="text-slate-600 leading-relaxed mt-2">
              {post.data.snippet}
            </p>
            <div class="flex gap-2 items-center text-sm text-slate-500 mt-4">
              <span>{post.data.author}</span>
              <span>•</span>
              <time datetime={new Date(post.data.publishDate).toISOString()}>
                {getFormattedDate(post.data.publishDate)}
              </time>
            </div>
          </a>
        ))
      }
    </div>
  </Container>
</Layout>
```

- [ ] **Step 2: Delete the pagination route**

```bash
git rm "src/pages/blog/[...page].astro"
```

- [ ] **Step 3: Verify the index prerenders and links the post**

Run: `pnpm build`
Expected: build succeeds.
Run: `test -f dist/blog/index.html && echo FOUND`
Expected: `FOUND`.
Run: `grep -c "/blog/llm-router-failover" dist/blog/index.html`
Expected: a number greater than `0` (card links to the post).

- [ ] **Step 4: Commit**

```bash
git add src/pages/blog.astro
git commit -m "Build the blog index and drop pagination

Lists published posts newest-first as text cards in the site style; removes the
unused paginated route (no pagination in v1)."
```

---

### Task 7: Add the RSS feed

**Files:**
- Modify: `package.json` / lockfile (via `pnpm add`)
- Create: `src/pages/rss.xml.ts`

**Interfaces:**
- Consumes: `getPublishedPosts()` (Task 1); `context.site` (from `astro.config.mjs` `site: "https://www.bitropy.io"`); `post.id` for links.
- Produces: `/rss.xml`.

- [ ] **Step 1: Install the dependency**

Run: `pnpm add @astrojs/rss`
Expected: `@astrojs/rss` added to `dependencies`.
Run: `test -d node_modules/@astrojs/rss && echo INSTALLED`
Expected: `INSTALLED`.

- [ ] **Step 2: Create the feed endpoint**

Create `src/pages/rss.xml.ts`:

```ts
export const prerender = true;

import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublishedPosts } from "@/utils/posts.ts";

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: "Bitropy Blog",
    description:
      "Insights on enterprise AI operations, security, and reliability from the Bitropy team.",
    site: context.site ?? "https://www.bitropy.io",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.snippet,
      pubDate: post.data.publishDate,
      link: `/blog/${post.id}`,
    })),
  });
}
```

- [ ] **Step 3: Verify the feed builds and contains the post**

Run: `pnpm build`
Expected: build succeeds.
Run: `test -f dist/rss.xml && echo FOUND`
Expected: `FOUND`.
Run: `grep -c "llm-router-failover" dist/rss.xml`
Expected: a number greater than `0`.

- [ ] **Step 4: Commit**

```bash
git add package.json pnpm-lock.yaml src/pages/rss.xml.ts
git commit -m "Add /rss.xml feed for the blog

Publishes non-draft, non-future posts newest-first via @astrojs/rss."
```

---

### Task 8: Wire the blog into nav, footer, and sitemap

**Files:**
- Modify: `src/components/navbar/navbar.astro`
- Modify: `src/components/footer.astro`
- Modify: `astro.config.mjs`

**Interfaces:**
- Consumes: the working `/blog` route (Task 6).

- [ ] **Step 1: Add the navbar link**

In `src/components/navbar/navbar.astro`, replace the commented-out block:

```js
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
```

with a live entry so `menuitems` reads (About → Blog → Contact):

```js
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
```

- [ ] **Step 2: Add the footer link**

In `src/components/footer.astro`, change the `nav` array from:

```js
const nav = [
  { title: "Products", path: "/products" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Terms", path: "/terms" },
  { title: "Privacy", path: "/privacy" },
];
```

to:

```js
const nav = [
  { title: "Products", path: "/products" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
  { title: "Terms", path: "/terms" },
  { title: "Privacy", path: "/privacy" },
];
```

- [ ] **Step 3: Un-exclude /blog/ from the sitemap**

In `astro.config.mjs`, change the sitemap `filter` from:

```js
      filter: (page) =>
        !["/blog/", "/features/", "/pricing/", "/integrations/", "/404/"].some(
          (path) => new URL(page).pathname.startsWith(path),
        ),
```

to (drop only `"/blog/"`):

```js
      filter: (page) =>
        !["/features/", "/pricing/", "/integrations/", "/404/"].some(
          (path) => new URL(page).pathname.startsWith(path),
        ),
```

- [ ] **Step 4: Verify wiring, sitemap, and lint**

Run: `pnpm build`
Expected: build succeeds.
Run: `grep -rl "/blog/llm-router-failover" dist/sitemap-0.xml dist/sitemap-index.xml 2>/dev/null && echo IN_SITEMAP`
Expected: `IN_SITEMAP` (the post URL is present in the generated sitemap; if the filename differs, check `dist/sitemap*.xml`).
Run: `grep -c '"/blog"' dist/blog/index.html`
Expected: a number greater than `0` (navbar + footer both link to `/blog`, rendered on the prerendered blog index page). Note: the homepage is server-rendered under `output: "server"`, so there is no `dist/index.html` to grep — use a prerendered blog page, which carries the same navbar and footer.
Run: `pnpm lint`
Expected: passes (or reports only pre-existing, unrelated issues).

- [ ] **Step 5: Commit**

```bash
git add src/components/navbar/navbar.astro src/components/footer.astro astro.config.mjs
git commit -m "Wire the blog into nav, footer, and sitemap

Surfaces /blog in the header and footer navigation and stops excluding blog
URLs from the generated sitemap."
```

---

## Self-Review

**Spec coverage:**
- `/blog` index → Task 6. `/blog/<slug>` post → Task 5. `/rss.xml` → Task 7. Deleted `[...page].astro` → Task 6. ✓
- Schema: `image`/`category`/`tags` optional → Task 1. ✓
- Publish filtering (index, post paths, RSS) → centralized in `getPublishedPosts()` (Task 1), consumed by Tasks 5, 6, 7. ✓
- Prerender under `output: server` → set in Tasks 5, 6, 7. ✓
- `BlogLayout` restyle + author/date byline → Task 4; index byline → Task 6. ✓
- SEO `ogType="article"` + RSS head link → Tasks 3 (Layout) and 4 (BlogLayout passes it). ✓
- Navbar link, footer link, sitemap inclusion → Task 8. ✓
- Seed post on LLM router failover → Task 2. ✓
- `@astrojs/rss` dependency → Task 7. ✓
- Covers dropped, no per-post OG image → not implemented anywhere (correct); posts fall back to default `/opengraph.png`. ✓

**Placeholder scan:** No TBD/TODO/"handle edge cases" steps; every code step shows complete file content. ✓

**Type consistency:** `entry.id` used for params (Task 5) and links (Tasks 6, 7) consistently — never `entry.slug`. `render(entry)` import matches usage. `frontmatter` prop shape produced by Task 5 (`entry.data`) matches what Task 4's `BlogLayout` reads (`title`, `snippet`, `author`, `publishDate`). `ogType` prop defined in Task 3 and consumed in Task 4. `getPublishedPosts()` defined in Task 1 and consumed unchanged in Tasks 5/6/7. ✓
