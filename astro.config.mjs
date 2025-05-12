// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://layer-guru.github.io",
  base: "layer-guru-static",
  devToolbar: {
    enabled: true,
  },
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "en",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
