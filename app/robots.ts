import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/", // Internal site - don't allow public indexing
    },
    sitemap: "https://events.elkjop.no/sitemap.xml",
  }
}
