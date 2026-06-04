# Testing Guide untuk Edunav SEO & AI Visibility

## 1. JSON-LD Structured Data Testing

### Tools untuk Verifikasi:

**A. Google Rich Results Test**
1. Buka: https://search.google.com/test/rich-results
2. Masukkan URL: https://www.edunav.net
3. Klik "Test URL"
4. Cek hasil yang terdeteksi:
   - ✅ Organization
   - ✅ SoftwareApplication
   - ✅ FAQPage
   - ✅ HowTo
   - ✅ EducationalOrganization
   - ✅ Article (untuk blog pages)
   - ✅ BreadcrumbList

**B. Schema Validator**
1. Buka: https://validator.schema.org/
2. Pilih "Code" atau "URL"
3. Paste JSON-LD atau masukkan URL
4. Cek semua schema valid

**C. Chrome DevTools**
1. Buka website
2. Klik kanan → Inspect
3. Cari `<script type="application/ld+json">`
4. Copy dan validasi di validator

### Expected JSON-LD Output:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.edunav.net/#organization",
      "name": "Edunav"
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.edunav.net/#software",
      "name": "Edunav - School Management System"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [...]
    },
    {
      "@type": "HowTo",
      "name": "Cara Memulai Menggunakan Edunav"
    }
  ]
}
```

---

## 2. Flesch Readability Testing

### Tools untuk Cek:

**A. WebFX Readability Test**
1. Buka: https://www.webfx.com/tools/read-able/
2. Paste konten dari website
3. Cek skor Flesch Reading Ease
4. Target: 60+ (Standard - 8th-9th grade)

**B. Hemingway Editor**
1. Buka: https://hemingwayapp.com/
2. Paste konten
3. Cek highlight untuk kalimat panjang
4. Target: Tidak ada kalimat lebih dari 20 kata

**C. Yoast SEO (jika WordPress)**
1. Install Yoast SEO
2. Cek "Readability" tab
3. Target: SEO Good (Hijau)

### Readability Checklist:

- [ ] Kalimat rata-rata 15-20 kata
- [ ] Paragraf maksimal 4 kalimat
- [ ] Hindari kata teknis panjang
- [ ] Gunakan kata sehari-hari
- [ ] Pakai "Anda" bukan "Pengguna"

---

## 3. Page Load Time Testing

### Tools untuk Cek:

**A. Google PageSpeed Insights**
1. Buka: https://pagespeed.web.dev/
2. Masukkan URL: https://www.edunav.net
3. Cek skor Mobile dan Desktop
4. Target: 90+ untuk keduanya
5. Lihat "Core Web Vitals":
   - LCP (Largest Contentful Paint) < 2.5s
   - FID (First Input Delay) < 100ms
   - CLS (Cumulative Layout Shift) < 0.1

**B. GTmetrix**
1. Buka: https://gtmetrix.com/
2. Masukkan URL
3. Cek:
   - Fully Loaded Time < 3s
   - Total Requests < 50
   - Total Page Size < 2MB

**C. WebPageTest**
1. Buka: https://www.webpagetest.org/
2. Test dari multiple lokasi
3. Cek:
   - Time to First Byte (TTFB) < 200ms
   - Start Render < 2s
   - Speed Index < 3s

### Optimization Tips:

**Images:**
- ✅ Gunakan WebP format
- ✅ Compress images (tinypng.com)
- ✅ Lazy loading untuk gambar
- ✅ Responsive images

**Code:**
- ✅ Minify CSS dan JS
- ✅ Remove unused CSS
- ✅ Defer non-critical JS
- ✅ Use next/image optimization

**Server:**
- ✅ Enable compression (gzip/brotli)
- ✅ Use CDN
- ✅ Enable caching
- ✅ HTTP/2 or HTTP/3

---

## 4. Meta Title Testing

### Cek Meta Title:

**A. View Page Source**
1. Buka website
2. Klik kanan → View Page Source
3. Cari `<title>`
4. Hitung karakter (maks 60)

**B. Chrome DevTools**
1. Inspect → Elements
2. Cari `<head>` → `<title>`
3. Length harus < 60 karakter

**C. SERP Preview**
1. Buka: https://www.searchenginereports.net/serp-preview/
2. Test meta title dan description
3. Preview di Google Search

### Current Meta Title (Updated):
```
Edunav | Sistem Informasi Sekolah & LMS
```
**Character count:** 48 ✅ (Target: < 60)

---

## 5. Complete Checklist

Sebelum deploy ke production:

### Structured Data:
- [ ] JSON-LD valid di Schema Validator
- [ ] Rich Results Test menampilkan semua schema
- [ ] Organization info lengkap
- [ ] FAQ schema dengan minimal 5 Q&A
- [ ] HowTo schema minimal 1 guide
- [ ] Article schema untuk blog posts

### Content:
- [ ] Flesch score 60+ untuk homepage
- [ ] Flesch score 60+ untuk halaman penting
- [ ] Meta title < 60 karakter
- [ ] Meta description < 155 karakter
- [ ] Tidak ada duplicate content

### Performance:
- [ ] PageSpeed score 90+ (Mobile)
- [ ] PageSpeed score 90+ (Desktop)
- [ ] LCP < 2.5s
- [ ] Page load < 3s
- [ ] Images optimized

### SEO Basics:
- [ ] robots.txt valid
- [ ] sitemap.xml ada
- [ ] Canonical URL set
- [ ] hreflang tags untuk multi-language
- [ ] Open Graph tags lengkap
- [ ] Twitter Card tags lengkap

---

## 6. Quick Test Commands

```bash
# Test production build locally
npm run build
npm run start

# Test JSON-LD rendering
curl https://www.edunav.net | grep "application/ld+json"

# Test page load
curl -o /dev/null -s -w "%{time_total}\n" https://www.edunav.net

# Test robots.txt
curl https://www.edunav.net/robots.txt

# Test sitemap
curl https://www.edunav.net/sitemap.xml
```

---

## 7. Monitoring Tools

Setup untuk ongoing monitoring:

**A. Google Search Console**
- Add property
- Submit sitemap
- Monitor indexing errors
- Check rich results status

**B. Google Analytics**
- Track page views
- Monitor bounce rate
- Check page load time

**C. Bing Webmaster Tools**
- Add website
- Submit sitemap
- Check SEO reports

**D. Uptime monitoring**
- Setup uptime robot
- Monitor response time
- Alert if site down
