// components/landingpage/FAQSchema.tsx
/**
 * Server-side FAQ Schema Component
 * Injects JSON-LD FAQPage schema that crawlers can read
 */
import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  questions: FAQItem[];
}

export function FAQSchema({ questions }: FAQSchemaProps) {
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

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Default FAQ data (Indonesian)
export const defaultFAQs: FAQItem[] = [
  {
    question: "Apa itu Edunav?",
    answer: "Edunav adalah aplikasi sekolah digital lengkap. Aplikasi ini bantu sekolah atur siswa, nilai, dan uang. Orang tua juga bisa chat dengan guru di Edunav.",
  },
  {
    question: "Berapa harga Edunav?",
    answer: "Harga Edunav sesuai jumlah siswa. Sekolah bisa bayar per bulan atau per tahun. Coba demo gratis dulu untuk tahu harga yang pas.",
  },
  {
    question: "Kurikulum apa yang didukung?",
    answer: "Edunav bisa untuk semua kurikulum. Ada Kurikulum Merdeka, Cambridge, IB, dan kurikulum lainnya. Sekolah bisa atur rapor sesuai kurikulum yang dipakai.",
  },
  {
    question: "Bisa pakai fingerprint dan pembayaran online?",
    answer: "Ya, Edunav bisa hubung dengan fingerprint untuk absensi. Sekolah juga bisa pakai pembayaran online lewat GoPay, OVO, atau kartu kredit.",
  },
  {
    question: "Bagaimana cara mulai pakai Edunav?",
    answer: "Langkahnya mudah: 1) Isi form demo di website, 2) Tim kami akan hubungi Anda, 3) Kami jelaskan fitur yang cocok, 4) Pilih paket dan mulai pakai, 5) Kami bantu sampai bisa.",
  },
  {
    question: "Edunav cocok untuk sekolah internasional?",
    answer: "Ya, sangat cocok. Edunav bisa pakai bahasa Indonesia dan Inggris. Rapor bisa disesuai format Cambridge atau IB. Banyak sekolah internasional di Asia sudah pakai Edunav.",
  },
  {
    question: "Berapa lama pasang Edunav?",
    answer: "Biasanya 2-8 minggu. Tergantung besar sekolah dan banyaknya data. Tim Edunav akan bantu dari awal sampai siap dipakai. Kami juga latih guru dan staf.",
  },
];
