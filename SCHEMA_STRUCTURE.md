# Edunav Schema.org Structure Overview

## Schema File Architecture

```
src/lib/
├── schemas.ts                 # Central export point
├── ai-schema.ts              # HowTo, EducationalOrganization, ItemList
├── article-schema.ts         # Article, BlogPosting generators
├── legal-schema.ts           # Legal page schemas (NEW)
├── blog-listing-schema.ts    # CollectionPage, ItemList for blogs (NEW)
└── partner-contact-schema.ts # Partner network, contact schemas (NEW)
```

## Page → Schema Mapping

```
┌─────────────────────────────────────────────────────────────┐
│                        Homepage (/)                          │
├─────────────────────────────────────────────────────────────┤
│ ✅ Organization (existing)                                   │
│ ✅ WebSite (existing)                                        │
│ ✅ SoftwareApplication (existing)                            │
│ ✅ EducationalOrganization (existing)                       │
│ ✅ HowTo schemas (existing)                                 │
│ ✅ FAQPage (existing)                                        │
│ ✅ ItemList features (existing)                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              Legal Pages (/legal/*)                          │
├─────────────────────────────────────────────────────────────┤
│ NEW: WebPage with specialty                                 │
│      ├── PrivacyPolicy                                      │
│      ├── TermsOfService                                     │
│      └── CookiesPolicy                                      │
│ NEW: Organization context (company info)                    │
│ NEW: BreadcrumbList                                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│               Blog Section (/#blog)                          │
├─────────────────────────────────────────────────────────────┤
│ NEW: CollectionPage (blog listing)                         │
│ NEW: ItemList (alternative approach)                        │
│ NEW: BlogPosting[] (hasPart array)                          │
│ ┌─────────────────────────────────────────────────────┐   │
│ │ Dynamic injection via useEffect                       │   │
│ │ Updates on page change                               │   │
│ └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│               Blog Post (/blog/[slug])                       │
├─────────────────────────────────────────────────────────────┤
│ ✅ Article (existing)                                         │
│ ✅ BreadcrumbList (existing)                                 │
│ ✅ Person author (existing)                                  │
│ ✅ Organization publisher (existing)                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              Partners Section (/#partners)                   │
├─────────────────────────────────────────────────────────────┤
│ NEW: WebPageElement                                         │
│ NEW: EducationalOrganization[] (member array)               │
│ NEW: AggregateRating                                        │
│ ┌─────────────────────────────────────────────────────┐   │
│ │ All 32 partner schools included                      │   │
│ │ Logos as image URLs                                  │   │
│ └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                Contact Section (/#contact)                    │
├─────────────────────────────────────────────────────────────┤
│ NEW: WebPageElement                                         │
│ NEW: ContactPoint                                           │
│     ├── Telephone: +62-813-7000-0299                       │
│     ├── Email: info@zerone.id                               │
│     ├── HoursAvailable (Mon-Fri, Sat)                       │
│     └── Languages: Indonesian, English                      │
│ NEW: Action (Demo Request)                                  │
│ NEW: Action (Zoom Demo)                                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   FAQ Section (/#faq)                        │
├─────────────────────────────────────────────────────────────┤
│ NEW: FAQPage                                                 │
│     ├── Question[] (7 questions)                             │
│     └── AcceptedAnswer[] for each                            │
│ ┌─────────────────────────────────────────────────────┐   │
│ │ Dynamic injection with i18n support                 │   │
│ │ Updates on language change                          │   │
│ └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Schema.org Types Used

| Type | Usage | AI Search Benefit |
|------|-------|-------------------|
| `Organization` | Company info | Entity recognition |
| `WebSite` | Site metadata | Brand knowledge panel |
| `SoftwareApplication` | Edunav app | Software rich results |
| `EducationalOrganization` | Partner schools | Industry context |
| `HowTo` | Step-by-step guides | Actionable answers |
| `FAQPage` | Q&A content | FAQ rich snippets |
| `Article`/`BlogPosting` | Blog posts | Article rich results |
| `CollectionPage` | Blog listing | Content discovery |
| `ItemList` | Lists of items | List rich results |
| `ContactPoint` | Contact info | Local business panel |
| `Action` | CTAs | Action buttons in SERP |
| `AggregateRating` | Reviews | Star ratings |
| `BreadcrumbList` | Navigation | Breadcrumb rich results |

## Injection Methods

### Static (Server Components)
```tsx
import Script from "next/script";
import { legalPageSchemas } from "@/src/lib/schemas";

<Script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

### Dynamic (Client Components)
```tsx
useEffect(() => {
  const schema = generateSchema();
  let script = document.getElementById("id") as HTMLScriptElement;
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schema);
}, [dependencies]);
```

## Benefits

1. **AI Search Optimization**: Perplexity, ChatGPT Search, Google AI Overviews
2. **Rich Results**: Star ratings, breadcrumbs, FAQs in SERP
3. **Knowledge Graph**: Entity recognition for brand
4. **Voice Search**: Better answers for voice queries
5. **Accessibility**: Structured data helps screen readers
