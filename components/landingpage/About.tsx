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
    { value: "5+", label: t("counter.country"), icon: Globe },
    { value: "175+", label: t("counter.school"), icon: Building2 },
    { value: "42.000", label: t("counter.user"), icon: Users },
    { value: "85+", label: t("counter.tenant"), icon: TrendingUp },
  ];

  return (
    <section className="relative z-20 -mt-10 mb-20 max-w-7xl mx-auto px-5 lg:px-8">
      {/* Container Utama dengan Dynamic Gradient Background */}
      <motion.div
        className="relative rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

          {/* --- SISI KIRI (50%): TEKS PRESENTASI --- */}
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow Badge */}
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30 text-[11px] font-bold uppercase tracking-widest mb-6 shadow-lg"
            >
              <Sparkles size={12} className="animate-pulse text-yellow-300" />
              Data & Pencapaian
            </motion.span>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-[28px] md:text-[32px] font-black text-white leading-[1.3] mb-6 tracking-tight text-balance drop-shadow-lg"
            >
              {t("counter.title1")}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/90 text-[15px] leading-8 text-balance drop-shadow"
            >
              {t("counter.desc")}
            </motion.p>
          </div>

          {/* --- SISI KANAN (50%): KARTU GRID STATISTIK (2x2) dengan GLASSMORPHISM --- */}
          <div className="grid grid-cols-2 gap-4 md:gap-5 w-full">
            {statData.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group relative flex flex-col items-center justify-center p-6 md:p-7 rounded-2xl
                    bg-white/15 backdrop-blur-xl
                    border border-white/20
                    shadow-[0_8px_32px_rgba(0,0,0,0.1)]
                    hover:bg-white/25
                    hover:shadow-[0_15px_45px_rgba(255,255,255,0.2)]
                    hover:-translate-y-2
                    hover:scale-105
                    transition-all duration-500 ease-out
                    cursor-default overflow-hidden"
                >
                  {/* Glass Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Inner Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon */}
                  <div className="mb-3 text-white/80 group-hover:text-white transition-colors duration-300">
                    <Icon size={24} className="drop-shadow-lg" />
                  </div>

                  {/* Gradient Number Text */}
                  <p className="text-[2rem] md:text-[2.5rem] font-black text-white transition-transform duration-300 group-hover:scale-110 drop-shadow-lg">
                    {stat.value}
                  </p>

                  {/* Stat Label */}
                  <p className="mt-2 text-[10px] md:text-xs font-bold text-white/90 uppercase tracking-widest text-center leading-normal drop-shadow">
                    {stat.label}
                  </p>

                  {/* Hover Ring Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
