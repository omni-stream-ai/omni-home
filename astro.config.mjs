import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";

export default defineConfig({
  site: "https://omnistreamai.com",
  integrations: [solid()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    server: {
      host: true
    }
  }
});
