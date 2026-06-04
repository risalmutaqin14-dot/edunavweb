"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from "framer-motion";
import { ChevronDown, MessageSquareMore } from "lucide-react";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.9, 0.85]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -10, -20]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Inject JSON-LD FAQPage schema
  useEffect(() => {
    const questions = [
      { key: "question1", question: t("faq.question1.question"), answer: t("faq.question1.answer") },
      { key: "question2", question: t("faq.question2.question"), answer: t("faq.question2.answer") },
      { key: "question3", question: t("faq.question3.question"), answer: t("faq.question3.answer") },
      { key: "question4", question: t("faq.question4.question"), answer: t("faq.question4.answer") },
      { key: "question5", question: t("faq.question5.question"), answer: t("faq.question5.answer") },
      { key: "question6", question: t("faq.question6.question"), answer: t("faq.question6.answer") },
      { key: "question7", question: t("faq.question7.question"), answer: t("faq.question7.answer") },
    ];

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.edunav.net/#faqpage",
      url: "https://www.edunav.net/#faq",
      name: "Edunav FAQ - Pertanyaan yang Sering Diajukan",
      description: "Pertanyaan dan jawaban seputar sistem informasi sekolah Edunav",
      mainEntity: questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer.replace(/<[^>]+>/g, ""),
        },
      })),
    };

    let script = document.getElementById("faq-schema") as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = "faq-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      script = document.getElementById("faq-schema") as HTMLScriptElement;
      if (script) {
        script.remove();
      }
    };
  }, [t]);

  const questions = [
    "question1",
    "question2",
    "question3",
    "question4",
    "question5",
    "question6",
    "question7",
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Mesh Bulat Halus */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#01bcd5]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* --- SISI KIRI: HEADER & STICKY CTA HELPDESK (5 Kolom) --- */}
          <motion.div
            className="lg:col-span-5 sticky top-28 flex flex-col items-start text-left"
            style={{ scale, opacity, y }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B91CB]/10 text-[#0891b2] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-[#0891b2]/20 shadow-sm">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-black text-slate-900 leading-tight mb-5 tracking-tight text-balance">
                {t("faq.title") || "Pertanyaan yang Sering Diajukan"}
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 text-balance">
                {t("faq.desc") || "Temukan jawaban cepat seputar integrasi, fitur, dan penggunaan ekosistem Edunav di sini."}
              </p>
            </motion.div>

            {/* Kotak Bantuan Terpisah ala Pinterest */}
            <motion.div
              className="w-full bg-white p-6 rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)] flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -4, boxShadow: "0 15px 40px rgba(0,0,0,0.06)" }}
            >
              <p className="text-slate-800 font-bold text-base mb-2">
                {t("faq.other") || "Punya pertanyaan lain?"}
              </p>
              <p className="text-slate-500 text-xs md:text-sm mb-5 leading-relaxed">
                Tim support kami siap membantu menjawab kendala teknis spesifik institusi Anda.
              </p>
              <motion.a
                href="https://api.whatsapp.com/send/?phone=6281370000299&text=Hi%2C+I+have+more+questions+about+Edunav&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-slate-900 text-white text-sm font-extrabold rounded-full hover:bg-[#1B91CB] transition-all duration-300 shadow-md hover:shadow-[0_15px_30px_rgba(27,145,203,0.2)] active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquareMore size={16} />
                <span>Chat dengan Kami</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* --- SISI KANAN: LIST ACORDION ANIMASI (7 Kolom) --- */}
          <div className="lg:col-span-7 space-y-4 w-full">
            {questions.map((key, index) => {
              const q = t(`faq.${key}.question`);
              const a = t(`faq.${key}.answer`);
              const isOpen = openIndex === index;

              return (
                <motion.div
                  layout="position"
                  key={key}
                  className={`bg-white rounded-[1.8rem] border transition-all duration-500 overflow-hidden ${
                    isOpen 
                      ? "border-[#0891b2]/30 shadow-[0_15px_40px_rgba(8,145,178,0.08)] bg-white" 
                      : "border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-slate-200"
                  }`}
                >
                  {/* Tombol Pemicu Akordeon */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full px-6 py-5 md:py-6 text-left flex items-center justify-between gap-4 group"
                  >
                    <span className={`text-base font-extrabold tracking-tight transition-colors duration-300 ${
                      isOpen ? "text-[#0891b2]" : "text-slate-800 group-hover:text-[#0696a8]"
                    }`}>
                      {q}
                    </span>
                    
                    {/* Wadah Ikon Sirkular */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#0891b2] text-white rotate-180 shadow-md"
                        : "bg-slate-50 text-slate-400 group-hover:bg-[#0696a8]/10 group-hover:text-[#0696a8]"
                    }`}>
                      <ChevronDown size={18} strokeWidth={2.5} />
                    </div>
                  </button>

                  {/* Konten Kontainer Ekpansi Jawaban */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} // Garansi smooth sliding curve
                      >
                        <div className="px-6 pb-6 pt-1">
                          <div className="pl-4 border-l-2 border-[#01bcd5]/40 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                            <p dangerouslySetInnerHTML={{ __html: a }} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}