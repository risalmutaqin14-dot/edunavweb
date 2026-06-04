"use client"; // WAJIB ADA karena menggunakan useEffect, useRef, dan useTranslation

import React, { useEffect, useRef } from "react";
import Image from "next/image"; // Import Image Next.js
import { Logos } from "../../data.js";
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const heroRef = useRef(null);
  const { t } = useTranslation();

  // Efek Parallax Scroll
  useEffect(() => {
    const el = heroRef.current as HTMLElement | null;
    if (!el) return;

    const onScroll = () => {
      if (window.innerWidth > 768) {
        // window.pageYOffset sudah usang (deprecated), disarankan pakai window.scrollY
        const scrolled = window.scrollY;
        const parallax = scrolled * 0.4;
        el.style.transform = `translateY(${parallax}px)`;
      } else {
        el.style.transform = `none`;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="home" className="hero-section mt-0 pt-20 pb-0 md:pt-2 md:pb-0 relative">
      <div className="container hero-container"> 
        
        {/* --- KIRI: TEKS & TOMBOL --- */}
        <div className="hero-left animate-fade-in">
          <h1 className="text-h1 lg:text-[2.5rem] font-extrabold leading-tight tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="mt-6 text-body text-[14px] md:text-[15px] lg:text-[15px] text-slate-700 max-w-2xl leading-7">
            {t('hero.desc')}
          </p>

          <div className="flex flex-col md:flex-row gap-3 hero-buttons mt-8">
            <a
              href="https://api.whatsapp.com/send/?phone=6281370000299&text=Hi%2C+I%27d+like+to+book+an+Edunav+demo+session&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-hero hover:opacity-90 transition text-center text-sm flex items-center justify-center"
            >
              <span className="cta-shine" />
              {t('hero.btn_demo')}
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=6281370000299&text=Hi%2C+I%27m+interested+in+Edunav.+Can+I+request+a+demo+via+Zoom%3F&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button2 border-1 mt-1 md:mt-0 hover:opacity-90 transition text-center text-sm flex items-center justify-center"
            >
              <span className="cta-shine2" />
              {t('hero.btn_zoom')}
            </a>
          </div>

          <div className="flex gap-3 h-auto max-w-[350px] mx-auto md:mx-0 md:w-[550px] app-badges mt-10 z-2 ">
            <a 
              href="https://play.google.com/store/apps/details?id=eduversal.eduversal_mobile&hl=id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Logos.playstore}
                alt="Download Aplikasi Edunav di Google Play Store"
                width={135}
                height={40}
                className="store-badge hover:opacity-90 transition w-[135px] h-auto"
                style={{ width: 'auto', height: 'auto' }}
              />
            </a>
            <a 
              href="https://apps.apple.com/id/app/edunav/id1616739654"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Logos.appstore}
                alt="Download Aplikasi Edunav di Apple App Store"
                width={135}
                height={40}
                className="store-badge hover:opacity-90 transition w-[135px] h-auto"
                style={{ width: 'auto', height: 'auto' }}
              />
            </a>
          </div>
        </div>

        {/* --- KANAN: GAMBAR HERO --- */}
        <div className="hero-right">
          <Image
            ref={heroRef}
            src={Logos.heroedunav}
            alt="Ilustrasi Dashboard Sistem Informasi Sekolah Edunav"
            width={800}
            height={600}
            className="w-[800px] h-auto z-1 md:scale-120 animate-fade-in"
            priority // PENTING: Pengganti fetchpriority="high". Memberitahu Next.js gambar ini wajib diload pertama kali untuk skor LCP yang baik.
          />
        </div>
        
      </div>
    </header>
  );
}
