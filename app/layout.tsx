import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=devices,wifi,cloud,apps&display=block"
          rel="stylesheet"
        />
        {/* Netralkan default ukuran font Google (24px) yang berada di luar
            cascade layer, agar aturan station-icon di globals.css menang. */}
        <style>{`.material-symbols-outlined { font-size: inherit; }
        .station-glyph .station-icon { font-size: 2.8rem; }
        .flow-station.is-cloud .station-glyph .station-icon { font-size: 3.1rem; }`}</style>
      </head>
      <body>
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