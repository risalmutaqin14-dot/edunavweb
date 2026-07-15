"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { User, ChevronLeft, ChevronRight, ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";

// Helper function to decode HTML entities
const decodeHTMLEntities = (text: string): string => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
};

const WP_API_URL = "/api/wordpress/posts";

interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
  tags: string[];
}

export default function BlogSection() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const pageSize = 4;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${WP_API_URL}?_embed&per_page=${pageSize}&page=${page}`
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const totalWPPages = response.headers.get("X-WP-TotalPages");
        setTotalPages(parseInt(totalWPPages || "0") || 0);

        const data = await response.json();
        setError(null);

        const formattedPosts = data.map((item: any) => {
          const featuredImg =
            item._embedded &&
            item._embedded["wp:featuredmedia"] &&
            item._embedded["wp:featuredmedia"][0].source_url
              ? item._embedded["wp:featuredmedia"][0].source_url
              : "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop";

          const date = new Date(item.date).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });

          const authorName =
            item._embedded && item._embedded["author"]
              ? item._embedded["author"][0].name
              : "Admin";

          const terms =
            item._embedded && item._embedded["wp:term"]
              ? item._embedded["wp:term"]
              : [];
          const tagsList = terms
            .flat()
            .map((term: any) => term.name)
            .slice(0, 2);

          return {
            id: item.id,
            slug: item.slug,
            title: item.title.rendered,
            excerpt: item.excerpt.rendered.replace(/<[^>]+>/g, ""),
            date: date,
            image: featuredImg,
            author: authorName,
            tags: tagsList,
          };
        });

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching WP posts:", error);
        setPosts([]);
        setError("Artikel blog belum bisa dimuat saat ini.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    const section = document.getElementById("blog");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="blog" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] left-[10%] w-72 h-72 bg-[#12AAC9]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[15%] right-[5%] w-96 h-96 bg-[#7897D6]/5 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[30%] w-64 h-64 bg-[#12AAC9]/3 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-16 max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#12AAC9] to-[#7897D6] flex items-center justify-center">
              <BookOpen size={16} className="text-white" />
            </div>
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#12AAC9]">
              {t("blog.tag") || "Blog & Wawasan"}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-[2rem] md:text-[3rem] font-black text-slate-900 leading-[1.2] mb-6 tracking-tight"
          >
            {t("blog.title")}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-[16px] md:text-lg text-slate-600 leading-8 max-w-2xl mx-auto"
          >
            {t("blog.sub-title")}
          </motion.p>

        </motion.div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="animate-pulse bg-white rounded-2xl border border-slate-100 flex flex-col h-[420px] shadow-sm overflow-hidden"
              >
                <div className="bg-slate-200 h-52 w-full" />
                <div className="flex flex-1 flex-col p-5 gap-3">
                  <div className="h-4 bg-slate-200 w-24 rounded-md" />
                  <div className="h-5 bg-slate-200 w-full rounded-md" />
                  <div className="h-5 bg-slate-200 w-3/4 rounded-md" />
                  <div className="h-4 bg-slate-200 w-full rounded-md mt-auto" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-100 bg-rose-50/50 px-6 py-12 text-center">
            <BookOpen size={40} className="mx-auto text-rose-300 mb-4" />
            <p className="text-lg font-bold text-slate-900">Blog belum bisa dimuat</p>
            <p className="mt-2 text-sm leading-7 text-slate-500">{error}</p>
          </div>
        ) : (
          <>
            {/* Blog Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
            >
              <AnimatePresence mode="popLayout">
                {posts.map((p, index) => (
                  <motion.article
                    layout
                    key={p.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.08 }}
                    className="group bg-white rounded-2xl border border-slate-100
                      shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                      hover:shadow-[0_20px_50px_rgba(18,170,201,0.15)]
                      hover:-translate-y-2
                      transition-all duration-500 ease-out
                      flex flex-col h-full overflow-hidden cursor-pointer"
                  >
                    {/* Image Area with Gradient Overlay */}
                    <div className="relative h-52 w-full overflow-hidden shrink-0">
                      <Link href={`/blog/${p.slug}`} className="block w-full h-full relative">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          priority={page === 1}
                          unoptimized
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                        {/* Date Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-slate-700 shadow-sm">
                            <Calendar size={12} className="text-[#12AAC9]" />
                            {p.date}
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      {/* Title */}
                      <Link href={`/blog/${p.slug}`} className="mb-3 block">
                        <h3
                          className="text-[15px] md:text-base font-bold text-slate-800 leading-snug line-clamp-2 group-hover:text-[#12AAC9] transition-colors duration-300"
                          dangerouslySetInnerHTML={{ __html: p.title }}
                        />
                      </Link>

                      {/* Excerpt */}
                      <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-3 mb-4 flex-1">
                        {decodeHTMLEntities(p.excerpt)}
                      </p>

                      {/* Author & Read More */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
                          <User size={12} />
                          {p.author}
                        </span>
                        <Link
                          href={`/blog/${p.slug}`}
                          className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#12AAC9] hover:text-[#7897D6] transition-colors"
                        >
                          <span>{t("blog.read_more") || "Baca"}</span>
                          <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Modern Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 flex items-center justify-center gap-2"
              >
                {/* Prev Button */}
                <button
                  onClick={() => handlePageChange(Math.max(1, page - 1))}
                  disabled={page === 1}
                  aria-label="Previous page"
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    page === 1
                      ? "text-slate-300 bg-slate-100 cursor-not-allowed"
                      : "text-[#12AAC9] bg-white border border-slate-200 hover:border-[#12AAC9] hover:bg-[#12AAC9]/5 shadow-sm hover:scale-105"
                  }`}
                >
                  <ChevronLeft size={20} strokeWidth={2.5} />
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => handlePageChange(number)}
                    aria-label={`Page ${number}`}
                    aria-current={page === number ? "page" : undefined}
                    className={`w-11 h-11 rounded-xl font-bold text-sm transition-all duration-300 ${
                      page === number
                        ? "bg-gradient-to-r from-[#12AAC9] to-[#7897D6] text-white shadow-[0_8px_25px_rgba(18,170,201,0.35)] scale-110"
                        : "bg-white text-slate-500 border border-slate-200 hover:border-[#12AAC9] hover:text-[#12AAC9]"
                    }`}
                  >
                    {number}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
                  disabled={page === totalPages}
                  aria-label="Next page"
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    page === totalPages
                      ? "text-slate-300 bg-slate-100 cursor-not-allowed"
                      : "text-[#12AAC9] bg-white border border-slate-200 hover:border-[#12AAC9] hover:bg-[#12AAC9]/5 shadow-sm hover:scale-105"
                  }`}
                >
                  <ChevronRight size={20} strokeWidth={2.5} />
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
