import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";

export default defineConfig({
  site: "https://omnistreamai.com",
  integrations: [solid()],
  vite: {
    server: {
      host: true
    }
  }
});
