"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/components/useScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Settings, 
  GraduationCap, 
  Users, 
  UserCheck, 
  Sparkles,
  ChevronDown
} from "lucide-react";

type CategoryKey = 'managerial' | 'operational' | 'academic' | 'student' | 'teacher' | 'extra';

const categoryIcons: Record<CategoryKey, any> = {
  managerial: LayoutDashboard,
  operational: Settings,
  academic: GraduationCap,
  student: Users,
  teacher: UserCheck,
  extra: Sparkles,
};

export default function FeaturesEdunav() {
  const { t } = useTranslation();
  const revealRef = useScrollReveal();
  
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const categories: CategoryKey[] = ['managerial', 'operational', 'academic', 'student', 'teacher', 'extra'];

  const toggleFeature = (featureId: string) => {
    setActiveFeature(activeFeature === featureId ? null : featureId);
  };

  return (
    <section id="features-edunav" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#01bcd5]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#1B91CB]/10 rounded-full blur-[100px]" />
      </div>

      <div ref={revealRef} className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#0891b2]/10 text-[#0891b2] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 border border-[#0891b2]/20"
          >
            {t('features.title_small')}
          </motion.span>
          <h2 className="text-h2 md:text-[2.6rem] font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            {t('features.title_main')}
          </h2>
          <p className="text-slate-500 text-[15px] md:text-base leading-7">
            Satu platform terintegrasi dengan ekosistem fitur terlengkap untuk mentransformasi institusi pendidikan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category];
            const categoryTitle = t(`features.categories.${category}.title`) as string;
            const itemKeys = Object.keys(
              (t(`features.categories.${category}.items`, { returnObjects: true }) as Record<string, unknown>)
            ) as string[];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(27,145,203,0.1)] transition-shadow duration-500 flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#01bcd5]/10 text-[#0891b2] shrink-0">
                    <Icon size={28} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      {categoryTitle}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-500 text-[13px] leading-6 mb-6">
                  {t(`features.categories.${category}.summary`) || "Manajemen tersistem untuk kemudahan administrasi."}
                </p>

                {/* PERBAIKAN: mt-auto dihapus dari <hr> agar konten tetap menempel di atas */}
                <hr className="border-slate-100 mb-2" />

                <div className="flex flex-col">
                  {itemKeys.map((itemKey) => {
                    const featureId = `${category}-${itemKey}`;
                    const isOpen = activeFeature === featureId;
                    const itemTitle = t(`features.categories.${category}.items.${itemKey}.title`) as string;
                    const itemDesc = t(`features.categories.${category}.items.${itemKey}.desc`) as string;

                    return (
                      <div key={itemKey} className="border-b border-slate-50 last:border-0">
                        <button
                          onClick={() => toggleFeature(featureId)}
                          className="w-full flex items-center justify-between py-4 text-left group"
                        >
                          <span className={`text-[13px] font-bold transition-colors duration-300 ${
                            isOpen ? 'text-[#0891b2]' : 'text-slate-700 group-hover:text-[#0696a8]'
                          }`}>
                            {itemTitle}
                          </span>
                          <ChevronDown
                            size={18}
                            className={`shrink-0 ml-4 transition-transform duration-300 ${
                              isOpen ? 'rotate-180 text-[#0891b2]' : 'text-slate-500 group-hover:text-[#0696a8]'
                            }`} 
                          />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 pt-1 pl-4 border-l-2 border-[#01bcd5]/30 ml-1">
                                <p className="text-[13px] text-slate-500 leading-6">
                                  {itemDesc}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-600 text-sm mb-6 font-medium">Butuh kustomisasi fitur khusus untuk sekolah Anda?</p>
          <a href="https://api.whatsapp.com/send/?phone=6281370000299" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-[#1B91CB] transition-all shadow-lg hover:shadow-2xl active:scale-95">
            Konsultasikan Sekarang
          </a>
        </motion.div> */}

      </div>
    </section>
  );
}
