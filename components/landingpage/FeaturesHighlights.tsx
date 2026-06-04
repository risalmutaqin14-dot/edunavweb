"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Logos } from "../../data";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  MonitorCheck, 
  Sparkles, 
  Wallet,
  Check // Tambahkan icon Check
} from "lucide-react"; 

export default function FeatureHighlights() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>("communication");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Struktur Data Fitur beserta Icon & Kunci Translasi Poin
  const features = [
    {
      id: "communication",
      hook: t("edunavCommunication.hook"),
      title: t("edunavCommunication.title"),
      desc: t("edunavCommunication.summary"), // Ubah .desc jadi .summary (teks pendek)
      points: [1, 2, 3], // Asumsi ada 3 poin
      pointPrefix: "edunavCommunication.points",
      image: Logos.edunavMoc,
      icon: MessageCircle,
      color: "#1B91CB",
      bgLight: "bg-[#1B91CB]/5",
      borderLight: "border-[#0891b2]/10",
    },
    {
      id: "exam",
      hook: t("edunavExam.hook"),
      title: t("edunavExam.title"),
      desc: t("edunavExam.summary"),
      points: [1, 2, 3],
      pointPrefix: "edunavExam.points",
      image: Logos.ujianOnline,
      icon: MonitorCheck,
      color: "#01bcd5",
      bgLight: "bg-[#01bcd5]/5",
      borderLight: "border-[#01bcd5]/10",
    },
    {
      id: "ai",
      hook: t("edunavAI.hook"),
      title: t("edunavAI.title"),
      desc: t("edunavAI.summary"),
      points: [1, 2, 3, 4], // AI ada 4 poin dari kode sebelumnya
      pointPrefix: "edunavAI.pointAI.point", // Path khusus AI dari kode Anda sebelumnya
      image: Logos.edunavAI2,
      icon: Sparkles,
      color: "#1B91CB",
      bgLight: "bg-[#1B91CB]/5",
      borderLight: "border-[#0891b2]/10",
    },
    {
      id: "payment",
      hook: t("edunavPayment.hook"),
      title: t("edunavPayment.title"),
      desc: t("edunavPayment.summary"),
      points: [1, 2, 3],
      pointPrefix: "edunavPayment.points",
      image: Logos.payment,
      icon: Wallet,
      color: "#01bcd5",
      bgLight: "bg-[#01bcd5]/5",
      borderLight: "border-[#01bcd5]/10",
    },
  ];

  return (
    <section id="features" className="relative bg-[#F8FAFC] py-10 lg:py-24">
      
      {/* --- NAVIGASI MOBILE --- */}
      <div className="hidden lg:hidden sticky top-[70px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm mb-8 overflow-x-auto hide-scrollbar">
        <div className="flex px-5 py-3 gap-3 w-max">
          {features.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={`mob-nav-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${
                  isActive ? "text-white shadow-md" : "bg-slate-100/80 text-slate-500 hover:bg-slate-200"
                }`}
                style={{ backgroundColor: isActive ? item.color : "" }}
              >
                <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                <span>{item.hook}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* --- NAVIGASI DESKTOP --- */}
          <div className="hidden lg:block lg:w-[300px] shrink-0 sticky top-32">
            <h3 className="text-[11px] font-bold text-slate-600 uppercase tracking-widest mb-6 px-2">
              Ekosistem Edunav
            </h3>
            <div className="flex flex-col gap-2 relative">
              <motion.div 
                className="absolute left-0 w-full h-[68px] bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-100 -z-10"
                initial={false}
                animate={{ top: `${features.findIndex(f => f.id === activeSection) * 76}px` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />

              {features.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={`desk-nav-${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-4 px-4 py-3 h-[68px] rounded-2xl transition-all duration-300 text-left ${
                      isActive ? "scale-[1.02]" : "hover:bg-slate-100/50 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <div 
                      className={`flex items-center justify-center w-11 h-11 rounded-xl transition-colors duration-300 ${
                        isActive ? "text-white shadow-sm" : "bg-slate-200/50 text-slate-500"
                      }`}
                      style={{ backgroundColor: isActive ? item.color : "" }}
                    >
                      <Icon size={20} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-[13px] font-bold line-clamp-1 transition-colors ${isActive ? "text-slate-900" : "text-slate-600"}`}>
                        {item.title}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 mt-0.5">
                        {item.hook}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* --- KONTEN FITUR --- */}
          <div className="flex-1 flex flex-col gap-20 lg:gap-32 w-full">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                id={feature.id}
                onViewportEnter={() => setActiveSection(feature.id)}
                viewport={{ amount: 0.5, margin: "-20% 0px -20% 0px" }}
                className="scroll-mt-32"
              >
                <div className={`flex flex-col xl:flex-row items-center gap-10 p-8 md:p-10 rounded-[2.5rem] border ${feature.borderLight} shadow-sm ${feature.bgLight} relative overflow-hidden group`}>
                  
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] blur-[80px] rounded-full opacity-10 -z-10 group-hover:scale-110 transition-transform duration-700 ease-out pointer-events-none"
                    style={{ backgroundColor: feature.color }}
                  />

                  {/* Kiri: Konten Teks & Poin-poin */}
                  <div className="flex-1 w-full relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[11px] font-bold tracking-wide mb-6 shadow-sm border border-slate-100" style={{ color: feature.id === 'communication' || feature.id === 'ai' ? '#0369a1' : '#0284c7' }}>
                      <feature.icon size={14} strokeWidth={2.5} />
                      {feature.hook}
                    </div>
                    <h2 className="text-h2 md:text-[2.2rem] font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
                      {feature.title}
                    </h2>
                    
                    {/* Paragraf Pendek (Summary) */}
                    <p className="text-slate-600 text-[15px] md:text-base leading-7 mb-6">
                      {feature.desc}
                    </p>

                    {/* Kotak Poin-poin (Diterapkan ke SEMUA fitur) */}
                    <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-white">
                      <p className="font-bold text-slate-900 text-[13px] mb-4">Keunggulan Fitur:</p>
                      <ul className="space-y-3">
                        {feature.points.map((num) => (
                          <li key={num} className="flex items-start gap-3 text-slate-700 text-[13px] font-medium">
                            <span 
                              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shadow-sm text-white"
                              style={{ backgroundColor: feature.color }}
                            >
                              {/* Menggunakan Ikon Checklist agar lebih universal dibanding sekadar angka */}
                              <Check size={12} strokeWidth={3} />
                            </span>
                            {/* Memanggil translasi poin */}
                            <span className="leading-6">
                              {feature.id === "ai" 
                                ? t(`${feature.pointPrefix}${num}`) 
                                : t(`${feature.pointPrefix}.${num}`)
                              }
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Kanan: Gambar */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex-1 w-full flex justify-center relative z-10 mt-6 xl:mt-0"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={500}
                      height={400}
                      className="w-full max-w-[380px] md:max-w-[450px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)] group-hover:-translate-y-2 transition-transform duration-500"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </motion.div>
                  
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `.hide-scrollbar::-webkit-scrollbar { display: none; }`
      }} />
    </section>
  );
}
