"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Geser fokus ke target anchor setelah scroll selesai.
 *
 * Meniru perilaku bawaan browser saat navigasi hash, yang memindahkan fokus
 * ke tujuan. Tanpa ini, pengguna keyboard dan screen reader tetap berada di
 * link navigasi padahal isi halaman sudah berganti. `preventScroll` mencegah
 * focus memicu scroll kedua yang menimpa animasi Lenis.
 */
function focusTarget(target: HTMLElement) {
  // Atribut tabindex ini juga penanda bahwa pembersihannya masih tertunda:
  // selama fokus belum pindah, blur belum terjadi, jadi jangan daftarkan
  // listener kedua pada target yang sama.
  if (target.getAttribute("tabindex") !== "-1") {
    target.setAttribute("tabindex", "-1");
    target.addEventListener(
      "blur",
      () => target.removeAttribute("tabindex"),
      { once: true },
    );
  }
  target.focus({ preventScroll: true });
}

/**
 * Smooth scroll global (Lenis).
 *
 * - `smoothWheel: true` + `syncTouch: false` (default): hanya roda tetikus
 *   yang dihaluskan. Layar sentuh tetap memakai momentum scroll bawaan
 *   sistem, yang sudah halus dan jauh lebih stabil daripada simulasi JS
 *   (syncTouch diketahui tidak stabil di iOS < 16). Hasilnya:onus terasa di
 *   laptop/desktop, tetap responsif di HP/tablet.
 * - `autoRaf: true`: Lenis menjalankan loop requestAnimationFrame-nya sendiri
 *   dan menghentikannya pada destroy(), jadi tidak ada loop yang harus
 *   dibersihkan manual di sini.
 * - `respectReducedMotion` (default true): bila pengguna memilih reduced
 *   motion, interpolasi dimatikan dan scroll programmatic menjadi instan.
 * - `lerp` (bukan duration/easing): interpolasi bebas framerate, jadi rasa
 *   scroll tetap sama di layar 60Hz maupun 120Hz.
 *
 * Anchor hash ditangani manual di bawah, bukan lewat opsi `anchors` milik
 * Lenis: handler bawaan itu memanggil scrollTo() tanpa preventDefault(),
 * sehingga browser tetap melakukan fragment jump dan dua gerakan saling
 * menimpa. Ketinggalan header sticky sendiri sudah ditangani Lenis, karena
 * scrollTo() membaca `scroll-padding-top` dan `scroll-margin-top` dari
 * computed style — nilai yang sama dengan fallback CSS tanpa JavaScript.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.1,
      autoRaf: true,
    });

    function onClick(event: MouseEvent) {
      // Klik dengan tombol modifier adalah urusan browser (tab baru, dll).
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const link =
        event.target instanceof Element
          ? event.target.closest("a[href]")
          : null;
      const hash = link?.getAttribute("href");
      if (!hash || hash.length < 2 || hash.charAt(0) !== "#") return;

      const target = document.getElementById(
        decodeURIComponent(hash.slice(1)),
      );
      // Target tidak ada: biarkan browser yang menangani, jangan dicegat.
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target);
      // Samakan perilaku bawaan browser: URL ikut berubah.
      history.pushState(null, "", hash);
      focusTarget(target);
    }

    function onPopState() {
      const { hash } = window.location;
      const target =
        hash.length > 1
          ? document.getElementById(decodeURIComponent(hash.slice(1)))
          : null;
      lenis.scrollTo(target ?? 0);
    }

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPopState);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
      lenis.destroy();
    };
  }, []);

  return null;
}
