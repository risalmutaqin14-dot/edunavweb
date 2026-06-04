"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Script from "next/script";
import { legalPageSchemas } from "@/src/lib/schemas";

export default function TermsOfServicePage() {
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
            {t("tos.title") || "Terms of Service"}
          </h1>
          <p className="mb-8 text-sm text-slate-500">
            {t("tos.effective_date") || "Updated"}: {t("tos.date") || "1 January 2025"}
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("tos.intro.title") || "Introduction"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("tos.intro.p1") || "Welcome to Edunav. By using our Service, you agree to these Terms of Service. Please read them carefully."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("tos.use.title") || "Use of Service"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("tos.use.p1") || "Edunav is provided as a Free app for school partners. You agree to use the Service only for lawful purposes and in accordance with these Terms."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("tos.account.title") || "User Accounts"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("tos.account.p1") || "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("tos.data.title") || "Data and Privacy"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("tos.data.p1") || "Your use of the Service is also governed by our Privacy Policy, which can be found at the Privacy Policy page."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("tos.termination.title") || "Termination"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("tos.termination.p1") || "We reserve the right to suspend or terminate your access to the Service at any time for any reason without notice."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("tos.changes.title") || "Changes to Terms"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("tos.changes.p1") || "We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the new Terms."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("tos.contact.title") || "Contact Us"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("tos.contact.p1") || "For any questions about these Terms, please contact us at"}{" "}
                <a href="mailto:info@zerone.info" className="text-[#0092d7] hover:text-[#00bbd7]">info@zerone.info</a>.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <Script
        id="terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(legalPageSchemas.terms),
        }}
      />
    </div>
  );
}
