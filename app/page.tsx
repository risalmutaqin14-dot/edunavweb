import Hero from "@/components/landingpage/Hero";
import About from "@/components/landingpage/About";
import Benefits from "@/components/landingpage/Benefits";
import Partners from "@/components/landingpage/Partners";
import FAQ from "@/components/landingpage/FAQ";
import { FAQSchema, defaultFAQs } from "@/components/landingpage/FAQSchema";
import Contact from "@/components/landingpage/Contact";
import WhyChooseUs from "@/components/landingpage/WhyChooseUs";
import FeatureHighlights from "@/components/landingpage/FeaturesHighlights";
import FeaturesEdunav from "@/components/landingpage/FeaturesEdunav";
import BlogSection from "@/components/landingpage/BlogSection";
import { Metadata } from "next";

const SITE_URL = "https://www.edunav.net";

// Homepage Metadata (SEO + Open Graph + Twitter Card)
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Edunav | Sistem Informasi Sekolah & LMS Terintegrasi",
    description: "Edunav adalah aplikasi sekolah digital lengkap. Kelola siswa, nilai, keuangan, dan komunikasi guru-orang tua dalam satu platform. Coba gratis sekarang!",
    keywords: [
      "sistem informasi sekolah",
      "school management system",
      "LMS",
      "aplikasi sekolah",
      "edunav",
      "manajemen sekolah",
      "sistem sekolah digital",
      "learning management system",
      "administrasi sekolah",
      "SIMS"
    ],
    authors: [{ name: "PT Global Zerone Digital" }],
    creator: "Edunav",
    publisher: "PT Global Zerone Digital",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: SITE_URL,
      title: "Edunav | Sistem Informasi Sekolah & LMS Terintegrasi",
      description: "Edunav adalah aplikasi sekolah digital lengkap. Kelola siswa, nilai, keuangan, dan komunikasi guru-orang tua dalam satu platform.",
      siteName: "Edunav",
      images: [
        {
          url: `${SITE_URL}/assets/edunav-banner.webp`,
          width: 1200,
          height: 630,
          alt: "Edunav - Sistem Informasi Sekolah & LMS",
        },
        {
          url: `${SITE_URL}/assets/edunav-square.webp`,
          width: 800,
          height: 800,
          alt: "Edunav Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Edunav | Sistem Informasi Sekolah & LMS Terintegrasi",
      description: "Edunav adalah aplikasi sekolah digital lengkap. Kelola siswa, nilai, keuangan, dan komunikasi guru-orang tua dalam satu platform.",
      images: [
        `${SITE_URL}/assets/edunav-banner.webp`,
      ],
      creator: "@edunav_id",
      site: "@edunav_id",
    },
    other: {
      "ai-search": "enabled",
      "ai-summary": "Edunav adalah sistem informasi manajemen sekolah (SIMS) terintegrasi untuk sekolah modern di Indonesia dan Asia. Solusi lengkap untuk manajemen akademik, LMS, keuangan, dan komunikasi sekolah-orang tua.",
    },
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Benefits />
      <FeatureHighlights />
      <FeaturesEdunav />
      <Partners />
      <BlogSection />
      <FAQSchema questions={defaultFAQs} />
      <FAQ />
      <Contact />
    </>
  );
}
