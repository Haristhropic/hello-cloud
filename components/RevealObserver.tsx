"use client";

import { useEffect } from "react";

/**
 * Penggerak animasi scroll-reveal.
 *
 * - Menambahkan kelas "js" ke <html>: CSS hanya menyembunyikan elemen
 *   [data-reveal] / [data-reveal-grid] saat kelas "js" ada, sehingga tanpa
 *   JavaScript seluruh konten tetap terlihat (fallback aman / SEO).
 * - Mengamati elemen [data-reveal] dan [data-reveal-grid]. Saat elemen
 *   masuk viewport, kelas "is-visible" ditambahkan permanen lalu observer
 *   dilepas: animasi berjalan sekali, tidak berulang.
 * - Tanpa dukungan IntersectionObserver, semua target langsung diberi
 *   "is-visible" (konten tampil statis).
 * - prefers-reduced-motion ditangani sepenuhnya di CSS; komponen ini tidak
 *   perlu cek tambahan karena aturan hide/reveal hanya aktif pada media
 *   "prefers-reduced-motion: no-preference".
 */
export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal], [data-reveal-grid]",
      ),
    );

    root.classList.add("js");

    if (!("IntersectionObserver" in window)) {
      for (const el of targets) el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of targets) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return null;
}