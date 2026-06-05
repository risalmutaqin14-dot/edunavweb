import type { MetadataRoute } from "next";

const WP_API_URL = "https://www.edunav.net/wp-json/wp/v2/posts";
const SITE_URL = "https://www.edunav.net";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts: MetadataRoute.Sitemap = [];

  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(
      `${WP_API_URL}?per_page=100&page=${page}&_embed`,
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      break;
    }

    const totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "0");
    const data = await response.json();

    for (const item of data) {
      const featuredImg =
        item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

      allPosts.push({
        url: `${SITE_URL}/blog/${item.slug}`,
        lastModified: new Date(item.modified || item.date),
        changeFrequency: "weekly",
        priority: 0.8,
        images: featuredImg ? [featuredImg] : undefined,
      });
    }

    hasMore = page < totalPages;
    page++;
  }

  return allPosts;
}
