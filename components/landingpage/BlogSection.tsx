"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { User, ChevronLeft, ChevronRight, ArrowRight, Calendar } from "lucide-react";

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

return (
  <section id="blog" className="py-24 bg-[#F8FAFC] overflow-hidden relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-[#1B91CB]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-[#01bcd5]/10 rounded-full blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
    
    {/* Header Section */}
    <div className="mb-20 max-w-2xl mx-auto text-center">
      <span className="inline-block text-[#0891b2] font-bold tracking-[0.2em] uppercase text-[11px] px-4 py-1.5 rounded-full mb-4 border border-[#0891b2]/20 shadow-sm">
        {t("blog.tag") || "Wawasan & Berita"}
      </span>
      <h2 className="text-[1.9rem] md:text-[2.35rem] font-black text-slate-900 mt-2 mb-4 tracking-tight leading-tight">
        {t("blog.title")}
      </h2>
      <p className="text-slate-500 text-[15px] md:text-base leading-7">{t("blog.sub-title")}</p>
    </div>

    {/* Loading Skeleton */}
    {loading ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="animate-pulse bg-white/80 rounded-[2.5rem] border border-slate-100 flex flex-col h-[420px] shadow-sm overflow-hidden">
            <div className="bg-slate-200 h-48 w-full" />
            <div className="flex flex-1 flex-col p-5">
              <div className="h-4 bg-slate-200 w-1/3 rounded-md mb-4" />
              <div className="h-5 bg-slate-200 w-full rounded-md mb-2" />
              <div className="h-5 bg-slate-200 w-3/4 rounded-md mb-4" />
              <div className="h-4 bg-slate-200 w-full rounded-md mb-2" />
              <div className="h-4 bg-slate-200 w-5/6 rounded-md mb-auto" />
              <div className="h-8 bg-slate-200 w-1/3 rounded-full mt-4" />
            </div>
          </div>
        ))}
      </div>
    ) : error ? (
      <div className="rounded-[2rem] border border-rose-100 bg-white px-6 py-10 text-center shadow-sm">
        <p className="text-lg font-bold text-slate-900">Blog belum bisa dimuat</p>
        <p className="mt-2 text-sm leading-7 text-slate-500">{error}</p>
      </div>
    ) : (
      <>
        {/* Bento Grid Area */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {posts.map((p, index) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.05 }}
                className="group bg-white/70 backdrop-blur-md rounded-[1.5rem] border border-white shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(27,145,203,0.12)] hover:-translate-y-1.5 flex flex-col h-full transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Image Area with Zoom & Badge */}
                <div className="relative h-48 w-full overflow-hidden shrink-0">
                  <Link href={`/blog/${p.slug}`} className="block w-full h-full relative">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-w-768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      priority={page === 1}
                    />
                  </Link>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  {/* Metadata Bar */}
                  <div className="flex items-center justify-between gap-3 text-[10px] md:text-[11px] text-slate-500 mb-3 pb-3 border-b border-slate-100">
                    <span className="flex items-center gap-1.5 font-bold text-[#0891b2]">
                      <Calendar size={12} strokeWidth={2.5} />
                      {p.date}
                    </span>
                    <span className="flex items-center gap-1 font-semibold truncate">
                      <User size={12} strokeWidth={2.5} /> 
                      <span className="truncate">{p.author}</span>
                    </span>
                  </div>

                  {/* Title Link */}
                  <Link href={`/blog/${p.slug}`} className="mb-2.5 block">
                    <h3 
                      className="text-[15px] md:text-base font-extrabold text-slate-800 leading-snug line-clamp-2 hover:text-[#0891b2] transition-colors duration-300"
                      dangerouslySetInnerHTML={{ __html: p.title }}
                    />
                  </Link>

                  {/* Excerpt */}
                  <p className="text-[12px] md:text-[13px] text-slate-500 leading-[1.7] line-clamp-3 mb-5 font-medium">
                    {decodeHTMLEntities(p.excerpt)}
                  </p>

                  {/* Minimalist Pill Badges (Tags) */}
                  
                </div>

                {/* Bottom Read More Action Link */}
                <div className="px-5 pb-5 pt-4 md:px-6 md:pb-6 border-t border-slate-100 shrink-0">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group/btn inline-flex items-center gap-2 text-[12px] md:text-[13px] font-extrabold text-[#0891b2] hover:text-[#0696a8] transition-colors duration-300"
                  >
                    <span>{t("blog.read_more") || "Baca Artikel"}</span>
                    <ArrowRight
                      size={14}
                      strokeWidth={2.5}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- MODERN PAGINATION --- */}
        {totalPages > 1 && (
          <div className="mt-20 flex items-center justify-center gap-3">
            {/* Prev Button */}
            <button
              onClick={() => handlePageChange(Math.max(1, page - 1))}
              disabled={page === 1}
              aria-label="Previous page"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                page === 1
                  ? "text-slate-300 border-transparent cursor-not-allowed bg-slate-100"
                  : "text-[#0891b2] border-slate-200 bg-white hover:border-[#0891b2] hover:bg-[#0891b2]/5 shadow-sm hover:scale-105"
              }`}
            >
              <ChevronLeft size={18} strokeWidth={2.5} />
            </button>

            {/* Page Numbering */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                aria-label={`Page ${number}`}
                aria-current={page === number ? "page" : undefined}
                className={`w-10 h-10 rounded-full font-bold text-[13px] border transition-all duration-300 flex items-center justify-center ${
                  page === number
                    ? "bg-[#0891b2] text-white border-[#0891b2] shadow-[0_8px_20px_rgba(8,145,178,0.3)] scale-110"
                    : "bg-white text-slate-500 border-slate-200 hover:border-[#0891b2] hover:text-[#0891b2] hover:bg-[#0891b2]/5"
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
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                page === totalPages
                  ? "text-slate-300 border-transparent cursor-not-allowed bg-slate-100"
                  : "text-[#0891b2] border-slate-200 bg-white hover:border-[#0891b2] hover:bg-[#0891b2]/5 shadow-sm hover:scale-105"
              }`}
            >
              <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        )}
      </>
    )}
  </div>
  </section>
  );
}
