// app/blog/page.tsx - Dedicated Blog Listing Page (Server Component for SEO)
import { Metadata } from "next";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";

const WORDPRESS_POSTS_API = "https://www.edunav.net/wp-json/wp/v2/posts";
const SITE_URL = "https://www.edunav.net";
const POSTS_PER_PAGE = 12;

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
    author?: Array<{ name: string; avatar_urls?: { [key: string]: string } }>;
    "wp:term"?: Array<Array<{ name: string; taxonomy: string; slug: string }>>;
  };
}

interface TaxonomyTerm {
  name: string;
  slug: string;
  taxonomy: string;
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

async function getPosts(page: number = 1): Promise<{
  posts: Array<{
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    isoDate: string;
    image: string;
    author: string;
    category: string;
    categorySlug: string;
  }>;
  totalPages: number;
  totalPosts: number;
}> {
  const response = await fetch(
    `${WORDPRESS_POSTS_API}?_embed&per_page=${POSTS_PER_PAGE}&page=${page}`,
    {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  );

  if (!response.ok) {
    return { posts: [], totalPages: 0, totalPosts: 0 };
  }

  const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0");
  const totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "0");
  const data: WPPost[] = await response.json();

  const posts = data.map((item) => {
    const featuredImg =
      item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop";
    const authorName = item._embedded?.author?.[0]?.name || "Admin";
    const terms: TaxonomyTerm[] = item._embedded?.["wp:term"]?.flat() || [];
    const categories = terms.filter((term) => term.taxonomy === "category");
    const primaryCategory = categories[0];

    return {
      id: item.id,
      slug: item.slug,
      title: item.title.rendered,
      excerpt: stripHtml(item.excerpt.rendered),
      date: new Date(item.date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      isoDate: item.date,
      image: featuredImg,
      author: authorName,
      category: primaryCategory?.name || "Artikel",
      categorySlug: primaryCategory?.slug || "artikel",
    };
  });

  return { posts, totalPages, totalPosts };
}

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog Edunav - Artikel, Tips & Berita Pendidikan",
    description:
      "Temukan artikel terbaru seputar sistem informasi sekolah, tips pendidikan, studi kasus implementasi Edunav, dan berita teknologi pendidikan terkini.",
    keywords: [
      "blog edunav",
      "artikel pendidikan",
      "sistem informasi sekolah",
      "tips sekolah digital",
      "studi kasus edunav",
      "berita pendidikan indonesia",
    ],
    openGraph: {
      title: "Blog Edunav - Artikel & Berita Pendidikan",
      description: "Update terbaru seputar Edunav, sistem informasi manajemen sekolah, dan tips pendidikan.",
      url: `${SITE_URL}/blog`,
      siteName: "Edunav",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/assets/edunav-banner.webp`,
          width: 1200,
          height: 630,
          alt: "Blog Edunav",
        },
      ],
    },
    alternates: {
      canonical: `${SITE_URL}/blog`,
    },
  };
}

// JSON-LD Schema for Blog Collection
function generateBlogSchema(
  posts: Array<{
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    isoDate: string;
    image: string;
    author: string;
    category: string;
    categorySlug: string;
  }>
) {
  const itemList = posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.isoDate,
    author: {
      "@type": "Person",
      name: post.author,
    },
    image: post.image,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog Edunav",
    description: "Kumpulan artikel seputar Edunav dan pendidikan",
    url: `${SITE_URL}/blog`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          headline: post.title,
          url: `${SITE_URL}/blog/${post.slug}`,
        },
      })),
    },
  };
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1");
  const { posts, totalPages, totalPosts } = await getPosts(currentPage);
  const schema = generateBlogSchema(posts);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-white py-16 md:py-24">
        {/* Background Effects */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#1B91CB]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#01bcd5]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <span className="inline-block text-[#0891b2] font-bold tracking-[0.2em] uppercase text-[11px] px-4 py-1.5 rounded-full mb-4 border border-[#0891b2]/20 shadow-sm">
              Blog & Artikel
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-5 tracking-tight leading-tight">
              Wawasan & Berita Terbaru
            </h1>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Temukan artikel seputar sistem informasi sekolah, tips pendidikan, studi kasus implementasi,
              dan berita teknologi pendidikan terkini.
            </p>
            {totalPosts > 0 && (
              <p className="text-sm text-slate-400 mt-4">
                Menampilkan {posts.length} dari {totalPosts} artikel
              </p>
            )}
          </div>

          {/* Blog Grid */}
          {posts.length === 0 ? (
            <div className="rounded-[2rem] border border-rose-100 bg-white px-8 py-16 text-center shadow-sm">
              <p className="text-lg font-bold text-slate-900 mb-2">Belum ada artikel</p>
              <p className="text-sm text-slate-500">
                Artikel belum tersedia saat ini. Silakan kembali lagi nanti.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-16">
              {currentPage > 1 && (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-[#0891b2] border-slate-200 bg-white hover:border-[#0891b2] hover:bg-[#0891b2]/5 shadow-sm hover:scale-105 transition-all duration-300"
                  aria-label="Previous page"
                >
                  <ArrowRight size={18} strokeWidth={2.5} className="rotate-180" />
                </Link>
              )}

              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <Link
                    key={pageNum}
                    href={`/blog?page=${pageNum}`}
                    className={`w-10 h-10 rounded-full font-bold text-[13px] border transition-all duration-300 flex items-center justify-center ${
                      currentPage === pageNum
                        ? "bg-[#0891b2] text-white border-[#0891b2] shadow-[0_8px_20px_rgba(8,145,178,0.3)] scale-110"
                        : "bg-white text-slate-500 border-slate-200 hover:border-[#0891b2] hover:text-[#0891b2] hover:bg-[#0891b2]/5"
                    }`}
                  >
                    {pageNum}
                  </Link>
                );
              })}

              {currentPage < totalPages && (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-[#0891b2] border-slate-200 bg-white hover:border-[#0891b2] hover:bg-[#0891b2]/5 shadow-sm hover:scale-105 transition-all duration-300"
                  aria-label="Next page"
                >
                  <ArrowRight size={18} strokeWidth={2.5} />
                </Link>
              )}
            </div>
          )}

          {/* Back to Home */}
          <div className="mt-20 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#0891b2] transition-colors"
            >
              <ArrowRight size={16} strokeWidth={2.5} className="rotate-180" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
