import { NextResponse } from "next/server";

let locales = ["en", "fr"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
  const acceptLanguage = request.headers.get("Accept-Language");
  const preferredLocale = acceptLanguage
    ? acceptLanguage.split(",")[0].split("-")[0]
    : "en";

  return locales.includes(preferredLocale) ? preferredLocale : "en";
}

export function middleware(request) {
  if (
    request.nextUrl.pathname.startsWith("/img/") ||
    request.nextUrl.pathname.startsWith("/gifs-unity/") ||
    request.nextUrl.pathname.startsWith("/gifs/")
  )
    return;
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  request.nextUrl.query = { ...request.nextUrl.query, lang: locale };

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
