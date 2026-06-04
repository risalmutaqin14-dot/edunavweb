// src/lib/partner-contact-schema.ts
/**
 * Partner & Contact Section Schema Generators
 * For partner logos carousel and contact information sections
 */

const SITE_URL = "https://www.edunav.net";

export interface PartnerSchool {
  id: number;
  name: string;
  logo?: string;
  location?: string;
  type?: 'national' | 'international' | 'bilingual';
}

/**
 * Generate AggregateRating schema for partner schools
 * Shows social proof and credibility
 */
export function generatePartnerAggregateSchema(partnerCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    name: "Edunav Partner Schools",
    bestRating: 5,
    worstRating: 1,
    ratingValue: "4.8",
    ratingCount: partnerCount.toString(),
    reviewCount: partnerCount.toString(),
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: "Edunav - School Management System",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web, iOS, Android",
    },
  };
}

/**
 * Generate Organization schema with multiple sameAs for partner schools
 * This helps establish credibility through association
 */
export function generatePartnerNetworkSchema(partners: PartnerSchool[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#partner-network`,
    name: "Edunav Partner Schools Network",
    description: "Network of schools using Edunav as their School Management System across Indonesia and Asia",
    url: SITE_URL,
    member: partners.slice(0, 20).map((partner) => ({
      "@type": "EducationalOrganization",
      name: partner.name,
      logo: partner.logo,
      address: partner.location
        ? {
            "@type": "PostalAddress",
            addressCountry: partner.type === 'international' ? "ID" : "ID",
            addressLocality: partner.location,
          }
        : undefined,
    })),
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "-6.2088",
        longitude: "106.8456",
        name: "Jakarta, Indonesia",
      },
      geoRadius: "2000", // km coverage
    },
  };
}

/**
 * Generate ContactPoint schema for multiple contact channels
 * Helps search engines understand all ways to contact
 */
export function generateContactPointSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "@id": `${SITE_URL}/#contact`,
    contactType: "sales",
    areaServed: "ID",
    availableLanguage: ["Indonesian", "English"],
    contactOption: ["TollFree", "WhatsApp"],
    telephone: "+62-813-7000-0299",
    email: "info@zerone.id",
    url: `${SITE_URL}/#contact`,
    description: "Hubungi Edunav untuk demo gratis sistem informasi sekolah",
    hoursAvailable: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    productSupported: {
      "@type": "SoftwareApplication",
      name: "Edunav - School Management System",
      applicationCategory: "EducationalApplication",
    },
  };
}

/**
 * Generate Action schema for "Request Demo" CTAs
 * Helps AI understand the conversion action
 */
export function generateDemoActionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Action",
    name: "Request Free Demo",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://api.whatsapp.com/send/?phone=6281370000299&text=Hi%2C+I%27d+like+to+book+an+Edunav+demo+session",
      actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
    },
    object: {
      "@type": "SoftwareApplication",
      name: "Edunav",
    },
    result: {
      "@type": "ActionResult",
      name: "Demo Scheduled",
    },
  };
}

/**
 * Generate ZoomDemoAction schema for Zoom demo requests
 */
export function generateZoomDemoActionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Action",
    name: "Schedule Zoom Demo",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://api.whatsapp.com/send/?phone=6281370000299&text=Hi%2C+I%27m+interested+in+Edunav.+Can+I+request+a+demo+via+Zoom%3F",
      actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
    },
    object: {
      "@type": "SoftwareApplication",
      name: "Edunav",
    },
    result: {
      "@type": "ActionResult",
      name: "Zoom Demo Scheduled",
    },
  };
}

/**
 * Combined schema for Partners section
 */
export function generatePartnersSectionSchema(partners: PartnerSchool[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": `${SITE_URL}/#partners-section`,
    name: "Edunav Partner Schools",
    description: "Daftar sekolah mitra Edunav yang menggunakan sistem informasi manajemen sekolah",
    isPartOf: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
    },
    about: {
      "@type": "ItemList",
      itemListElement: partners.map((p, index) => ({
        "@type": "EducationalOrganization",
        position: index + 1,
        name: p.name,
        logo: p.logo,
      })),
    },
  };
}

/**
 * Combined schema for Contact section
 */
export function generateContactSectionSchema() {
  const contactPoint = generateContactPointSchema();
  const demoAction = generateDemoActionSchema();
  const zoomAction = generateZoomDemoActionSchema();

  return {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": `${SITE_URL}/#contact-section`,
    name: "Hubungi Edunav",
    description: "Kontak sales dan dukungan untuk demo sistem informasi sekolah Edunav",
    isPartOf: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
    },
    potentialAction: [demoAction, zoomAction],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactPoint.telephone,
      email: contactPoint.email,
      contactType: contactPoint.contactType,
      availableLanguage: contactPoint.availableLanguage,
    },
  };
}
