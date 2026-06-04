// app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import ClientScrollLogic from "@/components/ClientScrollLogic";
import Providers from "@/components/Providers";
import "./globals.css";
import {
  howToStartEdunav,
  howToUseLMS,
  howToParentMonitoring,
  educationalOrganizationSchema,
  featuresListSchema,
} from "../src/lib/ai-schema";
import { getHomepageArticleSchemas } from "../src/lib/article-schema";

// JSON-LD Structured Data - Combined for AI Search Optimization
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.edunav.net/#organization",
      name: "Edunav",
      url: "https://www.edunav.net",
      logo: {
        "@type": "ImageObject",
        url: "https://www.edunav.net/assets/edunav.png",
        caption: "Edunav Logo",
        width: 512,
        height: 512,
      },
      description: "Edunav adalah aplikasi sekolah digital lengkap. Edunav bantu sekolah atur siswa, nilai, dan uang dengan mudah.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Raya Jakarta",
        addressLocality: "Jakarta",
        addressRegion: "DKI Jakarta",
        postalCode: "12345",
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-21-12345678",
        contactType: "Sales",
        availableLanguage: ["Indonesian", "English"],
      },
      sameAs: [
        "https://www.facebook.com/edunav",
        "https://www.instagram.com/edunav.id",
        "https://www.linkedin.com/company/edunav",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.edunav.net/#website",
      url: "https://www.edunav.net",
      name: "Edunav",
      description: "Edunav adalah aplikasi sekolah lengkap. Atur siswa, nilai, uang, dan chat guru-orang tua dalam satu tempat.",
      publisher: {
        "@id": "https://www.edunav.net/#organization",
      },
      inLanguage: "id-ID",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.edunav.net/#software",
      name: "Edunav - School Management System",
      operatingSystem: "Web, iOS, Android",
      applicationCategory: "EducationalApplication",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "150",
        bestRating: "5",
        worstRating: "1",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "IDR",
        description: "Coba gratis dulu. Harga sesuai jumlah siswa.",
        availability: "https://schema.org/InStock",
      },
      description: "Edunav adalah aplikasi sekolah yang lengkap. Atur siswa, nilai, uang, dan semua hal sekolah jadi lebih mudah.",
      featureList: [
        "Atur Siswa dan Nilai",
        "Belajar Online (LMS)",
        "Uang Sekolah",
        "Chat Orang Tua",
        "Ujian Online",
        "Bantu AI",
        "Absensi",
      ],
    },
    // AI Search Optimized: EducationalOrganization
    educationalOrganizationSchema,
    // AI Search Optimized: HowTo Schemas
    howToStartEdunav,
    howToUseLMS,
    howToParentMonitoring,
    // AI Search Optimized: Features List
    featuresListSchema,
    // FAQ for AI Overviews - Readable version (Flesch 60+)
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apa itu Edunav?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Edunav adalah aplikasi sekolah digital lengkap. Aplikasi ini bantu sekolah atur siswa, nilai, dan uang. Orang tua juga bisa chat dengan guru di Edunav.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa harga Edunav?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Harga Edunav sesuai jumlah siswa. Sekolah bisa bayar per bulan atau per tahun. Coba demo gratis dulu untuk tahu harga yang pas.",
          },
        },
        {
          "@type": "Question",
          name: "Kurikulum apa yang didukung?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Edunav bisa untuk semua kurikulum. Ada Kurikulum Merdeka, Cambridge, IB, dan kurikulum lainnya. Sekolah bisa atur rapor sesuai kurikulum yang dipakai.",
          },
        },
        {
          "@type": "Question",
          name: "Bisa pakai fingerprint dan pembayaran online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, Edunav bisa hubung dengan fingerprint untuk absensi. Sekolah juga bisa pakai pembayaran online lewat GoPay, OVO, atau kartu kredit.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana cara mulai pakai Edunav?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Langkahnya mudah: 1) Isi form demo di website, 2) Tim kami akan hubungi Anda, 3) Kami jelaskan fitur yang cocok, 4) Pilih paket dan mulai pakai, 5) Kami bantu sampai bisa.",
          },
        },
        {
          "@type": "Question",
          name: "Edunav cocok untuk sekolah internasional?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, sangat cocok. Edunav bisa pakai bahasa Indonesia dan Inggris. Rapor bisa disesuai format Cambridge atau IB. Banyak sekolah internasional di Asia sudah pakai Edunav.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa lama pasang Edunav?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Biasanya 2-8 minggu. Tergantung besar sekolah dan banyaknya data. Tim Edunav akan bantu dari awal sampai siap dipakai. Kami juga latih guru dan staf.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah ada pelatihan untuk guru?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, ada. Kami latih semua guru dan staf. Bisa datang ke sekolah atau online. Kami pastikan semua bisa pakai Edunav dengan baik.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: "https://www.edunav.net/",
        },
      ],
    },
    // Include latest articles in homepage schema
    ...getHomepageArticleSchemas(),
  ],
};

// Plus Jakarta Sans Font Configuration
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
}); 

// Metadata (SEO + AI Search)
export const metadata: Metadata = {
  title: {
    default: "Edunav | Sistem Informasi Sekolah & LMS",
    template: "%s | Edunav"
  },
  description: "Edunav: Sistem informasi manajemen sekolah (SIMS) terintegrasi. Kelola administrasi akademik, keuangan, komunikasi, & pembelajaran dalam 1 platform.",
  keywords: [
    "sistem informasi sekolah",
    "SIMS",
    "school management system",
    "LMS",
    "sistem manajemen sekolah",
    "aplikasi sekolah",
    "edunav",
    "learning management system",
    "administrasi sekolah",
    "management akademik"
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "add-your-google-verification-code",
    yandex: "add-your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://www.edunav.net",
    languages: {
      'id-ID': 'https://www.edunav.net/',
      'en-SG': 'https://www.edunav.net/en/',
      'id': 'https://www.edunav.net/',
      'en': 'https://www.edunav.net/en/',
      'x-default': 'https://www.edunav.net/',
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.edunav.net",
    title: "Edunav | Sistem Informasi Sekolah & LMS",
    description: "Edunav: Sistem informasi manajemen sekolah (SIMS) terintegrasi. Kelola administrasi akademik, keuangan, komunikasi, & pembelajaran dalam 1 platform.",
    siteName: "Edunav",
    images: [
      {
        url: "https://www.edunav.net/assets/edunav-banner.webp",
        width: 1200,
        height: 630,
        alt: "Edunav - Sistem Informasi Sekolah"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edunav | Sistem Informasi Sekolah & LMS",
    description: "Edunav: Sistem informasi manajemen sekolah (SIMS) terintegrasi. Kelola administrasi akademik, keuangan, komunikasi, & pembelajaran dalam 1 platform.",
    images: ["https://www.edunav.net/assets/edunav-banner.webp"],
    creator: "@edunav_id",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <body className="font-plus-jakarta-sans" suppressHydrationWarning>
        {/* Datafa.st Analytics */}
        <Script
          defer
          data-website-id="dfid_rFnDDkRibf95WeGhV3x3w"
          data-domain="www.edunav.net"
          src="https://datafa.st/js/script.js"
        />

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '441263355307477');
fbq('track', 'PageView');`}
        </Script>

        {/* Facebook Pixel NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src="https://www.facebook.com/tr?id=441263355307477&ev=PageView&noscript=1"
          />
        </noscript>

        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* AI Search Meta Tags */}
        <meta name="ai-search" content="enabled" />
        <meta name="ai-summary" content="Edunav adalah sistem informasi manajemen sekolah (SIMS) terintegrasi untuk sekolah modern di Indonesia dan Asia. Solusi lengkap untuk manajemen akademik, LMS, keuangan, dan komunikasi sekolah-orang tua." />
        <link rel="alternate" type="application/rss+xml" title="Edunav Blog RSS" href="https://www.edunav.net/rss" />

        {/* IndexNow for Real-time Indexing */}
        <meta name="indexnow" content="https://www.edunav.net/indexnow" />

        <div className="min-h-screen w-full bg-white relative">
          {/* Content */}
          <div className="relative z-10">
            <Providers>
              {/* Navbar dan logic scroll kita letakkan di sini */}
              <NavbarWrapper />
              <ClientScrollLogic />

              <main style={{ paddingTop: "5rem" }}>
                {children}
              </main>

              <Footer />
              <StickyContact />
            </Providers>
          </div>
        </div>
      </body>
    </html>
  );
}