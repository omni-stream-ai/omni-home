import { content as en } from "./en";
import { content as zh } from "./zh";

const locales = { en, zh } as const;

export type Locale = keyof typeof locales;
export type Content = (typeof locales)[Locale];

export function getLocaleContent(locale: string | undefined): Content {
  return locales[(locale ?? "en") as Locale] ?? en;
}

export function localizeHref(href: string, locale: string | undefined): string {
  if (!locale || locale === "en") return href;
  return `/zh${href}`;
}

export function alternateHref(href: string, locale: string | undefined): string {
  if (locale === "zh") return href.replace(/^\/zh/, "") || "/";
  return `/zh${href === "/" ? "" : href}`;
}

export const supportedLocales: Locale[] = ["en", "zh"];
