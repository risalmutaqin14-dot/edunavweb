// app/rss/route.ts - RSS Feed for AI Search & Real-time Indexing (WordPress Integration)
import { NextResponse } from "next/server";

const WORDPRESS_POSTS_API = "https://www.edunav.net/wp-json/wp/v2/posts";
const SITE_URL = "https://www.edunav.net";

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  modified?: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
    author?: Array<{ name: string }>;
    "wp:term"?: Array<Array<{ name: string }>>;
  };
}

function stripHtml(html: string): string {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function GET() {
  const now = new Date().toISOString();

  try {
    // Fetch latest posts from WordPress
    const response = await fetch(`${WORDPRESS_POSTS_API}?per_page=20&_embed`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const posts: WPPost[] = await response.json();

    // Generate RSS XML
    const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">
  <channel>
    <title>Edunav Blog - Sistem Informasi Sekolah</title>
    <link>${SITE_URL}/</link>
    <atom:link href="${SITE_URL}/rss" rel="self" type="application/rss+xml" />
    <description>Update terbaru seputar Edunav, sistem informasi manajemen sekolah, tips pendidikan, dan studi kasus implementasi di sekolah.</description>
    <language>id-id</language>
    <copyright>Copyright ${new Date().getFullYear()} PT Global Zerone Digital. All rights reserved.</copyright>
    <managingEditor>hello@edunav.net (Edunav Team)</managingEditor>
    <webMaster>hello@edunav.net (Edunav Team)</webMaster>
    <lastBuildDate>${now}</lastBuildDate>
    <pubDate>${now}</pubDate>
    <sy:updatePeriod>hourly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <generator>Edunav RSS Generator</generator>
    <image>
      <url>${SITE_URL}/assets/edunav-banner.webp</url>
      <title>Edunav - Sistem Informasi Sekolah</title>
      <link>${SITE_URL}/</link>
      <width>1200</width>
      <height>630</height>
    </image>
    <category>Education Technology</category>
    <category>School Management System</category>
    <category>SIMS</category>
    <category>Learning Management System</category>
    <category>Pendidikan Indonesia</category>
    <category>Transformasi Digital Sekolah</category>
${posts
  .map((post) => {
    const featuredImg = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
    const authorName = post._embedded?.author?.[0]?.name || "Edunav Team";
    const terms = post._embedded?.["wp:term"]?.flat() || [];
    const categories = terms
      .filter((t: any) => t.taxonomy === "category")
      .map((t: any) => t.name);

    return `    <item>
      <title><![CDATA[${post.title.rendered}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <description><![CDATA[${stripHtml(post.excerpt.rendered)}]]></description>
      <content:encoded><![CDATA[${post.content.rendered}]]></content:encoded>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toISOString()}</pubDate>
      ${post.modified ? `<lastBuildDate>${new Date(post.modified).toISOString()}</lastBuildDate>` : ""}
      <dc:creator><![CDATA[${escapeXml(authorName)}]]></dc:creator>
      ${categories.map((cat) => `<category><![CDATA[${escapeXml(cat)}]]></category>`).join("\n      ")}
      ${featuredImg ? `<enclosure url="${featuredImg}" type="image/jpeg" length="0" />` : ""}
    </item>`;
  })
  .join("\n")}
  </channel>
</rss>`;

    return new NextResponse(rssXml, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (error) {
    console.error("RSS feed generation error:", error);

    // Fallback RSS with basic info
    const fallbackXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Edunav Blog - Sistem Informasi Sekolah</title>
    <link>${SITE_URL}/</link>
    <atom:link href="${SITE_URL}/rss" rel="self" type="application/rss+xml" />
    <description>Update terbaru seputar Edunav, sistem informasi manajemen sekolah, tips pendidikan, dan studi kasus implementasi di sekolah.</description>
    <language>id-id</language>
    <lastBuildDate>${now}</lastBuildDate>
  </channel>
</rss>`;

    return new NextResponse(fallbackXml, {
      status: 200,
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=600",
      },
    });
  }
}
