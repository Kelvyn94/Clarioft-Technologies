import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const baseUrl = siteUrl?.replace(/\/+$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(baseUrl ? { sitemap: `${baseUrl}/sitemap.xml` } : {}),
  };
}
