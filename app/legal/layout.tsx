import { Metadata } from "next";

const SITE_URL = "https://www.edunav.net";

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      siteName: "Edunav",
    },
    twitter: {
      card: "summary",
      site: "@edunav_id",
    },
  };
}

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
