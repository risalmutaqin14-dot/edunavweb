"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Logos } from "@/data";
import { useScrollReveal } from "@/components/useScrollReveal";

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const revealRef = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-slate-50 overflow-hidden">
      <div
        ref={revealRef}
        className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-[#0891b2] text-[11px] md:text-xs font-bold mb-4 shadow-sm uppercase tracking-wider">
            {t("whyChooseUs.hook")}
          </span>
          <h2 className="text-h2 md:text-[2.2rem] text-slate-900 leading-tight tracking-tight mb-6">
            {t("whyChooseUs.title")}
          </h2>
          <p className="text-body lg:text-base text-slate-600 mb-8 max-w-2xl">
            {t("whyChooseUs.desc")}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              t("whyChooseUs.card.card1"), t("whyChooseUs.card.card2"),
              t("whyChooseUs.card.card3"), t("whyChooseUs.card.card4"),
              t("whyChooseUs.card.card5"), t("whyChooseUs.card.card6"),
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-[#0696a8] text-sm mt-0.5">✔</span>
                <p className="text-sm text-gray-700 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#0696a8]/10 blur-3xl rounded-full transform scale-110 -z-10" />
            <Image
              src={Logos.edunavMobile}
              alt="Aplikasi Mobile Edunav"
              width={500} height={500}
              className="w-full max-w-md object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
