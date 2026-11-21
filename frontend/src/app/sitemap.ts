import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  // Do not publish invented or placeholder domain URLs.
  if (!siteUrl) {
    return [];
  }

  const baseUrl = siteUrl.replace(/\/+$/, "");

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/solutions", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
