// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://treoil.vn.ua",
  trailingSlash: "always",
  build: { format: "directory", inlineStylesheets: "auto" },
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap({ filter: (page) => !/\/(404|dyakuyemo)\//.test(page) })],
});
