"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLogos, Logos } from "../data.js";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const hoverSpring = {
    whileHover: { y: -4, scale: 1.02 },
    transition: { type: "spring" as const, stiffness: 400, damping: 15 },
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-[#0696a8] to-[#0891b2] pt-20 text-white">
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[400px] w-[400px] rounded-full bg-white/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[300px] w-[300px] rounded-full bg-white/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-12 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-center text-center md:items-start md:text-left lg:col-span-5">
            <div className="relative mb-6 h-[45px] w-[140px]">
              <Image
                src={Logos.edunav}
                alt="Logo Edunav Footer - Sistem Informasi Sekolah"
                fill
                className="object-contain filter brightness-0 invert"
              />
            </div>
            <p className="max-w-sm text-sm font-semibold leading-relaxed text-white/80 md:text-base" suppressHydrationWarning>
              {t("footer.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-6 sm:text-left lg:col-span-7">
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white/90" suppressHydrationWarning>
                {t("footer.menu1") || "Hubungi Kami"}
              </h4>
              <div className="flex w-full max-w-xs flex-col gap-3">
                <motion.a
                  href="https://www.instagram.com/edunav.sis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-left backdrop-blur-md transition-colors hover:bg-white/20"
                  {...hoverSpring}
                >
                  <Image
                    src={footerLogos.instagram}
                    alt="Kunjungi Instagram Edunav"
                    width={36}
                    height={36}
                    className="h-9 w-9 shrink-0 object-contain"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white">Instagram</p>
                    <p className="text-xs text-white/70">@edunav.sis</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://api.whatsapp.com/send/?phone=6281370000299&text=Hi%2C+I+want+to+ask+about+zerOne.id+service&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-left backdrop-blur-md transition-colors hover:bg-white/20"
                  {...hoverSpring}
                >
                  <Image
                    src={footerLogos.whatsapp}
                    alt="Hubungi Tim Edunav via WhatsApp"
                    width={36}
                    height={36}
                    className="h-9 w-9 shrink-0 object-contain"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white">WhatsApp</p>
                    <p className="text-xs text-white/70">+62 813 7000 0299</p>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white/90" suppressHydrationWarning>
                {t("footer.menu2") || "Tersedia Di"}
              </h4>
              <div className="flex w-full max-w-xs flex-col gap-3">
                <motion.a
                  href="https://apps.apple.com/id/app/edunav/id1616739654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-left backdrop-blur-md transition-colors hover:bg-white/15"
                  {...hoverSpring}
                >
                  <Image
                    src={footerLogos.appstore}
                    alt="Download Edunav di Apple App Store"
                    width={36}
                    height={36}
                    className="h-9 w-9 shrink-0 object-contain"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white">App Store</p>
                    <p className="text-xs text-white/70">Available on iPhone</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://play.google.com/store/apps/details?id=eduversal.eduversal_mobile&hl=id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-left backdrop-blur-md transition-colors hover:bg-white/15"
                  {...hoverSpring}
                >
                  <Image
                    src={footerLogos.playstore}
                    alt="Download Edunav di Google Play Store"
                    width={36}
                    height={36}
                    className="h-9 w-9 shrink-0 object-contain"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white">Google Play</p>
                    <p className="text-xs text-white/70">Available on Android</p>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white/90" suppressHydrationWarning>
                {t("footer.menu3") || "Terdaftar Di"}
              </h4>
              <motion.div
                className="flex max-w-[220px] items-center gap-3 rounded-2xl p-4 text-left "
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={Logos.komdigi}
                  alt="Logo Kementerian Komunikasi dan Digital Republik Indonesia"
                  width={48}
                  height={48}
                  className="h-26 w-26 shrink-0 object-contain filter brightness-0 invert"
                />
                
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 text-xs font-semibold md:flex-row md:text-sm">
          <div className="order-2 text-center text-white/70 md:order-1 md:text-left">
            Copyright &copy; {currentYear} PT Global Zerone Digital. All Rights Reserved.
          </div>

          <div className="order-1 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/90 md:order-2">
            <Link
              href="/legal/privacy-policy"
              className="transition-all hover:text-slate-200 hover:underline underline-offset-4 decoration-2"
            >
              Privacy Policy
            </Link>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block" />
            <Link
              href="/legal/term-of-services"
              className="transition-all hover:text-slate-200 hover:underline underline-offset-4 decoration-2"
            >
              Terms of Service
            </Link>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block" />
            <Link
              href="/legal/cookies-policy"
              className="transition-all hover:text-slate-200 hover:underline underline-offset-4 decoration-2"
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
