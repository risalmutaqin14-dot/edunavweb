// src/lib/article-metadata.ts
/**
 * Article Metadata Generator with Date Published/Modified
 * Untuk AI visibility score improvement
 */

export interface ArticleMetadata {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
  imageUrl?: string;
}

/**
 * Generate article metadata with dates for SEO & AI Search
 */
export function generateArticleMetadata(metadata: ArticleMetadata) {
  const lastModified = metadata.dateModified || metadata.datePublished;

  return {
    title: metadata.title,
    description: metadata.description,
    authors: [{ name: metadata.author, url: "https://www.edunav.net" }],
    pubDate: metadata.datePublished,
    dateModified: lastModified,
    openGraph: {
      type: "article",
      publishedTime: metadata.datePublished,
      modifiedTime: lastModified,
      authors: [metadata.author],
      url: metadata.url,
      images: metadata.imageUrl ? [
        {
          url: metadata.imageUrl,
          width: 1200,
          height: 630,
          alt: metadata.title,
        }
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

/**
 * Generate JSON-LD Article schema with dates
 */
export function generateArticleJsonLd(metadata: ArticleMetadata) {
  const lastModified = metadata.dateModified || metadata.datePublished;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${metadata.url}#article`,
    headline: metadata.title,
    description: metadata.description,
    image: metadata.imageUrl,
    datePublished: metadata.datePublished,
    dateModified: lastModified,
    author: {
      "@type": "Person",
      name: metadata.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Edunav",
      url: "https://www.edunav.net",
      logo: {
        "@type": "ImageObject",
        url: "https://www.edunav.net/assets/edunav.png",
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": metadata.url,
    },
  };
}
