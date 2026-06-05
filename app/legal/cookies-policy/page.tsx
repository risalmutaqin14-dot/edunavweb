import { Metadata } from "next";
import CookiesPolicyClient from "./CookiesPolicyClient";

const SITE_URL = "https://www.edunav.net";

// Metadata for Cookies Policy Page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Kebijakan Cookies - Edunav",
    description: "Kebijakan Cookies Edunav. Pelajari bagaimana kami menggunakan cookies untuk meningkatkan pengalaman pengguna dan analitik.",
    keywords: [
      "kebijakan cookies edunav",
      "cookies policy edunav",
      "penggunaan cookies",
      "kebijakan cookie aplikasi sekolah",
      "manajemen cookies edunav",
    ],
    authors: [{ name: "PT Global Zerone Digital" }],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${SITE_URL}/legal/cookies-policy`,
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: `${SITE_URL}/legal/cookies-policy`,
      title: "Kebijakan Cookies - Edunav",
      description: "Kebijakan Cookies Edunav. Pelajari bagaimana kami menggunakan cookies untuk meningkatkan pengalaman pengguna.",
      siteName: "Edunav",
      images: [
        {
          url: `${SITE_URL}/assets/edunav-banner.webp`,
          width: 1200,
          height: 630,
          alt: "Edunav Cookies Policy",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "Kebijakan Cookies - Edunav",
      description: "Kebijakan Cookies Edunav. Pelajari bagaimana kami menggunakan cookies untuk meningkatkan pengalaman pengguna.",
      creator: "@edunav_id",
    },
  };
}

export default function CookiesPolicyPage() {
  return <CookiesPolicyClient />;
}
