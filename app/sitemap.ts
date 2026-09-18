import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

// Written to a file at build time (the site is a static export).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
