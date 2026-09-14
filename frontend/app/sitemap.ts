import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://openspades.in";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/how-to-play`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/our-promise`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
