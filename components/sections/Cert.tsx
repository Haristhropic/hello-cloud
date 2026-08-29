export default function Cert() {
  return (
    <section id="sertifikasi" className="section section-tint">
      <div className="page-container">
        <h2>
          Tidak ada satu sertifikasi yang wajib untuk menjadi Cloud Engineer
        </h2>
        <p className="lead">
          Sertifikasi adalah bukti tambahan atas pengetahuan kamu. Portfolio,
          pengalaman praktik, dan pemahaman dasar tetap yang utama.
        </p>

        <div className="cert-group">
          <h3 className="block-title">Level 1 - Fundamental (opsional)</h3>
          <div className="cert-grid">
            <article className="card cert-card">
              <h4>AWS Certified Cloud Practitioner</h4>
              <p>
                Paham dasar AWS dan konsep cloud. Cocok untuk orang tanpa
                pengalaman IT. Periksa halaman resmi AWS untuk status bahasa
                dan detail ujian terbaru.
              </p>
              <a
                className="resource-link"
                href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
                target="_blank"
                rel="noopener"
              >
                Lihat di situs AWS
              </a>
            </article>
            <article className="card cert-card">
              <h4>Microsoft Azure Fundamentals (AZ-900)</h4>
              <p>
                Cloud concepts, layanan Azure, dan governance. Level beginner
                dari Microsoft.
              </p>
              <a
                className="resource-link"
                href="https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
                target="_blank"
                rel="noopener"
              >
                Lihat di Microsoft Learn
              </a>
            </article>
            <article className="card cert-card">
              <h4>Google Cloud Digital Leader</h4>
              <p>
                Literasi cloud dan bisnis: bagaimana layanan cloud membantu
                organisasi. Lebih ke pemahaman, bukan validasi skill teknis.
              </p>
              <a
                className="resource-link"
                href="https://cloud.google.com/learn/certification/cloud-digital-leader"
                target="_blank"
                rel="noopener"
              >
                Lihat di Google Cloud
              </a>
            </article>
          </div>
        </div>

        <div className="cert-group">
          <h3 className="block-title">
            Level 2 - Associate (lebih dekat ke dunia kerja)
          </h3>
          <div className="cert-grid">
            <article className="card cert-card">
              <h4>AWS Certified Solutions Architect - Associate</h4>
              <p>
                Menguji kemampuan merancang solusi AWS dengan pertimbangan
                biaya dan performa. Disarankan sekitar 1 tahun pengalaman
                hands-on.
              </p>
              <a
                className="resource-link"
                href="https://aws.amazon.com/certification/certified-solutions-architect-associate/"
                target="_blank"
                rel="noopener"
              >
                Lihat di situs AWS
              </a>
            </article>
            <article className="card cert-card">
              <h4>Microsoft Azure Administrator Associate (AZ-104)</h4>
              <p>
                Administrasi cloud: identity, governance, storage, compute,
                networking, security, dan monitoring.
              </p>
              <a
                className="resource-link"
                href="https://learn.microsoft.com/credentials/certifications/azure-administrator/"
                target="_blank"
                rel="noopener"
              >
                Lihat di Microsoft Learn
              </a>
            </article>
            <article className="card cert-card">
              <h4>Google Associate Cloud Engineer</h4>
              <p>
                Deploy dan mengamankan aplikasi serta infrastruktur. Google
                menyarankan 6+ bulan pengalaman hands-on dulu.
              </p>
              <a
                className="resource-link"
                href="https://cloud.google.com/learn/certification/cloud-engineer"
                target="_blank"
                rel="noopener"
              >
                Lihat di Google Cloud
              </a>
            </article>
          </div>
        </div>

        <h3 className="block-title">Sertifikasi mana yang tepat untukmu?</h3>
        <div className="decision-tree">
          <div className="decision-row">
            <p className="decision-q">&quot;Saya masih SMP&quot;</p>
            <p className="decision-a">
              Jangan kejar sertifikasi profesional dulu. Fokus pada fundamental
              dan project kecil.
            </p>
          </div>
          <div className="decision-row">
            <p className="decision-q">&quot;Saya baru mengenal cloud&quot;</p>
            <p className="decision-a">
              Sertifikasi fundamental bersifat opsional, setelah kamu paham
              konsep dasarnya.
            </p>
          </div>
          <div className="decision-row">
            <p className="decision-q">
              &quot;Saya sudah punya project dan dasar Linux/networking&quot;
            </p>
            <p className="decision-a">
              Pertimbangkan satu sertifikasi Associate sesuai provider yang
              kamu pelajari.
            </p>
          </div>
          <div className="decision-row">
            <p className="decision-q">&quot;Saya sudah bekerja di cloud&quot;</p>
            <p className="decision-a">
              Pilih sertifikasi sesuai role dan gap skill yang kamu butuhkan.
            </p>
          </div>
        </div>

        <div className="note-box note-warn">
          <strong>Jangan lakukan ini:</strong> jangan mengumpulkan banyak
          sertifikat tanpa praktik, jangan menganggap sertifikat pasti dapat
          kerja, jangan membeli dump soal ilegal, dan jangan mengejar
          sertifikasi mahal sebelum memahami fundamental. Detail ujian, bahasa,
          harga, dan status bisa berubah. Selalu cek halaman resmi provider.{" "}
          <em>Last verified: 2026-08-29</em>
        </div>
      </div>
    </section>
  );
}