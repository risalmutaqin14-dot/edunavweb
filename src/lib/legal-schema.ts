// src/lib/legal-schema.ts
/**
 * Legal Pages Schema Generators
 * For Privacy Policy, Terms of Service, Cookies Policy pages
 */

const SITE_URL = "https://www.edunav.net";
const ORG_NAME = "Edunav";
const ORG_URL = SITE_URL;

export interface LegalPageSchemaInput {
  pageName: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
}

/**
 * Generate WebPage schema for legal pages
 * Uses the "WebPage" type with additional properties for legal content
 */
export function generateLegalPageSchema(input: LegalPageSchemaInput) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${input.url}#webpage`,
    url: input.url,
    name: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    inLanguage: "id-ID",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: ORG_NAME,
    },
    about: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: ORG_NAME,
      url: ORG_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: ORG_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/edunav.png`,
        width: 512,
        height: 512,
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: input.pageName,
          item: input.url,
        },
      ],
    },
  };

  return schema;
}

/**
 * Privacy Policy specific schema
 * Includes additional legal context
 */
export function generatePrivacyPolicySchema(input: LegalPageSchemaInput) {
  const baseSchema = generateLegalPageSchema(input);

  return {
    ...baseSchema,
    "@type": "WebPage",
    specialty: "PrivacyPolicy",
    about: {
      "@type": "Thing",
      name: "Privacy Policy",
      description: "Policy describing how Edunav collects, uses, and protects user data",
    },
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "PT Global Zerone Digital",
      legalName: "PT Global Zerone Digital",
      description: "Provider of Edunav School Management System",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ID",
        addressRegion: "DKI Jakarta",
        addressLocality: "Jakarta",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-813-7000-0299",
        contactType: "customer service",
        email: "info@zerone.id",
        availableLanguage: ["Indonesian", "English"],
      },
    },
  };
}

/**
 * Terms of Service specific schema
 */
export function generateTermsOfServiceSchema(input: LegalPageSchemaInput) {
  const baseSchema = generateLegalPageSchema(input);

  return {
    ...baseSchema,
    "@type": "WebPage",
    specialty: "TermsOfService",
    about: {
      "@type": "Thing",
      name: "Terms of Service",
      description: "Terms and conditions governing the use of Edunav services",
    },
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "PT Global Zerone Digital",
      legalName: "PT Global Zerone Digital",
    },
  };
}

/**
 * Cookies Policy specific schema
 */
export function generateCookiesPolicySchema(input: LegalPageSchemaInput) {
  const baseSchema = generateLegalPageSchema(input);

  return {
    ...baseSchema,
    "@type": "WebPage",
    specialty: "CookiesPolicy",
    about: {
      "@type": "Thing",
      name: "Cookies Policy",
      description: "Policy describing how Edunav uses cookies and similar technologies",
    },
  };
}

// Predefined schemas for legal pages
export const legalPageSchemas = {
  privacy: generatePrivacyPolicySchema({
    pageName: "Kebijakan Privasi",
    title: "Kebijakan Privasi - Edunav",
    description: "Kebijakan privasi Edunav mengatur bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi pengguna layanan sistem informasi sekolah.",
    datePublished: "2025-01-01",
    dateModified: "2025-01-01",
    url: `${SITE_URL}/legal/privacy-policy`,
  }),

  terms: generateTermsOfServiceSchema({
    pageName: "Syarat dan Ketentuan",
    title: "Syarat dan Ketentuan - Edunav",
    description: "Syarat dan ketentuan penggunaan layanan Edunav - Sistem Informasi Manajemen Sekolah terintegrasi.",
    datePublished: "2025-01-01",
    dateModified: "2025-01-01",
    url: `${SITE_URL}/legal/term-of-services`,
  }),

  cookies: generateCookiesPolicySchema({
    pageName: "Kebijakan Cookies",
    title: "Kebijakan Cookies - Edunav",
    description: "Kebijakan penggunaan cookies pada layanan Edunav untuk meningkatkan pengalaman pengguna dan analitik.",
    datePublished: "2025-01-01",
    dateModified: "2025-01-01",
    url: `${SITE_URL}/legal/cookies-policy`,
  }),
};

export function getLegalPageSchema(pageType: 'privacy' | 'terms' | 'cookies') {
  return legalPageSchemas[pageType];
}
