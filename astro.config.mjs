import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://www.bitropy.io",
  output: "server",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !["/blog/", "/features/", "/pricing/", "/integrations/", "/404/"].some(
          (path) => new URL(page).pathname.startsWith(path),
        ),
    }),
    icon(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});