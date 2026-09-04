/**
 * Halaman 404 — "jalur putus".
 * Panel kendali cloud kehilangan rute: paket data berhenti di depan
 * tanda silang merah. Memakai grammar visual diagram rute hero
 * (garis putus biru, nomor stasiun, kotak data asam) agar tetap
 * satu dunia dengan beranda.
 */
export default function NotFound() {
  return (
    <section className="section notfound-section">
      <div className="page-container page-container-narrow">
        <p className="nf-kicker" aria-hidden="true">
          <span className="nf-chip">404</span> Rute tidak ditemukan
        </p>
        <p className="nf-code" aria-hidden="true">
          404
        </p>
        <h1 className="nf-title">Halaman tidak ditemukan</h1>
        <p className="nf-lead">
          Paket data kamu terhenti di jalur kosong — tidak ada rute menuju
          halaman ini. Alamatnya mungkin salah ketik, atau halamannya sudah
          dipindahkan.
        </p>

        <div
          className="nf-route"
          role="img"
          aria-label="Diagram jalur layanan yang terputus: paket data berhenti sebelum tanda silang merah"
        >
          <svg
            width="520"
            height="100"
            viewBox="0 0 520 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Ruas jalur sebelum putus */}
            <path
              d="M24 52H330"
              stroke="#0057FF"
              strokeWidth="3"
              strokeDasharray="10 8"
              strokeLinecap="round"
            />
            {/* Ruas jalur putus dengan opacity rendah */}
            <path
              d="M390 52H482"
              stroke="#0057FF"
              strokeOpacity="0.3"
              strokeWidth="3"
              strokeDasharray="10 8"
              strokeLinecap="round"
            />

            {/* Stasiun 01 dan 02 */}
            <circle cx="88" cy="52" r="8" fill="#F4F3EF" stroke="#161616" strokeWidth="2.5" />
            <text x="88" y="84" className="nf-svg-label" textAnchor="middle">
              01
            </text>
            <circle cx="210" cy="52" r="8" fill="#F4F3EF" stroke="#161616" strokeWidth="2.5" />
            <text x="210" y="84" className="nf-svg-label" textAnchor="middle">
              02
            </text>

            {/* Paket data berhenti di ujung jalur */}
            <rect x="300" y="42" width="20" height="20" fill="#D7F32E" stroke="#161616" strokeWidth="2.5" />
            <text x="310" y="84" className="nf-svg-label" textAnchor="middle">
              paket
            </text>

            {/* Tanda silang: jalur terputus */}
            <path d="M354 41L376 63" stroke="#E63312" strokeWidth="4" strokeLinecap="round" />
            <path d="M376 41L354 63" stroke="#E63312" strokeWidth="4" strokeLinecap="round" />
            <text x="365" y="88" className="nf-svg-label" textAnchor="middle">
              putus
            </text>

            {/* Tujuan tipis yang tidak terjangkau */}
            <g transform="translate(474 34) scale(1.15)" stroke="#0057FF" strokeOpacity="0.25">
              <path
                d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
                fill="none"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>

        <div className="nf-actions">
          <a className="btn btn-primary" href="/">
            Kembali ke Beranda
          </a>
          <a className="btn btn-outline" href="/#roadmap">
            Lihat Roadmap
          </a>
        </div>
      </div>
    </section>
  );
}