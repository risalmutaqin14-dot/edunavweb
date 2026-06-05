import { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

const SITE_URL = "https://www.edunav.net";

// Metadata for Privacy Policy Page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Kebijakan Privasi - Edunav",
    description: "Kebijakan Privasi Edunav. Pelajari bagaimana kami melindungi data dan informasi pribadi pengguna aplikasi sekolah digital Edunav.",
    keywords: [
      "kebijakan privasi edunav",
      "privacy policy edunav",
      "privasi aplikasi sekolah",
      "perlindungan data siswa",
      "keamanan data edunav",
    ],
    authors: [{ name: "PT Global Zerone Digital" }],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${SITE_URL}/legal/privacy-policy`,
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: `${SITE_URL}/legal/privacy-policy`,
      title: "Kebijakan Privasi - Edunav",
      description: "Kebijakan Privasi Edunav. Pelajari bagaimana kami melindungi data dan informasi pribadi pengguna.",
      siteName: "Edunav",
      images: [
        {
          url: `${SITE_URL}/assets/edunav-banner.webp`,
          width: 1200,
          height: 630,
          alt: "Edunav Privacy Policy",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "Kebijakan Privasi - Edunav",
      description: "Kebijakan Privasi Edunav. Pelajari bagaimana kami melindungi data dan informasi pribadi pengguna.",
      creator: "@edunav_id",
    },
  };
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
