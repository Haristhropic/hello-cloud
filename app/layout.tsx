import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cloud Engineer: Orang di Balik Layanan Digital yang Kita Pakai Setiap Hari",
  description:
    "Pelajari apa itu Cloud Engineer, skill yang perlu dibangun, roadmap belajar dari nol, tempat belajar, sertifikasi, dan peluang karier di Indonesia maupun dunia.",
  metadataBase: new URL("https://cloudengineer.majalahdigital.id/"),
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
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={figtree.variable}>
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