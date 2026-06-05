"use client";

import React from "react";
import Image from "next/image";
import { partnerLogos } from "../../data.js";
import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

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
  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="partners" className="py-14 md:py-18 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* =========================================================================
          PART 1: ORIGINAL PARTNERS CAROUSEL (Seksi Atas)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 mb-24">
        {/* Header Section Murni dari Teks Asli Anda */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B91CB]/10 text-[#0891b2] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 border border-[#0891b2]/20">
            {t("Partners.tag")}
          </span>
          <h2 className="text-[1.9rem] md:text-[2.3rem] font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
            {t("Partners.title")}
          </h2>
          <p className="text-[15px] md:text-base text-slate-500 leading-7">
            {t("Partners.desc")}
          </p>
        </div>

        {/* Marquee Track Menggunakan Framer Motion (5 Card per Slide, Gap Rapat) */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none" />

          <div className="overflow-hidden py-4">
            <motion.div 
              className="flex w-max gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 90, // Guliran lambat dan halus
                repeat: Infinity,
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {duplicatedLogos.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="group flex items-center justify-center w-[180px] h-[100px] md:w-[240px] md:h-[120px] lg:w-[260px] lg:h-[130px] bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(1,188,213,0.1)] hover:-translate-y-1 hover:border-[#01bcd5]/30 transition-all duration-300 shrink-0 cursor-pointer"
                >
                  <div className="relative w-[130px] h-[60px] md:w-[170px] md:h-[80px] lg:w-[190px] lg:h-[85px]">
                    <Image
                      src={partner.image}
                      alt={partner.alt || "Partner Logo"}
                      fill
                      sizes="(max-width: 768px) 130px, (max-width: 1024px) 170px, 190px"
                      className="object-contain filter group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PART 2: SECOLAH GARUDA 2026 INFO BANNER (Seksi Bawah Terpisah)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Banner Utama Berwarna Biru dengan Sudut Lengkung Raksasa ala Pinterest */}
        <motion.div 
          className="bg-gradient-to-br from-[#0891b2] to-[#0696a8] rounded-[2.5rem] p-8 md:p-12 xl:p-16 text-white shadow-[0_20px_50px_rgba(8,145,178,0.2)] relative overflow-hidden group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
        >
          {/* Aksen Kilau Dekoratif di Latar Belakang */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Bagian Kiri Banner (Branding & Keterangan Kementerian) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Emblem Logo Sekolah Garuda tiruan dari image_f5953f.png */}
              <div className="flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Award size={18} className="text-white" />
                <span className="text-[11px] font-bold uppercase tracking-wider">Apresiasi Khusus</span>
              </div>

              <h3 className="text-[1.9rem] md:text-[2.3rem] font-black leading-tight mb-5 tracking-tight">
                SEKOLAH GARUDA
              </h3>
              
              <p className="text-white/90 text-[15px] md:text-base font-medium leading-7 mb-6 text-balance">
                EDUNAV bangga mendampingi sekolah-sekolah terbaik di Indonesia yang telah lolos seleksi kementerian. Bersama, kita wujudkan digitalisasi pendidikan yang unggul dan berdampak.
              </p>

              {/* Garis Vertikal Indikator Kementerian */}
              <div className="pl-4 border-l-2 border-white/40 text-white/70 text-[11px] md:text-[13px] italic leading-6">
                Sekolah Menengah Atas Unggul Garuda Transformasi 2026 oleh Kementerian Pendidikan Tinggi, Sains, dan Teknologi Republik Indonesia.
              </div>
            </div>

            {/* Bagian Kanan Banner (Daftar Sekolah Berprestasi) */}
            <div className="lg:col-span-6 bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 shadow-inner">
              <h4 className="text-[13px] font-bold uppercase tracking-widest text-white/80 mb-5 border-b border-white/10 pb-3">
                Selamat Atas Pencapaian Sekolah Garuda 2026:
              </h4>
              
              {/* Grid 1 Kolom untuk List Sekolah */}
              <ul className="space-y-3.5">
                {sekolahGaruda.map((namaSekolah, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-3 text-[13px] md:text-[15px] font-semibold group/item"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <CheckCircle2 size={18} className="text-white shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="leading-tight text-white/95 group-hover/item:text-white">{namaSekolah}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      </div>

    </section>
  );
}
