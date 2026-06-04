// components/HreflangTags.tsx
import Head from 'next/head';
import { generateHreflangs, type HrefLang } from '../src/lib/hreflang';

interface HreflangTagsProps {
  path: string;
  baseUrl?: string;
}

export function HreflangTags({ path = '', baseUrl = 'https://www.edunav.net' }: HreflangTagsProps) {
  const hreflangs = generateHreflangs(path, baseUrl);

  return (
    <>
      {hreflangs.map((hreflang) => (
        <link
          key={hreflang.locale}
          rel="alternate"
          hrefLang={hreflang.locale}
          href={hreflang.url}
        />
      ))}
    </>
  );
}

// For use with Next.js metadata API
export function generateHreflangMetadatas(path: string, baseUrl: string = 'https://www.edunav.net') {
  const hreflangs = generateHreflangs(path, baseUrl);

  return {
    alternates: {
      canonical: hreflangs.find((h) => h.locale === 'id')?.url || baseUrl,
      languages: Object.fromEntries(
        hreflangs
          .filter((h) => h.locale !== 'x-default')
          .map((h) => [h.locale, h.url])
      ),
    },
  };
}
