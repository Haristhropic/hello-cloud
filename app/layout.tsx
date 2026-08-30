import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cloud Engineer: Orang di Balik Layanan Digital yang Kita Pakai Setiap Hari",
  description:
    "Pelajari apa itu Cloud Engineer, skill yang perlu dibangun, roadmap belajar dari nol, tempat belajar, sertifikasi, dan peluang karier di Indonesia maupun dunia.",
  metadataBase: new URL("https://hello-cloud-omega.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cloud Engineer: Orang di Balik Layanan Digital",
    description:
      "Website edukasi karier Cloud Engineer yang ramah untuk siswa SMP dan orang tua.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f3ef",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        {/* Direction contract disuntikkan sebagai HTML comment (bukan komentar
            JSX) agar survive production build dan bisa di-grep untuk seed key. */}
        <div
          aria-hidden="true"
          style={{ display: "none" }}
          dangerouslySetInnerHTML={{
            __html: `<!--
DIRECTION CONTRACT — "Swiss Cloud Panel" (IMPECCABLE PICK)
THESIS: Papan operasi cloud bernuansa neo-brutalist Swiss:
grid presisi, garis hitam tegas, blok warna datar, tipografi
grotesk geometris — tetapi materialnya liquid glass: panel
kaca buram dengan backdrop blur, highlight dalam tipis, sheen.
OWN-WORLD: kertas #f4f3ef, tinta struktural #161616, biru
sinyal #0057ff, asam #d7f32e, jingga termal #ff4d00; nomor
modul, tanda registrasi, bayangan offset keras; tanpa emoji,
tanpa mode gelap menyeluruh, tanpa motif buku sekolah.
STORY: Pengunjung memegang "panel kendali cloud": dari
"apa itu cloud" sampai "siap kerja", gulir sebagai inspeksi
modul demi modul; setiap isi disajikan dalam panel kaca yang
melayang di atas bidang warna.
FIRST VIEWPORT: panel operasi: judul display raksasa di
kertas, tanda registrasi sudut, diagram alur dalam panel
kaca, CTA bertinta tegas dengan shadow offset.
FORM: Neo-Brutalist Swiss Grid + Liquid Glass, seed c7d1902a.
FINISH: unreviewed and undocumented is unfinished; this build
ends with the finish review, the verdict, DESIGN.md, and every
shipping raster carrying its provenance.
-->`,
          }}
        />
        <a className="skip-link" href="#main">
          Langsung ke konten utama
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}