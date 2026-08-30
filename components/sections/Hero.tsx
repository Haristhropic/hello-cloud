export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="page-container hero-grid">
        <div className="hero-copy">
          <h1>
            Cloud Engineer: Orang di Balik Layanan Digital yang Kita Pakai
            Setiap Hari
          </h1>
          <p className="hero-sub">
            Pelajari apa yang dikerjakan Cloud Engineer, skill yang harus
            dibangun, roadmap belajar dari nol, dan peluang karier di Indonesia
            maupun dunia.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#cloud">
              Mulai dari Dasar
            </a>
            <a className="btn btn-outline" href="#roadmap">
              Lihat Roadmap
            </a>
          </div>
        </div>
        <div
          className="hero-flow"
          role="img"
          aria-label="Diagram alur: HP atau laptop terhubung ke internet, lalu ke cloud, lalu ke aplikasi"
        >
          <div className="flow-node">HP / Laptop</div>
          <span className="flow-arrow" aria-hidden="true">
            <svg
              width="22"
              height="14"
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7h15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="m11 1 6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="flow-node">Internet</div>
          <span className="flow-arrow" aria-hidden="true">
            <svg
              width="22"
              height="14"
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7h15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="m11 1 6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="flow-node" data-accent>
            <span className="flow-flag" aria-hidden="true">
              <svg
                width="14"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="1.5"
                  width="1.8"
                  height="13"
                  rx="0.9"
                  fill="#161616"
                />
                <rect x="4.8" y="2.5" width="7.6" height="3.2" fill="#E63312" />
                <rect x="4.8" y="5.7" width="7.6" height="3.2" fill="#FFFFFF" />
              </svg>
            </span>
            Cloud
          </div>
          <span className="flow-arrow" aria-hidden="true">
            <svg
              width="22"
              height="14"
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7h15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="m11 1 6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="flow-node">Aplikasi</div>
        </div>
        <p className="flow-caption">
          Alur sederhana: perangkatmu memakai layanan cloud lewat internet.
        </p>
      </div>
    </section>
  );
}