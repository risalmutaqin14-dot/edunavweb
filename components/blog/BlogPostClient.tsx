"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  Link2,
  MessageCircle,
  Tag,
  User,
  X,
} from "lucide-react";

// Helper function to decode HTML entities
const decodeHTMLEntities = (text: string): string => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
};

export interface BlogPostViewModel {
  id: number;
  slug: string;
  title: string;
  content: string;
  plainTextContent: string;
  excerpt: string;
  date: string;
  isoDate: string;
  image: string;
  author: string;
  authorAvatar?: string;
  category: string;
  categorySlug: string;
  tags: string[];
  readingTimeMinutes: number;
}

export interface RelatedPostViewModel {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  category: string;
}

interface BlogPostClientProps {
  post: BlogPostViewModel;
  relatedPosts: RelatedPostViewModel[];
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "").trim();
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const { t } = useTranslation();
  const [showShareButtons, setShowShareButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentSection = document.getElementById("article-content");
      if (!contentSection) return;

      const rect = contentSection.getBoundingClientRect();
      setShowShareButtons(rect.top <= 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : `https://www.edunav.net/blog/${post.slug}`;
  const shareTitle = stripHtml(post.title);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert(t("blogpost.copied") || "Link berhasil disalin!");
  };

  const shareToX = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
  };

  const shareToWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${shareTitle} ${shareUrl}`)}`,
      "_blank"
    );
  };

  return (
    <article className="relative min-h-screen overflow-hidden pt-16 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-24 h-72 w-72 rounded-full bg-[#1B91CB]/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[22rem] h-96 w-96 rounded-full bg-[#01bcd5]/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.96),_rgba(245,247,251,0)_70%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-20 lg:px-8">
        <Link
          href="/#blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-[#0891b2]"
        >
          <ArrowLeft size={16} />
          {t("blogpost.back_to_blog") || "Kembali ke Blog"}
        </Link>

        <section className="mb-10">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-600"
          >
            <Link href="/" className="transition-colors hover:text-[#0891b2]">
              {t("blogpost.breadcrumb_home") || "Home"}
            </Link>
            <ChevronRight size={14} />
            <Link href="/#blog" className="transition-colors hover:text-[#0891b2]">
              {t("blogpost.breadcrumb_blog") || "Blog"}
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-500">{post.category}</span>
          </nav>

          <div className="mb-5 inline-flex rounded-full border border-[#0891b2]/15 bg-[#0891b2]/8 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0891b2]">
            {post.category}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl text-2xl font-black leading-tight tracking-tight text-slate-950 md:text-3xl lg:text-4xl"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            {decodeHTMLEntities(post.excerpt)}
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-3 rounded-full bg-slate-50 px-2 py-2 pr-4">
              {post.authorAvatar ? (
                <Image
                  src={post.authorAvatar}
                  alt={post.author}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0891b2] to-[#0696a8] text-sm font-bold text-white">
                  {post.author.charAt(0)}
                </div>
              )}
              <div className="min-w-0">
                <p className="flex items-center gap-2 font-semibold text-slate-900">
                  <User size={14} className="text-[#0891b2]" />
                  <span className="truncate">{post.author}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3">
              <Calendar size={15} className="text-[#0891b2]" />
              <span>{post.date}</span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3">
              <Clock size={15} className="text-[#0891b2]" />
              <span>
                {t("blogpost.reading_time", {
                  count: post.readingTimeMinutes,
                  minutes: post.readingTimeMinutes,
                  defaultValue: `${post.readingTimeMinutes} menit baca`,
                })}
              </span>
            </div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-14"
        >
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-slate-200 shadow-[0_28px_90px_rgba(15,23,42,0.16)]">
            <div className="relative aspect-[16/10] md:aspect-[21/10]">
              <Image src={post.image} alt={stripHtml(post.title)} fill priority className="object-cover" />
            </div>
          </div>
        </motion.section>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
          <motion.section
            id="article-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="min-w-0 rounded-[2rem] border border-white/70 bg-white px-6 py-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] md:px-10 md:py-12"
          >
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-extrabold
                prose-headings:tracking-[-0.03em]
                prose-headings:text-slate-950
                prose-p:text-slate-600
                prose-p:text-[16px]
                prose-p:leading-7
                prose-a:text-[#0891b2]
                prose-a:font-semibold
                prose-a:no-underline
                prose-a:hover:underline
                prose-strong:text-slate-900
                prose-strong:font-semibold
                prose-li:text-slate-600
                prose-li:leading-8
                prose-blockquote:rounded-r-2xl
                prose-blockquote:border-l-[3px]
                prose-blockquote:border-[#0891b2]
                prose-blockquote:bg-[#f8fbfd]
                prose-blockquote:px-6
                prose-blockquote:py-4
                prose-blockquote:text-slate-700
                prose-img:rounded-[1.5rem]
                prose-img:shadow-[0_24px_60px_rgba(15,23,42,0.12)]
                prose-pre:rounded-2xl
                prose-hr:border-slate-200"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {post.tags.length > 0 && (
              <div className="mt-12 border-t border-slate-100 pt-8">
                <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                  <Tag size={16} className="text-[#0891b2]" />
                  {t("blogpost.tags") || "Tags"}
                </div>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tagName) => (
                    <Link
                      key={tagName}
                      href={`/blog/tag/${tagName.toLowerCase().replace(/\s+/g, "-")}`}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:border-[#0891b2]/30 hover:bg-[#0891b2]/8 hover:text-[#0891b2]"
                    >
                      #{tagName}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.section>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-md">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0891b2]">
                {t("blogpost.share_article") || "Share Article"}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={shareToX}
                  className="flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                  <X size={16} />
                  <span>{t("blogpost.share_x") || "Tweet"}</span>
                </button>
                <button
                  onClick={shareToWhatsApp}
                  className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                  <MessageCircle size={16} />
                  <span>{t("blogpost.share_whatsapp") || "WhatsApp"}</span>
                </button>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition-transform hover:scale-105"
                >
                  <Link2 size={16} />
                  <span>{t("blogpost.copy_link") || "Copy"}</span>
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0891b2] to-[#0696a8] p-[1px] shadow-[0_22px_70px_rgba(8,145,178,0.28)]">
              <div className="rounded-[calc(2rem-1px)] bg-slate-950 px-6 py-7 text-white">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-white/60">
                  {t("blogpost.cta_eyebrow") || "Edunav"}
                </p>
                <h3 className="mt-3 text-xl font-black leading-tight">
                  {t("blogpost.cta_title") || "Bangun pengalaman sekolah digital yang lebih modern."}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  {t("blogpost.cta_desc") || "Lihat bagaimana Edunav membantu operasional, komunikasi, dan pembelajaran jadi lebih terintegrasi."}
                </p>
                <Link
                  href="/#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0891b2] transition-transform hover:-translate-y-0.5"
                >
                  {t("blogpost.cta_button") || "Hubungi Kami"}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {showShareButtons && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-slate-900/90 px-4 py-3 shadow-2xl backdrop-blur-md md:hidden"
        >
          <div className="flex items-center gap-3">
            <button
              onClick={shareToX}
              aria-label={t("blogpost.share_x") || "Share to X"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110"
            >
              <X size={18} />
            </button>
            <button
              onClick={shareToWhatsApp}
              aria-label={t("blogpost.share_whatsapp") || "Share to WhatsApp"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110"
            >
              <MessageCircle size={18} />
            </button>
            <button
              onClick={copyToClipboard}
              aria-label={t("blogpost.copy_link") || "Copy link"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 transition-transform hover:scale-110"
            >
              <Link2 size={18} />
            </button>
          </div>
        </motion.div>
      )}

      {relatedPosts.length > 0 && (
        <section className="relative border-t border-white/60 bg-white/50 py-16">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-5">
              <div className="max-w-2xl">
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#0891b2]">
                  {t("blogpost.related") || "Related Articles"}
                </p>
                <h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                  {t("blogpost.related_title") || "Artikel terkait yang mungkin Anda sukai"}
                </h2>
              </div>
              <Link
                href="/#blog"
                className="hidden items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-[#0891b2] md:inline-flex"
              >
                {t("blogpost.view_all") || "Lihat semua"}
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                    <Image
                      src={related.image}
                      alt={stripHtml(related.title)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <span className="rounded-full bg-[#0891b2]/8 px-2.5 py-1 text-[#0891b2]">
                        {related.category}
                      </span>
                      <span>&bull;</span>
                      <span>{related.date}</span>
                    </div>

                    <h3
                      className="mb-3 line-clamp-2 text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#0891b2]"
                      dangerouslySetInnerHTML={{ __html: related.title }}
                    />

                    <div className="text-sm font-semibold text-[#0891b2]">
                      {t("blogpost.read_more") || "Baca selengkapnya"} →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
