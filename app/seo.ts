import type { Metadata } from "next";
import { content, locales, type Lang } from "./content";

export function buildMetadata(lang: Lang): Metadata {
  const t = content[lang].meta;
  const locale = locales.find((entry) => entry.lang === lang)!;

  const languages: Record<string, string> = { "x-default": "/" };
  for (const entry of locales) languages[entry.htmlLang] = entry.path;

  return {
    metadataBase: new URL("https://manoatour.vercel.app"),
    title: t.title,
    description: t.description,
    alternates: {
      canonical: locale.path,
      languages,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/manoa-profile.jpg",
      apple: "/manoa-profile.jpg",
    },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: locale.path,
      siteName: "Manoa Tour",
      locale: locale.ogLocale,
      type: "website",
      images: [{ url: "/og.png", width: 1536, height: 1024, alt: t.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.ogTitle,
      description: t.twitterDescription,
      images: ["/og.png"],
    },
  };
}
