// src/lib/blog-listing-schema.ts
/**
 * Blog Listing Page Schema Generators
 * For the blog section on homepage and dedicated blog listing pages
 */

const SITE_URL = "https://www.edunav.net";

export interface BlogPostForSchema {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  isoDate: string;
  image: string;
  author: string;
  category?: string;
}

/**
 * Generate CollectionPage schema for blog listing
 * CollectionPage is ideal for listing pages that contain multiple items
 */
export function generateBlogCollectionSchema(
  posts: BlogPostForSchema[],
  currentPage: number = 1,
  totalPages: number = 1
) {
  const collectionUrl = `${SITE_URL}/#blog`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${collectionUrl}#collection`,
    url: collectionUrl,
    name: "Blog Edunav - Artikel Edukasi & Teknologi Sekolah",
    description: "Kumpulan artikel tentang sistem informasi sekolah, manajemen akademik, LMS, dan transformasi digital pendidikan di Indonesia.",
    inLanguage: "id-ID",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Edunav",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Edunav",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/edunav.png`,
        width: 512,
        height: 512,
      },
    },
    about: {
      "@type": "Thing",
      name: "Educational Technology",
      description: "Articles about school management systems, LMS, and digital transformation in education",
    },
    hasPart: posts.slice(0, 12).map((post) => ({
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/${post.slug}#blogposting`,
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      description: post.excerpt,
      datePublished: post.isoDate,
      dateModified: post.isoDate,
      image: post.image
        ? {
            "@type": "ImageObject",
            url: post.image,
            width: 1200,
            height: 630,
          }
        : undefined,
      author: {
        "@type": "Person",
        name: post.author,
      },
      publisher: {
        "@type": "Organization",
        name: "Edunav",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/assets/edunav.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blog/${post.slug}`,
      },
      inLanguage: "id-ID",
      articleSection: post.category || "Education",
    })),
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: collectionUrl,
        },
      ],
    },
    ...(totalPages > 1 && {
      pagination: {
        "@type": "Pagination",
        currentPage: currentPage,
        totalPages: totalPages,
        itemsPerPage: posts.length,
        totalItems: posts.length,
      },
    }),
  };

  // Remove undefined values
  return Object.fromEntries(
    Object.entries(schema).filter(([_, v]) => v !== undefined)
  );
}

/**
 * Generate ItemList schema for blog listing (alternative approach)
 * ItemList is simpler and works well with AI overviews
 */
export function generateBlogItemListSchema(posts: BlogPostForSchema[]) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Daftar Artikel Blog Edunav",
    description: "Daftar lengkap artikel edukasi dan teknologi sekolah dari Edunav",
    url: `${SITE_URL}/#blog`,
    numberOfItems: posts.length,
    itemListElement: posts.slice(0, 12).map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        "@id": `${SITE_URL}/blog/${post.slug}`,
        headline: post.title,
        url: `${SITE_URL}/blog/${post.slug}`,
        description: post.excerpt,
        datePublished: post.isoDate,
        author: {
          "@type": "Person",
          name: post.author,
        },
        image: post.image
          ? {
              "@type": "ImageObject",
              url: post.image,
            }
          : undefined,
      },
    })),
  };

  return schema;
}

/**
 * Generate DataFeed schema for blog RSS/Atom feed
 * Useful for RSS subscribers and blog aggregators
 */
export function generateBlogDataFeedSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "DataFeed",
    name: "Edunav Blog Feed",
    dataFeedElement: {
      "@type": "DataFeedItem",
      dateModified: new Date().toISOString(),
      item: {
        "@type": "BlogPosting",
        name: "Edunav Blog Articles",
      },
    },
  };
}
