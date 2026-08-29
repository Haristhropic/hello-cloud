# Cloud Engineer — Website Edukasi Karier

Website edukasi statis seputar profesi Cloud Engineer, dibangun dengan Next.js (App Router), React, TypeScript, dan Tailwind CSS v4. Ramah untuk siswa SMP dan orang tua, berbahasa Indonesia, aksesibel (WCAG AA).

## Teknologi

- **Next.js 16** dengan `output: "export"` — build menghasilkan folder statis murni di `out/`
- **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (PostCSS)
- **Font Figtree** via `next/font` (self-hosted saat build, tanpa request eksternal)
- **JSON-LD FAQPage**, `sitemap.xml`, `robots.txt` otomatis

## Cara menjalankan

```bash
npm install
npm run dev        # development, http://localhost:3000
npm run build      # produksi statis -> out/
npm run lint       # eslint
```

## Deploy

Build menghasilkan folder statis murni di `out/` — bisa dideploy ke hosting statis apa pun:

- **Vercel / Netlify**: hubungkan repo, framework preset "Next.js" otomatis terdeteksi (`output: export`).
- **Hosting statis lain (nginx, cPanel, S3, dll)**: unggah isi folder `out/` ke document root. `index.html` dan `404.html` sudah tersedia. Aktifkan fallback ke `404.html` untuk route yang tidak dikenal.
- **GitHub Pages**: build lalu publish `out/` (mis. lewat workflow `peaceiris/actions-gh-pages`).

> Catatan: karena `output: "export"`, situs ini murni statis — tanpa server runtime. Semua route (termasuk yang tampak dinamis seperti kuis) berjalan sepenuhnya di browser.

## Struktur

```
app/          layout, metadata, sitemap, robots, globals.css
components/   Header, Footer, ui (Container) + 15 section situs
public/       aset statis (favicon via app/icon.svg)
out/          hasil build statis (jangan diedit manual)
```