// File: src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  // --- BAHASA INDONESIA (Default) ---
  id: {
    translation: {
      meta: {
        title: "Edunav | Sistem Informasi Sekolah & Manajemen Akademik Terpadu",
        desc: "Mengenal Edunav, partner transformasi digital sekolah terpercaya. Solusi sistem informasi manajemen sekolah (SIMS) aman & terintegrasi.",
      },
      navbar: {
        home: "Beranda",
        about: "Tentang",
        benefit: "Manfaat",
        features: "Fitur",
        partners: "Mitra",
        blog: "Blog",
        faq: "FAQ",
        contact: "Kontak",
        btn_demo: "Demo Gratis",
        btn_login: "Masuk",
      },
      hero: {
        title: "Sistem Informasi Sekolah untuk Administrasi Pendidikan Modern",
        desc: "Kelola seluruh aspek administrasi sekolah secara efisien dengan sistem informasi pendidikan berbasis digital. EDUNAV menghadirkan fitur terlengkap untuk pendaftaran siswa, manajemen pembelajaran, penilaian akademik, kontrol orang tua dan keuangan sekolah, semua dalam satu platform yang mudah digunakan dan terintegrasi.",
        btn_demo: "Demo Gratis Sekarang",
        btn_zoom: "Jadwalkan Via Zoom",
      },
      counter: {
        title1:
          "Sistem Informasi Sekolah Tercanggih dan Terlengkap yang Sesuai untuk Sekolah Anda",
        desc: "Edunav aktif digunakan oleh institusi pendidikan dengan berbagai model sekolah, kurikulum, dan kebutuhan operasional. Dengan 10 tahun lebih berdedikasi, kami terus berkomitmen mendukung transformasi digital sekolah di Indonesia.",
        country: "Negara",
        school: "Sekolah",
        user: "Pengguna",
        tenant: "Tenant",
      },
      whyChooseUs: {
        hook: "Mengapa Memilih Edunav?",
        title: "Satu Sistem Untuk Semua Kebutuhan",
        desc: "EDUNAV menghadirkan solusi sistem informasi pendidikan terintegrasi dengan fitur modern untuk administrasi sekolah, manajemen akademik, dan komunikasi orang tua.",
        card: {
          card1: "Teknologi Terintegrasi & Aman",
          card2: "Manajemen Akademik Menyeluruh",
          card3: "Ekosistem Akademik Komprehensif",
          card4: "Dukungan Layanan Prioritas",
          card5: "Keuangan Sekolah & Tagihan",
          card6: "Monitoring & Pelaporan Institusi",
        },
        desc2:
          "Pendekatan terpadu ini meningkatkan efisiensi, transparansi, dan konsistensi data.",
      },
      benefit: {
        title: "Apa saja manfaat EDUNAV?",
        desc: "EDUNAV membantu sekolah mengelola informasi secara real-time dan efisien. Dengan fitur modern dan tampilan interaktif, aplikasi ini mendukung produktivitas dan transparansi dalam administrasi pendidikan.",
        btn_brosur: "Download Brosur",
        btn_simulator: "Simulasi Harga",
        point: {
          point1: "Sistem Pendaftaran Siswa",
          point2: "Sistem Manajemen Pembelajaran",
          point3: "Penilaian Guru & Siswa",
          point4: "Sistem Administrasi",
          point5: "Modul Keuangan",
        },
      },
      simulator: {
        title: "Simulasi Langganan Edunav",
        subtitle: "Hitung estimasi biaya implementasi untuk sekolah Anda",
        setup_fee: {
          title: "Biaya Setup Awal",
          subtitle: "Implementasi sistem",
          description: "Biaya one-time untuk setup dan konfigurasi sistem Edunav",
        },
        price_per_student: {
          title: "Harga per Siswa",
          subtitle: "Langganan bulanan",
          description: "Harga langganan per siswa setiap bulannya",
        },
        per_student_month: "siswa/bulan",
        students: "Siswa",
        student_count: {
          label: "Jumlah Siswa",
        },
        monthly_estimation: {
          label: "Estimasi Bulanan",
        },
        yearly_estimation: {
          label: "Estimasi Tahunan",
        },
        month: "bulan",
        year: "tahun",
        total_first_year: "Total Tahun Pertama",
        setup_plus_12_months: "Setup + 12 Bulan",
        note: {
          label: "Catatan",
          text: "Harga dapat disesuaikan sesuai kebutuhan dan skala sekolah Anda. Hubungi kami untuk penawaran khusus.",
        },
        cta_button: "Konsultasi Gratis",
      },
      edunavCommunication: {
        hook: "Edunav Chat",
        title: "Sistem Komunikasi Wali Murid",
        summary: "Komunikasi real-time antara orang tua, guru, dan staf dalam satu platform terintegrasi.",
        points: {
          1: "Kirim teks, gambar, dan dokumen seperti aplikasi chat modern",
          2: "Riwayat percakapan tersimpan rapi untuk referensi dan tindak lanjut",
          3: "Pola komunikasi dapat disesuaikan sesuai kebijakan sekolah",
        },
      },
      edunavExam: {
        hook: "Edunav Exam",
        title: "Sistem Ujian Online Canggih",
        summary: "Platform CBT aman dengan penilaian otomatis dan fitur anti-kecurangan terintegrasi.",
        points: {
          1: "Berbagai tipe soal dengan penilaian otomatis untuk koreksi cepat",
          2: "Fitur keamanan: cheating prevention, pemantauan kamera, SEB support",
          3: "Pin App pada mobile untuk mencegah kecurangan selama ujian",
        },
      },
      edunavAI: {
        hook: "Edunav AI",
        title: "AI Generate Lesson Plan",
        summary: "Teknologi AI terintegrasi untuk meningkatkan efisiensi dan kualitas proses akademik sekolah.",
        pointAI: {
          point1: "Pembuatan RPP otomatis",
          point2: "Asisten penjadwalan",
          point3: "Tes persiapan IELTS, TOEFL, dan IGCSE",
          point4: "Evaluasi matematika dengan analisis cepat & akurat",
        },
      },
      edunavPayment: {
        hook: "Keuangan Edunav",
        title: "Integrasi Payment Gateway",
        summary: "Pembayaran tagihan sekolah langsung dari aplikasi dengan berbagai metode pembayaran.",
        points: {
          1: "Support bank transfer, e-wallet, PayPal, dan kartu kredit",
          2: "Integrasi khusus dengan bank partner jika diperlukan",
          3: "Transaksi tercatat otomatis dengan monitoring real-time",
        },
      },
      Partners: {
        tag: "Mitra Terpercaya",
        title: "Bersama 175+ Sekolah Membangun Pendidikan Digital Indonesia",
        desc: "Edunav dipercaya oleh institusi pendidikan terbaik di Indonesia untuk transformasi digital manajemen sekolah yang terintegrasi, aman, dan modern.",
        carousel_title: "Dipercaya oleh Sekolah-Sekolah Terbaik",
        sekolah_garuda: {
          badge: "Prestasi Nasional",
          title: "Sekolah Garuda 2026",
          desc: "EDUNAV bangga mendampingi sekolah-sekolah terbaik di Indonesia yang berhasil lolos seleksi program Sekolah Menengah Atas Unggul Garuda Transformasi oleh Kementerian Pendidikan Tinggi, Sains, dan Teknologi.",
          subtitle: "Selamat atas pencapaian sekolah-sekolah berikut:",
        },
      },
      testimonials: {
        title: "Apa Kata Mereka Tentang Edunav?",
        testi1: {
          name: "Redi Rahmat",
          title: "Guru Olahraga",
          company: "Kharisma Bangsa School",
          content:
            "Edunav membuat administrasi mengajar jauh lebih cepat dan rapi di Sekolah Kharisma Bangsa. Absensi, RPP, penilaian, dan raport yang dulu manual kini terintegrasi dan otomatis. Saya bisa memantau perkembangan siswa dengan mudah dan fokus pada proses belajar, bukan lagi pada pekerjaan administratif. Edunav benar-benar meningkatkan efisiensi kerja guru.",
        },
        testi2: {
          name: "Adib",
          title: "Guru Matematika & Konselor",
          company: "Fatih Bilingual School",
          content:
            "Edunav LMS sangat membantu proses belajar di dalam dan luar kelas. Guru dapat memberikan materi, evaluasi, dan memantau progres siswa dengan mudah, sementara orang tua dapat mengikuti perkembangan anak secara real time. Fitur administrasi wali kelas, bimbingan konseling, hingga sistem red card dan green card membuat pemantauan perilaku dan perkembangan siswa jauh lebih terstruktur. Edunav benar-benar mempermudah guru, siswa, dan orang tua dalam seluruh proses pembelajaran.",
        },
        testi3: {
          name: "Akbar Dermawan Sinaga",
          title: "Staf Akademik ",
          company: "Fatih Bilingual School",
          content:
            "Edunav menghadirkan sistem akademik yang lengkap dan terintegrasi di Fatih Bilingual School. Guru dapat membuat lesson plan, mengunggah materi, memberi tugas, dan menilai langsung di platform. Wali kelas mudah memantau perkembangan siswa melalui fitur guidance, career planning, hingga sistem green card dan red card. Absensi terhubung otomatis dengan fingerprint, dan orang tua dapat memonitor perkembangan anak kapan saja. Edunav mempermudah seluruh proses belajar dan manajemen sekolah.",
        },
      },
      faq: {
        hook: "Tanya Jawab",
        title: "Pertanyaan yang Sering Diajukan",
        desc: "Temukan jawaban cepat mengenai fitur, keamanan, dan layanan Edunav di sini.",
        other: "Masih punya pertanyaan lain?",
        question1: {
          question: "Apa itu Edunav?",
          answer:
            "Edunav adalah sistem informasi manajemen sekolah terintegrasi yang membantu digitalisasi administrasi, akademik, hingga komunikasi antara sekolah dan orang tua dalam satu platform.",
        },
        question2: {
          question: "Berapa harga langganan Edunav?",
          answer:
            "Edunav menggunakan skema berlangganan tahunan/bulanan dengan biaya yang disesuaikan jumlah siswa dan kebutuhan fitur sekolah. Untuk mendapatkan penawaran harga yang paling akurat, sekolah dapat mengisi form “Coba Demo Gratis” dan tim Edunav akan memberikan proposal resmi sesuai profil institusi.",
        },
        question3: {
          question:
            "Apakah Edunav mendukung berbagai kurikulum (Merdeka, Cambridge, IB, dll.)?",
          answer:
            "Ya, Edunav mendukung Kurikulum Merdeka serta kurikulum internasional seperti Cambridge dan IB melalui fitur lesson plan dan manajemen akademik serta pembuatan layout rapor yang fleksibel. Sistem juga mendukung kebutuhan khusus seperti program Quranic, career planning, hingga persiapan IELTS, TOEFL, dan IGCSE dengan integrasi aplikasi lainnya.",
        },
        question4: {
          question: "Berapa lama proses implementasi Edunav di sekolah?",
          answer:
            "Lama implementasi tergantung pada jumlah siswa, kompleksitas data, dan modul yang diaktifkan, namun umumnya dimulai dari beberapa minggu hingga beberapa bulan. Tim Edunav akan mendampingi proses migrasi data, konfigurasi kurikulum, pelatihan guru, serta uji coba sebelum sistem digunakan penuh.",
        },
        question5: {
          question:
            "Apakah Edunav bisa diintegrasikan dengan fingerprint, WhatsApp, dan payment gateway?",
          answer:
            "Ya, Edunav mendukung integrasi dengan mesin fingerprint untuk presensi, layanan notifikasi WhatsApp pihak ketiga, serta berbagai payment gateway untuk pembayaran tagihan sekolah. Seluruh transaksi dan data integrasi tercatat otomatis di dalam sistem agar mudah dipantau oleh manajemen sekolah.",
        },
        question6: {
          question: "Seberapa aman data sekolah di Edunav?",
          answer:
            "Edunav menggunakan enkripsi tingkat enterprise dan sistem backup otomatis untuk melindungi data akademik dan keuangan sekolah. Hak akses juga diatur berbasis peran agar hanya pihak yang berwenang yang dapat melihat atau mengubah data tertentu.",
        },
        question7: {
          question:
            "Siapa saja yang bisa mengakses Edunav (guru, siswa, orang tua)?",
          answer:
            "Edunav menyediakan akses terpisah untuk guru, siswa, dan orang tua sehingga setiap pengguna hanya melihat fitur dan informasi yang relevan. Orang tua dapat memantau kehadiran, nilai, dan perkembangan anak secara real‑time melalui aplikasi atau portal yang disediakan.",
        },
      },
      footer: {
        desc: "Sistem Informasi Sekolah Terpadu untuk Lembaga Pendidikan Modern",
        menu1: "Hubungi Kami",
        menu2: "Tersedia di",
        menu3: "Terdaftar di",
        copyright:
          "Copyright Ⓒ 2025, PT Global Zerone Digital. All Rights Reserved.",
      },

      //-------------- Fitur Edunav (Indonesian) -----------------
      features: {
        title_small: "Sistem Informasi Sekolah",
        title_main: "Rincian Fitur Edunav",
        categories: {
          managerial: {
            title: "Fitur Manajerial",
            summary: "Pusat kendali manajemen untuk yayasan dan institusi dengan monitoring terpadu.",
            items: {
              dashboard: {
                title: "Dashboard Yayasan",
                desc: "Untuk yayasan atau institusi yang memiliki banyak tenant, Edunav menyediakan HQ Dashboard sebagai pusat pemantauan seluruh sekolah dalam satu tampilan terintegrasi. Dashboard ini menyajikan data akademik, keuangan, kehadiran, dan operasional setiap kampus secara real-time. Informasi antar sekolah dapat dibandingkan dengan mudah untuk melihat tren, performa, dan area yang membutuhkan perhatian. Fitur ini dirancang untuk membantu manajemen pusat mengambil keputusan strategis berbasis data dengan cepat dan akurat.",
              },
              admission: {
                title: "Penerimaan Siswa Baru",
                desc: "Modul Admission mengelola seluruh proses penerimaan siswa baru, mulai dari pendaftaran, verifikasi data, hingga pelaporan. Setiap tahap tercatat secara digital untuk memastikan proses PPDB berjalan efisien, transparan, dan terdokumentasi dengan baik.",
              },
              appraisal: {
                title: "Modul Penilaian",
                desc: "Modul Appraisals menyediakan sistem penilaian kinerja guru dan staf yang terstruktur dan transparan. Sekolah dapat menggunakan rubrik standar Edunav atau menyesuaikan dengan kebijakan internal untuk memastikan evaluasi dilakukan secara objektif dan konsisten.",
              },
              student_survey: {
                title: "Survey Siswa",
                // PERBAIKAN: "kebutuhan survei" -> "masukan"
                desc: "Fitur Survey Siswa memungkinkan sekolah mengumpulkan masukan siswa terkait pengalaman belajar, kenyamanan sekolah, dan kualitas pembelajaran. Data yang terkumpul membantu manajemen melakukan evaluasi dan peningkatan layanan.",
              },
              parent_survey: {
                title: "Survey Wali Murid",
                desc: "Survey Wali Murid menyediakan cara terstruktur bagi sekolah untuk mengumpulkan masukan dari orang tua terkait layanan akademik maupun non-akademik. Setiap survei dapat disesuaikan dengan preferensi dan kebutuhan sekolah untuk memastikan relevansi data yang dikumpulkan. Hasil survei memberikan insight yang berharga untuk memperkuat komunikasi, meningkatkan kualitas layanan, dan mendorong kepuasan orang tua secara keseluruhan.",
              },
              finance: {
                title: "Keuangan Sekolah",
                desc: "Modul Finance menyediakan manajemen keuangan sekolah mulai dari transaksi, anggaran, pelaporan, hingga sistem payment digital dengan multi bank channel. Seluruh data keuangan tercatat dengan akurat dan dapat diakses dalam bentuk laporan yang siap digunakan untuk audit dan evaluasi.",
              },
            },
          },
          operational: {
            title: "Fitur Operasional",
            summary: "Kelola jadwal, kelas, dan operasional sekolah dengan sistem terintegrasi.",
            items: {
              calendar: {
                title: "Kalender Akademik",
                desc: "Academic Calendars memungkinkan sekolah menetapkan kalender akademik resmi, termasuk hari belajar, ujian, dan libur sekolah. Seluruh jadwal tersinkron otomatis ke modul lain sehingga guru, siswa, dan orang tua selalu memperoleh informasi yang akurat.",
              },
              class_mgmt: {
                title: "Manajemen Kelas",
                desc: "Fitur ini digunakan untuk membuat dan mengelola struktur kelas setiap tahun ajaran. Setiap kelas terhubung secara langsung dengan data siswa, wali kelas, mata pelajaran, dan jadwal, sehingga menjadi fondasi utama dalam pengelolaan akademik di Edunav. Sistem ini memastikan informasi kelas tersusun rapi, terintegrasi, dan siap digunakan untuk seluruh proses akademik sekolah.",
              },
              lesson_mgmt: {
                title: "Manajemen Pelajaran",
                desc: "Sekolah dapat mendefinisikan daftar mata pelajaran dan struktur pembelajarannya. Lesson yang dibuat akan menjadi acuan bagi guru dalam pengajaran, penilaian, dan penyusunan laporan semester.",
              },
              course_mgmt: {
                title: "Manajemen Mata Pelajaran",
                desc: "Courses dibuat untuk menghubungkan mata pelajaran dengan guru, kelas, siswa dan jadwal. Melalui fitur ini, seluruh aktivitas belajar seperti penilaian, absensi, dan lesson plan terintegrasi dalam satu ruang kerja digital.",
              },
              schedule: {
                title: "Jadwal Pelajaran",
                desc: "Modul Schedule menyediakan pengaturan jadwal belajar yang fleksibel dengan deteksi bentrok antar jadwal. Jadwal yang dibuat akan ditampilkan ke seluruh pengguna dan tersinkron langsung dengan modul Attendance dan Course.",
              },
              extra_curricular: {
                title: "Manajemen Kokurikuler & Ekstrakurikuler",
                desc: "Fitur ini digunakan untuk membuat dan mengelola kegiatan ekstrakurikuler atau klub siswa. Setiap klub memiliki jadwal, PIC, serta sistem penilaian yang dapat ditampilkan dalam rapor.",
              },
              project_mgmt: {
                title: "Manajemen Projek",
                // PERBAIKAN: "co-curricular" -> "kokurikuler"
                desc: "Sekolah dapat membuat proyek akademik atau kokurikuler yang melibatkan banyak siswa dan guru. Setiap proyek memiliki indikator penilaian tersendiri dan dapat dimonitor secara terstruktur sepanjang semester.",
              },
              wa_notif: {
                title: "Notifikasi WA (3rd party)",
                desc: "Fitur ini memungkinkan sekolah mengirim pesan otomatis melalui WhatsApp dengan integrasi penyedia API pihak ketiga. Notifikasi dikirim untuk informasi penting seperti absensi, PPDB, keuangan, dan medical treatment.",
              },
            },
          },
          academic: {
            title: "Fitur Akademik",
            summary: "Kelola pembelajaran, penilaian, dan rapor dalam ekosistem digital.",
            items: {
              lesson_plan: {
                title: "Manajemen RPP",
                desc: "Fitur Lesson Plan membantu guru menyusun rencana pembelajaran secara terstruktur dan terhubung langsung dengan LMS mengajar. Dokumen dapat ditinjau oleh manajemen, dan alur persetujuannya dapat disesuaikan dengan kebijakan sekolah untuk memastikan kualitas perencanaan pembelajaran.",
              },
              lms: {
                title: "LMS",
                desc: "LMS menyediakan ruang digital untuk materi ajar, tugas, pengumpulan pekerjaan siswa, serta komunikasi kelas. Seluruh aktivitas pembelajaran terdokumentasi dan dapat dipantau oleh guru, manajemen, dan wali murid.",
              },
              syllabus: {
                title: "Silabus/Materi",
                desc: "Modul Syllabus memungkinkan sekolah menetapkan kurikulum, capaian pembelajaran, dan struktur materi setiap mata pelajaran. Guru menggunakan syllabus sebagai acuan dalam aktivitas di kelas.",
              },
              attendance: {
                title: "Presensi & Absensi",
                desc: "Fitur Attendance mencatat kehadiran siswa secara harian maupun per sesi pembelajaran. Data absensi terintegrasi dengan jadwal, modul rapor, serta notifikasi WhatsApp untuk ketidakhadiran tanpa keterangan.",
              },
              journal: {
                title: "Jurnal dan Refleksi",
                desc: "Journals berfungsi sebagai catatan aktivitas pembelajaran harian guru terkait aktivitas kelas, progres siswa, dan agenda mengajar. Catatan ini mendukung evaluasi akademik dan pelaporan internal sekolah.",
              },
              gradebook: {
                title: "Buku Nilai",
                desc: "Gradebook memungkinkan guru mengelola nilai siswa untuk berbagai jenis penilaian. Sistem mendukung perhitungan otomatis, pengaturan bobot nilai, serta pembuatan rapor.",
              },
              report: {
                title: "Rapor Sekolah",
                desc: "Modul Reporting mengelola seluruh proses pembuatan rapor mulai dari input nilai, komentar, absensi, hingga pencetakan. Template dan tampilan rapor dapat disesuaikan dan dikonfigurasi sesuai standar sekolah atau kurikulum tertentu.",
              },
            },
          },
          student: {
            title: "Fitur Siswa",
            summary: "Pantau perkembangan siswa dari kehadiran hingga prestasi akademik.",
            items: {
              entry: {
                title: "Student Entry",
                desc: "Fitur Student Entry memungkinkan sekolah memonitor aktivitas siswa saat memasuki atau meninggalkan area sekolah. Seluruh data kehadiran tercatat otomatis dalam sistem untuk mendukung keamanan dan monitoring harian. Fitur ini dapat terhubung dengan perangkat presensi sekolah, termasuk fingerprint, face recognition, dan RFID scanner.",
              },
              clubs: {
                title: "Klub & Ekstrakurikuler",
                desc: "Modul Clubs memungkinkan siswa melihat kegiatan ekstrakurikuler yang mereka ikuti, termasuk jadwal, nilai, dan komentar dari PIC. Informasi ini juga terhubung ke laporan perkembangan siswa.",
              },
              house: {
                title: "Sistem (House)",
                desc: "Fitur Housing digunakan untuk mengelola sistem house, yaitu pembagian siswa ke dalam kelompok untuk membangun rasa kebersamaan dan kompetisi. Setiap siswa ditempatkan pada satu house selama masa sekolahnya. Setiap house memiliki identitas sendiri, seperti nama tokoh, hewan, atau warna. Melalui fitur ini, sekolah dapat mencatat anggota house, aktivitas, dan perolehan poin dari berbagai lomba. Sistem ini membantu menumbuhkan semangat, karakter siswa, dan kerja sama antar anggota.",
              },
              permissions: {
                title: "Perizinan Siswa",
                desc: "Modul Permissions membantu mengelola permohonan izin siswa, seperti pulang awal, cuti, atau kegiatan khusus. Proses persetujuan dilakukan secara digital dan terdokumentasi dengan jelas.",
              },
              discipline: {
                title: "Poin Kedisiplinan",
                desc: "Fitur Discipline mencatat pelanggaran atau penghargaan disiplin siswa melalui sistem poin atau kartu. Data disiplin digunakan untuk pemantauan perkembangan karakter dan dapat ditampilkan pada rapor jika diperlukan.",
              },
              career: {
                title: "Pemetaan Karir Siswa",
                desc: "Modul Career Planning membantu siswa merencanakan tujuan akademik dan karier, seperti target universitas, portofolio, dan catatan konsultasi. Fitur ini mendukung pembimbingan yang lebih terarah oleh guru BK atau konselor sekolah.",
              },
              quranic: {
                title: "Program Sekolah Islam (Tahfidz)",
                desc: "Fitur Quranic Program membantu sekolah mengelola perkembangan pembelajaran Al-Qur’an di sekolah, termasuk hafalan, bacaan, dan kehadiran. Sistem mendukung program Tahfidz, Tahsin, dan Khatam, yang dapat disesuaikan dengan program sekolah. Seluruh progres siswa tercatat secara terstruktur dan dapat ditampilkan dalam laporan belajar.",
              },
            },
          },
          teacher: {
            title: "Fitur Guru & Wali Kelas",
            summary: "Dukung produktivitas guru dengan tools penilaian dan administrasi.",
            items: {
              portfolio: {
                title: "Portfolio Guru",
                desc: "Modul Portfolios menyimpan riwayat profesional guru, termasuk sertifikat, pengalaman mengajar, dan dokumen pendukung lainnya. Fitur ini membantu sekolah memantau perkembangan kompetensi dan kebutuhan pengembangan guru.",
              },
              workload: {
                title: "Beban Mengajar Guru",
                desc: "Fitur Teaching Loads menampilkan distribusi jam mengajar setiap guru berdasarkan jadwal dan mata pelajaran. Data ini memudahkan manajemen melakukan evaluasi beban kerja dan perencanaan akademik.",
              },
              appraisal: {
                title: "Penilaian Guru",
                desc: "Modul Teacher Appraisals menyediakan sistem penilaian kinerja guru secara terstruktur. Sekolah dapat menggunakan rubrik standar Edunav atau kustom untuk memastikan evaluasi dilakukan dengan objektif dan konsisten.",
              },
              substitute: {
                title: "Guru Infal",
                desc: "Fitur Substitute Teacher memudahkan penugasan guru pengganti ketika guru utama berhalangan hadir. Sistem menampilkan ketersediaan guru dan memperbarui jadwal kelas secara otomatis.",
              },
              eform: {
                title: "Disposisi Administratif (E-form)",
                desc: "Modul E-Form menyediakan sistem pengajuan digital dengan alur persetujuan yang dapat disesuaikan sesuai kebijakan sekolah. Fitur ini mendukung berbagai jenis permohonan, seperti purchase request, izin cuti staf, penggunaan fasilitas, pengajuan khusus, medical credit, dan overtime request. Semua proses tercatat secara terstruktur dan dapat dikonfigurasi sesuai kebutuhan sekolah.",
              },
              overtime: {
                title: "Informasi Lembur (E-Form)",
                desc: "Fitur ini memungkinkan guru mengajukan permintaan lembur secara formal melalui E-Form. Semua permintaan dicatat, diproses sesuai alur persetujuan, dan terdokumentasi dengan baik untuk keperluan HR dan payroll.",
              },
            },
          },
          extra: {
            title: "Fitur Ekstra",
            summary: "Komunikasi, CBT, dan fasilitas pendukung ekosistem sekolah.",
            items: {
              chat: {
                title: "Edunav Chat",
                desc: "Edunav Chat memungkinkan seluruh warga sekolah berkomunikasi langsung di dalam sistem. Secara default, staf dapat berkomunikasi dengan sesama staf, siswa dapat menghubungi guru mata pelajaran dan wali kelas, serta orang tua dapat berinteraksi dengan wali kelas. Pola komunikasi ini dapat disesuaikan sesuai kebijakan dan preferensi sekolah.",
              },
              stories: {
                title: "Edunav Stories (Media Sosial)",
                desc: "Edunav Stories berfungsi sebagai media sosial internal sekolah, mirip dengan Instagram namun bersifat privat dan hanya untuk komunitas sekolah. Guru, wali kelas, atau tim PR dapat memposting konten, sementara orang tua dan siswa dapat memberikan reaksi atau komentar untuk meningkatkan engagement.",
              },
              news: {
                title: "Berita Sekolah",
                desc: "Fitur berita digunakan untuk mempublikasikan artikel atau informasi resmi sekolah. Setiap posting dapat ditargetkan ke kelompok tertentu seperti orang tua, staf, atau siswa sehingga penyampaian informasi menjadi lebih relevan dan terarah.",
              },
              announcement: {
                title: "Pengumuman Sekolah",
                desc: "Announcement digunakan untuk menyampaikan pengumuman penting yang akan muncul dalam bentuk notifikasi dan pop-up saat pengguna login. Fitur ini memastikan pesan yang bersifat krusial dapat diterima semua pengguna tepat waktu.",
              },
              broadcast: {
                title: "Broadcast Informasi",
                desc: "Broadcast memungkinkan sekolah mengirimkan informasi massal, baik pengumuman umum maupun pemberitahuan terkait keuangan. Pesan dapat dikirim melalui berbagai channel seperti notifikasi aplikasi, email, atau WhatsApp, sehingga komunikasi dapat menjangkau seluruh komunitas sekolah dengan cepat dan efektif.",
              },
              cbt: {
                title: "Aplikasi CBT",
                // PERBAIKAN: "penilaian" -> "menilai"
                desc: "Exam Platform menyediakan sistem ujian digital yang aman dan terintegrasi dengan data akademik sekolah. Fitur keamanan mencakup cheating prevention, pemantauan kamera, dan dukungan SEB (Safe Exam Browser). Sistem mendukung berbagai tipe soal dengan penilaian otomatis, sehingga memudahkan guru membuat, memonitor, dan menilai.",
              },
              facilities: {
                title: "Sarana & Prasarana Sekolah",
                desc: "Modul Facilities membantu sekolah mengelola fasilitas seperti ruang kelas, auditorium, dan peralatan sekolah. Pengajuan dan persetujuan penggunaan fasilitas dilakukan secara digital untuk memastikan ketersediaan dan pemakaian yang teratur.",
              },
              inventory: {
                title: "Manajemen Inventaris Sekolah",
                desc: "Fitur Inventory digunakan untuk mencatat, melacak, dan mengelola aset sekolah, termasuk barang habis pakai dan peralatan pendidikan. Sistem memastikan transparansi, kontrol stok, dan efisiensi dalam proses pengadaan maupun distribusi.",
              },
              library: {
                title: "Perpustakaan Sekolah",
                desc: "Modul Library mengatur seluruh aktivitas perpustakaan, mulai dari peminjaman, pengembalian, katalog buku, hingga statistik kunjungan. Fitur ini mendukung pengelolaan perpustakaan yang modern dan mudah diakses oleh siswa serta guru.",
              },
              clinic: {
                title: "Klinik Sekolah",
                desc: "Fitur Health/Clinic mencatat informasi kesehatan siswa, termasuk pemeriksaan, pengobatan, dan catatan medis harian. Data kesehatan terpusat ini membantu sekolah memantau kesejahteraan siswa dan memastikan komunikasi cepat dengan orang tua ketika diperlukan.",
              },
            },
          },
        },
      },
      contact: {
        title: "Ajukan Demo Sistem Informasi Sekolah Edunav",
        desc: "Diskusikan dengan tim kami bagaimana Edunav dapat mendukung kebutuhan operasional dan strategi digital jangka panjang sekolah Anda.",
      },
      blog: {
        tag: "Blog & Wawasan",
        title: "Artikel Terbaru Seputar Edukasi & Teknologi",
        "sub-title": "Temukan inspirasi, tips praktis, dan studi kasus tentang transformasi digital di dunia pendidikan beserta update terbaru dari Edunav.",
        read_more: "Baca Selengkapnya",
        prev: "Sebelumnya",
        next: "Selanjutnya",
        not_found: "Artikel tidak ditemukan.",
        back_to_blog: "Kembali ke Beranda",
        featured: "Unggulan",
        latest_posts: "Artikel Terbaru",
        view_all: "Lihat Semua",
      },
      blogpost: {
        breadcrumb_home: "Beranda",
        breadcrumb_blog: "Blog",
        share_article: "Bagikan Artikel",
        share_x: "Tweet",
        share_whatsapp: "WhatsApp",
        copy_link: "Salin Link",
        copied: "Link Tersalin!",
        reading_time: "{{minutes}} menit baca",
        insight_label: "Insight Edunav",
        tags: "Tags",
        cta_eyebrow: "Edunav",
        cta_button: "Hubungi Kami",
        related: "Artikel Terkait",
        related_title: "Artikel terkait yang mungkin Anda sukai",
        view_all: "Lihat semua",
        read_more: "Baca selengkapnya",
        not_found: "Artikel tidak ditemukan",
        not_found_desc: "Halaman yang kamu cari belum tersedia atau slug artikelnya berubah.",
        back_to_blog: "Kembali ke Blog",
        cta_title: "Bangun pengalaman sekolah digital yang lebih modern.",
        cta_desc: "Lihat bagaimana Edunav membantu operasional, komunikasi, dan pembelajaran jadi lebih terintegrasi.",
      },

      // Legal Pages
      legal: {
        back_home: "Kembali ke Beranda",
      },
      privacy: {
        title: "Kebijakan Privasi",
        effective_date: "Diperbarui",
        date: "1 Januari 2025",
        intro: {
          title: "Pengantar",
          p1: "Global Zerone Digital & Edukasi Universal Indonesia (Eduversal) membangun aplikasi Edunav sebagai aplikasi Gratis. Layanan ini disediakan oleh Global Zerone Digital tanpa biaya dan dimaksudkan untuk digunakan apa adanya, terutama untuk mitra sekolah.",
          p2: "Halaman ini digunakan untuk menginformasikan pengunjung mengenai kebijakan kami tentang pengumpulan, penggunaan, dan pengungkapan Informasi Pribadi jika ada yang memutuskan untuk menggunakan Layanan kami.",
          p3: "Jika Anda memilih untuk menggunakan Layanan kami, maka Anda menyetujui pengumpulan dan penggunaan informasi sehubungan dengan kebijakan ini. Informasi Pribadi yang kami kumpulkan digunakan untuk menyediakan dan meningkatkan Layanan. Kami tidak akan menggunakan atau membagikan informasi Anda dengan siapa pun kecuali seperti dijelaskan dalam Kebijakan Privasi ini.",
          p4: "Istilah yang digunakan dalam Kebijakan Privasi ini memiliki arti yang sama dengan Syarat dan Ketentuan, yang dapat diakses di Edunav kecuali didefinisikan lain dalam Kebijakan Privasi ini.",
        },
        collection: {
          title: "Pengumpulan dan Penggunaan Informasi",
          p1: "Untuk pengalaman yang lebih baik, saat menggunakan Layanan kami, kami mungkin meminta Anda untuk memberikan kami informasi yang dapat diidentifikasi secara pribadi, termasuk namun tidak terbatas pada Nama, Email. Informasi yang kami minta akan disimpan oleh kami dan digunakan seperti dijelaskan dalam kebijakan privasi ini.",
          p2: "Aplikasi ini menggunakan layanan pihak ketiga yang dapat mengumpulkan informasi yang digunakan untuk mengidentifikasi Anda.",
          link_title: "Tautan ke kebijakan privasi penyedia layanan pihak ketiga yang digunakan oleh aplikasi",
          service1: "Google Play Services",
          service2: "Google Analytics untuk Firebase",
        },
        log_data: {
          title: "Data Log",
          p1: "Kami ingin menginformasikan kepada Anda bahwa setiap kali Anda menggunakan Layanan kami, jika terjadi kesalahan dalam aplikasi, kami mengumpulkan data dan informasi (melalui produk pihak ketiga) di ponsel Anda yang disebut Data Log. Data Log ini dapat mencakup informasi seperti alamat Protokol Internet (\"IP\") perangkat Anda, nama perangkat, versi sistem operasi, konfigurasi aplikasi saat menggunakan Layanan kami, waktu dan tanggal penggunaan Layanan Anda, dan statistik lainnya.",
        },
        cookies: {
          title: "Cookies",
          p1: "Cookies adalah file dengan sejumlah kecil data yang umumnya digunakan sebagai pengenal unik anonim. Ini dikirim ke browser Anda dari situs web yang Anda kunjungi dan disimpan di memori internal perangkat Anda.",
          p2: "Layanan ini tidak menggunakan \"cookies\" secara eksplisit. Namun, aplikasi ini dapat menggunakan kode dan pustaka pihak ketiga yang menggunakan \"cookies\" untuk mengumpulkan informasi dan meningkatkan layanan mereka. Anda memiliki opsi untuk menerima atau menolak cookies ini dan mengetahui kapan cookie dikirim ke perangkat Anda. Jika Anda memilih untuk menolak cookies kami, Anda mungkin tidak dapat menggunakan beberapa bagian Layanan ini.",
        },
        service_providers: {
          title: "Penyedia Layanan",
          p1: "Kami dapat menggunakan perusahaan dan individu pihak ketiga karena alasan berikut:",
          reason1: "Untuk memfasilitasi Layanan kami;",
          reason2: "Untuk menyediakan Layanan atas nama kami;",
          reason3: "Untuk melakukan layanan terkait Layanan; atau",
          reason4: "Untuk membantu kami menganalisis bagaimana Layanan kami digunakan.",
          p2: "Kami ingin menginformasikan kepada pengguna Layanan ini bahwa pihak ketiga memiliki akses ke Informasi Pribadi Anda. Alasannya adalah untuk melakukan tugas yang ditugaskan kepada mereka atas nama kami. Namun, mereka berkewajiban untuk tidak mengungkapkan atau menggunakan informasi untuk tujuan lain.",
        },
        security: {
          title: "Keamanan",
          p1: "Kami menghargai kepercayaan Anda dalam memberikan Informasi Pribadi kepada kami, sehingga kami berusaha menggunakan cara yang dapat diterima secara komersial untuk melindunginya. Namun, ingatlah bahwa tidak ada metode transmisi melalui internet, atau metode penyimpanan elektronik yang 100% aman dan andal, dan kami tidak dapat menjamin keamanan mutlaknya.",
        },
        links: {
          title: "Tautan ke Situs Lain",
          p1: "Layanan ini mungkin berisi tautan ke situs lain. Jika Anda mengklik tautan pihak ketiga, Anda akan diarahkan ke situs tersebut. Perhatikan bahwa situs eksternal ini tidak dioperasikan oleh kami. Oleh karena itu, kami sangat menyarankan Anda untuk meninjau Kebijakan Privasi dari situs web ini. Kami tidak memiliki kontrol atas dan tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik situs atau layanan pihak ketiga mana pun.",
        },
        children: {
          title: "Privasi Anak-Anak",
          p1: "Layanan ini tidak ditujukan kepada siapa pun di bawah usia 13 tahun. Kami tidak sengaja mengumpulkan informasi yang dapat diidentifikasi secara pribadi dari anak di bawah 13 tahun. Jika kami menemukan bahwa anak di bawah 13 tahun telah memberikan kami informasi pribadi, kami segera menghapusnya dari server kami. Jika Anda adalah orang tua atau wali dan Anda mengetahui bahwa anak Anda telah memberikan kami informasi pribadi, silakan hubungi kami agar kami dapat melakukan tindakan yang diperlukan.",
        },
        changes: {
          title: "Perubahan Kebijakan Privasi Ini",
          p1: "Kami mungkin memperbarui Kebijakan Privasi kami dari waktu ke waktu. Oleh karena itu, disarankan untuk meninjau halaman ini secara berkala untuk setiap perubahan. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi baru di halaman ini.",
          p2: "Kebijakan yang diperbarui ini berlaku sejak",
        },
        contact: {
          title: "Hubungi Kami",
          p1: "Jika Anda memiliki pertanyaan atau saran tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami di",
        },
      },
      tos: {
        title: "Syarat dan Ketentuan",
        effective_date: "Diperbarui",
        date: "1 Januari 2025",
        intro: {
          title: "Pengantar",
          p1: "Selamat datang di Edunav. Dengan menggunakan Layanan kami, Anda menyetujui Syarat dan Ketentuan ini. Harap baca dengan seksama.",
        },
        use: {
          title: "Penggunaan Layanan",
          p1: "Edunav disediakan sebagai aplikasi Gratis untuk mitra sekolah. Anda menyetujui untuk menggunakan Layanan hanya untuk tujuan yang sah dan sesuai dengan Syarat ini.",
        },
        account: {
          title: "Akun Pengguna",
          p1: "Anda bertanggung jawab untuk menjaga kerahasiaan kredensial akun Anda dan untuk semua aktivitas yang terjadi di bawah akun Anda.",
        },
        data: {
          title: "Data dan Privasi",
          p1: "Penggunaan Layanan Anda juga diatur oleh Kebijakan Privasi kami, yang dapat ditemukan di halaman Kebijakan Privasi.",
        },
        termination: {
          title: "Penghentian",
          p1: "Kami berhak untuk menangguhkan atau menghentikan akses Anda ke Layanan kapan saja dengan alasan apa pun tanpa pemberitahuan.",
        },
        changes: {
          title: "Perubahan Syarat",
          p1: "Kami mungkin memperbarui Syarat ini dari waktu ke waktu. Penggunaan Layanan yang berlanjut setelah perubahan merupakan penerimaan Syarat baru.",
        },
        contact: {
          title: "Hubungi Kami",
          p1: "Untuk pertanyaan apa pun tentang Syarat ini, silakan hubungi kami di",
        },
      },
      cookies: {
        title: "Kebijakan Cookies",
        effective_date: "Diperbarui",
        date: "1 Januari 2025",
        intro: {
          title: "Apa itu Cookies",
          p1: "Cookies adalah file teks kecil yang ditempatkan di perangkat Anda saat Anda mengunjungi Layanan kami. Mereka membantu kami memberikan pengalaman yang lebih baik.",
        },
        how_use: {
          title: "Bagaimana Kami Menggunakan Cookies",
          p1: "Kami menggunakan cookies untuk tujuan berikut:",
          reason1: "Untuk mengingat preferensi Anda",
          reason2: "Untuk menganalisis penggunaan Layanan",
          reason3: "Untuk meningkatkan kinerja Layanan",
        },
        third_party: {
          title: "Cookies Pihak Ketiga",
          p1: "Layanan kami mungkin menggunakan layanan pihak ketiga yang menggunakan cookies, seperti Google Analytics. Anda dapat mengelola preferensi cookie melalui pengaturan browser Anda.",
        },
        manage: {
          title: "Mengelola Cookies",
          p1: "Anda dapat mengontrol dan mengelola cookies dengan berbagai cara. Harap dicatat bahwa menghapus atau memblokir cookies dapat memengaruhi pengalaman pengguna Anda dan beberapa fitur mungkin tidak berfungsi dengan baik.",
        },
        contact: {
          title: "Hubungi Kami",
          p1: "Untuk pertanyaan apa pun tentang penggunaan cookies kami, silakan hubungi kami di",
        },
      },
    },
  },

  // --- BAHASA INGGRIS (Completed) ---
  en: {
    translation: {
      meta: {
        title:
          "Edunav | Integrated School Information System & Academic Management",
        desc: "Discover Edunav, your trusted school digital transformation partner. Secure & integrated school management information system solutions.",
      },
      navbar: {
        home: "Home",
        about: "About",
        benefit: "Benefits",
        features: "Features",
        partners: "Partners",
        blog: "Blogs",
        faq: "FAQ",
        contact: "Contact",
        btn_demo: "Free Demo",
        btn_login: "Login",
      },
      hero: {
        title: "School Information System for Modern Educational Institutions",
        desc: "Edunav is an integrated school information system designed to support academic management, school administration, communication, and financial operations in one secure and scalable platform. Edunav is built to support real-world school operations, institutional governance, and long-term digital transformation.",
        btn_demo: "Request a Free Demo",
        btn_zoom: "Schedule via WA/Zoom",
      },
      counter: {
        title1:
          "Trusted School Information System Used Across Indonesia and Asia",
        desc: "Edunav is actively used by educational institutions with different school models, curricula, and operational needs. With over 10 years of dedication, we remain committed to supporting school digital transformation in Indonesia.",
        country: "Countries",
        school: "Schools",
        user: "Active Users",
        tenant: "Tenant",
      },
      whyChooseUs: {
        hook: "Why Choose Edunav?",
        title: "One Integrated School Management System for All School Needs",
        desc: "Edunav consolidates multiple school systems into one integrated school information system, eliminating fragmented tools and manual processes.",
        card: {
          card1: "Academic and learning management",
          card2: "School administration workflows",
          card3: "Student assessment and reporting",
          card4: "Communication between school and parents",
          card5: "School finance and billing",
          card6: "Institutional monitoring and reporting",
        },
        desc2:
          "This unified approach improves efficiency, transparency, and data consistency.",
      },
      benefit: {
        title: "What are the benefits of EDUNAV?",
        desc: "EDUNAV helps schools manage information efficiently and in real-time. With modern features and an interactive interface, this application supports productivity and transparency in educational administration.",
        btn_brosur: "Download Brochure",
        btn_simulator: "Price Simulator",
        point: {
          point1: "Student Enrollment System",
          point2: "Learning Management System",
          point3: "Teacher & Student Assessment",
          point4: "Administration System",
          point5: "Finance Module",
        },
      },
      simulator: {
        title: "Edunav Subscription Simulator",
        subtitle: "Calculate estimated implementation costs for your school",
        setup_fee: {
          title: "Initial Setup Fee",
          subtitle: "System Implementation",
          description: "One-time fee for setup and configuration of Edunav system",
        },
        price_per_student: {
          title: "Price per Student",
          subtitle: "Monthly subscription",
          description: "Monthly subscription fee per student",
        },
        per_student_month: "student/month",
        students: "Students",
        student_count: {
          label: "Number of Students",
        },
        monthly_estimation: {
          label: "Monthly Estimation",
        },
        yearly_estimation: {
          label: "Yearly Estimation",
        },
        month: "month",
        year: "year",
        total_first_year: "Total First Year",
        setup_plus_12_months: "Setup + 12 Months",
        note: {
          label: "Note",
          text: "Pricing can be adjusted according to your school's needs and scale. Contact us for a special offer.",
        },
        cta_button: "Free Consultation",
      },
      edunavCommunication: {
        hook: "Edunav Chat – Parent Communication System",
        title: "Secure School Communication and Engagement",
        summary: "Real-time communication between parents, teachers, and staff in one integrated platform.",
        points: {
          1: "Send text, images, and documents like modern chat apps",
          2: "Conversation history neatly stored for reference and follow-up",
          3: "Communication patterns can be customized according to school policy",
        },
      },
      edunavExam: {
        hook: "Edunav Exam – Secure CBT Platform",
        title: "Online Examination and Computer-Based Testing System",
        summary: "Secure CBT platform with automatic grading and integrated anti-cheating features.",
        points: {
          1: "Various question types with automatic grading for quick correction",
          2: "Security features: cheating prevention, camera monitoring, SEB support",
          3: "App Pinning on mobile to prevent cheating during exams",
        },
      },
      edunavAI: {
        hook: "Edunav AI",
        title: "Assistive Artificial Intelligence for Education",
        summary: "Integrated AI technology to enhance efficiency and quality of academic processes in schools.",
        pointAI: {
          point1: "Automated lesson plan generation",
          point2: "Scheduling assistance",
          point3: "IELTS, TOEFL, and IGCSE preparation tests",
          point4: "Mathematics evaluation with quick and accurate analysis",
        },
      },
      edunavPayment: {
        hook: "Edunav Finance",
        title: "Payment Gateway Integration",
        summary: "Pay school bills directly from the app with various payment methods.",
        points: {
          1: "Support bank transfer, e-wallet, PayPal, and credit cards",
          2: "Custom integration with partner banks if needed",
          3: "Transactions recorded automatically with real-time monitoring",
        },
      },
      Partners: {
        tag: "Trusted Partners",
        title: "Building Digital Education in Indonesia with 175+ Schools",
        desc: "Edunav is trusted by the best educational institutions in Indonesia for integrated, secure, and modern school management digital transformation.",
        carousel_title: "Trusted by the Best Schools",
        sekolah_garuda: {
          badge: "National Achievement",
          title: "Sekolah Garuda 2026",
          desc: "EDUNAV is proud to partner with Indonesia's top schools that successfully passed the selection for the Superior Senior High School Garuda Transformation program by the Ministry of Higher Education, Science, and Technology.",
          subtitle: "Congratulations to the following schools:",
        },
      },
      testimonials: {
        title: "What Do They Say About Edunav?",
        testi1: {
          name: "Redi Rahmat",
          title: "PE Teacher",
          company: "Kharisma Bangsa School",
          content:
            "Edunav makes teaching administration much faster and neater at Kharisma Bangsa School. Attendance, lesson plans, grading, and report cards that used to be manual are now integrated and automated. I can monitor student progress easily and focus on the learning process, not administrative work. Edunav truly increases teacher work efficiency.",
        },
        testi2: {
          name: "Adib",
          title: "Math Teacher & Counselor",
          company: "Fatih Bilingual School",
          content:
            "Edunav LMS is very helpful for the learning process inside and outside the classroom. Teachers can provide materials, evaluations, and monitor student progress easily, while parents can follow their child's development in real-time. Homeroom administration features, counseling guidance, to the red card and green card system make monitoring student behavior and development much more structured. Edunav truly facilitates teachers, students, and parents in the entire learning process.",
        },
        testi3: {
          name: "Akbar Dermawan Sinaga",
          title: "Academic Staff",
          company: "Fatih Bilingual School",
          content:
            "Edunav presents a complete and integrated academic system at Fatih Bilingual School. Teachers can create lesson plans, upload materials, assign tasks, and grade directly on the platform. Homeroom teachers easily monitor student progress through guidance features, career planning, to the green card and red card system. Attendance is automatically connected with fingerprints, and parents can monitor their child's development anytime. Edunav facilitates the entire learning and school management process.",
        },
      },
      faq: {
        hook: "Q&A",
        title: "Frequently Asked Questions",
        desc: "Find quick answers regarding features, security, and Edunav services here.",
        other: "Have other questions?",
        question1: {
          question: "What is Edunav?",
          answer:
            "Edunav is an integrated school management information system that helps digitalize administration, academics, and communication between schools and parents in one platform.",
        },
        question2: {
          question: "How much is the Edunav subscription?",
          answer:
            "Edunav uses an annual/monthly subscription scheme with costs adjusted to the number of students and school feature needs. To get the most accurate price quote, schools can fill out the “Free Demo” form and the Edunav team will provide an official proposal according to the institution's profile.",
        },
        question3: {
          question:
            "Does Edunav support various curricula (Merdeka, Cambridge, IB, etc.)?",
          answer:
            "Yes, Edunav supports the Merdeka Curriculum as well as international curricula like Cambridge and IB through lesson plan features, academic management, and flexible report card layout creation. The system also supports special needs such as Quranic programs, career planning, to IELTS, TOEFL, and IGCSE preparation with other application integrations.",
        },
        question4: {
          question: "How long is the Edunav implementation process?",
          answer:
            "Implementation time depends on the number of students, data complexity, and activated modules, but generally starts from a few weeks to several months. The Edunav team will assist in the data migration process, curriculum configuration, teacher training, and testing before the system is fully used.",
        },
        question5: {
          question:
            "Can Edunav be integrated with fingerprint, WhatsApp, and payment gateways?",
          answer:
            "Yes, Edunav supports integration with fingerprint machines for attendance, third-party WhatsApp notification services, and various payment gateways for school bill payments. All transactions and integration data are recorded automatically in the system for easy monitoring by school management.",
        },
        question6: {
          question: "How secure is school data in Edunav?",
          answer:
            "Edunav uses enterprise-level encryption and automatic backup systems to protect school academic and financial data. Access rights are also arranged based on roles so that only authorized parties can view or change certain data.",
        },
        question7: {
          question: "Who can access Edunav (teachers, students, parents)?",
          answer:
            "Edunav provides separate access for teachers, students, and parents so that each user only sees relevant features and information. Parents can monitor attendance, grades, and child development in real-time through the provided application or portal.",
        },
      },
      footer: {
        desc: "Integrated School Information System for Modern Educational Institutions",
        menu1: "Contact Us",
        menu2: "Available on",
        menu3: "Registered at",
        copyright:
          "Copyright Ⓒ 2025, PT Global Zerone Digital. All Rights Reserved.",
      },

      //-------------- Features of Edunav -----------------
      features: {
        title_small: "School Information System",
        title_main: "Edunav Feature Details",
        categories: {
          managerial: {
            title: "Managerial Features",
            summary: "Centralized management control for foundations and institutions with integrated monitoring.",
            items: {
              dashboard: {
                title: "Foundation Dashboard",
                desc: "For foundations or institutions with multiple tenants, Edunav provides an HQ Dashboard as a centralized monitoring center for all schools in one integrated view. This dashboard presents real-time academic, financial, attendance, and operational data for each campus. Information between schools can be easily compared to see trends, performance, and areas needing attention. This feature is designed to help central management make data-driven strategic decisions quickly and accurately.",
              },
              admission: {
                title: "New Student Admission",
                desc: "The Admission Module manages the entire new student admission process, from registration, data verification, to reporting. Every stage is recorded digitally to ensure the PPDB process runs efficiently, transparently, and is well-documented.",
              },
              appraisal: {
                title: "Appraisal Module",
                desc: "The Appraisals Module provides a structured and transparent performance appraisal system for teachers and staff. Schools can use Edunav's standard rubrics or customize them to internal policies to ensure evaluations are conducted objectively and consistently.",
              },
              student_survey: {
                title: "Student Survey",
                desc: "The Student Survey feature allows schools to collect student feedback regarding learning experiences, school comfort, and learning quality. The collected data helps management evaluate and improve services.",
              },
              parent_survey: {
                title: "Parent Survey",
                desc: "The Parent Survey provides a structured way for schools to gather input from parents regarding academic and non-academic services. Each survey can be tailored to the school's preferences and needs to ensure the relevance of collected data. Survey results provide valuable insights to strengthen communication, improve service quality, and drive overall parent satisfaction.",
              },
              finance: {
                title: "School Finance",
                desc: "The Finance Module provides school financial management ranging from transactions, budgeting, reporting, to a digital payment system with multi-bank channels. All financial data is accurately recorded and accessible in reports ready for audit and evaluation.",
              },
            },
          },
          operational: {
            title: "Operational Features",
            summary: "Manage schedules, classes, and school operations with integrated systems.",
            items: {
              calendar: {
                title: "Academic Calendar",
                desc: "Academic Calendars allow schools to set the official academic calendar, including school days, exams, and holidays. All schedules are automatically synchronized to other modules so that teachers, students, and parents always receive accurate information.",
              },
              class_mgmt: {
                title: "Class Management",
                desc: "This feature is used to create and manage the class structure for each academic year. Each class is directly connected to student data, homeroom teachers, subjects, and schedules, serving as the main foundation for academic management in Edunav. This system ensures class information is neatly organized, integrated, and ready for all school academic processes.",
              },
              lesson_mgmt: {
                title: "Lesson Management",
                desc: "Schools can define the list of subjects and their learning structures. Lessons created will serve as a reference for teachers in teaching, assessment, and semester report preparation.",
              },
              course_mgmt: {
                title: "Subject Management",
                desc: "Courses are created to link subjects with teachers, classes, students, and schedules. Through this feature, all learning activities such as grading, attendance, and lesson plans are integrated into one digital workspace.",
              },
              schedule: {
                title: "Class Schedule",
                desc: "The Schedule Module provides flexible learning schedule settings with schedule clash detection. The created schedule will be displayed to all users and synchronized directly with the Attendance and Course modules.",
              },
              extra_curricular: {
                title: "Co-curricular & Extracurricular Management",
                desc: "This feature is used to create and manage extracurricular activities or student clubs. Each club has a schedule, person in charge (PIC), and a grading system that can be displayed on report cards.",
              },
              project_mgmt: {
                title: "Project Management",
                desc: "Schools can create academic or co-curricular projects involving many students and teachers. Each project has its own assessment indicators and can be monitored in a structured way throughout the semester.",
              },
              wa_notif: {
                title: "WA Notification (3rd party)",
                desc: "This feature allows schools to send automated messages via WhatsApp with third-party API integration. Notifications are sent for important information such as attendance, admission, finance, and medical treatment.",
              },
            },
          },
          academic: {
            title: "Academic Features",
            summary: "Manage learning, assessment, and reporting in a digital ecosystem.",
            items: {
              lesson_plan: {
                title: "Lesson Plan Management",
                desc: "The Lesson Plan feature helps teachers structure learning plans and connects directly with the teaching LMS. Documents can be reviewed by management, and the approval flow can be adjusted to school policies to ensure lesson planning quality.",
              },
              lms: {
                title: "LMS",
                desc: "The LMS provides a digital space for teaching materials, assignments, student work submission, and class communication. All learning activities are documented and can be monitored by teachers, management, and parents.",
              },
              syllabus: {
                title: "Syllabus/Material",
                desc: "The Syllabus Module allows schools to set curriculum, learning outcomes, and material structure for each subject. Teachers use the syllabus as a reference for classroom activities.",
              },
              attendance: {
                title: "Presence & Attendance",
                desc: "The Attendance feature records student presence daily or per learning session. Attendance data is integrated with schedules, report card modules, and WhatsApp notifications for unexplained absences.",
              },
              journal: {
                title: "Journal and Reflection",
                desc: "Journals function as daily teacher learning activity records related to class activities, student progress, and teaching agendas. These notes support academic evaluation and internal school reporting.",
              },
              gradebook: {
                title: "Gradebook",
                desc: "The Gradebook allows teachers to manage student grades for various types of assessments. The system supports automatic calculations, grade weight settings, and report card generation.",
              },
              report: {
                title: "School Report Card",
                desc: "The Reporting Module manages the entire report card creation process from grade input, comments, attendance, to printing. Report card templates and layouts can be customized and configured according to school standards or specific curricula.",
              },
            },
          },
          student: {
            title: "Student Features",
            summary: "Monitor student progress from attendance to academic achievement.",
            items: {
              entry: {
                title: "Student Entry",
                desc: "The Student Entry feature allows schools to monitor student activity when entering or leaving school premises. All attendance data is automatically recorded in the system to support security and daily monitoring. This feature can connect with school attendance devices, including fingerprint, face recognition, and RFID scanner.",
              },
              clubs: {
                title: "Clubs & Extracurriculars",
                desc: "The Clubs Module allows students to view extracurricular activities they participate in, including schedules, grades, and comments from the PIC. This information is also connected to student progress reports.",
              },
              house: {
                title: "House System",
                desc: "The Housing feature is used to manage the house system, which divides students into groups to build camaraderie and competition. Each student is placed in one house throughout their school time. Each house has its own identity, such as the name of a figure, animal, or color. Through this feature, schools can record house members, activities, and point acquisition from various competitions. This system helps foster spirit, student character, and cooperation among members.",
              },
              permissions: {
                title: "Student Permissions",
                desc: "The Permissions Module helps manage student permission requests, such as early dismissal, leave, or special activities. The approval process is done digitally and clearly documented.",
              },
              discipline: {
                title: "Discipline Points",
                desc: "The Discipline feature records student disciplinary violations or awards through a point or card system. Discipline data is used for monitoring character development and can be displayed on report cards if needed.",
              },
              career: {
                title: "Student Career Mapping",
                desc: "The Career Planning Module helps students plan academic and career goals, such as university targets, portfolios, and consultation notes. This feature supports more targeted guidance by guidance counselors or school counselors.",
              },
              quranic: {
                title: "Islamic School Program (Tahfidz)",
                desc: "The Quranic Program feature helps schools manage Quranic learning development at school, including memorization, reading, and attendance. The system supports Tahfidz, Tahsin, and Khatam programs, which can be adjusted to the school program. All student progress is recorded structurally and can be displayed in learning reports.",
              },
            },
          },
          teacher: {
            title: "Teacher & Homeroom Features",
            summary: "Support teacher productivity with assessment and administration tools.",
            items: {
              portfolio: {
                title: "Teacher Portfolio",
                desc: "The Portfolios Module stores teachers' professional history, including certificates, teaching experience, and other supporting documents. This feature helps schools monitor competency development and teacher development needs.",
              },
              workload: {
                title: "Teacher Teaching Load",
                desc: "The Teaching Loads feature displays the distribution of teaching hours for each teacher based on schedules and subjects. This data makes it easier for management to evaluate workloads and academic planning.",
              },
              appraisal: {
                title: "Teacher Appraisal",
                desc: "The Teacher Appraisals Module provides a structured teacher performance appraisal system. Schools can use Edunav's standard rubrics or custom ones to ensure evaluations are conducted objectively and consistently.",
              },
              substitute: {
                title: "Substitute Teacher",
                desc: "The Substitute Teacher feature facilitates the assignment of substitute teachers when the main teacher is unable to attend. The system displays teacher availability and automatically updates class schedules.",
              },
              eform: {
                title: "Administrative Disposition (E-form)",
                desc: "The E-Form Module provides a digital submission system with an approval flow that can be adjusted according to school policy. This feature supports various types of requests, such as purchase requests, staff leave, facility usage, special submissions, medical credit, and overtime requests. All processes are recorded structurally and can be configured according to school needs.",
              },
              overtime: {
                title: "Overtime Information (E-Form)",
                desc: "This feature allows teachers to formally submit overtime requests via E-Form. All requests are recorded, processed according to the approval flow, and well-documented for HR and payroll purposes.",
              },
            },
          },
          extra: {
            title: "Extra Features",
            summary: "Communication, CBT, and facilities supporting the school ecosystem.",
            items: {
              chat: {
                title: "Edunav Chat",
                desc: "Edunav Chat allows the entire school community to communicate directly within the system. By default, staff can communicate with fellow staff, students can contact subject teachers and homeroom teachers, and parents can interact with homeroom teachers. This communication pattern can be adjusted according to school policies and preferences.",
              },
              stories: {
                title: "Edunav Stories (Social Media)",
                desc: "Edunav Stories functions as the school's internal social media, similar to Instagram but private and only for the school community. Teachers, homeroom teachers, or the PR team can post content, while parents and students can react or comment to increase engagement.",
              },
              news: {
                title: "School News",
                desc: "The News feature is used to publish articles or official school information. Each post can be targeted to specific groups such as parents, staff, or students so that information delivery becomes more relevant and targeted.",
              },
              announcement: {
                title: "School Announcement",
                desc: "Announcements are used to convey important announcements that will appear as notifications and pop-ups when users log in. This feature ensures crucial messages are received by all users on time.",
              },
              broadcast: {
                title: "Information Broadcast",
                desc: "Broadcast allows schools to send mass information, both general announcements and finance-related notifications. Messages can be sent through various channels such as app notifications, email, or WhatsApp, so communication can reach the entire school community quickly and effectively.",
              },
              cbt: {
                title: "CBT Application",
                desc: "The Exam Platform provides a secure digital exam system integrated with school academic data. Security features include cheating prevention, camera monitoring, and SEB (Safe Exam Browser) support. The system supports various question types with automatic grading, making it easier for teachers to create, monitor, and grade.",
              },
              facilities: {
                title: "School Facilities & Infrastructure",
                desc: "The Facilities Module helps schools manage facilities such as classrooms, auditoriums, and school equipment. Requests and approvals for facility usage are done digitally to ensure availability and orderly use.",
              },
              inventory: {
                title: "School Inventory Management",
                desc: "The Inventory feature is used to record, track, and manage school assets, including consumables and educational equipment. The system ensures transparency, stock control, and efficiency in procurement and distribution processes.",
              },
              library: {
                title: "School Library",
                desc: "The Library Module manages all library activities, from borrowing, returning, book catalogs, to visit statistics. This feature supports modern library management that is easily accessible to students and teachers.",
              },
              clinic: {
                title: "School Clinic",
                desc: "The Health/Clinic feature records student health information, including check-ups, treatment, and daily medical records. This centralized health data helps schools monitor student well-being and ensures quick communication with parents when needed.",
              },
            },
          },
        },
      },
      //------------ End Features of Edunav ----------------
      contact: {
        title: "Request a Demo of the Edunav School Information System",
        desc: "Talk to our team to explore how Edunav can support your school’s operational needs and long-term digital strategy.",
      },
      blog: {
        tag: "Blog & Insights",
        title: "Latest Articles on Education & Technology",
        "sub-title": "Discover inspiration, practical tips, and case studies on digital transformation in education along with the latest updates from Edunav.",
        read_more: "Read More",
        prev: "Prev",
        next: "Next",
        not_found: "Article not found.",
        back_to_blog: "Back to Home",
        featured: "Featured",
        latest_posts: "Latest Posts",
        view_all: "View All",
      },
      blogpost: {
        breadcrumb_home: "Home",
        breadcrumb_blog: "Blog",
        share_article: "Share Article",
        share_x: "Tweet",
        share_whatsapp: "WhatsApp",
        copy_link: "Copy Link",
        copied: "Link Copied!",
        reading_time: "{{minutes}} min read",
        insight_label: "Edunav Insight",
        tags: "Tags",
        cta_eyebrow: "Edunav",
        cta_button: "Contact Us",
        related: "Related Articles",
        related_title: "Related articles you may like",
        view_all: "View all",
        read_more: "Read more",
        not_found: "Article not found",
        not_found_desc: "The page you are looking for is unavailable or the article slug has changed.",
        back_to_blog: "Back to Blog",
        cta_title: "Build a more modern digital school experience.",
        cta_desc: "See how Edunav helps operations, communication, and learning work in one integrated system.",
      },

      // Legal Pages
      legal: {
        back_home: "Back to Home",
      },
      privacy: {
        title: "Privacy Policy",
        effective_date: "Updated",
        date: "1 January 2025",
        intro: {
          title: "Introduction",
          p1: "Global Zerone Digital & Edukasi Universal Indonesia (Eduversal) built the Edunav app as a Free app. This SERVICE is provided by Global Zerone Digital at no cost and is intended for use as is, especially for school partners.",
          p2: "This page is used to inform visitors regarding our policies regarding the collection, use, and disclosure of Personal Information if anyone decided to use our Service.",
          p3: "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
          p4: "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Edunav unless otherwise defined in this Privacy Policy.",
        },
        collection: {
          title: "Information Collection and Use",
          p1: "For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Name, Email. The information that we request will be retained by us and used as described in this privacy policy.",
          p2: "The app does use third-party services that may collect information used to identify you.",
          link_title: "Link to the privacy policy of third-party service providers used by the app",
          service1: "Google Play Services",
          service2: "Google Analytics for Firebase",
        },
        log_data: {
          title: "Log Data",
          p1: "We want to inform you that whenever you use our Service, in case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (\"IP\") address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.",
        },
        cookies: {
          title: "Cookies",
          p1: "Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.",
          p2: "This Service does not use these \"cookies\" explicitly. However, the app may use third party code and libraries that use \"cookies\" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.",
        },
        service_providers: {
          title: "Service Providers",
          p1: "We may employ third-party companies and individuals due to the following reasons:",
          reason1: "To facilitate our Service;",
          reason2: "To provide the Service on our behalf;",
          reason3: "To perform Service-related services; or",
          reason4: "To assist us in analyzing how our Service is used.",
          p2: "We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.",
        },
        security: {
          title: "Security",
          p1: "We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.",
        },
        links: {
          title: "Links to Other Sites",
          p1: "This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",
        },
        children: {
          title: "Children's Privacy",
          p1: "These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.",
        },
        changes: {
          title: "Changes to This Privacy Policy",
          p1: "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.",
          p2: "This updated policy is effective as of",
        },
        contact: {
          title: "Contact Us",
          p1: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at",
        },
      },
      tos: {
        title: "Terms of Service",
        effective_date: "Updated",
        date: "1 January 2025",
        intro: {
          title: "Introduction",
          p1: "Welcome to Edunav. By using our Service, you agree to these Terms of Service. Please read them carefully.",
        },
        use: {
          title: "Use of Service",
          p1: "Edunav is provided as a Free app for school partners. You agree to use the Service only for lawful purposes and in accordance with these Terms.",
        },
        account: {
          title: "User Accounts",
          p1: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
        },
        data: {
          title: "Data and Privacy",
          p1: "Your use of the Service is also governed by our Privacy Policy, which can be found at the Privacy Policy page.",
        },
        termination: {
          title: "Termination",
          p1: "We reserve the right to suspend or terminate your access to the Service at any time for any reason without notice.",
        },
        changes: {
          title: "Changes to Terms",
          p1: "We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the new Terms.",
        },
        contact: {
          title: "Contact Us",
          p1: "For any questions about these Terms, please contact us at",
        },
      },
      cookies: {
        title: "Cookies Policy",
        effective_date: "Updated",
        date: "1 January 2025",
        intro: {
          title: "What Are Cookies",
          p1: "Cookies are small text files that are placed on your device when you visit our Service. They help us provide you with a better experience.",
        },
        how_use: {
          title: "How We Use Cookies",
          p1: "We use cookies for the following purposes:",
          reason1: "To remember your preferences",
          reason2: "To analyze Service usage",
          reason3: "To improve Service performance",
        },
        third_party: {
          title: "Third-Party Cookies",
          p1: "Our Service may use third-party services that use cookies, such as Google Analytics. You can manage your cookie preferences through your browser settings.",
        },
        manage: {
          title: "Managing Cookies",
          p1: "You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and some features may no longer function properly.",
        },
        contact: {
          title: "Contact Us",
          p1: "For any questions about our use of cookies, please contact us at",
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "id",
    lng: "id", // Set default language explicitly to avoid hydration mismatch
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Only use localStorage/sessionStorage for language detection
      order: ['localStorage', 'sessionStorage'],
      // Don't use browser language detector to avoid SSR mismatch
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
  });

export default i18n;
