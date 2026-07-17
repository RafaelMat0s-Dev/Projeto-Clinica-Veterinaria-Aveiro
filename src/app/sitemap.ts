import type { MetadataRoute } from "next";
import { site } from "@/lib/site-data";

const routes = [
  "",
  "/sobre",
  "/servicos",
  "/equipa",
  "/urgencias",
  "/faq",
  "/marcacoes",
  "/contactos",
  "/privacidade",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
