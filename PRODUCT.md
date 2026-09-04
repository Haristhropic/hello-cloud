# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pengunjung utama adalah pemula total di Indonesia: orang yang baru pertama kali mendengar istilah "Cloud Engineer", belum bekerja di IT (atau baru mulai), dan sedang mencari tahu apa itu Cloud Engineer serta bagaimana memulai dari nol. Bahasa utama: Bahasa Indonesia.

## Product Purpose

Satu halaman web statis (landing/guide page) yang menjelaskan profesi Cloud Engineer secara utuh — apa itu, apa yang dikerjakan, kenapa, keterampilan yang dibutuhkan, jalur belajar berurutan dari nol, sertifikasi, konteks industri Indonesia, dampak AI, dan langkah pertama — dengan sumber yang dapat diverifikasi. Keberhasilan = pengunjung pemula memahami jalurnya dan tahu langkah pertamanya.

## Positioning

Panduan utuh dari nol dalam Bahasa Indonesia: satu sumber yang menyusun seluruh perjalanan "pemula total → Cloud Engineer" secara berurutan dan realistis, berbeda dari tutorial online yang tersebar dan tidak disusun sebagai satu jalur.

## Operating Context

Pembaca membuka halaman dari ponsel atau desktop, membaca berurutan dari atas ke bawah melalui 15 bagian: Hero, Cloud, Work, Why, Skill, StartHere, Roadmap, Learn, Cert, Industry, AI, Quiz, FAQ, CTA, Sources. Beberapa bagian interaktif: menu hamburger di mobile, tab pada Roadmap, pohon keterampilan berurutan pada Skill, dan kuis interaktif pada Quiz. Bagian Sources menautkan sumber fakta. Halaman dapat dicetak (print stylesheet).

## Capabilities and Constraints

- Halaman statis dibangun dengan Next.js (static export) dan di-deploy ke Vercel; tidak ada backend.
- Desain saat ini didefinisikan lewat CSS custom properties (token warna, radius, dsb.) di `app/globals.css`.
- Redesign menyeluruh disetujui: tampilan boleh dirombak total, namun konten dan fakta produk dipertahankan, dan semua interaksi yang ada WAJIB tetap berfungsi: reveal animation (berjalan di semua perangkat, termasuk saat `prefers-reduced-motion` — keputusan pemilik sebelumnya), menu hamburger mobile, tab Roadmap, kuis interaktif, dan `@media print`.
- `.js` gating (konten yang hanya muncul setelah JS aktif) harus tetap utuh.
- Fakta karier/industri tidak boleh diubah atau dibuat-buat.

## Brand Commitments

- Nama/topik: "Cloud Engineer" (halaman panduan karier).
- Bahasa Indonesia adalah bahasa utama; nada penjelasan tenang dan jelas.
- Keputusan pemilik sebelumnya yang mengikat: tidak ada dark mode; tidak ada emoji.
- Belum ada logo, aset merek, atau identitas visual lain yang mengikat — tampilan lama adalah anti-referensi dan boleh diganti sepenuhnya.

## Evidence on Hand

- Konten nyata 15 bagian (definisi, pekerjaan, alasan, pohon keterampilan 0–9, roadmap bertahap, materi belajar, sertifikasi, industri Indonesia, dampak AI, kuis, FAQ, ajakan, sumber).
- Bagian Sources dengan tautan sumber fakta.
- Tidak ada testimoni, studi kasus, pelanggan, atau angka komersial — hal-hal ini tidak boleh dibuat-buat.

## Product Principles

1. Panduan utuh dari nol: seluruh isi tersusun sebagai satu perjalanan berurutan dari "pemula total" sampai "siap kerja"; setiap bagian menjawab "lalu apa?".
2. Kebenaran lokal Indonesia: konteks industri, sertifikasi, dan peluang disajikan untuk pembaca Indonesia; inilah pembeda dari konten global.
3. Kejelasan adalah kepercayaan: pemula harus paham tanpa jargon; pendidikan didahulukan dari gaya.
4. Klaim dapat diverifikasi: fakta karier/industri selalu bisa ditelusuri ke sumber (bagian Sources).
5. Interaksi melayani pemahaman: quiz, tab, dan pohon keterampilan ada agar konsep melekat; fungsinya tidak boleh dikorbankan demi tampilan.

## Accessibility & Inclusion

- Semua interaksi wajib tetap berfungsi (hamburger, tab, kuis, reveal animation — termasuk pada `prefers-reduced-motion`).
- Struktur semantik HTML dipertahankan; konten tetap terbaca tanpa JavaScript yang tidak penting (`.js` gating dijaga).