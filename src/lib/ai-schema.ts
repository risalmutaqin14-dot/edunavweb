// src/lib/ai-schema.ts
/**
 * AI Search Schema Generators
 * Untuk optimasi AI Search: Google AI Overviews, Perplexity, ChatGPT Search, dll.
 */

export interface HowToStep {
  "@type": string;
  position?: number;
  name: string;
  text: string;
  image?: string;
  url?: string;
}

export interface HowToSchema {
  "@context": string;
  "@type": string;
  name: string;
  description?: string;
  image?: string;
  step: HowToStep[];
}

/**
 * Generate HowTo schema untuk AI Overviews
 * AI suka konten "how-to" yang terstruktur
 */
export function generateHowToSchema(
  name: string,
  description: string,
  steps: Array<{ name: string; text: string; url?: string; image?: string }>
): HowToSchema {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: s.name,
      text: s.text,
      url: s.url,
      image: s.image,
    })),
  };
}

/**
 * HowTo: Cara Memulai Edunav
 */
export const howToStartEdunav: HowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cara Memulai Menggunakan Edunav untuk Sekolah",
  description: "Panduan langkah demi langkah untuk sekolah yang ingin memulai menggunakan Edunav sebagai sistem informasi manajemen sekolah.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Request Demo Gratis",
      text: "Kunjungi website Edunav dan isi form demo gratis. Tim Edunav akan menghubungi Anda untuk diskusi kebutuhan sekolah.",
      url: "https://www.edunav.net/",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Konsultasi Kebutuhan",
      text: "Diskusikan kebutuhan sekolah dengan tim Edunav, termasuk jumlah siswa, kurikulum yang digunakan, dan modul yang dibutuhkan.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Presentasi & Demo",
      text: "Tim Edunav akan memberikan presentasi produk dan demo langsung untuk memperlihatkan fitur-fitur yang relevan dengan kebutuhan sekolah.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Penawaran & Kontrak",
      text: "Terima proposal penawaran harga yang disesuaikan dengan kebutuhan sekolah. Tanda tangani kontrak untuk memulai implementasi.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Implementasi Sistem",
      text: "Tim Edunav membantu proses implementasi, mulai dari setup sistem, migrasi data, hingga pelatihan guru dan staf.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Go Live & Support",
      text: "Sistem siap digunakan. Tim Edunav menyediakan dukungan teknis dan pelatihan berkelanjutan untuk memastikan penggunaan optimal.",
    },
  ],
};

/**
 * HowTo: Cara Menggunakan Fitur LMS Edunav
 */
export const howToUseLMS: HowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cara Guru Menggunakan LMS Edunav untuk Pembelajaran",
  description: "Panduan lengkap guru menggunakan Learning Management System Edunav untuk mengelola pembelajaran, tugas, dan penilaian.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Login ke Dashboard Guru",
      text: "Buka aplikasi Edunav dan login dengan akun guru. Anda akan diarahkan ke dashboard khusus guru.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Buat RPP / Lesson Plan",
      text: "Gunakan fitur Lesson Plan untuk membuat RPP. Edunav AI dapat membantu generate RPP otomatis berdasarkan topik dan kurikulum.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Upload Materi Pembelajaran",
      text: "Upload materi ajar dalam berbagai format (PDF, video, link) ke LMS. Materi dapat diakses siswa kapan saja.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Buat & Distribusikan Tugas",
      text: "Buat tugas online dengan deadline. Siswa mengumpulkan tugas melalui LMS dan guru dapat menilai langsung di sistem.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Buat Ujian Online",
      text: "Gunakan fitur CBT untuk membuat ujian online dengan berbagai tipe soal. Sistem akan menilai otomatis untuk soal pilihan ganda.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Input Nilai & Generate Rapor",
      text: "Semua nilai terkumpul di Gradebook. Generate rapor otomatis dengan template yang dapat dikustomisasi sesuai kurikulum.",
    },
  ],
};

/**
 * HowTo: Cara Orang Tua Memantau Anak
 */
export const howToParentMonitoring: HowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cara Orang Tua Memantau Perkembangan Anak di Edunav",
  description: "Panduan bagi orang tua/wali murid untuk menggunakan aplikasi Edunav dalam memantau perkembangan akademik anak.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Download & Install Aplikasi",
      text: "Download aplikasi Edunav for Parents dari Google Play Store atau Apple App Store.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Login dengan Akun Orang Tua",
      text: "Gunakan kredensial yang diberikan sekolah untuk login. Satu akun orang tua dapat memantau semua anaknya di sekolah.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Cek Kehadiran Harian",
      text: "Pantau kehadiran anak secara real-time. Notifikasi otomatis dikirim jika anak tidak hadir tanpa keterangan.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Lihat Nilai & Prestasi",
      text: "Akses nilai ulangan, tugas, dan ujian. Lihat grafik perkembangan akademik anak dari waktu ke waktu.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Baca Rapor Digital",
      text: "Akses rapor digital setiap semester. Rapor berisi nilai, komentar guru, dan perkembangan karakter anak.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Komunikasi dengan Guru/Wali Kelas",
      text: "Gunakan fitur Edunav Chat untuk berkomunikasi langsung dengan wali kelas atau guru mata pelajaran.",
    },
  ],
};

/**
 * EducationalOrganization Schema untuk AI Search
 * Membantu AI memahami konteks edukasi
 */
export const educationalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://www.edunav.net/#educational-org",
  name: "Edunav - Educational Technology Provider",
  url: "https://www.edunav.net",
  description: "Edunav menyediakan sistem informasi manajemen sekolah terintegrasi untuk mendukung transformasi digital institusi pendidikan.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
    addressRegion: "DKI Jakarta",
    addressLocality: "Jakarta",
  },
  sameAs: [
    "https://www.facebook.com/edunav",
    "https://www.instagram.com/edunav.id",
    "https://www.linkedin.com/company/edunav",
  ],
};

/**
 * ItemList Schema untuk Fitur Edunav
 * Membantu AI memahami daftar fitur
 */
export const featuresListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Fitur Edunav - Sistem Informasi Sekolah",
  description: "Daftar lengkap fitur Edunav untuk manajemen sekolah modern",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Manajemen Akademik",
      description: "Kelola kurikulum, lesson plan, nilai, dan rapor dalam satu sistem terintegrasi",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Learning Management System",
      description: "Platform pembelajaran online dengan materi, tugas, dan ujian digital",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Sistem Keuangan Sekolah",
      description: "Manajemen SPP, pembayaran, dan laporan keuangan dengan integrasi payment gateway",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Komunikasi Orang Tua",
      description: "Chat terintegrasi antara sekolah dan orang tua untuk update perkembangan siswa",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "CBT & Ujian Online",
      description: "Sistem ujian berbasis komputer dengan fitur anti-kecurangan",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Edunav AI",
      description: "Asisten AI untuk pembuatan RPP otomatis dan persiapan tes internasional",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Sistem Presensi",
      description: "Absensi siswa dan guru dengan integrasi fingerprint dan face recognition",
    },
  ],
};
