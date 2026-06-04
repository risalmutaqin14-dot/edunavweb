"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calculator, CheckCircle2, Users, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SubscriptionSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
}

// Setup fee in millions
const SETUP_FEE = 7000000;
// Monthly price per student
const PRICE_PER_STUDENT = 25000;

// Student increments (multiples of 50)
const generateStudentOptions = () => {
  const options = [];
  for (let i = 50; i <= 1000; i += 50) {
    options.push(i);
  }
  return options;
};

const STUDENT_OPTIONS = generateStudentOptions();

export default function SubscriptionSimulator({ isOpen, onClose }: SubscriptionSimulatorProps) {
  const { t } = useTranslation();
  const [studentIndex, setStudentIndex] = useState(2); // Default: 150 students

  const studentCount = STUDENT_OPTIONS[studentIndex];
  const monthlyFee = studentCount * PRICE_PER_STUDENT;
  const yearlyFee = monthlyFee * 12;
  const totalFirstYear = SETUP_FEE + yearlyFee;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-2xl w-full max-w-4xl overflow-hidden relative max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#0284c7] to-[#0369a1] p-2 md:p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 md:gap-3">
                    <div className="w-6 h-6 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-2xl flex items-center justify-center">
                      <Calculator size={14} className="md:hidden" />
                      <Calculator size={28} className="hidden md:block" />
                    </div>
                    <div>
                      <h3 className="text-xs md:text-2xl font-bold">{t("simulator.title")}</h3>
                      <p className="text-white/80 text-[9px] md:text-sm mt-0.5 hidden md:block">
                        {t("simulator.subtitle")}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-6 h-6 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X size={14} className="md:hidden" />
                    <X size={24} className="hidden md:block" />
                  </button>
                </div>
              </div>

              {/* Content - Two Column Layout */}
              <div className="flex flex-col lg:flex-row">
                {/* Left Section - Info & Pricing */}
                <div className="lg:w-1/2 bg-gradient-to-br from-slate-50 to-slate-100 p-2 md:p-8 space-y-2 md:space-y-6">
                  {/* Setup Fee Card */}
                  <div className="bg-white rounded-lg md:rounded-2xl p-2 md:p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-1.5 md:gap-3 mb-1.5 md:mb-4">
                      <div className="w-6 h-6 md:w-12 md:h-12 bg-gradient-to-br from-[#0369a1]/10 to-[#0369a1]/10 rounded-lg flex items-center justify-center shrink-0">
                        <TrendingUp size={12} className="text-[#0369a1] md:hidden" />
                        <TrendingUp size={24} className="text-[#0369a1] hidden md:block" />
                      </div>
                      <div>
                        <h4 className="text-[10px] md:text-lg font-bold text-slate-900">{t("simulator.setup_fee.title")}</h4>
                        <p className="text-[8px] md:text-xs text-slate-500">{t("simulator.setup_fee.subtitle")}</p>
                      </div>
                    </div>
                    <div className="text-base md:text-3xl font-black text-slate-900">
                      {formatCurrency(SETUP_FEE)}
                    </div>
                    <p className="text-[9px] md:text-sm text-slate-500 mt-0.5 md:mt-2">
                      {t("simulator.setup_fee.description")}
                    </p>
                  </div>

                  {/* Price Per Student Card */}
                  <div className="bg-white rounded-lg md:rounded-2xl p-2 md:p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-1.5 md:gap-3 mb-1.5 md:mb-4">
                      <div className="w-6 h-6 md:w-12 md:h-12 bg-gradient-to-br from-[#0369a1]/10 to-[#0369a1]/10 rounded-lg flex items-center justify-center shrink-0">
                        <Users size={12} className="text-[#0369a1] md:hidden" />
                        <Users size={24} className="text-[#0369a1] hidden md:block" />
                      </div>
                      <div>
                        <h4 className="text-[10px] md:text-lg font-bold text-slate-900">{t("simulator.price_per_student.title")}</h4>
                        <p className="text-[8px] md:text-xs text-slate-500">{t("simulator.price_per_student.subtitle")}</p>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-0.5 md:gap-2">
                      <span className="text-sm md:text-3xl font-black text-[#0369a1]">{formatCurrency(PRICE_PER_STUDENT)}</span>
                      <span className="text-[9px] md:text-sm text-slate-600">/ {t("simulator.per_student_month")}</span>
                    </div>
                    <p className="text-[9px] md:text-sm text-slate-500 mt-0.5 md:mt-2">
                      {t("simulator.price_per_student.description")}
                    </p>
                  </div>

                  {/* Info Note */}
                  <div className="bg-[#0369a1]/5 rounded-lg p-1.5 md:p-4 border border-[#0369a1]/10">
                    <p className="text-[9px] md:text-sm text-slate-600 leading-relaxed">
                      <span className="font-bold text-[#0369a1]">ℹ️ {t("simulator.note.label")}:</span> {t("simulator.note.text")}
                    </p>
                  </div>
                </div>

                {/* Right Section - Calculator */}
                <div className="lg:w-1/2 p-2 md:p-8 space-y-2 md:space-y-6">
                  {/* Student Count Selector */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5 md:mb-3">
                      <label className="text-[8px] md:text-xs font-bold text-slate-700">
                        {t("simulator.student_count.label")}
                      </label>
                      <div className="inline-flex items-center gap-1 md:gap-2 bg-gradient-to-r from-[#0369a1] to-[#0284c7] text-white px-1.5 md:px-4 py-0.5 md:py-1.5 rounded-md md:rounded-xl shadow-md">
                        <Users size={10} className="md:hidden" />
                        <Users size={16} className="hidden md:block" />
                        <span className="text-[10px] md:text-base font-bold">{studentCount.toLocaleString("id-ID")}</span>
                      </div>
                    </div>

                    {/* Range Labels */}
                    <div className="flex justify-between text-[8px] md:text-xs text-slate-500 mb-1 md:mb-2">
                      <span>50</span>
                      <span>1000+</span>
                    </div>

                    {/* Slider */}
                    <input
                      type="range"
                      min="0"
                      max={STUDENT_OPTIONS.length - 1}
                      value={studentIndex}
                      onChange={(e) => setStudentIndex(parseInt(e.target.value))}
                      className="w-full h-1.5 md:h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-[#0369a1] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:md:w-6 [&::-webkit-slider-thumb]:md:h-6 [&::-webkit-slider-thumb]:bg-[#0369a1] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:md:w-6 [&::-moz-range-thumb]:md:h-6 [&::-moz-range-thumb]:bg-[#0369a1] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-lg"
                    />
                  </div>

                  {/* Monthly Estimation */}
                  <div className="bg-gradient-to-br from-[#0369a1]/5 to-[#0369a1]/5 rounded-lg md:rounded-2xl p-2 md:p-5 border border-[#0369a1]/20">
                    <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-3">
                      <CheckCircle2 size={10} className="text-[#0369a1] md:hidden" />
                      <CheckCircle2 size={18} className="text-[#0369a1] hidden md:block" />
                      <span className="text-[8px] md:text-xs font-bold text-[#0369a1] uppercase tracking-wider">
                        {t("simulator.monthly_estimation.label")}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-0.5 mb-0.5 md:mb-1">
                      <span className="text-sm md:text-3xl font-black text-[#0369a1]">{formatCurrency(monthlyFee)}</span>
                      <span className="text-[9px] md:text-sm text-slate-600">/ {t("simulator.month")}</span>
                    </div>
                    <p className="text-[8px] md:text-xs text-slate-500">
                      {studentCount.toLocaleString("id-ID")} {t("simulator.students")} × {formatCurrency(PRICE_PER_STUDENT)}
                    </p>
                  </div>

                  {/* Yearly Estimation */}
                  <div className="bg-gradient-to-br from-[#0e7490] to-[#155e75] rounded-lg md:rounded-2xl p-2 md:p-5 text-white">
                    <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-3">
                      <TrendingUp size={10} className="text-white/60 md:hidden" />
                      <TrendingUp size={18} className="text-white/60 hidden md:block" />
                      <span className="text-[8px] md:text-xs font-bold text-white/60 uppercase tracking-wider">
                        {t("simulator.yearly_estimation.label")}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-0.5 mb-0.5 md:mb-1">
                      <span className="text-sm md:text-3xl font-black text-white">{formatCurrency(yearlyFee)}</span>
                      <span className="text-[9px] md:text-sm text-white/60">/ {t("simulator.year")}</span>
                    </div>
                    <p className="text-[8px] md:text-xs text-white/60">
                      12 × {formatCurrency(monthlyFee)}
                    </p>
                  </div>

                  {/* Total First Year */}
                  {/* <div className="bg-gradient-to-r from-[#0696a8] to-[#0891b2] rounded-lg md:rounded-2xl p-2 md:p-5 text-white">
                    <div className="flex items-center justify-between mb-1 md:mb-2">
                      <span className="text-[9px] md:text-sm font-bold">{t("simulator.total_first_year")}</span>
                      <span className="text-[8px] md:text-xs bg-white/20 px-1 md:px-2 py-0.5 md:py-1 rounded-full">{t("simulator.setup_plus_12_months")}</span>
                    </div>
                    <div className="text-lg md:text-4xl font-black">
                      {formatCurrency(totalFirstYear)}
                    </div>
                  </div> */}

                  {/* CTA Button */}
                  <a
                    href="https://api.whatsapp.com/send/?phone=6281370000299&text=Hi%2C+saya+tertarik+dengan+Edunav.+Mohon+penawaran+lebih+lanjut."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button-hero hover:opacity-90 transition text-center text-sm flex items-center justify-center relative overflow-hidden"
                  >
                    <span className="cta-shine" />
                    {t("simulator.cta_button")} →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
