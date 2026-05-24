import type { MetadataRoute } from "next";

const baseUrl = "https://mariasportick.ru";

const routes = [
  "",
  "/online-trenirovki",
  "/stretching-online",
  "/pitanie-fitnes",
  "/wellness-program",
  "/faq-fitnes"
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}
