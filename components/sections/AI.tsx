export default function AI() {
  return (
    <section id="ai" className="section section-tint">
      <div className="page-container">
        <h2>AI dan masa depan Cloud Engineering</h2>
        <p className="lead">
          <strong>AI bukan alasan untuk tidak belajar cloud.</strong> Justru
          Cloud Engineer perlu belajar bekerja bersama AI.
        </p>

        <div className="ai-grid">
          <article className="card ai-card">
            <h3>Yang bisa dibantu AI</h3>
            <ul className="check-list">
              <li>Menulis script dan configuration lebih cepat</li>
              <li>Mempercepat troubleshooting awal</li>
              <li>Membantu dokumentasi</li>
              <li>Menyarankan pola atau contoh kode</li>
            </ul>
          </article>
          <article className="card ai-card">
            <h3>Yang tetap menjadi tanggung jawab manusia</h3>
            <ul className="check-list">
              <li>Memeriksa hasil kerja AI</li>
              <li>Keputusan keamanan dan hak akses</li>
              <li>Desain arsitektur dan trade-off biaya</li>
              <li>Menjamin reliability sistem</li>
            </ul>
          </article>
        </div>

        <div
          className="workflow-box"
          role="img"
          aria-label="Contoh alur kerja dengan AI: AI membuatkan Terraform, lalu engineer memeriksa permission, security, cost, dan reliability sebelum deploy"
        >
          <p>
            AI membuatkan Terraform{" "}
            <span aria-hidden="true">
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="m7.5 1 4.5 4.5L7.5 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            engineer memeriksa permission{" "}
            <span aria-hidden="true">
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="m7.5 1 4.5 4.5L7.5 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            security{" "}
            <span aria-hidden="true">
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="m7.5 1 4.5 4.5L7.5 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            cost{" "}
            <span aria-hidden="true">
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="m7.5 1 4.5 4.5L7.5 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            reliability{" "}
            <span aria-hidden="true">
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="m7.5 1 4.5 4.5L7.5 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            deploy dengan aman
          </p>
        </div>

        <div className="note-box">
          <strong>Aturan emas:</strong> jangan copy-paste infrastructure code
          dari AI tanpa memahami dampaknya. Pahami dulu, baru jalankan.
        </div>
      </div>
    </section>
  );
}