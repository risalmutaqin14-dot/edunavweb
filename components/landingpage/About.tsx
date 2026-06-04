"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  // Variasi Animasi Framer Motion untuk Staggered Effect
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Jeda antar elemen masuk
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  const statData = [
    { value: "5+", label: t("counter.country") },
    { value: "175+", label: t("counter.school") },
    { value: "42.000", label: t("counter.user") },
    { value: "85+", label: t("counter.tenant") },
  ];

  return (
    <section className="relative z-20 -mt-10 mb-20 max-w-7xl mx-auto px-5 lg:px-8">
      {/* Container Utama dengan Glassmorphism Premium */}
      <motion.div 
        className="bg-gradient-to-r from-[#0696a8] to-[#0891b2] text-white backdrop-blur-xl border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.04)] rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Soft Background Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#01bcd5]/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1B91CB]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- SISI KIRI (50%): TEKS PRESENTASI --- */}
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow Badge */}
            <motion.span 
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 text-white border border-white/20 text-[11px] font-bold uppercase tracking-widest mb-5 shadow-sm"
            >
              <Sparkles size={12} className="animate-pulse text-white" />
              Data & Pencapaian
            </motion.span>
            
            {/* Title */}
            <motion.h2 
              variants={itemVariants}
              className="text-[26px] font-black text-white leading-[1.5] mb-5 tracking-tight text-balance"
            >
              {t("counter.title1")}
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-slate-100 text-[14px] leading-8 text-balance"
            >
              {t("counter.desc")}
            </motion.p>
          </div>

          {/* --- SISI KANAN (50%): KARTU GRID STATISTIK (2x2) --- */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
            {statData.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group flex flex-col items-center lg:items-start justify-center p-6 md:p-8 bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(27,145,203,0.08)] rounded-[2rem] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#01bcd5]/30 cursor-default"
              >
                {/* Gradient Number Text */}
                <p className="text-[2rem] md:text-[2.5rem] font-black bg-gradient-to-r from-[#0891b2] to-[#0696a8] bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
                  {stat.value}
                </p>
                {/* Stat Label */}
                <p className="mt-3 text-[10px] md:text-xs font-extrabold text-slate-600 uppercase tracking-widest text-center lg:text-left leading-normal">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
