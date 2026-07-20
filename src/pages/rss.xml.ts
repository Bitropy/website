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
