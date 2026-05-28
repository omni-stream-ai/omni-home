import type { APIRoute } from "astro";

const base = "https://omnistreamai.com";

const paths = [
  "/",
  "/products/omni-code/web",
  "/products/omni-code/voice",
  "/products/omni-code/ai-approval",
  "/products/omni-code/bridge",
  "/products/omni-code/download"
];

export const GET: APIRoute = () => {
  const entries = paths.flatMap((path) => {
    const enUrl = `${base}${path}`;
    const zhUrl = `${base}/zh${path === "/" ? "" : path}`;
    return `  <url>
    <loc>${enUrl}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${zhUrl}" />
  </url>
  <url>
    <loc>${zhUrl}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${zhUrl}" />
  </url>`;
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
