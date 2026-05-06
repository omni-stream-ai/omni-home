import type { APIRoute } from "astro";

const pages = [
  "https://omnistreamai.com/",
  "https://omnistreamai.com/products/omni-code/voice",
  "https://omnistreamai.com/products/omni-code/ai-approval",
  "https://omnistreamai.com/products/omni-code/bridge",
  "https://omnistreamai.com/products/omni-code/download"
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
