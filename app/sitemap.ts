import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://differentelitegroup.com",
      lastModified: new Date("2026-11-01"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
