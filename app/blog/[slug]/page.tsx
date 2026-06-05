import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogPostClient, {
  type BlogPostViewModel,
  type RelatedPostViewModel,
} from "@/components/blog/BlogPostClient";

const WP_API_URL = "https://www.edunav.net/wp-json/wp/v2/posts";
const SITE_URL = "https://www.edunav.net";
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop";

interface TaxonomyTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
}

function stripHtml(html: string) {
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

async function fetchPosts(query: string) {
  const response = await fetch(`${WP_API_URL}?${query}`, {
    headers: {
      Accept: "application/json",
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

async function getBlogPostData(slug: string) {
  const data = await fetchPosts(`slug=${encodeURIComponent(slug)}&_embed`);

  if (!data || !Array.isArray(data) || data.length === 0) {
    return null;
  }

  const item = data[0];
  const featuredImg = item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || FALLBACK_IMAGE;
  const authorName = item._embedded?.author?.[0]?.name || "Admin";
  const authorAvatar = item._embedded?.author?.[0]?.avatar_urls?.["96"];
  const terms: TaxonomyTerm[] = item._embedded?.["wp:term"]?.flat() || [];
  const categories = terms.filter((term) => term.taxonomy === "category");
  const postTags = terms.filter((term) => term.taxonomy === "post_tag");
  const primaryCategory = categories[0];
  const plainTextContent = stripHtml(item.content.rendered);
  const wordCount = plainTextContent.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const post: BlogPostViewModel = {
    id: item.id,
    slug: item.slug,
    title: item.title.rendered,
    content: item.content.rendered,
    plainTextContent,
    excerpt: stripHtml(item.excerpt.rendered),
    date: new Date(item.date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    isoDate: item.date,
    modifiedDate: item.modified || item.date,
    image: featuredImg,
    author: authorName,
    authorAvatar,
    category: primaryCategory?.name || "Artikel",
    categorySlug: primaryCategory?.slug || "artikel",
    tags: postTags.map((term) => term.name).slice(0, 6),
    readingTimeMinutes: readingTime,
  };

  let relatedPosts: RelatedPostViewModel[] = [];

  if (primaryCategory?.id) {
    const relatedData = await fetchPosts(
      `categories=${primaryCategory.id}&per_page=3&_embed&exclude=${item.id}`
    );

    if (Array.isArray(relatedData)) {
      relatedPosts = relatedData.map((relItem: any) => {
        const relatedTerms: TaxonomyTerm[] = relItem._embedded?.["wp:term"]?.flat() || [];
        const relatedCategory =
          relatedTerms.find((term) => term.taxonomy === "category")?.name || "Artikel";

        return {
          id: relItem.id,
          slug: relItem.slug,
          title: relItem.title.rendered,
          image: relItem._embedded?.["wp:featuredmedia"]?.[0]?.source_url || FALLBACK_IMAGE,
          date: new Date(relItem.date).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
          category: relatedCategory,
        };
      });
    }
  }

  return { post, relatedPosts };
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const data = await getBlogPostData(slug);

  if (!data) {
    return {
      title: "Artikel Tidak Ditemukan",
      description: "Halaman yang kamu cari belum tersedia.",
    };
  }

  const { post } = data;
  const articleUrl = `${SITE_URL}/blog/${post.slug}`;
  const cleanTitle = stripHtml(post.title);
  const wordCount = post.plainTextContent.split(/\s+/).filter(Boolean).length;

  return {
    title: cleanTitle,
    description: post.excerpt.slice(0, 160),
    keywords: post.tags.length > 0 ? post.tags : ["artikel pendidikan", "edunav"],
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: "Edunav",
    openGraph: {
      title: cleanTitle,
      description: post.excerpt.slice(0, 200),
      url: articleUrl,
      siteName: "Edunav",
      type: "article",
      publishedTime: post.isoDate,
      modifiedTime: post.modifiedDate,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: cleanTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description: post.excerpt.slice(0, 200),
      images: [post.image],
      creator: "@edunav_id",
      site: "@edunav_id",
    },
    alternates: {
      canonical: articleUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "article:wordCount": String(wordCount),
      "article:readingTime": `${post.readingTimeMinutes} menit`,
      "article:section": post.category,
    },
  };
}

export const revalidate = 3600;

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const data = await getBlogPostData(slug);

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f7fb] px-5">
        <div className="max-w-md rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <h1 className="mb-3 text-2xl font-bold text-slate-900">Artikel tidak ditemukan</h1>
          <p className="mb-6 text-sm leading-7 text-slate-500">
            Halaman yang kamu cari belum tersedia atau slug artikelnya berubah.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-[#1B91CB] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#177fb1]"
          >
            <ArrowLeft size={16} />
            Kembali ke Blog
          </Link>
        </div>
      </div>
    );
  }

  const { post, relatedPosts } = data;
  const articleUrl = `${SITE_URL}/blog/${post.slug}`;
  const wordCount = post.plainTextContent.split(/\s+/).filter(Boolean).length;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#blogposting`,
    headline: stripHtml(post.title),
    description: post.excerpt,
    image: post.image,
    datePublished: post.isoDate,
    dateModified: post.modifiedDate,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Edunav",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/edunav.png`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    inLanguage: "id-ID",
    wordCount: wordCount,
    articleSection: post.category,
    keywords: post.tags.length > 0 ? post.tags.join(", ") : undefined,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category,
        item: articleUrl,
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </div>
  );
}
