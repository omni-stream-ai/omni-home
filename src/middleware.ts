import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const pathname = context.url.pathname;
  const locale = pathname.startsWith("/zh") ? "zh" : "en";
  context.locals.locale = locale;
  return next();
});
