# omnistreamai.com

Official marketing site for `omnistreamai.com`, built for the `omni-code` project.

This repository contains the public website for Omni Code, a cross-platform client for desktop coding agent sessions. The site is built with Astro and SolidJS, uses `bun` as the package manager, and is optimized as a static marketing site with topic-specific SEO landing pages.

## Project goals

The site is meant to explain and rank for the current Omni Code product surface:

- Remote control for local desktop coding agents
- AI-assisted approval with manual fallback
- Full voice interaction, including speech input and reply playback
- Self-hosted bridge architecture over HTTP and SSE
- Download and release distribution paths

## Stack

- `Astro 6`
- `@astrojs/solid-js`
- `SolidJS`
- `TypeScript`
- `bun`

## Local development

Install dependencies:

```bash
bun install
```

Start the dev server:

```bash
bun run dev
```

Preview the production build locally:

```bash
bun run preview
```

## Quality checks

Build the site:

```bash
bun run build
```

Run Astro type and diagnostics checks:

```bash
bun run check
```

## Project structure

```text
public/
  favicon.svg
  favicon.png
  og-cover.svg
  omni-code-logo.svg

src/
  components/
    FaqAccordion.tsx
    TopicPage.astro
    WorkflowBoard.tsx
  content/
    seo.ts
    site.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    voice.astro
    ai-approval.astro
    bridge.astro
    download.astro
    robots.txt.ts
    sitemap.xml.ts
  styles/
    global.css
```

## Pages

Current indexable pages:

- `/`
- `/voice`
- `/ai-approval`
- `/bridge`
- `/download`

These topic pages exist to give the site better search coverage than a single landing page can provide.

## Content model

Main homepage content lives in:

- [src/content/site.ts](src/content/site.ts)

SEO topic page content lives in:

- [src/content/seo.ts](src/content/seo.ts)

If you need to update product positioning, features, FAQ, workflow steps, or topic page messaging, change those content files first before touching layout markup.

## Brand assets

The site currently reuses Omni Code app branding:

- [public/omni-code-logo.svg](public/omni-code-logo.svg)
- [public/favicon.svg](public/favicon.svg)
- [public/favicon.png](public/favicon.png)

These were copied from the `omni-code` project so the website and client branding stay aligned.

## Font licensing

The site currently self-hosts these fonts through Fontsource:

- `Manrope` via `@fontsource-variable/manrope`
- `Cormorant Garamond` via `@fontsource/cormorant-garamond`

Both packages currently declare the `OFL-1.1` license (SIL Open Font License 1.1), which is generally suitable for commercial website use.

Practical notes:

- Keep the upstream license text when redistributing the font files
- Do not sell the font files by themselves
- If you modify and redistribute the fonts themselves, review the OFL reserved-name requirements first

Relevant local files:

- `node_modules/@fontsource-variable/manrope/LICENSE`
- `node_modules/@fontsource/cormorant-garamond/LICENSE`

## SEO

The site includes:

- Per-page `title` and `meta description`
- Canonical URLs
- Open Graph and Twitter card metadata
- `SoftwareApplication` JSON-LD
- `robots.txt`
- `sitemap.xml`
- Internal links to topic landing pages

### SEO files

- [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)
- [src/pages/robots.txt.ts](src/pages/robots.txt.ts)
- [src/pages/sitemap.xml.ts](src/pages/sitemap.xml.ts)

### Post-deploy SEO checklist

After deployment:

1. Verify `omnistreamai.com` in Google Search Console
2. Submit `https://omnistreamai.com/sitemap.xml`
3. Inspect the homepage and topic pages for indexing
4. Re-run rich result validation if structured data changes

## Deployment notes

This project is a static Astro site. Any static host that supports Astro output will work.

Typical production flow:

```bash
bun install
bun run build
```

The build output is generated in:

```text
dist/
```

## Product references

Primary product repositories:

- Client: `https://github.com/omni-stream-ai/omni-code`
- Bridge: `https://github.com/omni-stream-ai/omni-code-bridge`

The website content should stay aligned with those repositories, especially when product features, bridge setup, approval behavior, or release distribution change.

## Editing guidance

When updating the site:

- Prefer short, high-signal headings; large marketing headings should usually stay within 2-3 lines
- Keep feature claims tied to real product behavior in `omni-code`
- Preserve the mobile-first adjustments in [src/styles/global.css](src/styles/global.css)
- If you add a new SEO page, also update [src/pages/sitemap.xml.ts](src/pages/sitemap.xml.ts) and homepage internal links

## License

This repository does not currently define a separate license file. If it needs one, add it explicitly rather than assuming it inherits the client repository license.
