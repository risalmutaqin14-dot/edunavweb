"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Video } from "lucide-react";
import { footerLogos } from "../../data.js";

export default function Contact() {
  const { t } = useTranslation();

  const buttonHover = {
    whileHover: { y: -3, scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 15 },
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#F8FAFC] py-16 md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00bbd7]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 60, damping: 16 }}
          className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0696a8] to-[#0891b2] p-6 text-white shadow-[0_30px_70px_rgba(6,150,168,0.25)] md:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-110" />

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left Side */}
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                Hubungi Edunav
              </span>

              <h2 className="mb-4 text-2xl font-black leading-tight tracking-tight text-balance md:text-3xl lg:text-4xl">
                {t("contact.title") || "Siap Mentransformasi Sekolah Anda?"}
              </h2>

              <p className="mb-8 max-w-xl text-sm font-medium leading-relaxed text-white/90 text-balance md:text-base">
                {t("contact.desc") ||
                  "Mulai langkah digitalisasi institusi Anda hari ini. Konsultasikan kebutuhan fitur spesifik Anda bersama tim ahli kami secara gratis."}
              </p>

              {/* Buttons Side by Side */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <motion.a
                  href="https://api.whatsapp.com/send/?phone=6281370000299&text=Hi%2C+I%27d+like+to+book+an+Edunav+demo+session&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-[1.5rem] bg-white px-4 py-3 text-[#0891b2] shadow-lg transition-all"
                  {...buttonHover}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0891b2] p-1.5">
                    <Image
                      src={footerLogos.whatsapp}
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-black text-slate-900">
                      {t("navbar.btn_demo") || "WhatsApp Demo"}
                    </span>
                  </span>
                  <ArrowRight size={12} className="shrink-0" />
                </motion.a>

                <motion.a
                  href="https://api.whatsapp.com/send/?phone=6281370000299&text=Hi%2C+I%27m+interested+in+Edunav.+Can+I+request+a+demo+via+Zoom%3F&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-[1.5rem] border border-white/30 bg-white/10 px-4 py-3 text-white backdrop-blur-md transition-all hover:bg-white/14"
                  {...buttonHover}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/12">
                    <Video size={16} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-black">
                      {t("hero.btn_zoom") || "Zoom Demo"}
                    </span>
                  </span>
                  <ArrowRight size={12} className="shrink-0" />
                </motion.a>
              </div>
            </div>

            {/* Right Side - Contact Info Cards */}
            <div className="flex flex-col justify-center gap-3">
              <a
                href="https://api.whatsapp.com/send/?phone=6281370000299"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-[1.5rem] border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/12 text-white">
                  <Phone size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-white/70">WhatsApp</span>
                  <span className="block text-sm font-bold text-white">+62 813 7000 0299</span>
                </span>
              </a>

              <a
                href="mailto:info@zerone.id"
                className="flex items-center gap-3 rounded-[1.5rem] border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/12 text-white">
                  <Mail size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-white/70">Email</span>
                  <span className="block text-sm font-bold text-white">info@zerone.id</span>
                </span>
              </a>

              <div className="flex items-center gap-3 rounded-[1.5rem] border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/12 text-white">
                  <MapPin size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-white/70">Alamat</span>
                  <span className="block text-sm font-bold text-white">Jakarta, Indonesia</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
