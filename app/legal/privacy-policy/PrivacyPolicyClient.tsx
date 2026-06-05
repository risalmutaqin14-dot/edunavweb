"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Script from "next/script";
import { legalPageSchemas } from "@/src/lib/schemas";

export default function PrivacyPolicyClient() {
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
            {t("privacy.title") || "Privacy Policy"}
          </h1>
          <p className="mb-8 text-sm text-slate-500">
            {t("privacy.effective_date") || "Updated"}: {t("privacy.date") || "1 January 2025"}
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("privacy.intro.title") || "Introduction"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("privacy.intro.p1") || "Global Zerone Digital & Edukasi Universal Indonesia (Eduversal) built the Edunav app as a Free app. This SERVICE is provided by Global Zerone Digital at no cost and is intended for use as is, especially for school partners."}</p>
              <p className="text-slate-600 leading-relaxed">{t("privacy.intro.p2") || "This page is used to inform visitors regarding our policies regarding the collection, use, and disclosure of Personal Information if anyone decided to use our Service."}</p>
              <p className="text-slate-600 leading-relaxed">{t("privacy.intro.p3") || "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy."}</p>
              <p className="text-slate-600 leading-relaxed">{t("privacy.intro.p4") || "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Edunav unless otherwise defined in this Privacy Policy."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("privacy.collection.title") || "Information Collection and Use"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("privacy.collection.p1") || "For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Name, Email. The information that we request will be retained by us and used as described in this privacy policy."}</p>
              <p className="text-slate-600 leading-relaxed">{t("privacy.collection.p2") || "The app does use third-party services that may collect information used to identify you."}</p>
              <p className="text-slate-600 leading-relaxed font-semibold">{t("privacy.collection.link_title") || "Link to the privacy policy of third-party service providers used by the app"}</p>
              <ul className="list-inside list-disc text-slate-600">
                <li>{t("privacy.collection.service1") || "Google Play Services"}</li>
                <li>{t("privacy.collection.service2") || "Google Analytics for Firebase"}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("privacy.log_data.title") || "Log Data"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("privacy.log_data.p1") || "We want to inform you that whenever you use our Service, in case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (\"IP\") address, device name, operating system version, the configuration of the app when utilizing the Service, the time and date of your use of the Service, and other statistics."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("privacy.cookies.title") || "Cookies"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("privacy.cookies.p1") || "Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory."}</p>
              <p className="text-slate-600 leading-relaxed">{t("privacy.cookies.p2") || "This Service does not use these \"cookies\" explicitly. However, the app may use third party code and libraries that use \"cookies\" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("privacy.service_providers.title") || "Service Providers"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("privacy.service_providers.p1") || "We may employ third-party companies and individuals due to the following reasons:"}</p>
              <ul className="list-inside list-disc text-slate-600">
                <li>{t("privacy.service_providers.reason1") || "To facilitate our Service;"}</li>
                <li>{t("privacy.service_providers.reason2") || "To provide the Service on our behalf;"}</li>
                <li>{t("privacy.service_providers.reason3") || "To perform Service-related services; or"}</li>
                <li>{t("privacy.service_providers.reason4") || "To assist us in analyzing how our Service is used."}</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">{t("privacy.service_providers.p2") || "We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("privacy.security.title") || "Security"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("privacy.security.p1") || "We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("privacy.links.title") || "Links to Other Sites"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("privacy.links.p1") || "This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("privacy.children.title") || "Children's Privacy"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("privacy.children.p1") || "These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions."}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("privacy.changes.title") || "Changes to This Privacy Policy"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("privacy.changes.p1") || "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page."}</p>
              <p className="text-slate-600 leading-relaxed">{t("privacy.changes.p2") || "This updated policy is effective as of"} {t("privacy.date") || "1 January 2025"}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-slate-800">{t("privacy.contact.title") || "Contact Us"}</h2>
              <p className="text-slate-600 leading-relaxed">{t("privacy.contact.p1") || "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at"}{" "}
                <a href="mailto:info@zerone.info" className="text-[#0092d7] hover:text-[#00bbd7]">info@zerone.info</a>.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <Script
        id="privacy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(legalPageSchemas.privacy),
        }}
      />
    </div>
  );
}
