import { Metadata } from "next";
import TermsOfServiceClient from "./TermsOfServiceClient";

const SITE_URL = "https://www.edunav.net";

// Metadata for Terms of Service Page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Syarat & Ketentuan - Edunav",
    description: "Syarat dan Ketentuan penggunaan aplikasi Edunav - Sistem Informasi Sekolah & LMS. Baca aturan lengkap sebelum menggunakan layanan kami.",
    keywords: [
      "syarat dan ketentuan edunav",
      "terms of service edunav",
      "tos edunav",
      "ketentuan penggunaan aplikasi sekolah",
      "aturan edunav",
    ],
    authors: [{ name: "PT Global Zerone Digital" }],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${SITE_URL}/legal/term-of-services`,
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: `${SITE_URL}/legal/term-of-services`,
      title: "Syarat & Ketentuan - Edunav",
      description: "Syarat dan Ketentuan penggunaan aplikasi Edunav - Sistem Informasi Sekolah & LMS.",
      siteName: "Edunav",
      images: [
        {
          url: `${SITE_URL}/assets/edunav-banner.webp`,
          width: 1200,
          height: 630,
          alt: "Edunav Terms of Service",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "Syarat & Ketentuan - Edunav",
      description: "Syarat dan Ketentuan penggunaan aplikasi Edunav - Sistem Informasi Sekolah & LMS.",
      creator: "@edunav_id",
    },
  };
}

export default function TermsOfServicePage() {
  return <TermsOfServiceClient />;
}
