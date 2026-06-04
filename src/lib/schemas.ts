// src/lib/schemas.ts
/**
 * Central export point for all schema generators
 * Import from here for easy access to all schema types
 */

// AI Search schemas
export {
  howToStartEdunav,
  howToUseLMS,
  howToParentMonitoring,
  educationalOrganizationSchema,
  featuresListSchema,
  generateHowToSchema,
  type HowToStep,
  type HowToSchema,
} from './ai-schema';

// Article schemas
export {
  generateArticleSchema,
  generateBlogPostingSchema,
  articleSchemas,
  getHomepageArticleSchemas,
  type ArticleSchemaInput,
} from './article-schema';

// Legal page schemas
export {
  generateLegalPageSchema,
  generatePrivacyPolicySchema,
  generateTermsOfServiceSchema,
  generateCookiesPolicySchema,
  legalPageSchemas,
  getLegalPageSchema,
  type LegalPageSchemaInput,
} from './legal-schema';

// Blog listing schemas
export {
  generateBlogCollectionSchema,
  generateBlogItemListSchema,
  generateBlogDataFeedSchema,
  type BlogPostForSchema,
} from './blog-listing-schema';

// Partner & Contact schemas
export {
  generatePartnerAggregateSchema,
  generatePartnerNetworkSchema,
  generateContactPointSchema,
  generateDemoActionSchema,
  generateZoomDemoActionSchema,
  generatePartnersSectionSchema,
  generateContactSectionSchema,
  type PartnerSchool,
} from './partner-contact-schema';
