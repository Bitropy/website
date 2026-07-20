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
