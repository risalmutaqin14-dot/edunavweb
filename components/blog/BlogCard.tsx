// components/blog/BlogCard.tsx - Blog Card Component for Listing Pages
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface BlogCardProps {
  post: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    author: string;
    category: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="group bg-white/80 backdrop-blur-sm rounded-[1.5rem] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(27,145,203,0.12)] hover:-translate-y-1.5 flex flex-col h-full transition-all duration-500 overflow-hidden"
    >
      {/* Image Area */}
      <div className="relative h-48 w-full overflow-hidden shrink-0">
        <Link href={`/blog/${post.slug}`} className="block w-full h-full relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-w: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            unoptimized
          />
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-[#0891b2] shadow-sm">
              {post.category}
            </span>
          </div>
        </Link>
      </div>

      <div className="flex flex-1 flex-col p-5">
        {/* Metadata Bar */}
        <div className="flex items-center gap-4 text-[11px] text-slate-500 mb-3">
          <span className="flex items-center gap-1.5 font-medium">
            <Calendar size={12} strokeWidth={2.5} className="text-[#0891b2]" />
            {post.date}
          </span>
          <span className="flex items-center gap-1 font-medium">
            <User size={12} strokeWidth={2.5} className="text-[#0891b2]" />
            {post.author}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`} className="mb-3 block">
          <h3 className="text-base md:text-lg font-extrabold text-slate-800 leading-snug line-clamp-2 hover:text-[#0891b2] transition-colors duration-300">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-sm text-slate-500 leading-[1.7] line-clamp-3 mb-auto">
          {post.excerpt}
        </p>

        {/* Read More */}
        <div className="pt-4 mt-auto">
          <Link
            href={`/blog/${post.slug}`}
            className="group/btn inline-flex items-center gap-2 text-sm font-extrabold text-[#0891b2] hover:text-[#0696a8] transition-colors duration-300"
          >
            <span>Baca Artikel</span>
            <ArrowRight
              size={16}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
