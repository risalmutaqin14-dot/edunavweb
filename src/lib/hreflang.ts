// src/lib/hreflang.ts
import { locales, localeRegions, type Locale } from '../i18n/config';

export interface HrefLang {
  locale: string;
  url: string;
}

/**
 * Generate hreflang tags for multilingual SEO
 */
export function generateHreflangs(path: string, baseUrl: string = 'https://www.edunav.net'): HrefLang[] {
  const hreflangs: HrefLang[] = [];

  for (const locale of locales) {
    const region = localeRegions[locale];
    // locale-region format for better geo-targeting
    hreflangs.push({
      locale: `${locale}-${region}`,
      url: `${baseUrl}/${locale === 'id' ? '' : locale + '/'}${path}`.replace(/\/$/, '') || `${baseUrl}/`,
    });

    // Also add the locale-only version
    hreflangs.push({
      locale: locale,
      url: `${baseUrl}/${locale === 'id' ? '' : locale + '/'}${path}`.replace(/\/$/, '') || `${baseUrl}/`,
    });
  }

  // Add x-default for fallback
  hreflangs.push({
    locale: 'x-default',
    url: `${baseUrl}/${path}`.replace(/\/$/, '') || `${baseUrl}/`,
  });

  return hreflangs;
}

/**
 * Generate alternate language URLs for metadata
 */
export function generateAlternates(path: string, baseUrl: string = 'https://www.edunav.net') {
  const alternates: Record<string, string> = {};

  for (const locale of locales) {
    const url = `${baseUrl}/${locale === 'id' ? '' : locale + '/'}${path}`.replace(/\/$/, '') || `${baseUrl}/`;
    alternates[locale] = url;
  }

  return { alternates: { canonical: alternates.id } };
}
