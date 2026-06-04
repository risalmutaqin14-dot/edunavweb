// src/lib/article-schema.ts
/**
 * Article/BlogPosting Schema Generator
 * Untuk blog pages - meningkatkan AI visibility
 */

export interface ArticleSchemaInput {
  title: string;
  description: string;
  content: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  imageUrl?: string;
  keywords?: string[];
  category?: string;
}

export function generateArticleSchema(input: ArticleSchemaInput) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${input.url}#article`,
    headline: input.title,
    description: input.description,
    image: input.imageUrl
      ? {
          "@type": "ImageObject",
          url: input.imageUrl,
          width: 1200,
          height: 630,
        }
      : undefined,
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    author: {
      "@type": "Person",
      name: input.author,
      url: "https://www.edunav.net",
    },
    publisher: {
      "@type": "Organization",
      name: "Edunav",
      logo: {
        "@type": "ImageObject",
        url: "https://www.edunav.net/assets/edunav.png",
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
    keywords: input.keywords?.join(", "),
    articleSection: input.category,
    inLanguage: "id-ID",
    wordCount: input.content.split(/\s+/).length,
    articleBody: input.content.replace(/<[^>]+>/g, "").substring(0, 200) + "...",
  };

  // Remove undefined values
  return Object.fromEntries(
    Object.entries(schema).filter(([_, v]) => v !== undefined)
  );
}

/**
 * BlogPosting schema variant (more specific for blog posts)
 */
export function generateBlogPostingSchema(input: ArticleSchemaInput) {
  const articleSchema = generateArticleSchema(input);
  return {
    ...articleSchema,
    "@type": "BlogPosting",
    "@id": `${input.url}#blogposting`,
  };
}

/**
 * Predefined schemas for sample blog posts
 */
import { posts } from '../../data.js';

export const articleSchemas = posts.map((post) =>
  generateBlogPostingSchema({
    title: post.title,
    description: post.excerpt,
    content: post.content,
    author: "Edunav Team",
    datePublished: post.date,
    dateModified: post.date,
    url: `https://www.edunav.net/blog/${post.id}`,
    imageUrl: post.image ? `https://www.edunav.net${post.image}` : undefined,
    keywords: ["Edunav", "Sistem Informasi Sekolah", "SIMS", "Manajemen Sekolah"],
    category: "Education Technology",
  })
);

/**
 * Schema collection for homepage (includes latest articles)
 */
export function getHomepageArticleSchemas() {
  return articleSchemas.slice(0, 3); // Latest 3 articles
}
