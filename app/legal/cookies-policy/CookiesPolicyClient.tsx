"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Script from "next/script";
import { legalPageSchemas } from "@/src/lib/schemas";

export default function CookiesPolicyClient() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm font-semibold text-[#0092d7] hover:text-[#00bbd7]"
        >
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t("legal.back_home") || "Kembali ke Beranda"}
        </Link>

        <div className="rounded-[2rem] bg-white p-8 shadow-lg md:p-12">
          <h1 className="mb-4 text-3xl font-black text-slate-900 md:text-4xl">
            {t("cookies.title") || "Cookies Policy"}
          </h1>
          <p className="mb-8 text-sm text-slate-500">
            {t("cookies.effective_date") || "Updated"}: {t("cookies.date") || "1 January 2025"}
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("cookies.intro.title") || "What Are Cookies"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("cookies.intro.p1") || "Cookies are small text files that are placed on your device when you visit our Service. They help us provide you with a better experience."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("cookies.how_use.title") || "How We Use Cookies"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("cookies.how_use.p1") || "We use cookies for the following purposes:"}</p>
              <ul className="list-inside list-disc text-slate-600">
                <li>{t("cookies.how_use.reason1") || "To remember your preferences"}</li>
                <li>{t("cookies.how_use.reason2") || "To analyze Service usage"}</li>
                <li>{t("cookies.how_use.reason3") || "To improve Service performance"}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("cookies.third_party.title") || "Third-Party Cookies"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("cookies.third_party.p1") || "Our Service may use third-party services that use cookies, such as Google Analytics. You can manage your cookie preferences through your browser settings."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("cookies.manage.title") || "Managing Cookies"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("cookies.manage.p1") || "You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and some features may no longer function properly."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("cookies.contact.title") || "Contact Us"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("cookies.contact.p1") || "For any questions about our use of cookies, please contact us at"}{" "}
                <a href="mailto:info@zerone.info" className="text-[#0092d7] hover:text-[#00bbd7]">info@zerone.info</a>.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <Script
        id="cookies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(legalPageSchemas.cookies),
        }}
      />
    </div>
  );
}
