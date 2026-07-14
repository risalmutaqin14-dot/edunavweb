"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";
import { Sparkles, TrendingUp, Globe, Users, Building2 } from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  // Variasi Animasi Framer Motion untuk Staggered Effect
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  // Hardcoded content according to specification
  const statData = [
    { value: "5+", label: "Negara", icon: Globe },
    { value: "175+", label: "Sekolah", icon: Building2 },
    { value: "42.000", label: "Pengguna", icon: Users },
    { value: "85+", label: "Tenant", icon: TrendingUp },
  ];

  return (
    <section
      className="relative z-20 -mt-10 mb-20"
      style={{
        background: `linear-gradient(135deg, #0a7a8c 0%, #068CB8 50%, #046a7a 100%)`,
      }}
    >
      {/* Subtle Grid Pattern - Full Width */}
      <div className="absolute inset-0 opacity-6 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content Container */}
      <motion.div
        className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10"
        style={{
          padding: "clamp(2rem, 5vw, 4rem) 0",
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Subtle Floating Orbs */}
        <div className="absolute top-[-15%] right-[10%] w-[500px] h-[500px] bg-white/8 rounded-full blur-[120px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[10%] w-[500px] h-[500px] bg-white/6 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* --- SISI KIRI: TEKS PRESENTASI --- */}
          <div className="flex flex-col justify-center items-start text-left py-4">
            {/* Eyebrow Badge - Larger with more breathing room */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/25 text-[13px] font-semibold uppercase tracking-[0.2em] shadow-lg">
                <Sparkles size={14} className="animate-pulse text-yellow-300" />
                Data & Pencapaian
              </span>
            </motion.div>

            {/* Main Heading - Prominent with leading 1.3 */}
            <motion.h2
              variants={itemVariants}
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-white leading-[1.3] mb-7 tracking-tight text-balance drop-shadow-lg"
            >
              Sistem Informasi Sekolah Tercanggih dan Terlengkap yang Sesuai untuk Sekolah Anda
            </motion.h2>

            {/* Body Text - Scaled up 25% with leading 1.5 */}
            <motion.p
              variants={itemVariants}
              className="text-white/85 text-[clamp(0.95rem,2vw,1.15rem)] leading-[1.6] text-balance drop-shadow max-w-xl"
            >
              Edunav aktif digunakan oleh institusi pendidikan dengan berbagai model sekolah, kurikulum, dan kebutuhan operasional. Dengan 10 tahun lebih berdedikasi, kami terus berkomitmen mendukung transformasi digital sekolah di Indonesia.
            </motion.p>
          </div>

          {/* --- SISI KANAN: KARTU GRID STATISTIK 2x2 --- */}
          <div className="grid grid-cols-2 gap-5 lg:gap-6 w-full">
            {statData.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group relative flex flex-col items-center justify-center p-6 lg:p-7 rounded-2xl
                    bg-white/12 backdrop-blur-lg
                    border border-white/18
                    shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                    hover:bg-white/18
                    hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]
                    hover:-translate-y-1.5
                    transition-all duration-500 ease-out
                    cursor-default overflow-hidden"
                >
                  {/* Subtle Glass Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon with Glassmorphism Background */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-white/18 backdrop-blur-md border border-white/25 shadow-[0_4px_20px_rgba(255,255,255,0.12)] group-hover:bg-white/28 group-hover:shadow-[0_6px_24px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-all duration-400">
                      <Icon size={22} className="text-white/95 group-hover:text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Value */}
                  <p className="text-[2rem] lg:text-[2.25rem] font-black text-white transition-transform duration-300 group-hover:scale-105 drop-shadow-lg leading-none mb-2">
                    {stat.value}
                  </p>

                  {/* Label - Title Case, scaled up, legible weight */}
                  <p className="text-[11px] lg:text-[12px] font-medium text-white/80 capitalize tracking-wide text-center leading-relaxed drop-shadow">
                    {stat.label}
                  </p>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </motion.div>
    </section>
  );
}
