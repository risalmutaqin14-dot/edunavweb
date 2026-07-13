"use client";

import React from "react";
import Image from "next/image";
import { partnerLogos } from "../../data.js";
import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";
import { Award, CheckCircle2, Building2, Globe, Users } from "lucide-react";

export default function Partners() {
  const { t } = useTranslation();

  // Menduplikasi array logo agar efek gulir (loop) tidak terputus
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  // List Sekolah Garuda 2026 berdasarkan gambar referensi image_f5953f.png
  const sekolahGaruda = [
    "Cahaya Rancamaya Islamic Boarding School",
    "SMA Fatih Bilingual Boarding School",
    "SMP-SMA Kesatuan Bangsa",
    "SMA Kharisma Bangsa",
    "SMA Pribadi Bandung",
    "SMA Semesta Bilingual Boarding School",
    "SMA Dwiwarna (Boarding School)",
    "SMA TNA Fatih"
  ];

  // Variasi Animasi Framer Motion untuk Efek Fade-In saat Scroll
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="partners" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-[#12AAC9]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-[#7897D6]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

        {/* =========================================================================
            PART 1: PARTNERS CAROUSEL (Seksi Atas)
            ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-20"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#12AAC9]/10 to-[#7897D6]/10 border border-[#12AAC9]/20 mb-6"
            >
              <Building2 size={14} className="text-[#12AAC9]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#12AAC9]">
                {t("Partners.tag")}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-[2rem] md:text-[3rem] font-black text-slate-900 leading-[1.2] mb-6 tracking-tight"
            >
              {t("Partners.title")}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[16px] md:text-lg text-slate-600 leading-8 max-w-2xl mx-auto"
            >
              {t("Partners.desc")}
            </motion.p>

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-8 mt-10 pt-10 border-t border-slate-200/60"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#12AAC9] to-[#7897D6] flex items-center justify-center">
                  <Building2 size={18} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-slate-900">175+</p>
                  <p className="text-xs text-slate-500">Sekolah</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#12AAC9] to-[#7897D6] flex items-center justify-center">
                  <Globe size={18} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-slate-900">5+</p>
                  <p className="text-xs text-slate-500">Negara</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#12AAC9] to-[#7897D6] flex items-center justify-center">
                  <Users size={18} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-slate-900">42K+</p>
                  <p className="text-xs text-slate-500">Pengguna</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Marquee Carousel */}
          <motion.div
            variants={itemVariants}
            className="relative w-full overflow-hidden"
          >
            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

            <div className="overflow-hidden py-6">
              <motion.div
                className="flex w-max gap-5"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  ease: "linear",
                  duration: 90,
                  repeat: Infinity,
                }}
                whileHover={{ animationPlayState: "paused" }}
              >
                {duplicatedLogos.map((partner, index) => (
                  <motion.div
                    key={`${partner.id}-${index}`}
                    className="group flex items-center justify-center w-[170px] h-[95px] md:w-[220px] md:h-[120px] lg:w-[250px] lg:h-[130px]
                      bg-white rounded-2xl
                      border border-slate-100
                      shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                      hover:shadow-[0_15px_40px_rgba(18,170,201,0.12)]
                      hover:-translate-y-2
                      hover:border-[#12AAC9]/30
                      transition-all duration-300 ease-out
                      shrink-0 cursor-pointer
                      overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative w-[120px] h-[55px] md:w-[150px] md:h:[70px] lg:w-[180px] lg:h-[80px]">
                      <Image
                        src={partner.image}
                        alt={partner.alt || "Partner Logo"}
                        fill
                        sizes="(max-width: 768px) 120px, (max-width: 1024px) 150px, 180px"
                        className="object-contain filter group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* =========================================================================
            PART 2: SEKOLAH GARUDA 2026 INFO BANNER
            ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Banner Utama dengan Dynamic Gradient Background */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 lg:p-16 text-white overflow-hidden"
            style={{
              background: `linear-gradient(135deg, #12AAC9 0%, #7897D6 50%, #12AAC9 100%)`,
              backgroundSize: "200% 200%",
              animation: "gradientShift 8s ease infinite",
            }}
          >
            {/* Animated Background Gradient */}
            <style jsx>{`
              @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}</style>

            {/* Floating Orbs for Extra Depth */}
            <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-white/15 rounded-full blur-3xl animate-pulse pointer-events-none animation-delay-1000" />
            <div className="absolute top-[40%] left-[30%] w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse pointer-events-none animation-delay-2000" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">

              {/* Bagian Kiri Banner */}
              <div className="flex flex-col items-start">
                {/* Badge dengan Glassmorphism */}
                <motion.div
                  className="flex items-center gap-3 mb-6 bg-white/20 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/30 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Award size={18} className="text-yellow-300 drop-shadow-lg" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">
                    {t("Partners.sekolah_garuda.badge")}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  variants={itemVariants}
                  className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-black leading-tight mb-5 tracking-tight drop-shadow-lg"
                >
                  {t("Partners.sekolah_garuda.title")}
                </motion.h3>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-white/90 text-[15px] md:text-base leading-7 mb-6 text-balance drop-shadow"
                >
                  {t("Partners.sekolah_garuda.desc")}
                </motion.p>

                {/* Ministry Indicator */}
                <motion.div
                  variants={itemVariants}
                  className="pl-4 border-l-2 border-white/40 text-white/80 text-[12px] md:text-[14px] italic leading-6 drop-shadow"
                >
                  {t("Partners.sekolah_garuda.desc")}
                </motion.div>
              </div>

              {/* Bagian Kanan Banner - Glassmorphism Card */}
              <motion.div
                variants={itemVariants}
                className="relative p-6 md:p-8 rounded-3xl
                  bg-white/15 backdrop-blur-xl
                  border border-white/20
                  shadow-[0_8px_32px_rgba(0,0,0,0.15)]
                  hover:bg-white/20
                  hover:shadow-[0_15px_45px_rgba(255,255,255,0.15)]
                  hover:-translate-y-1
                  transition-all duration-500 ease-out
                  overflow-hidden"
              >
                {/* Glass Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-50 pointer-events-none" />

                {/* Inner Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-[13px] font-bold uppercase tracking-widest text-white/90 mb-5 border-b border-white/20 pb-3 drop-shadow">
                    {t("Partners.sekolah_garuda.subtitle")}
                  </h4>

                  {/* List Sekolah */}
                  <ul className="space-y-3.5">
                    {sekolahGaruda.map((namaSekolah, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3 text-[13px] md:text-[15px] font-semibold group/item"
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 200, damping: 12 }}
                      >
                        <div className="relative">
                          <CheckCircle2 size={18} className="text-white shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform drop-shadow" />
                          <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </div>
                        <span className="leading-tight text-white/90 group-hover/item:text-white transition-colors drop-shadow">
                          {namaSekolah}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Hover Ring Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>

            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
