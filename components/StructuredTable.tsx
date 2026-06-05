// components/StructuredTable.tsx
/**
 * Structured Tables untuk AI Visibility
 * Membantu AI memahami konten tabel dengan schema markup
 */

import Script from "next/script";

interface StructuredTableProps {
  data: {
    headers: string[];
    rows: Array<{
      cells: string[];
      description?: string;
    }>;
  };
  tableName: string;
  description?: string;
}

/**
 * Table Schema untuk JSON-LD
 */
function generateTableSchema(tableName: string, data: StructuredTableProps["data"], description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Table",
    "@id": `https://www.edunav.net/#table-${tableName.toLowerCase().replace(/\s+/g, "-")}`,
    name: tableName,
    description: description || `${tableName} untuk Edunav - Sistem Informasi Sekolah`,
    about: {
      "@type": "SoftwareApplication",
      name: "Edunav",
      applicationCategory: "EducationalApplication",
      url: "https://www.edunav.net",
    },
  };
}

/**
 * Structured Table Component dengan AI-optimized markup
 */
export function StructuredTable({ data, tableName, description }: StructuredTableProps) {
  const tableSchema = generateTableSchema(tableName, data);

  return (
    <>
      {/* JSON-LD Table Schema */}
      <Script
        id={`table-schema-${tableName.toLowerCase().replace(/\s+/g, "-")}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tableSchema) }}
      />

      {/* Accessible Table with proper headers */}
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table
          className="w-full border-collapse"
          aria-label={tableName}
          role="table"
        >
          <caption className="sr-only">
            {description || tableName}
          </caption>
          <thead className="bg-slate-50">
            <tr>
              {data.headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-semibold text-slate-900"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-3 text-sm text-slate-700"
                    dangerouslySetInnerHTML={{ __html: cell }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/**
 * Predefined feature comparison table
 */
export const FeatureComparisonData = {
  headers: ["Fitur", "Edunav Basic", "Edunav Pro", "Edunav Enterprise"],
  rows: [
    {
      cells: [
        "<strong>Manajemen Akademik</strong>",
        "✓",
        "✓",
        "✓",
      ],
      description: "Kelola kurikulum, lesson plan, nilai, dan rapor",
    },
    {
      cells: [
        "<strong>Learning Management System</strong>",
        "✓",
        "✓",
        "✓",
      ],
      description: "Platform pembelajaran online dengan materi dan tugas",
    },
    {
      cells: [
        "<strong>Sistem Keuangan</strong>",
        "Basic",
        "✓",
        "✓",
      ],
      description: "Manajemen SPP, pembayaran, dan laporan keuangan",
    },
    {
      cells: [
        "<strong>Komunikasi Orang Tua</strong>",
        "✓",
        "✓",
        "✓",
      ],
      description: "Chat terintegrasi antara sekolah dan orang tua",
    },
    {
      cells: [
        "<strong>CBT & Ujian Online</strong>",
        "50 siswa/ujian",
        "Unlimited",
        "Unlimited",
      ],
      description: "Sistem ujian berbasis komputer dengan anti-kecurangan",
    },
    {
      cells: [
        "<strong>Edunav AI</strong>",
        "-",
        "✓",
        "✓",
      ],
      description: "Asisten AI untuk pembuatan RPP dan persiapan tes",
    },
    {
      cells: [
        "<strong>Multi-Kampus</strong>",
        "-",
        "-",
        "✓",
      ],
      description: "Dashboard yayasan untuk monitoring multi sekolah",
    },
    {
      cells: [
        "<strong>Custom Integration</strong>",
        "-",
        "-",
        "✓",
      ],
      description: "Integrasi khusus dengan sistem existing",
    },
    {
      cells: [
        "<strong>SLA Support</strong>",
        "Email",
        "Email & WhatsApp",
        "24/7 Priority",
      ],
      description: "Dukungan teknis sesuai level paket",
    },
  ],
};

/**
 * Curriculum Support Table
 */
export const CurriculumSupportData = {
  headers: ["Kurikulum", "Dukungan", "Fitur Tambahan"],
  rows: [
    {
      cells: [
        "<strong>Kurikulum Merdeka</strong>",
        "✓ Full Support",
        "RPP otomatis, profil pelajar, projek p5",
      ],
    },
    {
      cells: [
        "<strong>Cambridge (CAIE)</strong>",
        "✓ Full Support",
        "Cambridge format reporting, checkpoint tracking",
      ],
    },
    {
      cells: [
        "<strong>IB (International Baccalaureate)</strong>",
        "✓ Full Support",
        "MYP/DP reporting, CAS tracking, EE management",
      ],
    },
    {
      cells: [
        "<strong>National Curriculum</strong>",
        "✓ Full Support",
        "Flexible reporting templates",
      ],
    },
    {
      cells: [
        "<strong>Custom Curriculum</strong>",
        "✓ Available",
        "Buat kurikulum sesuai kebutuhan sekolah",
      ],
    },
  ],
};
