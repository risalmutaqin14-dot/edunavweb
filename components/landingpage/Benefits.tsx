"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Logos } from "@/data";
import { useScrollReveal } from "@/components/useScrollReveal";
import SubscriptionSimulator from "./SubscriptionSimulator";
import { Calculator } from "lucide-react";

export default function Benefit() {
  const { t } = useTranslation();
  const revealRef = useScrollReveal();
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  return (
    <section id="benefit" className="py-24 bg-white overflow-hidden">
      <div ref={revealRef} className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <Image
            src={Logos.edunavMockup}
            alt="Dashboard Edunav"
            width={600} height={450}
            className="w-full max-w-lg object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)] rounded-3xl"
          />
        </div>

        <div>
          <h2 className="text-h2 md:text-[2.2rem] text-slate-900 leading-tight tracking-tight mb-6">
            {t("benefit.title")}
          </h2>
          <p className="text-body lg:text-base text-slate-600 mb-8 max-w-2xl">
            {t("benefit.desc")}
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="https://drive.google.com/drive/folders/1IUJrQVosqrnn7kQK9oGR9T0MZciOfXiW"
              target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-gradient-to-r from-[#0696a8] to-[#0891b2] text-white pr-6 pl-2 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
            <span className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full p-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" />
              </svg>
            </span>
            <span className="text-sm">{t("benefit.btn_brosur")}</span>
          </a>

            {/* Subscription Simulator Button */}
            <button
              onClick={() => setIsSimulatorOpen(true)}
              className="group inline-flex items-center gap-3 bg-white text-[#0891b2] pr-5 pl-2 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-[#0891b2]/20"
            >
              <span className="flex items-center justify-center bg-[#0891b2]/10 rounded-full p-2.5">
                <Calculator size={18} />
              </span>
              <span className="text-sm">{t("benefit.btn_simulator")}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              t("benefit.point.point1"), t("benefit.point.point2"), t("benefit.point.point3"),
              t("benefit.point.point4"), t("benefit.point.point5"),
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-[#0696a8] text-sm mt-0.5">✔</span>
                <p className="text-sm text-gray-700 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscription Simulator Modal */}
      <SubscriptionSimulator
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
      />
    </section>
  );
}
