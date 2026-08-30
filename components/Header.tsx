"use client";

import { useRef } from "react";

const NAV_LINKS = [
  { href: "#cloud", label: "Kenalan" },
  { href: "#kerja", label: "Kerja" },
  { href: "#skill", label: "Skill" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#belajar", label: "Belajar" },
  { href: "#sertifikasi", label: "Sertifikasi" },
  { href: "#peluang", label: "Peluang" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const navToggleRef = useRef<HTMLInputElement>(null);

  function closeOnLinkClick(event: React.MouseEvent<HTMLElement>) {
    const toggle = navToggleRef.current;
    if ((event.target as HTMLElement).closest("a") && toggle) {
      toggle.checked = false;
    }
  }

  return (
    <header className="site-header">
      <div className="nav-inner">
        <a className="brand" href="#hero" aria-label="Ke bagian atas halaman">
          <span className="brand-mark" aria-hidden="true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1" y="1" width="22" height="22" rx="6" fill="#0057FF" />
              <circle cx="17.5" cy="5.5" r="2.4" fill="#FF4D00" />
              <rect x="5.5" y="4" width="2" height="16" rx="1" fill="#161616" />
              <rect x="7.5" y="5.5" width="10" height="4.6" fill="#E63312" />
              <rect x="7.5" y="10.1" width="10" height="4.6" fill="#FFFFFF" />
            </svg>
          </span>
          <span className="brand-text">
            Cloud <strong>Engineer</strong>
          </span>
        </a>
        <input
          ref={navToggleRef}
          type="checkbox"
          id="nav-toggle"
          className="nav-toggle-input"
          aria-label="Buka atau tutup menu navigasi"
        />
        <label className="nav-toggle-btn" htmlFor="nav-toggle">
          <svg
            className="icon-open"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 6h16M3 11h16M3 16h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="icon-close"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="m5 5 12 12M17 5 5 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </label>
        <nav className="nav-links" aria-label="Navigasi utama" onClick={closeOnLinkClick}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}