// src/i18n/config.ts
// Supported locales
export const locales = ['id', 'en'] as const;
export type Locale = (typeof locales)[number];

// Default locale
export const defaultLocale: Locale = 'id';

// Locale names
export const localeNames: Record<Locale, string> = {
  id: 'Bahasa Indonesia',
  en: 'English',
};

// Locale regions for Indonesia + Asia target
export const localeRegions: Record<Locale, string> = {
  id: 'ID',
  en: 'SG', // Singapore as primary English market in Asia
};
